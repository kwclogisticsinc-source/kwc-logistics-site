export const site = {
  name: "KWC Logistics Inc.",
  domain: "kwclogistics.ca",
  phone: "519-XXX-XXXX",
  email: "dispatch@kwclogistics.ca",
  location: "Based in Kitchener, Ontario",
  description:
    "KWC Logistics Inc. is a personal professional LTL and final mile carrier using hub-based Southern Ontario coverage, consolidation, and direct dispatch to move freight simply and affordably."
};

export type ItemPage = {
  slug: string;
  title: string;
  description: string;
  keywords?: string[];
};

export const serviceCategories = [
  {
    title: "Final Mile Delivery",
    description:
      "Store, business, warehouse, and customer deliveries handled with clear communication from pickup to proof of delivery.",
    items: [
      "Retail and commercial delivery",
      "Business-to-business freight",
      "Business-to-customer delivery",
      "Store replenishment",
      "Scheduled delivery windows",
      "Proof-of-delivery communication"
    ]
  },
  {
    title: "LTL & Pallet Freight",
    description:
      "Regional LTL service for pallets, skids, partial loads, and commercial shipments moving through Southern Ontario with consolidation where it saves time and cost.",
    items: [
      "Palletized freight",
      "Partial loads",
      "Dock-to-dock freight",
      "Dock-to-dock deliveries",
      "Liftgate coordination",
      "Retail freight",
      "Commercial orders"
    ]
  },
  {
    title: "Warehousing & Cross-Dock",
    description:
      "Support for freight that needs staging, sorting, consolidation, transfer, or local distribution through dock and hub operations.",
    items: [
      "Warehouse transfers",
      "Cross-docking",
      "Pallet staging",
      "Route loading",
      "Distribution support",
      "Short-term handling"
    ]
  },
  {
    title: "Dedicated & Expedited",
    description:
      "Dedicated routes, recurring delivery work, and urgent same-day movement for businesses that need dependable capacity.",
    items: [
      "Dedicated routes",
      "Same-day options",
      "Cargo van hot shot",
      "Auto parts runs",
      "Meal kit support",
      "Time-sensitive freight"
    ]
  }
];

export const services: ItemPage[] = [
  {
    slug: "final-mile-delivery",
    title: "Final Mile Delivery",
    description:
      "Final mile delivery for retailers, suppliers, warehouses, e-commerce brands, and local businesses across Kitchener-Waterloo, Cambridge, and Southern Ontario.",
    keywords: ["final mile delivery Kitchener", "last mile delivery Waterloo Region"]
  },
  {
    slug: "b2b-delivery",
    title: "B2B Delivery",
    description:
      "Business-to-business delivery between docks, warehouses, stores, suppliers, service locations, and commercial customers.",
    keywords: ["B2B delivery Kitchener", "Waterloo Region delivery"]
  },
  {
    slug: "ltl-freight",
    title: "LTL Freight",
    description:
      "LTL freight support for palletized shipments, partial loads, consolidation, and regional freight moving through Southern Ontario lanes.",
    keywords: ["LTL freight Kitchener", "palletized freight Ontario"]
  },
  {
    slug: "warehouse-transfers",
    title: "Warehouse Transfers",
    description:
      "Warehouse transfers, cross-dock support, dock-to-dock freight, and practical movement between storage, fulfillment, and distribution points.",
    keywords: ["warehouse transfers Ontario"]
  },
  {
    slug: "dedicated-routes",
    title: "Dedicated Routes",
    description:
      "Scheduled route support for businesses that need consistent pickup, delivery, store replenishment, or regional distribution coverage."
  },
  {
    slug: "same-day-delivery",
    title: "Same-Day Delivery",
    description:
      "Same-day delivery for urgent local shipments, business orders, auto parts, supplies, and time-sensitive freight."
  },
  {
    slug: "auto-parts-delivery",
    title: "Auto Parts Delivery",
    description:
      "Fast auto parts delivery for dealers, parts suppliers, repair shops, service departments, and commercial customers.",
    keywords: ["auto parts delivery Kitchener", "same-day auto parts delivery"]
  },
  {
    slug: "meal-kit-delivery",
    title: "Meal Kit Delivery Support",
    description:
      "Delivery support for meal kit companies and food-related businesses that need reliable local distribution."
  },
  { slug: "retail-delivery", title: "Retail Delivery", description: "Retail delivery, store replenishment, local customer delivery, and recurring commercial delivery support." },
  { slug: "personal-freight-delivery", title: "Personal Freight Delivery", description: "Practical delivery support for regular customers moving boxed goods, furniture, equipment, parts, or items that need more care than a parcel courier." }
];

export const industries: ItemPage[] = [
  { slug: "meal-kit-companies", title: "Meal Kit Companies", description: "Delivery support for meal kit companies that need dependable local and regional distribution." },
  { slug: "food-beverage-brands", title: "Food and Beverage Brands", description: "Regional delivery support for food and beverage businesses that need timing, communication, and care." },
  { slug: "e-commerce-businesses", title: "E-commerce Businesses", description: "Final mile, customer delivery, local courier, and regional delivery support for e-commerce operations." },
  { slug: "retail-stores", title: "Retail Stores", description: "Retail delivery, store transfers, replenishment, final mile, and commercial delivery support." },
  { slug: "furniture-appliance-companies", title: "Furniture and Appliance Companies", description: "Delivery support for bulky items, specialty local freight, and scheduled regional deliveries." },
  { slug: "warehouses-distribution-centres", title: "Warehouses and Distribution Centres", description: "Warehouse transfers, cross-docking, route support, and pallet movement for warehouse teams." },
  { slug: "manufacturers", title: "Manufacturers", description: "Regional freight and B2B delivery support for manufacturers across Southern Ontario." },
  { slug: "auto-parts-suppliers", title: "Auto Parts Suppliers", description: "Fast auto parts delivery for shops, suppliers, dealers, mechanics, and commercial customers." },
  { slug: "medical-wellness-suppliers", title: "Medical and Wellness Suppliers", description: "Practical supply delivery support for medical, wellness, and commercial customers." },
  { slug: "local-businesses", title: "Local Businesses With Recurring Deliveries", description: "Recurring B2B, final mile, retail, and specialized local delivery routes for growing businesses." },
  { slug: "personal-customers", title: "Personal Customers", description: "Delivery help for regular customers who need an item moved simply, clearly, and without getting lost in a carrier system." }
];

export const serviceAreas: ItemPage[] = [
  { slug: "kitchener-logistics", title: "Kitchener Logistics", description: "Kitchener logistics, courier, final mile, B2B delivery, warehouse transfer, and freight support from a local company." },
  { slug: "waterloo-logistics", title: "Waterloo Logistics", description: "Waterloo logistics and delivery support for businesses, stores, personal freight, and local LTL shipments." },
  { slug: "cambridge-logistics", title: "Cambridge Logistics", description: "Final mile logistics in Cambridge for B2B delivery, palletized freight, warehouse transfers, and regional distribution." },
  { slug: "guelph-logistics", title: "Guelph Logistics", description: "Guelph delivery and freight support for business shipments, same-day work, and local routes." },
  { slug: "brantford-logistics", title: "Brantford Logistics", description: "Brantford logistics for freight, business delivery, warehouse transfers, and scheduled routes." },
  { slug: "london-logistics", title: "London Logistics", description: "London Ontario logistics support for regional freight, dedicated routes, and long-distance moves." },
  { slug: "hamilton-logistics", title: "Hamilton Logistics", description: "Hamilton logistics, freight, delivery, and commercial transport support from a Kitchener-based team." },
  { slug: "mississauga-logistics", title: "Mississauga Logistics", description: "Mississauga delivery and freight support connecting Waterloo Region with the GTA." },
  { slug: "southwestern-ontario-logistics", title: "Southern Ontario Logistics", description: "Southern Ontario logistics through Kitchener, London, Windsor, Toronto, Kingston, and surrounding regional lanes, with final mile, LTL, warehouse transfer, and commercial delivery support." }
];

export const faqs = [
  {
    question: "What size shipment can KWC Logistics help with?",
    answer:
      "KWC focuses on final mile, LTL, palletized freight, commercial orders, warehouse transfers, meal kit support, auto parts, recurring routes, and personal freight that is too much for parcel courier."
  },
  {
    question: "Does KWC handle both B2B and final mile delivery?",
    answer:
      "Yes. KWC supports B2B, retail, e-commerce, warehouse, supplier, and final mile deliveries for businesses across Southern Ontario."
  },
  {
    question: "What makes KWC different?",
    answer:
      "Direct dispatch, consolidation where it makes sense, fewer unnecessary broker layers, and 30 years of logistics experience behind the planning."
  },
  {
    question: "How does KWC help control freight costs?",
    answer:
      "KWC looks at lane, timing, equipment, route density, and consolidation options before quoting. The goal is to move freight properly without adding avoidable layers."
  },
  {
    question: "Can KWC handle same-day delivery?",
    answer:
      "Yes. Same-day options depend on pickup time, freight details, lane, and available capacity."
  },
  {
    question: "Do you publish a full address?",
    answer:
      "Not yet. The site lists KWC as based in Kitchener, Ontario, and provides phone and email contact details."
  }
];
