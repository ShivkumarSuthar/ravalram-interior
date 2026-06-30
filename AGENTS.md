# Suthar Interior Studio & Architecture
## Enterprise AI Agent Engineering Handbook & Codebase Source of Truth

This handbook defines the architectural patterns, styling methodologies, design philosophies, and coding standards for the Suthar Interior Studio digital platform. Every AI agent, system architect, or developer must read, understand, and strictly adhere to this specification before initiating any code edits, directory restructurings, or feature implementations.

---

## 1. Project Overview & Company Background

Suthar Interior Studio is a world-class, premium architecture and interior design firm committed to delivering luxury, highly animated, conversion-focused residential and commercial spaces. The digital showroom serves to reflect this 30+ year design lineage, providing an exquisite, immersive layout comparable to elite international architecture journals.

### Company Heritage & Background
*   **Established Woodworking Heritage**: Multi-generational craftsmanship since **1989**.
*   **Founder**: Ravalram H. Suthar, pioneering master artisan of bespoke timber joinery.
*   **Co-Founder**: Shivkumar Suthar, spearheading technical integration and modern project orchestration.
*   **Lead Architects**: Padam P. Sutar & Team, driving contemporary spatial layouts and high-end residential conceptualization.
*   **Quality Guarantee**: Architect-supervised site execution paired with a dedicated guild of experienced craftsmen.
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
*   **Core Framework**: React 18+ (Single Page Application) powered by Vite.
*   **Language**: Strict TypeScript (ES Modules, fully typed components, clean interface separations).
*   **Styling Engine**: Tailwind CSS Utility-First styling.
*   **Animation System**: `motion` (imported from `motion/react`) for physical rendering layout shifts, transitions, and stagger fades.
*   **Icon Library**: Lucide React exclusively (uniform stroke widths, no inline SVG clutter).
*   **Asset Performance**: Optimized lazy loaded responsive media with `loading="lazy"` and `decoding="async"` attributes to minimize Layout Shifts (CLS).
*   **Static Asset Strategy**: Pre-resolved assets stored in `/public` or imported relative to `/src/assets`.
*   **Quality Assurance**: ESLint validation coupled with TypeScript compiler `tsc --noEmit` checks.
*   **Modernization Target Roadmap**: Standard preparation for next-phase migration to Next.js (App Router) utilizing `next/image`, React Server Components (RSC), and server-side metadata generation.

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

| Palette Name | Hex Code | Ideal Application Areas |
| :--- | :--- | :--- |
| **Warm Off-White** | `#faf9f6` | Default body background. Sets a premium, gallery-like canvas. |
| **Gold Accent** | `#c5a880` | Interactive states, subtle borders, sub-headings, badges, and focus frames. |
| **Gold Hover** | `#b0936b` | Active button hovers and highlighted active navigation anchors. |
| **Dark Charcoal** | `#0c0a09` | Headers, footers, dark bento panels, hero backdrops, and solid primary CTA buttons. |
| **Neutral Slate** | `#1c1917` | secondary cards, dark background sections, and high-impact editorial dividers. |
| **Stone Gray** | `#78716c` | Body copy, secondary info descriptions, and inactive states. |

*Note: Avoid vibrant colors, bright primary blues, neon greens, or generic purple/indigo gradients. Keep gradients restricted to subtle opacity fades (e.g., `#0c0a09` to transparent) for text legibility over media backdrops.*

---

## 5. Typography Rules

Our type hierarchy balances high-end modern sans-serif fonts with elegant, editorial serif accents.

### Font Pairings
*   **Primary Sans-Serif**: `Plus Jakarta Sans` or `Inter` (sans-serif) for high legibility, clean interface buttons, grids, forms, and technical metrics.
*   **Display / Serif Headings**: `Crimson Pro` (with `Playfair Display` or `Georgia` fallbacks) used for grand statements, section titles, and italicized emphasis points (e.g., *"Hasn't Been Designed"*).
*   **Data / Code Mono**: `JetBrains Mono` or `Fira Code` (monospace) used sparingly for numerical steps (`01`, `02`), dates, tags, and small coordinate trackers.

### Typographic Specifications
*   **Standard Spacing**:
    *   Display Titles: `tracking-tight` or `tracking-tighter` with `font-light` weights.
    *   Sub-labels / Tags: `tracking-[0.2em]` or `tracking-[0.3em]` in `uppercase` and `font-bold` for a premium, spacious vibe.
*   **Max Content Widths**: Keep text blocks to a maximum width of `max-w-xl` or `max-w-2xl` to guarantee a comfortable, highly readable line length (60-75 characters per line).
*   **Leading (Line Heights)**: Use `leading-relaxed` for body paragraphs and `leading-tight` or `leading-none` for tight display headings.

---

## 6. Layout Rules

The interface must behave as a cohesive system of fluid blocks. Content must align perfectly to an invisible architectural grid.

*   **Max Container Width**: Standardize page-level wrappers to `max-w-7xl mx-auto px-6 md:px-12 lg:px-16`.
*   **Section Spacing**: Keep vertical breathing room spacious. Standardize section padding to `py-16 sm:py-24 lg:py-32`.
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
    *   *Primary Gold CTA*: Flat `#c5a880` background, dark text, sharp or slightly rounded corners (`rounded-none` or `rounded-full` depending on the surrounding section context, but never clumsy mid-rounded boxes). Always include a small visual circle enclosing an icon (e.g., `ArrowRight`).
    *   *Secondary Bordered CTA*: Transparent background, border border-white/20 or border-stone-300, transition states that expand border gold colors on hover.
2.  **Cards**:
    *   Rounded corners must use `rounded-3xl` for modern, elegant structures.
    *   Include a subtle top gold gradient accent line that scales on hover (`group-hover:scale-x-100`).
    *   Backgrounds must be pristine white (`bg-white`) or deep dark charcoal (`bg-stone-900`) with ultra-light border definitions (`border-stone-200/50`). No harsh shadows.
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

*   **Strict Typing**: No `any` type variables. Always define exact interfaces for component props, API responses, and local states inside `/src/types.ts`.
*   **Clean Named Imports**: Import individual elements cleanly (e.g., `import { useState } from "react";` and `import { motion } from "motion/react"`). Do not use object destructuring on entire default packages.
*   **Modularity**: Keep components clean and separate. Avoid giant, monolithic single-file implementations. Place independent blocks inside `/src/components/`.
*   **Semantic HTML**: Ensure proper landmarks: use `<header>` for global bars, `<main>` for core views, `<section>` for page sections, `<article>` for blog posts, and `<footer>` for copyrights.
*   **No Inline Styles**: Style strictly via Tailwind classes. Use inline style bindings ONLY for highly dynamic values (like absolute cursor coordinates or drag percentages).
*   **Console Cleanliness**: Remove all active `console.log` statements before compiling.

---

## 10. Image & Performance Guidelines

Images represent our primary product: high-end physical spaces. They must load immediately, razor-sharp, and without causing structural shifts.

*   **Loading Protocols**:
    *   All images below-the-fold MUST use `loading="lazy"` and `decoding="async"`.
    *   Critical hero banner images MUST be preloaded and omit lazy-loading to secure a stellar LCP (Largest Contentful Paint) score.
*   **HTML Safety**: Always define accurate parent layout sizing or default `aspect-ratio` bounds on images to minimize CLS (Cumulative Layout Shift).
*   **Format Standards**: Prefer highly compressed WebP formats or modern optimized Unsplash source variables with appropriate quality caps (`q=80`).
*   **Access Requirements**: Always include JSX `referrerPolicy="no-referrer"` to guarantee reliable external CDN image resolution.
*   **Descriptions**: Every `<img>` tag must have a descriptive, search-optimized `alt` value (e.g., "Suthar bespoke timber dining table detail") rather than generic terms like "image" or "interior".

---

## 11. SEO & Metadata Standards

Our platform is engineered to rank at the absolute top of organic searches for architectural services in our target regions.

*   **Meta Engine (`SEOHelper`)**: Our dedicated `<SEOHelper />` component dynamically handles document titles, description overrides, Open Graph parameters, and canonical links upon view transitions.
*   **Target Core Keywords**:
    *   *Primary Location Hooks*: "Interior Designer Mumbai", "Interior Designer Goa", "Interior Designer Pune".
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

*   **Contrast Ratios**: Keep text contrast high. Slate body text (`#78716c` or `#0c0a09`) on Warm Off-White (`#faf9f6`) surpasses the WCAG AAA standard of 4.5:1.
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
3.  **Read-Before-Write (Mandatory)**: Always call `view_file` on any existing component file before generating code edits. Never assume structure based on common conventions.
4.  **Preserve State Hooks**: When modifying routing elements, ensure you pass state hooks like `setView` or `setView` handlers properly to avoid snapping page loads or breaking deep linking.
5.  **Clean Compilation**: Always run `lint_applet` followed by `compile_applet` to confirm successful builds. If an error is caught, fix it immediately before ending your turn.

---

## 16. Project Roadmap

### Completed System Pages
*   `Home`: Full editorial homepage with lobby banner, creative bento highlights, custom custom furniture stories, and lead contact forms.
*   `About`: Generational legacy storytelling detailing Ravalram Suthar's 1989 inception, guild craftsmanship, and lead architect bio boards.
*   `Services`: Detailed deep-dive into Residential, Commercial, Renovation, and Turnkey Design-Build.
*   `Gallery`: High-performance 28-project structural portfolio divided across 14 specialized categories with interactive lightboxes.
*   `Blog`: Architecture and woodworking insights with individual modal article readings and SEO dispatch integrations.
*   `FAQs`: Detailed FAQ page addressing estimates, warranty coverage, design-only requests, and structural timelines.
*   `Contact`: Premium Indian/US showroom details, phone lines, map references, and comprehensive onboarding intake forms.
*   `Privacy Policy` & `Terms of Service`: Legal compliance documents addressing turnkey material schedules and site-survey survey adjustments.
*   `404 (NotFoundPage)`: Architectural wireframe blueprint background, interactive coordinates tracker, premium action cards, and directional directory menus.
*   `Thank You (ThankYouPage)`: Onboarding pathway timeline mapping, response SLA assurances, and direct coordinate logging.

### Future Expansion Board
*   **CMS Integration**: Secure server-side routes to dynamically pull portfolio assets from headless databases.
*   **Interactive Cost Calculator**: A spatial material planning widget estimating timber costs, surface areas, and finish styles.
*   **Showroom Scheduler**: Real-time integration with calendar suites to book on-site Santacruz West consultation windows.
*   **Client Portal**: Secure walkthrough updates, daily site progress videos, and dynamic billing receipts for current clients.
