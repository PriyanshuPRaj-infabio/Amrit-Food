import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Amrit Food | India's Dairy Legacy to Tomorrow's Food Innovation",
  description:
    "A premium digital experience for Amrit Food, a large-scale Indian dairy and food manufacturing company powering homes, cafes, restaurants, institutions, and food brands across India.",
  keywords: [
    "Amrit Food",
    "Indian dairy manufacturer",
    "UHT milk",
    "dairy ingredients",
    "food manufacturing India",
    "institutional dairy solutions"
  ],
  openGraph: {
    title: "Amrit Food | Quietly Powering India's Food Experiences",
    description: "Trust, scale, purity, innovation, and future-focused food manufacturing.",
    type: "website",
    locale: "en_IN"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
