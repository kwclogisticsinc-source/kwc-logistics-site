import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/DeliveryUI";
import { BrandLogo } from "@/components/Logo";
import { QuoteEntry } from "@/components/QuoteEntry";
import { contact, freightInsurance } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "KWC Logistics | Waterloo Region Final-Mile Delivery & LTL Freight" },
  description: "Founded in Kitchener in 2022. Get a quote for straight-truck freight, pallet shipping and recurring commercial delivery along Ontario Highways 401 and 403.",
};

const services = [
  {
    icon: "pin",
    title: "B2B final-mile & tailgate",
    copy: "Deliver pallets to stores and commercial receiving sites. Ask about liftgate service for locations without a dock.",
    href: "/services/b2b-final-mile",
  },
  {
    icon: "route",
    title: "Dedicated routes & retail distribution",
    copy: "Plan supplier pickups, store replenishment and regular delivery across multiple locations.",
    href: "/regular-deliveries#quote",
  },
  {
    icon: "box",
    title: "LTL & per-pallet shipping",
    copy: "Move one pallet or several with shared capacity where available.",
    href: "/services/ltl-freight",
  },
  {
    icon: "truck",
    title: "B2B bulk package delivery",
    copy: "Move batches of business packages in a cargo van, with scheduled pickups and multiple delivery stops.",
    href: "/services/courier",
  },
  {
    icon: "truck",
    title: "Expedited freight",
    copy: "Share your deadline so we can assess direct and same-day options where capacity permits.",
    href: "/services/expedited-freight",
  },
  {
    icon: "box",
    title: "Refrigerated freight",
    copy: "Arrange suitable temperature-controlled equipment through qualified partners.",
    href: "/services/refrigerated-transportation",
  },
  {
    icon: "route",
    title: "North American freight",
    copy: "Coordinate Canada-wide and Canada–USA shipments through our transportation partners.",
    href: "/services/canada-usa-freight",
  },
];

export default function Home() {
  return (
    <div className="local-home">
      <section className="local-hero july-hero">
        <Image
          src="/images/kwc-waterloo-straight-truck.webp"
          alt="White straight truck beside a loading dock"
          fill
          priority
          sizes="100vw"
          className="july-hero-image"
        />
        <div className="wrap july-hero-inner">
          <div className="local-hero-copy">
            <p className="eyebrow">Kitchener · Waterloo · Cambridge</p>
            <h1>Built to move business.</h1>
            <p>From a single pallet to a full truckload, we help businesses move freight, deliver to customers and keep regular routes running.</p>
            <div className="button-row">
              <Link href="/contact?service=freight#quote" className="btn">Get a Freight Quote</Link>
              <Link href="/services" className="btn secondary">Explore Our Services</Link>
            </div>
            <ul className="project-hero-facts">
              <li>Providing transportation since 2022</li>
              <li>Waterloo Region based</li>
              <li>Ontario focused</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="wrap local-quote">
        <QuoteEntry />
      </div>

      <section className="wrap booking-expectations" aria-labelledby="booking-expectations">
        <div className="booking-intro">
          <BrandLogo decorative />
          <div>
            <h2 id="booking-expectations">Know what you’re booking.</h2>
            <p>Based in Kitchener since 2022, we operate straight trucks with tailgate capacity and arrange broader lanes through qualified partners.</p>
            <p><strong>{freightInsurance}</strong></p>
          </div>
        </div>
        <ol className="booking-steps">
          <li><h3>Tell us about the load</h3><p>Send the route, shipment size, receiving hours and any liftgate or temperature needs.</p></li>
          <li><h3>Review the quote</h3><p>We confirm the equipment, carrier, available timing and price for your shipment.</p></li>
          <li><h3>Approve the booking</h3><p>Once you accept the details, we confirm the plan for pickup and delivery.</p></li>
        </ol>
      </section>

      <section className="wrap local-section" id="services">
        <div className="local-section-heading">
          <h2>How can we help you ship?</h2>
          <Link href="/services" className="text-link">All transportation services</Link>
        </div>
        <div className="local-services">
          {services.map(({ icon, title, copy, href }) => (
            <article key={title}>
              <Icon name={icon} size={26} />
              <h3><Link href={href}>{title}</Link></h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="local-business">
        <div className="wrap local-section local-business-grid">
          <div className="local-delivery">
            <Image src="/images/kwc-warehouse-crossdock-1400.webp" alt="Pallet freight staged inside a warehouse" fill sizes="(max-width: 840px) 100vw, 48vw" />
          </div>
          <div>
            <h2>Providing transportation since 2022.</h2>
            <p>KWC started providing transportation services in 2022. From Kitchener, we help businesses organize supplier pickups, move pallets and replenish stores across Waterloo Region and Ontario.</p>
            <p>You can start with a single pallet or ask us to plan a recurring route around your receiving windows and shipping volume.</p>
            <Link href="/about" className="text-link">Read Our Story</Link>
            <Link href="/regular-deliveries" className="text-link home-business-link">Plan Regular Deliveries</Link>
          </div>
        </div>
      </section>

      <section className="wrap local-section" aria-labelledby="operations-heading">
        <h2 id="operations-heading">How KWC moves your freight</h2>
        <ul className="july-directory operations-actions">
          <li><Link className="text-link" href="/equipment">Equipment</Link><p>Straight trucks, tailgates, 53-foot dry vans and reefers.</p></li>
          <li><Link className="text-link" href="/safety">Safety</Link><p>Driver standards, pre-trip checks and freight insurance.</p></li>
          <li><Link className="text-link" href="/technology">Technology</Link><p>Shipment intake, dispatch and driver performance reviews.</p></li>
          <li><Link className="text-link" href="/service-areas">Ontario Coverage</Link><p>Waterloo Region, Highway 401 and 403 corridors, and partner lanes.</p></li>
        </ul>
      </section>

      <section className="local-contact">
        <div className="wrap local-section">
          <h2>Your business has somewhere to go. Let’s get it there.</h2>
          <p>One pallet, a dedicated truck or an ongoing contract. Share the route and we’ll take it from there.</p>
          <div className="button-row">
            <Link href="/contact?service=freight#quote" className="btn">Get a Freight Quote</Link>
            <a href={`mailto:${contact.email}`} className="btn secondary">Speak with Dispatch</a>
            <Link href="/customer-registration" className="btn secondary">Register Your Business</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
