import { stock } from "@/components/StockPhoto";

export const site = {
  name: "KWC Logistics Inc.",
  domain: "kwclogistics.ca",
  phone: "416-300-8473",
  email: "dispatch@kwclogistics.ca",
  location: "Based in Kitchener, Ontario",
  description:
    "KWC Logistics Inc is a family-run Ontario logistics company providing LTL, FTL, warehousing, distribution, final mile, expedited freight, and cross-docking solutions."
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

export const serviceCategories: ItemPage[] = [
  {
    slug: "business-to-business-b2b",
    title: "B2B Freight & Commercial Delivery",
    description: "Reliable commercial freight movement between suppliers, warehouses, manufacturers, retailers, job sites, and business receivers.",
    image: stock.dock,
    benefits: ["Scheduled pickups", "Dock coordination", "Proof of delivery", "Clear dispatch communication"],
    industries: ["Manufacturing", "Wholesale", "Retail", "Industrial"],
    customers: ["Suppliers", "Warehouses", "Distributors", "Retail operations"],
    keywords: ["B2B delivery Ontario", "commercial freight Kitchener"]
  },
  {
    slug: "ltl-freight",
    title: "LTL Freight",
    description: "Less-than-truckload freight for skids, pallets, partial loads, and consolidated Ontario lanes.",
    image: stock.pallets,
    benefits: ["Consolidation", "Cost control", "Dock coordination", "Regional lane planning"],
    industries: ["Manufacturing", "Wholesale", "Retail", "Industrial"],
    customers: ["Warehouses", "Distributors", "Manufacturers", "Retailers"],
    keywords: ["LTL freight Kitchener", "Ontario LTL carrier", "Waterloo Region freight"]
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
    slug: "scheduled-deliveries",
    title: "Scheduled Routes",
    description: "Recurring pickup and delivery routes built around customer hours, receiver windows, replenishment needs, and route density.",
    image: stock.dispatch,
    benefits: ["Predictable schedules", "Better planning", "Reduced delays", "Dedicated communication"],
    industries: ["Retail", "Medical", "Automotive", "Wholesale"],
    customers: ["Multi-location businesses", "Service providers", "Retailers", "Recurring shippers"]
  },
  {
    slug: "same-day-delivery",
    title: "Expedited & Same-Day Freight",
    description: "Responsive same-day and expedited movement for time-sensitive pallets, parts, supplies, and business-critical shipments.",
    image: stock.fleet,
    benefits: ["Fast response", "Priority dispatch", "Direct updates", "Flexible vehicle matching"],
    industries: ["Medical", "Automotive", "Technology", "Professional Services"],
    customers: ["Repair networks", "Medical suppliers", "Offices", "Urgent freight shippers"]
  },
  {
    slug: "final-mile-delivery",
    title: "Final Mile Delivery",
    description: "Customer-facing final mile delivery for businesses that need freight delivered cleanly, carefully, and with reliable communication.",
    image: stock.driver,
    benefits: ["Customer coordination", "Delivery windows", "Proof of delivery", "Careful handling"],
    industries: ["Retail", "E-commerce", "Furniture", "Appliances"],
    customers: ["Retailers", "E-commerce brands", "Furniture stores", "Home delivery programs"],
    keywords: ["final mile delivery Kitchener", "final mile delivery Ontario"]
  },
  {
    slug: "retail-distribution",
    title: "Retail Distribution",
    description: "Store replenishment, retail freight, promotional material movement, and multi-location delivery support.",
    image: stock.pallets,
    benefits: ["Store-ready delivery", "Scheduled routes", "Warehouse coordination", "Receiver communication"],
    industries: ["Retail", "E-commerce", "Furniture", "Appliances"],
    customers: ["Retailers", "Store networks", "Brands", "Distribution centres"]
  },
  {
    slug: "warehouse-distribution",
    title: "Warehouse Distribution",
    description: "Warehouse-to-business and warehouse-to-customer distribution for freight moving through Ontario.",
    image: stock.warehouse,
    benefits: ["Staging", "Route loading", "Inventory movement", "Consolidated distribution"],
    industries: ["Wholesale", "Manufacturing", "Retail", "E-commerce"],
    customers: ["Warehouses", "3PLs", "Distributors", "Fulfillment operations"]
  },
  {
    slug: "cross-docking",
    title: "Cross Docking",
    description: "Inbound freight received, sorted, consolidated, and moved outbound with fewer storage delays.",
    image: stock.dock,
    benefits: ["Fewer touches", "Faster outbound movement", "Better route density", "Lower storage dependency"],
    industries: ["Retail", "Wholesale", "Manufacturing", "Food & Beverage"],
    customers: ["Warehouses", "Distributors", "Retail networks", "Regional shippers"]
  },
  {
    slug: "reverse-logistics",
    title: "Reverse Logistics",
    description: "Returns, exchanges, pickup programs, failed-delivery recovery, and product movement back through the network.",
    image: stock.warehouse,
    benefits: ["Return coordination", "Customer communication", "Inventory recovery", "Reduced waste"],
    industries: ["E-commerce", "Retail", "Furniture", "Appliances"],
    customers: ["Retailers", "Brands", "Distributors", "Service teams"]
  },
  {
    slug: "dedicated-fleet",
    title: "Dedicated Fleet & Route Support",
    description: "Dedicated capacity planning for businesses with recurring routes, high service expectations, or growth-stage delivery needs.",
    image: stock.fleet,
    benefits: ["Consistent capacity", "Brand-aligned service", "Route familiarity", "Long-term planning"],
    industries: ["Retail", "Medical", "Automotive", "Food & Beverage"],
    customers: ["Growing businesses", "Recurring shippers", "Store networks", "Distributors"]
  },
  {
    slug: "specialized-freight",
    title: "Specialized Freight",
    description: "Customized freight solutions for shipments that need planning beyond standard parcel or pallet movement.",
    image: stock.pallets,
    benefits: ["Custom planning", "Handling notes", "Equipment matching", "Dedicated communication"],
    industries: ["Construction", "Industrial", "Technology", "Agriculture"],
    customers: ["Project teams", "Specialty suppliers", "Manufacturers", "Contractors"]
  },
  {
    slug: "route-optimization",
    title: "Route Optimization",
    description: "Route planning that helps consolidate shipments, reduce empty miles, improve delivery speed, and control transportation costs.",
    image: stock.technology,
    benefits: ["Reduced empty miles", "Better route density", "Lower avoidable costs", "Improved delivery visibility"],
    industries: ["Retail", "Wholesale", "E-commerce", "Manufacturing"],
    customers: ["Multi-stop shippers", "Distributors", "Growing brands", "Recurring freight programs"]
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
