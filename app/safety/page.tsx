import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/DeliveryUI";
import { freightInsurance } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fleet Safety and Freight Insurance",
  description: "How KWC Logistics approaches driver training, pre-trip vehicle checks, fleet maintenance and freight insurance.",
  alternates: { canonical: "/safety" },
};

export default function SafetyPage() {
  return (
    <>
      <PageIntro eyebrow="Fleet safety" title="Safety starts before the truck moves.">
        <p>Our drivers are trained, our company-operated vehicles are checked before each trip, and our in-house mechanic maintains the fleet.</p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="operations-photo">
          <Image src="/images/kwc-truck-maintenance.webp" alt="Mechanic inspecting a commercial truck wheel in a maintenance bay" fill sizes="(max-width: 720px) 100vw, 1080px" />
        </div>
        <div className="capability-grid">
          <article><h3>Before each trip</h3><p>We check company-operated vehicles before departure. Our in-house mechanic maintains the fleet and helps address issues found during those checks.</p></article>
          <article><h3>Driver standards</h3><p>Drivers must meet KWC’s safety and performance standards when hired and throughout their work with us. We use technology to review performance and follow up on safety concerns.</p></article>
          <article><h3>At pickup and delivery</h3><p>Tell us about dock heights, liftgate needs, access limits and receiving hours. Confirming those details early gives us more time to plan a safe handoff.</p></article>
        </div>
        <div className="article-copy">
          <h2>Handling and carrier checks</h2>
          <p>We review how freight will be secured and unloaded before confirming a move. For tailgate stops, tell us the loaded pallet weight and ground conditions. For temperature-sensitive freight, include the required range and handling instructions so we can assess suitable capacity.</p>
          <p>Pre-trip checks and maintenance on this page describe our company-operated fleet. When arranging a partner move, we confirm the operator and review the applicable insurance documentation for the shipment.</p>
          <h2>Freight insurance</h2>
          <p>{freightInsurance} Tell us about high-value goods, special commodities or additional coverage needs before booking so we can review what applies to your shipment.</p>
          <Link href="/contact?service=freight#quote" className="btn">Discuss Your Shipment</Link>
        </div>
      </section>
    </>
  );
}
