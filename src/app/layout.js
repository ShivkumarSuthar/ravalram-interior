import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

import ThemeProvider from "@/components/providers/ThemeProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";

import LoadingScreen from "@/components/layout/LoadingScreen";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Antra Interior",
  description: "Luxury Interior Design Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jakarta.variable}>

        <ThemeProvider>

          <SmoothScroll>

            <LoadingScreen />

            <ScrollProgress />

            <CustomCursor />

            {children}

          </SmoothScroll>

        </ThemeProvider>

      </body>
    </html>
  );
}