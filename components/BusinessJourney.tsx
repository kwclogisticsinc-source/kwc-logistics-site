import Link from "next/link";
import { SitePhoto } from "./SitePhoto";
export function BusinessJourney() {
  return (
    <section className="wrap section business-journey">
      <SitePhoto
        src="/images/business-orders.webp"
        alt="Illustrative business owner preparing parcels for customer deliveries"
        caption="Illustrative order preparation"
      />
      <div>
        <p className="eyebrow">CONNECT THE WORK BEHIND EVERY ORDER</p>
        <h2>
          From the order
          <br />
          to the customer’s door.
        </h2>
        <p>
          A practical delivery plan connects what happens before collection with
          what needs to happen at the final handoff.
        </p>
        <ol>
          {[
            [
              "Prepare",
              "Confirm the goods, packaging, references and when the order is ready.",
            ],
            [
              "Collect",
              "Connect the supplier or business pickup with suitable vehicle capacity.",
            ],
            [
              "Move",
              "Coordinate local, regional or highway transport around the actual requirements.",
            ],
            [
              "Deliver",
              "Work through receiving hours, access, recipient instructions and returns needs.",
            ],
          ].map(([title, text], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link className="text-link" href="/contact?service=regular#quote">
          Build Your Business Delivery Plan →
        </Link>
      </div>
    </section>
  );
}
