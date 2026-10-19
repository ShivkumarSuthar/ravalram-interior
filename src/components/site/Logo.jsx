import Link from "next/link";
import BrandMark from "./BrandMark";

// The Suthar Brothers mark (gold S-B from the loader SVG) with the name beside it in the heading font.
// tone="light" is for dark backgrounds (banners, dark panels, footer): the name turns white and the gold
// mark stays. The mark does not depend on the theme, so it reads the same in light and dark mode.
export default function Logo({ tone = "dark", className = "" }) {
  const nameColor = tone === "light" ? "text-white" : "text-ink";
  return (
    <Link href="/" aria-label="Suthar Brothers home" className={`inline-flex shrink-0 items-center gap-2.5 ${className}`}>
      <BrandMark className="size-12 text-primary sm:size-14 lg:size-16" />
      <span className={`font-heading text-card leading-none ${nameColor}`}>
        Suthar <span className="text-primary">Brothers</span>
      </span>
    </Link>
  );
}
