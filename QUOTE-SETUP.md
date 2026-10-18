# Quote setup for review

Public contact: ship@kwclogistics.ca. Actual delivery routing belongs to the Web3Forms key, not a custom recipient field or the displayed address.

This review has previewOnly enabled in lib/release.ts. Requests are validated but no email is sent. The UI explicitly explains this and preserves entered details.

Before a future approved release, verify the Web3Forms recipient is ship@kwclogistics.ca. Preserve the supported Cloudflare runtime secret WEB3FORMS_ACCESS_KEY and the existing QUOTE_RATE_LIMITER binding. No credentials belong in source, client variables or public logs.

In an isolated preview with an approved test inbox, verify provider success and actual inbox receipt before calling mail delivery operational. The 18 automated tests mock the provider and send no email.

See REDESIGN-REVIEW.md for exact release gates and operational confirmations. This redesign does not change DNS, Google Workspace, email hosting or live deployment settings.
