import Link from "next/link";
import { ContactCTA, PageIntro } from "@/components/DeliveryUI";
import { RegionExplorer } from "@/components/RegionExplorer";
import { deliveryRegions } from "@/lib/coverage";
export function RegionalCoveragePage() {
  return (
    <>
      <PageIntro
        eyebrow="BASED IN KITCHENER–WATERLOO"
        title="Your customers aren’t all on the same highway."
      >
        <p>
          Courier, freight and delivery programs from Waterloo Region—west
          through London to Windsor, and beyond the main 401 corridor to
          Goderich, Owen Sound and area.
        </p>
      </PageIntro>
      <section className="wrap content-section">
        <div className="regional-coverage-page">
          <div className="article-copy">
            <h2>
              A local base.
              <br />A practical regional network.
            </h2>
            <p>
              Start with where the goods are and where they need to go. We
              review your shipment, receiving windows and access requirements,
              then work through a suitable service.
            </p>
            <p>
              Local courier, regional freight and recurring delivery routes
              serve different needs. A delivery outside the main highway
              corridor can still be part of the conversation.
            </p>
            <Link className="btn" href="/contact#quote">
              Discuss Your Route →
            </Link>
          </div>
          <RegionExplorer />
        </div>
        <div className="regional-area-grid">
          {deliveryRegions.map((region) => (
            <article key={region.id}>
              <p className="eyebrow">{region.label}</p>
              <h3>{region.title}</h3>
              <p>{region.description}</p>
              <ul>
                {region.towns.map((town) => (
                  <li key={town}>{town}</li>
                ))}
              </ul>
              <Link
                className="text-link"
                href={`/contact?service=freight&pickup=Kitchener&destination=${encodeURIComponent(region.destination)}#quote`}
              >
                Request route advice →
              </Link>
            </article>
          ))}
        </div>
        <div className="article-copy">
          <h2>What matters when planning the route?</h2>
          <p>
            Tell us the collection point, each delivery location, the
            goods-ready time and receiving hours. Include piece counts,
            dimensions, weight and whether each stop has a dock or needs
            additional handling.
          </p>
          <p>
            Highway 401 connects the London–Windsor corridor. Goderich and Owen
            Sound require different regional connections. We plan around the
            actual addresses and requirements, rather than treating every
            location as an interchangeable highway stop.
          </p>
          <h2>Direct service and carrier coordination.</h2>
          <p>
            Suitable local and Ontario movements may be handled by KWC directly.
            Wider Canada/U.S. road freight and specialist capacity can be
            coordinated through carrier partners. The operator, equipment,
            availability and service details are confirmed with your quote.
          </p>
          <p className="fine">
            No fixed daily departures, cutoff times or terminal locations are
            advertised. Nearby communities and routes not listed can be reviewed
            on request.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
