import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { contact } from "@/lib/content";
import "./globals.css";
import { previewOnly } from "@/lib/release";
export const metadata: Metadata = {
  metadataBase: new URL("https://kwclogistics.ca"),
  title: {
    default: "KWC Logistics | Courier, Freight & Regular Deliveries",
    template: "%s | KWC Logistics",
  },
  description:
    "Packages, pallets and regular deliveries from Kitchener–Waterloo–Cambridge across Ontario, with Canada/U.S. road freight coordination. Request a quote.",
  openGraph: {
    title: "KWC Logistics | Your next delivery. Made simple.",
    description:
      "Local courier, freight and recurring delivery help. Kitchener, Ontario.",
    url: "https://kwclogistics.ca",
    siteName: "KWC Logistics Inc.",
    locale: "en_CA",
    type: "website",
  },
  alternates: { canonical: "/" },
  robots: previewOnly ? { index: false, follow: false } : undefined,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:p-4"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KWC Logistics Inc.",
              url: "https://kwclogistics.ca",
              email: contact.email,
              slogan: contact.slogan,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kitchener",
                addressRegion: "ON",
                addressCountry: "CA",
              },
            }),
          }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
