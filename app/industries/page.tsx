import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Help",
  description:
    "KWC Logistics supports meal kit companies, food and beverage brands, e-commerce businesses, retail stores, warehouses, manufacturers, auto parts suppliers, medical and wellness suppliers, and local businesses needing recurring deliveries.",
  alternates: { canonical: "/industries" }
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Who We Help" title="Final mile and regional delivery for local businesses.">
        <p>
          From meal kits and retail deliveries to warehouse transfers and recurring B2B routes,
          KWC Logistics helps local businesses move freight without the headache.
        </p>
      </PageHero>
      <Section title="Customer types KWC supports" className="bg-brand-pale">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft">
              <h2 className="text-xl font-bold text-ink">{industry.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{industry.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
