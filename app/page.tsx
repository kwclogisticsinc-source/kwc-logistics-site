import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { FullLogo } from "@/components/Logo";
import { Section } from "@/components/Section";
import {
  faqs,
  industries,
  serviceAreas,
  serviceCategories,
  site
} from "@/lib/site";

const trustPoints = [
  "Proudly Canadian",
  "Family-Run Business",
  "30 Years of Logistics Experience",
  "Quick Communication",
  "Ontario Asset-Based Freight",
  "Canada & North America Logistics"
];

const whyChoose = [
  {
    title: "We answer the phone.",
    copy: "Fast replies matter when something needs to move. KWC keeps communication direct and practical."
  },
  {
    title: "We understand the cost.",
    copy: "Logistics can get expensive fast. With 30 years of experience, we help customers find practical, affordable options."
  },
  {
    title: "We do the small jobs too.",
    copy: "One box, auto parts, a few items, one pallet, one room, or one truckload. If it needs to move, call KWC."
  },
  {
    title: "We get it moved.",
    copy: "KWC uses available capacity, a practical fleet and carrier network, and trusted transportation partners."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">
              Family-run Canadian logistics
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-6xl">
              Driven by Canadian Values. Built for Local Freight.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              KWC Logistics Inc. mainly moves freight across Ontario on straight trucks, reefer
              trucks, flatbeds, box trucks, and cargo vans for hot shot work. Backed by 30 years
              of logistics experience, we also manage Canada-wide and North America freight
              through trusted partners when the lane goes beyond our assets.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-navy bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-pale focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              >
                Call Dispatch
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <p key={point} className="rounded-lg border border-line bg-slate-50 px-4 py-3 text-sm font-bold text-ink">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-line bg-slate-100 shadow-soft">
            <Image
              src="/kwc-logistics-hero.png"
              alt="KWC Logistics branded box truck, reefer truck, cargo van, and tractor trailer"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute left-5 top-5 w-32 rounded-xl bg-white/95 px-3 py-2 shadow-soft backdrop-blur">
              <FullLogo />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/90 to-transparent p-5 text-white">
              <p className="text-sm font-semibold text-blue-100">Fleet and carrier network</p>
              <p className="mt-1 text-xl font-bold">Available capacity for local, regional, and cross-border shipments.</p>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="No Customer Too Small"
        title="One box, one pallet, one truckload — call KWC."
        intro="KWC Logistics Inc. is built for customers who need a real person to answer, explain the freight options, and get the shipment moving without getting overcharged or ignored."
      >
        <div className="rounded-2xl bg-brand-navy p-6 text-white sm:p-8">
          <h2 className="text-3xl font-bold">No customer too small. No freight too complicated.</h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-blue-100">
            We do not pretend to be a giant corporation. We focus on local service with real
            accountability, fair pricing, clear freight details, trusted transportation partners,
            and direct dispatch communication. We know logistics can be expensive, and we know
            people can take advantage when customers do not know the freight world. KWC keeps it honest.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title="Ontario freight is the main lane. The partner network handles the rest."
        intro="We keep the service list simple: asset-based Ontario freight, cargo van hot shot, warehousing and transfer support, and logistics coordination for Canada-wide or North America lanes."
        className="bg-slate-50"
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {serviceCategories.map((category) => (
            <article key={category.title} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <h3 className="text-xl font-bold text-ink">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{category.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Industries" title="Built for businesses, homeowners, and everyday customers" intro="KWC works with the people who need practical delivery help: auto parts suppliers, stores, warehouses, homeowners, contractors, suppliers, seniors, and growing companies.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded-lg border border-line bg-white p-4 text-sm font-semibold text-ink transition hover:border-brand-blue hover:text-brand-blue">
              {industry.title}
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why KWC" title="Local service with real accountability" className="bg-brand-pale">
        <div className="grid gap-5 md:grid-cols-2">
          {whyChoose.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-white p-6">
              <h3 className="text-2xl font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Ontario First, North America When Needed</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Strong coverage across the 401 and 403 corridor.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Our main work is Ontario freight: Kitchener to Ottawa, Windsor, Niagara, the GTA,
              Hamilton, London, Mississauga, Cambridge, Guelph, Brantford, and anywhere along the
              401 and 403 corridor. We move freight on our assets where it makes sense, supported
              by warehousing hubs, cross-dock options, and a strong logistics team.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Straight trucks", "Reefer trucks", "Flatbeds", "Cargo vans for hot shot"].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-slate-50 p-5">
                <p className="text-lg font-bold text-ink">{item}</p>
                <p className="mt-2 text-sm leading-6 text-muted">Call KWC with lane, timing, freight type, access details, and urgency.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Partner-Managed Logistics</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Canada-wide and North America moves, managed by people who understand freight.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              KWC mainly moves freight on our own Ontario assets. When a customer needs a lane
              across Canada, into the U.S., or a North America home moving option, our logistics
              team works with trusted transportation partners to manage the service, communication,
              and pricing.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-pale p-6">
            <h3 className="text-2xl font-bold text-ink">What this means for customers</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
              <li>Ontario freight handled mainly through KWC assets.</li>
              <li>Partner network used for Canada-wide and North America coverage.</li>
              <li>Quick communication and honest options before the move is booked.</li>
              <li>Warehousing hubs and cross-dock support where the freight plan needs it.</li>
            </ul>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Service Areas"
        title="Ontario coverage from Kitchener across the 401 and 403 corridor"
        intro="KWC is based in Kitchener and moves freight across Ontario: Ottawa, Windsor, Niagara, the GTA, London, Hamilton, Mississauga, Cambridge, Guelph, Brantford, and the lanes in between."
        className="bg-slate-50"
      >
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {serviceAreas.map((area) => (
            <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-lg border border-line bg-white p-4 font-bold text-ink transition hover:border-brand-blue hover:text-brand-blue">
              {area.title}
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-brand-navy py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-200">Request a Quote</p>
            <h2 className="mt-2 text-3xl font-bold">Tell us what needs to move.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100">
              Pickup city, delivery city, freight type, item count, weight, dimensions, timing, and any liftgate or reefer needs.
            </p>
          </div>
          <ButtonLink href="/request-a-quote" variant="secondary" className="shrink-0">
            Request a Quote
          </ButtonLink>
        </div>
      </section>

      <Section eyebrow="FAQ" title="Common questions">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="text-lg font-bold text-ink">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
