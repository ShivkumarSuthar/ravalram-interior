"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "../../lib/theme-script";

// Only two themes: light and dark. Until the visitor picks one, the site follows the system setting
// (and keeps following it live); the first click stores an explicit choice that is never overridden.
function apply(dark) {
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
  root.dataset.theme = dark ? "dark" : "light";
}

export default function ThemeToggle({ className = "", showLabel = false }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

    let stored = null;
    try {
      stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {}
    // An explicit light/dark choice from before: nothing else changes it
    if (stored === "light" || stored === "dark") return;

    // No choice yet: follow the system theme, including changes while the page is open
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      apply(e.matches);
      setDark(e.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = !dark;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
    } catch {}
    apply(next);
    setDark(next);
  };

  const Icon = dark ? Moon : Sun;
  const label = dark ? "Dark theme" : "Light theme";
  const nextLabel = dark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`${label}. Switch to ${nextLabel} theme`}
      title={`${label} (click to switch)`}
      className={className}
    >
      <Icon className="size-4.5" strokeWidth={2.2} />
      {showLabel && <span className="ml-2.5 font-heading text-base">{label}</span>}
    </button>
  );
}
