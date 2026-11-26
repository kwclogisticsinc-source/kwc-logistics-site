import type { Metadata } from "next";
import { PageIntro } from "@/components/DeliveryUI";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Shipment Updates",
  description: "Reach KWC Logistics dispatch directly, 24/7, for live location and status updates on a confirmed shipment.",
  alternates: { canonical: "/shipment-updates" },
};

export default function ShipmentUpdates() {
  return (
    <>
      <PageIntro eyebrow="24/7 dispatch" title="Get a Live Shipment Update.">
        <p>Contact your KWC dispatcher directly for the live location and latest status of a confirmed shipment. Our dispatch team is available 24/7 and responds promptly by email.</p>
      </PageIntro>
      <section className="wrap content-section article-copy">
        <h2>What to Include</h2>
        <p>Have your booking reference, company name and pickup date ready so we can identify the shipment and verify what we can share.</p>
        <p>Call dispatch at <a className="text-link" href={contact.phoneHref}>{contact.phone}</a>.</p>
        <a className="btn" href={`mailto:${contact.email}?subject=Shipment%20update`}>Email Dispatch at {contact.email}</a>
      </section>
    </>
  );
}
