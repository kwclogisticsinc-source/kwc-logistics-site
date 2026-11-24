import { BrandLogo } from "./Logo";
import Link from "next/link";
import { contact } from "@/lib/content";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="footer-logo" aria-label="KWC Logistics home">
            <BrandLogo decorative />
          </Link>

          <p className="fine">
            Founded in Kitchener in 2022.
          </p>
        </div>
        <nav aria-label="Footer services">
          <strong>What we move</strong>
          <Link href="/services/courier">Bulk package delivery</Link>
          <Link href="/services/freight">Freight & specialized delivery</Link>
          <Link href="/services/freight-brokerage">Freight brokerage</Link>
          <Link href="/services/logistics">Logistics management</Link>
          <Link href="/regular-deliveries#quote">Regular deliveries</Link>
          <Link href="/transportation-partnerships">Transportation partnerships</Link>
        </nav>
        <nav aria-label="Footer company">
          <strong>Get to know KWC</strong>
          <Link href="/service-areas">Coverage</Link>
          <Link href="/about">About us</Link>
          <Link href="/equipment">Equipment</Link>
          <Link href="/safety">Safety</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/drive-with-kwc">Drive with KWC</Link>
          <Link href="/customer-registration">Register your business</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/resources">Shipping help</Link>
          <Link href="/markets">Freight market newsletter</Link>
          <Link href="/forms">Forms & documents</Link>
        </nav>
        <div className="footer-contact">
          <strong>Talk to KWC Logistics</strong>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <p>Kitchener, Ontario</p>
          <Link href="/contact#quote" className="text-link">
            Request a Quote
          </Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} KWC Logistics Inc.</span>
        <div className="button-row"><Link href="/privacy">Privacy</Link><Link href="/terms">Website Terms</Link></div>
      </div>
    </footer>
  );
}
