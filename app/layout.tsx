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
    "Family-run Canadian logistics company in Kitchener serving businesses, families, and everyday customers across Ontario, Canada, and U.S. lanes.",
  keywords: [
    "Kitchener logistics company",
    "Waterloo Region delivery",
    "final mile delivery Kitchener",
    "B2B delivery Kitchener",
    "LTL freight Kitchener",
    "warehouse transfers Ontario",
    "Southwestern Ontario logistics",
    "Canada U.S. freight",
    "courier services Kitchener",
    "senior moving assistance Kitchener"
  ],
  openGraph: {
    title: "KWC Logistics Inc.",
    description: "No customer too small. No freight too complicated.",
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
