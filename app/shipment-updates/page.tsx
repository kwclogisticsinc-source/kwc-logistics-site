import type { Metadata } from "next";
import { PageIntro } from "@/components/DeliveryUI";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Shipment Updates",
  description: "Contact KWC Logistics dispatch for updates on a confirmed shipment.",
  alternates: { canonical: "/shipment-updates" },
};

export default function ShipmentUpdates() {
  return (
    <>
      <PageIntro eyebrow="Dispatch" title="Get a shipment update.">
        <p>Email dispatch with your booking reference, company name and pickup date. We’ll use those details to find your shipment and verify what we can share.</p>
      </PageIntro>
      <section className="wrap content-section">
        <a className="btn" href={`mailto:${contact.email}?subject=Shipment%20update`}>Email Dispatch</a>
      </section>
    </>
  );
}
