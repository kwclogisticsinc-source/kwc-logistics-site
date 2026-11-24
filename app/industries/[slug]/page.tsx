import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/DeliveryUI";
import { industryPages } from "@/lib/industry-pages";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return industryPages.map(([slug]) => ({ slug }));
}

async function resolveIndustry({ params }: Props) {
  const { slug } = await params;
  const industry = industryPages.find(([id]) => id === slug);
  if (!industry) notFound();
  return industry;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const [slug, title, description] = await resolveIndustry(props);
  return { title, description, alternates: { canonical: `/industries/${slug}` } };
}

export default async function IndustryPage(props: Props) {
  const [, title, description, requirements, guidance, service] = await resolveIndustry(props);
  return (
    <>
      <PageIntro eyebrow="Ontario business transportation" title={title}><p>{description}</p></PageIntro>
      <section className="wrap content-section">
        <div className="article-copy">
          <h2>What to include in your quote</h2>
          <p>{requirements}</p>
          <h2>Planning the shipment</h2>
          <p>{guidance}</p>
        </div>
        <div className="button-row">
          <Link className="btn" href="/book-now">Get a Quote</Link>
          <Link className="btn secondary" href={`/services/${service}`}>Explore the Service</Link>
        </div>
        <Link className="text-link operations-actions" href="/industries">Explore all industries</Link>
      </section>
    </>
  );
}
