import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StockPhoto, stock } from "@/components/StockPhoto";
import { serviceCategories, trustBuilders, workSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "KWC Logistics Inc is a family-run Ontario logistics partner with 15+ years of transportation and logistics experience across freight, warehousing, distribution, LTL, FTL and cross-docking.",
  alternates: { canonical: "/about" }
};

const metrics = [
  ["15+ years", "transportation and logistics experience"],
  ["Family-run", "direct communication and accountability"],
  ["5 core", "serious logistics service categories"],
  ["KWC", "built in Kitchener-Waterloo-Cambridge"],
  ["Ontario-wide", "customized freight planning"]
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About KWC" title="More Than a Logistics Company. A Partner in Your Growth." image={stock.dispatch}>
        <p>
          KWC Logistics Inc. is a family-run logistics company based in Kitchener, Ontario, with
          more than 15 years of transportation and logistics experience behind the operation.
          We believe freight should not be complicated, overpriced, or handled by people who do
          not understand what the shipment means to your business.
        </p>
      </PageHero>

      <Section title="Family-run, experienced, and built for real freight problems." intro="KWC combines hands-on logistics experience with practical route planning, direct communication, and a family-business standard of accountability.">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <div className="h-[520px]">
              <StockPhoto src={stock.technology} alt="Logistics route planning and business analysis" />
            </div>
          </div>
          <div className="grid content-center gap-5">
            <p className="text-lg leading-8 text-muted">
              Our mission is simple: provide dependable transportation solutions at competitive
              rates while building long-term partnerships based on trust, communication, and
              results. We know how expensive logistics can become when freight is pushed through
              unnecessary layers, unclear handoffs, and poor planning.
            </p>
            <p className="text-lg leading-8 text-muted">
              Every client receives a customized logistics strategy based on their operation,
              customers, freight profile, timing requirements, and long-term goals. Whether you
              are moving recurring pallets, warehouse freight, retail replenishment, or urgent
              commercial shipments, KWC is built to keep the process simple and accountable.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
                  <p className="text-3xl font-black text-brand-blue">{value}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Core logistics services" intro="A tighter service lineup focused on the work businesses actually need: freight, warehousing, distribution, dedicated routes, and planned Ontario coverage." className="bg-brand-pale">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {serviceCategories.map((service) => (
            <div key={service.slug} className="rounded-2xl border border-line bg-white p-4 text-sm font-bold text-brand-navy shadow-sm">
              {service.title}
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Operating Model</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Consolidate smarter. Reduce empty miles. Improve speed.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              With 15+ years of logistics experience, KWC uses business analysis, routing,
              consolidation, and communication to maximize every route, reduce avoidable
              transportation costs, and improve delivery performance.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {trustBuilders.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm font-bold">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <Section title="How we work" intro="A structured logistics process helps customers understand the plan before freight starts moving.">
        <div className="grid gap-4 md:grid-cols-7">
          {workSteps.map((step, index) => (
            <article key={step} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <p className="text-sm font-black text-brand-blue">Step {index + 1}</p>
              <h3 className="mt-3 text-lg font-black text-ink">{step}</h3>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
