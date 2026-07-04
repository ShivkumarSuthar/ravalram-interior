import "../index.css";
import LuxuryChatbot from "../components/LuxuryChatbot";

export const metadata = {
  title: "Suthar Interior Studio & Architecture | Mumbai, Goa, Pune",
  description: "Exquisite spatial layouts and master timber joinery. Elevating luxury residential and commercial spaces with generational woodworking heritage.",
};

export const viewport = {
  themeColor: 'var(--global-color-field)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=crimson-pro@200,300,400,500,600,700,800,900,201,301,401,501,601,701,801,901&display=swap" rel="stylesheet" />
      </head>
      <body className="relative min-h-screen bg-field text-stone-900 selection:bg-gold-500 selection:text-stone-950">
        {/* Fixed subtle grid layout accents */}
        <div className="fixed inset-0 pointer-events-none z-30 opacity-5">
          <div className="max-w-8xl mx-auto h-full w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-l border-stone-400 h-full" />
            <div className="border-l border-stone-400 h-full" />
            <div className="border-l border-stone-400 h-full border-r" />
          </div>
        </div>

        {children}
        
        <LuxuryChatbot />
      </body>
    </html>
  );
}
