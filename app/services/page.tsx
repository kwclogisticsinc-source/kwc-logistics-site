import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { serviceCategories, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "KWC Logistics provides final mile, LTL freight, dedicated routes, warehouse transfers, cross-dock support, same-day delivery, and regional freight services across Southern Ontario.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Final mile, LTL, and regional freight services.">
        <p>
          KWC Logistics Inc. supports businesses that need freight moved reliably through
          Kitchener-Waterloo, Cambridge, the GTA, Hamilton, London, and Southern Ontario.
        </p>
      </PageHero>
      <Section title="What KWC focuses on" intro="Clean, practical freight movement for local businesses: final mile delivery, LTL and pallet freight, warehouse transfers, cross-dock support, dedicated routes, and expedited local work.">
        <div className="grid gap-5 lg:grid-cols-4">
          {serviceCategories.map((category) => (
            <article key={category.title} className="rounded-2xl border border-line bg-white p-5">
              <h2 className="text-xl font-bold text-ink">{category.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{category.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Service capabilities" intro="Pick the closest shipment type. If the freight is unusual, send the details and dispatch can help classify it properly." className="bg-brand-pale">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-2xl border border-line bg-white p-5 transition hover:border-brand-blue">
              <h2 className="text-xl font-bold text-ink">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-soft">
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
