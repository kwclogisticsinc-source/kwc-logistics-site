import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "KWC Logistics Inc. is a family-run Canadian LTL and final mile carrier based in Kitchener, Ontario, using direct dispatch and consolidation to move freight across Southern Ontario.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About KWC" title="A family-run logistics company with 30 years of experience">
        <p>
          KWC Logistics Inc. is built around direct communication, dependable delivery work,
          practical pricing, and real accountability for businesses and personal customers moving freight in Southern Ontario.
        </p>
      </PageHero>
      <Section title="Local logistics without the runaround" intro="The company serves businesses that need someone to answer, understand the freight, explain the options, and get the shipment moving.">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-md border border-line bg-white p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold text-ink">How KWC works</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              KWC moves freight through the lanes customers actually use: Kitchener-Waterloo,
              Cambridge, London, Windsor, Toronto, Kingston, Hamilton, Mississauga, the GTA, and
              the 401 and 403 corridor. Work includes final mile delivery, LTL and pallet freight,
              warehouse transfers, cross-dock support, dedicated routes, and expedited local work.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              With 30 years of logistics experience behind the business, KWC understands how
              expensive freight can become and how easily customers can be pushed into options
              they do not need. We keep communication quick, pricing practical, and service at
              the centre of the job.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              The goal is simple: ask the right questions before dispatch, consolidate freight
              where possible, cut out avoidable layers, and keep communication clear from quote
              to delivery.
            </p>
          </article>
          <aside className="rounded-md bg-brand-pale p-6">
            <h2 className="text-xl font-bold text-ink">What to expect</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              <li>Clear shipment details before pickup.</li>
              <li>Quick communication for quotes and dispatch.</li>
              <li>Affordable options explained plainly.</li>
              <li>Southern Ontario final mile, personal freight, and regional LTL.</li>
              <li>Warehouse transfers, cross-dock options, and route support.</li>
              <li>No full street address shown until the business is ready to publish it.</li>
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
