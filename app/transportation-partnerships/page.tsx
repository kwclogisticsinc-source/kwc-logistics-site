import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/DeliveryUI";
import { RegistrationForm } from "@/components/RegistrationForm";

export const metadata: Metadata = {
  title: "Transportation Partnerships | Ontario Carrier Capacity",
  description: "Brokers, freight forwarders and logistics teams can request Ontario straight-truck, liftgate and regional capacity from KWC Logistics.",
  alternates: { canonical: "/transportation-partnerships" },
};

export default function TransportationPartnerships() {
  return (
    <>
      <PageIntro eyebrow="Transportation partnerships" title="Ontario Capacity for Your Freight Network.">
        <p>For brokers, freight forwarders and transportation teams that need an Ontario carrier. Share one lane, a final-mile handoff or recurring overflow. We’ll review the equipment, timing and capacity with you.</p>
      </PageIntro>
      <div className="wrap contact-layout">
        <aside className="contact-aside">
          <h2>What We Can Review Together</h2>
          <p>Ask about 26-foot straight-truck and liftgate service, pallet transfers and scheduled runs. Tell us where the load changes hands, who books appointments and how shipment updates should be shared.</p>
          <p>We confirm capacity and the operating carrier before booking. For onboarding, share documents with KWC through an agreed channel after we connect.</p>
          <p><Link className="text-link" href="/service-areas">Review Ontario Service Coverage</Link></p>
          <p><Link className="text-link" href="/services/freight-brokerage">Need KWC to Arrange a Carrier Outside Ontario?</Link></p>
          <p><Link className="text-link" href="/drive-with-kwc">Want to Offer Your Own Carrier Capacity?</Link></p>
        </aside>
        <RegistrationForm kind="partnership" />
      </div>
    </>
  );
}
