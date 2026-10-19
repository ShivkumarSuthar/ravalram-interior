import Link from "next/link";

// logo.png is the Suthar Brothers mark only (491 x 508), so the name is set beside it in the heading font.
// The gold mark reads on light and dark backgrounds; the name follows tone (light = on dark banners/panels)
// and the site theme.
export default function Logo({ tone = "dark", className = "" }) {
  const nameColor = tone === "light" ? "text-white" : "text-ink";
  return (
    <Link href="/" aria-label="Suthar Brothers home" className={`inline-flex shrink-0 items-center gap-2.5 ${className}`}>
      <img src="/assets/images/logo.png" alt="" width="491" height="508" className="h-11 w-auto sm:h-12" />
      <span className={`font-heading text-card leading-none ${nameColor}`}>
        Suthar <span className="text-primary">Brothers</span>
      </span>
    </Link>
  );
}
