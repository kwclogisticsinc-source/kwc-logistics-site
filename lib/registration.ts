export const registration = {
  customer: {
    title: "Customer registration request",
    fields: [
      { name: "Name", required: true },
      { name: "Email", required: true, type: "email" },
      { name: "Company", required: true },
      { name: "Operating city", required: true },
      { name: "Shipping needs and frequency", required: true, type: "textarea" },
    ],
  },
  driver: {
    title: "Drive with KWC application",
    fields: [
      { name: "Name", required: true },
      { name: "Email", required: true, type: "email" },
      { name: "Operating city", required: true },
      { name: "Application type", required: true, options: ["Straight-truck driver", "Straight-truck owner-operator"] },
      { name: "Experience, equipment and availability", required: true, type: "textarea" },
    ],
  },
} as const;

export type RegistrationKind = keyof typeof registration;

export function validateRegistration(form: FormData, kind: RegistrationKind) {
  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};
  for (const field of registration[kind].fields) {
    const entries = form.getAll(field.name);
    const raw = entries[0];
    const value = typeof raw === "string" ? raw.trim() : "";
    values[field.name] = value;
    const limit = "type" in field && field.type === "textarea" ? 1200 : 250;
    if (entries.length !== 1 || !value || value.length > limit)
      errors[field.name] = "Enter one valid value.";
    else if ("options" in field && !field.options.some((item) => item === value))
      errors[field.name] = "Choose an application type.";
  }
  if (values.Email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.Email))
    errors.Email = "Enter a valid email address.";
  return { values, errors };
}
