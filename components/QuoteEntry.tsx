"use client";
import { useState, type FormEvent } from "react";
import { quickQuoteTypes } from "@/lib/quote";
const oneTimeTypes = quickQuoteTypes.filter(({ id }) => id !== "regular" && id !== "brokerage");

export function QuoteEntry() {
  const [intent, setIntent] = useState("pallets");
  const kind = quickQuoteTypes.find(({ id }) => id === intent)?.kind ?? "freight";
  function start(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const route = new URLSearchParams({
      pickup: String(values.get("pickup") ?? ""),
      destination: String(values.get("destination") ?? ""),
    });
    window.location.assign(`/contact?service=${kind}&intent=${intent}&journey=ship#quote&${route.toString()}`);
  }
  return (
    <form id="quote-start" action="/contact" onSubmit={start} className="quote-entry" aria-labelledby="quote-start-title">
      <input type="hidden" name="journey" value="ship" />
      <div className="entry-heading">
        <strong id="quote-start-title">Get a quote for your route</strong>
      </div>
      <div className="entry-fields">
        <label>
          Delivery type
          <select
            name="intent"
            value={intent}
            onChange={(e) => setIntent(e.target.value)}
          >
            {oneTimeTypes.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}
          </select>
        </label>
        <label>
          Pickup city or postal code
          <input
            name="pickup"
            placeholder="e.g. Kitchener, ON"
            maxLength={300}
          />
        </label>
        <label>
          Destination city or postal code
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
