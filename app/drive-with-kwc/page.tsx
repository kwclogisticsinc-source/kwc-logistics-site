import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/DeliveryUI";
import { RegistrationForm } from "@/components/RegistrationForm";

export const metadata: Metadata = {
  title: "Hiring AZ and DZ Drivers and Owner-Operators | Drive with KWC",
  description: "Apply to drive with KWC Logistics. Accepting applications from AZ and DZ drivers and owner-operators in Ontario.",
  alternates: { canonical: "/drive-with-kwc" },
};

export default function DriveWithKwc() {
  return (
    <>
      <PageIntro eyebrow="Careers · Ontario transportation" title="We’re hiring AZ and DZ drivers and owner-operators.">
        <p>Tell us your licence class, operating area and availability. KWC reviews applications against the work and equipment available.</p>
        <div className="button-row"><Link className="btn" href="#request">Apply to Drive with KWC</Link></div>
      </PageIntro>
      <section className="wrap content-section" aria-label="Ways to work with KWC">
        <div className="capability-grid">
          <article id="drivers"><h2>AZ and DZ drivers</h2><p>Share the equipment you’ve driven, your local or regional experience and the schedule you’re available for. For DZ straight-truck work, include liftgate and delivery experience if applicable.</p></article>
          <article id="owner-operators"><h2>AZ and DZ owner-operators</h2><p>Tell us your equipment type, service area, availability and preferred lanes. Include any liftgate or refrigeration capability relevant to the work you’re seeking.</p></article>
          <article id="carrier-partners"><h2>Carrier partners</h2><p>Introduce your company, equipment and the lanes you serve. If there’s a fit, we’ll agree on how to exchange operating and insurance documents.</p></article>
        </div>
      </section>
      <section className="wrap contact-layout">
        <aside className="contact-aside">
          <h2>What happens next</h2>
          <p>We review operating experience, equipment and availability, then contact applicants whose qualifications match the work. Safety and pre-trip checks are part of operating the KWC fleet.</p>
          <p>Share your licence class in the application. Keep licence numbers, insurance documents and other sensitive information for follow-up.</p>
        </aside>
        <RegistrationForm kind="driver" />
      </section>
    </>
  );
}
