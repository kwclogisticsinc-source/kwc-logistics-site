import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProvinceCoverageGraphic } from "@/components/DeliveryUI";
import { freightInsurance } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "KWC Logistics | Ontario Transportation & Freight Brokerage" },
  description: "Based in Kitchener since 2022. Ontario-wide pallet freight, commercial final-mile delivery and recurring routes, with freight brokerage across Canada and between Canada and the U.S.",
};

const services = [
  {
    title: "Pallet & truckload freight",
    copy: "Ship by the pallet, book a dedicated straight truck, or request a 53-foot dry van or reefer. We match equipment to your load, site access and delivery window.",
    href: "/services/freight",
  },
  {
    title: "Commercial final mile",
    copy: "Deliver to storefronts, offices and facilities with or without docks. Book tailgate service for palletized freight or cargo van service for business package batches.",
    href: "/services/b2b-final-mile",
  },
  {
    title: "Recurring distribution",
    copy: "Set up scheduled supplier pickups, store replenishment and multi-stop deliveries. We plan around your volume, store hours and receiving appointments.",
    href: "/regular-deliveries",
  },
];

export default function Home() {
  return (
    <div className="kwc-home">
      <section className="kwc-front">
        <Image src="/images/kwc-freightliner-warehouse.webp" alt="KWC-branded Freightliner straight trucks outside a warehouse" fill priority sizes="100vw" className="kwc-front-photo" />
        <div className="wrap kwc-front-inner">
          <p className="eyebrow">Kitchener, Ontario · Since 2022</p>
          <h1>Freight across Ontario.</h1>
          <p className="kwc-front-lead">From Windsor to Ottawa and across Northern Ontario, we move freight for businesses in cities, small towns and rural communities.</p>
          <div className="button-row">
            <Link href="/book-now" className="btn">Get a Freight Quote</Link>
            <Link href="/service-areas" className="kwc-front-link">Explore Ontario coverage <span className="kwc-link-arrow" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="wrap kwc-operating" aria-label="How KWC serves your lane">
        <article>
          <p className="eyebrow">Company-operated fleet</p>
          <h2>Ontario only.</h2>
          <p>Our Waterloo Region fleet operates exclusively within Ontario. We handle pallet shipments, commercial final-mile deliveries and recurring routes throughout the province.</p>
          <Link className="text-link" href="/equipment">See our equipment</Link>
        </article>
        <article>
          <p className="eyebrow">Freight brokerage</p>
          <h2>Canada and the U.S.</h2>
          <p>Qualified carriers handle every move beyond Ontario. KWC arranges capacity across Canada and between Canada and the U.S., and confirms the carrier and equipment before booking.</p>
          <Link className="text-link" href="/services/freight-brokerage">Explore freight brokerage</Link>
        </article>
      </section>

      <section className="kwc-home-services">
        <div className="wrap kwc-editorial">
          <div className="kwc-editorial-photo">
            <Image src="/images/kwc-freightliner-delivery.webp" alt="Freightliner straight truck making a tailgate delivery at a commercial site" fill sizes="(max-width: 760px) 100vw, 46vw" />
          </div>
          <div className="kwc-editorial-copy">
            <p className="eyebrow">Transportation services</p>
            <h2>From the loading dock to the storefront.</h2>
            <dl className="project-equipment-list">
              {services.map(({ title, copy, href }) => (
                <div key={href}><dt><Link href={href}>{title} <span className="kwc-link-arrow" aria-hidden="true" /></Link></dt><dd>{copy}</dd></div>
              ))}
            </dl>
            <Link href="/services" className="text-link">View all services</Link>
          </div>
        </div>
      </section>

      <section className="wrap kwc-editorial kwc-home-coverage">
        <div className="kwc-editorial-copy">
          <p className="eyebrow">Province-wide coverage</p>
          <h2>We serve every region of Ontario.</h2>
          <p>Our main freight corridors run along Highways 401 and 403, connecting Waterloo Region, the GTA, Southwestern Ontario and Eastern Ontario. We also serve Central and Northern Ontario, from Muskoka and Sudbury to Thunder Bay and communities beyond the major highways.</p>
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
