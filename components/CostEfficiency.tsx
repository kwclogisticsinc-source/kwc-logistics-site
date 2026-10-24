import Link from "next/link";

export function CostEfficiency() {
  return (
    <section className="efficiency-band" aria-labelledby="efficiency-heading">
      <div className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A NEW APPROACH TO EVERYDAY LOGISTICS</p>
            <h2 id="efficiency-heading">
              Smarter behind the scenes.
              <br />
              More value for your business.
            </h2>
          </div>
          <p>
            Affordable transportation starts with how the work is organized. We
            combine our own internal technology with a flexible Ontario network
            to reduce unnecessary administration and make better use of
            available capacity.
          </p>
        </div>
        <div className="efficiency-grid">
          {[
            [
              "01",
              "Our tools. Less friction.",
              "KWC-developed internal tools support order coordination, shipment tracking and invoicing. Connecting the office work helps reduce repeated administration and keeps shipment information organized.",
            ],
            [
              "02",
              "Match the shipment to the capacity.",
              "A parcel, a pallet and a dedicated load need different plans. We review suitable cargo vans, trucks and carrier capacity so the transport arrangement fits the job.",
            ],
            [
              "03",
              "Share the journey where it makes sense.",
              "Compatible shipments, concentrated delivery areas and recurring lanes can make better use of each trip—creating opportunities for more competitive pricing without a separate dedicated vehicle for every shipment.",
            ],
          ].map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="efficiency-footer">
          <p>
            Tell us your route, volume and timing. We’ll look for a
            cost-conscious plan and quote the actual requirements, including any
            additional handling. Price depends on distance, shipment
            compatibility, capacity and service commitments.
          </p>
          <Link className="btn" href="/contact?service=regular#quote">
            Find a Smarter Delivery Plan →
          </Link>
        </div>
      </div>
    </section>
  );
}
