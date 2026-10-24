import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ContactCTA } from "@/components/DeliveryUI";
import { articles } from "@/lib/articles";
import { SitePhoto } from "@/components/SitePhoto";
import { articlePhoto } from "@/lib/photography";
export const metadata: Metadata = {
  title: "Shipping Insights",
  description:
    "Practical KWC guides to Ontario courier delivery, freight preparation and recurring business routes.",
  alternates: { canonical: "/blog" },
};
export default function Insights() {
  return (
    <>
      <PageIntro
        eyebrow="KWC INSIGHTS"
        title="A little clarity. A better shipping plan."
      >
        <p>
          Practical reading for the next package, pallet or business delivery
          program. Clear explanations you can use before requesting a quote.
        </p>
      </PageIntro>
      <section className="wrap section">
        <div className="insight-grid">
          {articles.map((article) => (
            <article key={article.slug}>
              <Link
                className="insight-photo-link"
                href={"/blog/" + article.slug}
                aria-label={"Read: " + article.title}
              >
                <SitePhoto {...articlePhoto(article.slug)} />
              </Link>
              <p className="eyebrow">{article.category}</p>
              <h2>
                <Link href={"/blog/" + article.slug}>{article.title}</Link>
              </h2>
              <p>{article.summary}</p>
              <Link className="text-link" href={"/blog/" + article.slug}>
                Read the guide →
              </Link>
            </article>
          ))}
        </div>
        <div className="insight-help">
          <h2>Prefer to work through it together?</h2>
          <p>
            Bring the information you have. We can help identify what else
            matters for the shipment.
          </p>
          <Link className="btn" href="/contact#quote">
            Start Your Enquiry →
          </Link>
          <Link className="text-link" href="/forms">
            Download shipping documents →
          </Link>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
