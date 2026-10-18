import type { Metadata } from "next";
import { ContactCTA, PageIntro, ServiceCards } from "@/components/DeliveryUI";
export const metadata: Metadata = {
  title: "Courier, Freight & Logistics Services",
  description:
    "From a single package to pallet delivery and recurring routes. Explore KWC Courier, freight and logistics coordination.",
  alternates: { canonical: "/services" },
};
export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="YOUR SHIPMENT. THE RIGHT SERVICE."
        title="Small parcel to full truckload."
      >
        <p>
          Choose a starting point. We’ll help match the route, equipment and
          handling to what you actually need.
        </p>
      </PageIntro>
      <section className="wrap content-section">
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
