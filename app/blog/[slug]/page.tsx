import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/DeliveryUI";
import { articles } from "@/lib/articles";
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return article
    ? {
        title: article.title,
        description: article.summary,
        alternates: { canonical: "/blog/" + slug },
      }
    : {};
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return (
    <>
      <PageIntro eyebrow={article.category} title={article.title}>
        <p>{article.summary}</p>
      </PageIntro>
      <div className="wrap section insight-layout">
        <article className="insight-article">
          <Link className="text-link" href="/blog">
            ← All shipping insights
          </Link>
          <p className="lead">{article.intro}</p>
          {article.sections.map((section, i) => (
            <section id={"guide-" + i} key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
          <p className="fine">
            KWC Logistics · Shipping guide. Shipment acceptance, handling and
            service availability are confirmed individually.
          </p>
        </article>
        <aside className="insight-sidebar">
          <p className="eyebrow">IN THIS GUIDE</p>
          {article.sections.map((section, i) => (
            <a href={"#guide-" + i} key={section.title}>
              {section.title}
            </a>
          ))}
          <h3>Put the plan in motion.</h3>
          <p>Share your locations and shipment requirements.</p>
          <Link
            className="btn"
            href={"/contact?service=" + article.service + "#quote"}
          >
            {article.cta} →
          </Link>
          <Link className="text-link" href="/forms">
            Forms & documents →
          </Link>
        </aside>
      </div>
    </>
  );
}
