import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/DeliveryUI";
import { QuoteEntry } from "@/components/QuoteEntry";

export const metadata: Metadata = {
  title: "Book a Freight Shipment",
  description: "Start a shipment request with KWC Logistics for pallet freight, straight-truck delivery or recurring transportation.",
  alternates: { canonical: "/book-now" },
};

export default function BookNow() {
  return (
    <>
      <PageIntro eyebrow="Freight, final-mile and recurring routes" title="Book your next shipment.">
        <p>Start with the pickup and destination. We’ll ask about the freight, equipment and timing, then confirm capacity and price with you before booking.</p>
      </PageIntro>
      <section className="wrap content-section">
        <QuoteEntry />
        <div className="article-copy">
          <h2>Have these details ready</h2>
          <p>Send your pallet count, approximate weight and dimensions, preferred pickup and delivery dates, and whether either location needs a liftgate. Tell us if your shipment has a temperature requirement.</p>
          <Link className="text-link" href="/regular-deliveries#quote">Set up recurring deliveries</Link>
        </div>
      </section>
    </>
  );
}
