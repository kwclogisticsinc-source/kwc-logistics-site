"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { contact } from "@/lib/content";
import { Icon } from "./DeliveryUI";
const nav = [
  ["/services", "Services"],
  ["/service-areas", "Ontario Network"],
  ["/business", "For Business"],
  ["/resources", "Resources"],
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
            {nav.map(([url, label]) =>
              url === "/services" || url === "/resources" ? (
                <details
                  className="regional-nav-services"
                  key={url}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      event.currentTarget.open = false;
                      event.currentTarget.querySelector("summary")?.focus();
                    }
                  }}
                >
                  <summary>
                    {label} <span aria-hidden="true">⌄</span>
                  </summary>
                  <div
                    onClick={(event) => {
                      if ((event.target as HTMLElement).closest("a")) {
                        const menu = event.currentTarget.closest("details");
                        if (menu) menu.open = false;
                      }
                    }}
                  >
                    {url === "/services" ? (
                      <>
                        <Link href="/services">
                          All transportation services
                        </Link>
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
                        <Link href="/fleet-services">Fleet & equipment</Link>
                        <Link href="/industries">Industries we serve</Link>
                      </>
                    ) : (
                      <>
                        <Link href="/resources#shipment-planner">
                          Build a shipment checklist
                        </Link>
                        <Link href="/forms">Forms & documents</Link>
                        <Link href="/blog">Shipping insights</Link>
                        <Link href="/terms">Payment & shipment terms</Link>
                        <Link href="/resources">Shipping help & FAQs</Link>
                      </>
                    )}
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
            <a
              href={`mailto:${contact.email}`}
              className="header-phone"
              aria-label={`Email ${contact.email}`}
            >
              <Icon name="mail" size={17} />
              <span>Email</span>
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
            {[
              ...nav,
              ["/fleet-services", "Fleet & Equipment"],
              ["/industries", "Industries"],
              ["/forms", "Forms & Documents"],
              ["/blog", "Shipping Insights"],
              ["/terms", "Payment & Terms"],
            ].map(([url, label]) => (
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
