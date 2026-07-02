import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StockPhoto, stock } from "@/components/StockPhoto";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "KWC Logistics resources and FAQs for Ontario transportation, LTL freight, FTL freight, warehousing, final mile delivery, cross-docking, expedited freight, and quote preparation.",
  alternates: { canonical: "/resources" }
};

const resourceCards = [
  {
    title: "Freight Quote Checklist",
    description:
      "Prepare pickup city, delivery city, freight type, pallet count, dimensions, weight, timing, dock access, liftgate needs, and handling notes before requesting a quote.",
    image: stock.dispatch
  },
  {
    title: "LTL & Consolidation Basics",
    description:
      "Learn how shipment consolidation, route density, and better planning can reduce waste, improve delivery timing, and control transportation costs.",
    image: stock.pallets
  },
  {
    title: "Warehouse & Cross-Dock Planning",
    description:
      "Understand how inbound staging, outbound sorting, inventory movement, and dock coordination help freight move faster through Ontario.",
    image: stock.warehouse
  }
];

const faqs = [
  ["What does KWC Logistics Inc. do?", "KWC provides transportation, warehousing, distribution, final mile, LTL, FTL, expedited freight, cross-docking, reverse logistics, and customized delivery programs for businesses across Ontario."],
  ["Where is KWC Logistics based?", "KWC Logistics is based in Kitchener, Ontario, with service coverage across Waterloo Region and throughout Ontario."],
  ["What areas do you service?", "KWC supports Kitchener, Waterloo, Cambridge, Guelph, Milton, Mississauga, Brampton, Hamilton, Burlington, Toronto, London, Windsor, Niagara, Barrie, Owen Sound, Ottawa, Kingston, Sudbury, North Bay, Thunder Bay, and other Ontario lanes by request."],
  ["Do you provide service outside Ontario?", "Ontario is the core service area. Broader Canadian transportation requirements can be reviewed and planned based on lane, volume, timing, and shipment profile."],
  ["Do you handle LTL freight?", "Yes. KWC supports less-than-truckload freight for pallets, skids, partial loads, recurring lanes, warehouse freight, and commercial distribution."],
  ["Do you handle full truckload freight?", "Yes. FTL solutions can be planned for larger shipments, dedicated lanes, project freight, and customers with higher volume requirements."],
  ["Can KWC help reduce transportation costs?", "Yes. The team looks for opportunities to consolidate freight, improve route density, reduce empty miles, plan recurring movement, and choose the right service level for the shipment."],
  ["Do you offer same-day delivery?", "Yes. Same-day options depend on pickup location, delivery location, freight size, vehicle availability, and timing."],
  ["Do you offer next-day delivery?", "Yes. Next-day service is available for many Ontario lanes and can be a strong option when speed matters but urgent same-day pricing is not required."],
  ["Do you offer scheduled delivery programs?", "Yes. KWC can plan recurring pickup and delivery schedules for retailers, manufacturers, distributors, warehouses, suppliers, and multi-location businesses."],
  ["Can KWC manage final mile deliveries?", "Yes. Final mile programs can be planned for customer-facing deliveries where timing, communication, handling, and proof of delivery matter."],
  ["Do you offer warehousing?", "KWC supports warehouse distribution, freight staging, inventory movement, and related logistics planning. Exact warehouse services can be confirmed during the quote process."],
  ["What is cross-docking?", "Cross-docking moves inbound freight through a facility with limited storage time. Freight is received, sorted, consolidated, and moved outbound to reduce delays and extra handling."],
  ["Do you help with reverse logistics?", "Yes. Reverse logistics can include returns, exchanges, product pickups, failed-delivery recovery, and movement back through a warehouse or distribution network."],
  ["Can KWC provide a dedicated fleet solution?", "Yes. Dedicated fleet planning is available for businesses with recurring routes, predictable volume, high service expectations, or growth-stage delivery needs."],
  ["What industries does KWC serve?", "KWC supports retail, manufacturing, medical, automotive, construction, food and beverage, industrial, technology, e-commerce, government, wholesale, agriculture, professional services, furniture, and appliances."],
  ["What information is needed for a quote?", "Send pickup city, delivery city, freight type, pallet or item count, weight, dimensions, service timing, dock or liftgate details, appointment requirements, and any handling notes."],
  ["How fast can I get a quote?", "Fast quotes are a priority. Response time depends on shipment complexity, lane, service level, equipment needs, and whether all shipment details are available."],
  ["Do you work with manufacturers?", "Yes. KWC can move freight from manufacturers to warehouses, distributors, retailers, businesses, job sites, and end customers."],
  ["Do you work with retailers?", "Yes. KWC supports store replenishment, retail distribution, final mile delivery, reverse logistics, warehouse transfers, and scheduled delivery programs."],
  ["Can KWC support e-commerce brands?", "Yes. KWC can support e-commerce brands with final mile delivery, returns, warehouse distribution, and scheduled delivery programs."],
  ["Can KWC help if carriers keep refusing difficult freight?", "KWC reviews the shipment details, access limitations, handling needs, and delivery expectations to build a practical plan instead of forcing every shipment into a generic process."],
  ["Do you provide proof of delivery?", "Proof of delivery can be included in the service workflow so shippers have confirmation and accountability after delivery."],
  ["Do you provide shipment tracking?", "Shipment visibility and communication can be built into the logistics plan depending on the service type, route, and customer requirements."],
  ["How does route optimization help customers?", "Route optimization helps combine compatible freight, reduce empty miles, plan better delivery sequences, improve speed, and reduce avoidable transportation costs."],
  ["Can KWC create a custom logistics plan?", "Yes. KWC builds plans around each customer's operations, freight profile, customer promises, timing requirements, cost targets, and long-term growth goals."],
  ["Is KWC only for large businesses?", "No. KWC can support customers shipping one package, a few skids, recurring pallets, retail routes, warehouse freight, or thousands of pallets each month."],
  ["How do I start working with KWC?", "Use the contact form, call dispatch, or email shipment details. KWC will review the lane, freight, timing, service requirements, and next steps."]
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Practical logistics resources for smarter shipping decisions." image={stock.warehouse}>
        <p>
          Clear guidance for businesses preparing freight quotes, comparing service options,
          planning warehouse movement, and building more reliable transportation programs.
        </p>
      </PageHero>

      <Section title="Start with better shipment information" intro="Good logistics starts before the truck arrives. These resources help customers send the details KWC needs to plan the right service level.">
        <div className="grid gap-5 lg:grid-cols-3">
          {resourceCards.map((card) => (
            <article key={card.title} className="premium-hover overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-sm hover:shadow-soft">
              <div className="h-56 overflow-hidden">
                <StockPhoto src={card.image} alt={card.title} className="transition duration-700 hover:scale-105" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-black text-ink">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Customer FAQ</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Questions customers ask before they ship.</h2>
            <p className="mt-5 text-base leading-7 text-blue-100">
              Use these answers to understand how KWC thinks about freight, cost, timing,
              communication, service coverage, and custom logistics planning.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="bg-brand-blue hover:bg-blue-500">Request a Quote</ButtonLink>
              <Link href="/services" className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-navy">
                View Services
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {faqs.map(([question, answer], index) => (
              <details key={question} className="group rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm backdrop-blur">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <span className="text-base font-black">{index + 1}. {question}</span>
                  <span className="mt-0.5 text-xl font-black text-brand-cyan transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-blue-100">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
