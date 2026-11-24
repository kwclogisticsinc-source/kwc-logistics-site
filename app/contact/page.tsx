import type { Metadata } from "next";
import { PageIntro, Icon } from "@/components/DeliveryUI";
import { QuoteForm } from "@/components/QuoteForm";
import { contact } from "@/lib/content";
import { quoteKinds, type QuoteKind } from "@/lib/quote";
export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request bulk parcel, freight or recurring delivery help from KWC Logistics. Email ship@kwclogistics.ca.",
  alternates: { canonical: "/contact" },
};
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const kind = quoteKinds.some((item) => item.id === params.service)
    ? (params.service as QuoteKind)
    : "freight";
  const pickup =
    typeof params.pickup === "string" ? params.pickup.slice(0, 300) : "";
  const destination =
    typeof params.destination === "string"
      ? params.destination.slice(0, 300)
      : "";
  return (
    <>
      <PageIntro
        eyebrow="WATERLOO REGION · ONTARIO FREIGHT"
        title="Request a freight quote."
      >
        <p>
          Tell us what you’re shipping and where it’s going. We’ll review the details and follow up with your options.
        </p>
      </PageIntro>
      <div className="wrap contact-layout">
        <aside className="contact-aside">
          <h2>Talk to KWC Logistics.</h2>
          <p>
            Send us your pickup and delivery locations, shipment details and timing.
          </p>
          <a href={`mailto:${contact.email}`} className="contact-method">
            <Icon name="mail" />
            <span>
              <small>Email your shipment details</small>
              <strong>{contact.email}</strong>
            </span>
          </a>
          <div className="contact-method">
            <Icon name="pin" />
            <span>
              <small>Based in</small>
              <strong>Kitchener, Ontario</strong>
            </span>
          </div>
          <p className="fine">
            After your request, we review the route, shipment and capacity, then
            contact you to agree on the price and service before booking.
          </p>
        </aside>
        <QuoteForm
          initialKind={kind}
          pickup={pickup}
          destination={destination}
        />
      </div>
    </>
  );
}
