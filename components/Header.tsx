"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./Logo";

const navigation = [
  { label: "Ship", links: [
    ["Start a One-Time Quote", "/book-now"],
    ["Request a Shipment Update", "/shipment-updates"],
    ["Shipping Guides", "/resources"],
    ["Forms and Documents", "/forms"],
  ] },
  { label: "Business", links: [
    ["Plan Recurring Transportation", "/regular-deliveries"],
    ["Request a Business Account", "/customer-registration"],
    ["Industries We Serve", "/industries"],
  ] },
  { label: "Partnerships", links: [
    ["Request Ontario Carrier Capacity", "/transportation-partnerships"],
    ["Freight Brokerage", "/services/freight-brokerage"],
    ["Offer Carrier Capacity", "/drive-with-kwc#carrier-partners"],
  ] },
  { label: "Services", links: [
    ["All Services", "/services"],
    ["LTL and Pallet Freight", "/services/ltl-freight"],
    ["Full Truckload", "/services/full-truckload"],
    ["Final-Mile Delivery", "/services/b2b-final-mile"],
    ["Equipment and Liftgate Options", "/equipment"],
    ["Ontario Service Coverage", "/service-areas"],
  ] },
  { label: "About", links: [
    ["About KWC", "/about"],
    ["How We Work", "/about#how-we-work"],
    ["Safety and Fleet Standards", "/safety"],
    ["Technology and Dispatch", "/technology"],
    ["Contact KWC", "/contact"],
  ] },
  { label: "Careers", links: [
    ["AZ and DZ Driver Roles", "/drive-with-kwc#drivers"],
    ["Owner-Operator Opportunities", "/drive-with-kwc#owner-operators"],
    ["Apply to Drive with KWC", "/drive-with-kwc#request"],
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
          <Link href="/book-now#quote-start" className="btn small" onClick={close}>Get a Quote</Link>
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
