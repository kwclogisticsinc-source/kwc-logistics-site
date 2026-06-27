export const site = {
  name: "KWC Logistics Inc.",
  domain: "kwclogistics.ca",
  phone: "519-XXX-XXXX",
  email: "dispatch@kwclogistics.ca",
  location: "Based in Kitchener, Ontario",
  description:
    "Family-run Canadian logistics backed by 30 years of experience, moving freight mainly across Ontario with straight trucks, reefers, flatbeds, cargo vans, warehousing hubs, and partner-managed Canada-wide and North America coverage."
};

export type ItemPage = {
  slug: string;
  title: string;
  description: string;
  keywords?: string[];
};

export const serviceCategories = [
  {
    title: "Ontario Asset-Based Freight",
    description:
      "Our main lane strength is Ontario freight moved on our assets: straight trucks, reefer trucks, flatbeds, and box trucks.",
    items: [
      "Kitchener to Ottawa",
      "Kitchener to Windsor",
      "Kitchener to Niagara",
      "401 and 403 corridor coverage",
      "LTL, pallets, skids, retail freight",
      "Reefer and flatbed options"
    ]
  },
  {
    title: "Cargo Van & Hot Shot",
    description:
      "Fast local and regional moves when parts, boxes, small freight, or urgent shipments need quick communication.",
    items: [
      "Auto parts delivery",
      "Same-day and rush work",
      "Courier and small freight",
      "Commercial deliveries",
      "Direct point-to-point runs",
      "After-hours options when available"
    ]
  },
  {
    title: "Warehousing & Transfer Support",
    description:
      "A strong Ontario network supported by warehousing hubs, cross-dock options, transfers, and distribution planning.",
    items: [
      "Warehouse transfers",
      "Cross-docking",
      "Regional distribution",
      "Dedicated routes",
      "Retail replenishment",
      "Palletized freight"
    ]
  },
  {
    title: "Canada & North America Logistics",
    description:
      "When freight goes beyond our Ontario assets, our logistics team works with trusted partners to manage the move.",
    items: [
      "Canada-wide transportation",
      "North America freight options",
      "Cross-border support",
      "Long-distance freight",
      "North America home moving",
      "Partner carrier network"
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
    title: "Canada & North America Freight",
    description:
      "Canada-wide and North America freight solutions managed by KWC's logistics team through trusted transportation partners beyond our core Ontario asset network.",
    keywords: ["Southwestern Ontario logistics", "Canada freight", "North America freight"]
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
  { slug: "southwestern-ontario-logistics", title: "Southwestern Ontario Logistics", description: "Southwestern Ontario logistics across the 401 and 403 corridor, with Ontario asset-based freight and partner-managed Canada-wide coverage." }
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
    question: "Do you handle Canada-wide and North America freight?",
    answer:
      "Yes. Our main asset-based freight coverage is Ontario, and our logistics team works with trusted partners for Canada-wide and North America freight."
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
