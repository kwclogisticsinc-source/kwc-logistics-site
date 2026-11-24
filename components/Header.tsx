"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./Logo";

const navigation = [
  { label: "Ship", links: [
    ["Start a one-time quote", "/book-now"],
    ["Request a shipment update", "/shipment-updates"],
    ["Shipping guides", "/resources"],
    ["Forms and documents", "/forms"],
  ] },
  { label: "Business", links: [
    ["Plan recurring transportation", "/regular-deliveries"],
    ["Request a business account", "/customer-registration"],
    ["Industries we serve", "/industries"],
  ] },
  { label: "Partnerships", links: [
    ["Request Ontario carrier capacity", "/transportation-partnerships"],
    ["Freight brokerage", "/services/freight-brokerage"],
    ["Offer carrier capacity", "/drive-with-kwc#carrier-partners"],
  ] },
  { label: "Services", links: [
    ["All services", "/services"],
    ["LTL and pallet freight", "/services/ltl-freight"],
    ["Full truckload", "/services/full-truckload"],
    ["Final-mile delivery", "/services/b2b-final-mile"],
    ["Equipment and liftgate options", "/equipment"],
    ["Ontario service coverage", "/service-areas"],
  ] },
  { label: "Markets", links: [
    ["Ontario freight market brief", "/markets"],
    ["Newsletter signup", "/markets#request"],
  ] },
  { label: "About", links: [
    ["About KWC", "/about"],
    ["How we work", "/about#how-we-work"],
    ["Safety and fleet standards", "/safety"],
    ["Technology and dispatch", "/technology"],
    ["Contact KWC", "/contact"],
  ] },
  { label: "Careers", links: [
    ["AZ and DZ driver roles", "/drive-with-kwc#drivers"],
    ["Owner-operator opportunities", "/drive-with-kwc#owner-operators"],
    ["Apply to drive with KWC", "/drive-with-kwc#request"],
  ] },
] as const;

export function Header() {
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const mobileToggle = useRef<HTMLButtonElement>(null);
  const [mobile, setMobile] = useState(false);
  const [group, setGroup] = useState<string | null>(null);

  function close() {
    setMobile(false);
    setGroup(null);
  }

  useEffect(() => {
    if (mobile) header.current?.querySelector<HTMLButtonElement>(".kwc-nav-trigger")?.focus();
  }, [mobile]);

  useEffect(() => {
    if (!mobile && !group) return;
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) close();
    }
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [mobile, group]);

  return (
    <header
      ref={header}
      className="site-header project-header"
      onBlur={(event) => {
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) close();
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        if (group) {
          event.currentTarget.querySelector<HTMLButtonElement>(".kwc-nav-trigger[aria-expanded='true']")?.focus();
          setGroup(null);
        } else if (mobile) {
          mobileToggle.current?.focus();
          setMobile(false);
        }
      }}
    >
      <div className="wrap header-inner">
        <Link href="/" aria-label="KWC Logistics home" onClick={close} className="brand">
          <BrandLogo decorative priority />
        </Link>
        <nav aria-label="Main navigation" id="project-navigation" className={`desktop-nav kwc-navigation${mobile ? " is-open" : ""}`}>
          {navigation.map(({ label, links }, index) => (
            <div
              className="kwc-nav-group"
              key={label}
              onBlur={(event) => {
                if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
                  setGroup((openGroup) => openGroup === label ? null : openGroup);
                }
              }}
            >
              <button
                className="kwc-nav-trigger"
                type="button"
                aria-expanded={group === label}
                aria-controls={`kwc-menu-${index}`}
                onClick={() => setGroup(group === label ? null : label)}
              >
                {label}
              </button>
              <ul id={`kwc-menu-${index}`} className="kwc-subnav" hidden={group !== label}>
                {links.map(([name, href]) => (
                  <li key={href}><Link href={href} aria-current={pathname === href ? "page" : undefined} onClick={close}>{name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/book-now" className="btn small" onClick={close}>Get a Quote</Link>
          <button
            ref={mobileToggle}
            id="kwc-mobile-toggle"
            className="menu-toggle"
            type="button"
            aria-expanded={mobile}
            aria-controls="project-navigation"
            onClick={() => { setMobile(!mobile); setGroup(null); }}
          >
            {mobile ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
