"use client";

import { usePathname } from "next/navigation";
import WhatsAppIcon from "./WhatsAppIcon";
import { CONTACT } from "../../lib/home-content";

// Floating WhatsApp chat button, stacked above the scroll meter in the bottom-right corner.
// The prefilled message names the page the visitor was reading.
export default function WhatsAppButton() {
  const pathname = usePathname();

  const openChat = () => {
    const page = pathname === "/" ? "" : ` (I was looking at: ${document.title.split("|")[0].trim()})`;
    const text = encodeURIComponent(`${CONTACT.whatsappMessage}${page}`);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={openChat}
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-19 right-4 z-[80] grid size-12 place-items-center rounded-full bg-whatsapp text-white shadow-xl transition-transform duration-300 hover:scale-105 sm:bottom-23 sm:right-5 sm:size-15 lg:bottom-30 lg:right-12.5"
    >
      <WhatsAppIcon className="size-6 sm:size-7.5" />
      <span
        aria-hidden
        className="pointer-events-none absolute right-full mr-3 translate-x-2 whitespace-nowrap rounded-full bg-surface-dark px-4 py-2 font-heading text-base text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
      >
        Chat with us
      </span>
    </button>
  );
}
