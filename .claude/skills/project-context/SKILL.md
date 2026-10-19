---
name: project-context
description: Quick map of the Suthar Living / Suthar Interior Studio website (Next.js 16 App Router, JSX, Tailwind v4, motion). Load before any edit to find the right file fast and skip irrelevant folders.
---

# Suthar Living website — project map

## Real stack (AGENTS.md is partly outdated: it says Vite + TypeScript)
- **Next.js 16 App Router**, React 19, plain **JSX/JS** (no .tsx). `next.config.mjs`: `output: 'standalone'`, TS build errors ignored.
- Tailwind CSS v4 via `@tailwindcss/postcss` — tokens/global CSS in `src/index.css`.
- Animations: `motion/react`. Smooth scroll: `lenis` (`SmoothScroll.jsx`). Icons: `lucide-react`.
- Maps: `leaflet` / `react-leaflet` (`RegionsMap.jsx`). Forms: `@emailjs/browser`. `@google/genai` (chatbot: `LuxuryChatbot.jsx`).
- Scripts: `npm run dev | build | start`, `npm run lint` (= `tsc --noEmit`).
- Deploy: Dockerfile-less docker-compose + `nginx.conf`. Legacy Vite files (`index.html`, `vite.config.js`, `src/main.jsx`, `src/App.jsx`) are leftovers — Next does not use them.

## Where things live
- `src/app/` — routes. Each `page.jsx` is a server component exporting `generateMetadata()` (via `getPageMetadata` in `src/lib/seo.js`) + JSON-LD scripts, then renders a client component.
  - Routes: `/`(HomeClient), about-us, services, gallery, blog, blog/[slug], projects/[slug], [city] (local SEO pages), contact, faqs, privacy, terms, thank-you, coming-soon, not-found. `robots.js`, `sitemap.js`.
- `src/app/layout.jsx` — root: fonts (Crimson Pro, Plus Jakarta Sans, Montserrat, Outfit), `AntraPreloader`, `ThemeProvider`, `SmoothScroll`, `ScrollNavigation`, `QuotationModal`.
- `src/components/` — all UI sections (`Hero`, `Header`, `Footer`, `Services`, `CreativeProjects`, `Testimonial`, `ContactForm`, …) and full page bodies (`*Page.jsx`).
- `src/lib/` — data & helpers: `data.js`, `project-data.js`, `blog-data.js`, `investment-data.js`, `seo.js` (metadata + schema), `theme.jsx` (brand theme: primary `#CAA05C`, heading `#191919`, body `#4D4D52`).
- `public/assets/` — media (~146MB). Reference by path only; never read.

## Do NOT read / search
`node_modules/`, `.next/`, `out/`, `dist/`, `build/`, `public/assets/`, lock files, binary media. (Also listed in `.claudeignore` and denied in `.claude/settings.json`.)

## Conventions
- Follow AGENTS.md design rules (warm editorial look, gold accent, no fake telemetry, humble labels, lazy images with alt text).
- Brand name in code/metadata is **Suthar Living**; current branch work: Antra-style design match.
- Verify with `npm run build` (or `npm run lint`) after edits.
