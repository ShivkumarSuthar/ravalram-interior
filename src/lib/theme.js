"use client";

/**
 * Suthar Interior Studio & Architecture - Dynamic Theme Engine & Configuration
 * 
 * Semantic tokens (color-agnostic):
 * - primary: Main brand accent color
 * - primaryHover: Hover state for primary accent
 * - bgBase: Base light canvas/background
 * - bgDark: Primary dark section background (header/footer/hero)
 * - surfaceDark: Secondary dark surface background
 * - textMuted: Secondary/muted body copy text
 */

import React, { createContext, useContext, useState, useEffect } from "react";

// 3 Distinct Bespoke Architectural & Interior Themes
export const THEME_PRESETS = [
  {
    id: "gold",
    name: "Architectural Gold & Warm Gallery",
    description: "Classic luxury editorial layout with warm gold accents and a gallery white canvas.",
    primary: "#CAA05C",
    primaryHover: "#B88F4C",
    bgBase: "#faf9f6",
    bgDark: "#0c0a09",
    surfaceDark: "#1c1917",
    textMuted: "#78716c",
  },
  {
    id: "terracotta",
    name: "Artisan Terracotta & Timber",
    description: "Rich organic clay accents with warm sand linen backgrounds and espresso timber dark surfaces.",
    primary: "#C86D51",
    primaryHover: "#A85238",
    bgBase: "#FAF5EF",
    bgDark: "#120D0B",
    surfaceDark: "#1F1816",
    textMuted: "#7C706B",
  },
  {
    id: "sage",
    name: "Nordic Sage & Monolithic Stone",
    description: "Biophilic Scandinavian interior aesthetic featuring deep forest sage and alabaster stone.",
    primary: "#2D7D62",
    primaryHover: "#1F5945",
    bgBase: "#F5F8F6",
    bgDark: "#0A120E",
    surfaceDark: "#121F1A",
    textMuted: "#6B7C75",
  }
];

// Default Active Theme
export const DEFAULT_THEME = THEME_PRESETS[0];

// Helper to apply semantic CSS variables dynamically to the document root
export function applyThemeToCSS(theme = DEFAULT_THEME) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  const primary = theme.primary || theme.primaryAccent || "#CAA05C";
  const primaryHover = theme.primaryHover || theme.primaryHover || "#B88F4C";
  const bgBase = theme.bgBase || theme.warmWhite || "#faf9f6";
  const bgDark = theme.bgDark || theme.darkCharcoal || "#0c0a09";
  const surfaceDark = theme.surfaceDark || theme.neutralSlate || "#1c1917";
  const textMuted = theme.textMuted || theme.stoneGray || "#78716c";

  // Set abstract semantic CSS custom properties
  root.style.setProperty("--color-primary", primary);
  root.style.setProperty("--color-primary-hover", primaryHover);
  root.style.setProperty("--color-bg-base", bgBase);
  root.style.setProperty("--color-bg-dark", bgDark);
  root.style.setProperty("--color-surface-dark", surfaceDark);
  root.style.setProperty("--color-text-muted", textMuted);

  // Set legacy variable aliases for backward compatibility with existing utility classes
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

// Immediately apply default theme variables on load
if (typeof document !== "undefined") {
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
    // Sync theme with DEFAULT_THEME on mount
    setTheme(DEFAULT_THEME);
    applyThemeToCSS(DEFAULT_THEME);
  }, []);

  const setThemePreset = (presetId) => {
    const found = THEME_PRESETS.find((p) => p.id === presetId) || DEFAULT_THEME;
    setTheme(found);
    applyThemeToCSS(found);
  };

  const updateThemeColors = (colorUpdates) => {
    const updated = { ...theme, ...colorUpdates, id: "custom" };
    setTheme(updated);
    applyThemeToCSS(updated);
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
