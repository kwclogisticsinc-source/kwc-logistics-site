import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StockPhoto, stock } from "@/components/StockPhoto";
import { serviceCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "KWC Logistics provides B2B, B2C, D2C, LTL, FTL, warehousing, cross-docking, courier, final mile, distribution, reverse logistics, and customized Ontario transportation services.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Transportation, warehousing, distribution, and delivery solutions." image={stock.dock}>
        <p>
          KWC supports businesses with flexible logistics programs across B2B, B2C, D2C,
          LTL, FTL, courier, warehousing, cross-docking, reverse logistics, and specialty freight.
        </p>
      </PageHero>

      <Section title="Service portfolio" intro="Each service can be tailored to the customer, freight profile, delivery promise, and long-term business goals.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft">
              <div className="relative h-64 overflow-hidden">
                <StockPhoto src={service.image} alt={service.title} className="transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/88 via-brand-navy/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-cyan">KWC Service</p>
                  <h2 className="mt-2 text-2xl font-black text-white">{service.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-muted">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <span key={benefit} className="rounded-full bg-brand-pale px-3 py-1 text-xs font-bold text-brand-navy">{benefit}</span>
                  ))}
                </div>
                <span className="mt-6 inline-flex text-sm font-bold text-brand-blue">Learn More</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Custom Plans</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">One shipment or thousands of pallets every month.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              KWC builds logistics programs around your customers, operations, routes,
              warehouses, service expectations, and cost targets.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-6 text-brand-navy shadow-glow">
            <h3 className="text-2xl font-black">Need a quote or service plan?</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Send the lane, freight type, volume, timing, pickup details, delivery details,
              and any service requirements. We will help define the right solution.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact">Request a Quote</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
