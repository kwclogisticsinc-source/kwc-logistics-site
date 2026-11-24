import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteEntry } from "@/components/QuoteEntry";
import { contact, freightInsurance } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "KWC Logistics | Waterloo Region Final-Mile Delivery & LTL Freight" },
  description: "Founded in Kitchener in 2022. Get a quote for straight-truck freight, pallet shipping and recurring commercial delivery along Ontario Highways 401 and 403.",
};

const services = [
  {
    title: "Pallet and truckload freight",
    copy: "One pallet, a dedicated straight truck or a 53-foot dry van or reefer. We confirm the equipment and operator with your quote.",
    href: "/services/freight",
  },
  {
    title: "Commercial final-mile delivery",
    copy: "Liftgate delivery to sites without a dock and cargo van routes for business package batches.",
    href: "/services/b2b-final-mile",
  },
  {
    title: "Scheduled business routes",
    copy: "Supplier collections, store replenishment and multi-stop distribution planned around your receiving windows.",
    href: "/regular-deliveries",
  },
];

const nextSteps = [
  { label: "Start a shipment", description: "Share the pickup, destination and load.", href: "#quick-quote" },
  { label: "Get a shipment update", description: "Contact dispatch about a confirmed booking.", href: "/shipment-updates" },
  { label: "Register your business", description: "Tell us what you ship and how often.", href: "/customer-registration" },
  { label: "Drive with KWC", description: "Apply as a driver, owner-operator or carrier.", href: "/drive-with-kwc" },
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

      <section className="kwc-next-steps" aria-label="Work with KWC">
        <div className="wrap">
          {nextSteps.map(({ label, description, href }) => (
            <Link className="kwc-next-step" href={href} key={href}>
              <strong>{label}</strong>
              <span>{description}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="wrap local-quote" id="quick-quote">
        <QuoteEntry />
      </div>

      <section className="wrap local-section project-equipment-grid" id="services">
        <div className="local-delivery">
          <Image src="/images/kwc-straight-trucks-dock-1400.webp" alt="Straight trucks lined up at loading docks" fill sizes="(max-width: 720px) 100vw, 54vw" />
        </div>
        <div>
          <h2>What we move</h2>
          <dl className="project-equipment-list">
            {services.map(({ title, copy, href }) => (
              <div key={href}><dt><Link href={href}>{title}</Link></dt><dd>{copy}</dd></div>
            ))}
          </dl>
          <Link href="/services" className="text-link">Explore all services</Link>
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
          <p><strong>{freightInsurance}</strong></p>
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
