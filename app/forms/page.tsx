import type { Metadata } from "next";
import Link from "next/link";
import { ContactCTA, PageIntro } from "@/components/DeliveryUI";
export const metadata: Metadata = {
  title: "Forms & Documents",
  description:
    "Shipment preparation help and downloadable KWC Logistics shipment, customer setup, draft bill of lading and credit application forms.",
  alternates: { canonical: "/forms" },
};
const docs = [
  {
    title: "Book a shipment",
    text: "Send pickup, delivery and handling details for review. A request is not a confirmed booking.",
    file: "kwc-book-a-shipment.pdf",
    label: "Download shipment request PDF ↓",
  },
  {
    title: "Road bill of lading · Draft",
    text: "Shipper, receiver and freight details. Confirm the carrier’s documentation and applicable carriage conditions before operational use.",
    file: "kwc-bill-of-lading.pdf",
    label: "Download draft bill of lading ↓",
  },
  {
    title: "Customer setup",
    text: "Introduce your business, billing contacts and delivery needs. Customer setup does not establish a credit account.",
    file: "kwc-customer-setup.pdf",
    label: "Download customer setup PDF ↓",
  },
  {
    title: "Credit application · Draft",
    text: "Business and trade-reference information for review. Credit terms and reference authorization require approval before use.",
    file: "kwc-credit-application.pdf",
    label: "Download draft credit application ↓",
  },
];
function Documents({ start, end }: { start: number; end: number }) {
  return (
    <div className="capability-grid">
      {docs.slice(start, end).map((doc) => (
        <article key={doc.file}>
          <h3>{doc.title}</h3>
          <p>{doc.text}</p>
          <a className="text-link" href={`/forms/${doc.file}`} download>
            {doc.label}
          </a>
        </article>
      ))}
    </div>
  );
}
export default function Forms() {
  return (
    <>
      <PageIntro
        eyebrow="FORMS & SHIPPING HELP"
        title="A little preparation. A smoother delivery."
      >
        <p>
          Download fillable PDFs, save your copy, and email it to{" "}
          <a href="mailto:ship@kwclogistics.ca">ship@kwclogistics.ca</a>.
          Confirm the right documents and return instructions with KWC.
        </p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="article-copy">
          <h2>Before you ship</h2>
          <ul>
            <li>Confirm pickup and delivery contacts.</li>
            <li>Provide the number of pieces, dimensions and weight.</li>
            <li>Package goods appropriately for transport.</li>
            <li>Tell us about dock access, stairs or special handling.</li>
            <li>Confirm receiving hours and appointment requirements.</li>
          </ul>
          <p>
            Still measuring? Share approximate details or say “Not sure” in your
            quote request.
          </p>
          <Link className="text-link" href="/resources">
            More shipping help →
          </Link>
        </div>
        <h2>Book and manage a shipment</h2>
        <Documents start={0} end={2} />
        <p>
          <Link className="text-link" href="/contact#quote">
            Prefer to start online? Request a Quote →
          </Link>
        </p>
        <h2 style={{ marginTop: 56 }}>Business account documents</h2>
        <Documents start={2} end={4} />
        <p className="fine">
          The bill of lading and credit application remain drafts for review. Do
          not include bank details, card numbers or personal identification.
          Applying does not establish approved credit.
        </p>
      </section>
      <ContactCTA />
    </>
  );
}
