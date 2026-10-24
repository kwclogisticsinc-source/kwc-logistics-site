import Link from "next/link";
export function LaneNetwork() {
  return (
    <section className="lane-network">
      <div className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">REGULAR LANES. A PROVINCE-WIDE NETWORK.</p>
            <h2>
              From KWC.
              <br />
              Across Ontario. Back again.
            </h2>
          </div>
          <p>
            Regular transportation lanes connect Kitchener–Waterloo–Cambridge
            with the GTA, Ottawa, Niagara, London and Windsor. Our wider
            logistics network reaches destinations throughout Ontario.
          </p>
        </div>
        <div
          className="lane-grid"
          aria-label="Regular lane connections, not a geographic map"
        >
          {[
            ["Greater Toronto Area", "GTA & onward connections"],
            ["Ottawa", "Eastern Ontario connections"],
            ["Niagara", "Niagara Region & nearby destinations"],
            ["London", "London & southwestern Ontario"],
            ["Windsor", "Windsor & Essex connections"],
          ].map(([place, detail]) => (
            <Link
              href={
                "/contact?service=freight&pickup=KWC&destination=" +
                encodeURIComponent(place) +
                "#quote"
              }
              key={place}
            >
              <span>KWC</span>
              <span className="lane-arrow" aria-label="to and from">
                ↔
              </span>
              <div>
                <strong>{place}</strong>
                <small>{detail}</small>
              </div>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
        <div className="lane-network-bottom">
          <p>
            Cargo vans, straight trucks and highway freight capacity connect
            local, regional and long-haul requirements. Have another Ontario
            destination? Bring it into the plan.
          </p>
          <Link className="text-link" href="/contact#quote">
            Discuss Your Ontario Lane →
          </Link>
        </div>
      </div>
    </section>
  );
}
