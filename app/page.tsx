import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CoverageMap } from "@/components/CoverageMap";
import { Section } from "@/components/Section";
import { StockPhoto, stock } from "@/components/StockPhoto";
import { VisualCard } from "@/components/VisualCard";
import { industries, localLtlOptions, serviceCategories, site, trustBuilders, workSteps } from "@/lib/site";

const featuredServices = serviceCategories.slice(0, 8);

const heroStats = [
  ["Ontario", "service coverage"],
  ["5", "main freight services"],
  ["KWC", "Waterloo Region roots"]
];

const whyChoose = [
  "Competitive Pricing",
  "Fast Response Times",
  "Route Planning",
  "Same-Day & Next-Day Capabilities",
  "Professional Drivers",
  "Reliable Communication",
  "Scalable Solutions",
  "Dedicated Support",
  "Long-Term Partnerships",
  "Customized Logistics Plans"
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[820px] overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0">
          <StockPhoto src={stock.hero} alt="Modern logistics warehouse with palletized freight" className="opacity-62" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/86 to-brand-navy/24" />
          <div className="absolute inset-0 logistics-grid opacity-20" />
        </div>
        <div className="relative mx-auto grid min-h-[820px] max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div className="reveal-up">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-brand-cyan">KWC Logistics Inc. • Ontario transportation solutions</p>
            <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Moving Your Business Forward with Smarter, Simpler Logistics.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-blue-100">
              KWC Logistics Inc. provides customized transportation, warehousing, distribution,
              local LTL, FTL, warehousing, expedited, and cross-docking solutions for businesses across Kitchener,
              the GTA, and Southern Ontario.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="bg-brand-blue px-7 hover:bg-blue-500">
                Request a Quote
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="border-white/30 bg-white/10 px-7 text-white hover:bg-white hover:text-brand-navy">
                Talk to Our Team
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur reveal-up">
            <div className="grid gap-4">
              {heroStats.map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-white/12 bg-brand-navy/45 p-5">
                  <p className="text-4xl font-black text-white">{value}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-blue-100">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-brand-cyan/20 bg-white/10 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-cyan">Trusted Logistics Solutions Across Ontario</p>
              <p className="mt-3 text-sm leading-6 text-blue-100">
                Built for businesses that need dependable movement, intelligent consolidation,
                clear communication, and logistics support that can scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Main Service Focus"
        title="Local LTL freight for Kitchener, the GTA, and Southern Ontario."
        intro="Fast cartage freight service for pallets, skids, parts, supplies, and commercial shipments that need direct communication and practical timelines."
        className="bg-white"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-brand-navy p-6 text-white shadow-glow sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Kitchener Area Freight Quote</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Get local cartage freight moving today.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              KWC provides cost-effective local LTL service from Kitchener into the GTA and
              Southern Ontario. Built for businesses that need freight picked up, communicated,
              and delivered without unnecessary layers.
            </p>
            <div className="mt-7">
              <ButtonLink href="/contact" className="bg-brand-blue hover:bg-blue-500">Get a Local LTL Quote</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {localLtlOptions.map((option) => (
              <article key={option.name} className="rounded-[1.5rem] border border-line bg-brand-pale p-6 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-blue">{option.time}</p>
                <h3 className="mt-3 text-2xl font-black text-ink">{option.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{option.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Solutions"
        title="Five focused services built around how your freight moves."
        intro="KWC supports businesses with practical, scalable logistics solutions across local LTL, FTL, warehousing, cross-docking, dedicated distribution routes, and expedited freight."
        className="bg-brand-pale"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft">
              <div className="relative h-56 overflow-hidden">
                <StockPhoto src={service.image} alt={service.title} className="transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/82 to-transparent" />
                <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-black text-white">{service.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm leading-6 text-muted">{service.description}</p>
                <span className="mt-5 inline-flex text-sm font-bold text-brand-blue">Explore service</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why Choose KWC" title="Logistics built for trust, scale, speed, and professionalism." className="bg-brand-pale">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {whyChoose.map((item) => (
            <article key={item} className="rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-5 h-2 w-12 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" />
              <h3 className="text-lg font-black text-ink">{item}</h3>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">How We Work</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">A logistics process built to reduce complexity.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              KWC designs every logistics plan around your operation, customer expectations,
              route density, freight profile, and long-term growth goals.
            </p>
          </div>
          <div className="grid gap-4">
            {workSteps.map((step, index) => (
              <div key={step} className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/10 bg-white/10 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-sm font-black text-white">{index + 1}</div>
                <div>
                  <h3 className="text-xl font-black">{step}</h3>
                  <p className="mt-1 text-sm leading-6 text-blue-100">
                    {index === 0
                      ? "We learn what you ship, who receives it, and what problems need to be solved."
                      : index === 1
                        ? "We review volume, timing, service expectations, constraints, and cost drivers."
                        : index === 2
                          ? "We design routes that reduce empty miles and improve delivery performance."
                          : index === 3
                            ? "We align dispatch, tracking, proof of delivery, and communication requirements."
                            : index === 4
                              ? "Freight is picked up with the right instructions, timing, and handling notes."
                              : index === 5
                                ? "Shipments move through the plan with dispatch visibility and active communication."
                                : "Delivery details are confirmed so your team has closure and accountability."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Industries" title="Industries we serve across Ontario.">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry) => (
            <article key={industry} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-pale text-sm font-black text-brand-blue">
                {industry.slice(0, 2).toUpperCase()}
              </div>
              <h3 className="text-lg font-black text-ink">{industry}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Customized transportation and distribution planning for {industry.toLowerCase()} operations.
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Service Area" title="Ontario-wide logistics with KWC roots." className="bg-brand-pale">
        <CoverageMap />
      </Section>

      <section className="relative overflow-hidden bg-brand-navy py-20 text-white">
        <div className="absolute inset-0 opacity-30">
          <StockPhoto src={stock.technology} alt="Logistics technology and route planning" />
        </div>
        <div className="absolute inset-0 bg-brand-navy/82" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Trust Builders</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Built for businesses that need a real logistics partner.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {trustBuilders.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-bold text-white backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Operations" title="Industrial imagery. Real logistics environment. Premium presentation.">
        <div className="grid gap-5 lg:grid-cols-3">
          <VisualCard src={stock.warehouse} title="Warehouse Distribution" description="Inventory handling, dock coordination, staging, and outbound distribution." tags={["Warehouse", "Distribution"]} />
          <VisualCard src={stock.fleet} title="Fleet Operations" description="Transportation capacity planned around lanes, timing, customer needs, and service level." tags={["Fleet", "Ontario"]} />
          <VisualCard src={stock.dispatch} title="Dispatch & Planning" description="Route planning, communication, shipment visibility, and proof-of-delivery workflows." tags={["Dispatch", "Technology"]} />
        </div>
      </Section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Start a Conversation</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Ready to build a smarter logistics program?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
              Call or email KWC Logistics. We will help define the right transportation,
              local LTL, FTL, warehousing, dedicated route, or expedited freight strategy for your business.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" className="bg-brand-blue hover:bg-blue-500">Request a Quote</ButtonLink>
            <a href={`tel:${site.phone}`} className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-navy">
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
