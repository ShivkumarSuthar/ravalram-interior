"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "../../lib/theme-script";

const ORDER = ["system", "light", "dark"];
const META = {
  system: { Icon: Monitor, label: "System theme" },
  light: { Icon: Sun, label: "Light theme" },
  dark: { Icon: Moon, label: "Dark theme" },
};

const systemPrefersDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

function apply(mode) {
  const dark = mode === "dark" || (mode === "system" && systemPrefersDark());
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
  root.dataset.theme = mode;
}

// Cycles System -> Light -> Dark. "System" follows the OS setting live, including changes while open.
export default function ThemeToggle({ className = "", showLabel = false }) {
  const [mode, setMode] = useState("system");

  useEffect(() => {
    setMode(document.documentElement.dataset.theme || "system");
  }, []);

  useEffect(() => {
    if (mode !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [mode]);

  const next = () => {
    const nextMode = ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length];
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextMode);
    } catch {}
    apply(nextMode);
    setMode(nextMode);
  };

  const { Icon, label } = META[mode];
  const nextLabel = META[ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length]].label;

  return (
    <button
      type="button"
      onClick={next}
      aria-label={`${label}. Switch to ${nextLabel.toLowerCase()}`}
      title={`${label} (click to change)`}
      className={className}
    >
      <Icon className="size-4.5" strokeWidth={2.2} />
      {showLabel && <span className="ml-2.5 font-heading text-base">{label}</span>}
    </button>
  );
}
