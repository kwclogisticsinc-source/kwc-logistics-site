import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { serviceCategories, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "KWC Logistics provides final mile delivery, B2B delivery, courier services, LTL freight, reefer transportation, warehouse transfers, same-day delivery, dedicated routes, senior moving assistance, meal kit delivery, floral delivery, and Canada and U.S. freight.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Delivery, freight, moving help, and Canada-U.S. transport">
        <p>
          One box, one pallet, one room, one truckload, or one cross-border shipment.
          KWC keeps the process direct: we answer, we communicate, we keep pricing practical,
          and we get it moved.
        </p>
      </PageHero>
      <Section title="Service categories" intro="KWC supports businesses, auto parts suppliers, homeowners, seniors, and everyday customers with local accountability and practical freight planning.">
        <div className="grid gap-5 lg:grid-cols-4">
          {serviceCategories.map((category) => (
            <article key={category.title} className="rounded-2xl border border-line bg-white p-5">
              <h2 className="text-xl font-bold text-ink">{category.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{category.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Service pages" className="bg-slate-50">
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
