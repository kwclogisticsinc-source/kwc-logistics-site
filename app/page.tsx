import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CoverageMap } from "@/components/CoverageMap";
import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";
import { VisualCard } from "@/components/VisualCard";
import { faqs, serviceAreas, serviceCategories, site } from "@/lib/site";

const timeline = [
  "Father begins trucking career",
  "Owner-operator years across Canada and the United States",
  "Dispatch experience coordinating freight",
  "Logistics, warehousing, and customer service career",
  "Creation of KWC Logistics Inc."
];

const values = [
  "Quality matters.",
  "Communication matters.",
  "Reliability matters.",
  "Professionalism matters.",
  "Long-term relationships matter."
];

const photoCards = [
  {
    src: "/images/kwc-straight-trucks-dock.png",
    title: "Straight Truck Delivery",
    description: "Commercial freight, skids, dock work, liftgate coordination, and dependable regional delivery.",
    tags: ["Straight trucks", "Commercial freight"]
  },
  {
    src: "/images/kwc-warehouse-crossdock.png",
    title: "Warehousing & Cross-Docking",
    description: "Freight staging, warehouse transfers, pallet handling, consolidation, and outbound loading.",
    tags: ["Warehousing", "Cross-dock"]
  },
  {
    src: "/images/kwc-yard-fleet.png",
    title: "Waterloo Region Freight",
    description: "Kitchener, Waterloo, Cambridge, the GTA, and Ontario-wide lanes planned with care.",
    tags: ["KWC", "Ontario"]
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/kwc-straight-trucks-dock.png"
            alt="KWC Logistics straight trucks at a loading dock"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/86 to-brand-navy/35" />
          <div className="absolute inset-0 logistics-grid opacity-35" />
        </div>
        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-end gap-10 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.75fr] lg:px-8 lg:pb-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Built in Kitchener-Waterloo-Cambridge</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Kitchener-Waterloo-Cambridge LTL & Expedited Freight Specialists
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              KWC Logistics Inc provides dependable LTL freight, expedited transportation,
              warehousing, cross-docking and straight truck delivery solutions throughout
              Kitchener, Waterloo, Cambridge, the GTA and Ontario.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-a-quote" className="bg-brand-blue hover:bg-blue-500">
                Request a Quote
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-brand-navy">
                View Services
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-glow backdrop-blur">
            <div className="max-w-[240px] rounded-2xl bg-white px-4 py-3">
              <Image src="/images/kwc-logo.png" alt="KWC Logistics logo" width={320} height={260} className="h-auto w-full" />
            </div>
            <div className="mt-8 grid gap-4">
              {[
                ["25+ years", "family trucking experience"],
                ["15 years", "operations, dispatch, and warehousing knowledge"],
                ["KWC", "Kitchener, Waterloo, Cambridge"]
              ].map(([value, label]) => (
                <div key={value} className="border-t border-white/15 pt-4">
                  <p className="text-3xl font-black">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-blue-100">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Core Services"
        title="Focused freight services for Waterloo Region businesses."
        intro="KWC keeps the offer clear and professional: LTL freight, expedited freight, warehousing, cross-docking, and straight truck delivery."
        className="bg-white"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {serviceCategories.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-sm font-black text-brand-cyan">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-black text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
              <span className="mt-5 inline-flex text-sm font-bold text-brand-blue group-hover:text-brand-navy">Learn More</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Our Story"
        title="A family business built from real trucking and logistics experience."
        intro="KWC Logistics is not simply another transportation company. It is a family-operated freight business shaped by experience behind the wheel, in dispatch, in warehousing, and in customer service."
        className="bg-brand-pale"
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-brand-navy p-6 text-white shadow-glow sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">KWC means local</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight">Kitchener. Waterloo. Cambridge.</h3>
            <p className="mt-5 text-base leading-7 text-blue-100">
              Our mission is to become the preferred logistics partner for businesses throughout
              Kitchener, Waterloo, and Cambridge before expanding further across Ontario. We are
              proud to help Waterloo Region manufacturers, distributors, warehouses, retailers,
              and growing businesses move freight with confidence.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
            <div className="space-y-5">
              {timeline.map((item, index) => (
                <div key={item} className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-sm font-black text-white">{index + 1}</div>
                    {index < timeline.length - 1 ? <div className="mt-2 h-full w-px bg-line" /> : null}
                  </div>
                  <div className="pb-5">
                    <h3 className="text-lg font-black text-ink">{item}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {index === 0
                        ? "The foundation starts with professional trucking and respect for the work required to move freight properly."
                        : index === 1
                          ? "Years hauling freight built practical knowledge of lanes, equipment, timing, customers, and responsibility."
                          : index === 2
                            ? "Dispatching family equipment created a direct understanding of communication, problem solving, and shipment planning."
                            : index === 3
                              ? "Operations experience added warehousing, transportation coordination, and customer service discipline."
                              : "KWC combines family trucking knowledge with modern logistics and supply chain experience."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Built on Experience" title="From the driver's seat to the operations office.">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-3xl border border-line bg-white p-6 shadow-sm lg:col-span-2">
            <p className="text-base leading-7 text-muted">
              Our company is built on more than 25 years of family trucking experience and 15 years
              of logistics, dispatching, transportation operations, and warehousing knowledge. We
              understand transportation from both the driver&apos;s seat and the operations office.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              That perspective helps KWC provide dependable, organized, and professional freight
              solutions without making the process feel complicated for customers.
            </p>
          </article>
          <article className="rounded-3xl bg-brand-navy p-6 text-white shadow-glow">
            <h3 className="text-2xl font-black">Quality. Safety. Family.</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-blue-100">
              {values.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </Section>

      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Family Values</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Family Values Drive Everything We Do</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              KWC Logistics is family operated. Fleet maintenance standards are supported by family
              experience, including oversight from a certified diesel technician. Safety has always
              been a family priority, and customer freight deserves to travel on dependable equipment.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Preventative maintenance", "Vehicle inspections", "Professional presentation", "Cargo protection"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <div className="mb-4 h-2 w-12 rounded-full bg-brand-cyan" />
                <h3 className="text-xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Operations" title="Professional equipment, clean handling, and organized freight movement.">
        <div className="grid gap-5 lg:grid-cols-3">
          {photoCards.map((card) => <VisualCard key={card.title} {...card} />)}
        </div>
      </Section>

      <Section eyebrow="Service Area" title="Proudly serving Waterloo Region with Ontario-wide capability." className="bg-brand-pale">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-base leading-7 text-muted">
              KWC is built in Kitchener-Waterloo-Cambridge and focused on earning the trust of
              local businesses first. From there, our assets, dispatch knowledge, warehousing
              relationships, and trusted carrier network help manage freight across the GTA and Ontario.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-brand-navy hover:border-brand-blue">
                  {area.title.replace(" Logistics", "")}
                </Link>
              ))}
            </div>
          </div>
          <CoverageMap />
        </div>
      </Section>

      <Section eyebrow="Professional Drivers" title="Respectful teams create better freight service.">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-line bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black text-ink">What we expect</h3>
            <p className="mt-4 text-base leading-7 text-muted">
              Professional appearance, safe driving, excellent communication, respect for customers,
              attention to detail, and a strong work ethic.
            </p>
          </article>
          <article className="rounded-3xl border border-line bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black text-ink">How we work with drivers</h3>
            <p className="mt-4 text-base leading-7 text-muted">
              KWC treats every driver with respect. Building long-term relationships creates better
              service for customers and a stronger, more family-oriented team.
            </p>
          </article>
        </div>
      </Section>

      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Request a Quote</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Tell us what needs to move.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              Send the pickup location, delivery location, freight type, number of skids, weight,
              service required, and handling notes. KWC will confirm the details that matter.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <Section eyebrow="FAQ" title="Common questions">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="text-lg font-black text-ink">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
