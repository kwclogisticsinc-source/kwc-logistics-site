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
      <div className="regional-utility">
        <div className="wrap">
          <span>
            KITCHENER–WATERLOO BASED{" "}
            <span className="utility-region">
              {" "}
              · LONDON–WINDSOR · GODERICH · OWEN SOUND
            </span>
          </span>
          <Link href="/forms">Forms & Shipping Help →</Link>
        </div>
      </div>
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
            {nav.map(([url, label]) =>
              url === "/services" ? (
                <details className="regional-nav-services" key={url}>
                  <summary>
                    Services <span aria-hidden="true">⌄</span>
                  </summary>
                  <div>
                    <Link href="/services">All transportation services</Link>
                    <Link href="/services/courier">Courier & packages</Link>
                    <Link href="/services/freight">
                      Freight & specialized delivery
                    </Link>
                    <Link href="/services/logistics">
                      Logistics & distribution
                    </Link>
                    <Link href="/contact?service=regular#quote">
                      Regular business deliveries
                    </Link>
                  </div>
                </details>
              ) : (
                <Link href={url} key={url}>
                  {label}
                </Link>
              ),
            )}
          </nav>
          <div className="header-actions">
            <a href={`mailto:${contact.email}`} className="header-phone">
              <Icon name="mail" size={17} />
              {contact.email}
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
        <a href={`mailto:${contact.email}`}>
          <Icon name="mail" size={18} /> Email KWC
        </a>
        <Link href="/contact#quote">
          Get a Quote <Icon name="arrow" size={18} />
        </Link>
      </div>
    </>
  );
}
