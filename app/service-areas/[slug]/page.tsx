import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/DeliveryUI";
import { freightPages } from "@/lib/freight-pages";

type PageProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return freightPages.map(({ slug }) => ({ slug }));
}

async function getPage({ params }: PageProps) {
  const { slug } = await params;
  const page = freightPages.find((entry) => entry.slug === slug);
  if (!page) notFound();
  return page;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug, title, description } = await getPage(props);
  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${slug}` },
    openGraph: { title, description, url: `/service-areas/${slug}` },
  };
}

export default async function FreightPage(props: PageProps) {
  const { title, description, sections } = await getPage(props);
  return (
    <>
      <PageIntro eyebrow="ONTARIO REGIONAL FREIGHT" title={title}>
        <p>{description}</p>
      </PageIntro>
      <div className="wrap content-section article-copy">
        {sections.map(([heading, copy]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{copy}</p>
          </section>
        ))}
        <p>We confirm pricing, capacity and timing with your quote.</p>
        <div className="button-row">
          <Link className="btn" href="/contact?service=freight#quote">Request a Freight Quote</Link>
          <Link className="btn secondary" href="/contact?service=regular#quote">Plan a Recurring Route</Link>
        </div>
        <p><Link className="text-link" href="/service-areas">See All Ontario Corridors and Freight Guides</Link></p>
      </div>
    </>
  );
}
