import type { Metadata } from "next";
import Link from "next/link";
import { FAQ, PageIntro } from "@/components/DeliveryUI";
import { BrandLogo } from "@/components/Logo";
import { QuoteEntry } from "@/components/QuoteEntry";
import { freightInsurance } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Freight Shipment",
  description: "Start a shipment request with KWC Logistics for pallet freight, straight-truck delivery or recurring transportation.",
  alternates: { canonical: "/book-now" },
};

export default function BookNow() {
  return (
    <>
      <PageIntro eyebrow="One-time shipping" title="Ship something.">
        <p>Request an Ontario freight quote as an individual or a business. We review one-time pallet shipments and eligible large items for commercial and residential delivery. Start with the pickup and destination. We’ll ask about the freight, equipment and timing, then confirm capacity and price with you before booking.</p>
      </PageIntro>
      <section className="wrap content-section">
        <p className="notice"><strong>{freightInsurance}</strong></p>
        <QuoteEntry />
        <div className="article-copy booking-details">
          <BrandLogo decorative />
          <h2>Have these details ready</h2>
          <p>Send your pallet count, approximate weight and dimensions, preferred pickup and delivery dates, and whether either location needs a liftgate. Tell us if your shipment has a temperature requirement.</p>
          <Link className="text-link" href="/regular-deliveries#quote">Set up recurring deliveries</Link>
        </div>
        <section className="operations-actions" aria-labelledby="booking-steps-title">
          <h2 id="booking-steps-title">From quote to confirmed booking</h2>
          <ol className="booking-steps operations-actions">
            <li><h3>Share shipment details</h3><p>Send the route, freight size, receiving hours and any liftgate or temperature needs.</p></li>
            <li><h3>Review the quote</h3><p>We confirm the equipment, operator, available timing and price.</p></li>
            <li><h3>Approve the booking</h3><p>Once you accept the details, we confirm the plan for pickup and delivery.</p></li>
          </ol>
        </section>
        <h2 className="operations-actions">Freight FAQs</h2>
        <FAQ limit={5} />
      </section>
    </>
  );
}
