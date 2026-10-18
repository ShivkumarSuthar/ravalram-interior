"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

// Numbered question list; one answer open at a time, the first open by default
export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <ul className="border-t border-line/30">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <li key={item.question} className="border-b border-line/30">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex w-full items-center gap-4 py-6 text-left"
              >
                <span className={`w-8 shrink-0 font-heading text-base transition-colors ${isOpen ? "text-primary" : "text-surface-dark"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`flex-1 font-heading text-card transition-colors group-hover:text-primary ${isOpen ? "text-primary" : "text-surface-dark"}`}>
                  {item.question}
                </span>
                <Plus className={`size-5 shrink-0 text-surface-dark transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pl-12 pr-8 text-base leading-7 text-text-muted">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
