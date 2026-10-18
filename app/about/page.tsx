import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ContactCTA } from "@/components/DeliveryUI";
import { contact } from "@/lib/content";
export const metadata: Metadata = {
  title: "About KWC",
  description:
    "KWC Logistics Inc. is based in Kitchener, Ontario, connecting local delivery with broader road freight coordination.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="KITCHENER IS OUR STARTING POINT"
        title="Local people. A wider view of logistics."
      >
        <p>
          KWC Logistics Inc. helps individuals and businesses move packages,
          pallets and recurring deliveries—with a practical plan and a person to
          talk to.
        </p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="capability-grid">
          {[
            [
              "Local knowledge",
              "We start with Kitchener, Waterloo and Cambridge, then work through suitable Ontario delivery arrangements.",
            ],
            [
              "Broader connections",
              "When a shipment needs a wider lane or different equipment, we coordinate suitable carrier partners for Canada/U.S. road freight.",
            ],
            [
              "Clear before committed",
              "The route, handling, capacity, price and booking details are agreed with you before the shipment is confirmed.",
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="article-copy">
          <h2>{contact.slogan}</h2>
          <p>
            To us, a useful logistics conversation starts with the actual
            shipment: what it is, who is waiting for it and what needs to happen
            at each end. That could mean a single supplier pickup, a pallet
            delivery without a dock or an ongoing distribution program.
          </p>
          <p>
            Suitable Ontario movements can be handled directly by KWC. Broader
            road freight and specialist requirements can be arranged with
            third-party carriers. We explain the arrangement when we quote, so
            you understand who is moving the shipment.
          </p>
          <h2>A first delivery should feel straightforward.</h2>
          <p>
            Request a quote without creating an account. We review your details
            and contact you to confirm the service and price. If you need
            recurring deliveries, we can discuss frequency, receiving
            requirements and a suitable operating plan.
          </p>
          <Link className="text-link" href="/contact">
            Talk to KWC →
          </Link>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
