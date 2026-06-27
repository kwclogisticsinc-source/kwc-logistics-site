import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";
import { VisualCard } from "@/components/VisualCard";
import { faqs, industries, serviceAreas, services, site } from "@/lib/site";

const trustPoints = [
  "Final Mile",
  "LTL Freight",
  "Dedicated Routes",
  "Warehouse Transfers"
];

const fleetCards = [
  {
    src: "/images/kwc-straight-trucks-dock.png",
    title: "Straight Trucks & Reefer Capacity",
    description: "Regional pallet freight, store replenishment, food shipments, and dock-to-dock commercial deliveries.",
    tags: ["LTL", "Reefer", "Dock delivery"]
  },
  {
    src: "/images/kwc-cargo-van-dock.png",
    title: "Cargo Van Final Mile",
    description: "Same-day, parts, cartons, retail orders, and time-sensitive shipments moving through local lanes.",
    tags: ["Final mile", "Same-day", "Parts"]
  },
  {
    src: "/images/kwc-warehouse-crossdock.png",
    title: "Cross-Dock & Warehouse Transfers",
    description: "Freight staged, sorted, transferred, and loaded for regional delivery routes and distribution work.",
    tags: ["Cross-dock", "Pallets", "Transfers"]
  },
  {
    src: "/images/kwc-yard-fleet.png",
    title: "Regional Fleet Network",
    description: "Coverage built around Kitchener-Waterloo, Cambridge, the GTA, Hamilton, London, and the 401/403 corridor.",
    tags: ["Southern Ontario", "401/403", "Regional"]
  }
];

const warehouseCards = [
  {
    src: "/images/kwc-warehouse-crossdock.png",
    title: "Dock Scheduling",
    description: "Pickup windows, receiver requirements, dock timing, and commercial access details confirmed before dispatch."
  },
  {
    src: "/images/kwc-warehouse-crossdock.png",
    title: "Palletized Freight",
    description: "Skids, pallets, partial loads, retail replenishment, warehouse transfers, and regional LTL movement."
  },
  {
    src: "/images/kwc-straight-trucks-dock.png",
    title: "Route Loading",
    description: "Recurring route freight organized around delivery windows, trailer access, liftgate needs, and proof of delivery."
  }
];

const specialized = [
  "Meal kit distribution",
  "Auto parts and dealer runs",
  "Retail replenishment",
  "Palletized commercial freight",
  "Warehouse-to-store transfers",
  "Recurring business routes"
];

const whyKwc = [
  "Local dispatch that answers",
  "Clear pickup and delivery details",
  "Practical pricing conversations",
  "Regional lane knowledge",
  "Family-run accountability"
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_18%_16%,rgba(18,183,255,0.24),transparent_28%),linear-gradient(135deg,#061A3A_0%,#082B66_54%,#061A3A_100%)] text-white">
        <div className="absolute inset-0 logistics-grid opacity-70" />
        <div className="motion-lines absolute -right-24 top-24 h-64 w-[44rem] rotate-[-8deg] opacity-50" />
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Kitchener-Waterloo final mile logistics</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Southern Ontario freight, handled properly.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              KWC Logistics Inc. provides final mile, LTL, dedicated route, warehouse transfer,
              and regional delivery services for businesses across Kitchener-Waterloo, Cambridge,
              London, Windsor, Toronto, Kingston, and the 401/403 corridor.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote" className="bg-brand-blue hover:bg-blue-500">
                Request a Quote
              </ButtonLink>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 focus:ring-offset-brand-navy"
              >
                Call Dispatch
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trustPoints.map((point) => (
                <span key={point} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-50">
                  {point}
                </span>
              ))}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["5 hubs", "Regional reach"],
                ["30 yrs", "Logistics experience"],
                ["Direct", "Fewer handoffs"]
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-blue-100">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[390px] overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-glow">
            <Image
              src="/images/kwc-yard-fleet.png"
              alt="KWC Logistics fleet at a Southern Ontario dock"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
            <div className="absolute left-5 top-5 max-w-[210px] rounded-2xl bg-white px-4 py-3 shadow-soft">
              <Image
                src="/images/kwc-logo.png"
                alt="KWC Logistics logo"
                width={260}
                height={220}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/95 to-transparent p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-cyan">Regional delivery network</p>
              <p className="mt-2 max-w-xl text-2xl font-black">Local dispatch, branded equipment, and dock-ready freight planning.</p>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Core Services"
        title="Focused services for Southern Ontario businesses"
        intro="KWC keeps the offer clear: final mile delivery, LTL and pallet freight, consolidation, warehouse transfers, cross-dock support, dedicated routes, and expedited local work."
        className="bg-brand-navy text-white"
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {fleetCards.map((card) => (
            <VisualCard key={card.title} {...card} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Service Categories"
        title="Less noise. Better freight execution."
        intro="The right quote starts with the right category. Tell us whether it is final mile, LTL, warehouse transfer, dedicated route, or same-day freight and we will ask for the details that matter."
        className="bg-brand-pale"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 9).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft">
              <h3 className="text-lg font-black text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-blue">Hub-Based Coverage</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">
              Kitchener, London, Windsor, Toronto, and Kingston lanes.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              KWC works from a Kitchener base with a hub-style approach to Southern Ontario freight.
              The model is simple: combine freight where it makes sense, reduce unnecessary broker
              layers, and route shipments through lanes that keep service practical and pricing fair.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Kitchener-Waterloo dispatch", "London and Windsor lanes", "Toronto and GTA coverage", "Kingston eastern lane support"].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-brand-pale p-5">
                <div className="mb-4 h-2 w-12 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" />
                <p className="text-lg font-black text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-14 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Freight KWC Handles</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Commercial freight needs more than a courier mindset.
            </h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              The work is in the details: dock times, pallet counts, delivery windows, liftgate
              needs, receiver instructions, and proof of delivery. KWC is built for that practical
              middle ground between courier work and large-carrier freight, including locations
              and shipment types many carriers do not want to handle.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {specialized.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5 font-bold text-white">
                <span className="mr-3 inline-block h-2 w-8 rounded-full bg-brand-cyan" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Warehouse Movement"
        title="Dock, warehouse, and route work done with proper details."
        intro="From meal kit distribution and retail deliveries to warehouse transfers and recurring B2B routes, KWC helps local businesses move freight without the runaround."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {warehouseCards.map((card) => (
            <VisualCard key={card.title} {...card} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Who We Help" title="Customers that need dependable regional delivery." className="bg-white">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded-2xl border border-line bg-brand-pale p-4 transition hover:border-brand-blue hover:bg-white">
              <h3 className="font-black text-ink">{industry.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{industry.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Service Areas" title="Southern Ontario coverage from a Kitchener base." className="bg-brand-pale">
        <div className="rounded-3xl bg-brand-navy p-5 text-white shadow-glow sm:p-8">
          <p className="max-w-4xl text-base leading-7 text-blue-100">
            Based in Kitchener, KWC services Kitchener-Waterloo, Cambridge, Guelph, Brantford,
            London, Hamilton, Mississauga, the GTA, Niagara, and the main 401/403 freight corridor.
            Local lanes are planned around pickup windows, receiver hours, equipment needs, and route density.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {serviceAreas.map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white hover:border-brand-cyan">
                {area.title.replace(" Logistics", "")}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Why KWC" title="Direct, local, and built around service.">
        <div className="grid gap-4 md:grid-cols-5">
          {whyKwc.map((item) => (
            <div key={item} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="mb-4 h-2 w-12 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" />
              <p className="text-lg font-black text-ink">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-brand-pale py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-blue">Direct Freight</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Built to save customers from unnecessary layers.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Brokerage layers can make simple freight feel expensive and confusing. KWC keeps the
              customer close to dispatch, consolidates shipments where possible, and explains the
              plan before the freight moves.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-blue">Who Can Call</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              From manufacturers to regular people.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              KWC can help with commercial freight, store deliveries, parts, pallets, equipment,
              and the one-off delivery a regular customer needs handled properly. The process is
              simple: send the pickup, delivery, freight size, timing, and access details.
            </p>
          </div>
        </div>
      </section>

      <section id="owner-operators" className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-line bg-brand-pale shadow-soft">
            <div className="relative min-h-[330px]">
              <Image
                src="/images/kwc-straight-trucks-dock.png"
                alt="KWC Logistics straight trucks at loading docks"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 54vw, 100vw"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-3xl bg-brand-navy p-6 text-white shadow-glow sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Owner Operators</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Drive with KWC Logistics.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              KWC is interested in speaking with reliable owner operators and delivery partners
              for final mile, straight truck, cargo van, and regional route opportunities in
              Kitchener-Waterloo, Cambridge, and Southern Ontario.
            </p>
            <ul className="mt-6 grid gap-3 text-sm font-semibold text-blue-50 sm:grid-cols-2">
              <li>Professional communication</li>
              <li>Commercial delivery experience</li>
              <li>Clean equipment presentation</li>
              <li>Southern Ontario lane knowledge</li>
            </ul>
            <div className="mt-7">
              <a
                href={`mailto:${site.email}?subject=Owner%20Operator%20Inquiry`}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-pale"
              >
                Contact Dispatch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-14 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Request a Quote</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Tell us what needs to move.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              Send pickup city, delivery city, freight type, pallet count, dimensions, timing,
              receiver details, and liftgate needs. KWC will confirm what matters before quoting.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <Section eyebrow="FAQ" title="Common questions">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="text-lg font-black text-ink">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
