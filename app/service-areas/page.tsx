import type { Metadata } from "next";
import Link from "next/link";
import { CoverageGraphic, PageIntro, ProvinceCoverageGraphic } from "@/components/DeliveryUI";
import { coverageCopy, coverageTitle, lanes, regions, services } from "@/lib/ontario";
import { freightPages } from "@/lib/freight-pages";
import { localAreas } from "@/lib/local-areas";

export const metadata: Metadata = {
  title: "Ontario Freight Coverage | Highways 401 and 403",
  description: "KWC serves businesses throughout Ontario, from the 401 and 403 corridors to cities, small towns and rural communities in Northern, Central and Eastern Ontario.",
  alternates: { canonical: "/service-areas" },
};

export default function Coverage() {
  return (
    <>
      <PageIntro eyebrow="ONTARIO REGIONAL TRANSPORTATION" title={coverageTitle}>
        <p>We serve businesses throughout Ontario, including Northern Ontario, small towns and rural communities. Our company-operated fleet runs exclusively within the province.</p>
        {coverageCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </PageIntro>
      <div className="wrap content-section article-copy">
        <ProvinceCoverageGraphic />
        <section>
          <h2>Service across all of Ontario</h2>
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
          <p>We arrange shipments in both directions between Ontario and Québec, including Montréal, as well as throughout Canada and between Canada and the U.S. Qualified carrier partners operate these shipments.</p>
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
