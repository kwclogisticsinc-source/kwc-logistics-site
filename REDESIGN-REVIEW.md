# KWC redesign review

This redesign uses the existing Next.js 15 / React / OpenNext-Cloudflare project. It is on `preview/courier-redesign`. The live domain and main branch remain unchanged. No DNS, Google Workspace or email-hosting settings were changed.

## Design and journey

Light backgrounds, royal blue, restrained warm yellow, generous spacing and original courier photography complement the recognizable horse logo. Shared navigation, footer and ship@kwclogistics.ca apply across the site. The former business number and all business tel links have been removed; the owner will provide a replacement.

Three starting points—package, freight, regular deliveries—preselect a four-step enquiry. Route → shipment → timing → contact. Freight asks about pallets/access/handling; recurring deliveries ask about volume/frequency/regions. Going back, changing service and choosing manual assistance preserve input. Email is an alternative; no account or invented price is required.

Detailed capabilities live on courier, freight and logistics pages. Local coverage comes before Ontario corridors and partner-arranged Canada/U.S. road freight. The diagram is explicitly not a geographic map. Unsupported performance claims, technology promises, testimonials and rail/ocean marketing were removed. Generated photos are clearly illustrative.

## Files changed

- Homepage and design system: `app/page.tsx`, `app/globals.css`.
- Shared components: `Header`, `Footer`, `DeliveryUI`, `QuoteEntry`, `QuoteForm`.
- Supporting pages: services and three service-detail pages, coverage, about, industries, contact, shipping resources, forms and privacy.
- Form/schema/backend: `lib/quote.ts`, `lib/quote-handler.ts`, `app/api/quote/route.ts`.
- Pricing boundary: `lib/pricing.ts`. It always requests manual review until approved pricing exists.
- Preview guard: `lib/release.ts`. `previewOnly = true` enables noindex. Quote delivery now uses the existing secure runtime backend even on preview, as requested.
- Metadata, organization structured data, sitemap and redirects in layout/robots/sitemap/Next configuration. Old service URLs redirect to relevant new services.
- Three original optimized WebP images, approximately 206 KB, 79 KB and 95 KB.
- Nineteen meaningful quote tests. No application dependencies added; the existing lockfile and deployment framework remain.

## Checks completed

Next production build, TypeScript and ESLint passed. Nineteen quote tests passed: service-specific validation, dates, counts, required temperature, duplicate fields, body size, same-origin policy, honeypot, rate limiter, missing configuration, upstream failure and honest manual pricing. Unit-test provider calls are mocked. A separate clearly labeled browser test was accepted by the real backend and received in kwclogisticsinc@gmail.com on October 18, 2026 at 08:29 UTC. The received message contains the stops, handling, volume, timing and unknown measurement values. This verifies the existing Gmail delivery destination, not receipt at ship@kwclogistics.ca.

Localhost could not be reached from the app browser because the execution environment isolates it. A branch-specific Cloudflare version URL provides the review preview instead.

## Exact configuration still required before release

1. Obtain approval of the completed preview. Do not merge or deploy main before that approval.
2. Confirm that **ship@kwclogistics.ca** receives mail. The displayed address and downloadable forms use ship@, but the real test confirmed that the existing Web3Forms key delivers directly to **kwclogisticsinc@gmail.com**. Do not assume ship@ delivery is configured.
3. To direct quote notifications to ship@: obtain a Web3Forms access key associated with the verified ship@ mailbox, then replace `WEB3FORMS_ACCESS_KEY` in both the Cloudflare Worker runtime secret and the encrypted build/deploy variable. The existing production deploy command copies that encrypted build variable to the runtime secret, so keeping both aligned prevents an old recipient from returning on a later deployment. Do not paste keys into chat or put them in frontend variables or source. Retest and check actual inbox receipt after updating. No DNS, email hosting or Workspace change is needed for this website code.
4. Preserve the `QUOTE_RATE_LIMITER` binding in `wrangler.jsonc` (five requests per sixty seconds at the Cloudflare edge). Both it and `WEB3FORMS_ACCESS_KEY` are required; missing configuration fails closed with an honest error and retained input. Provider rejection, timeout and malformed responses also fail honestly. Honeypot requests never claim success.
5. After owner approval, set `previewOnly = false` to remove noindex, rerun checks and release main only with explicit approval. Do not change active production traffic while reviewing.

## October 18 content and document update

- About: approved Our story text names Jay Sandhu and preserves the supplied background. No founder portrait or placeholder. Added Built around your next step and its three points/contact action.
- Home: replaced the existing recurring-delivery section with More customers. A delivery plan to reach them, supplier pickups, store replenishment and customer deliveries. Its action preselects regular deliveries.
- Freight: compact handling section with liftgate/no-dock/inside delivery/wrapping/offload/access requirements. Capacity and service details are confirmed with the quote.
- Contact: removed the former business number from shared header/footer, mobile bar, hero, contact page, manual assistance, metadata and Organization structured data. Customer phone fields remain optional.
- Quote: four steps; recurring paths now collect stops, volume, frequency, areas, preferred windows and handling/temperature needs. Weight and dimensions accept Not sure. The backend is enabled using its existing server-side credentials, and mailto is only an explicitly chosen manual alternative.
- Resources: Before you ship, Book and manage a shipment, Business account documents; preparation checklist and four genuine download links.
- PDFs: four branded, interactive, one-page files. Road BOL (19 fields) and credit application (19 fields) retain DRAFT status and stable existing URLs. Shipment request (17 fields) is not a booking; customer setup (17 fields) does not grant credit. No unfinished legal/claims terms, personal guarantee or banking collection was added.
- PDF verification: canonical AcroForm fields match page widgets; all test-filled values and appearance streams verified after saving. All four rendered filled copies were visually inspected. Final delivered files are blank and remain editable.

Updated files: app/about, home, contact, forms, resources, privacy, services/[slug], layout and API quote route; globals.css; Header, Footer, DeliveryUI, QuoteForm; lib/content, site, quote and quote-handler; tests/quote.test.mjs; public/forms/*.pdf; .gitignore. No dependencies, framework or deployment workflow changed.

## Operational confirmations

- Exact direct-operated vehicles/services versus partner-arranged lanes.
- Same-day/next-day booking requirements and real business contact hours.
- Approved package sizes, weights, products and vehicle eligibility; limits currently remain unset and are manually assessed.
- Available inside/two-person handling, setup assistance, packaging removal and temperature-controlled capacity.
- Actual facilities/partners for storage, staging, cross-docking and returns; no owned warehouse is claimed.
- Whether white-label communication/handoff arrangements are supported; custom integrations and branded tracking are not advertised.
- Enquiry retention practice and final credit/BOL terms. Existing PDFs remain marked drafts.
- Genuine equipment/team photos and customer references, only when provided and permissioned.

## Genuine instant-pricing next phase

Start with approved Kitchener/Waterloo/Cambridge boundaries. Approve vehicle/package eligibility, supported commodities, minimum/base rates, urgency/stops/waiting/handling charges and taxes. Choose an address-validation and road-distance provider only after confirming its cost. Add server-side calculations, transparent totals, expiry, availability checks and manual-review fallbacks. Bind accepted quotes to server records and revalidate before booking/payment. Expand geography only after rates and operations support it. No business rates or paid integrations were invented here.

## Reference research

All supplied URLs were attempted and deduplicated. No competitor text, imagery, statistics, customer logos or proprietary interface was copied.

- [Bringfy](https://bringfy.ca/home/): concise delivery introduction and separate customer actions.
- [Crown Courier](https://crowncourier.com/): visible contact, service organization and recurring-run context.
- [Uber Direct](https://merchants.ubereats.com/ca/en/services/uber-direct/): delivery supporting merchants' existing sales channels; KWC copy does not promise integrations.
- [KW Delivery](https://kwdelivery.ca/): local coverage before detail.
- [Dragonfly](https://dragonflyinternational.com/en/): simple audience organization; platform/performance claims excluded.
- [Delistor](https://www.delistor.com/): route-first entry; instant prices, payments, account creation and tracking excluded.
- [Harvee](https://www.harveelogistics.com/): capability organization; facilities/certifications not adopted as KWC claims.
- [PrimeRoutes](https://primeroutes.ca/): readable corridors; schedules, prices and proof-of-delivery tooling excluded.
- Broader freight organization reviewed: [Manitoulin](https://manitoulintransport.com/), [Canada Cartage](https://www.canadacartage.com/), [Challenger](https://www.challenger.com/), [Purolator](https://www.purolator.com/en), [Polaris](https://www.polaristransport.com/en/), [Day & Ross](https://dayross.com/), [Metro](https://www.metroscg.com/), [Gardewine](https://gardewine.com/), [Rome](https://www.rometransportation.com/), [TForce](https://www.tforcefreight.com/ltl/apps/home/), [Frontier](https://www.frontierdistribution.ca/), [Contender](https://www.contenderlogistics.com/).
- Also accessible: [Onward](https://www.onwardexpress.com/), [Crossnorth](https://cndelivery.ca/), [Sal](https://salcourier.com/), [Baaz](https://www.baazmotorfreight.ca/), [VAP](https://vaptransport.com/).
- Limited/unavailable: The Delivery Guys, BLM, Erb Group, Capital Traffic, Apex, Cornerstone, Final Mile Logistics, Zip and Lumico returned fetch/access errors. KWG showed account suspended. TFI provided no usable text. Nothing was inferred from inaccessible references.

The owner's pasted audit informed consistency, real customer outcomes, direct-versus-partner clarity and restraint about proof. Its scores were not treated as measured analytics.

## Original photography

Built-in image generation produced three scenes: branded white KWC cargo van and parcel handoff; a small meal-kit business handing sealed orders to a courier; and pallet/tailgate delivery with wrapping/staging visible. Prompts specified natural commercial photography, cobalt/white/kraft colours, safe handling, no large-fleet or owned-warehouse claims, and no extra text. The original logo was used as a reference and the generated KWC LOGISTICS lettering was visually checked. Complete prompts are retained in the chat's image-generation calls. Final assets are in `public/images/` and the source archive. These are illustrative marketing visuals, not operational proof.
