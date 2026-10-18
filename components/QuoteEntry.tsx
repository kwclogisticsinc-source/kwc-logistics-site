"use client";
import { useState, type FormEvent } from "react";
import { Icon } from "./DeliveryUI";
export function QuoteEntry() {
  const [service, setService] = useState("courier");
  function start(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const route = new URLSearchParams({
      pickup: String(values.get("pickup") ?? ""),
      destination: String(values.get("destination") ?? ""),
    });
    window.location.assign(
      `/contact?service=${service}#quote&${route.toString()}`,
    );
  }
  return (
    <form action="/contact" onSubmit={start} className="quote-entry">
      <div className="entry-heading">
        <span className="eyebrow">LET’S START WITH YOUR ROUTE</span>
        <strong>What’s moving?</strong>
      </div>
      <div className="entry-fields">
        <label>
          Delivery type
          <select
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="courier">A package</option>
            <option value="freight">Pallets or larger freight</option>
            <option value="regular">Regular deliveries</option>
          </select>
        </label>
        <label>
          {service === "regular" ? "Pickup area" : "Pickup city or postal code"}
          <input
            name="pickup"
            placeholder="e.g. Kitchener, ON"
            maxLength={300}
          />
        </label>
        <label>
          {service === "regular"
            ? "Delivery regions"
            : "Destination city or postal code"}
          <input
            name="destination"
            placeholder="Where’s it going?"
            maxLength={300}
          />
        </label>
        <button className="btn" type="submit">
          Request a Quote <Icon name="arrow" size={19} />
        </button>
      </div>
      <p>No account needed. We’ll confirm the details and price with you.</p>
    </form>
  );
}
