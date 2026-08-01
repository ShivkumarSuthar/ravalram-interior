import React from "react";

/**
 * Official Suthar Interior Studio Brand Logo
 * Recreates the signature S-I Crest with interior arch, armchair, pendant lamp, and fluted panel details.
 */
export default function BrandLogo({ className = "", iconOnly = false, size = "md" }) {
  // Size mapping
  const dimensions = {
    sm: { icon: "w-8 h-8", title: "text-base", subtitle: "text-[9px]" },
    md: { icon: "w-10 h-10", title: "text-lg md:text-xl", subtitle: "text-[9px] md:text-[10px]" },
    lg: { icon: "w-14 h-14", title: "text-2xl", subtitle: "text-[11px]" },
    xl: { icon: "w-20 h-20", title: "text-3xl", subtitle: "text-xs" },
  }[size] || dimensions.md;

  return (
    <div className={`inline-flex items-center gap-3 group text-left ${className}`}>
      {/* SVG Monogram Mark */}
      <div className={`relative shrink-0 flex items-center justify-center ${dimensions.icon} group-hover:scale-105 transition-transform duration-300`}>
        <svg
          viewBox="0 0 200 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="50%" stopColor="#c5a880" />
              <stop offset="100%" stopColor="#9a7b4f" />
            </linearGradient>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3d4f61" />
              <stop offset="100%" stopColor="#1c2836" />
            </linearGradient>
          </defs>

          {/* Top-Right Framing Border Lines */}
          <path
            d="M 120 10 H 190 V 210"
            stroke="url(#goldGrad)"
            strokeWidth="3.5"
            strokeLinecap="square"
            fill="none"
          />

          {/* Main Sweeping S Character (Golden) */}
          <path
            d="M 125 45 C 100 8, 30 8, 30 50 C 30 90, 150 70, 150 135 C 150 190, 80 210, 20 210"
            stroke="url(#goldGrad)"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />

          {/* Interlocking 'I' Serif Column (Dark Slate Blue) */}
          <path
            d="M 120 50 H 155 M 137.5 50 V 210 M 120 210 H 155"
            stroke="url(#blueGrad)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />

          {/* Lower Left Interior Arch Feature */}
          <path
            d="M 15 210 V 85 C 15 85, 90 100, 90 180"
            stroke="url(#goldGrad)"
            strokeWidth="3.5"
            fill="none"
          />

          {/* Vertical Fluted Slat Panel Lines inside Arch */}
          <line x1="23" y1="90" x2="23" y2="208" stroke="url(#goldGrad)" strokeWidth="2.5" opacity="0.9" />
          <line x1="31" y1="102" x2="31" y2="208" stroke="url(#goldGrad)" strokeWidth="2.5" opacity="0.9" />
          <line x1="39" y1="115" x2="39" y2="208" stroke="url(#goldGrad)" strokeWidth="2.5" opacity="0.9" />
          <line x1="47" y1="128" x2="47" y2="208" stroke="url(#goldGrad)" strokeWidth="2.5" opacity="0.9" />

          {/* Hanging Pendant Light in Arch */}
          <line x1="62" y1="110" x2="62" y2="142" stroke="url(#goldGrad)" strokeWidth="2" />
          <path d="M 54 150 C 54 142, 70 142, 70 150 Z" fill="url(#goldGrad)" />

          {/* Armchair Silhouette inside Arch */}
          <path
            d="M 40 200 C 40 180, 48 168, 62 168 C 76 168, 80 180, 80 200 C 80 208, 38 208, 40 200 Z"
            fill="url(#goldGrad)"
          />
        </svg>
      </div>

      {/* Brand Text */}
      {!iconOnly && (
        <div className="flex flex-col justify-center">
          <span className={`font-serif font-black tracking-[0.18em] uppercase text-white leading-tight transition-colors group-hover:text-[#c5a880] ${dimensions.title}`}>
            SUTHAR
          </span>
          <span className={`font-sans font-semibold tracking-[0.28em] uppercase text-[#c5a880] leading-none mt-0.5 ${dimensions.subtitle}`}>
            INTERIOR STUDIO
          </span>
        </div>
      )}
    </div>
  );
}
