# Quote delivery and preview checklist

The public website contact is ship@kwclogistics.ca at the owner's request. The Web3Forms access key determines actual quote delivery; changing the displayed email does not change that destination. The Cloudflare deploy command now copies the existing build secret into the Worker runtime using wrangler secret put; its value must never be committed or logged.

The access key determines the Web3Forms destination. The previous `Send To` custom field did not configure routing. The deployed Worker must have `WEB3FORMS_ACCESS_KEY` as a runtime secret, not only a GitHub/build variable. Never commit its value. This change retains the Cloudflare binding lookup and adds explicit safe diagnostics; it cannot provision the missing key without access to the deployment account.

## Local checks

Use Node 22.18+ (Node 24 tested), the pinned pnpm version, and `pnpm install --frozen-lockfile`. Run `pnpm test`, `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build`. For visual review run `pnpm dev` and open localhost:3000. Plain Next development deliberately fails closed for delivery without the Worker rate-limit binding. Mocked handler tests never send email.

For Cloudflare runtime validation, use `pnpm build:cloudflare` then `pnpm exec wrangler dev`. Put a preview-only Web3Forms key in a local ignored `.dev.vars` file. Confirm `QUOTE_RATE_LIMITER` is bound by the Wrangler configuration. Its namespace ID must be unique within the Cloudflare account; verify the selected ID before any deployment. The limiter is per Cloudflare location and is not a globally exact quota. The honeypot, request-size limits, field validation and rate limiter reduce abuse but are not a guarantee against distributed spam.

## Before any release

1. Confirm the intended Worker/environment and active deployment revision.
2. Configure its Web3Forms runtime key privately, keeping the existing dispatch/Gmail destination. No production settings have been changed by this work.
3. In a safe preview, send one clearly identified test with permission to use the test inbox. Verify provider success AND actual inbox receipt, including service, mode, route and handling details. No real email-delivery test has been completed yet.
4. Check empty/invalid fields, a refrigerated shipment without temperature, rejected upstream requests, timeout/uncertain delivery, and the rate limit. Ensure errors preserve input and successes reset correctly.
5. Approve the draft credit application and road BOL separately. Neither includes final credit terms or complete applicable carriage conditions. Rail/ocean shipments use the selected partner's documents. Ontario general freight document requirements were consulted at https://www.ontario.ca/laws/regulation/050643; this draft is not represented as a complete contract of carriage.
6. Obtain explicit production-release approval. Do not change DNS or run the deploy script for preview work.

The new form and server should be released together. Old cached forms do not include the newly required service/mode/frequency fields and will receive field validation errors until refreshed.
