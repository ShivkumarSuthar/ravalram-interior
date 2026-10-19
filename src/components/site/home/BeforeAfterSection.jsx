import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import BeforeAfterSlider from "../BeforeAfterSlider";
import { BEFORE_AFTER } from "../../../lib/home-content";

// Comparison slider that also works as the divider between the light services section and the dark
// about section: the card straddles the boundary, the page colour changes behind it.
// The gradient hard-stops 8rem (12rem on large screens) above the bottom, so the dark band continues
// seamlessly into the next section.
export default function BeforeAfterSection() {
  return (
    <section className="bg-[linear-gradient(to_bottom,var(--color-bg-soft)_calc(100%_-_8rem),var(--color-bg-dark)_calc(100%_-_8rem))] pb-16 lg:bg-[linear-gradient(to_bottom,var(--color-bg-soft)_calc(100%_-_12rem),var(--color-bg-dark)_calc(100%_-_12rem))] lg:pb-24">
      <div className="mx-auto max-w-site px-5">
        <SectionHeading eyebrow={BEFORE_AFTER.eyebrow} title={BEFORE_AFTER.title} text={BEFORE_AFTER.text} />
        <Reveal delay={0} duration={1} className="mx-auto max-w-5xl">
          <BeforeAfterSlider before={BEFORE_AFTER.before} after={BEFORE_AFTER.after} />
        </Reveal>
      </div>
    </section>
  );
}
