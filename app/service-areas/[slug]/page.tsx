import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { serviceAreas } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.description,
    keywords: [area.title, "KWC Logistics", "LTL freight", "expedited freight", "warehousing", "cross docking"],
    alternates: { canonical: `/service-areas/${area.slug}` }
  };
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);
  if (!area) notFound();

  return (
    <>
      <PageHero eyebrow="Local Logistics" title={area.title}>
        <p>{area.description}</p>
      </PageHero>
      <Section title="LTL, expedited, warehousing, and straight truck support" intro="KWC is based in Kitchener and serves Waterloo Region, the GTA, and Ontario with practical freight services for businesses.">
        <div className="grid gap-5 md:grid-cols-3">
          {["LTL freight", "Expedited transportation", "Warehousing and cross-docking"].map((item) => (
            <article key={item} className="rounded-2xl border border-line bg-white p-5">
              <h2 className="text-lg font-bold text-ink">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Call KWC with what is moving, where it is going, and when it needs to arrive.
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
        </div>
      </Section>
    </>
  );
}
