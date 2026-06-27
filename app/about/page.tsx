import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "KWC Logistics Inc. is a family-run Canadian logistics company based in Kitchener, Ontario with 30 years of logistics experience.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About KWC" title="A family-run logistics company with 30 years of experience">
        <p>
          KWC Logistics Inc. is built around direct communication, dependable delivery work,
          affordable options, and real accountability for businesses, homeowners, seniors, and everyday customers.
        </p>
      </PageHero>
      <Section title="Local logistics without the runaround" intro="The company serves people who need someone to answer, understand the freight, explain the options, and get the shipment moving.">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-md border border-line bg-white p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold text-ink">How KWC works</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              KWC focuses on final mile delivery, B2B delivery, courier services, auto parts
              delivery, LTL freight, reefer transportation, dedicated routes, warehouse transfers, senior moving
              assistance, home and specialty moves, and Canada or U.S. transport options.
              The goal is simple: collect the right shipment details, confirm the lane, and get
              it moved.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              With 30 years of logistics experience behind the business, KWC understands how
              expensive freight can become and how easily customers can be pushed into options
              they do not need. We keep communication quick, pricing practical, and service at
              the centre of the job.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Based in Kitchener, Ontario, KWC serves Waterloo Region, Southwestern Ontario,
              Canada, and U.S. lanes through available capacity, a practical fleet and carrier
              network, and trusted transportation partners.
            </p>
          </article>
          <aside className="rounded-md bg-brand-pale p-6">
            <h2 className="text-xl font-bold text-ink">What to expect</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              <li>Clear shipment details before pickup.</li>
              <li>Quick communication for quotes and dispatch.</li>
              <li>Affordable options explained plainly.</li>
              <li>Business, residential, and commercial delivery support.</li>
              <li>Local, regional, Canada-wide, and U.S. freight options.</li>
              <li>No full street address shown until the business is ready to publish it.</li>
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
