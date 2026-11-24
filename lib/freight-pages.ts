import { localAreas } from "./local-areas";

export const freightPages = [
  {
    slug: "gta-ottawa-ltl",
    title: "GTA to Ottawa LTL Shipping and Pallet Delivery",
    description: "Request Toronto to Ottawa pallet delivery and bidirectional LTL shipping between the GTA and Ottawa via Highways 401 and 416.",
    sections: [
      ["Which shipments fit this lane?", "Ask about shared capacity for compatible boxed or palletized freight moving between the GTA and Ottawa in either direction. For urgent or time-sensitive appointments, ask about direct or dedicated service."],
      ["What to include in your quote", "Send pickup and delivery postal codes, pallet count, dimensions, total weight and receiving hours. If either site lacks a dock, tell us whether liftgate and pallet-jack service is needed."],
    ],
  },
  {
    slug: "kitchener-toronto-freight",
    title: "Kitchener to Toronto Freight",
    description: "Plan commercial freight between Kitchener–Waterloo–Cambridge and the GTA on Highway 401 in either direction.",
    sections: [
      ["Supplier pickups and replenishment", "Use this lane for inbound supplier loads to Waterloo Region or outbound store replenishment and pallet freight into the GTA. Request one-time transport or a recurring pickup plan."],
      ["Plan for your receiving sites", "Send each location’s receiving hours, dock access and appointment requirements. For a multi-stop delivery, include the pallet count and delivery window for each stop."],
    ],
  },
  {
    slug: "toronto-london-freight",
    title: "Toronto to London Freight Transportation",
    description: "Quote freight between the GTA and London in either direction, with Highway 401 options toward Woodstock, Ingersoll and Windsor.",
    sections: [
      ["Choose the right capacity", "Ask about per-pallet or LTL pricing for smaller shipments. If multiple stores need replenishment or strict receiving windows apply, share the full stop list so we can assess a dedicated truck."],
      ["Extend the route west", "Tell us if the load continues past London to Windsor or needs pickups around Woodstock or Ingersoll. Include any return freight so both legs can be priced together."],
    ],
  },
  {
    slug: "highway-401-freight",
    title: "Highway 401 Freight Transportation",
    description: "Explore bidirectional Highway 401 freight from Windsor and London through Waterloo Region and the GTA to Kingston and Eastern Ontario.",
    sections: [
      ["Build a route across Ontario", "Use the corridor for Windsor, London and GTA shipments, Waterloo Region to Ottawa freight via Highway 416, or GTA to Kingston pallet deliveries. Ask about routes in either direction and longer lanes into Quebec."],
      ["Compare shared and direct options", "Let us know your timing flexibility, handling requirements and pickup-to-delivery window. Compatible shipments may share truck capacity when timing and freight requirements align."],
    ],
  },
  {
    slug: "highway-403-logistics",
    title: "Highway 403 Logistics Services",
    description: "Plan logistics along Highway 403 between Woodstock, Brantford, Hamilton, Burlington and Mississauga.",
    sections: [
      ["Connect 403-area pickups and deliveries", "Ask about pallet freight, dedicated transportation and multi-stop distribution from either end of the corridor. We can also review Waterloo Region to Hamilton freight and connections to Niagara via the QEW."],
      ["Coordinate stops and commitments", "List supplier and customer stops in order of any fixed appointments. Flag stops that need tailgate service, returns pickup or a vehicle that fits a restricted delivery area."],
    ],
  },
  {
    slug: "ottawa-ltl-final-mile",
    title: "Ottawa LTL Freight and Final-Mile Delivery",
    description: "Arrange Ottawa LTL freight and B2B final-mile deliveries, including inbound and outbound Ontario lanes via Highways 416 and 417.",
    sections: [
      ["Move freight into and out of Ottawa", "Ask about LTL and direct options between Ottawa and the GTA, Waterloo Region, London or Hamilton. Include any Belleville, Kingston, Brockville or Cornwall stops when requesting a lane quote."],
      ["Plan the handoff at the destination", "For Ottawa final-mile delivery, send receiving contact details, delivery windows, dock access and pallet handling needs. For several sites, give the stop-level quantities and any returns to collect."],
    ],
  },
  {
    slug: "ontario-pallet-shipping",
    title: "Ontario Pallet Shipping and GTA Tailgate Delivery",
    description: "Request Ontario per-pallet shipping and GTA tailgate or liftgate delivery for commercial sites.",
    sections: [
      ["Get a usable pallet quote", "Provide the length, width, height and weight of each loaded pallet. Flag overhang, fragile goods and non-stackable freight so the truck space and handling can be assessed correctly."],
      ["Make delivery workable without a dock", "Tell us whether the site needs a liftgate, pallet jack or a specific handoff point. Note uneven surfaces, access limits and the location where the receiver can accept the pallet."],
    ],
  },
  {
    slug: "ontario-regional-distribution",
    title: "Ontario Regional Distribution and Dedicated Truck Services",
    description: "Plan recurring store replenishment, multi-stop delivery and dedicated truck services across Ontario.",
    sections: [
      ["Set up a recurring commercial route", "Share weekly volume by stop, pickup days, appointment windows, seasonal peaks and returns. We can assess per-pallet, multi-stop and dedicated truck arrangements against your budget and delivery requirements."],
      ["Plan for specialized loads and longer routes", "Identify refrigerated freight and any special handling up front. Ask about full truckload arrangements, Ontario to Quebec lanes including Montréal, and extended Canada-wide or Canada–USA moves through qualified transportation partners."],
    ],
  },
  ...localAreas,
];
