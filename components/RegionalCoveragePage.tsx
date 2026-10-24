import Link from "next/link";
import { ContactCTA, PageIntro } from "@/components/DeliveryUI";
import { RegionExplorer } from "@/components/RegionExplorer";
import { deliveryRegions } from "@/lib/coverage";
export function RegionalCoveragePage() {
  return (
    <>
      <PageIntro
        eyebrow="ONTARIO-WIDE CONNECTIONS"
        title="Across Ontario. Connected around your business."
      >
        <p>
          Cargo vans, trucks and carrier capacity. From the GTA and beyond to
          London and beyond, KWC connects local pickups, regional lanes and
          final delivery across Ontario.
        </p>
      </PageIntro>
      <section className="wrap section">
        <div className="regional-coverage-page">
          <div className="article-copy">
            <p className="eyebrow">A NETWORK, NOT A SHORT LIST OF CITIES</p>
            <h2>
              Your next destination.
              <br />
              Our next conversation.
            </h2>
            <p>
              Ontario businesses need transportation that reaches beyond a few
              postal codes. Our logistics network brings together courier
              delivery, pallet freight, dedicated transport and recurring
              distribution across the province.
            </p>
            <p>
              We coordinate cargo vans and trucks moving toward the GTA and
              onward, through London and further west, and along regional
              connections throughout Ontario. Whether the destination is a major
              commercial centre or a community away from the main highway, we
              build the plan around the actual shipment.
            </p>
            <Link className="btn" href="/contact#quote">
              Plan an Ontario Shipment →
            </Link>
          </div>
          <RegionExplorer />
        </div>
      </section>
      <section className="network-equipment">
        <div className="wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CAPACITY THAT FITS THE MOVEMENT</p>
              <h2>
                Small deliveries.
                <br />
                Serious freight capability.
              </h2>
            </div>
            <p>
              Match the service to the load, location and receiving
              requirements. One point of contact connects the pieces.
            </p>
          </div>
          <div className="capability-grid">
            {[
              [
                "Cargo vans & courier vehicles",
                "Documents, parcels, packaged orders, supplier collections and suitable larger packages. A flexible starting point for local delivery and regional point-to-point requirements.",
              ],
              [
                "Trucks & commercial freight",
                "Pallets, commercial shipments, shared-capacity freight and dedicated loads. We review dimensions, weight, dock access and handling before confirming suitable equipment.",
              ],
              [
                "Connected distribution",
                "Recurring pickups, multi-stop delivery, store replenishment and final-mile coordination. Connect collection, regional movement and the receiving location in one practical plan.",
              ],
            ].map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section">
        <p className="eyebrow">EXPLORE THE CONNECTIONS</p>
        <h2>Lanes that connect the province.</h2>
        <p className="lead">
          These are starting points for planning—not the limits of our coverage.
        </p>
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
                href={
                  "/contact?service=freight&destination=" +
                  encodeURIComponent(region.destination) +
                  "#quote"
                }
              >
                Discuss this connection →
              </Link>
            </article>
          ))}
        </div>
        <div className="coverage-planning">
          <div>
            <p className="eyebrow">BEYOND THE CITY NAME</p>
            <h2>
              Good coverage starts
              <br />
              with good planning.
            </h2>
          </div>
          <div>
            <p>
              Highway 401 connects the GTA with southwestern and eastern
              Ontario. Highway 403 adds connections through Hamilton, Brantford
              and Woodstock, with the QEW serving Niagara. Northern Ontario and
              destinations away from the main corridors require their own route
              and capacity planning.
            </p>
            <p>
              Share the actual locations, ready time, receiving hours,
              dimensions and weight. We work through direct service or suitable
              carrier partners, including specialist equipment where required.
              Availability, operator and service details are confirmed with your
              quote.
            </p>
            <p>
              Need to go further? We also coordinate suitable Canada/U.S. road
              freight through carrier partners.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
