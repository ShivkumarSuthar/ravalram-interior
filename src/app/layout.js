// src/app/layout.jsx
// FINAL VERSION - Global SEO, Schema, and Performance Configuration

import "./globals.css";
import { Inter } from "next/font/google";

import fs from "fs";
import path from "path";
import Navbar from "@/componets/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

// 🔑 CRITICAL SEO METADATA
export const metadata = {
  title: {
    template: "%s | Suthar Interior Studio",
    default:
      "Suthar Interior Studio: Renovation & Fit-out Services in Mumbai, Goa & Karnataka",
  },
  description:
    "Suthar Interior Studio specializes in turnkey project execution, full renovation, and commercial fit-outs across Mumbai, Goa, Hubli, Kumta, and Honnavar. Expert project management led by Ravalram Suthar.",
  icons: {
    icon: "/Suthar interior studio.ico",
    apple: "/Suthar interior studio.icog",
    shortcut: "/Suthar interior studio.ico",
  },
  openGraph: {
    title:
      "Suthar Interior Studio: Multi-Regional Renovation Experts (Mumbai to Goa)",
    url: "https://www.sutharinteriorstudio.in/",
    siteName: "Suthar Interior Studio",
    images: [
      {
        url: "https://www.sutharinteriorstudio.in/Suthar interior studio.png",
        width: 1200,
        height: 630,
        alt: "Suthar Interior Renovation Team at work on a site",
      },
    ],
  },
};

// 🔑 JSON-LD Schema
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Suthar Interior Contractors",
      url: "https://www.sutharinteriorstudio.in/",
      logo: "https://www.sutharinteriorstudio.in/images/Suthar interior studio.png",
      telephone: "+919004538149",
      priceRange: "₹₹₹",
      areaServed: [
        { "@type": "State", name: "Maharashtra" },
        { "@type": "State", name: "Goa" },
        { "@type": "State", name: "Karnataka" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Hubli" },
        { "@type": "City", name: "Kumta" },
        { "@type": "City", name: "Honnavar" },
      ],
      owner: { "@id": "#ravalram" },
    },
    {
      "@type": "Person",
      "@id": "#ravalram",
      name: "Ravalram Suthar",
      url: "https://www.sutharinteriorstudio.in/about",
    },
  ],
};

export default function RootLayout({ children }) {
  // ✅ Load navbar data ONCE globally
  const filePath = path.join(process.cwd(), "src/app/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const { navbar } = JSON.parse(jsonData);

  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col relative">
        {/* ✅ GLOBAL NAVBAR */}
        <Navbar menu={navbar} />

        <main className="flex-grow">{children}</main>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919004538149"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp for Renovation Quote"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path d="M16.001 3.2c-7.054 0-12.8 5.746-12.8 12.8 0 2.258.592 4.456 1.719 6.408l-1.826 6.683 6.855-1.797A12.71 12.71 0 0 0 16.001 28.8c7.054 0 12.8-5.746 12.8-12.8s-5.746-12.8-12.8-12.8z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
