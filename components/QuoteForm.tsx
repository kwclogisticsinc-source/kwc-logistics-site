const fields = [
  { id: "name", label: "Name", type: "text", required: true },
  { id: "company", label: "Company", type: "text" },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "phone", label: "Phone", type: "tel", required: true },
  { id: "pickup-city", label: "Pickup city", type: "text", required: true },
  { id: "delivery-city", label: "Delivery city", type: "text", required: true },
  { id: "freight-type", label: "Freight type", type: "text" },
  { id: "pallets-items", label: "Number of pallets/items", type: "text" },
  { id: "weight", label: "Weight", type: "text" }
];

const serviceOptions = [
  "Local LTL Services",
  "LTL Direct (2 hrs)",
  "LTL Rush (4 hrs)",
  "LTL Sameday (by 5PM)",
  "FTL Freight",
  "Warehouse Distribution",
  "Cross Docking",
  "Final Mile Delivery",
  "Expedited & Same-Day Freight",
  "Scheduled Routes",
  "Retail Distribution",
  "Reverse Logistics",
  "Dedicated Fleet & Route Support",
  "Specialized Freight",
  "Route Optimization",
  "Custom Logistics Plan"
];

export function QuoteForm() {
  return (
    <form className="grid gap-5 rounded-2xl border border-white/10 bg-white p-5 shadow-glow sm:grid-cols-2 sm:p-6">
      {fields.map((field) => (
        <label key={field.id} htmlFor={field.id} className="grid gap-2 text-sm font-semibold text-ink">
          {field.label}
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            required={field.required}
          className="min-h-12 rounded-lg border border-line bg-brand-pale px-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
          />
        </label>
      ))}
      <label htmlFor="service-required" className="grid gap-2 text-sm font-semibold text-ink">
        Service Required
        <select
          id="service-required"
          name="service-required"
          className="min-h-12 rounded-lg border border-line bg-brand-pale px-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
        >
          <option value="">Select one</option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="dimensions" className="grid gap-2 text-sm font-semibold text-ink">
        Dimensions
        <input
          id="dimensions"
          name="dimensions"
          type="text"
          className="min-h-12 rounded-lg border border-line bg-brand-pale px-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
        />
      </label>
      <label htmlFor="liftgate" className="grid gap-2 text-sm font-semibold text-ink">
        Liftgate required?
        <select
          id="liftgate"
          name="liftgate"
          className="min-h-12 rounded-lg border border-line bg-brand-pale px-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
        >
          <option value="">Select one</option>
          <option>Yes</option>
          <option>No</option>
          <option>Not sure</option>
        </select>
      </label>
      <label htmlFor="timing" className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
        Same-day or scheduled?
        <select
          id="timing"
          name="timing"
          className="min-h-12 rounded-lg border border-line bg-brand-pale px-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
        >
          <option value="">Select one</option>
          <option>Same-day</option>
          <option>Next-day</option>
          <option>Scheduled</option>
          <option>Recurring route</option>
          <option>Need help planning</option>
        </select>
      </label>
      <label htmlFor="additional-notes" className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
        Additional Notes
        <textarea
          id="additional-notes"
          name="additional-notes"
          rows={5}
          className="rounded-lg border border-line bg-brand-pale px-3 py-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
        >
          Send Quote Request
        </button>
        <p className="mt-3 text-sm leading-6 text-muted">
          This demo form is ready to connect to your preferred form handler, CRM, or email service before launch.
        </p>
      </div>
    </form>
  );
}
