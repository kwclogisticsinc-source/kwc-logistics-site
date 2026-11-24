import type { Metadata } from "next";
import { PageIntro } from "@/components/DeliveryUI";
import { RegistrationForm } from "@/components/RegistrationForm";

export const metadata: Metadata = {
  title: "Register Your Business with KWC",
  description: "Introduce your business and shipping needs to KWC Logistics for customer onboarding.",
  alternates: { canonical: "/customer-registration" },
};

export default function CustomerRegistration() {
  return (
    <>
      <PageIntro eyebrow="Customer onboarding" title="Your transportation network starts here.">
        <p>Tell us about your company, what you ship and how often. We’ll follow up to discuss service, coverage and onboarding.</p>
      </PageIntro>
      <section className="wrap contact-layout">
        <aside className="contact-aside">
          <h2>Start with your shipping operation</h2>
          <p>Include your main pickup areas, number of locations and typical weekly volume. KWC reviews registration requests before agreeing on service or billing terms.</p>
        </aside>
        <RegistrationForm kind="customer" />
      </section>
    </>
  );
}
