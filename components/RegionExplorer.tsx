"use client";
import { useState } from "react";
import Link from "next/link";
import { deliveryRegions } from "@/lib/coverage";
export function RegionExplorer() {
  const [selected, setSelected] = useState(0);
  const region = deliveryRegions[selected];
  return (
    <div className="region-explorer">
      <div
        className="region-tabs"
        role="group"
        aria-label="Explore delivery regions"
      >
        {deliveryRegions.map((item, i) => (
          <button
            type="button"
            key={item.id}
            aria-pressed={selected === i}
            aria-controls="region-details"
            onClick={() => setSelected(i)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        className="region-details"
        id="region-details"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="eyebrow">CONNECTED ACROSS ONTARIO</p>
        <h3>{region.title}</h3>
        <p>{region.description}</p>
        <div
          className="region-route"
          aria-label="Service connection illustration, not a geographic map"
        >
          <span className="region-origin">KWC network</span>
          <span className="region-route-line" aria-hidden="true" />
          <span>{region.towns[0]}</span>
        </div>
        <ul className="region-town-list">
          {region.towns.map((town) => (
            <li key={town}>{town}</li>
          ))}
        </ul>
        <p className="region-example">
          <strong>A practical example:</strong> {region.example}
        </p>
        <Link
          className="text-link"
          href={`/contact?service=freight&pickup=Kitchener&destination=${encodeURIComponent(region.destination)}#quote`}
        >
          Ask about this route →
        </Link>
      </div>
      <p className="region-note">
        Pickup timing, capacity and handling are confirmed with your quote.
        Service connections shown are not fixed departure schedules.
      </p>
    </div>
  );
}
