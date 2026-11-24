import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CoverageGraphic, FAQ, Icon } from "@/components/DeliveryUI";
import { BrandLogo } from "@/components/Logo";
import { QuoteEntry } from "@/components/QuoteEntry";
import { contact, freightInsurance, industries } from "@/lib/content";
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
          alt="Illustrative Freightliner straight truck with the KWC blue horse door logo at an Ontario loading dock"
          fill
          priority
          sizes="100vw"
          className="july-hero-image"
        />
        <div className="wrap july-hero-inner">
          <div className="local-hero-copy">
            <p className="eyebrow">Kitchener · Waterloo · Cambridge</p>
            <h1>Built locally. Driven further.</h1>
            <p>Freight, final-mile delivery and dedicated transportation built around your business. From a single pallet to recurring regional deliveries, we make logistics personal, practical and accessible.</p>
            <div className="button-row">
              <Link href="/contact?service=freight#quote" className="btn">Get a Freight Quote</Link>
              <Link href="/regular-deliveries#quote" className="btn secondary">Plan My Deliveries</Link>
            </div>
            <ul className="project-hero-facts">
              <li>Established 2022</li>
              <li>Waterloo Region based</li>
              <li>Ontario focused</li>
            </ul>
          </div>
          <p className="july-hero-caption">Illustrative truck and loading facility</p>
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

      <section className="project-equipment" aria-labelledby="equipment-title">
        <div className="wrap local-section project-equipment-grid">
          <figure className="local-delivery">
            <Image src="/images/kwc-straight-trucks-dock-1400.webp" alt="Illustrative straight trucks at an Ontario loading dock" fill sizes="(max-width: 840px) 100vw, 55vw" />
            <figcaption>Illustrative straight trucks at a loading dock</figcaption>
          </figure>
          <div>
            <h2 id="equipment-title">The right truck for the job.</h2>
            <dl className="project-equipment-list">
              <div><dt>KWC straight-truck capacity</dt><dd>Dry pallet freight and tailgate service for stores and other stops without a loading dock. We confirm vehicle size, access and liftgate limits before booking.</dd></div>
              <div><dt>Cargo van routes</dt><dd>Bulk packages, supplier collections and multi-stop distribution for business customers.</dd></div>
              <div><dt>Qualified partner capacity</dt><dd>Refrigerated freight, full truckloads and specialized equipment, subject to availability and shipment requirements.</dd></div>
            </dl>
            <Link className="text-link" href="/services">Explore equipment and services</Link>
          </div>
        </div>
      </section>

      <section className="local-business">
        <div className="wrap local-section local-business-grid">
          <figure className="local-delivery">
            <Image src="/images/kwc-warehouse-crossdock-1400.webp" alt="Illustrative warehouse with pallet freight staged for delivery" fill sizes="(max-width: 840px) 100vw, 48vw" />
            <figcaption>Illustrative warehouse and staged freight</figcaption>
          </figure>
          <div>
            <h2>Big Reach for Small Businesses.</h2>
            <p>You can get products to customers without running your own truck or transportation department. Start with a single pallet, ask about shared capacity where available, or set up regular store replenishment as you grow.</p>
            <ul className="local-industries">
              {industries.slice(0, 4).map(([title, description]) => <li key={title}><strong>{title}</strong><p>{description}</p></li>)}
            </ul>
            <Link href="/industries" className="text-link">Explore delivery by industry</Link>
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

      <section className="project-technology">
        <div className="wrap local-section project-equipment-grid">
          <div>
            <h2>Better logistics starts with better information.</h2>
            <p>Today, our quote form captures the details dispatch needs to check equipment, access and delivery windows. Customers can contact dispatch directly for updates on a confirmed shipment.</p>
          </div>
          <div>
            <h3>What we’re building toward</h3>
            <p>Digital shipment records, verified delivery milestones and electronic proof of delivery. Better information can help dispatch group compatible freight, plan more efficient routes and reduce paperwork.</p>
            <Link href="/shipment-updates" className="text-link">Get a shipment update</Link>
          </div>
        </div>
      </section>

      <section className="wrap local-section project-equipment-grid">
        <div>
          <h2>Small team. Big ambition.</h2>
          <p>We started in Kitchener in 2022 because good transportation should be within reach of small businesses. Our team brings nine years of logistics and dispatch experience and the local knowledge to plan around real receiving conditions.</p>
          <Link href="/about" className="text-link">Read our story</Link>
        </div>
        <div>
          <h3>What customers can expect</h3>
          <p>Direct communication, flexible equipment options and clear pricing before you book. We confirm who is moving your freight and what the delivery includes.</p>
        </div>
      </section>

      <section className="wrap local-section" aria-labelledby="home-faq">
        <h2 id="home-faq">Freight FAQs</h2>
        <FAQ limit={5} />
      </section>

      <section className="wrap project-recruiting">
        <div>
          <h2>Drive with KWC Logistics.</h2>
          <p>We welcome applications from straight-truck drivers and owner-operators in Waterloo Region and surrounding areas.</p>
        </div>
        <Link href="/drive-with-kwc" className="btn secondary">See Driver Opportunities</Link>
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
