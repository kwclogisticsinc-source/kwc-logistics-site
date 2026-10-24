import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/DeliveryUI";
import { contact } from "@/lib/content";
export const metadata: Metadata = {
  title: "Fleet Care, Truck Repair & Mobile Services",
  description:
    "KWC’s approach to maintenance, vehicle readiness and dependable transportation. Discuss truck repair and mobile service requirements with KWC.",
  alternates: { canonical: "/fleet-services" },
};
export default function FleetServices() {
  return (
    <>
      <PageIntro
        eyebrow="KWC TRUCK REPAIR & MOBILE SERVICES"
        title="Reliability starts before the pickup."
      >
        <p>
          Good transportation depends on more than dispatch. Regular
          maintenance, practical equipment knowledge and attention to vehicle
          readiness all support a dependable delivery plan.
        </p>
      </PageIntro>
      <section className="wrap section">
        <div className="coverage-planning">
          <div>
            <p className="eyebrow">MAINTENANCE IS PART OF THE OPERATION</p>
            <h2>
              Look after the equipment.
              <br />
              Protect the delivery plan.
            </h2>
          </div>
          <div>
            <p>
              At KWC, regular maintenance belongs in the transportation
              conversation. Keeping vehicles maintained helps reduce the risk of
              avoidable breakdowns, identify developing issues and support more
              consistent equipment availability.
            </p>
            <p>
              Our founding team’s mechanical background brings a practical
              perspective to that commitment. A shipment needs suitable
              capacity, and the vehicle needs to be ready for the work.
              Maintenance planning and dispatch planning should support each
              other.
            </p>
            <p>
              Well-maintained equipment supports delivery reliability, but it
              cannot guarantee arrival times. Traffic, weather, access,
              receiving delays and other operating conditions still matter. We
              plan with those realities in view.
            </p>
          </div>
        </div>
        <div className="capability-grid fleet-benefits">
          {[
            [
              "More predictable readiness",
              "Planned maintenance helps address equipment needs before they become an unexpected interruption to the delivery schedule.",
            ],
            [
              "Better coordination",
              "Considering vehicle readiness alongside dispatch helps connect capacity decisions with the actual requirements of the shipment.",
            ],
            [
              "A practical equipment perspective",
              "Mechanical knowledge helps frame questions about vehicle suitability, condition and the demands of the job.",
            ],
          ].map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="company-principles">
        <div className="wrap section">
          <p className="eyebrow">TRUCK REPAIR & MOBILE SERVICE ENQUIRIES</p>
          <h2>
            Start with the vehicle.
            <br />
            Tell us what support is needed.
          </h2>
          <p className="lead">
            Contact KWC to discuss a repair or mobile service requirement. We
            will clarify the scope, service location and available support
            before making arrangements.
          </p>
          <div className="perspective-grid">
            {[
              [
                "01",
                "Describe the requirement",
                "Share the vehicle type, a plain-language description of the concern, the location and a callback contact. Avoid sending sensitive vehicle or account documents in an initial enquiry.",
              ],
              [
                "02",
                "Review the options",
                "Repair scope, suitable support, scheduling and any attendance arrangements need to be confirmed individually. An enquiry is not a confirmed callout or repair booking.",
              ],
              [
                "03",
                "Agree before proceeding",
                "Confirm the proposed work, location, timing and price before authorizing service. Discuss whether the requirement affects a planned shipment or an upcoming operating schedule.",
              ],
            ].map(([n, title, copy]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="button-row">
            <a
              className="btn"
              href={
                "mailto:" +
                contact.email +
                "?subject=Truck%20repair%20or%20mobile%20service%20enquiry"
              }
            >
              Discuss Repair or Mobile Support →
            </a>
            <Link className="btn secondary" href="/contact">
              Contact KWC
            </Link>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <div className="company-manifesto">
          <p className="eyebrow">
            TRANSPORTATION & EQUIPMENT, CONSIDERED TOGETHER
          </p>
          <h2>
            A delivery plan is only as practical
            <br />
            as the operation behind it.
          </h2>
          <p>
            Learn how transportation, engineering and mechanical experience come
            together in KWC Logistics.
          </p>
          <Link className="btn" href="/about">
            Our Story & Approach →
          </Link>
        </div>
      </section>
    </>
  );
}
