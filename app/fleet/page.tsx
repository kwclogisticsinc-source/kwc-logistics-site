import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { VisualCard } from "@/components/VisualCard";

export const metadata: Metadata = {
  title: "Fleet Solutions",
  description:
    "KWC Logistics fleet solutions for cargo van final mile, straight truck LTL, reefer freight, warehouse transfers, and regional delivery across Southern Ontario.",
  alternates: { canonical: "/fleet" }
};

const equipment = [
  {
    src: "/images/kwc-straight-trucks-dock.png",
    title: "Straight Trucks & Reefer Units",
    description: "Regional LTL, palletized freight, retail replenishment, dock-to-dock work, and food-related shipments."
  },
  {
    src: "/images/kwc-cargo-van-dock.png",
    title: "Cargo Vans",
    description: "Final mile, parts runs, small freight, cartons, urgent local deliveries, and same-day work."
  },
  {
    src: "/images/kwc-warehouse-crossdock.png",
    title: "Warehouse & Cross-Dock Support",
    description: "Dock coordination, staged freight, pallet handling, route loading, warehouse transfers, and distribution support."
  },
  {
    src: "/images/kwc-yard-fleet.png",
    title: "Regional Freight Network",
    description: "Southern Ontario coverage built around Kitchener-Waterloo, Cambridge, Toronto, London, Windsor, Kingston, and nearby lanes."
  }
];

export default function FleetPage() {
  return (
    <>
      <PageHero eyebrow="Fleet Solutions" title="Equipment and partners for regional freight.">
        <p>
          KWC focuses on practical equipment for final mile, LTL freight, warehouse transfers,
          dedicated routes, and regional delivery across Southern Ontario.
        </p>
      </PageHero>

      <Section
        title="Built for the freight local businesses actually move"
        intro="Cargo vans, straight trucks, reefer units, dock operations, and partner capacity help KWC support commercial freight with a practical regional model."
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
