"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/site";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [glass, setGlass] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setGlass(current > 50);

      if (current > lastScroll && current > 120) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container>
        <div
          className={`mt-5 flex h-20 items-center justify-between rounded-full px-8 transition-all duration-500 ${
            glass
              ? "border border-white/20 bg-white/70 shadow-xl backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold tracking-[6px]"
          >
            ANTRA
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-[15px] font-medium"
              >
                {item.name}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button className="hidden rounded-full bg-amber-600 px-7 hover:bg-amber-700 lg:flex">
              Get Quote

              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}