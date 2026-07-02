import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StockPhoto, stock } from "@/components/StockPhoto";
import { serviceCategories, trustBuilders, workSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "KWC Logistics Inc is a growth-focused Ontario logistics partner providing transportation, warehousing, route optimization, distribution, courier, final mile, LTL, FTL and cross-docking solutions.",
  alternates: { canonical: "/about" }
};

const metrics = [
  ["Ontario-wide", "customized transportation support"],
  ["24+", "logistics service capabilities"],
  ["KWC", "built in Kitchener-Waterloo-Cambridge"],
  ["Long-term", "partnership-driven planning"]
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About KWC" title="More Than a Logistics Company. A Partner in Your Growth." image={stock.dispatch}>
        <p>
          At KWC Logistics Inc., we believe logistics should not be complicated, expensive, or impersonal.
          Our mission is to provide dependable transportation solutions at competitive rates while building
          long-term partnerships based on trust, communication, and results.
        </p>
      </PageHero>

      <Section title="Smarter, simpler logistics for businesses ready to grow." intro="Our approach is different. Instead of sending half-empty trucks across Ontario, KWC intelligently consolidates shipments using route optimization, dispatch planning, and customized logistics strategies.">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <div className="h-[520px]">
              <StockPhoto src={stock.technology} alt="Logistics route planning and business analysis" />
            </div>
          </div>
          <div className="grid content-center gap-5">
            <p className="text-lg leading-8 text-muted">
              Every client receives a customized logistics strategy based on their operations,
              customers, freight profile, and long-term goals. Whether you are shipping one package
              or thousands of pallets every month, KWC is built to grow alongside your business.
            </p>
            <p className="text-lg leading-8 text-muted">
              Our goal is not simply to move freight. Our goal is to become the logistics partner
              your business relies on for years.
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

      <Section title="What KWC provides" intro="The company supports a wide range of business models, freight profiles, and customer delivery requirements." className="bg-brand-pale">
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
              KWC uses business analysis, routing, and communication to maximize every route,
              reduce avoidable transportation costs, and improve delivery performance.
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
