import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/DeliveryUI";
import { QuoteForm } from "@/components/QuoteForm";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Recurring Commercial Deliveries in Ontario",
  description: "Request regular supplier pickups, store replenishment, multi-stop delivery and dedicated routes from KWC Logistics.",
  alternates: { canonical: "/regular-deliveries" },
};

export default function RegularDeliveries() {
  return (
    <>
      <PageIntro eyebrow="Recurring commercial transportation" title="Business Transportation on a Regular Schedule.">
        <p>Tell us about your route, typical volume, delivery windows and how often you ship. We’ll review equipment, capacity and pricing with you.</p>
      </PageIntro>
      <div className="wrap contact-layout">
        <aside className="contact-aside">
          <h2>Plan Your Regular Route</h2>
          <p>Include supplier pickups, store stops, dock or tailgate access, and any returns you need picked up along the way.</p>
          <p><Link className="text-link" href="/customer-registration">Register Your Business</Link></p>
          <a className="text-link" href={`mailto:${contact.email}`}>{contact.email}</a>
        </aside>
        <QuoteForm initialKind="regular" fixedKind />
      </div>
    </>
  );
}
