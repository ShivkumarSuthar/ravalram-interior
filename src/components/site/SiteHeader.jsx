"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ChevronDown, Phone, Search } from "lucide-react";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import SearchPopup from "./SearchPopup";
import ThemeToggle from "./ThemeToggle";
import { NAV, CONTACT } from "../../lib/home-content";

const isActive = (pathname, href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

// Transparent over the hero; after 110px of scroll it re-enters from the top as a fixed bar.
// tone="dark": dark text, white bar (homepage). tone="light": white text over page banners, dark bar.
export default function SiteHeader({ tone = "dark" }) {
  const pathname = usePathname();
  const [fixed, setFixed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setFixed(window.scrollY >= 110);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = tone === "light";
  const ink = light ? "text-white" : "text-ink";
  const iconButton = `grid size-12 place-items-center rounded-full border transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white sm:size-14 ${
    light ? "border-white/30 text-white" : "border-ink text-ink"
  }`;
  const fixedBar = light ? "bg-surface-dark" : "bg-bg-base shadow-sm";

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <motion.div
        key={fixed ? "fixed" : "top"}
        initial={fixed ? { y: "-100%" } : false}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={fixed ? `fixed inset-x-0 top-0 ${fixedBar}` : "absolute inset-x-0 top-0"}
      >
        <div className="mx-auto flex h-24.5 max-w-site items-center justify-between gap-6 px-3 lg:px-5">
          <div className="flex items-center gap-14">
            <Logo tone={light ? "light" : "dark"} />
            <nav aria-label="Main" className="hidden xl:block">
              <ul className="flex items-center gap-6 2xl:gap-8.5">
                {NAV.map((item) => (
                  <li key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className={`flex items-center gap-1 py-9 font-heading text-base transition-colors duration-300 hover:text-primary ${
                        isActive(pathname, item.href) ? "text-primary" : ink
                      }`}
                    >
                      {item.label}
                      {item.children && <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />}
                    </Link>
                    {item.children && (
                      <ul className="invisible absolute left-0 top-full w-64 translate-y-3 rounded-2xl bg-bg-base p-3 opacity-0 shadow-xl transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block rounded-xl px-4 py-2.5 font-heading text-base text-ink transition-all duration-300 hover:translate-x-1 hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a href={CONTACT.phoneHref} className="group mr-1 hidden items-center gap-3 min-[1600px]:flex">
              <Phone className={`size-7 ${ink}`} strokeWidth={1.4} />
              <span>
                <span className={`block text-sm ${ink}`}>Call Us</span>
                <span className={`block font-heading text-lead transition-colors duration-300 group-hover:text-primary ${ink}`}>
                  {CONTACT.phone}
                </span>
              </span>
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-quotation"))}
              className={`hidden h-14 items-center rounded-full border border-primary bg-primary px-7.5 font-heading text-base text-white transition-colors duration-300 md:inline-flex ${
                light ? "hover:border-white hover:bg-white hover:text-surface-dark" : "hover:border-surface-dark hover:bg-surface-dark"
              }`}
            >
              Get In Touch
            </button>
            <ThemeToggle className={`${iconButton} hidden sm:grid`} />
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              aria-expanded={searchOpen}
              className={`${iconButton} hidden sm:grid`}
            >
              <Search className="size-4.5" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              aria-expanded={sidebarOpen}
              aria-controls="site-sidebar"
              className={iconButton}
            >
              <span aria-hidden className="grid grid-cols-2 gap-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="size-1.5 rounded-full bg-current" />
                ))}
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <SearchPopup open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
