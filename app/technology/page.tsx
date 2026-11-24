import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/DeliveryUI";

export const metadata: Metadata = {
  title: "Transportation Technology and Dispatch",
  description: "See how KWC uses structured shipment requests and driver performance reviews to support practical transportation planning.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return (
    <>
      <PageIntro eyebrow="Technology" title="Better logistics starts with better information.">
        <p>Good dispatch decisions start with knowing what is moving, where it is going and what the driver needs at each stop.</p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="capability-grid">
          <article><h3>Shipment intake</h3><p>Our quote form collects the route, timing and handling requirements. Dispatch reviews the details and confirms capacity and price before booking.</p></article>
          <article><h3>Driver performance</h3><p>KWC uses technology to review driver performance and follow up on safety concerns. For a confirmed shipment update, contact dispatch with your booking reference.</p></article>
          <article><h3>What we’re building toward</h3><p>Digital shipment records, verified milestones and electronic proof of delivery would give customers and drivers a clearer record of each shipment and reduce repeat paperwork.</p></article>
        </div>
        <div className="button-row operations-actions">
          <Link href="/shipment-updates" className="btn">Get a Shipment Update</Link>
          <Link href="/book-now" className="btn secondary">Start a Quote</Link>
        </div>
      </section>
    </>
  );
}
