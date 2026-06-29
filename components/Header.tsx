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
    <header className="sticky top-0 z-50 border-b border-brand-blue/20 bg-brand-navy/95 text-white shadow-lg shadow-brand-navy/10 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 rounded-xl bg-white px-2 py-1" aria-label="KWC Logistics Inc. home">
          <HeaderLogo />
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-blue-50 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-cyan">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a className="text-sm font-semibold text-blue-100 hover:text-white" href={`tel:${site.phone}`}>
            {site.phone}
          </a>
          <ButtonLink href="/contact" className="bg-brand-blue hover:bg-blue-500">
            Get a Quote
          </ButtonLink>
        </div>
      </div>
      <nav className="border-t border-brand-blue/20 bg-brand-navy lg:hidden" aria-label="Mobile navigation">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 py-3 text-sm font-semibold text-blue-50 sm:px-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 hover:text-brand-cyan">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
