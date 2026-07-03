import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StockPhoto, stock } from "@/components/StockPhoto";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "KWC Logistics resources and FAQs for Ontario local LTL, FTL, warehousing, cross-docking, dedicated routes, expedited freight, and quote preparation.",
  alternates: { canonical: "/resources" }
};

const resourceCards = [
  {
    title: "Freight Quote Checklist",
    description:
      "Prepare pickup city, delivery city, freight type, pallet count, dimensions, weight, timing, dock access, liftgate needs, and handling notes before requesting a quote.",
    image: stock.dispatch
  },
  {
    title: "LTL & Consolidation Basics",
    description:
      "Learn how shipment consolidation, route density, and better planning can reduce waste, improve delivery timing, and control transportation costs.",
    image: stock.pallets
  },
  {
    title: "Warehouse & Cross-Dock Planning",
    description:
      "Understand how inbound staging, outbound sorting, inventory movement, and dock coordination help freight move faster through Ontario.",
    image: stock.warehouse
  }
];

const downloads = [
  {
    title: "Bill of Lading",
    description: "Use this KWC-branded BOL for pickup details, shipper/consignee information, freight description, weight, and handling notes.",
    href: "/resources/kwc-bill-of-lading.pdf",
    type: "PDF"
  },
  {
    title: "Credit Application",
    description: "Customer account setup form for businesses requesting credit terms with KWC Logistics Inc.",
    href: "/resources/kwc-credit-application.docx",
    type: "DOCX"
  },
  {
    title: "Customs Paperwork",
    description: "KWC-branded customs paperwork for shipments that require commercial invoice or cross-border documentation support.",
    href: "/resources/kwc-customs-paperwork.pdf",
    type: "PDF"
  }
];

const faqs = [
  ["What information is needed for a quote?", "Send pickup city, delivery city, freight type, pallet or item count, weight, dimensions, timing, dock or liftgate details, and any special handling notes."],
  ["Where does KWC provide LTL and FTL service?", "KWC focuses on Ontario freight lanes from Windsor to Ottawa, Niagara to Barrie, and the cities in between, with Kitchener-Waterloo-Cambridge as the home base."],
  ["Can KWC help reduce transportation costs?", "Yes. KWC looks for practical ways to consolidate compatible freight, improve route planning, reduce wasted miles, and match the shipment to the right service level."],
  ["Do you offer warehousing and cross-docking?", "Yes. KWC supports warehouse movement, freight staging, cross-docking, sorting, and distribution planning for customers that need freight moving through Ontario efficiently."],
  ["How do I start working with KWC?", "Use the contact form, call dispatch, or email the shipment details. KWC will review the lane, freight, timing, paperwork, and next steps."]
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Practical logistics resources for smarter shipping decisions." image={stock.warehouse}>
        <p>
          Clear guidance for businesses preparing freight quotes, comparing service options,
          planning warehouse movement, and building more reliable transportation programs.
        </p>
      </PageHero>

      <Section title="Start with better shipment information" intro="Good logistics starts before the truck arrives. These resources help customers send the details KWC needs to plan the right service level.">
        <div className="grid gap-5 lg:grid-cols-3">
          {resourceCards.map((card) => (
            <article key={card.title} className="premium-hover overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-sm hover:shadow-soft">
              <div className="h-56 overflow-hidden">
                <StockPhoto src={card.image} alt={card.title} className="transition duration-700 hover:scale-105" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-black text-ink">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Download customer forms"
        intro="Use these forms when setting up an account or preparing freight paperwork. If you are not sure which form applies, send the shipment details to dispatch and KWC will guide you."
        className="bg-brand-pale"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {downloads.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-line bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-black text-ink">{item.title}</h2>
                <span className="rounded-full bg-brand-blue px-3 py-1 text-xs font-black text-white">{item.type}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">{item.description}</p>
              <a
                href={item.href}
                download
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-brand-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-blue"
              >
                Open / Download {item.type}
              </a>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Customer FAQ</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Questions customers ask before they ship.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              The most important details customers usually need before requesting a quote,
              setting up an account, or preparing freight paperwork.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="bg-brand-blue hover:bg-blue-500">Request a Quote</ButtonLink>
              <Link href="/services" className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-navy">
                View Services
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {faqs.map(([question, answer], index) => (
              <details key={question} className="group rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm backdrop-blur">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <span className="text-base font-black">{index + 1}. {question}</span>
                  <span className="mt-0.5 text-xl font-black text-brand-cyan transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-blue-100">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
