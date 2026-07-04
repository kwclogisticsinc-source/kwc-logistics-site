import Link from "next/link";
import { site } from "@/lib/site";
import { FullLogo } from "./Logo";

export function Footer() {
  const columns = [
    ["Services", "LTL Distribution", "Final Mile", "Dedicated Routes", "Warehousing", "Freight Brokerage"],
    ["Industries", "Manufacturing", "Automotive", "Retail", "E-commerce", "Food"],
    ["Company", "About", "Resources", "Quote", "Privacy", "Terms"]
  ];

  return (
    <footer className="border-t border-line bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_1.35fr_0.9fr] lg:px-8">
        <div>
          <div className="max-w-[220px]">
            <FullLogo />
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-blue-100">
            Technology-driven logistics from Kitchener-Waterloo. Built around communication,
            trust, transparent pricing, and freight movement that feels simple.
          </p>
          <p className="mt-4 text-sm text-blue-100">{site.location}</p>
        </div>
        <div>
          <div className="grid gap-7 sm:grid-cols-3">
            {columns.map(([title, ...items]) => (
              <div key={title}>
                <p className="font-semibold">{title}</p>
                <div className="mt-3 space-y-2 text-sm text-blue-100">
                  {items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Quote</p>
          <div className="mt-3 space-y-2 text-sm text-blue-100">
            <p><a href={`tel:${site.phone}`} className="hover:text-white">{site.phone}</a></p>
            <p><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></p>
            <p>No full street address listed yet.</p>
          </div>
          <Link href="/contact" className="mt-5 inline-flex rounded-md bg-brand-blue px-5 py-3 text-sm font-black text-white transition hover:bg-blue-500">
            Get a Quote
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-blue-100 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/resources" className="hover:text-white">Resources</Link>
            <Link href="/contact" className="hover:text-white">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
