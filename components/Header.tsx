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
    <header className="sticky top-0 z-50 border-b border-line bg-white text-brand-navy shadow-lg shadow-brand-navy/8">
      <div className="bg-brand-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Family-run Ontario logistics • 15+ years transportation and logistics experience</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-blue-100">
            <span>{site.location}</span>
            <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            <a href={`tel:${site.phone}`} className="hover:text-white">{site.phone}</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 rounded-2xl border border-line bg-white px-3 py-2 shadow-sm" aria-label="KWC Logistics Inc. home">
          <HeaderLogo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-brand-navy lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
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
