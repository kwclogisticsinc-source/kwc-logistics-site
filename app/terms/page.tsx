import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/DeliveryUI";
import { PrintTerms } from "@/components/PrintTerms";
import { contact } from "@/lib/content";
export const metadata: Metadata = {
  title: "Payment & Shipment Terms",
  description:
    "Upfront payment for new customers, Net 30 for approved credit accounts, and practical information about shipment care, declared value and claims.",
  alternates: { canonical: "/terms" },
};
export default function Terms() {
  return (
    <>
      <PageIntro
        eyebrow="PAYMENT & SHIPMENT INFORMATION"
        title="Clear expectations. A smoother shipment."
      >
        <p>
          Understand payment arrangements and the details to confirm before
          collection. Read this alongside your accepted quote, bill of lading
          and applicable service conditions.
        </p>
      </PageIntro>
      <div className="wrap section terms-layout">
        <article className="terms-copy">
          <section id="payment-terms">
            <p className="eyebrow">PAYMENT</p>
            <h2>New customers pay upfront.</h2>
            <p>
              Payment is required before collection or the start of service for
              new customers, unless KWC confirms another arrangement in writing.
              Your quote or invoice will explain the amount and payment
              instructions. A request is confirmed as a booking only after KWC
              agrees the service details and required arrangements are in place.
            </p>
            <h2>Approved credit accounts: Net 30.</h2>
            <p>
              For customers with credit approved by KWC in writing, invoices are
              due within 30 calendar days of the invoice date. Completing a
              customer setup form or submitting a credit application does not
              automatically establish a credit account.
            </p>
            <p>
              Use the invoice reference when making payment. If an invoice needs
              clarification, contact KWC promptly with the invoice number and
              the item you would like reviewed. Different payment arrangements
              must be agreed in writing.
            </p>
            <div className="terms-callout">
              <strong>Ready to apply for an account?</strong>
              <p>
                Start with customer setup and the credit application. KWC will
                review the information and confirm any approved terms directly.
              </p>
              <Link className="text-link" href="/forms">
                Customer & credit forms →
              </Link>
            </div>
          </section>
          <section id="shipment-care">
            <p className="eyebrow">SHIPMENT CARE & LIABILITY</p>
            <h2>Give the shipment the right starting point.</h2>
            <p>
              Provide accurate pickup and delivery details, piece counts,
              dimensions, weight, commodity and handling requirements. Goods
              must be suitably packaged and prepared for the proposed road
              movement. Tell KWC about fragile, high-value,
              temperature-sensitive or otherwise unusual goods before booking so
              suitability and any special arrangements can be reviewed.
            </p>
            <h2>Confirm the applicable carriage conditions.</h2>
            <p>
              Responsibility for loss, damage or delay is governed by applicable
              law and the shipment-specific contract, bill of lading and
              accepted service conditions. Liability may be limited under those
              conditions. This website summary does not replace them or remove
              rights or obligations that cannot lawfully be excluded.
            </p>
            <p>
              Where transportation is arranged through a carrier partner,
              confirm the operating carrier and relevant documentation as part
              of the booking. Courier, freight, specialized handling and
              cross-border movements may involve different conditions.
            </p>
            <h2>Declared value is a conversation before collection.</h2>
            <p>
              If the goods have a high value or you require additional
              protection, tell KWC before collection and request written
              confirmation of the arrangements available. Declaring a value does
              not by itself mean that separate cargo insurance has been
              purchased or that full-value coverage has been agreed. Confirm how
              any declared value is recorded in the applicable shipping
              documents.
            </p>
            <h2>If something arrives damaged or is missing.</h2>
            <p>
              Record visible shortages or damage on the delivery receipt where
              possible and notify KWC promptly in writing. Keep relevant
              packaging, photographs, delivery documents and evidence of value
              for review. The applicable law and carriage conditions determine
              claim procedures and deadlines; do not wait for a general website
              response before checking those requirements.
            </p>
            <p>
              Email <a href={"mailto:" + contact.email}>{contact.email}</a> with
              the shipment reference, pickup and delivery information and a
              brief description of the issue. KWC will help identify the
              relevant next steps and documents. Reporting an issue does not
              itself determine liability or approve a claim.
            </p>
            <div className="terms-reference">
              <h3>Further reading</h3>
              <p>
                Ontario road freight may be subject to the provincial
                carriage-of-goods rules. Applicability depends on the shipment
                and service.
              </p>
              <a
                href="https://www.ontario.ca/laws/regulation/050643"
                target="_blank"
                rel="noreferrer"
              >
                Ontario Regulation 643/05: Carriage of Goods ↗
              </a>
            </div>
          </section>
        </article>
        <aside className="terms-sidebar">
          <p className="eyebrow">QUICK REFERENCE</p>
          <a href="#payment-terms">Payment & credit approval</a>
          <a href="#shipment-care">Shipment care & liability</a>
          <Link href="/forms">Forms & documents</Link>
          <PrintTerms />
          <p>
            Keep a copy with your shipping records. Confirm shipment-specific
            conditions directly with KWC.
          </p>
          <a className="text-link" href={"mailto:" + contact.email}>
            Ask a question →
          </a>
        </aside>
      </div>
    </>
  );
}
