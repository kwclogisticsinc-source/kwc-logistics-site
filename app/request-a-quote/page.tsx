import type { Metadata } from "next";
import { FullLogo } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote from KWC Logistics for LTL freight, final mile delivery, personal freight, warehouse transfers, dedicated routes, and regional delivery across Southern Ontario.",
  alternates: { canonical: "/request-a-quote" }
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHero eyebrow="Request a Quote" title="Send the shipment details">
        <p>
          Keep it simple: pickup city, delivery city, what is moving, approximate size and weight,
          timing, and whether pickup or delivery is dock, commercial, or residential. For urgent jobs, call dispatch at{" "}
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
              <li>Pickup city and delivery city.</li>
              <li>Freight type and pallet or item count.</li>
              <li>Total weight and dimensions.</li>
              <li>Same-day, scheduled, or flexible timing.</li>
              <li>Liftgate and reefer requirements.</li>
              <li>Dock, commercial, or residential stop details.</li>
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
