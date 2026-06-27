const fields = [
  { id: "name", label: "Name", type: "text", required: true },
  { id: "company", label: "Company", type: "text" },
  { id: "phone", label: "Phone", type: "tel", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "pickup-city", label: "Pickup city", type: "text", required: true },
  { id: "delivery-city", label: "Delivery city", type: "text", required: true },
  { id: "freight-type", label: "Freight type", type: "text" },
  { id: "pallets-items", label: "Number of pallets/items", type: "text" },
  { id: "weight", label: "Weight", type: "text" },
  { id: "dimensions", label: "Dimensions", type: "text" }
];

export function QuoteForm() {
  return (
    <form className="grid gap-5 rounded-md border border-line bg-white p-5 shadow-soft sm:grid-cols-2 sm:p-6">
      {fields.map((field) => (
        <label key={field.id} htmlFor={field.id} className="grid gap-2 text-sm font-semibold text-ink">
          {field.label}
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            required={field.required}
            className="min-h-11 rounded-md border border-line px-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          />
        </label>
      ))}
      <label htmlFor="timing" className="grid gap-2 text-sm font-semibold text-ink">
        Same-day or scheduled
        <select
          id="timing"
          name="timing"
          className="min-h-11 rounded-md border border-line bg-white px-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
        >
          <option value="">Select one</option>
          <option>Same-day</option>
          <option>Scheduled</option>
          <option>Flexible</option>
        </select>
      </label>
      <label htmlFor="liftgate" className="grid gap-2 text-sm font-semibold text-ink">
        Liftgate required?
        <select
          id="liftgate"
          name="liftgate"
          className="min-h-11 rounded-md border border-line bg-white px-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
        >
          <option value="">Select one</option>
          <option>Yes</option>
          <option>No</option>
          <option>Not sure</option>
        </select>
      </label>
      <label htmlFor="reefer" className="grid gap-2 text-sm font-semibold text-ink">
        Reefer required?
        <select
          id="reefer"
          name="reefer"
          className="min-h-11 rounded-md border border-line bg-white px-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
        >
          <option value="">Select one</option>
          <option>Yes</option>
          <option>No</option>
          <option>Not sure</option>
        </select>
      </label>
      <label htmlFor="delivery-type" className="grid gap-2 text-sm font-semibold text-ink">
        Residential or commercial?
        <select
          id="delivery-type"
          name="delivery-type"
          className="min-h-11 rounded-md border border-line bg-white px-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
        >
          <option value="">Select one</option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Both</option>
        </select>
      </label>
      <label htmlFor="notes" className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
        Notes
        <textarea
          id="notes"
          name="notes"
          rows={5}
          className="rounded-md border border-line px-3 py-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
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
