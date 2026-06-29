import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Safety",
  description:
    "Safety comes before everything at KWC Logistics, including professional maintenance, preventative maintenance, vehicle inspections, road safety, cargo protection, compliance, and driver responsibility.",
  alternates: { canonical: "/safety" }
};

const standards = [
  "Professional maintenance",
  "Preventative maintenance",
  "Vehicle inspections",
  "Road safety",
  "Cargo protection",
  "Compliance",
  "Driver responsibility",
  "Equipment reliability"
];

export default function SafetyPage() {
  return (
    <>
      <PageHero eyebrow="Safety" title="Safety Comes Before Everything">
        <p>
          KWC Logistics believes every shipment deserves to arrive in the same condition it was
          received. Safety, maintenance, inspections, and responsible driving are part of how we operate.
        </p>
      </PageHero>

      <Section title="A safety-focused company culture" intro="Freight service is only dependable when equipment, drivers, dispatch, and customers are aligned around safe movement.">
        <div className="grid gap-4 md:grid-cols-4">
          {standards.map((item) => (
            <article key={item} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="mb-4 h-2 w-12 rounded-full bg-brand-blue" />
              <h2 className="text-lg font-black text-ink">{item}</h2>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Maintenance and responsibility" className="bg-brand-navy text-white">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/10 p-6">
            <h2 className="text-2xl font-black text-white">Dependable equipment matters</h2>
            <p className="mt-4 text-base leading-7 text-blue-100">
              Preventative maintenance, inspections, equipment reliability, and professional
              presentation are part of the KWC operating culture. Customer freight deserves
              dependable equipment and careful handling.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/10 p-6">
            <h2 className="text-2xl font-black text-white">Drivers represent the company</h2>
            <p className="mt-4 text-base leading-7 text-blue-100">
              Safe driving, clear communication, respect for customer sites, attention to detail,
              and professional conduct all support better freight service.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
