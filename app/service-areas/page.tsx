import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "KWC Logistics serves Kitchener, Waterloo, Cambridge, Guelph, Brantford, London, Hamilton, Mississauga, Ottawa, Windsor, Niagara, the 401 and 403 corridor, and partner-managed Canada-wide and North America lanes.",
  alternates: { canonical: "/service-areas" }
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero eyebrow="Service Areas" title="Ontario freight coverage from Kitchener across the 401 and 403 corridor">
        <p>
          KWC Logistics Inc. is based in Kitchener and mainly moves freight on our Ontario assets,
          covering Waterloo Region, the GTA, Ottawa, Windsor, Niagara, London, Hamilton, and the
          401 and 403 corridor.
        </p>
      </PageHero>
      <Section title="Ontario lanes and local service areas" intro="Choose a city page for local logistics, freight, hot shot, warehousing transfer, and partner-managed long-distance support.">
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
