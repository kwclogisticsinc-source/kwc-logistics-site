import type { Metadata } from "next";
import { PageIntro } from "@/components/DeliveryUI";
import { RegistrationForm } from "@/components/RegistrationForm";

export const metadata: Metadata = {
  title: "Drive with KWC | Straight-Truck Drivers and Owner-Operators",
  description: "Apply to drive straight trucks with KWC Logistics or introduce your owner-operator business in Waterloo Region.",
  alternates: { canonical: "/drive-with-kwc" },
};

export default function DriveWithKwc() {
  return (
    <>
      <PageIntro eyebrow="Waterloo Region" title="Drive with KWC Logistics.">
        <p>Interested in driving a straight truck or bringing your own straight-truck capacity? Tell us where you operate and what kind of work you’re looking for.</p>
      </PageIntro>
      <section className="wrap contact-layout">
        <aside className="contact-aside">
          <h2>What happens next</h2>
          <p>We review your experience, equipment and availability. If there’s a fit, we’ll follow up directly to verify qualifications and discuss opportunities. Applying does not guarantee work.</p>
          <p>Please leave licence numbers, insurance documents and other sensitive information out of this initial request.</p>
        </aside>
        <RegistrationForm kind="driver" />
      </section>
    </>
  );
}
