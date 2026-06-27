import Link from "next/link";
import { site } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";
import { LogoLockup } from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/request-a-quote", label: "Request Quote" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="KWC Logistics Inc. home">
          <LogoLockup />
          <span className="hidden border-l border-line pl-3 leading-tight sm:block">
            <span className="block text-xs font-semibold text-ink">Kitchener dispatch</span>
            <span className="block text-xs font-medium text-muted">Ontario assets. North America network.</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-ink lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a className="text-sm font-semibold text-brand-navy hover:text-brand-blue" href={`tel:${site.phone}`}>
            {site.phone}
          </a>
          <ButtonLink href="/request-a-quote">Quote</ButtonLink>
        </div>
      </div>
      <nav className="border-t border-line bg-white lg:hidden" aria-label="Mobile navigation">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 py-3 text-sm font-semibold text-ink sm:px-6">
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
