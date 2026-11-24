import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ContactCTA } from "@/components/DeliveryUI";
export const metadata: Metadata = {
  title: "About KWC",
  description:
    "KWC Logistics started in Kitchener in 2022. Learn how we help Waterloo Region businesses with final-mile delivery, LTL and recurring transportation.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="KITCHENER, ONTARIO · FOUNDED IN 2022"
        title="An Ontario carrier built around the handoff."
      >
        <p>
          From the supplier’s loading dock to your customer’s door, KWC helps businesses arrange Ontario freight, final-mile delivery and regular transportation.
        </p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="article-copy story-copy" id="our-story">
          <h2>Our story</h2>
          <p>
            KWC Logistics is a family-operated Canadian transportation company. We started providing services in Kitchener in 2022 so smaller businesses could ship as they grew without having to run a fleet of their own.
          </p>
          <p>
            Our team brings nine years of logistics and dispatch experience.
            We help businesses connect supplier pickups, freight movements and
            final-mile deliveries into a plan that fits their operations.
          </p>
          <p>
            Our company-operated fleet serves Ontario exclusively, including
            communities beyond the main commercial corridors. Through our{" "}
            <Link className="text-link" href="/services/freight-brokerage">freight brokerage</Link>,
            we review additional Ontario capacity, interprovincial shipments and
            Canada–U.S. lanes with qualified carrier partners.
          </p>
          <p>
            The galloping horse represents strength, speed and the conviction
            to keep moving. For us, success means helping a local shop reach
            more customers and giving businesses a reliable way to ship as they grow.
          </p>
          <p>
            From a single shipment to a recurring delivery route, we start by
            understanding your business—and where you want to take it.
          </p>
        </div>
        <section className="article-copy story-copy" id="safety" aria-labelledby="about-safety">
          <h2 id="about-safety">How we approach safety</h2>
          <p>Our drivers are trained, and our company-operated vehicles are checked before each trip. Our in-house mechanic maintains the fleet and helps resolve issues found during pre-trip checks.</p>
          <p>We set clear safety and performance standards for hiring and continued work with KWC. We use technology to review driver performance and address safety concerns so we can reduce avoidable setbacks for customers.</p>
        </section>
        <section className="article-copy" id="how-we-work">
          <h2>How we work with you</h2>
          <p>Before booking, we review what is moving, the pickup and receiving windows, and whether the freight needs a dock or liftgate. We confirm the operating carrier and equipment with you.</p>
          <h3>What to include in a freight request</h3>
          <p>Share the pickup and delivery locations, date or receiving window, pallet count, weight and dimensions. Tell us about restricted access, special handling or a site without a dock. For a recurring lane, include the stops and expected weekly volume.</p>
          <h3>How to follow up on a shipment</h3>
          <p>Have your shipment reference and stop details handy if you need to check a handoff or confirm an appointment. <Link className="text-link" href="/shipment-updates">Request a shipment update</Link></p>
          <div className="capability-grid">
            <article>
              <h3>One-time freight</h3>
              <p>Start with the route, pallet count or item dimensions, and receiving access.</p>
              <Link className="text-link" href="/book-now">Request a shipment quote</Link>
            </article>
            <article>
              <h3>Regular transportation</h3>
              <p>Share your typical volume, supplier pickups and the stops you need covered each week.</p>
              <Link className="text-link" href="/regular-deliveries">Plan a recurring route</Link>
            </article>
            <article>
              <h3>Carrier capacity</h3>
              <p>Tell us which Ontario lanes or final-mile handoffs you need covered.</p>
              <Link className="text-link" href="/transportation-partnerships">Discuss a partnership</Link>
            </article>
          </div>
        </section>
      </section>
      <ContactCTA />
    </>
  );
}
