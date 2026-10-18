"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronDown, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import useOverlay from "./useOverlay";
import { NAV, SIDEBAR, CONTACT } from "../../lib/home-content";

export default function Sidebar({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);
  useOverlay(open, onClose);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="sidebar-overlay"
            aria-hidden
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.aside
            key="sidebar"
            id="site-sidebar"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            data-lenis-prevent
            className="fixed right-0 top-0 z-[95] h-full w-full max-w-137.5 overflow-y-auto bg-surface-dark px-6 pb-15 pt-8.5 sm:px-17.5"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between">
              <Logo tone="light" />
              <button
                type="button"
                onClick={onClose}
                autoFocus
                aria-label="Close menu"
                className="grid size-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:bg-primary"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Main menu lives here below desktop widths */}
            <nav aria-label="Mobile" className="mt-10 xl:hidden">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {NAV.map((item) => (
                  <li key={item.label}>
                    <div className="flex items-center justify-between">
                      <Link href={item.href} onClick={onClose} className="flex-1 py-4 font-heading text-lead-lg text-white transition-colors hover:text-primary">
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          type="button"
                          aria-expanded={expanded === item.label}
                          aria-controls={`mobile-sub-${item.label}`}
                          aria-label={`Show ${item.label} links`}
                          onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                          className="grid size-10 place-items-center text-white"
                        >
                          <ChevronDown className={`size-5 transition-transform duration-300 ${expanded === item.label ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    <AnimatePresence initial={false}>
                      {item.children && expanded === item.label && (
                        <motion.ul
                          id={`mobile-sub-${item.label}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pb-3 pl-4"
                        >
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link href={child.href} onClick={onClose} className="block py-2 text-base text-white/70 transition-colors hover:text-primary">
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </nav>

            <p className="mt-12 font-heading text-card-lg text-white">{SIDEBAR.title}</p>

            <ul className="mt-8 grid grid-cols-3 gap-2.5">
              {SIDEBAR.gallery.map((img) => (
                <li key={img.src} className="aspect-square overflow-hidden rounded-xl">
                  <Link href="/gallery" onClick={onClose} className="block size-full">
                    <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-700 hover:scale-105" />
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-10 space-y-4 text-base text-white/80">
              <li className="flex gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 size-5 shrink-0 text-primary" />
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-primary">{CONTACT.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 size-5 shrink-0 text-primary" />
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-primary">{CONTACT.email}</a>
              </li>
            </ul>

            <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
              {CONTACT.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-heading text-base text-white transition-colors hover:text-primary">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
