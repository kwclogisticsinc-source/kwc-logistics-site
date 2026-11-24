import Link from "next/link";
import { commercialServices } from "@/lib/commercial-services";
import type { Metadata } from "next";
import { ContactCTA, PageIntro, ServiceCards } from "@/components/DeliveryUI";
export const metadata: Metadata = {
  title: "Bulk Package, Freight & Logistics Services",
  description:
    "Explore business bulk package delivery, pallet freight and recurring transportation routes.",
  alternates: { canonical: "/services" },
};
export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="KITCHENER · WATERLOO · CAMBRIDGE"
        title="Straight trucks, pallet freight and regular routes."
      >
        <p>
          Tell us where your freight needs to go, what you’re moving and how often. We’ll help select a truck or service that suits your route and budget.
        </p>
      </PageIntro>
      <section className="wrap content-section">
        <ul className="july-directory">
          {commercialServices.map(([slug, title, summary]) => (
            <li key={slug}>
              <Link className="text-link" href={`/services/${slug}`}>{title}</Link>
              <p>{summary}</p>
            </li>
          ))}
        </ul>
        <ServiceCards />
        <div className="notice">
          <strong>Ontario fleet. Canada-wide and cross-border brokerage.</strong>{" "}
          Our company-operated fleet serves Ontario exclusively. For moves beyond Ontario
          and additional capacity within the province, we arrange service through qualified
          carrier partners. <Link className="text-link" href="/services/freight-brokerage">Explore freight brokerage</Link>.
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
