import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { VisualCard } from "@/components/VisualCard";

export const metadata: Metadata = {
  title: "Fleet Solutions",
  description:
    "KWC Logistics fleet solutions and available equipment for final mile, LTL, reefer, small flatbed, cargo van, and regional freight across Southwestern Ontario.",
  alternates: { canonical: "/fleet" }
};

const equipment = [
  {
    src: "/images/straight-truck-kwc.jpg",
    title: "Straight Trucks",
    description: "Regional LTL, palletized freight, store replenishment, B2B delivery, and commercial freight."
  },
  {
    src: "/images/reefer-truck-kwc.jpg",
    title: "Reefer Freight",
    description: "Temperature-aware options for food, beverage, meal kit, and scheduled commercial shipments."
  },
  {
    src: "/images/flatbed-kwc.jpg",
    title: "Small Flatbed",
    description: "Equipment, materials, and specialized freight that needs more than a standard enclosed truck."
  },
  {
    src: "/images/straight-truck-kwc.jpg",
    title: "Cargo Van Hot Shot",
    description: "Urgent small freight, auto parts, boxes, supplies, and direct regional delivery runs."
  }
];

export default function FleetPage() {
  return (
    <>
      <PageHero eyebrow="Fleet Solutions" title="Available equipment for regional freight.">
        <p>
          KWC focuses on practical fleet solutions for final mile, LTL, B2B, D2B, B2C,
          and specialized regional delivery across Southwestern Ontario.
        </p>
      </PageHero>

      <Section
        title="Built for the freight local businesses actually move"
        intro="Straight truck, reefer, flatbed, and cargo van options help KWC support commercial freight without pretending to be a giant carrier."
        className="bg-brand-navy"
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {equipment.map((item) => (
            <VisualCard key={item.title} {...item} />
          ))}
        </div>
      </Section>
    </>
  );
}
