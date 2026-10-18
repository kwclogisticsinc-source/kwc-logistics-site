import Link from "next/link";
import { site } from "@/lib/site";
export function Footer() {
  return <footer className="bg-brand-navy text-white"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
    <div><p className="text-2xl font-black">KWC LOGISTICS</p><p className="mt-4 leading-7 text-blue-100">Ontario service with our own equipment. North American road, rail and ocean freight through our partner network.</p><p className="mt-4 text-sm text-blue-100">Based in Kitchener, Ontario</p></div>
    <nav aria-label="Footer navigation" className="grid content-start gap-3 text-sm font-semibold"><Link href="/services">Our Services</Link><Link href="/services/freight-brokerage">North American Freight Brokerage</Link><Link href="/industries">Industries We Serve</Link><Link href="/service-areas">Service Areas</Link><Link href="/forms">Forms & Documents</Link><Link href="/resources">Shipping Resources</Link><Link href="/about">About KWC</Link></nav>
    <div><p className="font-bold">Talk to Dispatch</p><a className="mt-3 block" href={`mailto:${site.email}`}>{site.email}</a><Link href="/contact#quote" className="mt-6 inline-block rounded-md bg-white px-5 py-3 font-bold text-brand-navy">Request a Freight Quote</Link></div>
  </div><div className="border-t border-white/20 px-4 py-5 text-center text-xs text-blue-100">© {new Date().getFullYear()} {site.name} All rights reserved.</div></footer>;
}
