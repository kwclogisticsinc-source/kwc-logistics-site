import Link from "next/link";
import { site } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";
import { HeaderLogo } from "./Logo";

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
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <div aria-hidden="true" />
        <Link href="/" className="justify-self-center" aria-label="KWC Logistics Inc. home">
          <HeaderLogo />
        </Link>
        <div className="hidden items-center justify-end gap-3 md:flex">
          <a className="text-sm font-semibold text-brand-navy hover:text-brand-blue" href={`tel:${site.phone}`}>
            {site.phone}
          </a>
          <ButtonLink href="/request-a-quote">Quote</ButtonLink>
        </div>
      </div>
      <nav className="border-t border-line bg-white" aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 py-3 text-sm font-semibold text-ink sm:px-6 lg:justify-center lg:gap-6 lg:px-8">
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
