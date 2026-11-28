export type QuoteKind = "courier" | "freight" | "regular" | "logistics";
export const quickQuoteTypes = [
  { id: "bulk-packages", label: "B2B bulk packages", kind: "courier" },
  { id: "residential", label: "Residential pallet or large item", kind: "freight", freightService: "Residential freight delivery" },
  { id: "pallets", label: "Palletized freight", kind: "freight", freightService: "Shared-capacity freight (LTL)" },
  { id: "bulky", label: "Large or bulky freight", kind: "freight", freightService: "Large or bulky freight" },
  { id: "refrigerated", label: "Refrigerated freight", kind: "freight", freightService: "Refrigerated freight", temperature: true },
  { id: "full-truckload", label: "Full truckload", kind: "freight", freightService: "Full truckload (FTL)" },
  { id: "tailgate", label: "Tailgate or liftgate delivery", kind: "freight", freightService: "Tailgate or liftgate delivery" },
  { id: "dedicated", label: "Dedicated truck", kind: "freight", freightService: "Dedicated truck" },
  { id: "regular", label: "Recurring business deliveries", kind: "regular" },
  { id: "brokerage", label: "Partner-arranged freight", kind: "freight", freightService: "Partner-arranged freight" },
  { id: "other", label: "Other freight", kind: "freight", freightService: "Help me plan" },
] as const satisfies readonly {
  id: string; label: string; kind: QuoteKind; freightService?: string; temperature?: boolean;
}[];

export const quoteKinds: { id: QuoteKind; label: string; service: string }[] = [
  { id: "courier", label: "B2B bulk packages", service: "B2B bulk package delivery" },
  {
    id: "freight",
    label: "Freight",
    service: "Freight & specialized delivery",
  },
  { id: "regular", label: "Regular deliveries", service: "Regular deliveries" },
  { id: "logistics", label: "Logistics help", service: "Logistics management" },
];
// Operational limits remain unset until KWC approves them. Never infer a vehicle limit from a UI label.
export const courierConfig: {
  sizeGuidance: string;
  maxWeightKg: number | null;
  maxDimensionsCm: [number, number, number] | null;
} = {
  sizeGuidance:
    "For business package batches, include package count, approximate sizes, total weight and delivery stops. We’ll confirm suitable cargo van capacity.",
  maxWeightKg: null,
  maxDimensionsCm: null,
};
export type QuoteField = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  options?: string[];
  max?: number;
  min?: number;
  help?: string;
};
export const services = quoteKinds.map((item) => item.service);
export const modes = ["Road"];
export function kindFor(service: string): QuoteKind {
  return quoteKinds.find((item) => item.service === service)?.id ?? "courier";
}
export function fieldsFor(
  kind: QuoteKind,
): { title: string; description: string; fields: QuoteField[] }[] {
  const recurring = kind === "regular";
  const freight = kind === "freight" || kind === "logistics";
  return [
    {
      title: recurring ? "Where Will Your Deliveries Go?" : "Where’s It Going?",
      description:
        "A city or postal code is enough to start. Add full addresses if you have them.",
      fields: [
        {
          name: "Pickup Location",
          label: recurring
            ? "Pickup area"
            : "Pickup address, city or postal code",
          required: true,
          max: 300,
        },
        {
          name: "Delivery Location",
          label: recurring
            ? "Delivery regions"
            : "Destination address, city or postal code",
          required: true,
          max: 300,
        },
        ...(freight
          ? [
              {
                name: "Freight Service",
                label: "Freight service",
                help: "Choose LTL for shared truck space or full truckload for a truck reserved for your shipment. If you’re unsure, choose Help me plan.",
                options: [
                  "Shared-capacity freight (LTL)",
                  "Full truckload (FTL)",
                  "Large or bulky freight",
                  "Refrigerated freight",
                  "Dedicated truck",
                  "Tailgate or liftgate delivery",
                  "Expedited road freight",
                  "Final-mile delivery",
                  "Residential freight delivery",
                  "Partner-arranged freight",
                  "Help me plan",
                ],
              },
            ]
          : []),
      ],
    },
    {
      title: recurring
        ? "What Does a Typical Route Look Like?"
        : "What Are You Sending?",
      description: freight
        ? "Pallets, commodity, measurements and access help us plan suitable equipment."
        : "Approximate details are welcome. We can work through the rest with you.",
      fields: [
        {
          name: "Freight Type",
          label: freight
            ? "Commodity / what’s on the pallets?"
            : "What Are You Sending?",
          required: true,
          max: 200,
        },
        {
          name: "Item Count",
          label: recurring
            ? "Approximate items per collection"
            : freight
              ? "Pallet or piece count"
              : "Number of packages in the batch",
          type: "number",
          required: !recurring,
          min: kind === "courier" ? 2 : 1,
        },
        {
          name: "Weight",
          label: "Total weight (include kg or lb)",
          max: 100,
          help: freight
            ? "Include the weight of pallets and packaging. An estimate is fine, or enter Not sure."
            : "Approximate is fine, or enter Not sure.",
        },
        {
          help: freight
            ? "Measure the loaded pallet or piece at its widest points, including any overhang. An estimate is fine."
            : "Approximate is fine, or enter Not sure.",
          name: "Dimensions",
          label: freight
            ? "Loaded length × width × height per pallet or piece (cm or in)"
            : "Package dimensions (L × W × H, include cm or in)",
          max: 300,
        },
        ...(recurring
          ? [
              {
                name: "Number of Stops",
                label: "Approximate number of stops",
                max: 100,
                help: "Per route or day. Enter Not sure if still planning.",
              },
              {
                name: "Handling Requirements",
                label: "Handling or temperature requirements",
                max: 500,
                help: "Tell us about fragile items, unloading, food handling or a required temperature range. Suitability is confirmed before booking.",
              },
              {
                name: "Approximate Volume",
                label: "Approximate volume",
                required: true,
                max: 200,
                help: "e.g. about 20 orders per collection, or Not sure",
              },
            ]
          : []),
        ...(freight
          ? [
              {
                name: "Pickup Access",
                label: "Pickup access",
                options: [
                  "Loading dock",
                  "Ground level / no dock",
                  "Inside / stairs",
                  "Please advise",
                ],
              },
              {
                name: "Delivery Site",
                label: "Delivery location type",
                options: ["Commercial", "Residential", "Multiple locations", "Please advise"],
              },
              {
                name: "Delivery Access",
                label: "Delivery access",
                options: [
                  "Loading dock",
                  "Ground level / no dock",
                  "Inside / stairs",
                  "Multiple locations",
                  "Please advise",
                ],
              },
              {
                name: "Liftgate",
                label: "Tailgate / liftgate needed?",
                help: "Choose the stop that needs the truck to lower freight to ground level. If you’re unsure, choose Please advise.",
                options: [
                  "Not required",
                  "Pickup",
                  "Delivery",
                  "Both",
                  "Please advise",
                ],
              },
              {
                name: "Handling",
                label: "Extra handling or appointments",
                max: 500,
                help: "Inside delivery, two-person handling, wrapping, palletizing, placement or packaging removal—tell us what is needed.",
              },
              {
                name: "Temperature Service",
                label: "Temperature control",
                options: [
                  "Not required",
                  "Refrigerated / frozen capacity requested",
                ],
              },
              {
                name: "Temperature",
                label: "Temperature requirements (if applicable)",
                max: 200,
                help: "Include °C / °F, tolerances and any monitoring requirements.",
              },
            ]
          : []),
        {
          name: "Shipment Details",
          label: "Anything else we should know?",
          type: "textarea",
          max: 3000,
          help: "No patient information, passwords or sensitive documents.",
        },
      ],
    },
    {
      title: recurring
        ? "When Would You Like to Start?"
        : "When Do You Need It?",
      description:
        "Timing is requested here and confirmed with you before booking.",
      fields: [
        {
          name: "Preferred Date",
          label: recurring ? "Preferred start date" : "Requested pickup date",
          type: "date",
          required: true,
        },
        ...(!recurring
          ? [
              {
                name: "Delivery Date",
                label: "Required delivery date (optional)",
                type: "date",
              },
            ]
          : []),
        {
          name: "Service Preference",
          label: recurring ? "Service preference" : "Delivery preference",
          options: [
            "Same-day if available",
            "Next-day if available",
            "Scheduled / flexible",
            "Urgent / direct",
            "Please advise",
          ],
          required: true,
        },
        ...(recurring
          ? [
              {
                name: "Frequency",
                label: "How often?",
                required: true,
                options: [
                  "Weekdays",
                  "Several times a week",
                  "Weekly",
                  "Monthly",
                  "Varies / let’s discuss",
                  "Not sure",
                ],
              },
              {
                name: "Route Schedule",
                label: "Preferred days or delivery windows",
                max: 500,
              },
            ]
          : []),
      ],
    },
    {
      title: "How Can We Reach You?",
      description:
        "We’ll review your request and contact you with the next steps. No account needed.",
      fields: [
        { name: "Name", label: "Your name", required: true, max: 120 },
        { name: "Company Name", label: "Company (optional)", max: 160 },
        {
          name: "Email",
          label: "Email",
          type: "email",
          required: true,
          max: 254,
        },
        { name: "Phone", label: "Phone (optional)", type: "tel", max: 40 },
      ],
    },
  ];
}
export const quoteGroups = fieldsFor("courier");
export function validateQuote(form: FormData) {
  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};
  const submittedService = form.get("Service");
  const service = (submittedService === "Courier delivery" || submittedService === "B2B bulk parcel delivery") ? "B2B bulk package delivery" : submittedService;
  if (
    typeof service !== "string" ||
    !services.includes(service) ||
    form.getAll("Service").length !== 1
  )
    errors.Service = "Choose a delivery type.";
  const kind = kindFor(typeof service === "string" ? service : "");
  values.Service = typeof service === "string" ? service : "";
  for (const field of fieldsFor(kind).flatMap((group) => group.fields)) {
    const entries = form.getAll(field.name);
    const raw = entries[0];
    if (entries.length > 1 || (raw != null && typeof raw !== "string")) {
      errors[field.name] = "Enter one text value.";
      continue;
    }
    const value = typeof raw === "string" ? raw.trim() : "";
    values[field.name] = value;
    if (field.required && !value)
      errors[field.name] = "This field is required.";
    else if (value.length > (field.max ?? 300))
      errors[field.name] = "Please shorten this field.";
    else if (value && field.options && !field.options.includes(value))
      errors[field.name] = "Choose an available option.";
    else if (
      value &&
      field.type === "date" &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(value) ||
        !Number.isFinite(Date.parse(value)) ||
        new Date(value).toISOString().slice(0, 10) !== value)
    )
      errors[field.name] = "Enter a valid date.";
  }
  if (values.Email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.Email))
    errors.Email = "Enter a valid email address.";
  if (values.Phone && !/^[+\d().\s\-xext#]{7,40}$/i.test(values.Phone))
    errors.Phone = "Enter a valid phone number.";
  if (values["Item Count"] && !/^[1-9]\d{0,5}$/.test(values["Item Count"]))
    errors["Item Count"] = "Enter a whole number from 1 to 999999.";
  else if (kind === "courier" && values["Item Count"] === "1")
    errors["Item Count"] = "Enter the number of packages in your business shipment. Bulk delivery requires multiple packages.";
  if (
    values["Delivery Date"] &&
    values["Preferred Date"] &&
    values["Delivery Date"] < values["Preferred Date"]
  )
    errors["Delivery Date"] = "Delivery cannot be before pickup.";
  if (
    values["Temperature Service"] ===
      "Refrigerated / frozen capacity requested" &&
    !values.Temperature
  )
    errors.Temperature = "Include the required range and temperature units.";
  return { values, errors };
}
