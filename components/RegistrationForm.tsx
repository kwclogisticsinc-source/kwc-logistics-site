"use client";

import { useState, type FormEvent } from "react";
import { registration, type DriverRole, type RegistrationKind } from "@/lib/registration";
import { contact } from "@/lib/content";

export function RegistrationForm({ kind, initialDriverRole }: { kind: RegistrationKind; initialDriverRole?: DriverRole }) {
  const [status, setStatus] = useState<"ready" | "sending" | "success" | "error">("ready");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { fields, title } = registration[kind];

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || status === "success") return;
    const data = new FormData(event.currentTarget);
    data.set("Request Type", kind);
    setStatus("sending");
    setErrors({});
    setMessage("");
    try {
      const response = await fetch("/api/quote", { method: "POST", body: data, signal: AbortSignal.timeout(20000) });
      const result = await response.json();
      if (response.ok && result.success === true) {
        setStatus("success");
        setMessage(`KWC received your request for review. Reference: ${result.reference}.`);
      } else {
        setStatus("error");
        setErrors(result.errors ?? {});
        setMessage(result.error ?? "Unable to confirm delivery. Please email KWC.");
      }
    } catch {
      setStatus("error");
      setMessage(`Unable to confirm delivery. Please contact ${contact.email} before resending.`);
    }
  }

  return (
    <form id="request" className="quote-entry registration-form" method="post" action="/api/quote" onSubmit={submit}>
      <h2>{title}</h2>
      {status !== "success" && (
        <>
          <input type="hidden" name="Request Type" value={kind} />
          <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" hidden />
          {fields.map((field, index) => {
            const id = `registration-${kind}-${index}`;
            const options = "options" in field ? field.options : null;
            const type = "type" in field ? field.type : "text";
            const accessible = {
              id, name: field.name, required: field.required,
              "aria-invalid": Boolean(errors[field.name]),
              "aria-describedby": [field.name === "Capacity needed" && `${id}-hint`, errors[field.name] && `${id}-error`].filter(Boolean).join(" ") || undefined,
            };
            return (
              <div key={field.name} className="registration-field">
                <label htmlFor={id}>{field.name}</label>
                {options ? (
                  <select {...accessible} defaultValue={kind === "driver" && field.name === "Application type" ? initialDriverRole ?? "" : ""}>
                    <option value="" disabled>Choose an option</option>
                    {options.map((item) => <option key={item}>{item}</option>)}
                  </select>
                ) : type === "textarea" ? (
                  <textarea {...accessible} rows={4} maxLength={1200} />
                ) : (
                  <input {...accessible} type={type} maxLength={250} />
                )}
                {field.name === "Capacity needed" && <p className="fine" id={`${id}-hint`}>Include pickup and delivery windows, anticipated volume and frequency, and the type of freight.</p>}
                {errors[field.name] && <p id={`${id}-error`}>{errors[field.name]}</p>}
              </div>
            );
          })}
          <button className="btn" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : kind === "driver" ? "Send application" : "Send for Review"}
          </button>
        </>
      )}
      {message && <p className={`form-status ${status}`} role={status === "error" ? "alert" : "status"}>{message}</p>}
    </form>
  );
}
