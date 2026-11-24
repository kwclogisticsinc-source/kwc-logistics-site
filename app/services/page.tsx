import Link from "next/link";
import { commercialServices } from "@/lib/commercial-services";
import type { Metadata } from "next";
import { ContactCTA, PageIntro, ServiceCards } from "@/components/DeliveryUI";
export const metadata: Metadata = {
  title: "Bulk Package, Freight & Logistics Services",
  description:
    "Explore business bulk package delivery, pallet freight and recurring transportation routes.",
  alternates: { canonical: "/services" },
};
export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="KITCHENER · WATERLOO · CAMBRIDGE"
        title="Straight trucks, pallet freight and regular routes."
      >
        <p>
          Tell us where your freight needs to go, what you’re moving and how often. We’ll help select a truck or service that suits your route and budget.
        </p>
      </PageIntro>
      <section className="wrap content-section">
        <ul className="july-directory">
          {commercialServices.map(([slug, title, summary]) => (
            <li key={slug}>
              <Link className="text-link" href={`/services/${slug}`}>{title}</Link>
              <p>{summary}</p>
            </li>
          ))}
        </ul>
        <ServiceCards />
        <div className="notice">
          <strong>Direct service and the right partners.</strong> KWC handles
          suitable Ontario movements directly. Where a shipment needs different
          capacity, equipment or a wider reach, we coordinate with carrier
          partners. We confirm who will move your shipment and the service
          details before booking.
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
