# Project KWC review and operating roadmap

## Public website

The revenue-first review keeps the July-inspired navy photography layout, the existing blue galloping-horse artwork, and the current Next.js, OpenNext, GitHub and Cloudflare infrastructure. Hero, equipment and maintenance imagery depict transportation scenes. They are not evidence of company-owned sites, employees or equipment. Limit equipment claims to confirmed operating capabilities. The logo in the repository remains the approved screenshot-derived artwork. A source-quality original would be needed to verify pixel-for-pixel fidelity.

The public site offers bulk business package delivery, freight quotes, recurring transportation inquiries, shipment updates by email, business registration requests, and straight-truck driver and owner-operator applications. Submissions reuse the existing rate-limited Web3Forms workflow. A random request reference appears in the provider payload and on successful confirmation. The reference identifies an inquiry only. Dispatch confirms the carrier, service, timing and price before booking. The configured provider recipient still requires an inbox test for ship@kwclogistics.ca before release.

The corridor map uses projected city coordinates and public-domain Natural Earth lake boundaries. Highlighted highway paths are approximate and show service corridors, rather than providing navigation instructions. [Natural Earth lake data](https://www.naturalearthdata.com/downloads/10m-physical-vectors/10m-lakes/)

## Reference review

- Tobex puts quote, customer business entry and tracking in separate navigation paths. Its account, business and quote endpoints did not render in the research service. The account shell could be read directly during the earlier review. Its signed-in experience was unavailable.
- Ziing explains the operating model and shows specific final-mile use cases. Deliver Better organizes the story around what needs to be delivered and prominent service choices.
- DHL and FedEx distinguish shipping actions from tracking. DHL redirected to a different region and FedEx presented a country selector. Maersk gives tracking a distinct place beside its network and industry offering.
- Flexport and Uber Freight describe visibility and managed operations in terms of work customers need to do. Day & Ross puts quote and track near the top. C.H. Robinson separates shipper and carrier paths. The XPO fetch returned a limited shell.
- Apple's hierarchy and single-product compositions inform the focused hero. NVIDIA groups content by application. Stripe presents complexity through successive sections. Tesla returned a limited shell during research, so its current page layout was not verified. KWC uses its own code, copy and illustrative assets.

## November design review

The industrial direction emphasizes white trucks and operation-specific imagery. The technology direction emphasizes clear task paths and honest shipment visibility. The human-centred direction emphasizes family operations, accessible quotes and industry-specific examples. The review combines the industrial imagery with the latter two approaches to navigation and copy.

Freightliner and Scania distinguish vehicle offerings by use case. Ryder and Penske group transport and equipment services, UPS gives tracking and shipping clear entry points, and project44 organizes visibility by customer task. Caterpillar redirected to its region selector, Kenworth required JavaScript, and the research service could not retrieve Kriska or Forward Air. Those limits were not treated as evidence of their full site experience.

Successfully accepted quote, customer and driver requests log only their category in Cloudflare observability. Request contents and customer identifiers are excluded from that conversion event.

SSP Group’s homepage made quotes, shipment updates and recruitment easy to find and grouped services by what the customer needs to move. KWC applies that concentration with its own task strip, shipping terminology, fleet imagery and routes. SSP’s operating claims, figures and assets are not used.

## Secure customer and driver accounts

Add established identity infrastructure before enabling public login. Support verified email, secure sessions and recovery, optional MFA, throttling, and role-based access. Isolate business memberships, customer records, and driver applications. Verify access to every resource on the server. Use personal and business onboarding flows with contact, company, transportation needs, volume, and review. Keep credit and account approval separate. Limit driver records to details necessary for qualification and restrict their retention and access.

An initial relational model can contain organizations, memberships, customer contacts, driver applications, saved locations, quote requests, bookings, shipments and shipment events. Cloudflare D1 is a candidate for operational records and private R2 for documents. Evaluate access patterns, migrations, retention, backups and restore procedures before selecting those services. Separate review and production records, secrets and provider keys.

Keep quote states separate from shipment milestones. A confirmed booking gets a distinct shipment identifier. Dispatch events record an event ID, shipment ID, verified actor, timestamp, prior state, next state and evidence references. Enforce transitions on the server and restrict customer-facing views to authorized milestones. Use high-entropy, revocable links if customer tracking links are introduced. Keep documents private and use expiring authorized links.

The future portal can show active shipments, quotes, verified milestones, saved addresses, POD and billing records. Build staff dispatch, equipment, carrier and exception workflows before route optimization or AI-assisted dispatch. Validate costing inputs and constraints before any pricing recommendation. Keep KWC and SiraLink identities and customer data separate.

## Review and release

Run pnpm test, pnpm lint, pnpm exec tsc --noEmit and pnpm build:cloudflare. Review the responsive site and verify links, assets, form validation and mocked mail delivery. Before production approval, run authorized test submissions against the correctly configured provider and confirm receipt without adding real customer data. Verify provider destination, error handling, references, credentials and Cloudflare rate limits. Use the existing Cloudflare branch preview for a review deployment. Production release requires approval and a passing build. Confirm the live routes and retain the prior Worker version for rollback.
