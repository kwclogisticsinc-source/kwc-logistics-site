import type { Metadata } from "next";
import { LogoLockup, LogoMark } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Brand Guidelines",
  description:
    "KWC Logistics Inc. brand guidelines including logo usage, compact mark, colors, fonts, and placement notes.",
  alternates: { canonical: "/brand" }
};

const colors = [
  { name: "KWC Navy", value: "#0b1f38", note: "Primary background, logo base, truck decal contrast." },
  { name: "Freight Blue", value: "#1f5eff", note: "Primary action color and digital accent." },
  { name: "Signal Cyan", value: "#12b7ff", note: "Tech-forward motion accent for routes and highlights." },
  { name: "Canadian Red", value: "#d91f2d", note: "Small national accent only. Use sparingly." },
  { name: "Charcoal Ink", value: "#17212f", note: "Main text color." },
  { name: "Ice Blue", value: "#eef5ff", note: "Soft backgrounds and quote panels." }
];

export default function BrandPage() {
  return (
    <>
      <PageHero eyebrow="Brand Guidelines" title="KWC Logistics Inc. identity system">
        <p>
          A modern Canadian logistics brand with local roots and serious delivery capability:
          clean, technical, practical, and trustworthy.
        </p>
      </PageHero>

      <Section title="Primary logo" intro="Use the full lockup where there is enough horizontal room: website header, invoices, business cards, social banners, and truck doors.">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6">
            <LogoLockup />
            <p className="mt-5 text-sm leading-6 text-muted">
              Primary lockup: compact motion mark plus strong KWC wordmark and Logistics Inc. descriptor.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-navy p-6">
            <div className="inline-flex rounded-xl bg-white px-4 py-3">
              <LogoLockup />
            </div>
            <p className="mt-5 text-sm leading-6 text-blue-100">
              On dark or truck surfaces, place the logo on a white panel for legibility.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Compact logo/icon" intro="Use the compact mark for favicons, app icons, social avatars, uniform patches, and small truck-door placements.">
        <div className="flex flex-wrap gap-5">
          <div className="rounded-2xl border border-line bg-white p-6">
            <LogoMark />
          </div>
          <div className="rounded-2xl bg-brand-navy p-6">
            <LogoMark />
          </div>
        </div>
      </Section>

      <Section title="Color palette" className="bg-slate-50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {colors.map((color) => (
            <article key={color.name} className="rounded-2xl border border-line bg-white p-5">
              <div className="h-16 rounded-xl border border-line" style={{ backgroundColor: color.value }} />
              <h2 className="mt-4 text-lg font-bold text-ink">{color.name}</h2>
              <p className="mt-1 font-mono text-sm text-muted">{color.value}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{color.note}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Typography and usage notes">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-line bg-white p-6">
            <h2 className="text-2xl font-bold text-ink">Font recommendation</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Use a clean geometric sans-serif such as Inter, Neue Haas Grotesk, Avenir Next,
              or Helvetica Now. Keep headings bold and direct. Avoid decorative trucking fonts.
            </p>
          </article>
          <article className="rounded-2xl border border-line bg-white p-6">
            <h2 className="text-2xl font-bold text-ink">Placement notes</h2>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-muted">
              <li>Truck decals: use the primary logo on doors and the compact mark on rear panels.</li>
              <li>Website: use the primary logo in the header and compact mark for favicon/social.</li>
              <li>Invoices: keep the logo top-left with clear space around the mark.</li>
              <li>Uniforms: use the compact mark on sleeve or chest; full logo on back if space allows.</li>
              <li>Do not stretch, add shadows, recolor randomly, or place on busy photos without a white panel.</li>
            </ul>
          </article>
        </div>
      </Section>
    </>
  );
}
