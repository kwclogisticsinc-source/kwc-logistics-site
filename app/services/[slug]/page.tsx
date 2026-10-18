import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, industries } from "@/lib/content";
import { ContactCTA, PageIntro, Icon } from "@/components/DeliveryUI";
const details = {
  courier: {
    title: "A delivery service that starts with you.",
    intro:
      "One envelope, a customer’s order, or a van full of local deliveries. KWC Courier is part of KWC Logistics, with a simple way to ask for the delivery you need.",
    groups: [
      [
        "One-off & time-sensitive",
        [
          "Envelopes, documents, parcels and suitable larger packages",
          "Urgent point-to-point delivery",
          "Same-day and next-day options, subject to capacity and booking requirements",
          "Cars, SUVs and cargo vans matched to the shipment",
        ],
      ],
      [
        "Business delivery, your way",
        [
          "Scheduled pickups and recurring routes",
          "Multi-stop delivery, vendor collections and store replenishment",
          "Retail, e-commerce, business-to-business and doorstep deliveries",
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
    title: "Big shipment. Clear plan.",
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
    outcome: "Need more than dock-to-dock delivery?",
    body: "Tell us what needs to happen at pickup and delivery so we can confirm the right equipment and assistance.",
    quote: "freight",
  },
  logistics: {
    title: "One contact. A practical plan for every shipment.",
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
    outcome: "Build a delivery plan around your business.",
    body: "Start with the locations, approximate volume, frequency and receiving needs. We can assess how compatible shipments, regional movement and final delivery could work together. Wider freight is carried by third-party carriers; KWC coordinates the arrangements. Cross-border documentation responsibilities and any specialist customs provider are confirmed before booking.",
    quote: "logistics",
  },
};
export function generateStaticParams() {
  return Object.keys(details).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = categories.find((i) => i.href.endsWith(`/${slug}`));
  return {
    title: item?.title ?? "Service",
    description: item?.description,
    alternates: { canonical: `/services/${slug}` },
  };
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!(slug in details)) notFound();
  const detail = details[slug as keyof typeof details];
  const item = categories.find((i) => i.href.endsWith(`/${slug}`))!;
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
          <Image src={item.image} alt={item.alt} fill priority sizes="100vw" />
          <span className="photo-caption">Illustrative marketing scene</span>
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
              <h2>Useful for your kind of business.</h2>
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
