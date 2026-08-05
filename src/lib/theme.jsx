"use client";

/**
 * Suthar Interior Studio - Theme Engine
 *
 * Brand Colors:
 * Primary: #CAA05C
 * Heading: #191919
 * Body Text: #4D4D52
 * White: #FFFFFF
 */

import React, { createContext, useContext, useState, useEffect } from "react";

// Single Brand Theme
export const THEME_PRESETS = [
  {
    id: "suthar",
    name: "Suthar Interior Studio",
    description: "Official Suthar Brand Theme",

    // Brand Accent
    primary: "#CAA05C",
    primaryHover: "#B88D48",

    // Backgrounds
    bgBase: "#FFFFFF",
    bgDark: "#0F0F0F",
    surfaceDark: "#191919",

    // Typography
    textMuted: "#4D4D52",
  },
];

// Default Theme
export const DEFAULT_THEME = THEME_PRESETS[0];

// Apply CSS Variables
export function applyThemeToCSS(theme = DEFAULT_THEME) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  const primary = theme.primary || "#CAA05C";
  const primaryHover = theme.primaryHover || "#B88D48";
  const bgBase = theme.bgBase || "#FFFFFF";
  const bgDark = theme.bgDark || "#0F0F0F";
  const surfaceDark = theme.surfaceDark || "#191919";
  const textMuted = theme.textMuted || "#4D4D52";

  // Semantic Variables
  root.style.setProperty("--color-primary", primary);
  root.style.setProperty("--color-primary-hover", primaryHover);
  root.style.setProperty("--color-bg-base", bgBase);
  root.style.setProperty("--color-bg-dark", bgDark);
  root.style.setProperty("--color-surface-dark", surfaceDark);
  root.style.setProperty("--color-text-muted", textMuted);

  // Original Theme Variables
  root.style.setProperty("--tl-color-common-white", "#FFFFFF");
  root.style.setProperty("--tl-color-heading-primary", "#191919");
  root.style.setProperty("--tl-color-text-body", "#4D4D52");
  root.style.setProperty("--tl-color-theme-primary", primary);

  // Legacy Variables
  root.style.setProperty("--color-gold-accent", primary);
  root.style.setProperty("--color-gold-hover", primaryHover);

  root.style.setProperty("--color-orange-accent", primary);
  root.style.setProperty("--color-orange-hover", primaryHover);

  root.style.setProperty("--color-gold-500", primary);
  root.style.setProperty("--color-gold-600", primaryHover);
  root.style.setProperty("--color-gold-400", primary);

  root.style.setProperty("--color-warm-white", bgBase);
  root.style.setProperty("--color-dark-charcoal", bgDark);
  root.style.setProperty("--color-neutral-slate", surfaceDark);
  root.style.setProperty("--color-stone-gray", textMuted);
}

// Apply Default Theme safely on client
if (typeof window !== "undefined" && typeof document !== "undefined") {
  applyThemeToCSS(DEFAULT_THEME);
}

const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  setThemePreset: () => {},
  updateThemeColors: () => {},
  resetTheme: () => {},
  presets: THEME_PRESETS,
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    setTheme(DEFAULT_THEME);
    applyThemeToCSS(DEFAULT_THEME);
  }, []);

  const setThemePreset = (presetId) => {
    const selected =
      THEME_PRESETS.find((theme) => theme.id === presetId) || DEFAULT_THEME;

    setTheme(selected);
    applyThemeToCSS(selected);
  };

  const updateThemeColors = (updates) => {
    const updatedTheme = {
      ...theme,
      ...updates,
      id: "custom",
    };

    setTheme(updatedTheme);
    applyThemeToCSS(updatedTheme);
  };

  const resetTheme = () => {
    setTheme(DEFAULT_THEME);
    applyThemeToCSS(DEFAULT_THEME);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setThemePreset,
        updateThemeColors,
        resetTheme,
        presets: THEME_PRESETS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}