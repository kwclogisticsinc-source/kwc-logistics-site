export const site = {
  name: "KWC Logistics Inc.",
  domain: "kwclogistics.ca",
  phone: "519-XXX-XXXX",
  email: "dispatch@kwclogistics.ca",
  location: "Based in Kitchener, Ontario",
  description:
    "KWC Logistics Inc. provides final mile, LTL, B2B, D2B, B2C, and specialized regional delivery solutions for businesses across Kitchener-Waterloo, Cambridge, and Southwestern Ontario."
};

export type ItemPage = {
  slug: string;
  title: string;
  description: string;
  keywords?: string[];
};

export const serviceCategories = [
  {
    title: "Final Mile & Regional Delivery",
    description:
      "Local and regional freight movement across Kitchener-Waterloo, Cambridge, Southwestern Ontario, and the 401/403 corridor.",
    items: [
      "Final mile delivery",
      "B2B, D2B, and B2C delivery",
      "Store replenishment",
      "Commercial orders",
      "Same-day and scheduled options",
      "Recurring local routes"
    ]
  },
  {
    title: "LTL & Palletized Freight",
    description:
      "Practical LTL freight support for skids, pallets, partial loads, warehouse transfers, and regional business shipments.",
    items: [
      "Palletized freight",
      "Warehouse transfers",
      "Cross-docking support",
      "Retail freight",
      "Dock-to-dock deliveries",
      "Liftgate coordination"
    ]
  },
  {
    title: "Specialized Local Freight",
    description:
      "Some freight does not fit into a standard courier box. KWC helps businesses move the awkward, urgent, recurring, and time-sensitive work.",
    items: [
      "Meal kit delivery support",
      "Auto parts delivery",
      "Equipment and supplies",
      "Medical and wellness supplies",
      "Food and beverage orders",
      "Hot shot delivery"
    ]
  },
  {
    title: "Regional Freight Network",
    description:
      "KWC focuses on Ontario regional delivery while coordinating trusted partner support for wider Canada and North America lanes when needed.",
    items: [
      "Straight truck solutions",
      "Reefer options",
      "Small flatbed options",
      "Cargo van hot shot",
      "401 and 403 corridor",
      "Partner-managed long lanes"
    ]
  }
];

export const services: ItemPage[] = [
  {
    slug: "final-mile-delivery",
    title: "Final Mile Delivery",
    description:
      "Final mile delivery in Kitchener and Waterloo Region for businesses, stores, suppliers, and local customers who need the last stretch handled properly.",
    keywords: ["final mile delivery Kitchener", "last mile delivery Waterloo Region"]
  },
  {
    slug: "b2b-delivery",
    title: "B2B Delivery",
    description:
      "Business-to-business delivery between warehouses, offices, retail stores, suppliers, and job sites across Southwestern Ontario.",
    keywords: ["B2B delivery Kitchener", "Waterloo Region delivery"]
  },
  { slug: "d2b-delivery", title: "D2B Delivery", description: "Direct-to-business delivery for commercial orders, supplier shipments, store replenishment, and regional business routes." },
  { slug: "b2c-delivery", title: "B2C Delivery", description: "Business-to-customer final mile delivery for local brands, retailers, e-commerce operations, and specialty deliveries." },
  {
    slug: "auto-parts-delivery",
    title: "Auto Parts Delivery",
    description:
      "Fast auto parts delivery for shops, dealers, mechanics, suppliers, and customers who need parts moved without delay.",
    keywords: ["auto parts delivery Kitchener", "same-day auto parts delivery"]
  },
  {
    slug: "ltl-freight",
    title: "LTL Freight",
    description:
      "LTL freight support for palletized shipments, partial loads, and regional freight moving through Ontario lanes.",
    keywords: ["LTL freight Kitchener", "palletized freight Ontario"]
  },
  {
    slug: "reefer-transportation",
    title: "Reefer Freight",
    description:
      "Temperature-aware reefer freight options for food, beverage, meal kit, and commercial shipments when available."
  },
  {
    slug: "warehouse-transfers",
    title: "Warehouse Transfers",
    description:
      "Warehouse transfers, cross-docking support, and practical freight movement between storage, fulfillment, and distribution points.",
    keywords: ["warehouse transfers Ontario"]
  },
  {
    slug: "same-day-delivery",
    title: "Same-Day Delivery",
    description:
      "Same-day delivery for urgent local shipments, business orders, auto parts, supplies, and time-sensitive freight."
  },
  {
    slug: "dedicated-routes",
    title: "Dedicated Routes",
    description:
      "Scheduled and dedicated route support for businesses that need repeat pickup and delivery coverage."
  },
  {
    slug: "meal-kit-delivery",
    title: "Meal Kit Delivery Support",
    description:
      "Delivery support for meal kit companies and food-related businesses that need reliable local distribution."
  },
  { slug: "retail-delivery", title: "Retail Delivery", description: "Retail delivery, store replenishment, local customer delivery, and recurring commercial delivery support." },
  { slug: "small-flatbed-delivery", title: "Small Flatbed Delivery", description: "Small flatbed delivery options for equipment, materials, commercial freight, and regional specialty loads." },
  {
    slug: "canada-us-freight",
    title: "Partner-Managed Canada & North America Freight",
    description:
      "Canada-wide and North America freight solutions managed by KWC's logistics team through trusted transportation partners beyond our core Ontario asset network.",
    keywords: ["Southwestern Ontario logistics", "Canada freight", "North America freight"]
  }
];

export const industries: ItemPage[] = [
  { slug: "meal-kit-companies", title: "Meal Kit Companies", description: "Delivery support for meal kit companies that need dependable local and regional distribution." },
  { slug: "food-beverage-brands", title: "Food and Beverage Brands", description: "Regional delivery support for food and beverage businesses that need timing, communication, and care." },
  { slug: "e-commerce-businesses", title: "E-commerce Businesses", description: "Final mile, B2C, local courier, and regional delivery support for e-commerce operations." },
  { slug: "retail-stores", title: "Retail Stores", description: "Retail delivery, store transfers, replenishment, final mile, and commercial delivery support." },
  { slug: "furniture-appliance-companies", title: "Furniture and Appliance Companies", description: "Delivery support for bulky items, specialty local freight, and scheduled regional deliveries." },
  { slug: "warehouses-distribution-centres", title: "Warehouses and Distribution Centres", description: "Warehouse transfers, cross-docking, route support, and pallet movement for warehouse teams." },
  { slug: "manufacturers", title: "Manufacturers", description: "Regional freight and B2B delivery support for manufacturers across Southwestern Ontario." },
  { slug: "auto-parts-suppliers", title: "Auto Parts Suppliers", description: "Fast auto parts delivery for shops, suppliers, dealers, mechanics, and commercial customers." },
  { slug: "medical-wellness-suppliers", title: "Medical and Wellness Suppliers", description: "Practical supply delivery support for medical, wellness, and commercial customers." },
  { slug: "local-businesses", title: "Local Businesses Needing Recurring Deliveries", description: "Recurring B2B, D2B, B2C, and specialized local delivery routes for growing businesses." }
];

export const serviceAreas: ItemPage[] = [
  { slug: "kitchener-logistics", title: "Kitchener Logistics", description: "Kitchener logistics, courier, final mile, B2B delivery, warehouse transfer, and freight support from a local company." },
  { slug: "waterloo-logistics", title: "Waterloo Logistics", description: "Waterloo logistics and delivery support for businesses, students, homeowners, stores, and local freight." },
  { slug: "cambridge-logistics", title: "Cambridge Logistics", description: "Cambridge logistics for B2B delivery, palletized freight, courier work, and regional distribution." },
  { slug: "guelph-logistics", title: "Guelph Logistics", description: "Guelph delivery and freight support for business shipments, same-day work, and local routes." },
  { slug: "brantford-logistics", title: "Brantford Logistics", description: "Brantford logistics for freight, business delivery, warehouse transfers, and scheduled routes." },
  { slug: "london-logistics", title: "London Logistics", description: "London Ontario logistics support for regional freight, dedicated routes, and long-distance moves." },
  { slug: "hamilton-logistics", title: "Hamilton Logistics", description: "Hamilton logistics, freight, delivery, and commercial transport support from a Kitchener-based team." },
  { slug: "mississauga-logistics", title: "Mississauga Logistics", description: "Mississauga delivery and freight support connecting Waterloo Region with the GTA." },
  { slug: "southwestern-ontario-logistics", title: "Southwestern Ontario Logistics", description: "Southwestern Ontario logistics across the 401 and 403 corridor, with Ontario asset-based freight and partner-managed Canada-wide coverage." }
];

export const faqs = [
  {
    question: "What size shipment can KWC Logistics help with?",
    answer:
      "KWC focuses on final mile, LTL, palletized freight, commercial orders, meal kits, auto parts, store replenishment, and specialized regional deliveries."
  },
  {
    question: "Does KWC work with B2B and B2C deliveries?",
    answer:
      "Yes. KWC supports B2B, D2B, and B2C deliveries for local businesses, retailers, suppliers, warehouses, and e-commerce operations."
  },
  {
    question: "What makes KWC different?",
    answer:
      "Quick communication, affordability, and service. With 30 years of logistics experience, KWC understands freight costs and keeps the process direct."
  },
  {
    question: "Do you handle freight outside Ontario?",
    answer:
      "Ontario regional freight is the main focus. For Canada-wide and North America lanes, KWC can coordinate partner-managed options where it makes sense."
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
