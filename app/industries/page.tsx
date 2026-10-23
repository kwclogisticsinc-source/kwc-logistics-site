import type { Metadata } from "next";
import { ContactCTA, PageIntro } from "@/components/DeliveryUI";
import { industries } from "@/lib/content";
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
        eyebrow="YOUR INDUSTRY. YOUR EVERYDAY CHALLENGES."
        title="The right delivery starts with the details."
      >
        <p>
          A supplier waiting, a customer order ready, or stock needed at another
          location. From Waterloo Region across Western Ontario, tell us the
          problem you need to solve and the places you need to reach.
        </p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="capability-grid">
          {industries.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
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
