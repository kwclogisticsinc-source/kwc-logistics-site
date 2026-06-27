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
    "Family-run logistics company in Kitchener, Ontario serving Waterloo Region, the GTA, and Southwestern Ontario with final mile delivery, B2B delivery, LTL freight, warehouse transfers, and dedicated routes.",
  keywords: [
    "Kitchener logistics company",
    "Waterloo Region delivery",
    "final mile delivery Kitchener",
    "B2B delivery Kitchener",
    "LTL freight Kitchener",
    "warehouse transfers Ontario",
    "Southwestern Ontario logistics"
  ],
  openGraph: {
    title: "KWC Logistics Inc.",
    description: "Family-run logistics across Southwestern Ontario.",
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
