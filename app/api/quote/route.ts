import { getCloudflareContext } from "@opennextjs/cloudflare";
import { handleQuote, type QuoteEnvironment } from "@/lib/quote-handler";
export const runtime = "nodejs";
export async function POST(request: Request) {
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
