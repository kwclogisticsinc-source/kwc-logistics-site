import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CoverageGraphic, FAQ, Icon } from "@/components/DeliveryUI";
import { QuoteEntry } from "@/components/QuoteEntry";
import { contact, industries } from "@/lib/content";
import { coverageCopy, coverageTitle } from "@/lib/ontario";

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
          src="/images/kwc-freightliner-warehouse.webp"
          alt="Illustrative scene of Freightliner straight trucks with KWC cab-door logos at a warehouse"
          fill
          priority
          sizes="100vw"
          className="july-hero-image"
        />
        <div className="wrap july-hero-inner">
          <div className="local-hero-copy">
            <p className="eyebrow">Local Roots. Limitless Reach.</p>
            <h1>Your Local Partner for Final-Mile Delivery &amp; LTL Freight.</h1>
            <p>From a single pallet to recurring commercial deliveries, KWC Logistics provides flexible transportation solutions across Kitchener, Waterloo, Cambridge, Ontario and North America.</p>
            <div className="button-row">
              <Link href="/contact?service=freight#quote" className="btn">Get a Freight Quote</Link>
              <Link href="/regular-deliveries#quote" className="btn secondary">Discuss Regular Deliveries</Link>
            </div>
          </div>
          <p className="july-hero-caption">Illustrative facility and straight trucks</p>
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
            <Image src="/images/kwc-freightliner-delivery.webp" alt="Illustration of a straight-truck pallet delivery at a local receiving entrance" fill sizes="(max-width: 840px) 100vw, 48vw" />
            <figcaption>Illustrative commercial delivery</figcaption>
          </figure>
          <div>
            <h2>Big Reach for Small Businesses.</h2>
            <p>You can get products to customers without running your own truck or transportation department. Start with a single pallet, ask about shared capacity where available, or set up regular store replenishment as you grow.</p>
            <ul className="local-industries">
              {industries.slice(0, 4).map(([title]) => <li key={title}><Icon name="check" size={18} />{title}</li>)}
            </ul>
            <Link href="/services/ltl-freight" className="text-link">See how pallet shipping works</Link>
          </div>
        </div>
      </section>

      <section className="wrap local-section july-recurring">
        <div>
          <h2>Your Business. Our Delivery Network.</h2>
          <p>Plan daily, weekly or other recurring deliveries around your business. We help coordinate supplier pickups, store replenishment, scheduled routes, multiple delivery locations and regional distribution. We confirm frequency, equipment and capacity with you before booking.</p>
          <Link href="/regular-deliveries#quote" className="btn">Discuss Regular Deliveries</Link>
        </div>
        <aside>
          <h3>Based in Kitchener since 2022</h3>
          <p>Our team brings nine years of logistics and dispatch experience, company-operated straight-truck capacity with tailgate service, and access to qualified transportation partners.</p>
        </aside>
      </section>

      <section className="wrap local-section local-network">
        <div>
          <h2>{coverageTitle}</h2>
          {coverageCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p>Start with Waterloo Region, Guelph or a shipment between KWC and the GTA. Qualified partners help us coordinate longer Ontario, Canada-wide and Canada–USA routes.</p>
          <Link href="/service-areas" className="text-link">Explore the Ontario freight network</Link>
        </div>
        <CoverageGraphic />
      </section>

      <section className="wrap local-section" aria-labelledby="home-faq">
        <h2 id="home-faq">Freight FAQs</h2>
        <FAQ limit={5} />
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
