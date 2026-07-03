import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StockPhoto, stock } from "@/components/StockPhoto";
import { localLtlOptions, serviceCategories, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "KWC Logistics provides local LTL services, Kitchener cartage freight, LTL Direct, LTL Rush, LTL Sameday, FTL, warehousing, cross-docking, dedicated routes, and expedited freight.",
  alternates: { canonical: "/services" }
};

const freightPrograms = [
  {
    title: "Local LTL",
    tags: ["Direct", "Rush", "Sameday"],
    description: "Kitchener-area cartage and Southern Ontario LTL service for pallets, skids, parts, and commercial freight."
  },
  {
    title: "Domestic Freight",
    tags: ["LTL", "FTL", "Expedited"],
    description: "Standard and expedited freight planning for Ontario and broader Canadian transportation requirements."
  },
  {
    title: "Specialty Equipment",
    tags: ["Flatbed", "Reefer", "Container"],
    description: "Special equipment can be coordinated through trusted carrier partners when freight requires more than standard dry van movement."
  },
  {
    title: "Dedicated Routes",
    tags: ["Recurring", "Fleet", "Distribution"],
    description: "Planned routes for manufacturers, warehouses, distributors, retailers, and businesses with repeat delivery needs."
  }
];

const localServiceAreas = [
  "Kitchener",
  "Waterloo",
  "Cambridge",
  "Guelph",
  "Milton",
  "Mississauga",
  "Brampton",
  "Toronto",
  "Hamilton",
  "London",
  "Southern Ontario"
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Local LTL, cartage freight, and Ontario logistics services." image={stock.dock}>
        <p>
          KWC supports businesses in Kitchener, the GTA, and Southern Ontario with fast
          local LTL freight, cartage, truckload support, warehousing, cross-docking,
          dedicated route, and expedited freight programs.
        </p>
      </PageHero>

      <section className="border-b border-line bg-white py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">Freight Desk</p>
            <p className="mt-1 text-sm font-semibold text-muted">
              Send pickup, delivery, pallet count, weight, dimensions, and timing for a cleaner local LTL quote.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <ButtonLink href="/contact">Get a Freight Quote</ButtonLink>
            <a href={`tel:${site.phone}`} className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-navy bg-white px-5 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-pale">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Main Service Focus"
        title="Local LTL Services in Kitchener"
        intro="Fast freight delivery within Kitchener, the GTA, and Southern Ontario for businesses that need pallets, skids, parts, supplies, and commercial freight moved without broker runaround."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft">
            <div className="relative h-[420px]">
              <StockPhoto src={stock.pallets} alt="Local LTL freight and palletized shipments" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/82 via-brand-navy/18 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-cyan">Kitchener Cartage Freight</p>
                <h2 className="mt-2 max-w-2xl text-4xl font-black tracking-tight">Get a local cartage freight quote for the Kitchener area.</h2>
              </div>
            </div>
          </div>

          <div className="grid content-center gap-4">
            <p className="text-base leading-7 text-muted">
              For businesses in the Kitchener area seeking dependable and professional shipping
              solutions, KWC Logistics provides practical local LTL service backed by 15+ years
              of transportation and logistics experience. We handle freight moving from industrial
              parks, warehouses, manufacturers, suppliers, and commercial receivers across Kitchener,
              the GTA, and Southern Ontario.
            </p>
            <p className="text-base leading-7 text-muted">
              When freight requires planning beyond standard cartage, KWC can help coordinate
              truckload, flatbed, refrigerated, and container requirements through trusted carrier
              partners while keeping communication simple and direct.
            </p>
            <div className="grid gap-3">
              {localLtlOptions.map((option) => (
                <article key={option.name} className="rounded-2xl border border-line bg-brand-pale p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-black text-ink">{option.name}</h3>
                    <span className="rounded-full bg-brand-blue px-3 py-1 text-xs font-black uppercase tracking-wide text-white">{option.time}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">{option.description}</p>
                </article>
              ))}
            </div>
            <div className="pt-2">
              <ButtonLink href="/contact">Get a Local LTL Quote</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Freight programs with clear service lanes."
        intro="KWC keeps the service menu simple: local LTL for urgent regional freight, domestic freight planning for larger moves, specialty equipment coordination when needed, and dedicated route support for repeat business."
        className="bg-brand-pale"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {freightPrograms.map((program) => (
            <article key={program.title} className="rounded-[1.5rem] border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-ink">{program.title}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {program.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-brand-pale px-3 py-1 text-xs font-black uppercase tracking-wide text-brand-blue">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-muted">{program.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-[2rem] border border-line bg-white p-6 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-blue">Common Local Coverage</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {localServiceAreas.map((area) => (
              <span key={area} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-brand-navy">
                {area}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Service portfolio" intro="Focused logistics services built around local LTL, commercial freight, warehousing, distribution, and Southern Ontario coverage.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft">
              <div className="relative h-64 overflow-hidden">
                <StockPhoto src={service.image} alt={service.title} className="transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/88 via-brand-navy/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-cyan">KWC Service</p>
                  <h2 className="mt-2 text-2xl font-black text-white">{service.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-muted">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <span key={benefit} className="rounded-full bg-brand-pale px-3 py-1 text-xs font-bold text-brand-navy">{benefit}</span>
                  ))}
                </div>
                <span className="mt-6 inline-flex text-sm font-bold text-brand-blue">Learn More</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Custom Plans</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">One shipment or thousands of pallets every month.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              KWC builds logistics programs around your customers, operations, routes,
              warehouses, service expectations, and cost targets.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-6 text-brand-navy shadow-glow">
            <h3 className="text-2xl font-black">Need a quote or service plan?</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Send the lane, freight type, volume, timing, pickup details, delivery details,
              and any service requirements. We will help define the right solution.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact">Request a Quote</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
