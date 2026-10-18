import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ContactCTA } from "@/components/DeliveryUI";
export const metadata: Metadata = {
  title: "About KWC",
  description:
    "Meet KWC Logistics, founded by Jay Sandhu in Kitchener to help businesses grow through practical transportation plans.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="KITCHENER IS OUR STARTING POINT"
        title="Local people. A wider view of logistics."
      >
        <p>
          Packages, pallets and recurring deliveries—with a practical plan and a
          person to talk to.
        </p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="article-copy story-copy">
          <h2>Our story</h2>
          <p>
            KWC Logistics started with a simple belief: smaller businesses
            should have access to transportation that helps them grow.
          </p>
          <p>
            Our founder, <strong>Jay Sandhu</strong>, built his experience in
            traditional transportation, working with companies across dry van,
            refrigerated and flatbed freight. He later worked with a
            technology-based final mile delivery company, gaining a different
            perspective on how local delivery networks can help businesses reach
            more customers.
          </p>
          <p>
            Through that experience, Jay saw a gap. Smaller businesses often
            have the products, demand and ambition to expand, but organizing
            deliveries beyond their existing market can be costly and difficult.
            They need a logistics partner who understands their operation and
            can help make that next step practical.
          </p>
          <p>
            <strong>KWC Logistics was created to help close that gap.</strong>{" "}
            Based in Kitchener, we help businesses connect supplier pickups,
            freight movements and final mile deliveries into a plan that fits
            their needs. Through direct service and carrier partnerships, our
            goal is to help customers expand their delivery network without
            having to build a fleet of their own.
          </p>
          <p>
            From a single shipment to a recurring delivery route, we start by
            understanding your business—and where you want to take it.
          </p>
        </div>
        <div className="article-copy">
          <h2>Built around your next step.</h2>
          <p>
            Whether you’re collecting from suppliers, delivering to stores or
            reaching customers in a new region, KWC helps you put the
            transportation pieces together. We work through your locations,
            shipment volumes and delivery requirements to develop a practical
            plan.
          </p>
        </div>
        <div className="capability-grid">
          {[
            [
              "Start small",
              "Arrange a single shipment or discuss a recurring route.",
            ],
            [
              "Reach further",
              "Explore delivery options beyond your current service area.",
            ],
            [
              "Keep your focus",
              "Grow your business while we help coordinate the movement.",
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <Link className="btn" href="/contact">
          Let’s Talk About Your Deliveries →
        </Link>
      </section>
      <ContactCTA />
    </>
  );
}
