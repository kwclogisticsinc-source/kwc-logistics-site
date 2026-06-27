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
    "KWC Logistics Inc. provides final mile, LTL, B2B, D2B, B2C, and specialized regional delivery solutions for businesses across Kitchener-Waterloo, Cambridge, and Southwestern Ontario.",
  keywords: [
    "Kitchener logistics company",
    "Waterloo Region delivery",
    "final mile delivery Kitchener",
    "B2B delivery Kitchener",
    "LTL freight Kitchener",
    "warehouse transfers Ontario",
    "Southwestern Ontario logistics",
    "final mile and regional delivery",
    "D2B delivery Ontario",
    "B2C delivery Ontario",
    "meal kit delivery support",
    "Ontario freight",
    "North America freight",
    "401 corridor freight",
    "403 corridor freight",
    "courier services Kitchener",
    "senior moving assistance Kitchener",
    "auto parts delivery Kitchener"
  ],
  openGraph: {
    title: "KWC Logistics Inc.",
    description: "Final mile, LTL, B2B, D2B, B2C, and specialized regional delivery across Southwestern Ontario.",
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
