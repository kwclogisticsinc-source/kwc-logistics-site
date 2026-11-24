"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contact } from "@/lib/content";
import { BrandLogo } from "./Logo";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Brokerage", href: "/services/freight-brokerage" },
  { label: "Coverage", href: "/service-areas" },
  { label: "Safety & Technology", links: [
    ["Fleet Equipment", "/equipment"],
    ["Safety and Fleet Standards", "/safety"],
    ["Transportation Technology", "/technology"],
    ["Shipment Updates", "/shipment-updates"],
  ] },
  { label: "Company", links: [
    ["About KWC", "/about"],
    ["Contact", "/contact"],
    ["Resources", "/resources"],
    ["Business Solutions", "/regular-deliveries"],
    ["Register Your Business", "/customer-registration"],
  ] },
  { label: "Drive with KWC", href: "/drive-with-kwc" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);
  const [group, setGroup] = useState<string | null>(null);
  const isCurrent = (href: string) => pathname === href || (href !== "/services" && pathname.startsWith(href + "/"));
  const close = () => { setMobile(false); setGroup(null); };

  return (
    <header className="site-header project-header">
      <div className="project-utility">
        <div className="wrap">
          <span>Kitchener, Ontario · Serving businesses since 2022</span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
      <div className="wrap header-inner">
        <Link href="/" aria-label="KWC Logistics home" onClick={close} className="brand">
          <BrandLogo decorative priority />
        </Link>
        <nav
          aria-label="Main navigation"
          id="project-navigation"
          className={`desktop-nav kwc-navigation${mobile ? " is-open" : ""}`}
          onKeyDown={(event) => {
            if (event.key !== "Escape") return;
            if (group) {
              const trigger = event.currentTarget.querySelector<HTMLButtonElement>('[aria-expanded="true"]');
              setGroup(null);
              trigger?.focus();
            } else if (mobile) {
              setMobile(false);
              document.getElementById("kwc-mobile-toggle")?.focus();
            }
          }}
        >
          {navigation.map((item, index) => "links" in item ? (
            <div className="kwc-nav-group" key={item.label}>
              <button className="kwc-nav-trigger" type="button" aria-expanded={group === item.label} aria-controls={`kwc-menu-${index}`} onClick={() => setGroup(group === item.label ? null : item.label)}>{item.label}</button>
              <div id={`kwc-menu-${index}`} className="kwc-subnav" hidden={group !== item.label}>
                {item.links.map(([label, href]) => <Link href={href} key={href} aria-current={isCurrent(href) ? "page" : undefined} onClick={close}>{label}</Link>)}
              </div>
            </div>
          ) : (
            <Link href={item.href} key={item.label} aria-current={isCurrent(item.href) ? "page" : undefined} onClick={close}>{item.label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/book-now" className="btn small" onClick={close}>Get a Quote</Link>
          <button id="kwc-mobile-toggle" className="menu-toggle" type="button" aria-expanded={mobile} aria-controls="project-navigation" onClick={() => { setMobile(!mobile); setGroup(null); }}>{mobile ? "Close" : "Menu"}</button>
        </div>
      </div>
    </header>
  );
}
