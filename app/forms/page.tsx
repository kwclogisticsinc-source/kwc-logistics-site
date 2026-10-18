import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Forms & Documents", description: "KWC Logistics credit application and road freight bill of lading. Download business and shipping forms or contact dispatch for help.", alternates: { canonical: "/forms" }
};
export default function FormsPage() {
  return <>
    <section className="bg-brand-navy py-16 text-white sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-cyan">Customer resources</p>
      <h1 className="mt-4 text-4xl font-black sm:text-6xl">Forms & Documents</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">The paperwork behind a well-planned shipment. Download KWC forms or speak with dispatch about the documents your move requires.</p>
    </div></section>
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="mb-8 rounded-lg border border-line bg-white p-4 text-sm leading-6">Preview documents: these branded drafts are available for review. Credit terms and applicable carriage conditions must be approved before operational use.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          ["01", "Credit Application", "Business account details, accounts-payable contacts, requested credit and trade references for KWC’s review. Submitting an application does not establish an approved credit account.", "kwc-credit-application.pdf"],
          ["02", "Bill of Lading", "Road freight shipment details, shipper and consignee information, freight descriptions, handling instructions and pickup/delivery acknowledgements. Rail and ocean shipments require the selected partner’s documentation.", "kwc-bill-of-lading.pdf"]
        ].map(([number, title, description, file]) => <article key={file} className="flex flex-col rounded-2xl border border-line bg-white p-7 sm:p-9">
          <span className="text-sm font-bold text-brand-blue">{number} / FILLABLE PDF</span><h2 className="mt-5 text-3xl font-bold">{title}</h2><p className="mb-8 mt-4 leading-7 text-muted">{description}</p>
          <a href={`/forms/${file}`} download className="mt-auto inline-flex min-h-12 items-center justify-center rounded-md bg-brand-navy px-6 py-3 font-bold text-white">Download {title} ↓</a>
        </article>)}
      </div>
      <div className="mt-10 border-t border-line pt-8"><h2 className="text-2xl font-bold">Need help with a form?</h2><p className="mt-3 max-w-3xl leading-7 text-muted">Contact dispatch to confirm the correct document and return instructions. Keep financial documents out of the public quote form.</p>
        <div className="mt-5 flex flex-wrap gap-6 font-semibold"><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:${site.phone}`}>{site.phone}</a><Link href="/contact#quote">Request a freight quote →</Link></div>
      </div>
    </section>
  </>;
}
