import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "@/components/DeliveryUI";
import { RegistrationForm } from "@/components/RegistrationForm";
import { driverRoles } from "@/lib/registration";

export const metadata: Metadata = {
  title: "Hiring AZ and DZ Drivers and Owner-Operators | Drive with KWC",
  description: "Apply to drive with KWC Logistics. Accepting applications from AZ and DZ drivers and owner-operators in Ontario.",
  alternates: { canonical: "/drive-with-kwc" },
};

export default async function DriveWithKwc({ searchParams }: {
  searchParams: Promise<{ role?: string | string[] }>;
}) {
  const { role } = await searchParams;
  const selectedRole = driverRoles.find(({ id }) => id === role);

  return (
    <>
      <PageIntro eyebrow="Careers · Ontario transportation" title="We’re hiring AZ and DZ drivers and owner-operators.">
        <p>Tell us your licence class, operating area and availability. KWC reviews applications against the work and equipment available.</p>
        <div className="button-row"><Link className="btn" href="#request">Apply to Drive with KWC</Link></div>
      </PageIntro>
      <section className="wrap kwc-editorial" aria-label="Ways to work with KWC">
        <div className="kwc-careers-roles">
          <article id="drivers">
            <h2>AZ and DZ company drivers</h2>
            <p>Tell us what you’ve driven and where you’ve worked. Include tractor-trailer experience for AZ work or straight-truck and liftgate experience for DZ work, where relevant.</p>
            <div className="button-row">
              <Link className="text-link" href="?role=az-driver#request">Apply as an AZ driver</Link>
              <Link className="text-link" href="?role=dz-driver#request">Apply as a DZ driver</Link>
            </div>
          </article>
          <article id="owner-operators">
            <h2>AZ and DZ owner-operators</h2>
            <p>Tell us what equipment you can supply, where it’s based, the lanes you run and when you have capacity. Note any liftgate or other equipment relevant to the work.</p>
            <div className="button-row">
              <Link className="text-link" href="?role=az-owner-operator#request">Apply as an AZ owner-operator</Link>
              <Link className="text-link" href="?role=dz-owner-operator#request">Apply as a DZ owner-operator</Link>
            </div>
          </article>
          <article id="carrier-partners">
            <h2>Carrier partners</h2>
            <p>Introduce your company, equipment and the lanes you serve. If there’s a fit, we’ll agree on how to exchange operating and insurance documents.</p>
            <Link className="text-link" href="?role=carrier-partner#request">Introduce your carrier business</Link>
          </article>
        </div>
        <Image className="kwc-context-photo" src="/images/kwc-driver-pretrip.webp" alt="Driver checking the front tire of a parked KWC straight truck" width={1280} height={853} sizes="(max-width: 760px) 100vw, 47vw" />
      </section>
      <section className="wrap contact-layout">
        <aside className="contact-aside">
          <h2>What happens next</h2>
          <p>We review operating experience, equipment and availability, then contact applicants whose qualifications match the work. Safety and pre-trip checks are part of operating the KWC fleet.</p>
          <p>Keep licence numbers, insurance documents and other sensitive information for follow-up.</p>
          <p>Ontario’s Z endorsement covers air brake systems. Check the province’s guidance on licence classes, endorsements and restrictions. <a className="text-link" href="https://www.ontario.ca/page/get-truck-drivers-licence">Ontario truck driver licensing</a></p>
        </aside>
        <RegistrationForm key={selectedRole?.id ?? "driver"} kind="driver" initialDriverRole={selectedRole?.label} />
      </section>
    </>
  );
}
