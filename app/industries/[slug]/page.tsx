import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/DeliveryUI";
import { industryPages, industryPhotos } from "@/lib/industry-pages";

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
  const [slug, title, description, requirements, guidance, service] = await resolveIndustry(props);
  const photo = industryPhotos[slug];
  return (
    <>
      <PageIntro eyebrow="Ontario business transportation" title={title}><p>{description}</p></PageIntro>
      <section className="wrap content-section">
        <div className={photo ? "article-copy kwc-coverage-photo-band" : "article-copy"}>
          {photo && <Image src={photo.src} alt={photo.alt} width={1280} height={720} sizes="(max-width: 800px) 92vw, 46vw" />}
          <div>
            <h2>What to Include in Your Quote</h2>
            <p>{requirements}</p>
            <h2>Planning the Shipment</h2>
            <p>{guidance}</p>
          </div>
        </div>
        <div className="button-row">
          <Link className="btn" href="/book-now">Get a Quote</Link>
          <Link className="btn secondary" href={`/services/${service}`}>Explore the Service</Link>
        </div>
        <Link className="text-link operations-actions" href="/industries">Explore All Industries</Link>
      </section>
    </>
  );
}
