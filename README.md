# KWC Logistics website

Existing Next.js / React / OpenNext-Cloudflare project, redesigned for a courier-first review preview. See REDESIGN-REVIEW.md for scope, validation, research, required confirmations and release steps.

The preview branch is preview/courier-redesign. In lib/release.ts, previewOnly intentionally disables mail sending and enables noindex. Do not merge or publish the live domain before the owner approves the completed preview.

Use Node 22.18+ and the pinned pnpm. Run pnpm install --frozen-lockfile, then pnpm dev. Checks: pnpm test, pnpm lint, pnpm exec tsc --noEmit, pnpm build. Cloudflare artifact: pnpm build:cloudflare. The existing deployment workflow and lockfile remain in place.

For Windows environments without symlink support, the verified local install used a project-contained store with hoisted modules and copied packages. Optional KWC_BUILD_DIR selects an isolated local Next build directory.
