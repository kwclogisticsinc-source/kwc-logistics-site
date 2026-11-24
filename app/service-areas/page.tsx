import type { Metadata } from "next";
import Link from "next/link";
import { CoverageGraphic, PageIntro, ProvinceCoverageGraphic } from "@/components/DeliveryUI";
import { coverageCopy, coverageTitle, lanes, regions, services } from "@/lib/ontario";
import { freightPages } from "@/lib/freight-pages";
import { localAreas } from "@/lib/local-areas";

export const metadata: Metadata = {
  title: "Ontario Freight Coverage | Highways 401 and 403",
  description: "KWC serves businesses along Ontario’s 401 and 403 corridors, in Central and Eastern Ontario, and as far north as Sudbury.",
  alternates: { canonical: "/service-areas" },
};

export default function Coverage() {
  return (
    <>
      <PageIntro eyebrow="ONTARIO REGIONAL TRANSPORTATION" title={coverageTitle}>
        <p>Our company-operated fleet serves Ontario only. We cover routes across Southern and Eastern Ontario and serve selected communities in Central Ontario, with Sudbury as our current northern limit.</p>
        {coverageCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </PageIntro>
      <div className="wrap content-section article-copy">
        <ProvinceCoverageGraphic />
        <section>
          <h2>Current Ontario service regions</h2>
          <p>The cities below are examples of where we serve. Share your destination or postal code so we can confirm timing, equipment and access, including locations off the main highway corridors.</p>
          <div className="freight-grid">
            {regions.map(([name, cities]) => <article key={name}><h3>{name}</h3><p>{cities}</p></article>)}
          </div>
        </section>
        <section>
          <h2>Freight lanes in both directions</h2>
          <CoverageGraphic />
          <div className="freight-grid">
            {lanes.map((lane) => <div key={lane}>{lane}</div>)}
          </div>
          <p>We confirm pickup and delivery timing, equipment and capacity for each shipment or recurring route.</p>
        </section>
        <section>
          <h2>Freight brokerage beyond Ontario</h2>
          <p>Ask about partner-arranged service between Ontario and Québec, including Montréal, as well as other interprovincial and Canada–U.S. lanes. We confirm lane availability and the operating carrier before booking.</p>
          <Link href="/services/freight-brokerage" className="text-link">Explore freight brokerage</Link>
        </section>
        <section>
          <h2>Commercial transportation services</h2>
          <ul className="freight-grid">{services.map((service) => <li key={service}>{service}</li>)}</ul>
        </section>
        <section>
          <h2>Local freight and delivery guides</h2>
          <ul className="freight-grid">
            {localAreas.map(({ slug, title }) => <li key={slug}><Link className="text-link" href={`/service-areas/${slug}`}>{title}</Link></li>)}
          </ul>
        </section>
        <section>
          <h2>Freight guides by lane and service</h2>
          <ul className="freight-grid">
            {freightPages.filter((page) => !localAreas.includes(page)).map(({ slug, title }) => <li key={slug}><Link className="text-link" href={`/service-areas/${slug}`}>{title}</Link></li>)}
          </ul>
        </section>
        <div className="button-row">
          <Link href="/contact?service=freight#quote" className="btn">Request a Freight Quote</Link>
          <Link href="/contact?service=regular#quote" className="btn secondary">Discuss a Recurring Contract</Link>
        </div>
      </div>
    </>
  );
}
