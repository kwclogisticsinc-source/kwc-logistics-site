import type { Metadata } from "next";
import { PageIntro } from "@/components/DeliveryUI";
import { contact } from "@/lib/content";
export const metadata: Metadata = {
  title: "Privacy Information",
  description:
    "How KWC uses delivery enquiries submitted through this website.",
  alternates: { canonical: "/privacy" },
};
export default function Privacy() {
  return (
    <>
      <PageIntro
        eyebrow="YOUR ENQUIRY DETAILS"
        title="A clear purpose for the information you share."
      >
        <p>
          We collect the information needed to review your delivery request and
          reply to you.
        </p>
      </PageIntro>
      <section className="wrap content-section article-copy">
        <h2>What the quote form collects</h2>
        <p>
          Your name and email, an optional phone number and company, pickup and
          destination details, shipment information, requested timing and
          relevant handling requirements. No account or payment information is
          requested.
        </p>
        <h2>How it is used and delivered</h2>
        <p>
          KWC uses these details to assess transportation options, contact you
          and prepare a quote. The website is hosted on Cloudflare. Quote
          requests are sent server-side through Web3Forms to KWC’s configured
          email recipient. Relevant shipment information may be shared with
          suitable transportation partners when needed to assess or arrange your
          requested service.
        </p>
        <h2>Data minimization and technical logs</h2>
        <p>
          Please do not submit patient information, passwords, payment details
          or sensitive documents. The website does not add advertising trackers
          or enquiry-content analytics. Hosting and delivery providers may
          process technical request information such as IP addresses for
          security and service operation. The application logs generic delivery
          error codes rather than shipment contents.
        </p>
        <h2>Your choices</h2>
        <p>
          Form details are held in the current page’s memory while you move
          between steps; the form does not save them to browser storage. You can
          contact KWC by email instead. To ask about access, correction or
          deletion of enquiry information, email{" "}
          <a href={`mailto:${contact.email}`} className="text-link">
            {contact.email}
          </a>
          . Retention and any applicable requirements can be discussed with KWC.
        </p>
      </section>
    </>
  );
}
