import Image from "next/image";
import Link from "next/link";
import { FreightNetwork } from "@/components/FreightNetwork";
const services = [
  ["01", "LTL Freight & Distribution", "Pallets, partial loads and recurring commercial routes across Ontario.", "ltl-distribution"],
  ["02", "Final-Mile Delivery", "Business-to-business and doorstep delivery, with access and handling planned around the receiver.", "final-mile-b2c"],
  ["03", "Frozen & Refrigerated Freight", "Temperature-controlled options matched to the product, lane and available equipment.", "frozen-refrigerated-freight"],
  ["04", "Specialized Freight & Handling", "Tailgate, inside delivery, wrapping, palletizing and extra handling when arranged.", "specialized-freight"],
  ["05", "North American Freight Brokerage", "Road, rail and ocean freight through our partner network, including multimodal transport options.", "freight-brokerage"]
];
export default function HomePage() {
  return <>
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <Image src="/images/kwc-yard-fleet-1400.webp" alt="Logistics yard and commercial freight vehicles" fill priority sizes="100vw" className="object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-cyan">Kitchener, Ontario · Connected across North America</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">From Dock to Door.<br /><span className="text-blue-200">And Everywhere<br className="hidden sm:block" /> in Between.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100">Ontario transportation with our own equipment. North American freight solutions through our partner network. One team to help move your business forward.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/contact#quote" className="rounded-md bg-white px-6 py-4 font-bold text-brand-navy">Request a Freight Quote →</Link></div>
        </div>
        <aside className="self-end border-l-2 border-brand-cyan pl-6"><p className="text-sm font-bold uppercase tracking-widest text-brand-cyan">Your freight. Our network.</p><h2 className="mt-4 text-3xl font-bold">One solution starts<br />with one conversation.</h2><p className="mt-5 leading-7 text-blue-100">A local delivery. A recurring route. A shipment that needs more than a truck. Tell us the challenge.</p><Link href="/services/freight-brokerage" className="mt-6 inline-block border-b border-white/50 pb-2 font-bold">Explore our brokerage network ↗</Link></aside>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="grid gap-5 lg:grid-cols-2"><p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Freight, with a practical plan.</p><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The right service for what needs to move.</h2></div>
      <div className="mt-10 divide-y divide-line border-y border-line">{services.map(([number,title,description,slug]) => <Link key={number} href={`/services/${slug}`} className="group grid gap-3 py-6 transition hover:bg-white sm:grid-cols-[40px_1fr_1.2fr_24px] sm:items-center sm:gap-6"><span className="text-sm font-bold text-brand-blue">{number}</span><h3 className="text-xl font-bold">{title}</h3><p className="leading-7 text-muted">{description}</p><span aria-hidden="true" className="text-2xl">↗</span></Link>)}</div>
    </section>
    <FreightNetwork />
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Built around your business</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">From production floor to receiving door.</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{[
      ["Automotive & manufacturing", "Parts, materials and finished products, with pickup windows and receiving requirements planned around your operation."],
      ["Grocery, food & retail", "Store replenishment, palletized distribution and temperature-controlled options reviewed for each shipment."],
      ["Healthcare & commercial distribution", "Shipment-by-shipment assessment of handling, temperature and documentation needs. Regulated freight is accepted only after capability review."]
    ].map(([title,copy]) => <article key={title} className="border-t-2 border-brand-navy pt-6"><h3 className="text-xl font-bold">{title}</h3><p className="mt-4 leading-7 text-muted">{copy}</p></article>)}</div></section>
    <section className="bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Local capability. Broader reach.</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Ontario is home.<br />Your next destination is the conversation.</h2><p className="mt-5 leading-8 text-muted">Based in Kitchener, we serve Ontario with our own equipment, including Waterloo Region, the GTA and Southern Ontario business corridors. For freight across North America, our brokerage network opens up additional carriers, routes and modes.</p></div><div className="rounded-xl bg-brand-pale p-7"><h3 className="text-2xl font-bold">Let’s work through the details.</h3><ol className="mt-6 space-y-5 leading-7"><li><strong>01 / Share the shipment.</strong><br />Origin, destination, timing and freight requirements.</li><li><strong>02 / Review the options.</strong><br />Direct service or a suitable partner-arranged solution.</li><li><strong>03 / Confirm the plan.</strong><br />Agree on the quote, equipment and service before booking.</li></ol></div></div></section>
    <section className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8"><div><h2 className="text-3xl font-bold">A difficult shipment? Start here.</h2><p className="mt-3 text-muted">One-time freight or a recurring program—we’ll help assess the options.</p></div><Link href="/contact#quote" className="rounded-md bg-brand-navy px-6 py-4 text-center font-bold text-white">Talk to KWC →</Link></section>
  </>;
}
