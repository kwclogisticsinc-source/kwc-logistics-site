import Link from "next/link";
import { site } from "@/lib/site";
import { FullLogo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="max-w-[190px] rounded-xl border border-brand-cyan/20 bg-white/5 px-3 py-2">
            <FullLogo />
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-blue-100">
            Ontario logistics partner based in Kitchener and built for businesses that need
            dependable transportation, warehousing, distribution, courier, final mile, LTL,
            FTL, cross-docking, and customized delivery support.
          </p>
          <p className="mt-4 text-sm text-blue-100">{site.location}</p>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-blue-100">
            <p>
              <a href={`tel:${site.phone}`} className="hover:text-white">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </p>
            <p>No full street address listed yet.</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Coverage</p>
          <p className="mt-3 text-sm leading-6 text-blue-100">
            Kitchener, Waterloo, Cambridge, Guelph, Brantford, Hamilton, London, Mississauga,
            Toronto, Windsor, Niagara, Barrie, Ottawa, Kingston, Sudbury, Thunder Bay, and
            customized Ontario-wide service.
          </p>
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
