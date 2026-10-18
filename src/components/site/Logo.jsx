import Link from "next/link";

export default function Logo({ tone = "dark", className = "" }) {
  return (
    <Link href="/" aria-label="Suthar Living home" className={`inline-flex shrink-0 items-center gap-2 ${className}`}>
      <img src="/assets/images/logo.png" alt="" width="50" height="50" className="size-20 object-contain" />
      <span className={`font-heading text-card leading-none ${tone === "light" ? "text-white" : "text-surface-dark"}`}>
        Suthar <span className="text-primary">Living</span>
      </span>
    </Link>
  );
}
