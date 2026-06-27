import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";
import { VisualCard } from "@/components/VisualCard";
import { faqs, industries, serviceAreas, services, site } from "@/lib/site";

const trustPoints = [
  "Final Mile Specialists",
  "LTL & B2B Delivery",
  "Specialized Local Freight",
  "Family-Run Reliability"
];

const fleetCards = [
  {
    src: "/images/straight-truck-kwc.jpg",
    title: "Straight Truck Solutions",
    description: "Regional LTL, pallets, store replenishment, commercial freight, and scheduled business deliveries.",
    tags: ["LTL", "B2B", "Regional"]
  },
  {
    src: "/images/reefer-truck-kwc.jpg",
    title: "Reefer Freight",
    description: "Temperature-aware delivery options for food, beverage, meal kit, and commercial freight.",
    tags: ["Food", "Meal kits", "Scheduled"]
  },
  {
    src: "/images/flatbed-kwc.jpg",
    title: "Small Flatbed",
    description: "Flatbed options for equipment, materials, and specialized local freight that needs the right setup.",
    tags: ["Equipment", "Materials", "Specialized"]
  },
  {
    src: "/images/straight-truck-kwc.jpg",
    title: "Box Truck Delivery",
    description: "Final mile, B2C, retail delivery, and direct-to-business freight across Southwestern Ontario.",
    tags: ["Final mile", "B2C", "Retail"]
  }
];

const warehouseCards = [
  {
    src: "/images/warehouse-loading.jpg",
    title: "Loading Dock Coordination",
    description: "Pickup windows, access details, dock timing, and commercial receiving handled with clear dispatch communication."
  },
  {
    src: "/images/pallet-freight.jpg",
    title: "Palletized Freight",
    description: "Skids, pallets, partial loads, warehouse transfers, retail freight, and regional LTL movement."
  },
  {
    src: "/images/forklift-warehouse.jpg",
    title: "Warehouse Equipment",
    description: "Freight details matter. KWC plans around liftgate needs, loading access, weight, dimensions, and timing."
  }
];

const specialized = [
  "Meal kits",
  "Palletized freight",
  "Store replenishment",
  "Equipment",
  "Commercial orders",
  "Scheduled routes"
];

const whyKwc = [
  "We answer the phone",
  "We move freight fast",
  "We work with local businesses",
  "We handle regional delivery properly",
  "Family-run, Canadian-owned"
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_18%_16%,rgba(18,183,255,0.24),transparent_28%),linear-gradient(135deg,#061A3A_0%,#082B66_54%,#061A3A_100%)] text-white">
        <div className="absolute inset-0 logistics-grid opacity-70" />
        <div className="motion-lines absolute -right-24 top-24 h-64 w-[44rem] rotate-[-8deg] opacity-50" />
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl rounded-3xl border border-white/10 bg-white px-6 py-5 shadow-glow">
              <Image
                src="/images/kwc-logo.png"
                alt="KWC Logistics logo"
                width={760}
                height={760}
                priority
                className="mx-auto h-auto w-full object-contain"
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trustPoints.map((point) => (
                <span key={point} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-50">
                  {point}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Kitchener-Waterloo regional logistics</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Proudly Canadian. Built to Deliver.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Final mile, LTL, B2B, D2B, B2C, and specialized regional delivery solutions across Southwestern Ontario.
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
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["401/403", "Corridor coverage"],
                ["30 yrs", "Logistics experience"],
                ["Local", "Dispatch communication"]
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-blue-100">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Available Equipment"
        title="Built for Regional Freight"
        intro="KWC focuses on practical fleet solutions and available equipment for final mile, LTL, B2B, D2B, B2C, and specialized regional delivery work."
        className="bg-brand-navy text-white"
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {fleetCards.map((card) => (
            <VisualCard key={card.title} {...card} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title="Final mile and regional delivery without the headache."
        intro="KWC Logistics Inc. provides final mile, LTL, B2B, D2B, B2C, and specialized regional delivery solutions for businesses across Kitchener-Waterloo, Cambridge, and Southwestern Ontario."
        className="bg-brand-pale"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.slice(0, 10).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft">
              <h3 className="text-lg font-black text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-brand-navy py-14 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Specialized Delivery Solutions</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Some freight does not fit into a standard courier box.
            </h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              We help businesses move specialized deliveries including meal kits, palletized freight,
              store replenishment, equipment, commercial orders, and scheduled regional routes.
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
        title="Built around real freight details."
        intro="From meal kits and retail deliveries to warehouse transfers and recurring B2B routes, KWC Logistics helps local businesses move freight without the headache."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {warehouseCards.map((card) => (
            <VisualCard key={card.title} {...card} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Who We Help" title="Simple delivery support for local businesses." className="bg-white">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded-2xl border border-line bg-brand-pale p-4 transition hover:border-brand-blue hover:bg-white">
              <h3 className="font-black text-ink">{industry.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{industry.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Service Areas" title="Ontario-first coverage across the lanes that matter." className="bg-brand-pale">
        <div className="rounded-3xl bg-brand-navy p-5 text-white shadow-glow sm:p-8">
          <p className="max-w-4xl text-base leading-7 text-blue-100">
            Based in Kitchener, KWC serves Kitchener, Waterloo, Cambridge, Guelph, Brantford,
            London, Hamilton, Mississauga, the GTA, Southwestern Ontario, and the 401/403 corridor.
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

      <section className="bg-brand-navy py-14 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Request a Quote</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Tell us what needs to move.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              Send pickup city, delivery city, freight type, pallets/items, dimensions, timing,
              and liftgate details. KWC will keep the communication quick and practical.
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
