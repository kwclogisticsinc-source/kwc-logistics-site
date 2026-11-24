import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "@/components/DeliveryUI";
import { RegistrationForm } from "@/components/RegistrationForm";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ontario Freight Market Brief and Newsletter",
  description: "Read practical Ontario freight insights on regional lanes, receiving, liftgate capacity and recurring distribution. Request email updates from KWC Logistics.",
  alternates: { canonical: "/markets" },
};

export default function MarketsPage() {
  return (
    <>
      <PageIntro eyebrow="KWC market brief" title="What moves Ontario freight.">
        <p>Practical updates for shippers, brokers and distribution teams planning regional freight.</p>
      </PageIntro>
      <div className="wrap contact-layout">
        <article className="article-copy">
          <p className="eyebrow">Planning brief · November 24, 2026</p>
          <h2>Three details to confirm before quoting a regional lane</h2>
          <Image className="kwc-context-photo" src="/images/kwc-liftgate-ground-level.webp" alt="Pallet staged by a straight truck’s lowered rear liftgate at a ground-level receiving door" width={1280} height={853} sizes="(max-width: 760px) 100vw, 56vw" />
          <h3>Receiving windows</h3>
          <p>Send the booked appointment or the hours the receiver accepts freight. For multi-stop routes, include the order of stops and any fixed appointments before dispatch plans capacity.</p>
          <h3>Dock or liftgate access</h3>
          <p>Confirm dock height or ground-level access at both ends. Share the heaviest pallet’s weight and dimensions, plus the space available to unload.</p>
          <h3>Repeat volume</h3>
          <p>Give a typical weekly pallet count and any seasonal peaks. A regular pickup window and consistent lane can make it easier to plan the right equipment and compare rates.</p>
          <p><Link href="/service-areas" className="text-link">See KWC’s Ontario service areas</Link></p>
          <h2>Market signals to watch</h2>
          <h3>Ontario led September’s provincial wholesale gains</h3>
          <p>Statistics Canada reported higher wholesale sales in seven provinces in September 2026, led by Ontario. For distributors, weekly order counts and receiving capacity are better guides to lane planning than the national headline alone. <a className="text-link" href="https://www150.statcan.gc.ca/n1/daily-quotidien/261113/dq261113b-eng.htm">Statistics Canada, November 13, 2026</a></p>
          <h3>Cross-border volumes can shift by commodity</h3>
          <p>Transport Canada’s 2025 report describes shifts in freight flows as trade patterns changed. When planning Ontario–U.S. freight, confirm the equipment, appointments and customs responsibilities for each lane. <a className="text-link" href="https://tc.canada.ca/en/corporate-services/transparency/corporate-management-reporting/transportation-canada-annual-reports/transportation-canada-annual-report-2025">Transport Canada, 2025 annual report</a></p>
        </article>
        <aside>
          <RegistrationForm kind="newsletter" />
          <p className="fine market-signup-note">Request occasional updates. To withdraw consent, email <a href={`mailto:${contact.email}`}>{contact.email}</a>. <Link href="/privacy" className="text-link">Privacy information</Link></p>
        </aside>
      </div>
    </>
  );
}
