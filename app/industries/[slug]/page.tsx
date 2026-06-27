import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { industries } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const industry = industries.find((item) => item.slug === params.slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.description,
    alternates: { canonical: `/industries/${industry.slug}` }
  };
}

export default function IndustryDetailPage({ params }: Props) {
  const industry = industries.find((item) => item.slug === params.slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero eyebrow="Industry Support" title={industry.title}>
        <p>{industry.description}</p>
      </PageHero>
      <Section title="Local service with clear communication" intro="KWC supports customers who need practical delivery and freight help without call-centre runaround.">
        <div className="rounded-2xl border border-line bg-white p-6">
          <p className="max-w-4xl text-base leading-7 text-muted">
            Whether it is one box, one pallet, one room, one truckload, or a cross-border shipment,
            KWC helps plan the move around real details: location, timing, freight type, access,
            handling needs, and available capacity.
          </p>
          <div className="mt-6">
            <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
