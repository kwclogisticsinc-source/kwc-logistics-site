import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { contact } from "@/lib/content";
import "./globals.css";
import { previewOnly } from "@/lib/release";
export const metadata: Metadata = {
  metadataBase: new URL("https://kwclogistics.ca"),
  title: {
    default: "KWC Logistics | Ontario Freight & Recurring Transportation",
    template: "%s | KWC Logistics",
  },
  description:
    "Affordable pallet freight, regional distribution and dedicated transportation along Ontario Highways 401 and 403. Request a quote from KWC Logistics.",
  openGraph: {
    title: "KWC Logistics | Ontario Freight & Recurring Transportation",
    description:
      "Regional transportation from Waterloo Region across Ontario, with core routes up to Sudbury and additional freight capacity through qualified partners.",
    url: "https://kwclogistics.ca",
    siteName: "KWC Logistics Inc.",
    images: [{ url: "/images/kwc-galloping-horse.png", alt: "KWC Logistics blue horse logo" }],
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
              foundingDate: "2022",
              logo: "https://kwclogistics.ca/images/kwc-galloping-horse.png",
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
