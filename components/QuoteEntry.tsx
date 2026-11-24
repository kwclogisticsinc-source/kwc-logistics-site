"use client";
import { useState, type FormEvent } from "react";
import { quickQuoteTypes } from "@/lib/quote";
export function QuoteEntry() {
  const [intent, setIntent] = useState("pallets");
  const { kind } = quickQuoteTypes.find(({ id }) => id === intent) ?? quickQuoteTypes[1];
  function start(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const route = new URLSearchParams({
      pickup: String(values.get("pickup") ?? ""),
      destination: String(values.get("destination") ?? ""),
    });
    window.location.assign(
      `/contact?service=${kind}&intent=${intent}#quote&${route.toString()}`,
    );
  }
  return (
    <form action="/contact" onSubmit={start} className="quote-entry">
      <div className="entry-heading">
        <strong>Get a quote for your route</strong>
      </div>
      <div className="entry-fields">
        <label>
          Delivery type
          <select
            name="intent"
            value={intent}
            onChange={(e) => setIntent(e.target.value)}
          >
            {quickQuoteTypes.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}
          </select>
        </label>
        <label>
          {kind === "regular" ? "Pickup area" : "Pickup city or postal code"}
          <input
            name="pickup"
            placeholder="e.g. Kitchener, ON"
            maxLength={300}
          />
        </label>
        <label>
          {kind === "regular"
            ? "Delivery regions"
            : "Destination city or postal code"}
          <input
            name="destination"
            placeholder="Where’s it going?"
            maxLength={300}
          />
        </label>
        <button className="btn" type="submit">
          Start My Quote
        </button>
      </div>
      <p>No account needed. We’ll confirm the details and price with you.</p>
    </form>
  );
}
