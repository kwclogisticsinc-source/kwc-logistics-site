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
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 text-brand-navy shadow-lg shadow-brand-navy/5 backdrop-blur-xl">
      <div className="bg-brand-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 py-2 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-center uppercase tracking-[0.16em] text-blue-100 sm:text-left">
            Ontario-first logistics • LTL freight • warehousing • distribution
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-blue-100 sm:justify-end">
            <a href={`mailto:${site.email}`} className="transition hover:text-white">
              <span className="font-black text-white">Email:</span> {site.email}
            </a>
            <a href={`tel:${site.phone}`} className="transition hover:text-white">
              <span className="font-black text-white">Phone:</span> {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-3 pt-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center justify-center" aria-label="KWC Logistics Inc. home">
          <HeaderLogo />
        </Link>
        <p className="mt-[-8px] text-center text-[11px] font-black uppercase tracking-[0.22em] text-brand-blue sm:text-xs">
          Make logistics simple • Ontario first • Canada-wide future
        </p>
      </div>

      <div className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-4 lg:px-8">
          <div className="hidden lg:block" aria-hidden="true" />

          <nav className="flex items-center justify-start gap-2 overflow-x-auto text-sm font-black text-brand-navy sm:justify-center lg:overflow-visible" aria-label="Primary navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 whitespace-nowrap rounded-full px-4 py-2 transition hover:bg-brand-pale hover:text-brand-blue"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-2 lg:justify-end">
            <a
              className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md border border-brand-blue/25 bg-white px-4 text-sm font-black text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
              href={`tel:${site.phone}`}
            >
              Call Dispatch
            </a>
            <ButtonLink href="/contact" className="min-h-11 whitespace-nowrap bg-brand-blue px-5 text-white hover:bg-blue-500">
              Get a Quote
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
