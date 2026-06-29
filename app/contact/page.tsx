import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { FullLogo } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact KWC Logistics Inc. in Kitchener, Ontario for LTL freight, expedited transportation, warehousing, cross-docking, and straight truck delivery.",
  alternates: { canonical: "/contact" }
};

const contactCards = [
  {
    label: "Dispatch Phone",
    value: site.phone,
    href: `tel:${site.phone}`,
    note: "Call for freight that needs a clear answer."
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Send lanes, skid counts, weights, and timing."
  },
  {
    label: "Location",
    value: "Kitchener, Ontario",
    href: null,
    note: "Proudly built for Kitchener, Waterloo, and Cambridge."
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact KWC" title="Talk directly with a freight team that understands Waterloo Region." image="/images/kwc-straight-trucks-dock.png">
        <p>
          For LTL freight, expedited transportation, warehousing, cross-docking, straight truck
          delivery, or Ontario freight support, contact KWC Logistics Inc. directly.
        </p>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-line bg-brand-pale shadow-soft">
            <div className="relative min-h-[420px]">
              <Image
                src="/images/kwc-warehouse-crossdock.png"
                alt="KWC Logistics warehouse and dock operations"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy via-brand-navy/75 to-transparent p-6 text-white">
                <div className="max-w-[220px] rounded-2xl bg-white px-4 py-3">
                  <FullLogo />
                </div>
                <p className="mt-5 text-2xl font-black tracking-tight">
                  Kitchener-Waterloo-Cambridge freight support with Ontario reach.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-blue">Dispatch & Quotes</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">
              Send the shipment details. We will help plan the move.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              KWC is based in Kitchener and built around clear communication. Tell us what is
              moving, where it starts, where it needs to go, and what timing or handling details
              matter. We will respond with the practical freight questions that keep the job organized.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-navy bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-pale focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              >
                Call Dispatch
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section title="Contact details" intro="No full street address is published yet. KWC is based in Kitchener, Ontario." className="bg-brand-pale">
        <div className="grid gap-5 md:grid-cols-3">
          {contactCards.map((card) => (
            <article key={card.label} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">{card.label}</p>
              <h2 className="mt-4 text-2xl font-black text-ink">
                {card.href ? (
                  <a className="hover:text-brand-blue" href={card.href}>
                    {card.value}
                  </a>
                ) : (
                  card.value
                )}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">{card.note}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Quick Quote</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Freight details make the quote cleaner.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              Include pickup location, delivery location, freight type, number of skids, weight,
              requested service, and any notes about dock access, liftgate needs, appointment times,
              or warehouse handling.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
