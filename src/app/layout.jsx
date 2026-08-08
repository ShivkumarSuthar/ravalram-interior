import "../index.css";
import ScrollNavigation from "../components/ScrollNavigation";
import AntraPreloader from "../components/AntraPreloader";
import { ThemeProvider } from "../lib/theme";

export const metadata = {
  title: "Suthar Interior Studio & Architecture | Bespoke Woodworking & Luxury Interiors",
  description: "Architect-supervised high-end residential interiors, luxury commercial showrooms, and bespoke woodworking joinery since 1989.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300..800;1,300..800&family=Montserrat:ital,wght@0,300..800;1,300..800&family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </head>
      <body className="relative min-h-screen bg-bg-base text-stone-900 selection:bg-gold-accent selection:text-stone-950" suppressHydrationWarning>
        <AntraPreloader />
        <ThemeProvider>
          {/* Fixed subtle grid layout accents */}
          <div className="fixed inset-0 pointer-events-none z-30 opacity-5">
            <div className="max-w-7xl mx-auto h-full w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="border-l border-stone-400 h-full" />
              <div className="border-l border-stone-400 h-full" />
              <div className="border-l border-stone-400 h-full border-r" />
            </div>
          </div>

          {children}
          
          <ScrollNavigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
