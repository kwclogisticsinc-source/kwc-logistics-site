"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { contact } from "@/lib/content";
import { Icon } from "./DeliveryUI";
const nav = [
  ["/services", "Services"],
  ["/service-areas", "Coverage"],
  ["/about", "About"],
  ["/contact", "Contact"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link
            href="/"
            aria-label="KWC Logistics home"
            onClick={() => setOpen(false)}
            className="brand"
          >
            <Image
              src="/images/kwc-logo-transparent.png"
              alt="KWC Logistics"
              width={90}
              height={90}
              priority
            />
            <span>
              KWC<span>LOGISTICS INC.</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([url, label]) => (
              <Link href={url} key={url}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <a href={`tel:${contact.tel}`} className="header-phone">
              <Icon name="phone" size={17} />
              {contact.phone}
            </a>
            <Link href="/contact#quote" className="btn small">
              Get a Quote <Icon name="arrow" size={18} />
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
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </nav>
        )}
      </header>
      <div className="mobile-actions">
        <a href={`tel:${contact.tel}`}>
          <Icon name="phone" size={18} /> Call KWC
        </a>
        <Link href="/contact#quote">
          Get a Quote <Icon name="arrow" size={18} />
        </Link>
      </div>
    </>
  );
}
