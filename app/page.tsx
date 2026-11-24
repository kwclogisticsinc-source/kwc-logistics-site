import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CoverageGraphic, Icon } from "@/components/DeliveryUI";
import { QuoteEntry } from "@/components/QuoteEntry";
import { contact, industries } from "@/lib/content";
import { coverageCopy, coverageTitle } from "@/lib/ontario";

export const metadata: Metadata = {
  title: { absolute: "KWC Logistics | Straight-Truck Freight from Waterloo Region" },
  description: "Founded in Kitchener in 2022. Get a quote for straight-truck freight, pallet shipping and recurring commercial delivery along Ontario Highways 401 and 403.",
};

const services = [
  { icon: "box", title: "Pallet freight & LTL", copy: "Ship a single pallet or several. Ask about liftgate delivery for locations without a loading dock.", href: "/services/freight" },
  { icon: "truck", title: "Dedicated straight trucks", copy: "Arrange a dedicated vehicle for time-sensitive shipments, direct deliveries and jobs with multiple stops.", href: "/contact?service=freight#quote" },
  { icon: "route", title: "Recurring commercial routes", copy: "Set up regular supplier pickups, store replenishment, customer deliveries and returns.", href: "/services/logistics" },
];

export default function Home() {
  return (
    <div className="local-home">
      <section className="local-hero">
        <div className="wrap local-hero-grid">
          <div className="local-hero-copy">
            <p className="eyebrow">Kitchener · Waterloo · Cambridge</p>
            <h1>Straight-truck freight, right from Waterloo Region.</h1>
            <p>We started in Kitchener in 2022. Today, we help Ontario businesses move pallets, stock stores and run regular delivery routes along Highways 401 and 403.</p>
            <div className="button-row">
              <Link href="/contact?service=freight#quote" className="btn">Get a Freight Quote</Link>
              <Link href="/contact?service=regular#quote" className="btn secondary">Plan Regular Deliveries</Link>
            </div>
          </div>
          <figure className="local-truck">
            <Image src="/images/kwc-local-straight-truck.webp" alt="Illustrative scene of KWC-branded straight trucks at a warehouse loading dock" fill priority sizes="(max-width: 840px) 100vw, 58vw" />
            <figcaption>Illustrative KWC facility and straight trucks</figcaption>
          </figure>
        </div>
      </section>

      <div className="wrap local-quote">
        <QuoteEntry />
      </div>

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
          <figure className="local-delivery">
            <Image src="/images/kwc-local-delivery.webp" alt="Illustration of a straight-truck pallet delivery at a local receiving entrance" fill sizes="(max-width: 840px) 100vw, 48vw" />
            <figcaption>Illustrative commercial delivery</figcaption>
          </figure>
          <div>
            <h2>Deliveries that fit how local businesses work.</h2>
            <p>Tell us what has to move, where it needs to go and when your receiver can take it. We’ll work through the truck, handling and price with you.</p>
            <ul className="local-industries">
              {industries.slice(0, 4).map(([title]) => <li key={title}><Icon name="check" size={18} />{title}</li>)}
            </ul>
            <Link href="/about" className="text-link">Meet KWC Logistics</Link>
          </div>
        </div>
      </section>

      <section className="wrap local-section local-network">
        <div>
          <h2>{coverageTitle}</h2>
          {coverageCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <Link href="/service-areas" className="text-link">Explore the Ontario freight network</Link>
        </div>
        <CoverageGraphic />
      </section>

      <section className="local-contact">
        <div className="wrap local-section">
          <h2>Tell us about your next shipment.</h2>
          <p>One pallet, a dedicated truck or an ongoing contract. Share the route and we’ll take it from there.</p>
          <div className="button-row">
            <Link href="/contact?service=freight#quote" className="btn">Get a Freight Quote</Link>
            <a href={`mailto:${contact.email}`} className="btn secondary">Email KWC</a>
          </div>
        </div>
      </section>
    </div>
  );
}
