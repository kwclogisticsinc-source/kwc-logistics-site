"use client";
import { useRef, useState, type FormEvent } from "react";
import { quoteGroups, validateQuote } from "@/lib/quote";
const inputClass = "min-h-12 w-full min-w-0 rounded-lg border border-line bg-brand-pale px-3 py-2 text-base font-normal text-ink focus:outline-none focus:ring-2 focus:ring-brand-navy";
const idFor = (name: string) => `quote-${name.toLowerCase().replaceAll(" ", "-")}`;
export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [service, setService] = useState("");
  const busy = useRef(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const validation = validateQuote(formData);
    setErrors(validation.errors);
    if (Object.keys(validation.errors).length) {
      setStatus("error"); setMessage("Please check the highlighted fields.");
      document.getElementById(idFor(Object.keys(validation.errors)[0]))?.focus();
      return;
    }
    busy.current = true; setStatus("submitting"); setMessage("");
    try {
      const response = await fetch("/api/quote", { method: "POST", body: formData, signal: AbortSignal.timeout(20000) });
      const result = await response.json();
      if (response.ok && result.success === true) {
        form.reset(); setService(""); setStatus("success");
        setMessage("Thank you. Your request has been submitted. Dispatch will review your shipment and contact you. This is a quote request, not a confirmed booking.");
      } else {
        setErrors(result.errors ?? {}); setStatus("error");
        setMessage(result.error ?? "We could not confirm your request. Please call 416-300-8473 or email dispatch@kwclogistics.ca.");
      }
    } catch {
      setStatus("error");
      setMessage("We could not confirm delivery. Your details are still here. Before resending, call 416-300-8473 or email dispatch@kwclogistics.ca to avoid a duplicate.");
    } finally { busy.current = false; }
  }
  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={status === "submitting"} className="space-y-8 rounded-2xl bg-white p-5 text-ink sm:p-7">
      <p className="text-sm leading-6 text-muted">Ontario service with our own equipment. North American road, rail and ocean freight through our partner network. Fields marked * are required.</p>
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {quoteGroups.map(group => (
        <fieldset key={group.title} disabled={status === "submitting"} className="min-w-0">
          <legend className="mb-4 w-full border-b border-line pb-3 text-lg font-bold">{group.title}</legend>
          <div className="grid gap-5 sm:grid-cols-2">
            {group.fields.map(field => {
              const id = idFor(field.name);
              const required = field.required || (field.name === "Temperature" && service === "Frozen & Refrigerated Freight");
              const props = { id, name: field.name, required, "aria-invalid": !!errors[field.name], "aria-describedby": `${id}-hint`, className: inputClass };
              return <div key={field.name} className={field.type === "textarea" ? "sm:col-span-2" : "min-w-0"}>
                <label htmlFor={id} className="mb-2 block text-sm font-semibold">{field.label ?? field.name}{required ? " *" : ""}</label>
                {field.options ? <select {...props} defaultValue="" onChange={field.name === "Service" ? e => setService(e.target.value) : undefined}>
                  <option value="">Select an option</option>{field.options.map(option => <option key={option}>{option}</option>)}
                </select> : field.type === "textarea" ? <textarea {...props} rows={4} maxLength={field.max} /> :
                  <input {...props} type={field.type ?? "text"} min={field.type === "number" ? 1 : undefined} max={field.type === "number" ? 999999 : undefined} step={field.type === "number" ? 1 : undefined} maxLength={field.max} autoComplete={field.name === "Email" ? "email" : field.name === "Name" ? "name" : field.name === "Phone" ? "tel" : field.name === "Company Name" ? "organization" : undefined} />}
                <p id={`${id}-hint`} className={`mt-1 text-sm ${errors[field.name] ? "font-semibold text-red-700" : "text-muted"}`}>{errors[field.name] || field.help}</p>
              </div>;
            })}
          </div>
        </fieldset>
      ))}
      <p className="text-sm leading-6 text-muted">We use these details to respond to your inquiry and assess suitable transport options. Please do not include patient information, passwords or sensitive documents. Equipment, carrier acceptance, routing and any cross-border requirements are confirmed during quoting.</p>
      <button type="submit" disabled={status === "submitting"} className="min-h-12 w-full rounded-md bg-brand-navy px-6 py-3 font-bold text-white hover:bg-brand-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-60">{status === "submitting" ? "Sending request…" : "Request a Freight Quote"}</button>
      <p role="status" aria-live="polite" aria-atomic="true" className={`text-sm font-semibold leading-6 ${status === "error" ? "text-red-700" : "text-emerald-800"}`}>{message}</p>
    </form>
  );
}
