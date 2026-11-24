import type { Metadata } from "next";
import { PageIntro } from "@/components/DeliveryUI";
import { RegistrationForm } from "@/components/RegistrationForm";

export const metadata: Metadata = {
  title: "Drive with KWC | Straight-Truck Drivers and Owner-Operators",
  description: "Express interest as a straight-truck driver, owner-operator or carrier partner with KWC Logistics in Waterloo Region.",
  alternates: { canonical: "/drive-with-kwc" },
};

export default function DriveWithKwc() {
  return (
    <>
      <PageIntro eyebrow="Waterloo Region" title="Drive with purpose. Grow with KWC.">
        <p>Drivers, straight-truck owner-operators and carrier partners can tell us about their work, equipment and operating areas.</p>
      </PageIntro>
      <section className="wrap content-section" aria-label="Ways to work with KWC">
        <div className="capability-grid">
          <article><h3>Company drivers</h3><p>Tell us about your straight-truck experience and availability for local and regional work. We review applicable licence qualifications, driving experience and customer-facing responsibilities during follow-up.</p></article>
          <article><h3>Owner-operators</h3><p>Share your truck type, service area, tailgate or refrigeration capacity, and the local, regional or scheduled work you’re interested in.</p></article>
          <article><h3>Carrier partners</h3><p>Introduce your company, equipment types and the lanes you serve. If there’s a fit, we’ll follow up to verify operating and insurance documents through an appropriate channel.</p></article>
        </div>
      </section>
      <section className="wrap contact-layout">
        <aside className="contact-aside">
          <h2>What happens next</h2>
          <p>We review your experience, equipment and availability. If there’s a fit, we’ll follow up directly to verify qualifications and discuss opportunities. Applying does not guarantee work.</p>
          <p>KWC sets safety and performance standards at hiring and expects drivers to meet them throughout their work with us. Pre-trip checks are part of every run with our company-operated fleet.</p>
          <p>Please leave licence numbers, insurance documents and other sensitive information out of this initial request.</p>
        </aside>
        <RegistrationForm kind="driver" />
      </section>
    </>
  );
}
