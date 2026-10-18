import type { Metadata } from "next";
import { PageIntro, Icon } from "@/components/DeliveryUI";
import { QuoteForm } from "@/components/QuoteForm";
import { contact } from "@/lib/content";
import { quoteKinds, type QuoteKind } from "@/lib/quote";
export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request courier, freight or recurring delivery help from KWC Logistics. Call 416-300-8473 or email ship@kwclogistics.ca.",
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
    : "courier";
  const pickup =
    typeof params.pickup === "string" ? params.pickup.slice(0, 300) : "";
  const destination =
    typeof params.destination === "string"
      ? params.destination.slice(0, 300)
      : "";
  return (
    <>
      <PageIntro
        eyebrow="LET’S TALK DELIVERY"
        title="A simple start to your next move."
      >
        <p>
          One package, a few pallets or an ongoing delivery plan. Tell us what
          you need—we’ll help with the details.
        </p>
      </PageIntro>
      <div className="wrap contact-layout">
        <aside className="contact-aside">
          <h2>People. Not a maze of menus.</h2>
          <p>
            Prefer to talk it through? Reach KWC directly. You don’t need to
            know the right vehicle or every freight term.
          </p>
          <a href={`tel:${contact.tel}`} className="contact-method">
            <Icon name="phone" />
            <span>
              <small>Call KWC</small>
              <strong>{contact.phone}</strong>
            </span>
          </a>
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
