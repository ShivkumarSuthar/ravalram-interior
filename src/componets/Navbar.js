"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import data from "@/app/data.json";

const menu = data.navbar;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [desktopHoverDropdown, setDesktopHoverDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close mobile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar-container">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="logo-text">
          Ravalram Interior
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {menu.map((item, idx) => (
            <li 
              key={item.name} 
              className="relative"
              onMouseEnter={() => setDesktopHoverDropdown(idx)}
              onMouseLeave={() => setDesktopHoverDropdown(null)}
            >
              <Link 
                href={item.href} 
                className="nav-link flex items-center gap-1 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-[--color-brand]/10"
              >
                {item.name}
                {item.dropdown && <ChevronDown size={14} />}
              </Link>

              {item.dropdown && (
                <ul className={`absolute left-0 top-full mt-0 w-56 bg-white text-black/60 shadow-lg z-50 transition-all duration-300 ${
                  desktopHoverDropdown === idx 
                    ? "opacity-100 visible translate-y-0" 
                    : "opacity-0 invisible -translate-y-2"
                }`}>
                  {item.dropdown.map((drop) => (
                    <li key={drop.name}>
                      <Link
                        href={drop.href}
                        className="block px-4 py-3 text-[--color-gray] hover:bg-[--color-brand]/10 hover:text-[--color-brand] transition-colors border-b border-[--navbar-border] last:border-b-0"
                      >
                        {drop.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:+919004538149" 
            className="flex items-center gap-2 text-[--color-dark] hover:text-[--color-brand] transition-colors"
          >
            <Phone size={16} /> +91 9004538149
          </a>
          <Link 
            href="/quote" 
            className="get-quote-btn hover:bg-[--color-brand-hover] transition-colors"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[--color-dark] p-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div 
          ref={dropdownRef}
          className="lg:hidden bg-[--color-light] border-t border-[--navbar-border] shadow-lg animate-fadeIn"
        >
          <ul className="flex flex-col p-4 space-y-1">
            {menu.map((item, idx) => (
              <li key={item.name} className="flex flex-col border-b border-[--navbar-border] last:border-b-0">
                <div className="flex justify-between items-center py-3">
                  <Link
                    href={item.href}
                    className="block text-[--color-gray] hover:text-[--color-brand] transition-colors font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>

                  {item.dropdown && (
                    <button 
                      onClick={() => toggleDropdown(idx)}
                      className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      {activeDropdown === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdown === idx && (
                  <ul className="pl-4 ml-2 mb-2 bg-white">
                    {item.dropdown.map((drop) => (
                      <li key={drop.name}>
                        <Link
                          href={drop.href}
                          className="block text-[--color-gray] py-2 px-3 rounded-md hover:bg-[--color-brand]/10 hover:text-[--color-brand] transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {drop.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Mobile buttons */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[--navbar-border]">
              <a
                href="tel:+919004538149"
                className="text-center border border-[--color-brand] text-[--color-brand] px-4 py-3 rounded-md hover:bg-[--color-brand] hover:text-[--color-light] transition-all font-medium"
                onClick={() => setOpen(false)}
              >
                Call Now
              </a>
              <Link
                href="/quote"
                className="text-center bg-[--color-brand] text-[--color-light] px-4 py-3 rounded-md hover:bg-[--color-brand-hover] transition-all font-medium"
                onClick={() => setOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}