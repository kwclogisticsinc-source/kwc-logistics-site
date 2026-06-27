import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { services, site } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.description} Contact KWC Logistics Inc. at ${site.domain}.`,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow="KWC Service" title={service.title}>
        <p>{service.description}</p>
      </PageHero>
      <Section title={`Practical ${service.title.toLowerCase()} support`} intro="KWC keeps the details simple and clear: what is moving, where it starts, where it needs to go, and what timing or equipment matters.">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.45fr]">
          <article className="rounded-2xl border border-line bg-white p-6">
            <h2 className="text-2xl font-bold text-ink">How KWC helps</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              We answer the phone. We show up. We communicate. We get it moved. KWC works with
              businesses, homeowners, seniors, and everyday customers using available capacity, trusted
              transportation partners, and local dispatch accountability. With 30 years of logistics
              experience, we understand cost pressure and work to keep options fair.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Share pickup city, delivery city, freight type, pallets or items, weight,
              dimensions, timing, liftgate needs, reefer needs, and whether the stop is
              residential or commercial.
            </p>
          </article>
          <aside className="rounded-2xl bg-brand-pale p-6">
            <h2 className="text-xl font-bold text-ink">One shipment or repeat work</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              KWC can help with one-time jobs, scheduled routes, regional lanes, and Canada or U.S.
              freight options through a fleet and carrier network.
            </p>
            <div className="mt-5">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
