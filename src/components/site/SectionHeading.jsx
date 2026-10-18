import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import TitleParts from "./TitleParts";

// Split heading: label on the left third, title (and optional text) on the right,
// with the thin drafting lines that sit behind them on desktop
export default function SectionHeading({ eyebrow, title, text, className = "" }) {
  return (
    <Reveal
      delay={0}
      duration={1}
      className={`relative mx-auto mb-10 grid max-w-heading gap-x-5 gap-y-2 lg:mb-15 lg:grid-cols-3 lg:pt-16 ${className}`}
    >
      <div aria-hidden className="pointer-events-none absolute left-0 top-0 hidden h-47.5 w-125 lg:block">
        <span className="absolute inset-x-0 top-8 h-px bg-linear-to-r from-line/40 to-transparent" />
        <span className="absolute inset-y-0 left-90 w-px bg-linear-to-b from-line/40 to-transparent" />
      </div>

      <div className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>

      <div className="relative lg:col-span-2">
        <h2 data-cursor="lg" className="font-heading text-section capitalize text-surface-dark">
          <TitleParts parts={title} />
        </h2>
        {text && <p className="mt-6 max-w-3xl text-base leading-7 text-text-muted">{text}</p>}
      </div>
    </Reveal>
  );
}
