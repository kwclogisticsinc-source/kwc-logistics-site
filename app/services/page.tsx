import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { serviceCategories, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "KWC Logistics mainly moves freight across Ontario with straight trucks, reefers, flatbeds, box trucks, and cargo vans, with partner-managed Canada-wide and North America logistics.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Ontario freight on our assets. Partner logistics beyond that.">
        <p>
          KWC mainly moves freight in Ontario on straight trucks, reefer trucks, flatbeds,
          box trucks, and cargo vans for hot shot work. For Canada-wide and North America lanes,
          our logistics team works with trusted partners to manage the move.
        </p>
      </PageHero>
      <Section title="What KWC actually focuses on" intro="We keep services practical: Ontario asset-based freight, hot shot vans, warehousing and transfers, and partner-managed logistics for longer lanes.">
        <div className="grid gap-5 lg:grid-cols-4">
          {serviceCategories.map((category) => (
            <article key={category.title} className="rounded-2xl border border-line bg-white p-5">
              <h2 className="text-xl font-bold text-ink">{category.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{category.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Detailed service pages" intro="These pages explain the common shipment types customers ask about. The main operating model stays Ontario-first." className="bg-slate-50">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-2xl border border-line bg-white p-5 transition hover:border-brand-red">
              <h2 className="text-xl font-bold text-ink">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-brand-pale p-6">
          <h2 className="text-2xl font-bold text-ink">Need a quote?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
            Send the pickup city, delivery city, freight type, item count, weight, dimensions,
            timing, and access details.
          </p>
          <div className="mt-5">
            <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
