import { validateQuote } from "./quote.ts";
export type QuoteEnvironment = {
  WEB3FORMS_ACCESS_KEY?: string;
  QUOTE_RATE_LIMITER?: { limit(input: { key: string }): Promise<{ success: boolean }> };
};
type Dependencies = { environment(): Promise<QuoteEnvironment>; send: typeof fetch; log: (code: string) => void };
const MAX_BODY = 24000;
const fallback = "Please email dispatch@kwclogistics.ca.";
function reply(status: number, data: object) {
  return Response.json(data, { status, headers: { "Cache-Control": "no-store", ...(status === 429 ? { "Retry-After": "60" } : {}) } });
}
export async function handleQuote(request: Request, dependencies: Dependencies) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return reply(403, { success: false, error: "Submit this form from the KWC website." });
  const contentType = request.headers.get("content-type") ?? "";
  if (!/^(multipart\/form-data|application\/x-www-form-urlencoded)(;|$)/i.test(contentType)) return reply(415, { success: false, error: "Unsupported form format." });
  if (Number(request.headers.get("content-length")) > MAX_BODY) return reply(413, { success: false, error: "The request is too large. Please shorten your notes." });
  let form: FormData;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply(400, { success: false, error: "Missing form data." });
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY) { await reader.cancel(); return reply(413, { success: false, error: "The request is too large. Please shorten your notes." }); }
      chunks.push(value);
    }
    const body = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.length; }
    form = await new Response(body, { headers: { "Content-Type": contentType } }).formData();
  } catch { return reply(400, { success: false, error: "Unable to read the form. Please reload and try again." }); }
  if (form.get("botcheck")) return reply(200, { success: true });
  const { values, errors } = validateQuote(form);
  if (Object.keys(errors).length) return reply(400, { success: false, error: "Please check the highlighted fields.", errors });
  try {
    const env = await dependencies.environment();
    const key = env.WEB3FORMS_ACCESS_KEY?.trim();
    if (!key || !env.QUOTE_RATE_LIMITER) {
      dependencies.log(!key ? "quote_missing_access_key" : "quote_missing_rate_limiter");
      return reply(503, { success: false, error: `Online quotes are temporarily unavailable. ${fallback}` });
    }
    // CF-Connecting-IP is supplied by Cloudflare at the Worker edge.
    const client = request.headers.get("cf-connecting-ip") || "local-preview";
    const limit = await env.QUOTE_RATE_LIMITER.limit({ key: `quote:${client}` });
    if (!limit.success) return reply(429, { success: false, error: "Too many requests. Please wait a minute before trying again." });
    const response = await dependencies.send("https://api.web3forms.com/submit", {
      method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, signal: AbortSignal.timeout(12000),
      body: JSON.stringify({ ...values, access_key: key, subject: `KWC freight quote — ${values.Service}`, from_name: "KWC Logistics Website", name: values.Name, email: values.Email })
    });
    const result = await response.json() as { success?: boolean };
    if (!response.ok || result.success !== true) {
      dependencies.log("quote_provider_rejected");
      return reply(502, { success: false, error: `We could not confirm your request. ${fallback}` });
    }
    return reply(200, { success: true });
  } catch {
    dependencies.log("quote_delivery_unconfirmed");
    return reply(502, { success: false, error: `We could not confirm delivery. Before resending, contact dispatch to avoid a duplicate. ${fallback}` });
  }
}
