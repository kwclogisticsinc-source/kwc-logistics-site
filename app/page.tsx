import Image from "next/image";
import Link from "next/link";
import { contact, industries } from "@/lib/content";
import {
  ContactCTA,
  CoverageGraphic,
  FAQ,
  Icon,
  ServiceCards,
} from "@/components/DeliveryUI";
import { QuoteEntry } from "@/components/QuoteEntry";
export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="live-dot" /> FROM KITCHENER. FOR YOUR NEXT MOVE.
          </p>
          <h1>
            Your next delivery.
            <br />
            <em>Made simple.</em>
          </h1>
          <p className="hero-description">
            Packages, pallets, and regular delivery routes. Across
            Kitchener–Waterloo–Cambridge and Ontario, with road freight
            coordination throughout Canada and the U.S.
          </p>
          <div className="button-row">
            <Link href="/contact#quote" className="btn">
              Get a Quote <Icon name="arrow" size={20} />
            </Link>
            <a href={`tel:${contact.tel}`} className="btn secondary">
              Talk to Us <Icon name="phone" size={18} />
            </a>
          </div>
          <div className="hero-note">
            <Icon name="check" size={18} />
            <span>One package? You’re in the right place.</span>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/images/courier-hero.webp"
            alt="Illustrative KWC courier handing a parcel to a customer beside a branded cargo van"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 52vw"
          />
          <div className="image-note">
            <span className="mini-icon">
              <Icon name="box" />
            </span>
            <div>
              <strong>Small parcel. Big possibility.</strong>
              <span>Local delivery, with a human touch.</span>
            </div>
          </div>
          <span className="photo-caption">Illustrative brand photography</span>
        </div>
      </section>
      <div className="wrap quote-entry-wrap">
        <QuoteEntry />
      </div>
      <div className="wrap brand-line">
        <span>{contact.slogan}</span>
        <span>Local expertise. North American reach. Smarter logistics.</span>
      </div>
      <section className="section wrap" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THREE WAYS TO GET MOVING</p>
            <h2>
              Whatever you’re sending,
              <br />
              start here.
            </h2>
          </div>
          <p>
            From your front door to the receiving dock.
            <br />
            Choose what fits. We’ll help with the rest.
          </p>
        </div>
        <ServiceCards />
      </section>
      <section className="how-band">
        <div className="wrap how-layout">
          <div>
            <p className="eyebrow">A SIMPLE START</p>
            <h2>
              A few details.
              <br />A practical plan.
            </h2>
          </div>
          <ol className="steps">
            {[
              [
                "Tell us what’s moving",
                "Where it starts, where it goes, and what it needs.",
              ],
              [
                "Review your options",
                "We confirm the route, handling, availability and price.",
              ],
              [
                "Agree. Then we move.",
                "Your shipment is booked once the details are confirmed.",
              ],
            ].map(([title, text], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section wrap split-section">
        <div className="business-photo">
          <Image
            src="/images/business-pickup.webp"
            alt="Illustrative small-business owner handing packaged food orders to a courier"
            fill
            sizes="(max-width: 800px) 100vw, 45vw"
          />
          <span className="photo-caption">Illustrative business pickup</span>
        </div>
        <div className="split-copy">
          <p className="eyebrow">YOU GROW. WE HELP YOU GO.</p>
          <h2>
            Reach more customers.
            <br />
            Keep your own identity.
          </h2>
          <p className="lead">
            Reach more customers without building your own delivery fleet.
          </p>
          <p>
            Take orders through your website, phone or usual sales channels. We
            can help organize pickup, movement between regions and the final
            delivery—while you keep the customer relationship.
          </p>
          <ul className="check-list">
            <li>
              <Icon name="check" />
              Scheduled pickups and multi-stop routes
            </li>
            <li>
              <Icon name="check" />
              Supplier collections and store replenishment
            </li>
            <li>
              <Icon name="check" />A delivery plan built around your volume
            </li>
          </ul>
          <Link href="/contact?service=regular#quote" className="text-link">
            Let’s plan your regular deliveries <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section className="section coverage-section">
        <div className="wrap split-section">
          <div className="split-copy">
            <p className="eyebrow">LOCAL START. WIDER POSSIBILITIES.</p>
            <h2>
              At home in KWC.
              <br />
              Connected beyond it.
            </h2>
            <p>
              Local courier delivery in Kitchener, Waterloo and Cambridge.
              Regional delivery arrangements along Ontario’s business corridors.
              Suitable carrier partners for Canada/U.S. road freight.
            </p>
            <div className="coverage-key">
              <span>
                <i />
                Local courier
              </span>
              <span>
                <i />
                Regional arrangements
              </span>
              <span>
                <i />
                Partner road freight
              </span>
            </div>
            <Link href="/service-areas" className="text-link">
              Explore our coverage <Icon name="arrow" />
            </Link>
          </div>
          <CoverageGraphic />
        </div>
      </section>
      <section className="section wrap consolidation">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MORE THOUGHT IN EVERY MILE</p>
            <h2>
              Smarter routes.
              <br />
              Better use of every trip.
            </h2>
          </div>
          <p>
            Compatible shipments going in the same direction can share capacity.
            That can open up a broader delivery network without a separate
            dedicated vehicle for every shipment.
          </p>
        </div>
        <div className="process-line">
          {[
            ["Collect", "From local pickup points", "box"],
            ["Group", "Compatible shipments", "route"],
            ["Move", "Between regions", "truck"],
            ["Deliver", "To the right door", "pin"],
          ].map(([title, copy, icon], i) => (
            <div key={title}>
              <span className="process-icon">
                <Icon name={icon} size={30} />
              </span>
              <span className="process-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
        <p className="fine">
          The right fit depends on shipment compatibility, delivery density,
          distance, handling and service commitments. We assess the options with
          you.
        </p>
      </section>
      <section className="section industry-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">REAL DELIVERIES. EVERYDAY BUSINESSES.</p>
              <h2>Made for the work you do.</h2>
            </div>
            <Link href="/industries" className="text-link">
              More industry examples <Icon name="arrow" />
            </Link>
          </div>
          <div className="industry-grid">
            {industries.slice(0, 4).map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap trust-section">
        <p className="eyebrow">WHY KWC</p>
        <h2>Less chasing. More clarity.</h2>
        <div className="trust-grid">
          {[
            [
              "One point of contact",
              "Talk through the shipment with KWC, including the parts we coordinate with carrier partners.",
            ],
            [
              "The details before the drive",
              "Access, appointments and extra handling are part of the conversation before booking.",
            ],
            [
              "A plan that fits",
              "Direct Ontario service where suitable, partner capacity when your shipment needs a broader reach.",
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <Icon name="check" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section wrap faq-section">
        <div>
          <p className="eyebrow">GOOD QUESTIONS</p>
          <h2>Let’s make it clear.</h2>
          <p>New to shipping? You don’t need to speak logistics.</p>
          <a href={`mailto:${contact.email}`} className="text-link">
            Ask us anything <Icon name="arrow" />
          </a>
        </div>
        <FAQ />
      </section>
      <ContactCTA />
    </>
  );
}
