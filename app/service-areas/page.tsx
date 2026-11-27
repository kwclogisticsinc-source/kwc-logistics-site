import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CoverageGraphic, PageIntro, ProvinceCoverageGraphic } from "@/components/DeliveryUI";
import { coverageTitle, lanes, regions, services } from "@/lib/ontario";
import { freightPages } from "@/lib/freight-pages";
import { localAreas } from "@/lib/local-areas";

export const metadata: Metadata = {
  title: "Ontario Freight Coverage | Highways 401 And 403",
  description: "Request delivery anywhere in Ontario. Explore KWC’s core routes along Highways 401 and 403 and as far north as Sudbury.",
  alternates: { canonical: "/service-areas" },
};

export default function Coverage() {
  return (
    <>
      <PageIntro eyebrow="ONTARIO REGIONAL TRANSPORTATION" title={coverageTitle}>
        <p>From our Waterloo Region base, we arrange freight across Ontario. The map shows our core routes up to Sudbury. For any destination, share your postal code and shipment details so we can confirm timing, equipment and the operating carrier.</p>
      </PageIntro>
      <div className="wrap content-section article-copy">
        <nav className="kwc-coverage-jump" aria-label="On this Ontario coverage page">
          <a href="#ontario-corridor-map">Corridor Map and Lanes</a>
          <a href="#ontario-service-regions">Service Regions</a>
          <a href="#ontario-freight-guides">Local and Lane Guides</a>
          <Link href="/contact?service=freight#quote">Request a Freight Quote</Link>
        </nav>
        <div className="kwc-coverage-overview">
          <ProvinceCoverageGraphic />
          <aside aria-labelledby="corridor-guide-title">
            <h2 id="corridor-guide-title">Ontario’s Freight Corridors</h2>
            <dl>
              <div><dt>Highway 401</dt><dd>Windsor, London and Waterloo Region through the GTA to Kingston and Cornwall.</dd></div>
              <div><dt>Highway 403</dt><dd>Woodstock, Brantford, Hamilton and Burlington to Mississauga.</dd></div>
              <div><dt>Highways 416 and 417</dt><dd>Ottawa connections to the 401 and onward toward Québec.</dd></div>
              <div><dt>Central and northern routes</dt><dd>Selected stops through Central Ontario, North Bay and Sudbury.</dd></div>
            </dl>
            <a href="#ontario-corridor-map" className="text-link">View the detailed corridor map</a>
          </aside>
        </div>
        <section id="ontario-service-regions">
          <h2>Current Ontario Service Regions</h2>
          <p>The cities below are examples of where we serve. Share your destination or postal code so we can confirm timing, equipment and access, including locations off the main highway corridors.</p>
          <div className="freight-grid">
            {regions.map(([name, cities]) => <article key={name}><h3>{name}</h3><p>{cities}</p></article>)}
          </div>
        </section>
        <section id="ontario-corridor-map">
          <h2>Freight Lanes in Both Directions</h2>
          <CoverageGraphic />
          <div className="freight-grid">
            {lanes.map((lane) => <div key={lane}>{lane}</div>)}
          </div>
          <p>We confirm pickup and delivery timing, equipment and capacity for each shipment or recurring route.</p>
        </section>
        <section className="kwc-coverage-photo-band">
          <Image src="/images/kwc-waterloo-straight-truck.webp" alt="White KWC straight truck in a freight yard" width={1536} height={1024} sizes="(max-width: 800px) 92vw, 46vw" />
          <div>
            <h2>Freight Brokerage Beyond Ontario</h2>
            <p>Ask about partner-arranged freight between Ontario and Québec, including Montréal. We can also review other interprovincial and Canada–U.S. routes. We confirm lane availability and the operating carrier before booking.</p>
            <Link href="/services/freight-brokerage" className="text-link">Explore Freight Brokerage</Link>
          </div>
        </section>
        <section>
          <h2>Commercial Transportation Services</h2>
          <ul className="freight-grid">{services.map((service) => <li key={service}>{service}</li>)}</ul>
        </section>
        <section id="ontario-freight-guides">
          <h2>Local Freight and Delivery Guides</h2>
          <ul className="freight-grid">
            {localAreas.map(({ slug, title }) => <li key={slug}><Link className="text-link" href={`/service-areas/${slug}`}>{title}</Link></li>)}
          </ul>
        </section>
        <section>
          <h2>Freight Guides by Lane and Service</h2>
          <ul className="freight-grid">
            {freightPages.filter((page) => !localAreas.includes(page)).map(({ slug, title }) => <li key={slug}><Link className="text-link" href={`/service-areas/${slug}`}>{title}</Link></li>)}
          </ul>
        </section>
        <div className="button-row">
          <Link href="/contact?service=freight#quote" className="btn">Request a Freight Quote</Link>
          <Link href="/regular-deliveries#quote" className="btn secondary">Discuss a Recurring Contract</Link>
        </div>
      </div>
    </>
  );
}
