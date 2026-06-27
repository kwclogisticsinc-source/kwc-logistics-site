export const site = {
  name: "KWC Logistics Inc.",
  domain: "kwclogistics.ca",
  phone: "519-XXX-XXXX",
  email: "dispatch@kwclogistics.ca",
  location: "Based in Kitchener, Ontario",
  description:
    "Family-run Canadian logistics backed by 30 years of experience, serving businesses, homeowners, seniors, and everyday customers across Kitchener, Waterloo Region, Southwestern Ontario, Canada, and U.S. lanes."
};

export type ItemPage = {
  slug: string;
  title: string;
  description: string;
  keywords?: string[];
};

export const businessDelivery = [
  "Final mile delivery",
  "Last mile delivery",
  "B2B delivery",
  "Courier services",
  "Same-day delivery",
  "Scheduled routes",
  "Retail deliveries",
  "Floral delivery",
  "Meal kit delivery",
  "Medical and supply delivery",
  "E-commerce delivery",
  "Auto parts delivery",
  "Small business delivery"
];

export const freightTrucking = [
  "LTL freight",
  "Full truckload",
  "Reefer transportation",
  "Dry van",
  "Box truck",
  "Dedicated routes",
  "Hot shot delivery",
  "Warehouse transfers",
  "Cross-docking",
  "Palletized freight",
  "Regional distribution"
];

export const homeSpecialty = [
  "Senior moving assistance",
  "Furniture delivery",
  "Appliance delivery",
  "White glove delivery",
  "Small residential freight",
  "Apartment and condo moves",
  "Specialty item delivery",
  "One-time moves for regular customers"
];

export const canadaUsTransport = [
  "Ontario freight",
  "Canada-wide transportation",
  "U.S. transportation lanes",
  "Florida moving and freight options",
  "Cross-border freight support",
  "Long-distance freight",
  "Partner carrier network"
];

export const serviceCategories = [
  {
    title: "Business Delivery",
    description:
      "Daily delivery work for businesses that need quick communication, fair pricing, and someone accountable.",
    items: businessDelivery
  },
  {
    title: "Freight & Trucking",
    description:
      "Available capacity through a practical fleet and carrier network for pallets, routes, auto parts, and truckload moves.",
    items: freightTrucking
  },
  {
    title: "Home & Specialty Moves",
    description:
      "Help for seniors, homeowners, renters, and customers moving items that need extra care.",
    items: homeSpecialty
  },
  {
    title: "Canada & U.S. Transport",
    description:
      "Trusted transportation partners for Ontario, Canada-wide, and U.S. freight lanes.",
    items: canadaUsTransport
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
  {
    slug: "courier-services",
    title: "Courier Services",
    description:
      "Local courier services for one box, time-sensitive packages, commercial deliveries, and small business delivery work."
  },
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
    title: "Reefer Transportation",
    description:
      "Temperature-aware reefer transportation options through available capacity and trusted carrier partners."
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
    slug: "senior-moving-assistance",
    title: "Senior Moving Assistance",
    description:
      "Support for seniors, homeowners, and caregivers moving furniture, boxes, apartment items, and specialty pieces with careful communication."
  },
  {
    slug: "meal-kit-delivery",
    title: "Meal Kit Delivery",
    description:
      "Delivery support for meal kit companies and food-related businesses that need reliable local distribution."
  },
  {
    slug: "floral-delivery",
    title: "Floral Delivery",
    description:
      "Floral delivery support for florists and event suppliers that need careful handling and local accountability."
  },
  {
    slug: "canada-us-freight",
    title: "Canada & U.S. Freight",
    description:
      "Canada and U.S. freight solutions through a fleet and carrier network, including Ontario, long-distance, Florida, and cross-border lanes.",
    keywords: ["Southwestern Ontario logistics", "Canada U.S. freight"]
  }
];

export const industries: ItemPage[] = [
  { slug: "meal-kit-companies", title: "Meal Kit Companies", description: "Delivery support for meal kit companies that need dependable local and regional distribution." },
  { slug: "florists", title: "Florists", description: "Careful local delivery support for florists, event work, and commercial floral orders." },
  { slug: "small-businesses", title: "Small Businesses", description: "Courier, B2B, and freight support for small businesses that need a logistics partner who answers." },
  { slug: "warehouses", title: "Warehouses", description: "Warehouse transfers, cross-docking, route support, and pallet movement for warehouse teams." },
  { slug: "manufacturers", title: "Manufacturers", description: "Regional freight and B2B delivery support for manufacturers across Southwestern Ontario." },
  { slug: "retail-stores", title: "Retail Stores", description: "Retail delivery, store transfers, final mile, and commercial delivery support." },
  { slug: "medical-suppliers", title: "Medical Suppliers", description: "Practical supply delivery support for medical suppliers and commercial customers." },
  { slug: "auto-parts-suppliers", title: "Auto Parts Suppliers", description: "Fast auto parts delivery for shops, suppliers, dealers, mechanics, and commercial customers." },
  { slug: "furniture-stores", title: "Furniture Stores", description: "Furniture delivery, white glove delivery, and specialty item delivery support." },
  { slug: "seniors-homeowners", title: "Seniors & Homeowners", description: "Moving help and one-time delivery options for seniors, homeowners, renters, and everyday customers." },
  { slug: "e-commerce-companies", title: "E-commerce Companies", description: "Final mile, local courier, and regional delivery support for e-commerce operations." },
  { slug: "contractors", title: "Contractors", description: "Delivery support for tools, materials, supplies, and job-site freight." },
  { slug: "homeowners", title: "Homeowners", description: "One-time moves, furniture delivery, appliance delivery, and residential freight help." }
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
  { slug: "southwestern-ontario-logistics", title: "Southwestern Ontario Logistics", description: "Southwestern Ontario logistics across local, regional, Canada-wide, and U.S. lanes." }
];

export const faqs = [
  {
    question: "What size shipment can KWC Logistics help with?",
    answer:
      "One box, one pallet, one room, one truckload, or a cross-border shipment. No customer too small. No freight too complicated."
  },
  {
    question: "Does KWC work with both businesses and regular customers?",
    answer:
      "Yes. KWC serves businesses, seniors, homeowners, and everyday customers who need something moved."
  },
  {
    question: "What makes KWC different?",
    answer:
      "Quick communication, affordable options, and service. With 30 years of logistics experience, we understand freight costs and help customers avoid being taken advantage of."
  },
  {
    question: "Do you handle Canada and U.S. freight?",
    answer:
      "Yes. KWC can help with Canada and U.S. freight solutions through available capacity and trusted transportation partners."
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
