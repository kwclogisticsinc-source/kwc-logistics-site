import { stock } from "@/components/StockPhoto";

export const site = {
  name: "KWC Logistics Inc.",
  domain: "kwclogistics.ca",
  phone: "416-300-8473",
  email: "dispatch@kwclogistics.ca",
  location: "Based in Kitchener, Ontario",
  description:
    "KWC Logistics Inc is a family-run Ontario logistics company providing local LTL, FTL, warehousing, cross-docking, dedicated routes, and expedited freight."
};

export type ItemPage = {
  slug: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
  industries: string[];
  customers: string[];
  keywords?: string[];
};

export const localLtlOptions = [
  {
    name: "LTL Direct",
    time: "2 hrs",
    description: "Priority local cartage for freight that needs the fastest practical pickup and delivery window."
  },
  {
    name: "LTL Rush",
    time: "4 hrs",
    description: "Expedited LTL movement for time-sensitive pallets, parts, skids, and commercial freight."
  },
  {
    name: "LTL Sameday",
    time: "By 5PM",
    description: "Same-day local LTL service for scheduled freight that needs to move before close of business."
  }
];

export const serviceCategories: ItemPage[] = [
  {
    slug: "ltl-freight",
    title: "Local LTL Services",
    description: "Fast local LTL and cartage freight service for Kitchener, the GTA, and Southern Ontario, including Direct, Rush, and Sameday options.",
    image: stock.pallets,
    benefits: ["LTL Direct: 2 hrs", "LTL Rush: 4 hrs", "LTL Sameday: by 5PM", "Kitchener-area freight quotes"],
    industries: ["Manufacturing", "Wholesale", "Retail", "Industrial"],
    customers: ["Warehouses", "Distributors", "Manufacturers", "Retailers"],
    keywords: ["LTL freight Kitchener", "local cartage Kitchener", "same day LTL Kitchener", "Southern Ontario LTL"]
  },
  {
    slug: "ftl-freight",
    title: "FTL Freight",
    description: "Full-truckload coordination for larger shipments, recurring lanes, and dedicated freight requirements.",
    image: stock.fleet,
    benefits: ["Dedicated capacity", "Fewer handoffs", "Direct routing", "Operational planning"],
    industries: ["Manufacturing", "Agriculture", "Industrial", "Food & Beverage"],
    customers: ["High-volume shippers", "Factories", "Distributors", "Project freight teams"]
  },
  {
    slug: "warehousing-cross-docking",
    title: "Warehousing & Cross-Docking",
    description: "Warehouse transfers, freight staging, cross-docking, consolidation, and dock-to-dock movement for Ontario freight.",
    image: stock.warehouse,
    benefits: ["Freight staging", "Cross-dock transfers", "Warehouse distribution", "Fewer storage delays"],
    industries: ["Wholesale", "Manufacturing", "Retail", "E-commerce"],
    customers: ["Warehouses", "3PLs", "Distributors", "Fulfillment operations"]
  },
  {
    slug: "dedicated-routes-distribution",
    title: "Dedicated Routes & Distribution",
    description: "Recurring route planning, regional distribution, retail replenishment, and dedicated delivery programs for growing businesses.",
    image: stock.fleet,
    benefits: ["Recurring routes", "Retail replenishment", "Consistent capacity", "Long-term planning"],
    industries: ["Retail", "Medical", "Automotive", "Food & Beverage"],
    customers: ["Growing businesses", "Recurring shippers", "Store networks", "Distributors"]
  },
  {
    slug: "expedited-specialized-freight",
    title: "Expedited & Specialized Freight",
    description: "Urgent freight, same-day movement, flatbed, reefer, container, and specialized equipment coordination through trusted carrier partners.",
    image: stock.dock,
    benefits: ["Same-day options", "Special equipment coordination", "Flatbed and reefer support", "Direct communication"],
    industries: ["Construction", "Industrial", "Technology", "Agriculture"],
    customers: ["Project teams", "Specialty suppliers", "Manufacturers", "Contractors"],
    keywords: ["expedited freight Kitchener", "flatbed freight Ontario", "reefer freight Ontario"]
  }
];

export const industries = [
  "Retail",
  "Manufacturing",
  "Medical",
  "Automotive",
  "Construction",
  "Food & Beverage",
  "Industrial",
  "Technology",
  "E-Commerce",
  "Government",
  "Wholesale",
  "Agriculture",
  "Professional Services",
  "Furniture",
  "Appliances"
];

export const serviceAreas = [
  "Kitchener",
  "Waterloo",
  "Cambridge",
  "Guelph",
  "Milton",
  "Mississauga",
  "Brampton",
  "Hamilton",
  "Burlington",
  "Toronto",
  "London",
  "Windsor",
  "Niagara",
  "Barrie",
  "Owen Sound",
  "Ottawa",
  "Kingston",
  "Sudbury",
  "North Bay",
  "Thunder Bay"
];

export const trustBuilders = [
  "Professional Dispatch Team",
  "Experienced Drivers",
  "Shipment Tracking",
  "Reliable Communication",
  "Fast Quotes",
  "Custom Logistics Plans",
  "Dedicated Account Managers",
  "Safe Handling",
  "Flexible Scheduling",
  "Transparent Pricing"
];

export const workSteps = [
  "Consultation",
  "Business Analysis",
  "Route Planning",
  "Technology Integration",
  "Pickup",
  "Transportation",
  "Proof of Delivery"
];
