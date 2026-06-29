import type { Metadata } from "next";
import Link from "next/link";
import { CoverageMap } from "@/components/CoverageMap";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "KWC Logistics serves Kitchener, Waterloo, Cambridge, Guelph, Brantford, Hamilton, London, Mississauga, Toronto, the GTA, and Ontario-wide freight lanes.",
  alternates: { canonical: "/service-areas" }
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero eyebrow="Service Areas" title="Waterloo Region first, with Ontario-wide freight capability.">
        <p>
          KWC Logistics is based in Kitchener and built to support Kitchener, Waterloo,
          Cambridge, nearby commercial markets, the GTA, and Ontario-wide transportation needs.
        </p>
      </PageHero>
      <Section title="Premium coverage map" intro="Our service model starts in Waterloo Region and extends through practical regional lanes supported by KWC assets, dispatch knowledge, warehousing relationships, and trusted carrier partners.">
        <CoverageMap />
      </Section>
      <Section title="Local and regional service areas" intro="KWC helps businesses plan freight around timing, equipment, access, freight type, and customer expectations." className="bg-brand-pale">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {serviceAreas.map((area) => (
            <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft">
              <h2 className="text-lg font-black text-ink">{area.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{area.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
