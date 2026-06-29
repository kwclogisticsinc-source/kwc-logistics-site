import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "KWC Logistics resources for preparing LTL freight quotes, skids, pickup details, delivery details, dock access, and commercial freight information.",
  alternates: { canonical: "/resources" }
};

const resources = [
  {
    title: "Quote Information Checklist",
    description:
      "What to send before requesting a rate: pickup, delivery, skids, weight, dimensions, timing, access, and service type.",
    items: ["Pickup location", "Delivery location", "Number of skids", "Weight and dimensions", "Service required"]
  },
  {
    title: "Preparing LTL Freight",
    description:
      "Basic freight prep guidance for businesses shipping pallets, skids, cartons, equipment, or commercial freight.",
    items: ["Secure freight", "Label clearly", "Confirm dock access", "Share appointment times", "Note liftgate needs"]
  },
  {
    title: "Service Area Notes",
    description:
      "KWC is built around Kitchener, Waterloo, and Cambridge, with GTA and Ontario freight capability through planned lanes.",
    items: ["Waterloo Region", "Guelph and Brantford", "Hamilton and GTA", "London lanes", "Ontario-wide support"]
  },
  {
    title: "What KWC Still Needs From You",
    description:
      "This section will become more detailed once you provide company-specific policies, service standards, and operational details.",
    items: ["Hours", "Exact phone number", "Quote process", "Equipment details", "Coverage rules"]
  }
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Simple freight resources for cleaner quotes and better pickups." image="/images/kwc-warehouse-crossdock.png">
        <p>
          This page is where KWC can build practical freight checklists, shipping guidance,
          pickup requirements, service area notes, and customer resources.
        </p>
      </PageHero>

      <Section title="Freight resource centre" intro="This is the start of a more professional, carrier-style resources page. As you give me exact KWC policies and details, this page can become much more specific.">
        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((resource) => (
            <article key={resource.title} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-ink">{resource.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{resource.description}</p>
              <ul className="mt-5 grid gap-2 text-sm font-semibold text-muted">
                {resource.items.map((item) => (
                  <li key={item} className="rounded-xl bg-brand-pale px-4 py-3">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Information Needed</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Give me the real details and I will turn them into polished pages.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              The layout is ready for professional content. The next improvement is replacing
              placeholder guidance with your actual policies, service commitments, and customer process.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 text-brand-navy shadow-glow">
            <h3 className="text-2xl font-black">Best next page to build</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Start with your quote process. That is the highest-value customer action on the site.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
              <Link href="/services" className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-navy bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-pale">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
