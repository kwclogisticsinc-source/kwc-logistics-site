import Link from "next/link";
import { serviceAreas, site } from "@/lib/site";
import { FullLogo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="max-w-[190px] rounded-xl bg-white px-3 py-2">
            <FullLogo />
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-blue-100">
            Family-run Canadian logistics based in Kitchener. Final mile, LTL, B2B, D2B,
            B2C, and specialized regional delivery solutions across Southwestern Ontario.
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
          <p className="font-semibold">Service Areas</p>
          <p className="mt-3 text-sm leading-6 text-blue-100">
            {serviceAreas.map((area) => area.title.replace(" Logistics", "")).join(", ")}, the 401/403 corridor, Canada-wide, and North America lanes
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-blue-100 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/fleet" className="hover:text-white">Fleet</Link>
            <Link href="/industries" className="hover:text-white">Who We Help</Link>
            <Link href="/request-a-quote" className="hover:text-white">Quote</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
