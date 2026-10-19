import Link from "next/link";
import Logo from "./Logo";
import { FOOTER, CONTACT } from "../../lib/home-content";

export default function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-bg-dark pb-40 sm:pb-64 lg:pb-99">
      <img
        src={FOOTER.background.src}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover opacity-25 grayscale"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-b from-bg-dark/70 via-bg-dark/60 to-bg-dark/40" />

      <div className="mx-auto max-w-site px-5 pt-20 lg:pt-27.5">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1fr_1.4fr] lg:pb-25">
          <div>
            <Logo tone="light" />
            <p className="mt-8 max-w-80 text-base leading-7 text-white">{FOOTER.tagline}</p>
            <p className="mt-4 max-w-80 text-base leading-7 text-white">{CONTACT.address}</p>
          </div>

          {FOOTER.columns.map((links, i) => (
            <nav key={i} aria-label={i === 0 ? "Company" : "More"}>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="font-heading text-lead text-white transition-colors duration-300 hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:justify-self-end">
            <a href={CONTACT.phoneHref} className="block font-heading text-card-lg text-white transition-colors duration-300 hover:text-primary">
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="mt-2 block break-all font-heading text-card-lg text-white transition-colors duration-300 hover:text-primary">
              {CONTACT.email}
            </a>
            <ul className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 lg:mt-24">
              {CONTACT.socials.map((s, i) => (
                <li key={s.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="text-white/60">-</span>}
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-heading text-base text-white transition-colors duration-300 hover:text-primary">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-site px-5 py-10 text-center text-base text-white/80">
          © {new Date().getFullYear()} Suthar Brothers. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
