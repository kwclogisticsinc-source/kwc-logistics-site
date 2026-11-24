import type { Metadata } from "next";
import Link from "next/link";
import { freightInsurance } from "@/lib/content";

export const metadata: Metadata = {
  title: "Freight Brokerage | Canada & Canada–U.S. Road Freight",
  description: "KWC Logistics arranges Canadian and Canada–U.S. road freight through qualified carriers. Request LTL, truckload, dry van or temperature-controlled capacity.",
  alternates: { canonical: "/services/freight-brokerage" },
};

const quote = "/contact?intent=brokerage#quote";

const bookingSteps = [
  ["Define the load", "Send pickup and delivery locations, commodity, pallet count, loaded dimensions and weight. Include dock access, appointments and any temperature or handling requirements."],
  ["Confirm carrier and equipment", "We look for capacity that fits the lane and load. We check insurance, operating authority where applicable, and equipment suitability before confirming the carrier and service with you."],
  ["Coordinate pickup and delivery", "KWC coordinates pickup instructions, receiving appointments and shipment updates with the operating carrier. For cross-border moves, tell us who handles customs clearance and share the applicable shipping documents before dispatch."],
];

export default function FreightBrokerage() {
  return (
    <div className="kwc-brokerage">
      <section className="kwc-broker-hero">
        <div className="wrap">
          <p className="eyebrow">Freight brokerage</p>
          <h1>One point of contact for freight beyond Ontario.</h1>
          <p>KWC arranges road freight across Canada and between Canada and the United States through qualified carrier partners. We confirm who will carry your freight, what equipment they’ll use and the agreed service before you book.</p>
          <div className="button-row">
            <Link href={quote} className="btn">Request a Brokerage Quote</Link>
            <Link className="kwc-front-link" href="/service-areas">See Ontario fleet coverage <span className="kwc-link-arrow" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="wrap kwc-operating" aria-label="Brokerage lanes and equipment">
        <article>
          <p className="eyebrow">Where we arrange capacity</p>
          <h2>Domestic and cross-border.</h2>
          <p>Ask us about Ontario–Québec lanes, including Montréal, other interprovincial moves and freight between Canada and the U.S. We can also source additional capacity within Ontario. The KWC company fleet operates exclusively within Ontario.</p>
        </article>
        <article>
          <p className="eyebrow">What we can arrange</p>
          <h2>LTL and full truckload.</h2>
          <p>Request shared truck space for pallet freight or dedicated equipment for a larger load. We can source 53-foot dry vans and reefers based on the lane, shipment requirements and carrier availability.</p>
        </article>
      </section>

      <section className="kwc-broker-process">
        <div className="wrap">
          <h2>How we arrange your shipment</h2>
          <ol>
            {bookingSteps.map(([title, copy]) => (
              <li key={title}><h3>{title}</h3><p>{copy}</p></li>
            ))}
          </ol>
          <p className="kwc-broker-insurance">{freightInsurance}</p>
        </div>
      </section>

      <section className="wrap kwc-home-close">
        <div>
          <h2>Have a lane you move regularly?</h2>
          <p>Share your weekly volume, delivery windows and equipment requirements so we can quote for the work you expect to move.</p>
          <div className="button-row">
            <Link className="btn" href={quote}>Get a Freight Quote</Link>
            <Link className="text-link" href="/drive-with-kwc">Apply as a carrier partner</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
