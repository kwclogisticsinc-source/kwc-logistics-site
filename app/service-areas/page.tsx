import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "KWC Logistics serves Kitchener, Waterloo, Cambridge, Guelph, Brantford, London, Hamilton, Mississauga, Southwestern Ontario, Canada, and U.S. lanes.",
  alternates: { canonical: "/service-areas" }
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero eyebrow="Service Areas" title="Local, regional, Canada-wide, and U.S. freight lanes">
        <p>
          KWC Logistics Inc. is based in Kitchener and supports businesses, homeowners, seniors, and
          everyday customers across Waterloo Region, Southwestern Ontario, Canada, and U.S. lanes.
        </p>
      </PageHero>
      <Section title="Local SEO service areas" intro="Choose a city page for local logistics, courier, freight, delivery, and moving support.">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {serviceAreas.map((area) => (
            <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-2xl border border-line bg-white p-5 transition hover:border-brand-red">
              <h2 className="text-lg font-bold text-ink">{area.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{area.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
