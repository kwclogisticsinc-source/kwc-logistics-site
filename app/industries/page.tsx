import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Industries We Serve", description: "Freight planning for automotive, food, healthcare, retail, manufacturing and distribution. Ontario service and North American carrier connections.", alternates: { canonical: "/industries" } };
export default function IndustriesPage() {
  return <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Industries we serve</p><h1 className="mt-4 max-w-4xl text-4xl font-black sm:text-6xl">Freight planning that starts with your operation.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted">From Ontario deliveries with our own equipment to North American freight through our partner network, we assess the lane, product and receiving requirements together.</p>
    <div className="mt-12 grid gap-6 md:grid-cols-2">{[
      ["Automotive & parts", "Supplier pickups, parts distribution and time-sensitive production freight. Share the pickup deadline, dock appointment, packaging and any returnable-container requirements.", "ltl-distribution"],
      ["Grocery & food", "Store replenishment and wholesale distribution, including qualifying frozen and refrigerated shipments. Specify product temperatures, loading conditions and delivery windows for an equipment review.", "frozen-refrigerated-freight"],
      ["Pharmaceuticals & healthcare", "Discuss your shipment’s handling, security, temperature and documentation needs before booking. KWC reviews suitability with the selected carrier; no pharmaceutical certification or regulated-goods authorization is implied.", "specialized-freight"],
      ["Retail & commercial distribution", "Warehouse-to-store deliveries, commercial replenishment and final-mile delivery to customers. Plan tailgate, inside delivery, appointments and setup needs in advance.", "final-mile-b2c"],
      ["Manufacturing & warehouses", "Palletized materials, finished goods and recurring distribution routes. Share shipment frequency, volume, dimensions and loading arrangements so we can assess direct and partner options.", "b2b-dedicated-routes"],
      ["North American shipping programs", "When your business needs a broader network, discuss road, rail, ocean and multimodal options through our transport partners. Carrier acceptance, routing and cross-border requirements are confirmed for the shipment.", "freight-brokerage"]
    ].map(([title,copy,slug]) => <article key={title} className="rounded-xl border border-line bg-white p-7"><h2 className="text-2xl font-bold">{title}</h2><p className="mt-4 leading-7 text-muted">{copy}</p><Link href={`/services/${slug}`} className="mt-6 inline-block font-bold">Explore service options →</Link></article>)}</div><Link href="/contact#quote" className="mt-10 inline-block rounded-md bg-brand-navy px-6 py-4 font-bold text-white">Discuss Your Shipping Requirements</Link>
  </div>;
}
