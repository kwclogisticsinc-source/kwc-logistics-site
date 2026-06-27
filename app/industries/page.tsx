import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "KWC Logistics supports auto parts suppliers, meal kit companies, florists, small businesses, warehouses, manufacturers, retail stores, medical suppliers, furniture stores, seniors, e-commerce companies, contractors, and homeowners.",
  alternates: { canonical: "/industries" }
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Delivery and freight support for real customers">
        <p>
          Built for auto parts suppliers, small businesses, homeowners, seniors, growing companies,
          and local operators that need practical logistics help from someone who answers the phone.
        </p>
      </PageHero>
      <Section title="Industries and customer types served">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded-2xl border border-line bg-white p-5 transition hover:border-brand-red">
              <h2 className="text-xl font-bold text-ink">{industry.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{industry.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
