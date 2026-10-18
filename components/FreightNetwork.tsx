import Link from "next/link";

export function FreightNetwork() {
  return <section className="bg-brand-navy py-16 text-white sm:py-20" aria-labelledby="network-title">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-cyan">Ontario equipment. North American connections.</p>
      <div className="mt-4 grid gap-8 lg:grid-cols-2">
        <h2 id="network-title" className="max-w-xl text-4xl font-black tracking-tight sm:text-5xl">Your freight doesn’t have to fit one fleet.</h2>
        <p className="text-lg leading-8 text-blue-100">We serve Ontario with our own equipment. Through our transportation partners across North America, we also help arrange road, rail and ocean freight—connecting your shipment with a practical route, suitable equipment and one point of contact.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          ["01", "Road freight", "LTL, full truckload, refrigerated and specialized transport options through our carrier network."],
          ["02", "Rail & intermodal", "Partner-arranged rail options and connections between road and rail for suitable freight and lanes."],
          ["03", "Ocean & port connections", "Ocean freight options through transport partners, with coordination of the inland legs your shipment needs."]
        ].map(([number, title, description]) => <article key={title} className="border-t border-white/25 pt-6">
          <span className="text-sm font-bold text-brand-cyan">{number}</span><h3 className="mt-3 text-2xl font-bold">{title}</h3><p className="mt-3 leading-7 text-blue-100">{description}</p>
        </article>)}
      </div>
      <p className="mt-8 max-w-4xl text-sm leading-6 text-blue-100">Brokerage services are arranged through partners. Routes, equipment, commodity acceptance and cross-border documentation requirements are reviewed before booking. Rail and ocean services are not operated by KWC.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/contact#quote" className="rounded-md bg-white px-6 py-3 font-bold text-brand-navy">Discuss Your Shipment →</Link>
        <Link href="/services/freight-brokerage" className="rounded-md border border-white/40 px-6 py-3 font-bold">Explore Freight Brokerage</Link>
      </div>
    </div>
  </section>;
}
