import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/DeliveryUI";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Website and Quote Terms",
  description: "What to expect when you use the KWC Logistics website or request a freight quote.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <>
      <PageIntro eyebrow="Website terms" title="Quotes and Shipment Arrangements.">
        <p>These terms describe how to use the KWC Logistics website and request service.</p>
      </PageIntro>
      <section className="wrap content-section article-copy">
        <h2>Submitting a Request</h2>
        <p>A quote request starts a review. A shipment is booked after KWC and the customer confirm the service, price, equipment and timing. Any terms for the specific shipment are provided as part of that arrangement.</p>
        <h2>Information About Your Freight</h2>
        <p>Provide accurate dimensions, weight, commodity, access requirements and timing. Tell KWC about restricted materials, temperature needs or special handling before dispatch. Confirm facility availability and receiving instructions in writing before sending freight to a third-party site.</p>
        <h2>Privacy and Contact</h2>
        <p>See our <Link href="/privacy" className="text-link">Privacy Information</Link> for how enquiry details are used. For questions about a quote or shipment arrangement, email <a href={`mailto:${contact.email}`} className="text-link">{contact.email}</a>.</p>
      </section>
    </>
  );
}
