import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact KWC Logistics Inc. in Kitchener, Ontario for LTL freight, final mile delivery, personal freight, warehouse transfers, dedicated routes, and regional delivery across Southern Ontario.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to KWC Logistics">
        <p>
          For final mile delivery, LTL freight, personal freight, cargo van work, straight truck work,
          warehouse transfers, dedicated routes, or regional delivery, contact KWC Logistics Inc. directly.
        </p>
      </PageHero>
      <Section title="Contact details" intro="No full street address is published yet. KWC is based in Kitchener, Ontario.">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-md border border-line bg-white p-6">
            <h2 className="text-lg font-bold text-ink">Phone</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              <a className="font-semibold text-brand-blue" href={`tel:${site.phone}`}>
                {site.phone}
              </a>
            </p>
          </article>
          <article className="rounded-md border border-line bg-white p-6">
            <h2 className="text-lg font-bold text-ink">Email</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              <a className="font-semibold text-brand-blue" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </article>
          <article className="rounded-md border border-line bg-white p-6">
            <h2 className="text-lg font-bold text-ink">Location</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{site.location}</p>
          </article>
        </div>
      </Section>
    </>
  );
}
