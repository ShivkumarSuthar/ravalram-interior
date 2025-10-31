
import "./globals.css";

export const metadata = {
  title: "Next.js SSR Navbar",
  description: "Server-rendered Tailwind navbar with JSON config",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
