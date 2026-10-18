import { FreightNetwork } from "@/components/FreightNetwork";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StockPhoto } from "@/components/StockPhoto";
import { localLtlOptions, serviceCategories, site } from "@/lib/site";

const serviceNotes: Record<string, string> = {
  "ltl-distribution": "Move pallets and partial loads between manufacturers, warehouses and commercial receivers. Discuss one-time shipments, consolidation and recurring Ontario distribution routes with dispatch.",
  "final-mile-b2c": "Deliver to businesses, stores, warehouses and customer doors. Tell us about stairs, restricted access, appointments and whether liftgate, inside delivery or setup support is needed. Additional handling is agreed before booking.",
  "frozen-refrigerated-freight": "Share the product type, required temperature range and units, loading conditions, delivery window and monitoring needs. Suitable equipment may be directly operated or arranged through partners; the quote confirms the service. Pharmaceutical and other regulated shipments require a separate capability review.",
  "specialized-freight": "For non-standard freight, describe the packaging, dimensions, loading and unloading arrangements. Wrapping, palletizing, offloading, inside delivery and setup may be coordinated by arrangement. Specialty equipment is confirmed for each shipment.",
  "freight-brokerage": "Our North American relationships expand the options beyond KWC equipment. We coordinate road, rail, ocean and multimodal options through transport partners, reviewing lanes, carrier acceptance, timing and cross-border documentation needs before booking. We do not operate rail or ocean services or promise every route or commodity.",
  "b2b-dedicated-routes": "Build a recurring plan for store replenishment, supplier pickups and business deliveries. Share frequency, stops, volume changes and receiving windows so dispatch can assess a practical route.",
  "warehousing-cross-dock": "Discuss warehouse transfers, staging and cross-dock coordination as part of a transport plan. Facility access, storage needs, handling and partner availability are confirmed before a service is agreed.",
  "expedited-courier": "Share the actual pickup deadline and required arrival time for urgent parts or commercial freight. Dispatch checks available equipment and routes before confirming a feasible schedule."
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceCategories.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceCategories.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.description} Contact KWC Logistics Inc. at ${site.domain}.`,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = serviceCategories.find((item) => item.slug === slug);
  if (!service) notFound();
  const isLocalLtl = service.slug === "ltl-distribution";

  return (
    <>
      <PageHero eyebrow="KWC Service" title={service.title} image={service.image}>
        <p>{service.description}</p>
      </PageHero>
      {service.slug === "freight-brokerage" ? <FreightNetwork /> : null}

      {isLocalLtl ? (
        <Section
          eyebrow="Kitchener Cartage Freight"
          title="LTL Direct, Rush, and Sameday options."
          intro="KWC provides fast local LTL freight delivery within Kitchener, the GTA, and Southern Ontario for businesses that need practical timing, direct communication, and dependable handling."
          className="bg-brand-pale"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {localLtlOptions.map((option) => (
              <article key={option.name} className="rounded-[1.5rem] border border-line bg-white p-6 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-blue">{option.time}</p>
                <h2 className="mt-3 text-2xl font-black text-ink">{option.name}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{option.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-[2rem] bg-brand-navy p-6 text-white shadow-glow">
            <h2 className="text-3xl font-black tracking-tight">Get a local cartage freight quote for the Kitchener area.</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-blue-100">
              Send pickup city, delivery city, pallet count, freight type, weight, dimensions,
              timing requirement, and any dock or liftgate notes. KWC will help match the freight
              to the right local LTL option.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact" className="bg-brand-blue hover:bg-blue-500">Request a Local LTL Quote</ButtonLink>
            </div>
          </div>
        </Section>
      ) : null}

      <Section title="Plan the shipment around your requirements" intro="Tell us what needs to move, where it is going, and what matters at each end.">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-line bg-white p-6"><h2 className="text-xl font-bold">Service scope</h2><p className="mt-4 leading-7 text-muted">{serviceNotes[service.slug] ?? service.description}</p></article>
          <article className="rounded-xl border border-line bg-white p-6"><h2 className="text-xl font-bold">What to include in your quote</h2><p className="mt-4 leading-7 text-muted">Share the pickup and delivery locations, dates, freight description, quantity, weight and dimensions. Include site access, loading equipment, handling and temperature requirements where relevant.</p><p className="mt-4 leading-7 text-muted">KWC confirms whether your shipment will use our Ontario equipment or be arranged through a carrier partner. Availability and commodity acceptance are reviewed before booking.</p></article>
        </div>
      </Section>
      <Section title={`A professional ${service.title.toLowerCase()} program`} intro="KWC builds each solution around shipment profile, service level, customer expectations, communication requirements, and long-term operational goals.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <div className="h-[460px]">
              <StockPhoto src={service.image} alt={service.title} />
            </div>
          </div>
          <div className="grid gap-5">
            <article className="rounded-[2rem] border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-ink">Benefits</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="rounded-xl bg-brand-pale px-4 py-3 text-sm font-bold text-brand-navy">{benefit}</div>
                ))}
              </div>
            </article>
            <article className="rounded-[2rem] border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-ink">Industries served</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.industries.map((industry) => (
                  <span key={industry} className="rounded-full border border-line px-4 py-2 text-sm font-bold text-muted">{industry}</span>
                ))}
              </div>
            </article>
            <article className="rounded-[2rem] bg-brand-navy p-6 text-white shadow-glow">
              <h2 className="text-2xl font-black">Typical customers</h2>
              <p className="mt-3 text-sm leading-6 text-blue-100">{service.customers.join(", ")}.</p>
              <div className="mt-6">
                <ButtonLink href="/contact" className="bg-brand-blue hover:bg-blue-500">Request a Quote</ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </Section>
    </>
  );
}
