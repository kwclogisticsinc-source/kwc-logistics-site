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
  const page = await getPage(props);
  const { title, description, sections } = page;
  const route = "route" in page ? page.route : undefined;
  const directions = route ? [route, [route[1], route[0]] as const] : [];
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
          {directions.map(([pickup, destination]) => (
            <Link
              className="btn"
              key={pickup}
              href={{ pathname: "/contact", query: { service: "freight", journey: "ship", pickup, destination }, hash: "quote" }}
            >
              Quote {pickup} to {destination}
            </Link>
          ))}
          {!route && <Link className="btn" href="/contact?service=freight#quote">Request a Freight Quote</Link>}
          <Link className="btn secondary" href="/regular-deliveries#quote">Plan a Recurring Route</Link>
        </div>
        <p><Link className="text-link" href="/service-areas">See All Ontario Corridors and Freight Guides</Link></p>
      </div>
    </>
  );
}
