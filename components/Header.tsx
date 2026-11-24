"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { contact } from "@/lib/content";
import blueHorseLogo from "@/public/images/kwc-galloping-horse.png";
import { Icon } from "./DeliveryUI";
const nav = [
  ["/services", "Freight Services"],
  ["/service-areas", "Ontario Coverage"],
  ["/about", "Our Story"],
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
            <Image src={blueHorseLogo} alt="" priority />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([url, label]) => (
              <Link href={url} key={url}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <a href={`mailto:${contact.email}`} className="header-phone">
              <Icon name="mail" size={17} />
              {contact.email}
            </a>
            <Link href="/contact?service=freight#quote" className="btn small">
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
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </nav>
        )}
      </header>
      <div className="mobile-actions">
        <a href={`mailto:${contact.email}`}>
          <Icon name="mail" size={18} /> Email KWC
        </a>
        <Link href="/contact?service=freight#quote">
          Get a Quote
        </Link>
      </div>
    </>
  );
}
