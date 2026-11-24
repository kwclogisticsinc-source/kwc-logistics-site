import type { Metadata } from "next";
import { ContactCTA, PageIntro } from "@/components/DeliveryUI";
import Link from "next/link";
import { industryPages } from "@/lib/industry-pages";
export const metadata: Metadata = {
  title: "Delivery for Your Industry",
  description:
    "Practical delivery examples for retailers, manufacturers, food businesses, trade suppliers and professional offices.",
  alternates: { canonical: "/industries" },
};
export default function Industries() {
  return (
    <>
      <PageIntro
        eyebrow="Industry solutions"
        title="Transportation by industry."
      >
        <p>
          Explore pickup, receiving and delivery options for your business. Each
          guide explains what to share so we can assess your freight and timing.
        </p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="capability-grid">
          {industryPages.map(([slug, title, text]) => (
            <article key={title}>
              <h2><Link className="text-link" href={`/industries/${slug}`}>{title}</Link></h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="notice">
          Special products are assessed before acceptance. General delivery
          examples do not establish regulated specimen transport,
          dangerous-goods capability, pharmaceutical compliance or validated
          cold-chain services.
        </p>
      </section>
      <ContactCTA />
    </>
  );
}
