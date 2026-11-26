import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProvinceCoverageGraphic } from "@/components/DeliveryUI";
import { contact, freightInsurance } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "KWC Logistics | Ontario Transportation & Freight Brokerage" },
  description: "Based in Kitchener since 2022. Ontario first-mile pickup, pallet freight, liftgate and final-mile delivery, recurring transportation and partner-arranged freight.",
};

const customerPaths = [
  {
    title: "Ship Something",
    href: "/book-now",
    copy: "Send a pallet or eligible large item. Start with the pickup and delivery locations and tell us what you’re shipping.",
    action: "Start a One-Time Quote",
  },
  {
    title: "Business Transportation",
    href: "/regular-deliveries",
    copy: "Set up regular pickups, dedicated runs or distribution. Tell us your volume, stops and delivery windows.",
    action: "Plan Recurring Freight",
  },
  {
    title: "Transportation Partnerships",
    href: "/transportation-partnerships",
    copy: "Brokers, forwarders and logistics teams can request Ontario carrier capacity for a lane or an ongoing program.",
    action: "Request Carrier Capacity",
  },
] as const;

const services = [
  ["First-Mile Pickup", "/services/supplier-pickups", "Collect freight from suppliers, plants and retailers."],
  ["LTL and Pallet Freight", "/services/ltl-freight", "Move one pallet or several with shared capacity when available."],
  ["Full Truckload", "/services/full-truckload", "Arrange dedicated 53-foot dry van or reefer capacity when available."],
  ["Freight Handling", "/services/freight-handling", "Review palletizing, wrapping and preparation requirements before booking."],
  ["Storage and Cross-Docking", "/services/storage-cross-docking", "Tell us about your freight receiving or short-term storage needs."],
  ["Regional Linehaul", "/services/middle-mile-transportation", "Arrange road transfers between confirmed pickup and receiving points."],
  ["Final-Mile Delivery", "/services/residential-specialized-delivery", "Plan commercial and eligible residential deliveries, including liftgate access."],
] as const;

const journey = [
  ["Pickup", "Confirm when freight is ready and how the truck can access the site."],
  ["Prepare", "Review load dimensions, packaging and any handling needed."],
  ["Consolidate or Stage", "Assess compatible loads and whether a suitable facility can be arranged."],
  ["Transport", "Confirm the carrier, equipment and timing before you book."],
  ["Deliver", "Plan the handoff around the receiver’s access and appointment."],
] as const;

export default function Home() {
  return (
    <div className="kwc-home">
      <section className="kwc-front">
        <div className="kwc-front-inner">
          <p className="eyebrow">Kitchener, Ontario · Since 2022</p>
          <h1>Ontario Freight, from First Mile to Final Mile.</h1>
          <p className="kwc-front-lead">KWC connects pickup, regional freight and final-mile delivery for one-time shipments and ongoing transportation programs.</p>
          <div className="button-row">
            <Link href="/book-now" className="btn">Ship Something</Link>
            <a href="#shipping-options" className="kwc-front-link">Explore shipping options</a>
          </div>
          <p className="kwc-front-contact">24/7 dispatch <a href={contact.phoneHref}>{contact.phone}</a> · <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        </div>
        <div className="kwc-front-media">
          <Image src="/images/kwc-straight-truck-building.webp" alt="White Freightliner straight truck parked in front of a loading dock, with a large blue KWC horse decal on the cargo box" fill priority sizes="(max-width: 900px) 100vw, 62vw" className="kwc-front-photo" />
        </div>
      </section>

      <section className="wrap kwc-customer-paths" id="shipping-options" aria-labelledby="shipping-options-title">
        <h2 id="shipping-options-title">What Do You Need to Move?</h2>
        <ul>
          {customerPaths.map(({ title, href, copy, action }) => (
            <li key={href}>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Link className="text-link" href={href}>{action}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="kwc-home-services">
        <div className="wrap kwc-service-index">
          <h2>Choose the Service Your Shipment Needs.</h2>
          <ul>
            {services.map(([title, href, copy]) => (
              <li key={href}><Link className="text-link" href={href}>{title}</Link><p>{copy}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap kwc-industry-band">
        <h2>Freight Planned Around How You Receive.</h2>
        <div>
          <p>From store deliveries and supplier collections to bulky goods and eligible medical supplies, start with your receiving windows, access and handling needs.</p>
          <ul>
            <li><Link href="/industries/manufacturing">Manufacturing</Link></li>
            <li><Link href="/industries/grocery-food">Grocery and Food</Link></li>
            <li><Link href="/industries/wholesale">Wholesale</Link></li>
            <li><Link href="/industries/e-commerce">E-Commerce</Link></li>
            <li><Link href="/industries/medical-supplies">Medical Supplies</Link></li>
            <li><Link href="/industries/furniture-appliances">Furniture and Appliances</Link></li>
          </ul>
          <Link href="/industries" className="text-link">Explore Industries</Link>
        </div>
      </section>

      <section className="kwc-broker-process">
        <div className="wrap">
          <h2>From Pickup to Delivery.</h2>
          <ol className="kwc-journey">
            {journey.map(([title, copy]) => <li key={title}><h3>{title}</h3><p>{copy}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="wrap kwc-editorial">
        <div className="kwc-editorial-photo kwc-dock-photo">
          <Image src="/images/kwc-raised-loading-dock.webp" alt="KWC straight truck backed into a raised loading dock with its cab facing the yard" fill sizes="(max-width: 760px) 100vw, 46vw" />
        </div>
        <div className="kwc-editorial-copy">
          <h2>Regular Routes Built Around Your Business.</h2>
          <p>Share your stop list, shipment volume and receiving windows. We can review scheduled pickups, dedicated runs, regular LTL, store replenishment, overflow and final-mile delivery together.</p>
          <Link className="text-link" href="/regular-deliveries#quote">Request a Transportation Proposal</Link>
          <br />
          <Link className="text-link" href="/customer-registration">Request a Business Account</Link>
        </div>
      </section>

      <section className="kwc-home-services">
        <div className="wrap kwc-operating" aria-label="How KWC serves your lane">
          <article>
            <p className="eyebrow">Company-operated equipment</p>
            <h2>Ontario Regional Freight.</h2>
            <p>Our 26-foot straight truck with a liftgate operates exclusively in Ontario. We confirm equipment, site access and delivery timing for each shipment.</p>
            <Link className="text-link" href="/equipment">See Our Equipment</Link>
          </article>
          <article>
            <p className="eyebrow">Freight brokerage</p>
            <h2>Carrier Capacity by Arrangement.</h2>
            <p>Qualified carriers can provide additional capacity or handle shipments beyond Ontario. We confirm the operating carrier and lane before booking.</p>
            <Link className="text-link" href="/services/freight-brokerage">Explore Freight Brokerage</Link>
          </article>
        </div>
      </section>

      <section className="wrap kwc-canada-first" aria-labelledby="canada-first-title">
        <div className="kwc-canada-first-label">
          <Image src="/images/flag-of-canada.svg" alt="Canadian flag" width={52} height={26} />
          <p className="eyebrow">Canada first</p>
        </div>
        <h2 id="canada-first-title">Affordable Logistics for Canadian Businesses.</h2>
        <p>We’re building a freight network that helps Canadian businesses buy from Canadian suppliers and reach more customers here at home. That’s how we do our part to strengthen the Canadian economy. When tariffs put pressure on your costs or change where you source, we can help compare domestic freight options, combine supplier pickups where practical and plan recurring routes around your volume.</p>
        <Link className="text-link" href="/regular-deliveries#quote">Talk to Us About Your Canadian Freight</Link>
      </section>

      <section className="wrap kwc-editorial kwc-home-coverage">
        <div className="kwc-editorial-copy">
          <p className="eyebrow">Ontario coverage</p>
          <h2>Freight Delivery Across Ontario.</h2>
          <p>Our main freight corridors run along Highways 401 and 403, connecting Waterloo Region, the GTA, Southwestern Ontario and Eastern Ontario. The map shows our core routes up to Sudbury. We can arrange delivery anywhere in Ontario, including communities beyond the routes shown.</p>
          <p>Send us your city, postal code or community name. We’ll confirm timing, equipment and access for that location.</p>
          <Link href="/service-areas" className="text-link">View Coverage and Freight Lanes</Link>
        </div>
        <ProvinceCoverageGraphic />
      </section>

      <section className="kwc-home-trust">
        <div className="wrap kwc-editorial">
          <div className="kwc-editorial-copy">
            <p className="eyebrow">Built in Waterloo Region</p>
            <h2>Serving Ontario Businesses Since 2022.</h2>
            <p>We work with grocery stores, flower shops, e-commerce businesses and medical supply customers. Our drivers are trained, our vehicles are checked before each trip, and our in-house mechanic keeps the company fleet maintained.</p>
            <p>{freightInsurance}</p>
            <Link className="text-link" href="/safety">Read Our Safety Standards</Link>
          </div>
          <div className="kwc-editorial-photo">
            <Image src="/images/kwc-truck-maintenance.webp" alt="A mechanic working on a straight truck" fill sizes="(max-width: 760px) 100vw, 46vw" />
          </div>
        </div>
      </section>

      <section className="wrap kwc-home-close">
        <div>
          <h2>Planning Your Next Shipment?</h2>
          <p>Share the lane, load and delivery window. If it’s a recurring move, tell us how often it runs so we can price the work around your schedule.</p>
          <div className="button-row">
            <Link href="/book-now#quote-start" className="btn">Get a Freight Quote</Link>
            <Link href="/regular-deliveries" className="text-link">Discuss a Recurring Route</Link>
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
