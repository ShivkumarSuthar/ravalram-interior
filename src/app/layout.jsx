import "../index.css";
import { Cal_Sans, Golos_Text } from "next/font/google";
import AntraPreloader from "../components/AntraPreloader";
import QuoteModal from "../components/site/QuoteModal";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/site/CustomCursor";
import ScrollProgress from "../components/site/ScrollProgress";
import WhatsAppButton from "../components/site/WhatsAppButton";
import { ThemeProvider } from "../lib/theme";
import { viewport } from "../lib/seo";

// Brand fonts (self-hosted by next/font at build time)
// Cal Sans ships a single weight (400); Golos Text is variable
const calSans = Cal_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cal-sans",
  display: "swap",
  adjustFontFallback: false,
});

const golosText = Golos_Text({
  subsets: ["latin"],
  variable: "--font-golos",
  display: "swap",
});

export { viewport };

export const metadata = {
  title: "Suthar Living | Interior Design, Furniture & Renovation",
  description: "Thoughtful interiors that bring together design, craftsmanship, functionality, and lasting quality since 1989.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${calSans.variable} ${golosText.variable}`} suppressHydrationWarning>
      <head />
      <body className="relative min-h-screen bg-bg-base text-stone-900 selection:bg-gold-accent selection:text-stone-950" suppressHydrationWarning>
        <AntraPreloader />
        <ThemeProvider>
          <SmoothScroll>
            {children}

            <ScrollProgress />
            <WhatsAppButton />
            <CustomCursor />
            <QuoteModal />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
