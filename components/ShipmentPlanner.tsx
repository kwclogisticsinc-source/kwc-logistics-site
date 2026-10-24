"use client";
import { useState } from "react";
import Link from "next/link";
export function ShipmentPlanner() {
  const [kind, setKind] = useState("courier");
  const [access, setAccess] = useState("standard");
  const [timing, setTiming] = useState("flexible");
  const freight = kind === "freight";
  const regular = kind === "regular";
  const items = [
    "Pickup and delivery locations, including each stop",
    regular
      ? "Approximate order volume, frequency and preferred start date"
      : freight
        ? "Pallet or piece count, commodity, dimensions and total weight"
        : "Package count, approximate dimensions and total weight",
    access === "extra"
      ? "Access details: dock availability, stairs, inside delivery or additional handling"
      : "Collection references and receiving hours",
    timing === "urgent"
      ? "Goods-ready time and the actual delivery deadline"
      : "Requested date and any appointment windows",
  ];
  return (
    <section className="shipment-planner" id="shipment-planner">
      <div>
        <p className="eyebrow">A SMARTER START</p>
        <h2>
          Build your
          <br />
          shipment checklist.
        </h2>
        <p>
          Three quick choices. See which details will help us plan your enquiry.
        </p>
        <div className="planner-fields">
          <label>
            What are you planning?
            <select value={kind} onChange={(e) => setKind(e.target.value)}>
              <option value="courier">A package or courier pickup</option>
              <option value="freight">Pallets or larger freight</option>
              <option value="regular">Regular business deliveries</option>
            </select>
          </label>
          <label>
            Any additional access or handling?
            <select value={access} onChange={(e) => setAccess(e.target.value)}>
              <option value="standard">
                Standard collection and receiving
              </option>
              <option value="extra">
                No dock, inside delivery or extra help
              </option>
            </select>
          </label>
          <label>
            How important is timing?
            <select value={timing} onChange={(e) => setTiming(e.target.value)}>
              <option value="flexible">Scheduled or flexible</option>
              <option value="urgent">Urgent or a specific deadline</option>
            </select>
          </label>
        </div>
      </div>
      <div className="planner-result" aria-live="polite" aria-atomic="true">
        <span className="planner-result-label">YOUR ENQUIRY CHECKLIST</span>
        <h3>
          {regular
            ? "Plan the pattern."
            : freight
              ? "Plan the load."
              : "Start with the package."}
        </h3>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Not sure about a detail? Tell us what you know. Capacity, handling and
          price are confirmed with your quote.
        </p>
        <Link className="btn" href={"/contact?service=" + kind + "#quote"}>
          Continue to Your Enquiry →
        </Link>
        <small>
          This checklist does not calculate a rate or confirm availability.
        </small>
      </div>
    </section>
  );
}
