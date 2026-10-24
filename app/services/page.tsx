import type { Metadata } from "next";
import Link from "next/link";
import { ContactCTA, PageIntro, ServiceCards } from "@/components/DeliveryUI";
import { ShipmentPlanner } from "@/components/ShipmentPlanner";
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
        title="Courier. Freight. Ontario distribution."
      >
        <p>
          Cargo vans, trucks and coordinated carrier capacity connect local
          pickups, Ontario-wide lanes and final delivery. From the GTA and
          beyond to London and beyond, we build the service around your
          shipment.
        </p>
      </PageIntro>
      <section className="wrap content-section">
        <ServiceCards />
        <ShipmentPlanner />
        <section className="service-guide-section">
          <div className="article-copy">
            <h2>Which service is right for you?</h2>
            <p>
              Start with the job you need done. You don’t need to know the
              vehicle, freight abbreviation or route plan before getting in
              touch.
            </p>
          </div>
          <div className="service-explanations">
            <article>
              <h3>“I need something collected and delivered.”</h3>
              <p>
                KWC Courier is the starting point for documents, parcels,
                suitable larger packages and local business orders. Ask about
                one-off deliveries, urgent supplier pickups, multi-stop rounds
                or recurring collections.
              </p>
              <Link className="text-link" href="/services/courier">
                How courier delivery works →
              </Link>
            </article>
            <article>
              <h3>“I have pallets, a large load or extra handling.”</h3>
              <p>
                Freight service helps work through shared truck capacity, full
                truckloads, expedited movement and final-mile delivery. Tell us
                about docks, appointments, liftgate requirements and the help
                needed at pickup and destination.
              </p>
              <Link className="text-link" href="/services/freight">
                Understand freight & handling →
              </Link>
            </article>
            <article>
              <h3>“I need the whole delivery plan to work together.”</h3>
              <p>
                Logistics management connects suppliers, regions, carriers and
                delivery points. Discuss regular distribution, Canada/U.S. road
                freight or supporting arrangements such as staging,
                cross-docking and returns through suitable partners.
              </p>
              <Link className="text-link" href="/services/logistics">
                Explore logistics coordination →
              </Link>
            </article>
            <article>
              <h3>“My business needs deliveries every week.”</h3>
              <p>
                Recurring delivery needs can combine courier and freight
                services. Share your pickup area, delivery regions, stops,
                volume, preferred days and handling requirements. We’ll help
                assess a practical arrangement.
              </p>
              <Link className="text-link" href="/contact?service=regular#quote">
                Plan regular deliveries →
              </Link>
            </article>
          </div>
        </section>
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
