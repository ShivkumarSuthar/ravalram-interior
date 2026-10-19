import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Outlined pill with a gold arrow circle; gold fills in from the left on hover
export default function ArrowButton({ href, children, tone = "dark", className = "" }) {
  const toneClass = tone === "light" ? "border-white text-white" : "border-line/60 text-ink";

  return (
    <Link
      href={href}
      className={`group relative isolate inline-flex items-center overflow-hidden rounded-full border py-2.5 pl-6.25 pr-3.75 font-heading text-base leading-none capitalize transition-colors duration-300 hover:border-primary hover:text-white ${toneClass} ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 origin-right scale-x-0 bg-primary transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100"
      />
      {children}
      <span aria-hidden className="ml-2.5 flex size-10 items-center justify-center rounded-full bg-primary text-white">
        <ArrowRight className="size-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
      </span>
    </Link>
  );
}
