export const deliveryRegions = [
  {
    id: "gta",
    label: "GTA & beyond",
    destination: "GTA / surrounding regions",
    title: "Into the GTA. Onward to the next stop.",
    towns: [
      "Toronto & the GTA",
      "Peel, York, Durham & Halton",
      "Connections beyond the GTA",
    ],
    description:
      "Cargo vans and trucks connect business pickups, customer orders and commercial freight with the Greater Toronto Area and onward destinations. Build a point-to-point movement or connect several stops.",
    example:
      "Collect from a supplier, replenish a store and connect the next delivery through one coordinated plan.",
  },
  {
    id: "west",
    label: "London & beyond",
    destination: "London / Southwestern Ontario",
    title: "Through London. Across the southwest.",
    towns: ["London", "Windsor & Essex", "Southwestern Ontario connections"],
    description:
      "Connect local collections with freight and delivery lanes through London and further west. We coordinate suitable capacity for packages, pallets and recurring distribution requirements.",
    example:
      "Arrange a business pickup, pallet replenishment or a dedicated delivery to a commercial receiving location.",
  },
  {
    id: "central",
    label: "Central & Niagara",
    destination: "Central Ontario / Niagara",
    title: "Regional connections. A wider delivery plan.",
    towns: ["Waterloo Region", "Hamilton & Niagara", "Central Ontario"],
    description:
      "Link suppliers, businesses and customer destinations across regional Ontario. Courier collections, commercial deliveries and recurring routes can form part of the same distribution conversation.",
    example:
      "Combine store replenishment with scheduled collections and final delivery requirements.",
  },
  {
    id: "east",
    label: "Eastern Ontario",
    destination: "Eastern Ontario",
    title: "Eastbound connections across Ontario.",
    towns: ["Kingston", "Ottawa", "Eastern Ontario communities"],
    description:
      "Plan shipments between southern Ontario and eastern destinations, with the vehicle, operator and delivery requirements matched to the actual movement.",
    example:
      "Move commercial freight or packaged orders with receiving hours and appointment details considered before booking.",
  },
  {
    id: "province",
    label: "All Ontario",
    destination: "Ontario",
    title: "The province is the starting point.",
    towns: [
      "Northern Ontario",
      "Regional & rural destinations",
      "Province-wide coordination",
    ],
    description:
      "Our coverage conversation extends across Ontario, including communities outside the major highway corridors. Direct service and suitable carrier partnerships connect the capacity needed for each shipment.",
    example:
      "Share a destination anywhere in Ontario. We will review the route, equipment and delivery arrangements with you.",
  },
] as const;
export const serviceDirectory = [
  {
    title: "Courier & package delivery",
    icon: "box",
    href: "/services/courier",
    text: "Documents, parcels and suitable larger packages for individuals and businesses. Ask about urgent, same-day or next-day requirements.",
    tags: "One-off pickups · Customer orders",
  },
  {
    title: "Pallets & shared-capacity freight",
    icon: "truck",
    href: "/services/freight#service-options",
    text: "Move pallets and commercial freight using suitable shared truck capacity. We work through dimensions, weight, loading and delivery access.",
    tags: "LTL explained · Tailgate options",
  },
  {
    title: "Dedicated & expedited transport",
    icon: "route",
    href: "/services/freight#service-options",
    text: "When a load needs dedicated capacity or timing needs closer coordination, start with the ready time, destination and delivery deadline.",
    tags: "Full truckload · Urgent freight",
  },
  {
    title: "Business routes & distribution",
    icon: "route",
    href: "/services/logistics",
    text: "Connect supplier collections, store replenishment and customer deliveries around your locations, order volumes and preferred days.",
    tags: "Scheduled pickups · Multi-stop routes",
  },
  {
    title: "Final-mile & extra handling",
    icon: "pin",
    href: "/services/freight#delivery-examples",
    text: "Work through the final handoff: appointments, no-dock locations, liftgate needs and specifically arranged inside or additional handling.",
    tags: "Commercial receiving · Door-to-door",
  },
  {
    title: "Logistics & carrier coordination",
    icon: "truck",
    href: "/services/logistics#service-options",
    text: "One contact to coordinate regional movement, carrier partners and supporting arrangements for more complex transportation.",
    tags: "Canada/U.S. road freight · Returns",
  },
] as const;
