import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/DeliveryUI";
import { EquipmentGrid } from "@/components/EquipmentGrid";
import { SitePhoto } from "@/components/SitePhoto";
export const metadata: Metadata = {
  title: "Fleet & Equipment",
  description:
    "Explore KWC cargo vans, dry and refrigerated straight trucks, highway tractors and dry van, refrigerated and flatbed trailer capacity.",
  alternates: { canonical: "/fleet-services" },
};
export default function FleetServices() {
  return (
    <>
      <PageIntro
        eyebrow="FLEET, EQUIPMENT & READINESS"
        title="Reliability starts before the pickup."
      >
        <p>
          Good transportation depends on more than dispatch. Regular
          maintenance, practical equipment knowledge and attention to vehicle
          readiness all support a dependable delivery plan.
        </p>
      </PageIntro>
      <EquipmentGrid />
      <div className="wrap fleet-photo-pair">
        <SitePhoto
          src="/images/ontario-road-freight.webp"
          alt="Illustrative dry van highway freight"
          caption="Illustrative network capacity"
        />
        <SitePhoto
          src="/images/fleet-maintenance.webp"
          alt="Illustrative mechanic inspecting commercial truck equipment"
          caption="Illustrative vehicle maintenance"
        />
      </div>
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
              Maintenance planning helps protect operating continuity. We pair
              attention to equipment with route planning, receiving instructions
              and communication around changing delivery conditions.
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
          <p className="eyebrow">A PRACTICAL VIEW OF EQUIPMENT</p>
          <h2>
            Start with the vehicle.
            <br />
            Plan the whole movement.
          </h2>
          <p className="lead">
            Our mechanical background and in-house fleet maintenance bring
            equipment knowledge into transportation planning. We connect the
            vehicle, the load and the receiving requirements before confirming a
            suitable service.
          </p>
          <div className="repair-scope">
            <strong>Readiness is part of reliability.</strong>
            <p>
              Regular maintenance helps support equipment availability and
              reduce avoidable interruptions. We combine that practical
              attention with clear shipment information and realistic route
              planning.
            </p>
          </div>
          <div className="perspective-grid">
            {[
              [
                "01",
                "Understand the load",
                "Review commodity, piece count, dimensions and weight to identify the type of capacity the movement needs.",
              ],
              [
                "02",
                "Work through access",
                "Consider loading docks, liftgate needs, receiving appointments and additional handling before confirming equipment.",
              ],
              [
                "03",
                "Connect the capacity",
                "Confirm suitable direct service or carrier arrangements, with the operator, timing and handling scope agreed before booking.",
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
            <Link className="btn" href="/contact?service=freight#quote">
              Find Suitable Equipment →
            </Link>
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
