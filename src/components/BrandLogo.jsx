import React from "react";

/**
 * Official Suthar Interior Studio Brand Logo
 * Recreates the signature S-I Crest with interior arch, armchair, pendant lamp, and fluted panel details.
 */
export default function BrandLogo({ className = "", iconOnly = false, size = "md", darkText = false }) {
  // Size mapping
  const dimensions = {
    sm: { icon: "w-8 h-8", title: "text-base", subtitle: "text-[9px]" },
    md: { icon: "w-10 h-10", title: "text-lg md:text-xl", subtitle: "text-[9px] md:text-[10px]" },
    lg: { icon: "w-14 h-14", title: "text-2xl", subtitle: "text-[11px]" },
    xl: { icon: "w-20 h-20", title: "text-3xl", subtitle: "text-xs" },
  }[size] || dimensions.md;

  return (
    <div className={`inline-flex items-center gap-3 group text-left ${className}`}>
      {/* Brand Image */}
      <div className={`relative shrink-0 flex items-center justify-center ${dimensions.icon} group-hover:scale-105 transition-transform duration-300`}>
        <img src="/assets/images/logo.png" alt="Suthar Living" className="w-full h-full object-contain drop-shadow-md" />
      </div>

      {/* Brand Text */}
      {!iconOnly && (
        <div className="flex flex-col justify-center">
          <span className={`font-serif font-black tracking-[0.18em] uppercase ${darkText ? "text-stone-950" : "text-white"} leading-tight transition-colors group-hover:text-primary ${dimensions.title}`}>
            SUTHAR
          </span>
          <span className={`font-sans font-semibold tracking-[0.28em] uppercase text-primary leading-none mt-0.5 ${dimensions.subtitle}`}>
            LIVING
          </span>
        </div>
      )}
    </div>
  );
}
