import Link from "next/link";
import { HeaderLogo } from "./Logo";
const nav = [{ href: "/services", label: "Services" }, { href: "/services/freight-brokerage", label: "Freight Brokerage" }, { href: "/forms", label: "Forms & Documents" }, { href: "/industries", label: "Industries" }, { href: "/service-areas", label: "Service Areas" }, { href: "/about", label: "About" }];
export function Header() {
  return <header className="sticky top-0 z-50 border-b border-line bg-white text-brand-navy">
    <div className="bg-brand-navy px-4 py-2 text-center text-xs font-semibold text-white">Ontario equipment · North American partners · Road / Rail / Ocean</div>
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
      <Link href="/" aria-label="KWC Logistics home"><HeaderLogo /></Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-4 text-sm font-bold xl:flex">{nav.map(item => <Link className="hover:text-brand-blue" key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <Link href="/contact#quote" className="rounded-md bg-brand-navy px-4 py-3 text-sm font-bold text-white">Get a Quote</Link>
      <details className="relative xl:hidden"><summary className="cursor-pointer rounded-md border border-line px-3 py-3 text-sm font-bold">Menu</summary><nav aria-label="Mobile navigation" className="absolute right-0 mt-3 grid w-64 gap-1 rounded-lg border border-line bg-white p-3 shadow-soft">{nav.map(item => <Link key={item.href} href={item.href} className="rounded p-3 text-sm font-semibold hover:bg-brand-pale">{item.label}</Link>)}</nav></details>
    </div>
  </header>;
}
