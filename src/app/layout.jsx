import "../index.css";
import { Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import SiteLoader from "../components/site/SiteLoader";
import QuoteModal from "../components/site/QuoteModal";
import SmoothScroll from "../components/site/SmoothScroll";
import CustomCursor from "../components/site/CustomCursor";
import ChatWidget from "../components/site/ChatWidget";
import { viewport } from "../lib/seo";
import { headScript } from "../lib/theme-script";

// Brand fonts (self-hosted by next/font at build time)
// Cal Sans ships a single weight (400). It is a local file (Google Fonts latin subset) because next/font/google
// has no metrics for it; from the file next/font builds a size-matched Arial fallback, so text doesn't jump on load.
// Golos Text is variable.
const calSans = localFont({
  src: "../fonts/CalSans-Regular.woff2",
  weight: "400",
  variable: "--font-cal-sans",
  display: "swap",
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
