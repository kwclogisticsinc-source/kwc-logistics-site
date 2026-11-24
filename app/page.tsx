import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProvinceCoverageGraphic } from "@/components/DeliveryUI";
import { QuoteEntry } from "@/components/QuoteEntry";
import { freightInsurance } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "KWC Logistics | Ontario Transportation & Freight Brokerage" },
  description: "Based in Kitchener since 2022. Ontario first-mile pickup, pallet freight, liftgate and final-mile delivery, recurring transportation and partner-arranged freight.",
};

const services = [
  ["First-mile pickup", "/services/supplier-pickups", "Collect freight from suppliers, plants and retailers."],
  ["LTL and pallet freight", "/services/ltl-freight", "Move one pallet or several with shared capacity when available."],
  ["Full truckload", "/services/full-truckload", "Arrange dedicated 53-foot dry van or reefer capacity when available."],
  ["Freight handling", "/services/freight-handling", "Review palletizing, wrapping and preparation requirements before booking."],
  ["Storage and cross-docking", "/services/storage-cross-docking", "Tell us about your freight receiving or short-term storage needs."],
  ["Regional linehaul", "/services/middle-mile-transportation", "Arrange road transfers between confirmed pickup and receiving points."],
  ["Final-mile delivery", "/services/residential-specialized-delivery", "Plan commercial and eligible residential deliveries, including liftgate access."],
] as const;

const journey = [
  ["Pickup", "Confirm when freight is ready and how the truck can access the site."],
  ["Prepare", "Review load dimensions, packaging and any handling needed."],
  ["Consolidate or stage", "Assess compatible loads and whether a suitable facility can be arranged."],
  ["Transport", "Confirm the carrier, equipment and timing before you book."],
  ["Deliver", "Plan the handoff around the receiver’s access and appointment."],
] as const;

export default function Home() {
  return (
    <div className="kwc-home">
      <section className="kwc-front">
        <div className="kwc-front-inner">
          <p className="eyebrow">Kitchener, Ontario · Since 2022</p>
          <h1>Ontario freight, from first mile to final mile.</h1>
          <p className="kwc-front-lead">KWC collects freight from suppliers, moves pallets between communities in our Ontario service area and delivers to businesses and eligible residential destinations.</p>
          <div className="button-row">
            <Link href="/book-now" className="btn">Ship Something</Link>
            <Link href="/regular-deliveries" className="kwc-front-link">Business Logistics Solutions</Link>
          </div>
        </div>
        <div className="kwc-front-media">
          <Image src="/images/kwc-branded-trucks-yard.webp" alt="Freightliner straight truck and dry van trailer with large KWC Logistics blue horse branding" fill priority sizes="(max-width: 900px) 100vw, 62vw" className="kwc-front-photo" />
        </div>
      </section>

      <section className="wrap kwc-quote-start" aria-label="Start a no-account freight quote">
        <QuoteEntry />
      </section>

      <section className="kwc-home-services">
        <div className="wrap kwc-service-index">
          <h2>Choose the service your shipment needs.</h2>
          <ul>
            {services.map(([title, href, copy]) => (
              <li key={href}><Link className="text-link" href={href}>{title}</Link><p>{copy}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap kwc-industry-band">
        <h2>Freight planned around how you receive.</h2>
        <div>
          <p>From store deliveries and supplier collections to bulky goods and eligible medical supplies, start with your receiving windows, access and handling needs.</p>
          <ul>
            <li><Link href="/industries/manufacturing">Manufacturing</Link></li>
            <li><Link href="/industries/grocery-food">Grocery and food</Link></li>
            <li><Link href="/industries/wholesale">Wholesale</Link></li>
            <li><Link href="/industries/e-commerce">E-commerce</Link></li>
            <li><Link href="/industries/medical-supplies">Medical supplies</Link></li>
            <li><Link href="/industries/furniture-appliances">Furniture and appliances</Link></li>
          </ul>
          <Link href="/industries" className="text-link">Explore industries</Link>
        </div>
      </section>

      <section className="kwc-broker-process">
        <div className="wrap">
          <h2>From pickup to delivery.</h2>
          <ol className="kwc-journey">
            {journey.map(([title, copy]) => <li key={title}><h3>{title}</h3><p>{copy}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="wrap kwc-editorial">
        <div className="kwc-editorial-photo">
          <Image src="/images/kwc-freightliner-delivery.webp" alt="Freightliner straight truck making a tailgate delivery at a commercial site" fill sizes="(max-width: 760px) 100vw, 46vw" />
        </div>
        <div className="kwc-editorial-copy">
          <h2>Regular routes built around your business.</h2>
          <p>Share your stop list, shipment volume and receiving windows. We can review scheduled pickups, dedicated runs, regular LTL, store replenishment, overflow and final-mile delivery together.</p>
          <Link className="text-link" href="/regular-deliveries#quote">Request a transportation proposal</Link>
          <br />
          <Link className="text-link" href="/customer-registration">Request a business account</Link>
        </div>
      </section>

      <section className="kwc-home-services">
        <div className="wrap kwc-operating" aria-label="How KWC serves your lane">
          <article>
            <p className="eyebrow">Company-operated equipment</p>
            <h2>Ontario regional freight.</h2>
            <p>Our 26-foot straight truck with a liftgate operates exclusively in Ontario. We confirm equipment, site access and delivery timing for each shipment.</p>
            <Link className="text-link" href="/equipment">See our equipment</Link>
          </article>
          <article>
            <p className="eyebrow">Freight brokerage</p>
            <h2>Carrier capacity by arrangement.</h2>
            <p>Qualified carriers can provide additional capacity or handle shipments beyond Ontario. We confirm the operating carrier and lane before booking.</p>
            <Link className="text-link" href="/services/freight-brokerage">Explore freight brokerage</Link>
          </article>
        </div>
      </section>

      <section className="wrap kwc-editorial kwc-home-coverage">
        <div className="kwc-editorial-copy">
          <p className="eyebrow">Ontario coverage</p>
          <h2>Ontario freight as far north as Sudbury.</h2>
          <p>Our main freight corridors run along Highways 401 and 403, connecting Waterloo Region, the GTA, Southwestern Ontario and Eastern Ontario. We also serve selected communities in Central Ontario and along the route to Sudbury, our current northern limit.</p>
          <p>Send us your city, postal code or community name. We’ll confirm timing, equipment and access for that location.</p>
          <Link href="/service-areas" className="text-link">View coverage and freight lanes</Link>
        </div>
        <ProvinceCoverageGraphic />
      </section>

      <section className="kwc-home-trust">
        <div className="wrap kwc-editorial">
          <div className="kwc-editorial-copy">
            <p className="eyebrow">Built in Waterloo Region</p>
            <h2>Serving Ontario businesses since 2022.</h2>
            <p>We work with grocery stores, flower shops, e-commerce businesses and medical supply customers. Our drivers are trained, our vehicles are checked before each trip, and our in-house mechanic keeps the company fleet maintained.</p>
            <p>{freightInsurance}</p>
            <Link className="text-link" href="/safety">Read our safety standards</Link>
          </div>
          <div className="kwc-editorial-photo">
            <Image src="/images/kwc-truck-maintenance.webp" alt="A mechanic working on a straight truck" fill sizes="(max-width: 760px) 100vw, 46vw" />
          </div>
        </div>
      </section>

      <section className="wrap kwc-home-close">
        <div>
          <h2>Planning your next shipment?</h2>
          <p>Share the lane, load and delivery window. If it’s a recurring move, tell us how often it runs so we can price the work around your schedule.</p>
          <div className="button-row">
            <Link href="/book-now" className="btn">Get a Freight Quote</Link>
            <Link href="/regular-deliveries" className="text-link">Discuss a recurring route</Link>
          </div>
        </div>
        <nav aria-label="Customer and driver resources">
          <Link href="/shipment-updates">Get a shipment update <span className="kwc-link-arrow" aria-hidden="true" /></Link>
          <Link href="/customer-registration">Register your business <span className="kwc-link-arrow" aria-hidden="true" /></Link>
          <Link href="/drive-with-kwc">Drive with KWC <span className="kwc-link-arrow" aria-hidden="true" /></Link>
        </nav>
      </section>
    </div>
  );
}
