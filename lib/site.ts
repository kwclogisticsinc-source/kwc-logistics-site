import { stock } from "@/components/StockPhoto";

export const site = {
  name: "KWC Logistics Inc.",
  domain: "kwclogistics.ca",
  email: "dispatch@kwclogistics.ca",
  location: "Based in Kitchener-Waterloo, Ontario",
  description:
    "Ontario transportation with our own equipment. North American freight brokerage by road, rail and ocean through our partner network."
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
    time: "By arrangement",
    description: "Priority local cartage for freight that needs the fastest practical pickup and delivery window."
  },
  {
    name: "LTL Rush",
    time: "By arrangement",
    description: "Expedited LTL movement for time-sensitive pallets, parts, skids, and commercial freight."
  },
  {
    name: "LTL Sameday",
    time: "Subject to availability",
    description: "Same-day local LTL service for scheduled freight that needs to move before close of business."
  }
];

export const serviceCategories: ItemPage[] = [
  {
    slug: "frozen-refrigerated-freight",
    title: "Frozen & Refrigerated Freight",
    description: "Temperature-controlled freight options for grocery, food and other qualifying shipments. We review the required range, lane and suitable direct or partner equipment before quoting.",
    image: stock.straightTruck,
    benefits: ["Temperature requirements reviewed", "Food distribution", "Equipment coordination", "Direct or partner-arranged options"],
    industries: ["Grocery", "Food wholesalers", "Frozen food distribution"],
    customers: ["Food distributors", "Grocery stores", "Manufacturers"],
    keywords: ["refrigerated freight Ontario", "frozen food transportation Ontario"]
  },
  {
    slug: "ltl-distribution",
    title: "LTL Distribution",
    description: "Consolidated pallet, skid, and partial-load freight across Ontario with practical communication and route planning.",
    image: stock.pallets,
    benefits: ["Local LTL", "Consolidation", "Dock-to-dock freight", "Ontario lanes"],
    industries: ["Manufacturing", "Wholesale", "Retail", "Industrial"],
    customers: ["Warehouses", "Distributors", "Manufacturers", "Retailers"],
    keywords: ["LTL freight Kitchener", "Ontario LTL distribution", "Waterloo Region freight"]
  },
  {
    slug: "final-mile-b2c",
    title: "Final-Mile Delivery",
    description: "B2B and B2C deliveries to stores, businesses and customer doors, with liftgate, inside delivery and additional handling available by arrangement.",
    image: stock.cargoVan,
    benefits: ["Final mile", "B2C and D2C", "Scheduled delivery", "White glove"],
    industries: ["Retail", "E-commerce", "Furniture", "Technology"],
    customers: ["Online brands", "Retailers", "Showrooms", "End customers"]
  },
  {
    slug: "b2b-dedicated-routes",
    title: "B2B & Dedicated Routes",
    description: "Recurring business delivery, route programs, retail replenishment, vendor pickups, and dedicated distribution support.",
    image: stock.straightTruck,
    benefits: ["B2B freight", "Dedicated routes", "Retail distribution", "Recurring schedules"],
    industries: ["Automotive", "Medical", "Food", "Packaging"],
    customers: ["Multi-location businesses", "Suppliers", "Retail networks", "Route customers"]
  },
  {
    slug: "warehousing-cross-dock",
    title: "Warehouse Distribution & Cross-Dock",
    description: "Inbound staging, cross-docking, warehouse transfers, sorting, consolidation, and outbound distribution planning.",
    image: stock.crossdock,
    benefits: ["Cross-dock", "Warehouse distribution", "Staging", "Transfers"],
    industries: ["Wholesale", "Manufacturing", "Retail", "E-commerce"],
    customers: ["Warehouses", "3PLs", "Distributors", "Fulfillment operations"]
  },
  {
    slug: "expedited-courier",
    title: "Expedited & Courier",
    description: "Time-sensitive freight for urgent parts, production support, commercial courier work, and fast Ontario movement.",
    image: stock.dock,
    benefits: ["Expedited", "Courier", "Rush freight", "Fast dispatch"],
    industries: ["Automotive", "Medical", "Industrial", "Technology"],
    customers: ["Operations teams", "Service departments", "Suppliers", "Manufacturers"]
  },
  {
    slug: "specialized-freight",
    title: "Specialized Freight",
    description: "Flatbed, refrigerated, oversized, sensitive, and non-standard freight coordinated through the right equipment plan.",
    image: stock.containers,
    benefits: ["Flatbed", "Refrigerated", "Special handling", "Equipment planning"],
    industries: ["Construction", "Food", "Industrial", "Agriculture"],
    customers: ["Project teams", "Specialty suppliers", "Contractors", "Food shippers"],
    keywords: ["flatbed freight Ontario", "refrigerated freight Ontario", "specialized transportation Kitchener"]
  },
  {
    slug: "freight-brokerage",
    title: "North American Freight Brokerage",
    description: "North American freight brokerage through our partner network: road, rail, ocean and multimodal options, with one point of contact from planning to delivery.",
    image: stock.yard,
    benefits: ["North American partners", "Road, rail & ocean", "Multimodal coordination", "Single point of contact"],
    industries: ["Manufacturing", "Distribution", "Retail", "Industrial"],
    customers: ["Growing shippers", "Multi-lane customers", "Regional distributors", "Procurement teams"]
  }
];

export const industries = [
  "Manufacturing",
  "Automotive",
  "Medical",
  "Industrial",
  "Construction",
  "Retail",
  "E-commerce",
  "Food",
  "Meal Kits",
  "Wholesale",
  "Distribution",
  "Government",
  "Technology",
  "Furniture",
  "Printing",
  "Packaging"
];

export const fleetTypes = [
  ["Cargo Van", "Fast local movement, courier work, parts, parcels, and smaller commercial freight."],
  ["Sprinter Van", "Expedited freight, B2B movement, D2C deliveries, and flexible urban access."],
  ["26' Straight Truck", "Palletized freight, LTL distribution, retail replenishment, and dock-to-dock movement."],
  ["26' Flatbed", "Construction, industrial, equipment, and non-standard freight that needs open-deck capability."],
  ["26' Refrigerated Truck", "Temperature-sensitive freight programs for food, medical, and specialty shippers."]
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
  "Ottawa",
  "Kingston"
];

export const trustBuilders = [
  "Fast Communication",
  "Technology Driven",
  "Competitive Pricing",
  "Smarter Route Planning",
  "Flexible Fleet",
  "Reliable Drivers",
  "Dedicated Support",
  "Transparent Service",
  "Family Values",
  "Local Knowledge",
  "Scalable Solutions"
];

export const workSteps = [
  "Request Quote",
  "Plan",
  "Dispatch",
  "Pickup",
  "Track",
  "Delivered"
];

export const technologyPillars = [
  "Route Planning",
  "Live Communication",
  "Digital Proof of Delivery",
  "Shipment Visibility",
  "Fast Dispatch",
  "Modern Logistics Software",
  "Data-Driven Decisions",
  "Scalable Systems",
  "Future AI Integration"
];
