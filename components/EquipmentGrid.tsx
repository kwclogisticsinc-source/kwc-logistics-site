import Link from "next/link";
export function EquipmentGrid() {
  return (
    <section className="wrap section equipment-section" id="equipment">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR FLEET & TRANSPORTATION NETWORK</p>
          <h2>
            Capacity for the package.
            <br />
            Equipment for the load.
          </h2>
        </div>
        <p>
          KWC Logistics offers access to dry and refrigerated straight trucks,
          along with highway tractors equipped with dry van, refrigerated and
          flatbed trailers. Our network connects local, regional and long-haul
          requirements.
        </p>
      </div>
      <div className="equipment-grid">
        {[
          [
            "01",
            "Cargo vans",
            "Packages & business deliveries",
            "Suitable parcels, packaged customer orders, supplier pickups and point-to-point movements. Match capacity to the dimensions, weight and delivery requirements.",
          ],
          [
            "02",
            "Dry straight trucks",
            "Commercial deliveries & distribution",
            "Pallets and larger dry shipments for local and regional movements. Discuss loading access, liftgate requirements and the final handoff when requesting capacity.",
          ],
          [
            "03",
            "Refrigerated straight trucks",
            "Temperature-sensitive regional freight",
            "Discuss the commodity, required transport temperature, collection conditions and receiving requirements. Suitable equipment and handling are confirmed for the shipment.",
          ],
          [
            "04",
            "Dry van trailers",
            "Dry freight & highway movements",
            "Access to highway tractor and dry van capacity for suitable commercial goods, shared-capacity arrangements and dedicated freight requirements.",
          ],
          [
            "05",
            "Refrigerated trailers",
            "Temperature-controlled road freight",
            "Refrigerated trailer capacity for appropriate freight requiring controlled transport conditions. Share the product and temperature requirements before booking.",
          ],
          [
            "06",
            "Flatbed trailers",
            "Freight with different loading needs",
            "Review suitable flatbed capacity for freight whose dimensions, shape or loading requirements call for an open-deck arrangement. Provide measurements and loading details.",
          ],
        ].map(([n, title, label, copy]) => (
          <article key={n}>
            <span className="equipment-number">{n}</span>
            <p className="eyebrow">{label}</p>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <div className="equipment-note">
        <p>
          Equipment access combines KWC service and carrier partnerships. The
          actual vehicle, operator, capacity and handling arrangements are
          confirmed for each shipment.
        </p>
        <Link className="text-link" href="/contact?service=freight#quote">
          Find the Right Capacity →
        </Link>
      </div>
    </section>
  );
}
