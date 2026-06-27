import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "KWC Logistics Inc. is a family-run Canadian logistics company based in Kitchener, Ontario moving freight mainly across Ontario with partner-managed Canada-wide and North America coverage.",
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
              KWC mainly moves freight across Ontario on our assets: straight trucks, reefer
              trucks, flatbeds, box trucks, and cargo vans for hot shot services. We are based in
              Kitchener and cover the lanes customers actually use: Ottawa, Windsor, Niagara, the
              GTA, London, Hamilton, Mississauga, Cambridge, Guelph, Brantford, and the 401 and
              403 corridor in between.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              With 30 years of logistics experience behind the business, KWC understands how
              expensive freight can become and how easily customers can be pushed into options
              they do not need. We keep communication quick, pricing practical, and service at
              the centre of the job.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              When a shipment goes beyond our Ontario asset network, KWC&apos;s logistics team works
              with trusted partners to manage Canada-wide and North America freight, including
              North America home moving options. The customer still gets quick communication,
              practical pricing, and one team helping coordinate the move.
            </p>
          </article>
          <aside className="rounded-md bg-brand-pale p-6">
            <h2 className="text-xl font-bold text-ink">What to expect</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              <li>Clear shipment details before pickup.</li>
              <li>Quick communication for quotes and dispatch.</li>
              <li>Affordable options explained plainly.</li>
              <li>Ontario freight moved mainly on KWC assets.</li>
              <li>Canada-wide and North America logistics through trusted partners.</li>
              <li>Warehousing hubs, cross-dock options, and transfer support.</li>
              <li>No full street address shown until the business is ready to publish it.</li>
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
