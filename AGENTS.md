# Suthar Brothers — Interior Design & Execution
## Enterprise AI Agent Engineering Handbook & Codebase Source of Truth

This handbook defines the architectural patterns, styling methodologies, design philosophies, and coding standards for the Suthar Brothers website. Every AI agent, system architect, or developer must read, understand, and strictly adhere to this specification before initiating any code edits, directory restructurings, or feature implementations.

---

## 1. Project Overview & Company Background

Suthar Brothers is a family interior design and execution business for homes, offices and commercial spaces. The website reflects its 30+ years of woodworking and interior work with a warm, editorial layout, and its job is to turn visitors into enquiries.

### Company Heritage & Background
*   **Established Woodworking Heritage**: A family woodworking business since **1989**.
*   **People**: The site names no individuals (no founders, team or staff bios). Always speak as "Suthar Brothers" or "our team".
*   **Service Area**: Mumbai, Pune, Goa (Madgaon, Panaji), Bengaluru, Honnavar, Kumta and nearby towns.
*   **Content Honesty**: No invented stats, awards, testimonials or guarantees. Stock photos only illustrate services; never present them (or AI images) as completed projects.
*   **Scope of Competency**:
    *   **Residential Interiors**: Sea-facing villas, luxury double-height penthouses, modern duplexes.
    *   **Commercial Design**: Ergonomic corporate headquarters, luxury showrooms, retail flagships.
    *   **Bespoke Furniture Manufacturing**: Factory-direct customized timber joinery, modular kitchens, and wardrobe systems.
    *   **Full-Scale Renovation**: Total spatial redesign, demolition, rebuilding, and finish styling.
    *   **Turnkey Execution**: End-to-end design-build with material procurement, logistics, and site styling.

---

## 2. Technology Stack

The platform is designed as an ultra-high performance, lightweight full-stack application built for instant loads, fluid responsive scaling, and maximum crawlability.

### Primary Stack Details
*   **Core Framework**: Next.js 16 (App Router) with React 19, hosted on Vercel. Pages are server components; only interactive leaves (forms, carousels, popups, animations) are client components.
*   **Language**: JavaScript with JSX (ES Modules). No TypeScript source files.
*   **Styling Engine**: Tailwind CSS v4. Every color, font, type size and width is a token in the `@theme` block of `src/index.css` (dark mode overrides in its `.dark` block).
*   **Animation System**: `motion` (imported from `motion/react`), mostly through the shared `Reveal` and `HeroReveal` wrappers. Smooth scrolling via `lenis`; carousels via `swiper`.
*   **Icon Library**: Lucide React exclusively (uniform stroke widths, no inline SVG clutter).
*   **Images**: `next/image` everywhere (resized WebP per screen, reserved space, lazy loading by default).
*   **Static Asset Strategy**: Media in `/public/assets` (reference by path), fonts in `/src/fonts`, content and data in `/src/lib`.
*   **Quality Assurance**: `npm run lint` (ESLint with `eslint-config-next`) and `npm run build` (compiles and type-checks).

---

## 3. Design Philosophy

Every pixel must reflect artisanal precision. The interface must not resemble a generic, template-driven website. It must feel like an editorial layout—a digital monograph of physical spatial art.

### Visual Pillars
*   **Aesthetic Tone**: Minimalist, Warm, Timeless, Editorial, and Architectural.
*   **White Space (Negative Space)**: Use generous padding and margins. Let high-contrast photography breathe. Never crowd components or compress text block heights.
*   **Contrast & Rhythm**: Alternate dense descriptive sections with expansive typographic spaces and tall, immersive full-screen images.
*   **Anti-AI-Slop & Architectural Honesty**: 
    *   Never decorate screens with mock telemetry data, logs, system pings, port declarations, or digital grid coordinate overlays.
    *   No network status dots (`● ONLINE`), faux terminal lines, or machine-centric credits.
    *   Keep boundaries clean. If a card is on the screen, the background behind it should be empty and flat.
*   **Labels**: Use humble, standard, literal human labels (e.g., "Contact", "Our Projects", "View Services"). No dramatic, pseudo-intellectual phrases like "Chronos Coordinates" or "Solar Orbit Trackers".

---

## 4. Color System

The color palette is deliberately restricted, high-contrast, and tuned for premium visual comfort on modern high-brightness displays.

Use the token classes only (e.g. `bg-primary`, `text-ink`); never hex, rgba or arbitrary values in components. Values live in `src/index.css`.

| Token | Light | Ideal Application Areas |
| :--- | :--- | :--- |
| `primary` | `#CAA05C` | Gold accent: buttons, highlighted title words, eyebrows, icons, focus rings. |
| `primary-hover` | `#B88D48` | Hover state of gold elements. |
| `ink` | `#191919` | Headings and strong text on page backgrounds (flips light in dark mode). |
| `text-muted` | `#4D4D52` | Body copy and secondary descriptions. |
| `bg-base` / `bg-soft` | `#FFFFFF` / `#F6F6F6` | Page and alternate section backgrounds. |
| `bg-dark` / `surface-dark` | `#0F0F0F` / `#191919` | Always-dark panels: footer, banners, dark cards. |
| `line` | `#9F9FA4` | Hairlines and borders (usually with opacity, e.g. `border-line/30`). |

*Note: Avoid vibrant colors, bright primary blues, neon greens, or generic purple/indigo gradients. Keep gradients restricted to subtle opacity fades (e.g., `bg-dark` to transparent) for text legibility over media backdrops.*

---

## 5. Typography Rules

### Font Pairings
*   **Headings**: `Cal Sans` (`font-heading`), a single-weight display face. Never apply bold to it.
*   **Body**: `Golos Text` (`font-sans`) for paragraphs, buttons, forms and labels.

### Typographic Specifications
*   **Type Scale**: Use the scale tokens (`text-hero`, `text-section`, `text-card`, `text-lead`, `text-eyebrow`...) rather than arbitrary sizes.
*   **Highlighted Words**: Section titles are arrays with `{ gold: "..." }` parts, rendered in `primary` by `TitleParts`.
*   **Max Content Widths**: Keep text blocks to a maximum width of `max-w-xl` or `max-w-2xl` to guarantee a comfortable, highly readable line length (60-75 characters per line).
*   **Leading (Line Heights)**: Use `leading-relaxed` for body paragraphs and `leading-tight` or `leading-none` for tight display headings.

---

## 6. Layout Rules

The interface must behave as a cohesive system of fluid blocks. Content must align perfectly to an invisible architectural grid.

*   **Max Container Width**: Standardize page-level wrappers to `mx-auto max-w-site px-5`.
*   **Section Spacing**: Keep vertical breathing room spacious. Standardize section padding to `py-24 lg:py-32.5`.
*   **Grid Spacing**: Standard grids must use `gap-8` or `gap-12` to preserve high visual breathing room.
*   **Card Spacing**: Component cards inside galleries must use `space-y-4` or `space-y-6`.
*   **Responsive Breakpoints**:
    *   Mobile: Base utility classes (e.g., `grid-cols-1`).
    *   Tablet (`md` / `lg`): Medium-size expansions (e.g., `md:grid-cols-2`, `lg:grid-cols-3`).
    *   Desktop (`xl` / `2xl`): Grand layouts (e.g., `xl:grid-cols-4`, wide-scale bento grid expansions).
*   **Alignment**: Content must default to clean, high-precision left-alignment (`text-left`) for an editorial book-like aesthetic, especially in hero headers, cards, and text columns. Use center-alignment only for dedicated showcase cards or final grand CTAs.

---

## 7. Component Standards

Every building block must be designed with architectural precision, rounded corners, custom borders, and beautiful interactive feedback.

### Key Visual Components
1.  **Buttons**:
    *   *Primary Gold CTA*: Flat `primary` background (see `ArrowButton`), sharp or slightly rounded corners (`rounded-none` or `rounded-full` depending on the surrounding section context, but never clumsy mid-rounded boxes). Always include a small visual circle enclosing an icon (e.g., `ArrowRight`).
    *   *Secondary Bordered CTA*: Transparent background, border border-white/20 or border-stone-300, transition states that expand border gold colors on hover.
2.  **Cards**:
    *   Rounded corners must use `rounded-3xl` for modern, elegant structures.
    *   Include a subtle top gold gradient accent line that scales on hover (`group-hover:scale-x-100`).
    *   Backgrounds must be `bg-bg-base` / `bg-bg-soft` or `bg-surface-dark`, with ultra-light borders (`border-line/30`). No harsh shadows.
3.  **Forms**:
    *   Input fields must have flat backgrounds, minimal borders on active states, and beautiful custom labels.
    *   Errors and success feedbacks must animate in via AnimatePresence.
4.  **Timelines**:
    *   A continuous structural path representing project milestones. Show completion states clearly with glowing gold checks, active pulsing highlights, and transparent step descriptions.
5.  **Gallery & Portfolio Cards**:
    *   Images must be wrapped in `overflow-hidden` containers. Upon hover, the image must scale smoothly (`hover:scale-105 transition-transform duration-700`).
    *   Include elegant metatags like material composition and physical coordinates.

---

## 8. Motion Guidelines

We use animations to reinforce hierarchy, signify spatial relationships, and reflect elite digital design. We do not use distracting, hyper-active fly-ins.

*   **Philosophical Approach**: Entrance transitions should mimic high-end sliding doors, rising pillars, and slow shutter exposures.
*   **Preferred Parameters**:
    *   *Standard Duration*: `0.6` to `0.8` seconds.
    *   *Core Easing*: Use cubic-bezier easing curves rather than default linear or basic ease-in curves. Standard: `[0.16, 1, 0.3, 1]` (ultra-smooth decelerate) or `[0.25, 0.1, 0.25, 1]` (custom cubic ease).
*   **Viewport Animations**: Trigger elements as they cross the screen using `whileInView` with `viewport={{ once: true, margin: "-100px" }}` to avoid repetitive jump-starts.
*   **Staggered Entrances**: Stagger list elements or grids with custom indexes (`delay: idx * 0.08`).
*   **Accessibility Support**: Ensure all complex animations respect `prefers-reduced-motion` media queries using conditional framer/motion states.

---

## 9. Coding Standards

*   **Server First**: Keep pages and sections as server components. Add `"use client"` only to the small interactive piece that needs it.
*   **Content In Data Files**: Text, images and links live in `/src/lib` (`home-content.js`, `pages-content.js`, `data.js`...), not hard-coded in components. Business details (phone, email, address, socials) come only from `COMPANY_INFO` in `data.js`.
*   **Clean Named Imports**: Import individual elements cleanly (e.g., `import { useState } from "react";` and `import { motion } from "motion/react"`). Do not use object destructuring on entire default packages.
*   **Modularity**: Keep components clean and separate. Shared UI goes in `/src/components/site/`, homepage sections in `site/home/`, page bodies in `site/pages/`.
*   **Semantic HTML**: Ensure proper landmarks: use `<header>` for global bars, `<main>` for core views, `<section>` for page sections, `<article>` for blog posts, and `<footer>` for copyrights.
*   **No Inline Styles**: Style strictly via Tailwind classes. Use inline style bindings ONLY for highly dynamic values (like absolute cursor coordinates or drag percentages).
*   **Console Cleanliness**: Remove all active `console.log` statements before compiling.

---

## 10. Image & Performance Guidelines

Images represent our primary product: high-end physical spaces. They must load immediately, razor-sharp, and without causing structural shifts.

*   **Use `next/image`**: Never a plain `<img>`. Put it in a positioned, sized box (`relative` + height or aspect ratio) and use `fill` with an accurate `sizes` value so phones get small files.
*   **Loading Protocols**:
    *   Below-the-fold images lazy-load by default; leave that alone.
    *   The hero / banner image of each page uses `loading="eager" fetchPriority="high"` for a good LCP score.
*   **Formats**: Source photos can be JPG or PNG; Next serves resized WebP automatically. New remote hosts must be added to `images.remotePatterns` in `next.config.mjs`.
*   **Descriptions**: Every image must have a descriptive, search-optimized `alt` value (e.g., "Suthar bespoke timber dining table detail") rather than generic terms like "image" or "interior".

---

## 11. SEO & Metadata Standards

Our platform is engineered to rank at the absolute top of organic searches for architectural services in our target regions.

*   **Meta Engine**: Every route's `page.jsx` exports `generateMetadata()` built with `getPageMetadata()` from `src/lib/seo.js` (title, description, canonical, Open Graph). JSON-LD comes from `generateSchema()` in the same file. `robots.js` and `sitemap.js` in `src/app` generate those files.
*   **Target Core Keywords**:
    *   *Primary Location Hooks*: "Interior Designer" + Mumbai, Pune, Goa, Madgaon, Panaji, Bengaluru, Honnavar, Kumta (one landing page each via `CITY_PAGES` in `src/lib/pages-content.js`).
    *   *Service Category Hooks*: "Turnkey Interior Solutions", "Custom Furniture Manufacture", "Residential Interior Design", "Commercial Office Design", "Architecture Studio", "Home Renovation".
*   **Structured Schema (JSON-LD)**:
    *   **LocalBusiness Schema**: Declares Suthar's flagship Linking Road showroom coordinates, phone numbers, and operational hours.
    *   **Organization Schema**: Highlights the brand logo, digital domain, and verified social coordinates.
    *   **BreadcrumbList Schema**: Builds elegant, crawlers-compliant vertical hierarchies for all pages.
    *   **FAQPage Schema**: Formats detailed answers about custom joinery warranties and design project timelines for Google Rich Snippets.
    *   **NewsArticle / ImageObject Schema**: Activates upon opening a blog article or clicking a project lightbox to serve contextual crawler records.

---

## 12. Accessibility Standards (a11y)

The digital showroom must be fully accessible to all individuals, matching the high standards of our physical spaces.

*   **Contrast Ratios**: Keep text contrast high. Body text (`text-muted`) and headings (`ink`) on `bg-base` must meet WCAG AA (4.5:1) in both light and dark mode.
*   **Keyboard Navigation**:
    *   Every interactive button, anchor link, and form element must be focusable.
    *   A custom high-contrast gold outline is registered globally in CSS (`focus-visible`) for keyboard navigators.
*   **Interactive Roles**: Use `aria-label` attributes on icon-only buttons (e.g., search triggers, modal exit buttons). Specify `aria-expanded` and `aria-controls` on mobile navigation bars or interactive accordion questions.
*   **Alt Tags**: Every image must describe its spatial context clearly for screen readers.

---

## 13. Brand Voice

Every line of written content on the website must feel premium, authentic, and completely transparent.

*   **Tone**: Professional, Articulate, Direct, Craftsman-led, and Warm.
*   **Keywords of Trust**: Emphasize *Precision joinery*, *Architect-supervised*, *Bespoke*, *Timeless*, *Generational trust*, and *Honest pricing blueprints*.
*   **Forbidden Vocabulary**: Never use typical tech-bro or generic marketing jargon (e.g., "disruptive interiors", "synergized space hacks", "next-gen standardizations"). Avoid standard AI placeholders like "delve into", "testament to", "it's crucial to", or "unlock your potential". Speak like an experienced woodworker or a Senior Architect explaining structural materials over drafting paper.

---

## 14. Target Performance Requirements

Our target Lighthouse/Pagespeed metrics are absolute:

*   **Performance**: **95+** (Secured by removing large font chains, compressing visual assets, lazy-loading all off-screen routes, and maintaining an ultra-light JS payload).
*   **Accessibility**: **100** (Secured by using semantic landmarks, fully registering ARIA parameters, keeping contrast high, and enabling keyboard focus rings).
*   **Best Practices**: **100** (Secured by serving assets over HTTPS, avoiding insecure CDNs, and omitting obsolete JavaScript APIs).
*   **SEO**: **100** (Secured by deploying `robots.txt`, dynamic `sitemap.xml` records, valid dynamic metadata, and detailed JSON-LD microdata schemas).

---

## 15. Rules Every AI Agent Must Follow

1.  **Scope Discipline**: Build exactly what the user requested. Never create unprompted secondary sidebars, custom backends, or unrequested features.
2.  **No Structural Destructions**: Do not alter or delete completed design elements, headers, footers, or hero banners unless explicitly commanded to do so.
3.  **Read-Before-Write (Mandatory)**: Always read an existing file before editing it. Never assume structure based on common conventions.
4.  **Routing**: Each page is a folder in `src/app`; link with `next/link`. Keep pages server-rendered with their metadata.
5.  **Clean Compilation**: Always run `npm run lint` and `npm run build` to confirm a clean build. If an error is caught, fix it immediately before ending your turn.

---

## 16. Project Roadmap

### Completed System Pages
*   `Home` (`/`): Hero, services, before/after slider, about, projects carousel, expertise, video, process, pricing, gallery, journal and newsletter.
*   `About` (`/about-us`): Family story since 1989, history timeline, values, process, gallery and the cities we serve.
*   `Services` (`/services`) and `Pricing` (`/pricing`): Service details, ways to work with us, and indicative per-sq-ft rates by category and tier.
*   `Gallery` (`/gallery`) and `Projects` (`/projects/[slug]`): Image grid with lightbox, and project detail pages.
*   `Blog` (`/blog`, `/blog/[slug]`): Articles with category filter.
*   `City Pages` (`/[city]`): Local landing pages for each service city.
*   `FAQs`, `Contact`, `Privacy`, `Terms`, `Thank You`, `Coming Soon` and the 404 page.

### Open Content Gaps
*   Real project photos and project details (current project and gallery images are AI-generated placeholders).
*   Real email, address and social links in `COMPANY_INFO`, and the live domain in `NEXT_PUBLIC_SITE_URL`.

### Future Expansion Board
*   **CMS Integration**: Secure server-side routes to dynamically pull portfolio assets from headless databases.
*   **Interactive Cost Calculator**: A spatial material planning widget estimating timber costs, surface areas, and finish styles.
*   **Showroom Scheduler**: Real-time integration with calendar suites to book on-site Santacruz West consultation windows.
*   **Client Portal**: Secure walkthrough updates, daily site progress videos, and dynamic billing receipts for current clients.
