import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "KWC Logistics provides final mile delivery, B2B delivery, LTL freight, same-day delivery, dedicated routes, warehouse transfers, cross-docking, hot shot delivery, palletized freight, and regional distribution in Ontario.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Logistics services for local and regional freight">
        <p>
          KWC Logistics supports commercial freight that needs clear details, reliable pickup,
          and practical delivery coverage across Kitchener, Waterloo Region, and Southwestern Ontario.
        </p>
      </PageHero>
      <Section title="What KWC can move" intro="Tell us what is moving, where it is going, and what equipment or timing constraints matter. We will keep the quote direct.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-md border border-line bg-white p-5">
              <h2 className="text-xl font-bold text-ink">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-md bg-brand-pale p-6">
          <h2 className="text-2xl font-bold text-ink">Ready for a freight quote?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
            Share pickup city, delivery city, freight type, pallets or items, weight, dimensions,
            liftgate needs, and delivery timing.
          </p>
          <div className="mt-5">
            <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
