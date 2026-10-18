import Link from "next/link";
import Image from "next/image";
import { categories, contact, faqs } from "@/lib/content";
export function Icon({ name = "box", size = 24 }: { name?: string; size?: number }) {
 const paths: Record<string, React.ReactNode> = {
 box: <><path d="m12 3 9 5v8l-9 5-9-5V8zM3 8l9 5 9-5M12 13v8M7.5 5.5l9 5"/></>,
 truck: <><path d="M3 5h11v12H3zM14 9h4l3 4v4h-7"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="18" cy="17.5" r="2.5"/></>,
 route: <><circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h9a4 4 0 0 1 0 8H8a3 3 0 0 0 0 6h9"/></>,
 arrow: <path d="M4 12h15m-6-6 6 6-6 6"/>, phone: <path d="m6 3 4 4-2 3c1 3 3 5 6 6l3-2 4 4-2 3C11 22 2 13 3 5z"/>,
 pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
 check: <path d="m5 12 4 4L19 6"/>, mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></>
 };
 return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.box}</svg>;
}
export function ServiceCards() { return <div className="service-grid">{categories.map((item, i) => <article className="service-card" key={item.id}><Link href={item.href} className="service-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 720px) 100vw, 33vw"/><span className="image-number">0{i+1}</span></Link><div className="service-body"><p className="eyebrow">{item.title}</p><h3>{item.short}</h3><p>{item.description}</p><div className="tag-row">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div><Link className="text-link" href={`/contact?service=${item.id}#quote`}>{item.action}<Icon name="arrow" size={20}/></Link><Link className="detail-link" href={item.href}>Explore this service</Link></div></article>)}</div>; }
export function FAQ({ limit }: { limit?: number }) { return <div className="faq-list">{faqs.slice(0,limit).map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>; }
export function ContactCTA() { return <section className="wrap final-cta"><div><p className="eyebrow">One package or your next big move</p><h2>Let’s get it moving.</h2><p>Tell us what you need. We’ll work through the details together.</p></div><div><Link href="/contact#quote" className="btn light">Get a Quote <Icon name="arrow"/></Link><a href={`tel:${contact.tel}`} className="cta-phone">{contact.phone}</a><a href={`mailto:${contact.email}`} className="cta-email">{contact.email}</a></div></section>; }
export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) { return <section className="page-intro wrap"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="intro-copy">{children}</div></section>; }
export function CoverageGraphic() { return <div className="corridor-graphic" aria-label="Service corridor diagram, not a geographic map"><div className="graphic-label">OUR ONTARIO CONNECTIONS <span>Corridor guide · not to scale</span></div><div className="kwc-hub"><Icon name="pin"/><strong>Kitchener · Waterloo · Cambridge</strong><span>Our local starting point</span></div><div className="corridor-branches">{[["GTA","401 east"],["Niagara Region","403 / QEW connections"],["London → Windsor","401 west"],["Ottawa","401 east / 416 north"]].map(([city,route])=><div key={city}><span className="route-dot"/><strong>{city}</strong><small>{route}</small></div>)}</div><p>Routes arranged around your shipment and receiving requirements.</p></div>; }
