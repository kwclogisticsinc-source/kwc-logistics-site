import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "KWC Logistics serves Kitchener, Waterloo, Cambridge, Guelph, Brantford, London, Hamilton, Mississauga, the GTA, Niagara, and the Southern Ontario 401 and 403 corridor.",
  alternates: { canonical: "/service-areas" }
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero eyebrow="Service Areas" title="Southern Ontario coverage from Kitchener.">
        <p>
          KWC Logistics Inc. services Kitchener-Waterloo, Cambridge, Guelph, Brantford, London,
          Hamilton, Mississauga, the GTA, Niagara, and regional lanes across the 401 and 403 corridor.
        </p>
      </PageHero>
      <Section title="Regional lanes and local service areas" intro="City coverage is planned around pickup windows, receiver hours, dock access, route density, and freight type.">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {serviceAreas.map((area) => (
            <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-2xl border border-line bg-white p-5 transition hover:border-brand-blue">
              <h2 className="text-lg font-bold text-ink">{area.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{area.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
