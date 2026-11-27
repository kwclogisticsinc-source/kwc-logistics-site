import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ContactCTA, FAQ } from "@/components/DeliveryUI";
export const metadata: Metadata = {
  title: "Shipping Help",
  description:
    "What to prepare for a bulk package or freight quote, including package measurements, pallets, access and timing.",
  alternates: { canonical: "/resources" },
};
export default function Resources() {
  return (
    <>
      <PageIntro
        eyebrow="A LITTLE PREPARATION GOES A LONG WAY"
        title="You Don’t Need to Speak Logistics."
      >
        <p>Start with what you know. We can help work through the rest.</p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="capability-grid">
          {[
            [
              "Preparing a bulk package route?",
              "Share pickup, delivery stops, package count, approximate dimensions and total weight. Include receiving windows and whether the route repeats.",
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
          <h2>Before You Ship</h2>
          <p>
            Package items suitably for road movement. Tell us about fragile
            items, unusual dimensions, stairs, loading restrictions and any
            special requirements before booking. Product and vehicle suitability
            are confirmed with the service.
          </p>
          <section id="receiving-access" aria-labelledby="receiving-access-heading">
            <h2 id="receiving-access-heading">Check Access at Pickup and Delivery</h2>
            <p>Check both locations. A warehouse may have a raised loading dock while the delivery site only has a street-level door.</p>
            <ul>
              <li><strong>Raised dock:</strong> Confirm the dock is available at your appointment time and ask who will load or unload the freight.</li>
              <li><strong>Ground-level receiving:</strong> Tell us whether the site has a forklift or needs a liftgate. Include the heaviest loaded pallet’s weight and dimensions, and describe the surface where the truck would unload.</li>
              <li><strong>Restricted access:</strong> Note low clearances, tight turns, stairs, curb restrictions or a long distance to the receiving door. Include receiving hours and any required appointment or check-in.</li>
            </ul>
            <p>KWC will confirm suitable equipment and the agreed handoff before booking. <Link className="text-link" href="/services/tailgate-delivery">Explore Tailgate and Liftgate Delivery</Link></p>
          </section>
          <h2>A Few Useful Terms</h2>
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
          <h2>Common Questions</h2>
          <FAQ />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
