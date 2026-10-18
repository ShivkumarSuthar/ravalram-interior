"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, ArrowRight } from "lucide-react";
import useOverlay from "./useOverlay";
import { EASE_OUT } from "./Reveal";
import { SEARCH_INDEX } from "../../lib/home-content";

// Panel that drops from the top and filters the site's pages, projects and articles
export default function SearchPopup({ open, onClose }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  useOverlay(open, onClose);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? SEARCH_INDEX.filter((item) => item.label.toLowerCase().includes(q)).slice(0, 8) : [];
  }, [query]);

  const close = () => {
    setQuery("");
    onClose();
  };

  const submit = (e) => {
    e.preventDefault();
    if (results[0]) {
      router.push(results[0].href);
      close();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="search-overlay"
            aria-hidden
            onClick={close}
            className="fixed inset-0 z-[90] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            key="search-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Search the site"
            className="fixed inset-x-0 top-0 z-[95] bg-bg-base shadow-xl"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            <div className="relative mx-auto max-w-heading px-5 py-14">
              <button
                type="button"
                onClick={close}
                aria-label="Close search"
                className="absolute right-5 top-4 grid size-10 place-items-center rounded-full text-surface-dark transition-colors hover:bg-primary hover:text-white"
              >
                <X className="size-5" />
              </button>

              <form onSubmit={submit} className="relative border-b border-surface-dark/30 transition-colors focus-within:border-primary">
                <label htmlFor="site-search" className="sr-only">Search pages, projects and articles</label>
                <input
                  id="site-search"
                  autoFocus
                  autoComplete="off"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages, projects and articles"
                  className="w-full bg-transparent py-4 pr-12 font-heading text-card-lg text-surface-dark outline-none placeholder:text-line focus-visible:outline-none!"
                />
                <button type="submit" aria-label="Search" className="absolute right-0 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-primary text-white">
                  <Search className="size-4.5" />
                </button>
              </form>

              {query.trim() && (
                results.length ? (
                  <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
                    {results.map((r) => (
                      <li key={r.href + r.label}>
                        <Link
                          href={r.href}
                          onClick={close}
                          className="group flex items-center justify-between gap-4 border-b border-line/20 py-3 font-heading text-base text-surface-dark transition-colors hover:text-primary"
                        >
                          {r.label}
                          <ArrowRight className="size-4 shrink-0 -rotate-45 transition-transform group-hover:rotate-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 text-base text-text-muted">Nothing matches “{query.trim()}”. Try “kitchen”, “Mumbai” or “renovation”.</p>
                )
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
