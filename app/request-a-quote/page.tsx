import type { Metadata } from "next";
import { FullLogo } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote from KWC Logistics for LTL freight, expedited transportation, warehousing, cross-docking, and straight truck delivery across Ontario.",
  alternates: { canonical: "/request-a-quote" }
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHero eyebrow="Request a Quote" title="Send the shipment details">
        <p>
          Keep it simple: pickup location, delivery location, freight type, number of skids,
          weight, service required, and any special handling notes. For urgent jobs, call dispatch at{" "}
          <a className="font-semibold text-brand-blue" href={`tel:${site.phone}`}>{site.phone}</a>.
        </p>
      </PageHero>
      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.45fr] lg:px-8">
          <QuoteForm />
          <aside className="rounded-2xl bg-brand-pale p-6">
            <div className="mb-6 max-w-[180px] rounded-xl bg-white px-3 py-2 shadow-sm">
              <FullLogo />
            </div>
            <h2 className="text-2xl font-bold text-ink">Helpful quote details</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
              <li>Pickup location and delivery location.</li>
              <li>Freight type and number of skids.</li>
              <li>Total weight and handling notes.</li>
              <li>LTL, expedited, warehousing, cross-docking, or straight truck delivery.</li>
              <li>Dock, warehouse, commercial, or job-site access details.</li>
              <li>Any flexibility that could help consolidate and reduce cost.</li>
            </ul>
            <div className="mt-6 border-t border-line pt-5 text-sm leading-6 text-muted">
              <p className="font-semibold text-ink">Dispatch</p>
              <p><a className="text-brand-blue" href={`tel:${site.phone}`}>{site.phone}</a></p>
              <p><a className="text-brand-blue" href={`mailto:${site.email}`}>{site.email}</a></p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
