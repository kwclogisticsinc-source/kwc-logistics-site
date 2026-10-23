import Link from "next/link";
import { contact } from "@/lib/content";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="footer-wordmark">
            KWC<span>LOGISTICS INC.</span>
          </Link>
          <p>{contact.slogan}</p>
          <p className="fine">
            Local expertise. North American reach.
            <br />
            Smarter logistics.
          </p>
        </div>
        <nav aria-label="Footer services">
          <strong>What we move</strong>
          <Link href="/services/courier">KWC Courier</Link>
          <Link href="/services/freight">Freight & specialized delivery</Link>
          <Link href="/services/logistics">Logistics management</Link>
          <Link href="/contact?service=regular#quote">Regular deliveries</Link>
        </nav>
        <nav aria-label="Footer company">
          <strong>Get to know KWC</strong>
          <Link href="/service-areas">Coverage</Link>
          <Link href="/about">About us</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/resources">Shipping help</Link>
          <Link href="/forms">Forms & documents</Link>
        </nav>
        <div className="footer-contact">
          <strong>A real conversation starts here.</strong>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <p>Based in Kitchener–Waterloo, Ontario</p>
          <p className="fine">
            London–Windsor · Goderich · Owen Sound
            <br />
            Waterloo Region & wider Ontario
          </p>
          <Link href="/contact#quote" className="text-link">
            Request a Quote →
          </Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} KWC Logistics Inc.</span>
        <Link href="/privacy">Privacy</Link>
        <span>Photography is illustrative.</span>
      </div>
    </footer>
  );
}
