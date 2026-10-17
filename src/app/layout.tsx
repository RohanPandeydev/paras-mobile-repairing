import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paras Mobile Repairing & Service Centre | Behala, Kolkata",
  description:
    "Trusted mobile phone repair shop in Behala, Kolkata. Expert screen replacement, battery repair, software fixes, and all mobile services. 4.8★ rated on Google. Call: 089815 72938",
  keywords:
    "mobile repair Kolkata, phone repair Behala, screen replacement, battery replacement, Paras Mobile, mobile service centre Kolkata, phone fix near me",
  openGraph: {
    title: "Paras Mobile Repairing & Service Centre",
    description:
      "Mobile phone repair in Behala, Kolkata. Free check-up, quality-checked parts, price told before repair.",
    type: "website",
    locale: "en_IN",
  },
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
        {children}
      </body>
    </html>
  );
}
