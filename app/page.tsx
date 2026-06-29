import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CoverageMap } from "@/components/CoverageMap";
import { Section } from "@/components/Section";
import { VisualCard } from "@/components/VisualCard";
import { serviceAreas, serviceCategories, site } from "@/lib/site";

const servicePhotos = [
  {
    src: "/images/kwc-straight-trucks-dock.png",
    title: "LTL Freight",
    description: "Palletized freight, skids, partial loads, warehouse freight, and recurring commercial shipments.",
    tags: ["LTL", "Skids"]
  },
  {
    src: "/images/kwc-warehouse-crossdock.png",
    title: "Warehousing & Cross-Dock",
    description: "Freight staging, warehouse transfers, route loading, and practical dock coordination.",
    tags: ["Warehousing", "Cross-dock"]
  },
  {
    src: "/images/kwc-yard-fleet.png",
    title: "Waterloo Region Coverage",
    description: "Kitchener, Waterloo, Cambridge, GTA lanes, and Ontario freight support.",
    tags: ["KWC", "Ontario"]
  }
];

const quickLinks = [
  {
    href: "/about",
    title: "Built in Waterloo Region",
    text: "Learn the family trucking story behind KWC and why Kitchener, Waterloo, and Cambridge come first."
  },
  {
    href: "/services",
    title: "Services without the noise",
    text: "See the freight services KWC is focused on: LTL, warehousing, cross-docking, expedited support, and regional freight."
  },
  {
    href: "/resources",
    title: "Prepare a cleaner quote",
    text: "Use simple freight checklists to send the right pickup, delivery, skid, weight, and access details."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/kwc-yard-fleet.png"
            alt="KWC Logistics fleet outside a warehouse"
            fill
            priority
            className="object-cover opacity-65"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/82 to-brand-navy/30" />
          <div className="absolute inset-0 logistics-grid opacity-25" />
        </div>
        <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_0.75fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Kitchener • Waterloo • Cambridge</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              LTL freight and warehousing built for Waterloo Region businesses.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              KWC Logistics Inc specializes in dependable LTL freight, warehousing,
              cross-docking, and expedited freight support throughout Kitchener,
              Waterloo, Cambridge, the GTA, and Ontario.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="bg-brand-blue hover:bg-blue-500">
                Get a Quote
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-brand-navy">
                View Services
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-3xl border border-brand-cyan/20 bg-brand-navy/45 p-6 shadow-glow backdrop-blur">
            <div className="rounded-2xl border border-brand-cyan/20 bg-white/5 p-4">
              <Image src="/images/kwc-logo.png" alt="KWC Logistics logo" width={420} height={320} className="h-auto w-full object-contain mix-blend-screen drop-shadow-[0_18px_36px_rgba(18,183,255,0.35)]" />
            </div>
            <div className="mt-6 grid gap-3">
              {["Local dispatch", "Professional equipment", "Clear freight communication"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-blue-50">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Company Overview"
        title="A focused carrier website, not a one-page brochure."
        intro="The homepage now gives a clean first impression. The details live where they belong: About, Services, Resources, and Contact Us."
        className="bg-white"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-3xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft">
              <h2 className="text-2xl font-black text-ink">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              <span className="mt-6 inline-flex text-sm font-bold text-brand-blue">Open page</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Freight Services"
        title="Clean categories for quoting and dispatch."
        intro="KWC is built around LTL and warehousing first. Other services can be added later once you confirm the final service list."
        className="bg-brand-pale"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {serviceCategories.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:border-brand-blue">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-xs font-black text-brand-cyan">{service.icon}</div>
              <h2 className="mt-4 text-lg font-black text-ink">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Photos & Operations" title="Show the equipment, docks, and freight environment clearly.">
        <div className="grid gap-5 lg:grid-cols-3">
          {servicePhotos.map((card) => <VisualCard key={card.title} {...card} />)}
        </div>
      </Section>

      <Section
        eyebrow="Service Area"
        title="Built in KWC. Delivering across Ontario."
        intro="The map section is now part of the homepage layout. We can refine exact cities, lanes, warehouse wording, and service claims once you confirm the details."
        className="bg-brand-pale"
      >
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-3xl bg-brand-navy p-6 text-white shadow-glow">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-cyan">Ontario coverage</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight">KWC warehouse base. Ontario freight reach.</h3>
            <p className="mt-4 text-sm leading-6 text-blue-100">
              From our home base in Kitchener-Waterloo-Cambridge, KWC supports LTL freight,
              warehousing, cross-docking, and expedited freight needs across key Ontario markets.
            </p>
            <div className="mt-6 grid gap-2">
              {serviceAreas.slice(0, 8).map((area) => (
                <div key={area.slug} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold">
                  {area.title.replace(" Logistics", "")}
                </div>
              ))}
            </div>
          </div>
          <CoverageMap />
        </div>
      </Section>

      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Next Step</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Send the freight details when you are ready.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              A clean quote starts with pickup location, delivery location, freight type, skid count,
              weight, dimensions, timing, and access notes.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white p-6 text-brand-navy shadow-glow">
            <h3 className="text-3xl font-black">Dispatch</h3>
            <p className="mt-4 text-base leading-7 text-muted">
              Call or email KWC Logistics and we will help sort out what information is needed.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-bold">
              <a href={`tel:${site.phone}`} className="rounded-xl bg-brand-pale px-4 py-3 text-brand-blue">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="rounded-xl bg-brand-pale px-4 py-3 text-brand-blue">{site.email}</a>
            </div>
            <div className="mt-6">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
