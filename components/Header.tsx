import Link from "next/link";
import { site } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";
import { HeaderLogo } from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact Us" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 text-brand-navy shadow-lg shadow-brand-navy/5 backdrop-blur-xl">
      <div className="bg-brand-navy text-white">
        <div className="mx-auto flex max-w-7xl justify-center px-4 py-1.5 text-xs font-semibold sm:justify-end sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-blue-100 sm:justify-end">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              <span className="text-white">Email:</span> {site.email}
            </a>
            <a href={`tel:${site.phone}`} className="hover:text-white">
              <span className="text-white">Phone:</span> {site.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <nav className="hidden items-center gap-6 text-sm font-bold text-brand-navy lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="mx-auto flex shrink-0 flex-col items-center justify-center transition hover:scale-[1.02]" aria-label="KWC Logistics Inc. home">
          <HeaderLogo />
          <span className="-mt-3 text-center text-[11px] font-black uppercase tracking-[0.24em] text-brand-blue sm:text-xs">
            Make logistics simple • Ontario first • Canada-wide future
          </span>
        </Link>
        <div className="hidden items-center justify-end gap-3 md:flex">
          <a className="text-sm font-bold text-brand-navy hover:text-brand-blue" href={`tel:${site.phone}`}>
            Call {site.phone}
          </a>
          <ButtonLink href="/contact" className="bg-brand-blue text-white hover:bg-blue-500">
            Get a Quote
          </ButtonLink>
        </div>
      </div>
      <nav className="border-t border-line bg-white lg:hidden" aria-label="Mobile navigation">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 py-3 text-sm font-bold text-brand-navy sm:px-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
