// src/app/layout.jsx 
// FINAL VERSION - Global SEO, Schema, and Performance Configuration

import "./globals.css";
// NOTE: Remove "bootstrap/dist/css/bootstrap.min.css" import if you use Tailwind/CSS modules primarily.

import { Inter } from 'next/font/google'; 
const inter = Inter({ subsets: ['latin'] });  


// 🔑 CRITICAL SEO METADATA
export const metadata = {
  title: {
    template: '%s | Suthar Interior Studio',
    default: 'Suthar Interior Studio: Renovation & Fit-out Services in Mumbai, Goa & Karnataka', 
  },
  
  description: 
    'Suthar Interior Studio specializes in **turnkey project execution, full renovation, and commercial fit-outs** across **Mumbai, Goa, Hubli, Kumta, and Honnavar**. Expert project management led by Ravalram Suthar.',
  
  icons: {
    icon: '/Suthar interior studio.ico',          // Browser tab
    apple: '/Suthar interior studio.icog',         // iOS
    shortcut: '/Suthar interior studio.ico',      // Legacy support
  },
  openGraph: {
    title: 'Suthar Interior Studio: Multi-Regional Renovation Experts (Mumbai to Goa)',
    url: 'https://www.sutharinteriorstudio.in/', 
    siteName: 'Suthar Interior Studio',
    images: [{ url: 'https://www.sutharinteriorstudio.in/Suthar interior studio.png', width: 1200, height: 630, alt: 'Suthar Interior Renovation Team at work on a site' }],
  },
};

// 🔑 ADVANCED SEO: JSON-LD Schema Markup for a Service Area Business (E-A-T)
const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      // LocalBusiness Schema (For Service Area Businesses)
      '@type': 'LocalBusiness',
      name: 'Suthar Interior Contractors',
      url: 'https://www.sutharinteriorstudio.in/',
      logo: 'https://www.sutharinteriorstudio.in/images/Suthar interior studio.png',
      telephone: '+919004538149', // YOUR PHONE NUMBER
      priceRange: '₹₹₹',
      
      // IMPORTANT: Define the Service Area (required for door-service businesses)
      areaServed: [
        { '@type': 'State', name: 'Maharashtra' }, 
        { '@type': 'State', name: 'Goa' },
        { '@type': 'State', name: 'Karnataka' },
        { '@type': 'City', name: 'Mumbai' },
        { '@type': 'City', name: 'Hubli' },
        { '@type': 'City', name: 'Kumta' },
        { '@type': 'City', name: 'Honnavar' },
      ],
      owner: { '@id': '#ravalram' },
    },
    {
      // Person Schema for E-A-T
      '@type': 'Person',
      '@id': '#ravalram',
      name: 'Ravalram Suthar',
      url: 'https://www.sutharinteriorstudio.in/about', 
    },
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}> 
      <head>
        {/* 🔑 SEO: Embed the Schema Markup in the <head> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>

      <body className="min-h-screen flex flex-col relative">
        <main className="flex-grow"> 
          {children} 
        </main>
        
        {/* Floating WhatsApp Button (Using provided number) */}
        <a
          href="https://wa.me/919004538149" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp for Renovation Quote" 
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
            <path d="M16.001 3.2c-7.054 0-12.8 5.746-12.8 12.8 0 2.258.592 4.456 1.719 6.408l-1.826 6.683 6.855-1.797A12.71 12.71 0 0 0 16.001 28.8c7.054 0 12.8-5.746 12.8-12.8s-5.746-12.8-12.8-12.8zm0 23.2a10.33 10.33 0 0 1-5.272-1.463l-.377-.221-4.066 1.065 1.081-3.953-.245-.403A10.333 10.333 0 1 1 26.334 16c0 5.702-4.631 10.334-10.333 10.334zm5.736-7.752c-.313-.157-1.853-.913-2.142-1.018-.288-.105-.498-.157-.707.157-.208.313-.811 1.018-.995 1.226-.183.209-.366.236-.68.078-.313-.157-1.32-.486-2.514-1.55-.929-.829-1.556-1.853-1.74-2.166-.183-.313-.02-.482.138-.639.142-.142.313-.366.47-.549.157-.183.209-.313.314-.521.105-.209.052-.392-.026-.549-.078-.157-.707-1.706-.97-2.341-.255-.61-.515-.528-.707-.538-.183-.009-.392-.011-.601-.011s-.549.078-.837.392c-.288.313-1.097 1.072-1.097 2.614s1.123 3.03 1.28 3.239c.157.209 2.211 3.376 5.356 4.734.75.324 1.335.517 1.791.662.752.239 1.437.205 1.978.125.604-.09 1.853-.757 2.115-1.488.262-.73.262-1.355.183-1.487-.078-.131-.287-.209-.6-.366z" />
          </svg>
        </a>
      </body>
    </html>
  );
}