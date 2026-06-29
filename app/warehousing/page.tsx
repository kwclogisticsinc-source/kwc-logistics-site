import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { VisualCard } from "@/components/VisualCard";

export const metadata: Metadata = {
  title: "Warehousing",
  description:
    "KWC Logistics provides warehousing, freight staging, warehouse transfers, cross-docking, and pallet handling support throughout Kitchener, Waterloo, Cambridge, and Ontario.",
  alternates: { canonical: "/warehousing" }
};

const cards = [
  {
    src: "/images/kwc-warehouse-crossdock.png",
    title: "Freight Staging",
    description: "Organized space and handling support for freight that needs to be received, sorted, held, or prepared for outbound movement."
  },
  {
    src: "/images/kwc-straight-trucks-dock.png",
    title: "Warehouse Transfers",
    description: "Movement between warehouses, suppliers, customer docks, storage locations, and commercial facilities."
  },
  {
    src: "/images/kwc-yard-fleet.png",
    title: "Cross-Dock Support",
    description: "Inbound freight organized for outbound routing, consolidation, route loading, and efficient regional distribution."
  }
];

export default function WarehousingPage() {
  return (
    <>
      <PageHero eyebrow="Warehousing" title="Warehousing and cross-dock support for regional freight.">
        <p>
          KWC helps businesses manage freight that needs staging, transfer, consolidation,
          cross-docking, pallet handling, or organized movement through Waterloo Region and Ontario.
        </p>
      </PageHero>
      <Section title="Warehouse operations that support transportation" intro="Warehousing is most valuable when it helps freight move cleaner, faster, and with fewer unnecessary touches.">
        <div className="grid gap-5 lg:grid-cols-3">
          {cards.map((card) => <VisualCard key={card.title} {...card} />)}
        </div>
      </Section>
      <Section title="What KWC can support" className="bg-brand-pale">
        <div className="grid gap-4 md:grid-cols-3">
          {["Pallet staging", "Inbound receiving coordination", "Outbound route loading", "Warehouse-to-warehouse transfers", "Cross-dock consolidation", "Commercial freight handling"].map((item) => (
            <article key={item} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <h2 className="text-xl font-black text-ink">{item}</h2>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/request-a-quote">Request Warehousing Support</ButtonLink>
        </div>
      </Section>
    </>
  );
}
