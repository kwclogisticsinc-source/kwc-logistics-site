import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { faqs, industries, serviceAreas, services, site } from "@/lib/site";

const whyChoose = [
  "Family-run, direct communication, and practical delivery planning.",
  "Local knowledge across Kitchener, Waterloo, Cambridge, Guelph, and nearby Ontario lanes.",
  "Support for urgent freight, scheduled work, and repeat business routes.",
  "Clear freight details up front: timing, liftgate needs, pallets, weight, and dimensions."
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Kitchener, Ontario logistics</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-6xl">
              Family-run logistics across Southwestern Ontario.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              KWC Logistics Inc. helps businesses move final mile deliveries, B2B freight,
              pallets, warehouse transfers, hot shots, and dedicated route work from a local
              base in Kitchener.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-blue bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-pale focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              >
                Call Dispatch
              </a>
            </div>
          </div>
          <div className="relative min-h-[360px] rounded-md border border-line bg-brand-pale p-5 shadow-soft">
            <div className="absolute inset-x-8 top-10 h-3 rounded-full bg-white" />
            <div className="absolute inset-x-8 top-24 h-3 rounded-full bg-white" />
            <div className="absolute inset-x-8 top-36 h-3 rounded-full bg-white" />
            <div className="relative z-10 grid h-full content-between gap-5">
              <div className="rounded-md border border-line bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">Dispatch note</p>
                <p className="mt-3 text-2xl font-bold text-ink">Pickup in Kitchener. Delivery in Hamilton.</p>
                <p className="mt-2 text-sm leading-6 text-muted">Two pallets, liftgate required, scheduled window confirmed.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Final mile", "LTL freight", "Hot shot"].map((item) => (
                  <div key={item} className="rounded-md bg-white p-4 text-sm font-semibold text-ink">
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-md bg-brand-navy p-5 text-white">
                <p className="text-sm text-blue-100">Local lanes</p>
                <p className="mt-2 text-lg font-bold">Waterloo Region to the GTA and Southwestern Ontario</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Services"
        title="Delivery and freight support for Ontario businesses"
        intro="Straightforward logistics for companies that need freight picked up, handled properly, and delivered without a maze of handoffs."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <article key={service.title} className="rounded-md border border-line bg-white p-5">
              <h3 className="text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why KWC"
        title="Reliable, local, and easy to reach"
        intro="KWC Logistics is built for businesses that want practical answers, not a call centre script."
        className="bg-brand-pale"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {whyChoose.map((item) => (
            <div key={item} className="rounded-md border border-line bg-white p-5">
              <p className="text-base font-semibold leading-7 text-ink">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Service Areas"
        title="Serving Waterloo Region, the GTA, and Southwestern Ontario"
        intro="From Kitchener dispatch to regional business lanes, KWC supports deliveries across the cities customers ask for most."
      >
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {serviceAreas.map((area) => (
            <div key={area} className="rounded-md border border-line bg-white p-4 text-sm font-bold text-ink">
              {area}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Industries" title="Industries served" intro="Regular commercial freight for teams that value clear pickup details and dependable delivery windows." className="bg-slate-50">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <p key={industry} className="rounded-md border border-line bg-white p-4 text-sm font-semibold text-ink">
              {industry}
            </p>
          ))}
        </div>
      </Section>

      <section className="bg-brand-navy py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-200">Need a shipment moved?</p>
            <h2 className="mt-2 text-3xl font-bold">Send the details and KWC can quote the lane.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100">
              Include pickup city, delivery city, freight type, pallet count, weight, dimensions, timing, and liftgate needs.
            </p>
          </div>
          <ButtonLink href="/request-a-quote" variant="secondary" className="shrink-0">
            Request a Quote
          </ButtonLink>
        </div>
      </section>

      <Section eyebrow="FAQ" title="Common questions">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-md border border-line bg-white p-5">
              <h3 className="text-lg font-bold text-ink">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
