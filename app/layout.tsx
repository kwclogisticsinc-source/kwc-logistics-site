import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: "KWC Logistics Inc | Smarter Ontario Logistics & Transportation",
    template: "%s | KWC Logistics Inc."
  },
  description:
    "KWC Logistics Inc provides family-run Ontario local LTL, FTL, warehousing, cross-docking, dedicated routes, and expedited freight.",
  keywords: [
    "Kitchener logistics company",
    "Ontario logistics company",
    "Kitchener-Waterloo-Cambridge logistics",
    "Waterloo Region freight",
    "warehouse distribution Ontario",
    "LTL freight Kitchener",
    "FTL freight Ontario",
    "expedited freight Kitchener",
    "cross docking Kitchener",
    "warehousing Kitchener",
    "regional freight Kitchener",
    "warehouse transfers Ontario",
    "Ontario freight",
    "Southern Ontario LTL carrier"
  ],
  openGraph: {
    title: "KWC Logistics Inc | Smarter Ontario Logistics & Transportation",
    description:
      "Family-run Ontario local LTL, FTL, warehousing, cross-docking, dedicated routes, and expedited freight.",
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
