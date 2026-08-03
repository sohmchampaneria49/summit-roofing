import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Summit Roofing | Built to Protect. Crafted to Last.",
  description: "Premium residential and commercial roofing solutions engineered for durability, performance, and timeless design.",
  keywords: ["Roofing Contractor", "Roof Repair", "Roof Replacement", "Storm Damage", "Standing Seam Metal", "Natural Slate"],
  openGraph: {
    title: "Summit Roofing | Built to Protect. Crafted to Last.",
    description: "Premium residential and commercial roofing solutions engineered for durability, performance, and timeless design.",
    type: "website",
    locale: "en_US",
    siteName: "Summit Roofing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${syne.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              "name": "Summit Roofing",
              "description": "Premium residential and commercial roofing solutions.",
              "telephone": "+1-800-555-SUMMIT",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "100 Summit Ridge Way",
                "addressLocality": "Aspen",
                "addressRegion": "CO",
                "postalCode": "81611",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body className="bg-[#F8F8F5] text-[#121212] selection:bg-[#F97316] selection:text-white">
        {children}
      </body>
    </html>
  );
}
