import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { industries } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.description,
    alternates: { canonical: `/industries/${industry.slug}` }
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero eyebrow="Who We Help" title={industry.title}>
        <p>{industry.description}</p>
      </PageHero>
      <Section title="Local service with clear communication" intro="KWC supports businesses that need practical delivery and freight help without call-centre runaround.">
        <div className="rounded-2xl border border-line bg-white p-6">
          <p className="max-w-4xl text-base leading-7 text-muted">
            Whether it is meal kit delivery support, palletized freight, store replenishment,
            auto parts, warehouse transfers, or recurring routes, KWC helps plan the move around
            real details: location, timing, freight type, access, handling needs, and available capacity.
          </p>
          <div className="mt-6">
            <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
