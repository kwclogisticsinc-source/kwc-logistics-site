export const deliveryRegions = [
  {
    id: "local",
    label: "Waterloo Region",
    destination: "Waterloo Region",
    title: "Kitchener. Waterloo. Cambridge.",
    towns: ["Kitchener", "Waterloo", "Cambridge"],
    description:
      "Our home base for courier collections, business deliveries, supplier pickups and regional dispatch coordination.",
    example:
      "A parcel across the region, an urgent supplier collection, or a regular round of customer deliveries.",
  },
  {
    id: "west",
    label: "London–Windsor",
    destination: "London / Windsor",
    title: "West through London to Windsor.",
    towns: ["London", "Windsor"],
    description:
      "Connect Waterloo Region with customers, suppliers and commercial receiving locations across the London–Windsor corridor.",
    example:
      "Pallet replenishment, commercial deliveries, scheduled pickups or a dedicated road movement.",
  },
  {
    id: "goderich",
    label: "Goderich",
    destination: "Goderich",
    title: "Your delivery route can reach Goderich.",
    towns: ["Goderich", "Surrounding communities by arrangement"],
    description:
      "Deliveries beyond the main 401 corridor need the same attention to timing, access and receiving details. Tell us where the goods need to go in Goderich and the surrounding area.",
    example:
      "A supplier pickup or commercial delivery with a specific receiving window and unloading requirement.",
  },
  {
    id: "owen-sound",
    label: "Owen Sound",
    destination: "Owen Sound",
    title: "Connect with Owen Sound and area.",
    towns: ["Owen Sound", "Surrounding communities by arrangement"],
    description:
      "Plan courier, freight or recurring delivery requirements between Waterloo Region and Owen Sound. We assess the location, shipment and suitable capacity together.",
    example:
      "Parts, packaged customer orders or freight for a business away from the main highway corridor.",
  },
  {
    id: "ontario",
    label: "Wider reach",
    destination: "Ontario / Canada / U.S.",
    title: "Ontario connections. North American road freight.",
    towns: ["Greater Toronto Area", "Niagara Region", "Ottawa"],
    description:
      "Ontario delivery arrangements connect with wider Canada/U.S. road freight through suitable carrier partners. The actual operator and service are confirmed with your quote.",
    example:
      "A regional delivery that connects with a wider road freight movement or a multi-location distribution plan.",
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
