import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StockPhoto } from "@/components/StockPhoto";
import { serviceCategories, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceCategories.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceCategories.find((item) => item.slug === slug);
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
  const service = serviceCategories.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow="KWC Service" title={service.title} image={service.image}>
        <p>{service.description}</p>
      </PageHero>

      <Section title={`A professional ${service.title.toLowerCase()} program`} intro="KWC builds each solution around shipment profile, service level, customer expectations, communication requirements, and long-term operational goals.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <div className="h-[460px]">
              <StockPhoto src={service.image} alt={service.title} />
            </div>
          </div>
          <div className="grid gap-5">
            <article className="rounded-[2rem] border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-ink">Benefits</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="rounded-xl bg-brand-pale px-4 py-3 text-sm font-bold text-brand-navy">{benefit}</div>
                ))}
              </div>
            </article>
            <article className="rounded-[2rem] border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-ink">Industries served</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.industries.map((industry) => (
                  <span key={industry} className="rounded-full border border-line px-4 py-2 text-sm font-bold text-muted">{industry}</span>
                ))}
              </div>
            </article>
            <article className="rounded-[2rem] bg-brand-navy p-6 text-white shadow-glow">
              <h2 className="text-2xl font-black">Typical customers</h2>
              <p className="mt-3 text-sm leading-6 text-blue-100">{service.customers.join(", ")}.</p>
              <div className="mt-6">
                <ButtonLink href="/contact" className="bg-brand-blue hover:bg-blue-500">Request a Quote</ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </Section>
    </>
  );
}
