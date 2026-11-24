import type { Metadata } from "next";
import Link from "next/link";
import { CoverageGraphic, PageIntro } from "@/components/DeliveryUI";
import { coverageCopy, coverageTitle, lanes, regions, services } from "@/lib/ontario";
import { freightPages } from "@/lib/freight-pages";
import { localAreas } from "@/lib/local-areas";

export const metadata: Metadata = {
  title: "Ontario Freight Coverage | Highways 401 and 403",
  description: "KWC Logistics connects Waterloo Region, the GTA, Southwestern Ontario and Eastern Ontario through Highways 401, 403, 416 and 417.",
  alternates: { canonical: "/service-areas" },
};

export default function Coverage() {
  return (
    <>
      <PageIntro eyebrow="ONTARIO REGIONAL TRANSPORTATION" title={coverageTitle}>
        {coverageCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </PageIntro>
      <div className="wrap content-section article-copy">
        <CoverageGraphic />
        <section>
          <h2>Ontario regions we serve</h2>
          <div className="freight-grid">
            {regions.map(([name, cities]) => <article key={name}><h3>{name}</h3><p>{cities}</p></article>)}
          </div>
        </section>
        <section>
          <h2>Freight lanes in both directions</h2>
          <div className="freight-grid">
            {lanes.map((lane) => <div key={lane}>{lane}</div>)}
          </div>
          <p>We confirm pickup and delivery timing, equipment and capacity for each shipment or recurring route. Extended Canada-wide and Canada–USA coverage is arranged through qualified transportation partners.</p>
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
