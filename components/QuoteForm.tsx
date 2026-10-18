"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  courierConfig,
  fieldsFor,
  quoteKinds,
  validateQuote,
  type QuoteKind,
} from "@/lib/quote";
import { contact } from "@/lib/content";
import { previewOnly } from "@/lib/release";
import { Icon } from "./DeliveryUI";
const idFor = (name: string) =>
  `quote-${name.toLowerCase().replaceAll(" ", "-")}`;
export function QuoteForm({
  initialKind = "courier",
  pickup = "",
  destination = "",
}: {
  initialKind?: QuoteKind;
  pickup?: string;
  destination?: string;
}) {
  const [kind, setKind] = useState<QuoteKind>(initialKind);
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({
    "Pickup Location": pickup,
    "Delivery Location": destination,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const busy = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const groups = fieldsFor(kind);
  const group = groups[step];
  const submitting = status === "submitting";
  useEffect(() => {
    if (window.location.hash.startsWith("#quote&")) {
      const route = new URLSearchParams(window.location.hash.slice(7));
      setValues((previous) => ({
        ...previous,
        "Pickup Location": (route.get("pickup") ?? "").slice(0, 300),
        "Delivery Location": (route.get("destination") ?? "").slice(0, 300),
      }));
      window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}${window.location.search}#quote`,
      );
      formRef.current?.scrollIntoView();
    }
  }, []);
  function captureCurrent() {
    const current = new FormData(formRef.current!);
    const captured: Record<string, string> = {};
    for (const field of group.fields) {
      const raw = current.get(field.name);
      if (typeof raw === "string") captured[field.name] = raw;
    }
    setValues(previous => ({ ...previous, ...captured }));
    return { ...values, ...captured };
  }
  function data() {
    const captured = captureCurrent();
    const result = new FormData();
    result.set("Service", quoteKinds.find((item) => item.id === kind)!.service);
    for (const field of groups.flatMap((g) => g.fields))
      result.set(field.name, captured[field.name] ?? "");
    result.set(
      "botcheck",
      String(new FormData(formRef.current!).get("botcheck") ?? ""),
    );
    return result;
  }
  function focusError(found: Record<string, string>) {
    const first = Object.keys(found)[0];
    setTimeout(() => document.getElementById(idFor(first))?.focus(), 0);
  }
  function next() {
    const validation = validateQuote(data());
    const names = new Set(group.fields.map((f) => f.name));
    const current = Object.fromEntries(
      Object.entries(validation.errors).filter(([name]) => names.has(name)),
    );
    setErrors(current);
    if (Object.keys(current).length) {
      focusError(current);
      return;
    }
    setStep(step + 1);
    setMessage("");
    setTimeout(() => document.getElementById("quote-step-heading")?.focus(), 0);
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    if (step < 3) {
      next();
      return;
    }
    const formData = data();
    const validation = validateQuote(formData);
    setErrors(validation.errors);
    if (Object.keys(validation.errors).length) {
      const errorStep = groups.findIndex((g) =>
        g.fields.some((f) => validation.errors[f.name]),
      );
      setStep(Math.max(0, errorStep));
      focusError(validation.errors);
      return;
    }
    busy.current = true;
    setStatus("submitting");
    setMessage("");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (response.ok && result.success === true) {
        setStatus("success");
        setMessage(
          "Your request has been submitted. KWC will review your details and contact you to confirm availability, service and pricing. This is not a confirmed booking.",
        );
      } else {
        setStatus("error");
        setErrors(result.errors ?? {});
        setMessage(
          result.error ??
            "We could not confirm your request. Your details are still here. Please contact KWC.",
        );
        if (result.errors) {
          const errorStep = groups.findIndex((g) =>
            g.fields.some((f) => result.errors[f.name]),
          );
          if (errorStep >= 0) setStep(errorStep);
          focusError(result.errors);
        }
      }
    } catch {
      setStatus("error");
      setMessage(
        "We could not confirm delivery. Your details are still here. Please contact KWC before resending to avoid a duplicate.",
      );
    } finally {
      busy.current = false;
    }
  }
  const summary = groups
    .flatMap((g) => g.fields)
    .filter((f) => values[f.name])
    .map((f) => `${f.label}: ${values[f.name]}`)
    .join("\n");
  const mail = `mailto:${contact.email}?subject=${encodeURIComponent("KWC quote request — " + quoteKinds.find((item) => item.id === kind)!.service)}&body=${encodeURIComponent(summary)}`;
  return (
    <form
      id="quote"
      ref={formRef}
      onSubmit={submit}
      noValidate
      className="quote-form"
      aria-busy={submitting}
    >
      <p className="eyebrow">REQUEST A QUOTE · NO ACCOUNT NEEDED</p>
      {previewOnly && (
        <p className="preview-note">
          Design preview: explore the form freely. Submission will not send an
          email or book a shipment.
        </p>
      )}
      <div className="quote-service-options" aria-label="Delivery type">
        {quoteKinds.map((item) => (
          <button
            key={item.id}
            type="button"
            disabled={submitting}
            aria-pressed={kind === item.id}
            onClick={() => {
              captureCurrent();
              setKind(item.id);
              setStep(0);
              setErrors({});
              setStatus("idle");
              setMessage("");
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      {status === "success" ? (
        <>
          <h2>Thank you. We’ve got your request.</h2>
          <p className="form-status success" role="status">
            {message}
          </p>
          <button
            type="button"
            className="btn secondary"
            style={{ marginTop: 24 }}
            onClick={() => {
              setValues({});
              setStep(0);
              setStatus("idle");
              setMessage("");
            }}
          >
            Start another request
          </button>
        </>
      ) : (
        <>
          <ol className="form-progress" aria-label="Quote request progress">
            {["Route", "Shipment", "Timing", "Contact"].map((label, i) => (
              <li key={label} aria-current={step === i ? "step" : undefined}>
                {i + 1}. {label}
              </li>
            ))}
          </ol>
          <h2 id="quote-step-heading" tabIndex={-1}>
            {group.title}
          </h2>
          <p className="step-intro">
            {group.description} Required fields are marked *.
          </p>
          {kind === "courier" && step === 1 && (
            <p className="size-guidance">{courierConfig.sizeGuidance}</p>
          )}
          {step === 3 && (
            <div className="review-box">
              <div>
                <strong>Delivery type</strong>
                <span>
                  {quoteKinds.find((item) => item.id === kind)!.service}
                </span>
              </div>
              <div>
                <strong>From</strong>
                <span>{values["Pickup Location"]}</span>
              </div>
              <div>
                <strong>To</strong>
                <span>{values["Delivery Location"]}</span>
              </div>
              <div>
                <strong>Requested date</strong>
                <span>{values["Preferred Date"]}</span>
              </div>
              <p>Use Back to review or change your details.</p>
            </div>
          )}
          <div className="field-grid">
            {group.fields.map((field) => {
              const id = idFor(field.name);
              const required =
                field.required ||
                (field.name === "Temperature" &&
                  values["Temperature Service"] ===
                    "Refrigerated / frozen capacity requested");
              const props = {
                id,
                name: field.name,
                required,
                disabled: submitting,
                value: values[field.name] ?? "",
                "aria-invalid": !!errors[field.name],
                "aria-describedby": `${id}-hint`,
                onChange: (
                  event: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
                  >,
                ) =>
                  setValues((prev) => ({
                    ...prev,
                    [field.name]: event.target.value,
                  })),
              };
              return (
                <div
                  className={`field ${field.type === "textarea" ? "wide" : ""}`}
                  key={field.name}
                >
                  <label htmlFor={id}>
                    {field.label}
                    {required ? " *" : ""}
                  </label>
                  {field.options ? (
                    <select {...props}>
                      <option value="">Select an option</option>
                      {field.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea {...props} maxLength={field.max} rows={3} />
                  ) : (
                    <input
                      {...props}
                      type={field.type ?? "text"}
                      maxLength={field.max}
                      min={field.type === "number" ? 1 : undefined}
                      max={field.type === "number" ? 999999 : undefined}
                      autoComplete={
                        field.name === "Email"
                          ? "email"
                          : field.name === "Name"
                            ? "name"
                            : field.name === "Phone"
                              ? "tel"
                              : field.name === "Company Name"
                                ? "organization"
                                : undefined
                      }
                    />
                  )}
                  <p
                    id={`${id}-hint`}
                    className={
                      errors[field.name] ? "field-error" : "field-hint"
                    }
                  >
                    {errors[field.name] ?? field.help}
                  </p>
                </div>
              );
            })}
          </div>
          <div
            style={{
              position: "absolute",
              left: "-10000px",
              width: 1,
              height: 1,
              overflow: "hidden",
            }}
            aria-hidden="true"
          >
            <label htmlFor="botcheck">Leave this blank</label>
            <input
              id="botcheck"
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="form-actions">
            {step > 0 ? (
              <button
                className="btn secondary"
                disabled={submitting}
                type="button"
                onClick={() => {
                  captureCurrent();
                  setStep(step - 1);
                  setMessage("");
                  setTimeout(
                    () =>
                      document.getElementById("quote-step-heading")?.focus(),
                    0,
                  );
                }}
              >
                ← Back
              </button>
            ) : (
              <span />
            )}
            <button className="btn" disabled={submitting} type="submit">
              {submitting
                ? "Sending request…"
                : step < 3
                  ? "Continue"
                  : "Request a Quote"}
              <Icon name="arrow" size={18} />
            </button>
          </div>
          {message && (
            <p
              className={`form-status ${status}`}
              role="status"
              aria-live="polite"
            >
              {message}
            </p>
          )}
          <p className="privacy-note">
            We use your details to review and respond to this request. Please do
            not include sensitive documents.{" "}
            <a href="/privacy">Privacy information</a>. Availability and price
            are confirmed before booking.
          </p>
        </>
      )}
      <details className="manual-help">
        <summary>Prefer a person? Your entered details will stay here.</summary>
        <p style={{ marginTop: 12 }}>
          Call <a href={`tel:${contact.tel}`}>{contact.phone}</a> or{" "}
          <a href={mail}>open an email to {contact.email} with these details</a>
          . Review and send it in your email app.
        </p>
        {summary && (
          <pre
            style={{
              whiteSpace: "pre-wrap",
              overflowWrap: "anywhere",
              fontSize: 11,
              marginTop: 15,
            }}
          >
            {summary}
          </pre>
        )}
      </details>
      <noscript>
        <p className="noscript">
          Please enable JavaScript for this form, or call {contact.phone} /
          email {contact.email} for a quote.
        </p>
      </noscript>
    </form>
  );
}
