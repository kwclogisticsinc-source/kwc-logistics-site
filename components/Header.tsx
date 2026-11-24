"use client";
import Link from "next/link";
import { useState } from "react";
import { contact } from "@/lib/content";
import { BrandLogo } from "./Logo";
import { Icon } from "./DeliveryUI";
const nav = [
  ["/services", "Services"],
  ["/industries", "Industries"],
  ["/regular-deliveries", "Business Solutions"],
  ["/service-areas", "Coverage"],
  ["/about", "About"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header project-header">
        <div className="project-utility">
          <div className="wrap">
            <span>Waterloo Region, Ontario</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
        <div className="wrap header-inner">
          <Link
            href="/"
            aria-label="KWC Logistics home"
            onClick={() => setOpen(false)}
            className="brand"
          >
            <BrandLogo decorative priority />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([url, label]) => (
              <Link href={url} key={url}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link href="/shipment-updates" className="shipment-link">
              Shipment Updates
            </Link>
            <Link href="/book-now" className="btn small">
              Get a Quote
            </Link>
            <button
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {nav.map(([url, label]) => (
              <Link onClick={() => setOpen(false)} href={url} key={url}>
                {label}
                <Icon name="arrow" size={18} />
              </Link>
            ))}
            <Link href="/shipment-updates" onClick={() => setOpen(false)}>Shipment Updates</Link>
          </nav>
        )}
      </header>
      <div className="mobile-actions">
        <a href={`mailto:${contact.email}`}>
          <Icon name="mail" size={18} /> Email KWC
        </a>
        <Link href="/book-now">
          Get a Quote
        </Link>
      </div>
    </>
  );
}
