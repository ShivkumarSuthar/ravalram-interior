import "../index.css";
import { Cal_Sans, Golos_Text } from "next/font/google";
import SiteLoader from "../components/site/SiteLoader";
import QuoteModal from "../components/site/QuoteModal";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/site/CustomCursor";
import ChatWidget from "../components/site/ChatWidget";
import { viewport } from "../lib/seo";
import { headScript } from "../lib/theme-script";

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
  title: "Suthar Brothers | Interior Design & Execution",
  description: "Interior design and execution for homes, offices and commercial spaces, backed by 30+ years of experience.",
};

// Server layout. Client islands (preloader, smooth scroll, cursor, floating buttons, quote popup)
// wrap or sit beside the server-rendered pages; they do not turn the pages into client code.
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${calSans.variable} ${golosText.variable}`} suppressHydrationWarning>
      <head>
        {/* Before first paint: apply the saved / system theme and decide whether the intro loader plays */}
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
      </head>
      <body className="relative min-h-screen bg-bg-base text-ink selection:bg-primary selection:text-white" suppressHydrationWarning>
        <SiteLoader />
        <SmoothScroll>
          {children}

          <ChatWidget />
          <CustomCursor />
          <QuoteModal />
        </SmoothScroll>
      </body>
    </html>
  );
}
