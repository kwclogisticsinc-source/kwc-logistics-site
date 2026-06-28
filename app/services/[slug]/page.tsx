import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { services, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.description} Contact KWC Logistics Inc. at ${site.domain}.`,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
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
              local businesses, retailers, suppliers, warehouses, e-commerce operators, and commercial
              customers using practical fleet solutions, consolidation where it makes sense,
              direct dispatch communication, and local accountability.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Share pickup city, delivery city, freight type, pallets or items, weight,
              dimensions, timing, liftgate needs, receiver details, and whether the stop is
              dock, commercial, or residential.
            </p>
          </article>
          <aside className="rounded-2xl bg-brand-pale p-6">
            <h2 className="text-xl font-bold text-ink">One shipment or repeat work</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              KWC can help with one-time deliveries, recurring route work, LTL freight,
              warehouse transfers, and personal freight that needs more care than parcel courier.
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
