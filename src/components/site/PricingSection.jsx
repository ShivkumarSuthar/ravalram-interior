import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import PricingPlans from "./PricingPlans";
import { PRICING } from "../../lib/pages-content";

// Server-rendered pricing section: heading and ways-to-work cards; PricingPlans is the client part.
// `detailed` adds the area estimator, budget split and scope (pricing page).
export default function PricingSection({ categoryIds, detailed = false, flushTop = false }) {
  return (
    <section className={flushTop ? "pb-24 lg:pb-32.5" : "py-24 lg:py-32.5"}>
      <div className="mx-auto max-w-site px-5">
        <SectionHeading eyebrow={PRICING.eyebrow} title={PRICING.title} text={PRICING.modelsText} />

        {/* Ways to work with us: with/without materials, labour only, per sq ft or per item */}
        <ul className="mb-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {PRICING.models.map((model, i) => (
            <Reveal as="li" key={model.title} delay={i * 0.08} duration={1} className="rounded-3xl border border-line/20 bg-bg-base p-7">
              <p className="font-heading text-eyebrow uppercase text-primary">{model.tag}</p>
              <h3 className="mt-3 font-heading text-card text-ink">{model.title}</h3>
              <p className="mt-2 text-base leading-7 text-text-muted">{model.text}</p>
            </Reveal>
          ))}
        </ul>

        <PricingPlans categoryIds={categoryIds} detailed={detailed} />
      </div>
    </section>
  );
}
