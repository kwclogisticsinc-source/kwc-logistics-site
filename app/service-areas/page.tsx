import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "KWC Logistics serves Kitchener, Waterloo, Cambridge, Guelph, Brantford, London, Hamilton, Mississauga, the GTA, and Southwestern Ontario.",
  alternates: { canonical: "/service-areas" }
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero eyebrow="Service Areas" title="Ontario delivery coverage from a Kitchener base">
        <p>
          KWC Logistics Inc. is based in Kitchener and supports freight movement across Waterloo
          Region, the GTA, and Southwestern Ontario.
        </p>
      </PageHero>
      <Section title="Cities and regions served" intro="For lanes outside this list, send the shipment details and KWC can confirm availability.">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {serviceAreas.map((area) => (
            <article key={area} className="rounded-md border border-line bg-white p-5">
              <h2 className="text-lg font-bold text-ink">{area}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Delivery, freight, transfer, or route support for commercial shipments.
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
