import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "Mobile Phone Repair in Behala, Kolkata | Paras Mobile Repairing & Service Centre";
const DESCRIPTION =
  "Mobile phone repair shop on D.H. Road, Behala, near Balananda Hospital. Screen, battery, charging port, dead phone and water damage repair for all brands, iPhone & Android. Free check-up, price told before repair. Open 7 days, 10 AM – 10 PM. Call 089815 72938.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "mobile repair Behala",
    "phone repair Behala",
    "mobile repairing shop Behala Kolkata",
    "screen replacement Behala",
    "battery replacement Kolkata",
    "mobile repair near Balananda Hospital",
    "mobile repair D.H. Road",
    "iPhone repair Behala",
  ],
  alternates: { canonical: "/" },
  verification: { google: "CXfOxAbZa6Etlf9kJzS9hIMEbZYI81txRU4it9ynkN4" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Paras Mobile Repairing & Service Centre",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Paras Mobile Repairing, Behala – phone repair, all brands" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

// Structured data so Google knows the shop's address, map location, hours and services.
// No ratings here: Google ignores (and can penalise) review stars a business marks up about itself.
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#shop`,
  name: "Paras Mobile Repairing & Service Centre",
  description:
    "Independent mobile phone repair shop in Behala, Kolkata. Screen, battery, charging port, dead phone, water damage, software and camera repair for all brands.",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  telephone: "+91-8981572938",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "151, Diamond Harbour Road, near Balananda Hospital, Gholeshapur, Behala",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700034",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.5067602, longitude: 88.3202662 },
  hasMap: "https://maps.google.com/?cid=12575020457033139650",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  areaServed: ["Behala", "Thakurpukur", "Sarsuna", "Parnasree", "Taratala", "Joka", "Kolkata"].map((name) => ({
    "@type": "Place",
    name,
  })),
  sameAs: ["https://www.facebook.com/profile.php?id=61595165264713"],
  makesOffer: [
    "Screen replacement",
    "Battery replacement",
    "Charging port repair",
    "Dead phone / motherboard repair",
    "Water damage repair",
    "Software repair",
    "Camera repair",
    "Speaker and mic repair",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        {children}
      </body>
    </html>
  );
}
