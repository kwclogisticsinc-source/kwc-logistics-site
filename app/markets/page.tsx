import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "@/components/DeliveryUI";

export const metadata: Metadata = {
  title: "Ontario Freight Market Brief",
  description: "Read practical Ontario freight insights on regional lanes, receiving, liftgate capacity and recurring distribution.",
  alternates: { canonical: "/markets" },
};

export default function MarketsPage() {
  return (
    <>
      <PageIntro eyebrow="KWC market brief" title="What moves Ontario freight.">
        <p>Practical updates for shippers, brokers and distribution teams planning regional freight.</p>
      </PageIntro>
      <div className="wrap content-section">
        <article className="article-copy story-copy">
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
          <h2>Planning winter shipments in Ontario</h2>
          <p>Check Ontario 511 for road conditions before dispatch, especially when the route includes long stretches between safe stopping points. Ontario’s winter driving guidance also recommends that commercial drivers plan where they can stop before leaving. <a className="text-link" href="https://www.ontario.ca/page/winter-driving">Ontario winter driving guidance</a> · <a className="text-link" href="https://511on.ca/">Ontario 511</a></p>
          <p>When requesting a winter quote, give dispatch an alternate receiving window and tell us how snow or ice could affect access to the dock or the level area needed for a liftgate.</p>
          <h2>Market signals to watch</h2>
          <h3>Ontario led September’s provincial wholesale gains</h3>
          <p>Ontario’s seasonally adjusted wholesale sales rose 0.9% from August to September 2026, excluding petroleum and oilseed and grain categories. The sales figure measures dollars. Use your weekly pallet counts and receiving capacity to set scheduling needs. <a className="text-link" href="https://www150.statcan.gc.ca/n1/daily-quotidien/261113/dq261113b-eng.htm">Statistics Canada, November 13, 2026</a></p>
          <h3>Cross-border volumes can shift by commodity</h3>
          <p>Transport Canada’s 2025 report describes shifts in freight flows as trade patterns changed. When planning Ontario–U.S. freight, confirm the equipment, appointments and customs responsibilities for each lane. <a className="text-link" href="https://tc.canada.ca/en/corporate-services/transparency/corporate-management-reporting/transportation-canada-annual-reports/transportation-canada-annual-report-2025">Transport Canada, 2025 annual report</a></p>
        </article>
      </div>
    </>
  );
}
