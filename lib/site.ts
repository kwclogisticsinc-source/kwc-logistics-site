import { stock } from "@/components/StockPhoto";

export const site = {
  name: "KWC Logistics Inc.",
  domain: "kwclogistics.ca",
  phone: "519-XXX-XXXX",
  email: "dispatch@kwclogistics.ca",
  location: "Based in Kitchener, Ontario",
  description:
    "KWC Logistics Inc provides customized transportation, warehousing, distribution, courier, final mile, LTL, FTL, and cross-docking solutions across Ontario."
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
    title: "Business-to-Business (B2B)",
    description: "Reliable commercial transportation between suppliers, warehouses, offices, retail locations, and business customers.",
    image: stock.dock,
    benefits: ["Scheduled pickups", "Dock coordination", "Proof of delivery", "Clear dispatch communication"],
    industries: ["Manufacturing", "Wholesale", "Retail", "Industrial"],
    customers: ["Suppliers", "Warehouses", "Distributors", "Retail operations"],
    keywords: ["B2B delivery Ontario", "commercial freight Kitchener"]
  },
  {
    slug: "business-to-consumer-b2c",
    title: "Business-to-Consumer (B2C)",
    description: "Customer-facing delivery programs for brands that need dependable communication and careful delivery execution.",
    image: stock.pallets,
    benefits: ["Customer delivery windows", "Delivery updates", "Careful handling", "Return coordination"],
    industries: ["E-commerce", "Furniture", "Appliances", "Retail"],
    customers: ["Online retailers", "Stores", "Local brands", "Service businesses"]
  },
  {
    slug: "direct-to-consumer-d2c",
    title: "Direct-to-Consumer (D2C)",
    description: "Direct movement from warehouse, manufacturer, or brand facility to end customers across Ontario.",
    image: stock.fleet,
    benefits: ["Brand-controlled experience", "Flexible routing", "Proof of delivery", "Reverse logistics support"],
    industries: ["E-commerce", "Medical", "Technology", "Consumer goods"],
    customers: ["D2C brands", "Fulfillment teams", "Manufacturers", "Retailers"]
  },
  {
    slug: "distributor-to-business-d2b",
    title: "Distributor-to-Business (D2B)",
    description: "Distribution support for businesses moving regular freight from distribution centres to commercial receivers.",
    image: stock.warehouse,
    benefits: ["Route planning", "Store replenishment", "Dock scheduling", "Consolidated freight"],
    industries: ["Wholesale", "Automotive", "Food & Beverage", "Retail"],
    customers: ["Distributors", "Multi-location operators", "Wholesale suppliers", "Parts networks"]
  },
  {
    slug: "consumer-to-consumer-c2c",
    title: "Consumer-to-Consumer (C2C)",
    description: "Practical transportation support for larger items that need more care than parcel shipping.",
    image: stock.pallets,
    benefits: ["Clear pickup details", "Careful handling", "Flexible scheduling", "Simple communication"],
    industries: ["Furniture", "Appliances", "Marketplace sellers", "Professional services"],
    customers: ["Local sellers", "Private customers", "Small businesses", "Resellers"]
  },
  {
    slug: "business-to-government-b2g",
    title: "Business-to-Government (B2G)",
    description: "Structured delivery support for businesses serving public-sector, municipal, and institutional receivers.",
    image: stock.dispatch,
    benefits: ["Appointment coordination", "Documentation", "Reliable communication", "Compliance-minded handling"],
    industries: ["Government", "Medical", "Professional Services", "Technology"],
    customers: ["Contractors", "Suppliers", "Institutions", "Public-sector vendors"]
  },
  {
    slug: "manufacturer-to-business-m2b",
    title: "Manufacturer-to-Business (M2B)",
    description: "Freight movement from production environments to business receivers, warehouses, retailers, and job sites.",
    image: stock.warehouse,
    benefits: ["Pallet handling", "Production-friendly scheduling", "Dock-to-dock movement", "Regional distribution"],
    industries: ["Manufacturing", "Construction", "Industrial", "Automotive"],
    customers: ["Manufacturers", "Fabricators", "Suppliers", "Industrial operators"]
  },
  {
    slug: "manufacturer-to-consumer-m2c",
    title: "Manufacturer-to-Consumer (M2C)",
    description: "Delivery programs that connect manufacturers directly with end customers while protecting the brand experience.",
    image: stock.fleet,
    benefits: ["Direct shipment planning", "Customer communication", "Reduced handoffs", "Delivery confirmation"],
    industries: ["Furniture", "Appliances", "Technology", "Consumer goods"],
    customers: ["Manufacturers", "D2C brands", "Specialty producers", "Local factories"]
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
    title: "Scheduled Deliveries",
    description: "Recurring pickup and delivery programs built around customer hours, receiver windows, and route density.",
    image: stock.dispatch,
    benefits: ["Predictable schedules", "Better planning", "Reduced delays", "Dedicated communication"],
    industries: ["Retail", "Medical", "Automotive", "Wholesale"],
    customers: ["Multi-location businesses", "Service providers", "Retailers", "Recurring shippers"]
  },
  {
    slug: "same-day-delivery",
    title: "Same Day Delivery",
    description: "Responsive same-day movement for time-sensitive freight, documents, parts, supplies, and business-critical shipments.",
    image: stock.fleet,
    benefits: ["Fast response", "Priority dispatch", "Direct updates", "Flexible vehicle matching"],
    industries: ["Medical", "Automotive", "Technology", "Professional Services"],
    customers: ["Repair networks", "Medical suppliers", "Offices", "Urgent freight shippers"]
  },
  {
    slug: "next-day-delivery",
    title: "Next Day Delivery",
    description: "Next-day delivery programs for businesses that need speed without the cost of urgent same-day movement.",
    image: stock.dock,
    benefits: ["Balanced speed and cost", "Route planning", "Delivery confirmation", "Customer updates"],
    industries: ["Retail", "E-commerce", "Wholesale", "Medical"],
    customers: ["Retailers", "Suppliers", "Warehouses", "Brands"]
  },
  {
    slug: "courier-services",
    title: "Courier Services",
    description: "Courier support for smaller commercial shipments, cartons, samples, supplies, and business documents.",
    image: stock.driver,
    benefits: ["Fast pickup", "Clear communication", "Flexible routing", "Professional delivery"],
    industries: ["Professional Services", "Medical", "Technology", "Retail"],
    customers: ["Offices", "Clinics", "Small businesses", "Service teams"]
  },
  {
    slug: "final-mile-delivery",
    title: "Final Mile Delivery",
    description: "Customer-facing final mile delivery for businesses that need freight delivered cleanly, carefully, and with reliable communication.",
    image: stock.driver,
    benefits: ["Customer coordination", "Delivery windows", "Proof of delivery", "Careful handling"],
    industries: ["Retail", "E-commerce", "Furniture", "Appliances"],
    customers: ["Retailers", "D2C brands", "Furniture stores", "Home delivery programs"],
    keywords: ["final mile delivery Kitchener", "final mile delivery Ontario"]
  },
  {
    slug: "document-delivery",
    title: "Document Delivery",
    description: "Professional document delivery for offices, institutions, legal, financial, and business clients.",
    image: stock.dispatch,
    benefits: ["Time-sensitive handling", "Professional presentation", "Delivery confirmation", "Simple dispatch"],
    industries: ["Professional Services", "Government", "Medical", "Financial"],
    customers: ["Law offices", "Accounting firms", "Institutions", "Business offices"]
  },
  {
    slug: "medical-deliveries",
    title: "Medical Deliveries",
    description: "Careful delivery support for medical suppliers, clinics, wellness businesses, and healthcare-related shipments.",
    image: stock.driver,
    benefits: ["Careful handling", "Reliable communication", "Scheduled service", "Delivery confirmation"],
    industries: ["Medical", "Wellness", "Professional Services", "Technology"],
    customers: ["Clinics", "Suppliers", "Labs", "Wellness businesses"]
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
    slug: "white-glove-delivery",
    title: "White Glove Delivery",
    description: "Premium handling for freight that needs appointment coordination, care, communication, and a higher-touch delivery experience.",
    image: stock.driver,
    benefits: ["Appointment windows", "Careful handling", "Customer communication", "Professional presentation"],
    industries: ["Furniture", "Appliances", "Technology", "Medical"],
    customers: ["Premium retailers", "Specialty brands", "Healthcare suppliers", "Business customers"]
  },
  {
    slug: "dedicated-fleet",
    title: "Dedicated Fleet",
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
