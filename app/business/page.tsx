import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ContactCTA } from "@/components/DeliveryUI";
import { BusinessJourney } from "@/components/BusinessJourney";
import { CostEfficiency } from "@/components/CostEfficiency";
export const metadata: Metadata = {
  title: "Business Delivery Programs",
  description:
    "Supplier pickups, store replenishment, customer orders and recurring delivery routes across Ontario with KWC Logistics.",
  alternates: { canonical: "/business" },
};
export default function Business() {
  return (
    <>
      <PageIntro
        eyebrow="FOR BUSINESSES WITH PLACES TO GO"
        title="Your delivery network. Without building your own fleet."
      >
        <p>
          Connect supplier collections, store replenishment and customer orders
          with one practical transportation plan across Ontario.
        </p>
      </PageIntro>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BUILD AROUND THE WAY YOU SELL</p>
            <h2>
              From your next order
              <br />
              to your everyday operation.
            </h2>
          </div>
          <p>
            Orders from your website, phone or sales channels can all create
            delivery requirements. Tell us how the goods move today and what you
            want to improve.
          </p>
        </div>
        <div className="business-program-grid">
          {[
            [
              "01",
              "Supplier & vendor pickups",
              "Keep the next step supplied.",
              "Arrange collection from suppliers and vendors, then connect goods with your business or the next receiving location. Share collection references, readiness times, piece counts and access requirements so the pickup can be planned properly.",
              "Useful for parts, packaged stock, printed materials and commercial supplies.",
            ],
            [
              "02",
              "Retail & store replenishment",
              "Get the right stock to the next location.",
              "Discuss deliveries to one store or multiple branches. Receiving hours, appointment windows and unloading requirements help shape the route. Returns or transfers between locations can be included in the conversation.",
              "Useful for retailers, wholesalers and businesses expanding their regional reach.",
            ],
            [
              "03",
              "Customer order delivery",
              "Keep your customer relationship at the centre.",
              "Connect packaged orders with business or consumer destinations. We can discuss collection patterns, delivery regions, recipient instructions and returns collection. Brand-sensitive or white-label requirements are reviewed against the actual service available.",
              "Useful for e-commerce, local retailers and direct-to-customer businesses.",
            ],
            [
              "04",
              "Recurring routes & distribution",
              "Turn repeated movements into a program.",
              "Bring together regular collections, regional transport and final delivery. Start with approximate volume, stop locations, frequency and your preferred start date. We work through dedicated or suitable shared arrangements based on the operation.",
              "Useful for repeat orders, multi-location operations and planned delivery rounds.",
            ],
          ].map(([n, label, title, copy, example]) => (
            <article key={n}>
              <span className="program-number">{n}</span>
              <p className="eyebrow">{label}</p>
              <h3>{title}</h3>
              <p>{copy}</p>
              <p className="program-example">{example}</p>
              <Link className="text-link" href="/contact?service=regular#quote">
                Discuss this requirement →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="company-principles">
        <div className="wrap section">
          <p className="eyebrow">A PRACTICAL START</p>
          <h2>Build the program around the work.</h2>
          <div className="perspective-grid">
            {[
              [
                "Understand",
                "Locations, goods and order patterns",
                "Share pickup areas, delivery regions, approximate volume, frequency and the times that matter to your operation.",
              ],
              [
                "Coordinate",
                "Capacity, route and handoff",
                "Review vehicle suitability, direct service or carrier arrangements, receiving instructions and additional handling.",
              ],
              [
                "Agree",
                "Scope, communication and next steps",
                "Confirm the proposed service and price, then agree how changes, new stops and exceptions will be handled before starting.",
              ],
            ].map(([label, title, copy]) => (
              <article key={label}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section coverage-planning">
        <div>
          <p className="eyebrow">START WITH THE INFORMATION YOU HAVE</p>
          <h2>
            What does your
            <br />
            delivery week look like?
          </h2>
        </div>
        <div>
          <p>
            You do not need to commit to an entire program to begin the
            discussion. A current route, a handful of recurring destinations or
            a growth plan can all be useful starting points.
          </p>
          <ul className="business-checklist">
            <li>Pickup location or supplier areas</li>
            <li>Delivery regions and approximate stops</li>
            <li>Expected frequency and shipment volume</li>
            <li>Goods, measurements and handling requirements</li>
            <li>Ready times, receiving windows and start date</li>
          </ul>
          <Link className="btn" href="/contact?service=regular#quote">
            Plan My Business Deliveries →
          </Link>
        </div>
      </section>
      <BusinessJourney />
      <CostEfficiency />
      <ContactCTA />
    </>
  );
}
