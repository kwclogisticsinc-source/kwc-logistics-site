import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageIntro, ContactCTA } from "@/components/DeliveryUI";
export const metadata: Metadata = {
  title: "Our Story & Approach",
  description:
    "Transportation, engineering and mechanical experience come together in KWC Logistics. Meet the thinking behind our Ontario network.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="THE THINKING BEHIND THE MOVEMENT"
        title="Different backgrounds. One shared direction."
      >
        <p>
          Transportation experience. An engineering perspective. Mechanical
          know-how. Together, they shape a company built to connect the
          details—and keep business moving.
        </p>
      </PageIntro>
      <section className="wrap section company-story">
        <div className="article-copy">
          <p className="eyebrow">OUR STORY</p>
          <h2>
            Three perspectives.
            <br />A more complete picture.
          </h2>
          <p>
            KWC Logistics began with three people looking at transportation from
            different sides of the same problem. One brought a logistics
            background: understanding shipments, dispatch, carrier relationships
            and the realities of moving freight. Another brought engineering
            experience and an interest in how technology and better processes
            could make complex work easier to manage. The third brought a
            mechanic's practical understanding of vehicles, equipment and what a
            job demands on the road.
          </p>
          <p>
            They shared a belief: a delivery should be planned as a complete
            job, from the first pickup instruction to the final handoff. The
            route matters. So does the equipment. So do the people waiting at
            either end.
          </p>
          <p>
            Those complementary backgrounds came together in KWC Logistics. Our
            approach connects transportation planning, thoughtful coordination
            and attention to the practical details. It is the foundation for how
            we work with a customer sending one package—and a business building
            an Ontario-wide delivery program.
          </p>
          <p>
            Based in Kitchener, we combine direct service and carrier
            partnerships to connect courier deliveries, freight movements and
            regional distribution. Our ambition is straightforward: make it
            easier for customers to reach the next location, the next order and
            the next stage of their business.
          </p>
        </div>
        <figure className="company-story-image">
          <Image
            src="/images/business-pickup.webp"
            alt="Illustrative business pickup of packaged customer orders"
            fill
            sizes="(max-width:850px) 100vw,40vw"
          />
          <figcaption>Illustrative business pickup</figcaption>
        </figure>
      </section>
      <section className="company-principles">
        <div className="wrap section">
          <p className="eyebrow">WHAT EACH PERSPECTIVE BRINGS</p>
          <h2>
            Road sense. Systems thinking.
            <br />
            Practical know-how.
          </h2>
          <div className="perspective-grid">
            {[
              [
                "01",
                "Transportation",
                "See the whole journey",
                "Pickup windows, shipment details, carrier coordination and receiving instructions belong in one plan. We start by understanding how the movement fits your business.",
              ],
              [
                "02",
                "Engineering",
                "Make the process clearer",
                "An engineering perspective brings structure to complicated work: break down the requirements, connect the steps and look for a practical way forward. Technology supports the process; clear communication keeps it useful.",
              ],
              [
                "03",
                "Mechanical",
                "Respect the real-world job",
                "Vehicle suitability, loading access and the demands of the freight matter. A practical equipment perspective helps frame the right questions before collection.",
              ],
            ].map(([n, label, title, copy]) => (
              <article key={n}>
                <span>
                  {n} / {label}
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HOW WE WORK WITH YOU</p>
            <h2>
              Professional service.
              <br />A human relationship.
            </h2>
          </div>
          <p>
            Understand the plan, know what information is needed and have a
            clear point of contact.
          </p>
        </div>
        <div className="capability-grid">
          {[
            [
              "Start with understanding",
              "Your order pattern, collection points, delivery locations and customer expectations guide the conversation. You do not need to arrive with a freight specification.",
            ],
            [
              "Work through the details",
              "Dimensions, access, timing and handling can change the right transport choice. We discuss them early so the proposed service reflects the actual job.",
            ],
            [
              "Build for the next step",
              "A single shipment can be the start of a wider requirement. Discuss recurring collections, regional distribution and customer delivery programs as your needs develop.",
            ],
          ].map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="company-manifesto">
          <p className="eyebrow">OUR COMMITMENT</p>
          <h2>
            Take the shipment seriously.
            <br />
            Keep the conversation simple.
          </h2>
          <p>Driven by Excellence. Defined by Reliability.</p>
          <Link className="btn" href="/contact#quote">
            Tell Us What's Moving →
          </Link>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
