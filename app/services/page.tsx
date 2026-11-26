import Link from "next/link";
import Image from "next/image";
import { commercialServicePhotos, commercialServices } from "@/lib/commercial-services";
import { industryPhotos } from "@/lib/industry-pages";
import type { Metadata } from "next";
import { ContactCTA } from "@/components/DeliveryUI";
export const metadata: Metadata = {
  title: "Bulk Package, Freight & Logistics Services",
  description:
    "Explore business bulk package delivery, pallet freight and recurring transportation routes.",
  alternates: { canonical: "/services" },
};
const featuredServices = [
  {
    title: "LTL and Pallet Freight",
    href: "/services/ltl-freight",
    image: commercialServicePhotos["ltl-freight"].src,
    alt: commercialServicePhotos["ltl-freight"].alt,
    summary: "Move one pallet or several with shared capacity where available. A good fit for supplier orders, transfers and store replenishment.",
    details: "For a quote, send pallet count, loaded dimensions, total weight and dock access at both ends.",
  },
  {
    title: "Final-Mile Liftgate Delivery",
    href: "/services/tailgate-delivery",
    image: commercialServicePhotos["tailgate-delivery"].src,
    alt: commercialServicePhotos["tailgate-delivery"].alt,
    summary: "Get palletized freight to a business without a raised loading dock. We review whether a rear liftgate and pallet jack suit the receiving site.",
    details: "Send the heaviest pallet weight, surface conditions and the distance from the truck to the receiving door.",
  },
  {
    title: "Recurring Freight Routes",
    href: "/regular-deliveries",
    image: commercialServicePhotos["retail-grocery-distribution"].src,
    alt: commercialServicePhotos["retail-grocery-distribution"].alt,
    summary: "Build repeat pickups, store replenishment and multi-stop routes around your actual demand.",
    details: "Send weekly volume, stops and receiving windows so we can review routing, frequency and equipment.",
  },
  {
    title: "B2B Bulk Package Delivery",
    href: "/services/courier",
    image: "/images/kwc-bulk-packages.webp",
    alt: "A worker handling boxed packages at the rear of a cargo van",
    summary: "Consolidate a batch of labelled packages or customer orders into a business delivery run.",
    details: "Tell us the number of packages, approximate volume, stops and any time-sensitive handoffs.",
  },
  {
    title: "Full Truckload and Dedicated Freight",
    href: "/services/full-truckload",
    image: commercialServicePhotos["full-truckload"].src,
    alt: commercialServicePhotos["full-truckload"].alt,
    summary: "Arrange dedicated capacity when your load needs the space or a direct trip. Ask about 53-foot dry van options.",
    details: "Share the load dimensions, gross weight, loading method and shipment dates.",
  },
  {
    title: "Refrigerated Transportation",
    href: "/services/refrigerated-transportation",
    image: commercialServicePhotos["refrigerated-transportation"].src,
    alt: commercialServicePhotos["refrigerated-transportation"].alt,
    summary: "Request temperature-controlled capacity for eligible food and other goods, including 53-foot reefer options.",
    details: "Include the commodity, required temperature range and any loading or temperature-recording instructions.",
  },
] as const;

export default function Services() {
  return (
    <>
      <section className="kwc-services-hero">
        <div className="wrap kwc-services-hero-grid">
          <div>
            <h1>Freight Services Built Around Your Shipment.</h1>
            <p>From a single pallet to recurring store deliveries, we help Ontario businesses match their freight to the right equipment, route and budget.</p>
            <div className="button-row">
              <Link href="/book-now#quote-start" className="btn">Get a Freight Quote</Link>
              <Link href="/regular-deliveries#quote" className="kwc-services-hero-link">Plan Recurring Deliveries</Link>
            </div>
          </div>
          <Image src="/images/business-pickup.webp" alt="A delivery worker collects boxed orders from a business" width={1100} height={733} preload sizes="(max-width: 800px) 94vw, 48vw" />
        </div>
      </section>
      <section className="kwc-services-catalog" aria-labelledby="featured-services-title">
        <div className="wrap">
          <h2 id="featured-services-title">Find the Right Service for Your Freight</h2>
          <div className="kwc-featured-services">
            {featuredServices.map(({ title, href, image, alt, summary, details }) => (
              <article key={href}>
                <Link href={href}>
                  <Image src={image} alt={alt} width={1280} height={720} sizes="(max-width: 580px) 92vw, (max-width: 940px) 46vw, 30vw" />
                  <h3>{title}</h3>
                </Link>
                <p>{summary}</p>
                <p className="kwc-service-details">{details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap kwc-coverage-photo-band kwc-service-industry" aria-labelledby="medical-delivery-title">
        <Image src={industryPhotos["medical-supplies"].src} alt={industryPhotos["medical-supplies"].alt} width={1280} height={720} sizes="(max-width: 800px) 92vw, 46vw" />
        <div>
          <h2 id="medical-delivery-title">Medical Supply Delivery</h2>
          <p>Plan scheduled deliveries of general medical supplies to clinics and other business locations. Share what you’re shipping, who will receive it and any special requirements so we can confirm eligibility and handling before pickup.</p>
          <Link className="text-link" href="/industries/medical-supplies">Explore Medical Supply Delivery</Link>
        </div>
      </section>
      <section className="wrap content-section kwc-services-directory">
        <h2>All Freight and Logistics Services</h2>
        <ul className="july-directory">
          <li><Link className="text-link" href="/services/freight">Freight and Specialized Delivery</Link><p>Explore pallet freight, dedicated capacity and receiving options.</p></li>
          <li><Link className="text-link" href="/services/logistics">Logistics Management</Link><p>Coordinate pickups, recurring distribution and carrier handoffs.</p></li>
          {commercialServices.map(([slug, title, summary]) => (
            <li key={slug}>
              <Link className="text-link" href={`/services/${slug}`}>{title}</Link>
              <p>{summary}</p>
            </li>
          ))}
        </ul>
        <div className="notice">
          <strong>Ontario fleet. Canada-wide and cross-border brokerage.</strong>{" "}
          Our company-operated fleet serves Ontario exclusively. For moves beyond Ontario
          and additional capacity within the province, we arrange service through qualified
          carrier partners. <Link className="text-link" href="/services/freight-brokerage">Explore Freight Brokerage</Link>.
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
