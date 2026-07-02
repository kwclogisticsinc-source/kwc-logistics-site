import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CoverageMap } from "@/components/CoverageMap";
import { FullLogo } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";
import { StockPhoto, stock } from "@/components/StockPhoto";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact KWC Logistics Inc. for Ontario logistics, LTL freight, FTL freight, warehousing, courier services, final mile delivery, route optimization, and custom transportation plans.",
  alternates: { canonical: "/contact" }
};

const contactCards = [
  {
    label: "Dispatch Phone",
    value: site.phone,
    href: `tel:${site.phone}`,
    note: "Call for freight that needs a clear answer and practical next step."
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Send lanes, freight type, skid counts, weights, dimensions, and timing."
  },
  {
    label: "Location",
    value: "Based in Kitchener, Ontario",
    href: null,
    note: "Serving Waterloo Region, the GTA, Southwestern Ontario, and Ontario-wide lanes."
  },
  {
    label: "Office Hours",
    value: "Dispatch by request",
    href: null,
    note: "Exact published office hours can be added before launch."
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact KWC" title="Talk to a logistics team that makes freight easier to move." image={stock.dispatch}>
        <p>
          Send the details for your lane, freight profile, delivery timing, warehouse needs,
          customer requirements, or recurring route. KWC will help define the right logistics plan.
        </p>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-line bg-brand-pale shadow-soft">
            <div className="relative h-[560px]">
              <StockPhoto src={stock.dock} alt="Modern loading dock and logistics operations" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/42 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="max-w-[220px] rounded-2xl border border-brand-cyan/20 bg-brand-navy/55 px-4 py-3 backdrop-blur">
                  <FullLogo />
                </div>
                <h2 className="mt-6 max-w-xl text-4xl font-black tracking-tight">
                  Reliable communication before, during, and after the move.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-6 text-blue-100">
                  KWC is built for customers who want a real answer, a clear plan, and freight
                  movement that feels organized from the first call.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-brand-navy p-5 text-white shadow-glow sm:p-7">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Request a Quote</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Send the shipment details.</h2>
            <p className="mt-4 text-sm leading-6 text-blue-100">
              The more detail you provide, the cleaner the recommendation. Include pickup,
              delivery, freight type, pallet or item count, dimensions, weight, timing,
              dock access, liftgate needs, and any special handling notes.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <Section title="Business information" intro="No full street address is published yet. KWC Logistics Inc. is based in Kitchener, Ontario." className="bg-brand-pale">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <article key={card.label} className="premium-hover rounded-[1.5rem] border border-line bg-white p-6 shadow-sm hover:shadow-soft">
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

      <Section eyebrow="Service Area" title="Ontario coverage from a Kitchener base.">
        <CoverageMap />
      </Section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Talk to Our Team</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Need help choosing the right service?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
              KWC can help compare LTL, FTL, courier, final mile, warehousing,
              cross-docking, dedicated routes, and custom logistics programs.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/services" className="bg-brand-blue hover:bg-blue-500">View Services</ButtonLink>
            <a href={`tel:${site.phone}`} className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-navy">
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
