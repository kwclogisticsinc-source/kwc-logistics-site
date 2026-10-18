import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: "KWC Logistics Inc | Ontario Transport & North American Freight Brokerage",
    template: "%s | KWC Logistics Inc."
  },
  description:
    "Ontario transportation with KWC equipment. North American road, rail and ocean freight arranged through our partner network. Request a freight quote.",
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
    title: "KWC Logistics Inc | Ontario Transport & North American Freight Brokerage",
    description:
      "Ontario equipment. North American partners. Road, rail and ocean freight solutions.",
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:p-4">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.name, url: `https://${site.domain}`, telephone: site.phone, email: site.email, description: site.description }) }} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
