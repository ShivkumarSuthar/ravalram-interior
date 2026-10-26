---
name: project-context
description: Quick map of the Suthar Brothers website (Next.js 16 App Router, JSX, Tailwind v4, motion, hosted on Vercel). Load before any edit to find the right file fast and skip irrelevant folders.
---

# Suthar Brothers website — project map

## Stack
- **Next.js 16 App Router**, React 19, plain **JSX/JS** (no .tsx). Hosted on **Vercel**.
- Tailwind CSS v4 via `@tailwindcss/postcss`. All design tokens (colors, fonts, type scale, widths) live in the `@theme` block of `src/index.css`; dark mode overrides are in the `.dark` block there.
- Fonts: Cal Sans (headings, local file `src/fonts/CalSans-Regular.woff2`) and Golos Text (body, `next/font/google`), set up in `src/app/layout.jsx`.
- Animations: `motion/react` (`Reveal`, `HeroReveal`). Smooth scroll: `lenis` (`SmoothScroll.jsx`). Carousels: `swiper`. Icons: `lucide-react`.
- Images: always `next/image` (`fill` + `sizes` inside a positioned box). Forms: `@emailjs/browser` via `src/lib/send-enquiry.js`, with `<Honeypot />` in every form.
- Scripts: `npm run dev | build | start`, `npm run lint` (ESLint, `eslint-config-next`). `npm run build` also type-checks.

## Where things live
- `src/app/` — routes. Every `page.jsx` is a server component with `generateMetadata()` (`getPageMetadata` in `src/lib/seo.js`) and JSON-LD (`generateSchema`).
  - Routes: `/`, about-us, services, gallery, pricing, blog, blog/[slug], projects/[slug], [city] (local SEO pages; the list is `CITY_PAGES` in `src/lib/pages-content.js`), contact, faqs, privacy, terms, thank-you, coming-soon, not-found. `robots.js`, `sitemap.js`.
- `src/app/layout.jsx` — root: fonts, head theme script, `SiteLoader`, `SmoothScroll`, `ChatWidget`, `CustomCursor`, `QuoteModal`.
- `src/components/site/` — shared UI (header, footer, sidebar, cards, forms, popups); `home/` — homepage sections; `pages/` — inner page bodies. Client components are only the interactive leaves.
- `src/lib/` — content and helpers:
  - `home-content.js` (site shell + homepage, `CONTACT`), `pages-content.js` (inner pages, pricing, cities), `legal-content.js`
  - `data.js` (images, `COMPANY_INFO` phone/email/address/socials, FAQs, services/about data), `project-data.js`, `blog-data.js`, `investment-data.js` (pricing tiers)
  - `seo.js` (metadata + schema), `send-enquiry.js` (EmailJS + spam check), `theme-script.js` (theme/loader head script)
- `public/assets/` — media (~146MB). Reference by path only; never read.

## Do NOT read / search
`node_modules/`, `.next/`, `out/`, `build/`, `public/assets/`, `package-lock.json`, `.env*`, binary media. (Also in `.claudeignore` and denied in `.claude/settings.json`.)

## Conventions
- Brand is **Suthar Brothers**. No personal names on the site; no invented stats, awards, testimonials or guarantees.
- Follow AGENTS.md design rules (warm editorial look, gold accent, humble labels, alt text on every image).
- Use tokens (`text-ink`, `bg-bg-base`, `text-primary`, `surface-dark`...) — no hex, rgba or px values in components.
- Verify with `npm run lint` and `npm run build` after edits.
