export const services = ["LTL Freight & Distribution", "Final-Mile Delivery", "Frozen & Refrigerated Freight", "Specialized Freight & Handling", "Freight Brokerage", "Help me choose"];
export const modes = ["Road", "Rail", "Ocean / ship", "Multimodal", "Recommend an option"];
export type QuoteField = { name: string; label?: string; type?: string; required?: boolean; options?: string[]; max?: number; help?: string };
export const quoteGroups: { title: string; fields: QuoteField[] }[] = [
  { title: "Your contact details", fields: [
    { name: "Name", required: true, max: 120 }, { name: "Company Name", max: 160 },
    { name: "Email", type: "email", required: true, max: 254 }, { name: "Phone", type: "tel", required: true, max: 40 }
  ] },
  { title: "Route & service", fields: [
    { name: "Service", required: true, options: services }, { name: "Transport Mode", required: true, options: modes },
    { name: "Pickup Location", label: "Pickup city, province/state & country", required: true, max: 300 },
    { name: "Delivery Location", label: "Delivery city, province/state & country", required: true, max: 300 },
    { name: "Preferred Date", label: "Requested pickup date", type: "date", required: true },
    { name: "Delivery Date", label: "Requested delivery date (optional)", type: "date" },
    { name: "Frequency", required: true, options: ["One-time shipment", "Recurring route"] },
    { name: "Route Schedule", label: "Recurring schedule / timing notes", max: 300 }
  ] },
  { title: "Freight & handling", fields: [
    { name: "Freight Type", required: true, max: 200 },
    { name: "Item Count", label: "Pallet or item count", type: "number" },
    { name: "Weight", label: "Total weight (include kg or lb)", max: 100 },
    { name: "Dimensions", label: "Dimensions per item (L × W × H, include units)", max: 300 },
    { name: "Equipment", label: "Required equipment / container type", max: 200 },
    { name: "Liftgate", label: "Tailgate / liftgate", options: ["Not required", "Pickup", "Delivery", "Both", "Please advise"] },
    { name: "Delivery Access", options: ["Dock", "Door / curbside", "Inside delivery", "Other / please advise"] },
    { name: "Handling", label: "Wrapping, palletizing, offloading or setup needs", max: 500 },
    { name: "Temperature", label: "Temperature range (include °C or °F)", max: 120, help: "Required for frozen or refrigerated service. Include tolerances and monitoring needs in the notes." },
    { name: "Shipment Details", label: "Shipment details & special instructions", type: "textarea", required: true, max: 3000 }
  ] }
];
export function validateQuote(form: FormData) {
  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};
  for (const field of quoteGroups.flatMap(group => group.fields)) {
    const entries = form.getAll(field.name);
    const raw = entries[0];
    if (entries.length > 1 || (raw != null && typeof raw !== "string")) { errors[field.name] = "Enter one text value."; continue; }
    const value = typeof raw === "string" ? raw.trim() : "";
    values[field.name] = value;
    if (field.required && !value) errors[field.name] = "This field is required.";
    else if (value.length > (field.max ?? 300)) errors[field.name] = "Please shorten this field.";
    else if (value && field.options && !field.options.includes(value)) errors[field.name] = "Choose an available option.";
    else if (value && field.type === "date" && (!/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(Date.parse(value)) || new Date(value).toISOString().slice(0, 10) !== value)) errors[field.name] = "Enter a valid date.";
  }
  if (values.Email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.Email)) errors.Email = "Enter a valid email address.";
  if (values.Phone && !/^[+\d().\s\-xext#]{7,40}$/i.test(values.Phone)) errors.Phone = "Enter a valid phone number.";
  if (values["Item Count"] && !/^[1-9]\d{0,5}$/.test(values["Item Count"])) errors["Item Count"] = "Enter a whole number from 1 to 999999.";
  if (values["Delivery Date"] && values["Preferred Date"] && values["Delivery Date"] < values["Preferred Date"]) errors["Delivery Date"] = "Delivery cannot be before pickup.";
  if (values.Service === "Frozen & Refrigerated Freight" && !values.Temperature) errors.Temperature = "Include the required range and temperature units.";
  return { values, errors };
}
