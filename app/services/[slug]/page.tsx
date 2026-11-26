import { commercialServicePhotos, commercialServices } from "@/lib/commercial-services";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, industries } from "@/lib/content";
import { ContactCTA, PageIntro, Icon } from "@/components/DeliveryUI";
const details = {
  courier: {
    title: "B2B Bulk Package Delivery by Cargo Van.",
    intro:
      "Move a batch of customer orders in a cargo van. KWC helps businesses collect packages from a warehouse or shop and deliver them across multiple stops.",
    groups: [
      [
        "Bulk package loads",
        [
          "Batches of labelled packages and packaged orders",
          "Consolidated pickup of business package batches",
          "Delivery windows confirmed with your quote",
          "Cargo van capacity matched to package volume",
        ],
      ],
      [
        "Business delivery, your way",
        [
          "Scheduled pickups and recurring routes",
          "Multi-stop delivery, vendor collections and store replenishment",
          "Retail and e-commerce distribution for business customers",
          "Returns collection for suitable shipments",
        ],
      ],
      [
        "Care in the details",
        [
          "Meal-kit and prepared-food distribution where suitable handling is available",
          "Pickup, handoff and receiving instructions agreed before booking",
          "Approximate size and weight help us choose suitable capacity",
          "Special products and handling requirements reviewed before acceptance",
        ],
      ],
    ],
    outcome: "Reach more customers without building your own delivery fleet.",
    body: "Orders can come through your own website, phone or usual sales channels. KWC can help plan pickup, regional movement and final delivery around them. We can discuss communication and handoff arrangements that support your brand relationship; custom integrations and branded tracking are not implied.",
    quote: "courier",
  },
  freight: {
    title: "Big Shipment. Clear Plan.",
    intro:
      "Pallets, commercial freight and larger deliveries need the right questions up front. We help work through access, timing and extra handling before the vehicle arrives.",
    groups: [
      [
        "The right capacity",
        [
          "LTL: share suitable truck capacity instead of paying for a whole truck",
          "FTL: full truckload capacity for larger or dedicated movements",
          "Expedited road freight when timing is tight",
          "Local and regional distribution, dedicated routes and final-mile delivery",
        ],
      ],
      [
        "Plan for the exceptions",
        [
          "Appointment windows, multiple delivery points and no-dock locations",
          "Urgent replacement stock and returns / reverse logistics",
          "Temperature-controlled road transport through suitable confirmed capacity",
          "Special equipment and handling agreed before booking",
        ],
      ],
    ],
    outcome: "Need More Than Dock-to-Dock Delivery?",
    body: "Tell us what needs to happen at pickup and delivery so we can confirm the right equipment and assistance.",
    quote: "freight",
  },
  logistics: {
    title: "One Contact for Every Shipment",
    intro:
      "Connect the pickup, road movement and final delivery without coordinating every carrier yourself. KWC helps plan recurring distribution and more complex road freight.",
    groups: [
      [
        "Plan the movement",
        [
          "Freight planning and carrier sourcing / coordination",
          "LTL, full truckload and expedited road freight",
          "Ontario distribution programs and multi-location delivery",
          "Dedicated routes, consolidation and linehaul arrangements",
        ],
      ],
      [
        "Connect the regions",
        [
          "Canada/U.S. road freight through suitable carrier partners",
          "Final-mile delivery coordination",
          "Shipment-specific equipment and receiving requirements",
          "One KWC contact to work through the transportation plan",
        ],
      ],
      [
        "Arrange the supporting work",
        [
          "Sorting, staging and cross-docking through confirmed facilities or arranged partners",
          "Storage arrangements reviewed for product, duration and location",
          "Wrapping, palletizing and shipment preparation",
          "Returns handling matched to the agreed program",
        ],
      ],
    ],
    outcome: "Build a Delivery Plan Around Your Business",
    body: "Start with the locations, approximate volume, frequency and receiving needs. We can assess how compatible shipments, regional movement and final delivery could work together. Wider freight is carried by third-party carriers; KWC coordinates the arrangements. Cross-border documentation responsibilities and any specialist customs provider are confirmed before booking.",
    quote: "logistics",
  },
};
export function generateStaticParams() {
  return [...Object.keys(details), ...commercialServices.map(([slug]) => slug)].map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const commercial = commercialServices.find(([id]) => id === slug);
  const item = categories.find((i) => i.href.endsWith(`/${slug}`));
  return {
    title: commercial?.[1] ?? item?.title ?? "Service",
    description: commercial?.[2] ?? item?.description,
    alternates: { canonical: `/services/${slug}` },
  };
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const commercial = commercialServices.find(([id]) => id === slug);
  if (commercial) {
    const [, title, benefit, preparation, question, answer] = commercial;
    const photo = commercialServicePhotos[slug] ?? {
      src: "/images/kwc-service-pallets.webp",
      alt: "Freight workers prepare a pallet at a warehouse receiving bay",
    };
    return (
      <>
        <PageIntro eyebrow="Waterloo Region transportation" title={title}><p>{benefit}</p></PageIntro>
        <section className="wrap content-section">
          <div className="button-row">
            <Link className="btn" href="/contact?service=freight#quote">Get a Freight Quote</Link>
            <Link className="btn secondary" href="/regular-deliveries#quote">Discuss Regular Deliveries</Link>
          </div>
          <figure className={slug === "tailgate-delivery" ? "july-service-image local-delivery kwc-storefront-delivery" : "july-service-image local-delivery"}>
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 720px) 100vw, 760px" />
          </figure>
          <div className="article-copy">
            <h2>What to Include in Your Request</h2>
            <p>{preparation}</p>
            <h2>{question}</h2>
            <p>{answer}</p>
            <p>We confirm equipment, availability and price before booking.</p>
            <Link className="text-link" href="/services">Explore All Freight Services</Link>
          </div>
        </section>
      </>
    );
  }
  if (!(slug in details)) notFound();
  const detail = details[slug as keyof typeof details];
  const item = categories.find((i) => i.href.endsWith(`/${slug}`))!;
  const photo = slug === "courier"
    ? { src: "/images/kwc-bulk-packages.webp", alt: "A worker handling boxed packages at the rear of a cargo van" }
    : { src: item.image, alt: item.alt };
  return (
    <>
      <PageIntro eyebrow={item.title} title={detail.title}>
        <p>{detail.intro}</p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="service-detail-heading">
          <p>
            Tell us what needs to move. We’ll confirm a suitable service,
            capacity and price before booking.
          </p>
          <Link className="btn" href={`/contact?service=${detail.quote}#quote`}>
            Request a Quote <Icon name="arrow" />
          </Link>
        </div>
        <div className="service-detail-image">
          <Image src={photo.src} alt={photo.alt} fill priority sizes="100vw" />
        </div>
        <div className="capability-grid">
          {detail.groups.map(([title, items]) => (
            <article key={title as string}>
              <h3>{title}</h3>
              <ul>
                {(items as string[]).map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="notice">
          <strong>How your shipment is operated.</strong> Suitable local and
          Ontario movements may be handled by KWC directly. Carrier partners
          provide broader lanes or specialist capacity when needed. The
          operator, equipment and agreed handling are confirmed for your
          shipment.
        </div>
        <div className="article-copy">
          <h2>{detail.outcome}</h2>
          <p>{detail.body}</p>
          {slug === "freight" && (
            <>
              <ul>
                {[
                  "Tailgate / liftgate service",
                  "Locations without a loading dock",
                  "Door-to-door and inside delivery",
                  "Wrapping and palletizing",
                  "Additional offload or setup assistance",
                  "Delivery appointments and access requirements",
                ].map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
              <p className="fine">
                Availability and service details are confirmed with your quote.
              </p>
            </>
          )}

          <Link href="/contact?service=regular#quote" className="text-link">
            Discuss recurring deliveries <Icon name="arrow" />
          </Link>
        </div>
        {slug === "courier" && (
          <>
            <div className="section-heading" style={{ marginTop: 60 }}>
              <h2>Useful for Your Kind of Business.</h2>
            </div>
            <div className="industry-grid">
              {industries.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
      <ContactCTA />
    </>
  );
}
