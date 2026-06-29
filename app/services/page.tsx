import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { serviceCategories, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "KWC Logistics specializes in LTL freight, warehousing, cross-docking, expedited freight support, and regional freight throughout Kitchener, Waterloo, Cambridge, the GTA, and Ontario.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="LTL freight and warehousing support for Ontario businesses.">
        <p>
          KWC Logistics Inc focuses on the freight services Waterloo Region businesses need most:
          organized LTL, responsive expedited transportation, clean warehousing support,
          cross-docking, and regional freight support.
        </p>
      </PageHero>

      <Section title="Five clear service lines" intro="Simple categories make it easier to quote, plan, dispatch, and deliver freight without confusion.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {serviceCategories.map((category) => (
            <article key={category.title} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-sm font-black text-brand-cyan">
                {category.icon}
              </div>
              <h2 className="mt-5 text-xl font-black text-ink">{category.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{category.description}</p>
              <ul className="mt-5 space-y-2 text-sm font-semibold text-muted">
                {category.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Service details" intro="Choose the service closest to your shipment type and send the freight details. KWC will confirm the right equipment, timing, and route plan." className="bg-brand-pale">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft">
              <h2 className="text-xl font-black text-ink">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
              <span className="mt-5 inline-flex text-sm font-bold text-brand-blue">Learn More</span>
            </Link>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-ink">Need a freight quote?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
            Send pickup location, delivery location, freight type, number of skids, weight,
            service required, and notes about access or timing.
          </p>
          <div className="mt-5">
            <ButtonLink href="/contact">Contact Us</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
