import { getCloudflareContext } from "@opennextjs/cloudflare";
import { handleQuote, type QuoteEnvironment } from "@/lib/quote-handler";
import { previewOnly } from "@/lib/release";
export const runtime = "nodejs";
export async function POST(request: Request) {
  if (previewOnly) {
    const response = await handleQuote(request, { environment: async () => ({}), send: async () => { throw new Error("Preview delivery disabled"); }, log: () => {} });
    return response.status === 503 ? Response.json({ success: false, error: "Preview only: no email was sent. Your details are still here. The live delivery connection will be verified before release." }, { status: 503, headers: { "Cache-Control": "no-store" } }) : response;
  }
  return handleQuote(request, {
    environment: async () => {
      try {
        const { env } = await getCloudflareContext({ async: true });
        return env as QuoteEnvironment;
      } catch {
        // Fail closed without the Worker rate-limit binding; use Cloudflare preview for delivery tests.
        return { WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY };
      }
    },
    send: fetch,
    log: (code) => console.error(code)
  });
}
