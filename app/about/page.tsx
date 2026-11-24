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
        title="Small team. Big ambition."
      >
        <p>
          We help local businesses move pallets, book straight trucks and set up regular delivery routes across Ontario.
        </p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="article-copy story-copy">
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
            We operate straight-truck capacity with tailgate service and work
            with qualified transportation partners for additional equipment and
            broader coverage.
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
