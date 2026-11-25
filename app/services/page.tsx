import Link from "next/link";
import Image from "next/image";
import { commercialServices } from "@/lib/commercial-services";
import type { Metadata } from "next";
import { ContactCTA, PageIntro, ServiceCards } from "@/components/DeliveryUI";
export const metadata: Metadata = {
  title: "Bulk Package, Freight & Logistics Services",
  description:
    "Explore business bulk package delivery, pallet freight and recurring transportation routes.",
  alternates: { canonical: "/services" },
};
const featuredServices = [
  {
    title: "LTL and pallet freight",
    href: "/services/ltl-freight",
    image: "/images/kwc-pallet-handoff.webp",
    alt: "Two freight workers checking a wrapped pallet beside a KWC straight truck",
    summary: "Move one pallet or several. Share the dimensions, total weight and access at both stops.",
  },
  {
    title: "Final-mile liftgate delivery",
    href: "/services/tailgate-delivery",
    image: "/images/kwc-liftgate-ground-level.webp",
    alt: "Branded KWC straight truck with a rear liftgate lowered at a ground-level receiving door",
    summary: "For sites without a raised dock, tell us the heaviest item and what the unloading area is like.",
  },
  {
    title: "Recurring freight routes",
    href: "/regular-deliveries",
    image: "/images/kwc-raised-loading-dock.webp",
    alt: "KWC straight truck backed into a raised commercial dock, with its front wheels facing the yard",
    summary: "Plan repeat pickups and delivery stops around volume, receiving windows and equipment needs.",
  },
] as const;

export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="KITCHENER · WATERLOO · CAMBRIDGE"
        title="Straight trucks, pallet freight and regular routes."
      >
        <p>
          Tell us where your freight needs to go, what you’re moving and how often. We’ll help select a truck or service that suits your route and budget.
        </p>
      </PageIntro>
      <section className="wrap content-section" aria-labelledby="featured-services-title">
        <h2 id="featured-services-title">Core freight services</h2>
        <div className="kwc-featured-services">
          {featuredServices.map(({ title, href, image, alt, summary }) => (
            <article key={href}>
              <Link href={href}>
                <Image src={image} alt={alt} width={1280} height={853} sizes="(max-width: 760px) 100vw, 30vw" />
                <h3>{title}</h3>
              </Link>
              <p>{summary}</p>
            </article>
          ))}
        </div>
        <h2>All services</h2>
        <ul className="july-directory">
          {commercialServices.map(([slug, title, summary]) => (
            <li key={slug}>
              <Link className="text-link" href={`/services/${slug}`}>{title}</Link>
              <p>{summary}</p>
            </li>
          ))}
        </ul>
        <ServiceCards />
        <div className="notice">
          <strong>Ontario fleet. Canada-wide and cross-border brokerage.</strong>{" "}
          Our company-operated fleet serves Ontario exclusively. For moves beyond Ontario
          and additional capacity within the province, we arrange service through qualified
          carrier partners. <Link className="text-link" href="/services/freight-brokerage">Explore freight brokerage</Link>.
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
