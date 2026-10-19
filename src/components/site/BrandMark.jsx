// Static Suthar Brothers mark: the S and B from suthar-brothers-loader.svg, drawn fully in the current
// text colour (so it takes the theme colour, or primary gold where it is set). No animation here;
// the animated version is LogoLoader.
export default function BrandMark({ className = "" }) {
  return (
    <svg viewBox="-50 -22 660 660" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <mask id="sb-cuts-static" maskUnits="userSpaceOnUse" x="-100" y="-100" width="800" height="800">
          <rect x="-100" y="-100" width="800" height="800" fill="white" />
          <g fill="none" stroke="black" strokeWidth="80">
            <path d="M136.5 406.3 A56 56 0 0 1 73.5 380.2" />
            <path d="M135 260 L82.4 312.6 A56 56 0 0 0 69.4 371.4" />
          </g>
          <circle cx="122" cy="352.2" r="30" fill="black" />
        </mask>
      </defs>
      <g fill="none" stroke="currentColor" strokeWidth="60" strokeLinecap="round" strokeLinejoin="round">
        <path
          mask="url(#sb-cuts-static)"
          d="M182.4 529.4 A60 60 0 0 1 80 487 V130 Q80 60 150 60 H260 Q330 60 330 130 V150 Q330 190 370 196 C445 210 490 270 490 355 C490 450 435 520 360 552"
        />
        <path d="M228 167 L82.4 312.6 A56 56 0 0 0 161.6 391.8 L258 295.4 A56 56 0 0 1 337.2 374.6 L182.4 529.4" />
      </g>
    </svg>
  );
}
