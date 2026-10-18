import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import ArrowButton from "../ArrowButton";
import { NOT_FOUND_PAGE } from "../../../lib/pages-content";

// Shared "not found" body: big 404, short explanation, way back home and useful links
export default function NotFoundContent() {
  return (
    <section className="py-24 lg:py-32.5">
      <Reveal delay={0} duration={1} className="mx-auto max-w-heading px-5 text-center">
        <p aria-hidden className="font-heading text-watermark leading-none text-primary">404</p>
        <h2 className="mt-4 font-heading text-section text-surface-dark">{NOT_FOUND_PAGE.title}</h2>
        <p className="mx-auto mt-5 max-w-150 text-base leading-7 text-text-muted">{NOT_FOUND_PAGE.text}</p>
        <ArrowButton href="/" className="mt-10">Back To Home</ArrowButton>
        <ul className="mx-auto mt-14 grid max-w-180 gap-x-8 border-t border-line/30 sm:grid-cols-2">
          {NOT_FOUND_PAGE.links.map((link) => (
            <li key={link.href} className="border-b border-line/30">
              <Link href={link.href} className="group flex items-center justify-between py-5 font-heading text-lead-lg text-surface-dark transition-colors hover:text-primary">
                {link.label}
                <ArrowRight className="size-5 -rotate-45 transition-transform group-hover:rotate-0" />
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
