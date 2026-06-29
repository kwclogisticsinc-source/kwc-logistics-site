export const site = {
  name: "KWC Logistics Inc.",
  domain: "kwclogistics.ca",
  phone: "519-XXX-XXXX",
  email: "dispatch@kwclogistics.ca",
  location: "Based in Kitchener, Ontario",
  description:
    "KWC Logistics Inc provides dependable LTL freight, expedited transportation, warehousing, cross-docking, and straight truck delivery throughout Kitchener, Waterloo, Cambridge, the GTA, and Ontario."
};

export type ItemPage = {
  slug: string;
  title: string;
  description: string;
  keywords?: string[];
};

export const serviceCategories = [
  {
    slug: "ltl-freight",
    title: "LTL Freight",
    description:
      "Palletized freight, skids, partial loads, and recurring commercial shipments planned with practical routing and clear communication.",
    icon: "LTL",
    items: ["Palletized freight", "Partial loads", "Dock-to-dock moves", "Regional consolidation"]
  },
  {
    slug: "expedited-freight",
    title: "Expedited Freight",
    description:
      "Time-sensitive freight for businesses that need fast pickup, direct communication, and dependable delivery planning.",
    icon: "EXP",
    items: ["Priority pickup", "Time-sensitive freight", "Cargo van options", "Straight truck capacity"]
  },
  {
    slug: "warehousing",
    title: "Warehousing",
    description:
      "Short-term freight handling, staging, sorting, storage coordination, and warehouse transfer support for growing businesses.",
    icon: "WH",
    items: ["Freight staging", "Warehouse transfers", "Pallet handling", "Inventory movement"]
  },
  {
    slug: "cross-docking",
    title: "Cross Docking",
    description:
      "Inbound freight received, organized, consolidated, and moved outbound with fewer delays and fewer unnecessary handoffs.",
    icon: "XD",
    items: ["Inbound receiving", "Outbound loading", "Route loading", "Consolidation"]
  },
  {
    slug: "straight-truck-delivery",
    title: "Straight Truck Delivery",
    description:
      "Professional straight truck solutions for dock freight, commercial deliveries, skids, equipment, and regional LTL movement.",
    icon: "ST",
    items: ["Freightliner straight trucks", "Commercial stops", "Liftgate coordination", "Regional lanes"]
  }
];

export const services: ItemPage[] = [
  {
    slug: "ltl-freight",
    title: "LTL Freight",
    description:
      "LTL freight for palletized shipments, partial loads, dock-to-dock freight, and regional consolidation throughout Kitchener, Waterloo, Cambridge, the GTA, and Ontario.",
    keywords: ["LTL freight Kitchener", "Waterloo Region LTL", "palletized freight Ontario"]
  },
  {
    slug: "expedited-freight",
    title: "Expedited Freight",
    description:
      "Expedited transportation for time-sensitive commercial freight that needs fast response, clear dispatch communication, and dependable equipment.",
    keywords: ["expedited freight Kitchener", "hot shot freight Ontario", "same day freight Waterloo Region"]
  },
  {
    slug: "warehousing",
    title: "Warehousing",
    description:
      "Warehousing support for freight staging, warehouse transfers, pallet handling, storage coordination, and distribution planning.",
    keywords: ["warehousing Kitchener", "warehouse transfers Ontario", "freight staging Waterloo Region"]
  },
  {
    slug: "cross-docking",
    title: "Cross Docking",
    description:
      "Cross-docking services for inbound freight, outbound loading, consolidation, route loading, and efficient regional distribution.",
    keywords: ["cross docking Kitchener", "cross dock Ontario", "freight consolidation Ontario"]
  },
  {
    slug: "straight-truck-delivery",
    title: "Straight Truck Delivery",
    description:
      "Straight truck delivery for commercial freight, skids, equipment, dock deliveries, liftgate requirements, and regional business shipments.",
    keywords: ["straight truck delivery Kitchener", "straight truck freight Ontario"]
  }
];

export const serviceAreas: ItemPage[] = [
  {
    slug: "kitchener-logistics",
    title: "Kitchener Logistics",
    description:
      "LTL freight, expedited transportation, warehousing, cross-docking, and straight truck delivery for Kitchener businesses."
  },
  {
    slug: "waterloo-logistics",
    title: "Waterloo Logistics",
    description:
      "Professional freight support for Waterloo manufacturers, warehouses, distributors, retailers, and commercial operations."
  },
  {
    slug: "cambridge-logistics",
    title: "Cambridge Logistics",
    description:
      "Cambridge LTL freight, warehouse transfers, cross-dock support, and straight truck delivery from a Waterloo Region carrier."
  },
  {
    slug: "guelph-logistics",
    title: "Guelph Logistics",
    description:
      "Guelph freight, skids, expedited transportation, and regional LTL service connected to Waterloo Region."
  },
  {
    slug: "brantford-logistics",
    title: "Brantford Logistics",
    description:
      "Brantford freight service for commercial shipments, warehouse movement, skids, and straight truck delivery."
  },
  {
    slug: "hamilton-logistics",
    title: "Hamilton Logistics",
    description:
      "Hamilton LTL freight, expedited transportation, commercial delivery, and warehouse transfer support."
  },
  {
    slug: "london-logistics",
    title: "London Logistics",
    description:
      "London Ontario freight lanes for LTL, expedited, straight truck, and commercial transportation needs."
  },
  {
    slug: "mississauga-logistics",
    title: "Mississauga Logistics",
    description:
      "Mississauga and GTA freight connections for LTL, warehousing, cross-docking, and business shipments."
  },
  {
    slug: "toronto-gta-logistics",
    title: "Toronto and GTA Logistics",
    description:
      "GTA freight support for businesses moving skids, commercial freight, and expedited shipments across Ontario."
  },
  {
    slug: "ontario-wide-logistics",
    title: "Ontario-Wide Logistics",
    description:
      "Ontario-wide service supported by KWC assets, dispatch knowledge, and trusted carrier relationships."
  }
];

export const faqs = [
  {
    question: "What does KWC stand for?",
    answer:
      "KWC stands for Kitchener, Waterloo, and Cambridge. KWC Logistics is proudly built in Waterloo Region and focused on supporting local businesses first."
  },
  {
    question: "What freight services does KWC provide?",
    answer:
      "KWC focuses on LTL freight, expedited transportation, warehousing, cross-docking, and straight truck delivery for commercial freight."
  },
  {
    question: "Does KWC provide Ontario-wide service?",
    answer:
      "Yes. KWC is based in Kitchener and supports Kitchener, Waterloo, Cambridge, Guelph, Brantford, Hamilton, London, Mississauga, Toronto, the GTA, and Ontario-wide freight needs."
  },
  {
    question: "How does KWC approach pricing?",
    answer:
      "KWC looks at freight size, timing, pickup and delivery access, lane density, equipment needs, and consolidation opportunities before quoting."
  },
  {
    question: "What details should I send for a quote?",
    answer:
      "Send pickup location, delivery location, freight type, number of skids, weight, dimensions, timing, service required, and any special handling notes."
  },
  {
    question: "Do you publish a full street address?",
    answer:
      "Not yet. The site lists KWC as based in Kitchener, Ontario, and provides phone and email contact details."
  }
];
