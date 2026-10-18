import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { PROCESS } from "../../../lib/home-content";

export default function ProcessSection() {
  return (
    <section className="bg-bg-soft py-24 lg:py-32.5">
      <div className="mx-auto max-w-site px-5">
        <SectionHeading eyebrow={PROCESS.eyebrow} title={PROCESS.title} text={PROCESS.text} />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-18">
          <Reveal direction="left" className="h-80 overflow-hidden rounded-3xl sm:h-115 lg:max-w-160">
            <img src={PROCESS.image.src} alt={PROCESS.image.alt} loading="lazy" decoding="async" className="size-full object-cover" />
          </Reveal>

          <Reveal direction="right" as="ol">
            {PROCESS.steps.map((step, i) => (
              <li key={step.title} className="flex gap-6 border-b border-line/30 py-8 first:pt-0 sm:gap-5">
                <span className="grid size-16 shrink-0 place-items-center rounded-full bg-bg-base font-heading text-card text-surface-dark sm:size-20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="max-w-100">
                  <h3 className="font-heading text-card-lg text-surface-dark">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
