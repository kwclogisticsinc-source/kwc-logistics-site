import Link from "next/link";
import { articles } from "@/lib/articles";
export function NetworkSections() {
  return (
    <>
      <section className="wrap section fleet-feature">
        <div>
          <p className="eyebrow">KWC TRUCK REPAIR & MOBILE SERVICES</p>
          <h2>
            Delivery reliability starts
            <br />
            with vehicle readiness.
          </h2>
          <p>
            Regular maintenance, practical mechanical knowledge and thoughtful
            dispatch planning work together. We take equipment readiness
            seriously because an avoidable interruption affects more than a
            vehicle—it affects the customer waiting for a delivery.
          </p>
          <Link className="btn" href="/fleet-services">
            Fleet Care & Mobile Enquiries →
          </Link>
        </div>
        <div className="fleet-feature-note">
          <span>READY FOR THE ROAD</span>
          <h3>
            Maintenance.
            <br />
            Coordination.
            <br />
            Continuity.
          </h3>
          <p>
            Explore our approach to fleet care and discuss truck repair or
            mobile support requirements.
          </p>
          <Link className="text-link" href="/about">
            Three perspectives. One company. →
          </Link>
        </div>
      </section>
      <section className="network-promise">
        <div className="wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE KWC APPROACH</p>
              <h2>
                More than a vehicle.
                <br />A plan that connects.
              </h2>
            </div>
            <Link className="text-link" href="/about">
              Meet the thinking behind KWC →
            </Link>
          </div>
          <div className="perspective-grid">
            {[
              [
                "Plan",
                "The right questions first",
                "Locations, load, access and timing. We connect the requirements before recommending the movement.",
              ],
              [
                "Coordinate",
                "One clear conversation",
                "Courier, freight or a recurring program. Work through direct service and suitable carrier capacity with KWC.",
              ],
              [
                "Grow",
                "Make room for the next step",
                "From a one-off delivery to more customers and more destinations. Build a transportation conversation around your business.",
              ],
            ].map(([label, title, copy]) => (
              <article key={label}>
                <span>{label}</span>
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
            <p className="eyebrow">SHIPPING INSIGHTS</p>
            <h2>
              Know what matters.
              <br />
              Move with a clearer plan.
            </h2>
          </div>
          <Link className="text-link" href="/blog">
            Explore all insights →
          </Link>
        </div>
        <div className="insight-grid">
          {articles.map((article) => (
            <article key={article.slug}>
              <p className="eyebrow">{article.category}</p>
              <h3>
                <Link href={"/blog/" + article.slug}>{article.title}</Link>
              </h3>
              <p>{article.summary}</p>
              <Link className="text-link" href={"/blog/" + article.slug}>
                Read the guide →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
