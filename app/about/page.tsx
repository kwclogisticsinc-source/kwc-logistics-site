import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "KWC Logistics Inc. is a family-run logistics company based in Kitchener, Ontario serving Waterloo Region and Southwestern Ontario.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About KWC" title="A family-run logistics company based in Kitchener">
        <p>
          KWC Logistics Inc. is built around practical communication, dependable delivery work,
          and local knowledge of Ontario business lanes.
        </p>
      </PageHero>
      <Section title="Local logistics without the runaround" intro="The company serves businesses that need someone to answer, understand the freight, and get the shipment moving.">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-md border border-line bg-white p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold text-ink">How KWC works</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              KWC focuses on final mile delivery, B2B delivery, LTL freight, dedicated routes,
              warehouse transfers, cross-docking, hot shot delivery, and regional distribution.
              The goal is simple: collect the right shipment details, confirm the lane, and keep
              the delivery practical for the customer.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Based in Kitchener, Ontario, KWC serves Waterloo Region, the GTA, and Southwestern
              Ontario for companies that want a logistics partner with a local, reachable feel.
            </p>
          </article>
          <aside className="rounded-md bg-brand-pale p-6">
            <h2 className="text-xl font-bold text-ink">What to expect</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              <li>Clear shipment details before pickup.</li>
              <li>Direct communication for quotes and dispatch.</li>
              <li>Commercial delivery support across Ontario lanes.</li>
              <li>No full street address shown until the business is ready to publish it.</li>
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
