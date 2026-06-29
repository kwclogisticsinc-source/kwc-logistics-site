import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "KWC Logistics Inc is a family-run logistics company built from family trucking experience, dispatch, warehousing, transportation operations, and Waterloo Region roots.",
  alternates: { canonical: "/about" }
};

const timeline = [
  {
    title: "Father begins trucking career",
    body: "The KWC story starts with professional trucking and the discipline required to move freight safely and responsibly."
  },
  {
    title: "Owner-operator years",
    body: "After more than 25 years driving truck professionally, the family experience grew through owner-operator freight across Canada and the United States."
  },
  {
    title: "Dispatch experience",
    body: "Dispatching family equipment created a firsthand understanding of communication, timing, routing, customers, and problem solving."
  },
  {
    title: "Logistics and warehousing career",
    body: "Years in logistics, transportation operations, warehousing, dispatching, and customer service shaped the operating standards behind KWC."
  },
  {
    title: "Creation of KWC Logistics Inc.",
    body: "KWC now combines generations of trucking knowledge with modern logistics and supply chain experience."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About KWC" title="A Waterloo Region logistics company built from real experience.">
        <p>
          KWC Logistics Inc is a family-run logistics company inspired by professional trucking,
          dispatching, warehousing, and a genuine passion for freight.
        </p>
      </PageHero>

      <Section title="Kitchener. Waterloo. Cambridge." intro="KWC stands for Kitchener, Waterloo, and Cambridge. The company is proudly built in Waterloo Region and focused on serving local businesses with professionalism and care.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-3xl bg-brand-navy p-6 text-white shadow-glow sm:p-8">
            <h2 className="text-3xl font-black tracking-tight">Local roots. Serious delivery capability.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              Our mission is to become the preferred logistics partner for businesses throughout
              Kitchener, Waterloo, and Cambridge before expanding further across Ontario.
              Manufacturers, distributors, warehouses, retailers, and growing companies should
              feel that KWC understands this region because we are part of it.
            </p>
          </article>
          <article className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-3xl font-black tracking-tight text-ink">Built on Experience</h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Our company is built on more than 25 years of family trucking experience and 15 years
              of logistics, dispatching, transportation operations, and warehousing knowledge.
              We understand transportation from both the driver&apos;s seat and the operations office.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              That experience allows us to provide dependable, organized, and professional freight
              solutions without adding unnecessary confusion for customers.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Our Story" intro="This is a family business built from experience, hard work, and a genuine passion for freight." className="bg-brand-pale">
        <div className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={item.title} className="grid gap-4 sm:grid-cols-[110px_1fr]">
                <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">Step {index + 1}</div>
                <div className="border-b border-line pb-6 last:border-b-0 last:pb-0">
                  <h2 className="text-2xl font-black text-ink">{item.title}</h2>
                  <p className="mt-3 text-base leading-7 text-muted">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Quality. Safety. Family.">
        <div className="rounded-3xl bg-brand-navy p-6 text-white shadow-glow sm:p-8">
          <p className="max-w-4xl text-xl font-semibold leading-8 text-blue-100">
            Every shipment is treated as if it belongs to our own business. Quality matters.
            Communication matters. Reliability matters. Professionalism matters. Long-term
            relationships matter.
          </p>
          <p className="mt-8 max-w-4xl text-3xl font-black tracking-tight">
            Our goal isn&apos;t to become the biggest transportation company in Ontario.
            Our goal is to become the transportation company businesses trust the most.
          </p>
        </div>
      </Section>
    </>
  );
}
