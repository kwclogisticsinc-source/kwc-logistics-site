import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { VisualCard } from "@/components/VisualCard";

export const metadata: Metadata = {
  title: "Fleet",
  description:
    "KWC Logistics fleet and trusted carrier network provide access to professionally maintained modern transportation equipment for LTL, expedited, and straight truck freight.",
  alternates: { canonical: "/fleet" }
};

const equipment = [
  {
    src: "/images/kwc-straight-trucks-dock.png",
    title: "Freightliner Straight Trucks",
    description: "Commercial freight, skids, dock deliveries, liftgate coordination, and regional straight truck movement."
  },
  {
    src: "/images/kwc-cargo-van-dock.png",
    title: "Cargo Van & Expedited Equipment",
    description: "Smaller time-sensitive shipments, parts, cartons, and priority freight where speed and communication matter."
  },
  {
    src: "/images/kwc-yard-fleet.png",
    title: "LTL Equipment Access",
    description: "Equipment options for palletized freight, partial loads, commercial lanes, and Ontario-wide transportation needs."
  },
  {
    src: "/images/kwc-warehouse-crossdock.png",
    title: "Warehouse & Dock Capability",
    description: "Freight staging, cross-dock handling, route loading, warehouse transfers, and organized dock coordination."
  }
];

export default function FleetPage() {
  return (
    <>
      <PageHero eyebrow="Fleet" title="Professional equipment standards for dependable freight.">
        <p>
          Our fleet and trusted carrier network provide access to professionally maintained modern
          transportation equipment that meets our operating standards.
        </p>
      </PageHero>

      <Section
        title="Clean, maintained, and freight-ready"
        intro="KWC focuses on equipment quality, professional presentation, safety, and dependability without making claims that can become inaccurate over time."
        className="bg-brand-navy"
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {equipment.map((item) => <VisualCard key={item.title} {...item} />)}
        </div>
      </Section>

      <Section title="Fleet standards" intro="Transportation equipment should reflect the quality of the customer freight it carries.">
        <div className="grid gap-5 md:grid-cols-3">
          {["Professionally maintained equipment", "Modern operating standards", "Clean presentation", "Dependable transportation", "Preventative maintenance", "Safety-focused inspections"].map((item) => (
            <article key={item} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="mb-4 h-2 w-12 rounded-full bg-brand-blue" />
              <h2 className="text-xl font-black text-ink">{item}</h2>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
