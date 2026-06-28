import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: "KWC Logistics Inc. | Kitchener Logistics Company",
    template: "%s | KWC Logistics Inc."
  },
  description:
    "KWC Logistics Inc. is a personal professional LTL and final mile carrier using hub-based Southern Ontario coverage, consolidation, and direct dispatch to move freight simply and affordably.",
  keywords: [
    "Kitchener logistics company",
    "Waterloo Region delivery",
    "final mile delivery Kitchener",
    "B2B delivery Kitchener",
    "LTL freight Kitchener",
    "warehouse transfers Ontario",
    "Southern Ontario logistics",
    "final mile and regional delivery",
    "final mile logistics Cambridge",
    "meal kit delivery support",
    "personal freight delivery Ontario",
    "LTL consolidation Ontario",
    "direct freight carrier Ontario",
    "Ontario freight",
    "owner operator opportunities Ontario",
    "Southern Ontario LTL carrier",
    "Ontario hub freight lanes",
    "courier services Kitchener",
    "auto parts delivery Kitchener"
  ],
  openGraph: {
    title: "KWC Logistics Inc.",
    description: "Personal professional LTL, final mile, consolidation, and regional delivery across Southern Ontario.",
    url: `https://${site.domain}`,
    siteName: site.name,
    locale: "en_CA",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
