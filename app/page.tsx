import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CoverageMap } from "@/components/CoverageMap";
import { FullLogo } from "@/components/Logo";
import { Section } from "@/components/Section";
import { StockPhoto, stock } from "@/components/StockPhoto";
import { VisualCard } from "@/components/VisualCard";
import {
  fleetTypes,
  industries,
  serviceCategories,
  site,
  technologyPillars,
  trustBuilders,
  workSteps
} from "@/lib/site";

const heroStats = [
  ["Ontario", "primary service area"],
  ["15+ yrs", "transportation experience"],
  ["24/7", "communication mindset"]
];

const testimonials = [
  ["Operations Manager", "KWC gives us clear answers quickly. That matters more than a fancy portal when freight needs to move."],
  ["Manufacturer", "They understand the floor, the dock, the driver, and the customer. It feels practical, not corporate."],
  ["Retail Distributor", "The team helped simplify our local movement and gave us a cleaner way to plan repeat freight."]
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[900px] overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0">
          <StockPhoto src={stock.hero} alt="KWC Logistics branded fleet at an Ontario logistics yard" className="scale-105 opacity-72" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,26,58,0.94),rgba(6,26,58,0.74),rgba(6,26,58,0.16))]" />
          <div className="absolute inset-0 logistics-grid opacity-20" />
        </div>

        <div className="relative mx-auto grid min-h-[900px] max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div className="reveal-up">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-cyan">Ontario logistics, rebuilt around trust</p>
            <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Moving Your Business Forward with Smarter, Simpler Logistics.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-blue-100">
              Helping Ontario businesses move freight faster through dependable transportation,
              technology, transparent communication, and customer service that feels direct.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="bg-brand-blue px-7 hover:bg-blue-500">
                Get a Quote
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="border-white/30 bg-white/10 px-7 text-white hover:bg-white hover:text-brand-navy">
                Our Services
              </ButtonLink>
            </div>
          </div>

          <div className="reveal-up">
            <div className="mx-auto max-w-md rounded-[2.5rem] border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur-xl">
              <FullLogo className="animate-[logoFloat_5s_ease-in-out_infinite]" />
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {heroStats.map(([value, label]) => (
                  <div key={value} className="rounded-2xl border border-white/10 bg-brand-navy/55 p-4 text-center">
                    <p className="text-2xl font-black">{value}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-blue-100">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Positioning"
        title="Not another trucking website. A logistics company built to be easier to work with."
        intro="KWC is not trying to be the biggest carrier. The goal is simpler: become Ontario's most trusted logistics company before expanding across Canada."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Communication", "Fast answers, direct updates, and fewer people between the customer and the freight."],
            ["Trust", "Transparent service, practical pricing, and a team that understands the dock, the driver, and the customer."],
            ["Technology", "Route planning, shipment visibility, proof of delivery, and scalable systems built into the operation."]
          ].map(([title, text]) => (
            <article key={title} className="premium-hover rounded-[1.75rem] border border-line bg-white p-7 shadow-sm hover:shadow-soft">
              <div className="mb-6 h-2 w-14 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" />
              <h2 className="text-2xl font-black text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title="A complete logistics platform for Ontario freight."
        intro="Each service is designed around the same operating principle: make freight easier to quote, plan, dispatch, track, and deliver."
        className="bg-brand-pale"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceCategories.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft">
              <div className="relative h-52 overflow-hidden">
                <StockPhoto src={service.image} alt={service.title} className="transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/88 via-brand-navy/24 to-transparent" />
                <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-black text-white">{service.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm leading-6 text-muted">{service.description}</p>
                <span className="mt-5 inline-flex text-sm font-bold text-brand-blue">Explore service</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Technology</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Modern logistics systems. Human communication.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              Technology should make freight simpler, not colder. KWC uses planning,
              visibility, dispatch discipline, and data to create a cleaner customer experience.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {technologyPillars.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-black text-white backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Fleet" title="Flexible equipment for the way Ontario freight actually moves.">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2rem] border border-line shadow-soft">
            <div className="relative h-[560px]">
              <Image src="/images/kwc-straight-trucks-dock.png" alt="KWC Logistics branded straight trucks at loading docks" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
          </div>
          <div className="grid content-center gap-3">
            {fleetTypes.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
                <h3 className="text-xl font-black text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Process" title="A simple operating flow from quote to delivery." className="bg-brand-pale">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {workSteps.map((step, index) => (
            <article key={step} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <p className="text-sm font-black text-brand-blue">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-black text-ink">{step}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Industries" title="Built for businesses where logistics has to work.">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          {industries.map((industry) => (
            <article key={industry} className="rounded-2xl border border-line bg-white p-4 text-sm font-black text-brand-navy shadow-sm">
              {industry}
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why KWC" title="Why companies choose us." className="bg-brand-pale">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustBuilders.map((item) => (
            <article key={item} className="premium-hover rounded-2xl border border-line bg-white p-5 shadow-sm hover:shadow-soft">
              <h3 className="text-lg font-black text-ink">{item}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Service Area" title="Ontario coverage from a Kitchener-Waterloo base.">
        <CoverageMap />
      </Section>

      <Section eyebrow="Proof" title="What customers should feel from the first call." className="bg-brand-pale">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map(([role, quote]) => (
            <article key={role} className="rounded-[1.75rem] border border-line bg-white p-7 shadow-sm">
              <p className="text-lg font-semibold leading-8 text-ink">&ldquo;{quote}&rdquo;</p>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-brand-blue">{role}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Operations" title="Real logistics environment. Premium customer experience.">
        <div className="grid gap-5 lg:grid-cols-3">
          <VisualCard src={stock.crossdock} title="Warehouse Distribution" description="Dock coordination, staging, consolidation, and outbound distribution." tags={["Warehouse", "Cross-dock"]} />
          <VisualCard src={stock.yard} title="Ontario Fleet Network" description="Flexible assets and partner capacity planned around lanes, volume, and timing." tags={["Fleet", "Ontario"]} />
          <VisualCard src={stock.cargoVan} title="Final Mile & Expedite" description="Fast local movement with communication before, during, and after delivery." tags={["Final mile", "Expedite"]} />
        </div>
      </Section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Start a Conversation</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Ready to make freight simpler?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
              Send the lane, freight details, timing, and service requirements. KWC will help define the right plan.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" className="bg-brand-blue hover:bg-blue-500">Get a Quote</ButtonLink>
            <a href={`tel:${site.phone}`} className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-navy">
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
