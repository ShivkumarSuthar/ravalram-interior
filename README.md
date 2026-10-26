# Suthar Brothers website

Marketing website for Suthar Brothers, interior design and execution for homes, offices and commercial spaces.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and `motion`. Hosted on Vercel.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run lint     # ESLint
npm run build    # production build (also type-checks)
npm run start    # serve the production build
```

## Environment variables

Set these in `.env.local` locally and in the Vercel project settings:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Live domain, used for canonical links, the sitemap and structured data |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service that delivers the enquiry forms |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template for enquiries |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Where to change things

- **Text, images, prices:** `src/lib/` (`home-content.js`, `pages-content.js`, `data.js`, `project-data.js`, `blog-data.js`, `investment-data.js`, `legal-content.js`)
- **Phone, email, address, social links:** `COMPANY_INFO` in `src/lib/data.js`
- **City landing pages:** `CITY_PAGES` in `src/lib/pages-content.js`
- **Colors, fonts, type sizes:** the `@theme` block in `src/index.css`
- **Pages:** `src/app/` (one folder per route); components in `src/components/site/`

See `AGENTS.md` for the design and coding rules.
