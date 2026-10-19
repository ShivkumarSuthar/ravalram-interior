"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

// Brand-styled dropdown that replaces the browser's <select>, whose list is drawn by the OS and cannot
// be styled (and takes over the whole screen on phones). The list opens just below the field, scrolls
// inside a fixed height, and works with the mouse, touch and keyboard.
// It calls onChange with { target: { name, value } }, the same shape a native select gives, so the
// forms' existing handlers work unchanged.
export default function Select({ id, name, value, onChange, options, placeholder, className = "" }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef(null);
  const listId = useId();

  const all = [{ value: "", label: placeholder }, ...options.map((o) => ({ value: o, label: o }))];
  const selectedIndex = Math.max(0, all.findIndex((o) => o.value === value));
  const selected = all[selectedIndex];

  const choose = (index) => {
    onChange({ target: { name, value: all[index].value } });
    setOpen(false);
  };

  // Close on an outside press or Escape
  useEffect(() => {
    if (!open) return;
    const onPress = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPress);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPress);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const openList = () => {
    setActive(selectedIndex);
    setOpen(true);
  };

  const onKeyDown = (e) => {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    const last = all.length - 1;
    const moves = { ArrowDown: Math.min(active + 1, last), ArrowUp: Math.max(active - 1, 0), Home: 0, End: last };
    if (e.key in moves) {
      e.preventDefault();
      setActive(moves[e.key]);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(active);
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? `${listId}-${active}` : undefined}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
        className={`${className} flex items-center justify-between gap-3 text-left`}
      >
        <span className={selectedIndex === 0 ? "text-text-muted" : ""}>{selected.label}</span>
        <ChevronDown className={`size-4 shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={id}
          className="absolute inset-x-0 top-full z-30 mt-2 max-h-60 overflow-y-auto overscroll-contain rounded-2xl border border-line/30 bg-bg-base p-1.5 shadow-2xl"
        >
          {all.map((opt, i) => {
            const isSelected = i === selectedIndex;
            const isActive = i === active;
            return (
              <li
                key={opt.value || "placeholder"}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={isSelected}
                onPointerEnter={() => setActive(i)}
                onClick={() => choose(i)}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-2.5 font-heading text-base transition-colors ${
                  isActive ? "bg-primary text-white" : "text-ink"
                }`}
              >
                <span className={i === 0 && !isActive ? "text-text-muted" : ""}>{opt.label}</span>
                {isSelected && i !== 0 && <Check className="size-4 shrink-0" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
