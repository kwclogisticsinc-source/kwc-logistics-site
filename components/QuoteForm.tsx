"use client";

import { useState, type FormEvent } from "react";

const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const fields = [
  { id: "name", label: "Name", name: "Name", type: "text", required: true },
  { id: "company-name", label: "Company Name", name: "Company Name", type: "text" },
  { id: "phone", label: "Phone", name: "Phone", type: "tel", required: true },
  { id: "email", label: "Email", name: "Email", type: "email", required: true },
  { id: "pickup-location", label: "Pickup Location", name: "Pickup Location", type: "text", required: true },
  { id: "delivery-location", label: "Delivery Location", name: "Delivery Location", type: "text", required: true },
  { id: "preferred-date", label: "Preferred Date", name: "Preferred Date", type: "date", required: true }
];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "missing-key">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const accessKey = web3FormsAccessKey;

    if (!accessKey) {
      setStatus("missing-key");
      return;
    }

    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", accessKey);
    formData.append("subject", "New quote request from KWC Logistics website");
    formData.append("from_name", "KWC Logistics Website");
    formData.append("Destination Email", "kwclogisticsinc@gmail.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const result = await response.json();

      if (result.success) {
        event.currentTarget.reset();
        setStatus("success");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl border border-white/10 bg-white p-5 shadow-glow sm:grid-cols-2 sm:p-6">
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />
      <input type="hidden" name="Service" value="LTL Freight" />
      {fields.map((field) => (
        <label key={field.id} htmlFor={field.id} className="grid gap-2 text-sm font-semibold text-ink">
          {field.label}
          <input
            id={field.id}
            name={field.name}
            type={field.type}
            required={field.required}
          className="min-h-12 rounded-lg border border-line bg-brand-pale px-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
          />
        </label>
      ))}
      <label htmlFor="shipment-details" className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
        Shipment Details
        <textarea
          id="shipment-details"
          name="Shipment Details"
          required
          rows={5}
          className="rounded-lg border border-line bg-brand-pale px-3 py-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
        />
      </label>
      <label htmlFor="message" className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
        Message
        <textarea
          id="message"
          name="Message"
          rows={4}
          className="rounded-lg border border-line bg-brand-pale px-3 py-3 text-base font-normal text-ink outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
        >
          {status === "submitting" ? "Sending..." : "Send Quote Request"}
        </button>
        {status === "success" ? (
          <p className="mt-3 text-sm font-semibold leading-6 text-emerald-700">
            Thank you. Your quote request has been sent. KWC Logistics will contact you shortly.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="mt-3 text-sm font-semibold leading-6 text-red-700">
            Something went wrong. Please call dispatch or email dispatch@kwclogistics.ca.
          </p>
        ) : null}
        {status === "missing-key" ? (
          <p className="mt-3 text-sm font-semibold leading-6 text-red-700">
            Quote form setup is missing the Web3Forms access key.
          </p>
        ) : null}
      </div>
    </form>
  );
}
