/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      laptop: "1280px",
      monitor: "1440px",
      ultrawide: "1680px",
    },
    extend: {
      colors: {
        primary: "rgb(var(--global-color-primary-rgb) / <alpha-value>)",
        secondary: "rgb(var(--global-color-secondary-rgb) / <alpha-value>)",
        text: "rgb(var(--global-color-text-rgb) / <alpha-value>)",
        accent: "rgb(var(--global-color-secondary-rgb) / <alpha-value>)",
        lighter: "rgb(var(--global-color-lighter-rgb) / <alpha-value>)",
        dark: "rgb(var(--global-color-dark-rgb) / <alpha-value>)",
        border: "rgb(var(--global-color-border-rgb) / <alpha-value>)",
        field: "rgb(var(--global-color-background-field-rgb) / <alpha-value>)",
      },
      extend: {
        maxWidth: {
          "5xl": "min(100%, calc(var(--app-shell-max-width) * 0.8))",
          "6xl": "min(100%, calc(var(--app-shell-max-width) * 0.9))",
          "7xl": "min(100%, calc(var(--app-shell-max-width) * 0.95))",
          "8xl": "min(100%, var(--app-shell-max-width))",
          "9xl": "min(100%, calc(var(--app-shell-max-width) * 1.1))",
          "10xl": "min(100%, calc(var(--app-shell-max-width) * 1.2))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        cal: ["var(--font-cal)"],
      },
    },
  },
  plugins: [],
};
