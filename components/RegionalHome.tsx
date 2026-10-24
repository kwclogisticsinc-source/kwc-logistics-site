import Image from "next/image";
import Link from "next/link";
import { contact, industries } from "@/lib/content";
import { serviceDirectory } from "@/lib/coverage";
import { ContactCTA, FAQ, Icon } from "@/components/DeliveryUI";
import { RegionExplorer } from "@/components/RegionExplorer";
import { NetworkSections } from "@/components/NetworkSections";
import { LaneNetwork } from "@/components/LaneNetwork";
import { QuoteEntry } from "@/components/QuoteEntry";
export function RegionalHome() {
  return (
    <>
      <section className="regional-hero">
        <Image
          src="/images/courier-hero.webp"
          alt="Illustrative KWC courier and branded cargo van making a parcel handoff"
          fill
          priority
          sizes="100vw"
          className="regional-hero-image"
        />
        <div className="regional-hero-shade" />
        <div className="wrap regional-hero-content">
          <p className="eyebrow">ONE CONNECTED ONTARIO NETWORK.</p>
          <h1>
            MORE CONNECTIONS.
            <br />
            FEWER COMPLICATIONS.
          </h1>
          <p className="regional-hero-lead">
            Courier, freight and distribution.
            <br />
            Across Ontario. Around your business.
          </p>
          <p className="regional-hero-copy">
            Cargo vans, trucks and coordinated freight capacity. Into the GTA
            and beyond. Through London and beyond. One logistics network
            connecting your deliveries across Ontario.
          </p>
          <div className="button-row">
            <Link className="btn" href="/contact#quote">
              Get a Quote <Icon name="arrow" size={20} />
            </Link>
            <Link className="btn hero-outline" href="/services">
              Explore Our Services
            </Link>
          </div>
          <p className="hero-brand-slogan">{contact.slogan}</p>
        </div>
        <span className="regional-photo-note">
          Illustrative brand photography
        </span>
      </section>
      <div className="regional-action-band">
        <div className="wrap regional-actions">
          {[
            [
              "01",
              "Send a package",
              "Courier delivery for individuals & businesses",
              "courier",
            ],
            [
              "02",
              "Move pallets or freight",
              "Shared capacity, dedicated & final-mile options",
              "freight",
            ],
            [
              "03",
              "Plan regular deliveries",
              "Supplier pickups, store routes & customer orders",
              "regular",
            ],
          ].map(([n, title, text, kind]) => (
            <Link key={kind} href={`/contact?service=${kind}#quote`}>
              <span className="action-number">{n}</span>
              <span>
                <strong>{title}</strong>
                <small>{text}</small>
              </span>
              <Icon name="arrow" size={22} />
            </Link>
          ))}
        </div>
      </div>
      <LaneNetwork />
      <section className="section wrap regional-intro">
        <div>
          <p className="eyebrow">KWC LOGISTICS INC.</p>
          <h2>
            Transportation that works
            <br />
            around your business.
          </h2>
        </div>
        <div>
          <p className="lead">
            One delivery matters. So does the bigger picture.
          </p>
          <p>
            Whether you’re sending a single parcel, moving pallets or building a
            regional delivery program, KWC helps connect the pickup, road
            movement and final handoff. Start with your locations and
            requirements. We’ll work through the right service with you.
          </p>
          <Link href="/about" className="text-link">
            Meet KWC Logistics <Icon name="arrow" size={19} />
          </Link>
        </div>
      </section>
      <section className="regional-service-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR TRANSPORTATION SERVICES</p>
              <h2>
                A practical solution.
                <br />
                For every next move.
              </h2>
            </div>
            <Link className="text-link" href="/services">
              Compare our services <Icon name="arrow" />
            </Link>
          </div>
          <div className="regional-service-grid">
            {serviceDirectory.map((service, i) => (
              <article key={service.title}>
                <div className="regional-service-top">
                  <Icon name={service.icon} size={34} />
                  <span>0{i + 1}</span>
                </div>
                <h3>
                  <Link href={service.href}>{service.title}</Link>
                </h3>
                <p>{service.text}</p>
                <small>{service.tags}</small>
                <Link className="text-link" href={service.href}>
                  Explore service <Icon name="arrow" size={19} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="regional-coverage-band">
        <div className="wrap regional-coverage-layout">
          <div className="regional-coverage-copy">
            <p className="eyebrow">
              CONNECTED LANES. PROVINCE-WIDE POSSIBILITIES.
            </p>
            <h2>
              Across Ontario.
              <br />
              Across your supply chain.
            </h2>
            <p>
              Business doesn’t stop at the highway exit. We help plan deliveries
              to the places your suppliers, stores and customers actually are.
            </p>
            <ul>
              <li>
                <strong>Courier:</strong> Parcels, supplier pickups & customer
                orders
              </li>
              <li>
                <strong>Freight:</strong> Pallets, dedicated loads &
                distribution
              </li>
              <li>
                <strong>Network:</strong> GTA & beyond · London & beyond · All
                Ontario
              </li>
            </ul>
            <Link href="/service-areas" className="text-link">
              Explore coverage & route planning <Icon name="arrow" />
            </Link>
          </div>
          <RegionExplorer />
        </div>
      </section>
      <section className="section wrap regional-business">
        <div className="regional-business-image">
          <Image
            src="/images/business-pickup.webp"
            alt="Illustrative courier collecting packaged orders from a local business"
            fill
            sizes="(max-width:800px) 100vw, 45vw"
          />
          <span className="photo-caption">Illustrative business pickup</span>
        </div>
        <div>
          <p className="eyebrow">BUILT FOR GROWING BUSINESSES</p>
          <h2>
            More customers.
            <br />A delivery plan
            <br />
            to reach them.
          </h2>
          <p>
            You handle your products and customer relationships. We help
            organize supplier pickups, store deliveries and customer delivery
            routes around your business.
          </p>
          <div className="regional-business-points">
            {[
              [
                "Supplier pickups",
                "Collect orders from vendors and bring them to your business.",
              ],
              [
                "Store replenishment",
                "Arrange recurring deliveries to retail locations.",
              ],
              [
                "Customer deliveries",
                "Get packaged orders from your business to your customers’ doors.",
              ],
            ].map(([title, text]) => (
              <div key={title}>
                <Icon name="check" size={22} />
                <p>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </p>
              </div>
            ))}
          </div>
          <Link className="btn" href="/contact?service=regular#quote">
            Plan My Regular Deliveries <Icon name="arrow" size={20} />
          </Link>
        </div>
      </section>
      <section className="regional-process-band">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A CLEAR WAY TO GET STARTED</p>
              <h2>
                From the first detail
                <br />
                to the final delivery.
              </h2>
            </div>
            <p>
              Your shipment is booked once the route, service, availability and
              price have been agreed.
            </p>
          </div>
          <ol className="regional-process">
            {[
              [
                "Tell us what’s moving",
                "Share the route, goods, timing and anything that needs extra attention.",
              ],
              [
                "Work through the plan",
                "We review suitable equipment, direct service or carrier arrangements, and the delivery requirements.",
              ],
              [
                "Confirm. Then get moving.",
                "Agree on the details before collection, with pickup and receiving instructions ready.",
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
      <section className="section wrap regional-industries">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE WORK BEHIND THE SHIPMENT</p>
            <h2>
              For the businesses
              <br />
              keeping Ontario moving.
            </h2>
          </div>
          <Link className="text-link" href="/industries">
            Explore industry examples <Icon name="arrow" />
          </Link>
        </div>
        <div className="industry-grid">
          {industries.slice(0, 6).map(([title, text]) => (
            <article key={title}>
              <Icon name="box" size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="wrap regional-consolidation">
        <div>
          <p className="eyebrow">SMARTER USE OF EVERY TRIP</p>
          <h2>Collect. Connect. Deliver.</h2>
          <p>
            Compatible shipments moving in the same direction can share capacity
            for part of the journey. We assess the route, density, handling and
            timing to see whether consolidation makes sense for your deliveries.
          </p>
          <Link
            className="text-link"
            href="/services/logistics#service-options"
          >
            Understand consolidation <Icon name="arrow" />
          </Link>
        </div>
        <div
          className="regional-flow"
          aria-label="Collect, group compatible shipments, move between regions, deliver"
        >
          {[
            "Collect",
            "Group compatible shipments",
            "Move between regions",
            "Deliver",
          ].map((step, i) => (
            <div key={step}>
              <span>0{i + 1}</span>
              <strong>{step}</strong>
              {i < 3 && <Icon name="arrow" size={20} />}
            </div>
          ))}
        </div>
      </section>
      <section className="section wrap regional-quote-start">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TELL US WHERE. WE’LL WORK THROUGH HOW.</p>
            <h2>Start with your route.</h2>
          </div>
          <p>
            A city or postal code is enough to begin. No account needed and no
            booking commitment.
          </p>
        </div>
        <QuoteEntry />
      </section>
      <section className="wrap regional-resource-strip">
        <div>
          <Icon name="box" size={30} />
          <h3>Ready for the paperwork?</h3>
          <p>
            Shipment checklist, bill of lading, customer setup and credit
            application.
          </p>
        </div>
        <Link href="/forms" className="btn secondary">
          Forms & Shipping Help <Icon name="arrow" size={20} />
        </Link>
      </section>
      <section className="section wrap faq-section">
        <div>
          <p className="eyebrow">BEFORE YOU SHIP</p>
          <h2>A few useful answers.</h2>
          <p>One package or a regular route—we welcome the conversation.</p>
          <a className="text-link" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
        <FAQ limit={6} />
      </section>
      <NetworkSections />
      <ContactCTA />
    </>
  );
}
