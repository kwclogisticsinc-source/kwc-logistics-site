import type { Metadata } from "next";
import { ContactCTA, PageIntro } from "@/components/DeliveryUI";
export const metadata: Metadata = {
  title: "Forms & Documents",
  description:
    "KWC draft credit application and road freight bill of lading, with document guidance.",
  alternates: { canonical: "/forms" },
};
export default function Forms() {
  return (
    <>
      <PageIntro
        eyebrow="SHIPPING PAPERWORK"
        title="The documents behind the delivery."
      >
        <p>
          Contact KWC to confirm the correct documents and return instructions
          for your shipment.
        </p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="notice">
          These existing branded documents are drafts. Credit terms and
          applicable carriage conditions need approval before operational use.
          Keep financial documents out of the public quote form.
        </div>
        <div className="capability-grid">
          {[
            [
              "Credit application",
              "Business account and trade-reference details for review. Applying does not establish an approved credit account.",
              "kwc-credit-application.pdf",
            ],
            [
              "Road bill of lading",
              "Shipper, receiver and freight details, with pickup and delivery acknowledgements. Confirm the applicable carrier’s documentation before use.",
              "kwc-bill-of-lading.pdf",
            ],
          ].map(([title, text, file]) => (
            <article key={file}>
              <h3>{title}</h3>
              <p>{text}</p>
              <a className="text-link" href={`/forms/${file}`} download>
                Download draft PDF ↓
              </a>
            </article>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
