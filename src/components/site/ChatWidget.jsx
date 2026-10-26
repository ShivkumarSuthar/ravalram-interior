"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { FileText, MessageCircle, Phone, Tag, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { CONTACT } from "../../lib/home-content";

// Pages where the chat stays out of the way (the visitor is already filling a form)
const HIDDEN_ON = ["/contact", "/thank-you", "/coming-soon"];
// Opens itself once per browser session, after this many milliseconds
const AUTO_OPEN_MS = 5000;
const SEEN_KEY = "suthar_chat_seen";

const OPTION =
  "flex w-full items-center gap-3 rounded-2xl border border-line/30 px-4 py-3 text-left font-heading text-base text-ink transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white";

// Floating chat: one bubble (bottom-right) that opens a panel of quick options.
// Opens by itself once per session after a few seconds; the visitor can close it at any time.
export default function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hidden = HIDDEN_ON.includes(pathname);

  // Auto-open once per session
  useEffect(() => {
    if (hidden) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    if (seen) return;
    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, AUTO_OPEN_MS);
    return () => clearTimeout(timer);
  }, [hidden]);

  // Escape closes the panel
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (hidden) return null;

  const whatsappHref = () => {
    const page = pathname === "/" ? "" : ` (I was looking at: ${document.title.split("|")[0].trim()})`;
    return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`${CONTACT.whatsappMessage}${page}`)}`;
  };

  const openQuote = () => {
    setOpen(false);
    window.dispatchEvent(new CustomEvent("open-quotation"));
  };

  return (
    <div className="fixed bottom-5 right-4 z-[80] flex flex-col items-end sm:bottom-6 sm:right-5 lg:bottom-12.5 lg:right-12.5">
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            id="site-chat"
            role="dialog"
            aria-label="Chat with Suthar Brothers"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-[min(20rem,calc(100vw-2.5rem))] rounded-3xl border border-line/20 bg-bg-base p-5 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-heading text-lead text-ink">Suthar Brothers</p>
                <p className="mt-1 text-sm leading-6 text-text-muted">Hi! How can we help you today?</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-line/30 text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-5 grid gap-2.5">
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className={OPTION}>
                <WhatsAppIcon className="size-5 shrink-0 text-whatsapp" />
                Chat on WhatsApp
              </a>
              <a href={CONTACT.phoneHref} className={OPTION}>
                <Phone className="size-5 shrink-0 text-primary" />
                Call us
              </a>
              <button type="button" onClick={openQuote} className={OPTION}>
                <FileText className="size-5 shrink-0 text-primary" />
                Request a quote
              </button>
              <Link href="/pricing" onClick={() => setOpen(false)} className={OPTION}>
                <Tag className="size-5 shrink-0 text-primary" />
                View pricing
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        aria-controls="site-chat"
        className="grid size-14 place-items-center rounded-full bg-primary text-white shadow-xl transition-transform duration-300 hover:scale-105 sm:size-15"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" strokeWidth={2.2} />}
      </button>
    </div>
  );
}
