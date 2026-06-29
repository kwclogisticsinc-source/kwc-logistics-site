import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: "KWC Logistics Inc | Kitchener-Waterloo-Cambridge LTL & Expedited Freight",
    template: "%s | KWC Logistics Inc."
  },
  description:
    "KWC Logistics Inc provides LTL freight, expedited transportation, warehousing, cross-docking and straight truck delivery services throughout Kitchener, Waterloo, Cambridge, the GTA and Ontario.",
  keywords: [
    "Kitchener logistics company",
    "Kitchener-Waterloo-Cambridge logistics",
    "Waterloo Region freight",
    "LTL freight Kitchener",
    "expedited freight Kitchener",
    "cross docking Kitchener",
    "warehousing Kitchener",
    "straight truck delivery Kitchener",
    "warehouse transfers Ontario",
    "Ontario freight",
    "Southern Ontario LTL carrier"
  ],
  openGraph: {
    title: "KWC Logistics Inc | Kitchener-Waterloo-Cambridge LTL & Expedited Freight",
    description:
      "LTL freight, expedited transportation, warehousing, cross-docking and straight truck delivery throughout Kitchener, Waterloo, Cambridge, the GTA and Ontario.",
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
