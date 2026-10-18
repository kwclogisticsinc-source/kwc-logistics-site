import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ContactCTA, FAQ } from "@/components/DeliveryUI";
export const metadata: Metadata = {
  title: "Shipping Help",
  description:
    "What to prepare for a courier or freight quote, including package measurements, pallets, access and timing.",
  alternates: { canonical: "/resources" },
};
export default function Resources() {
  return (
    <>
      <PageIntro
        eyebrow="A LITTLE PREPARATION GOES A LONG WAY"
        title="You don’t need to speak logistics."
      >
        <p>Start with what you know. We can help work through the rest.</p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="capability-grid">
          {[
            [
              "Sending a package?",
              "Share pickup and destination, number of packages, approximate dimensions and total weight. Tell us whether timing is flexible or urgent.",
            ],
            [
              "Moving pallets?",
              "Include pallet or piece count, dimensions with units, total weight and what the freight contains. Note dock access at both ends, appointments and extra handling.",
            ],
            [
              "Planning regular deliveries?",
              "An approximate volume, pickup area, delivery regions, frequency and preferred start date help us plan a suitable conversation.",
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="article-copy">
          <h2>Before you ship</h2>
          <p>
            Package items suitably for road movement. Tell us about fragile
            items, unusual dimensions, stairs, loading restrictions and any
            special requirements before booking. Product and vehicle suitability
            are confirmed with the service.
          </p>
          <h2>A few useful terms</h2>
          <p>
            <strong>LTL (less than truckload)</strong> means suitable freight
            can share vehicle capacity. <strong>FTL (full truckload)</strong>{" "}
            uses dedicated truck capacity. A{" "}
            <strong>tailgate or liftgate</strong> lowers suitable freight
            between the truck and ground level when there is no dock.
          </p>
          <Link className="text-link" href="/forms">
            Shipment checklist & downloadable forms →
          </Link>
          <h2>Common questions</h2>
          <FAQ />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
