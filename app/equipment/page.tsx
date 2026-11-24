import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/DeliveryUI";

export const metadata: Metadata = {
  title: "Straight Trucks, 53-Foot Dry Vans and Reefers",
  description: "KWC offers straight trucks with tailgate service, cargo van routes, and access to 53-foot dry vans and reefers.",
  alternates: { canonical: "/equipment" },
};

export default function EquipmentPage() {
  return (
    <>
      <PageIntro eyebrow="Equipment" title="The right truck for the delivery.">
        <p>We match equipment to your freight, receiving site and schedule. Tell us about the load and any access restrictions before we quote.</p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="project-equipment-grid">
          <div className="local-delivery">
            <Image src="/images/kwc-straight-trucks-dock-1400.webp" alt="Straight trucks at loading docks" fill sizes="(max-width: 720px) 100vw, 55vw" />
          </div>
          <dl className="project-equipment-list">
            <div><dt>Company-operated 26-foot straight truck</dt><dd>Our company-operated fleet runs exclusively within Ontario. The truck handles dry pallet freight, dedicated routes and commercial final-mile deliveries. Share pallet dimensions, loaded weight and how the truck can reach the receiving area.</dd></div>
            <div><dt>Tailgate and liftgate service</dt><dd>For stores and commercial stops without a dock. Tell us whether the surface is level and whether there is space to unload safely.</dd></div>
            <div><dt>Cargo van routes</dt><dd>Bulk packages, supplier collections and multi-stop deliveries for business customers. Include the number of packages and delivery stops.</dd></div>
            <div><dt>53-foot dry vans</dt><dd>For dry, palletized freight and larger dock-to-dock shipments. Include the pallet count, loaded dimensions, weight and dock access so we can confirm capacity.</dd></div>
            <div><dt>53-foot reefers</dt><dd>For eligible temperature-controlled loads. Include your required temperature range, commodity and loading instructions so we can confirm suitable equipment.</dd></div>
            <div><dt>Partner capacity</dt><dd>We work with qualified transportation partners for additional capacity, equipment and routes. Your quote confirms the operator and equipment. <Link className="text-link" href="/services/freight-brokerage">See freight brokerage</Link>.</dd></div>
          </dl>
        </div>
        <div className="article-copy">
          <h2>What we confirm before dispatch</h2>
          <p>We review the route, access, handling needs and equipment capacity with you. Your quote confirms the service and whether KWC or a partner will operate the shipment.</p>
          <div className="button-row">
            <Link href="/book-now" className="btn">Get a Quote</Link>
            <Link href="/safety" className="btn secondary">Fleet Safety</Link>
          </div>
        </div>
      </section>
    </>
  );
}
