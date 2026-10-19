import Reveal from "../Reveal";
import Eyebrow from "../Eyebrow";
import TitleParts from "../TitleParts";
import NewsletterForm from "./NewsletterForm";
import { NEWSLETTER } from "../../../lib/home-content";

// Server-rendered section; the sign-up form is the only client component
export default function NewsletterSection() {
  return (
    <section className="overflow-hidden bg-bg-soft py-24 lg:py-32.5">
      <Reveal delay={0} duration={1} className="mx-auto max-w-site px-5 text-center">
        <Eyebrow>{NEWSLETTER.eyebrow}</Eyebrow>
        <h2 data-cursor="lg" className="mx-auto mt-5 max-w-180 font-heading text-section-lg capitalize text-ink">
          <TitleParts parts={NEWSLETTER.title} />
        </h2>
        <p className="mx-auto mt-6 max-w-150 text-base leading-7 text-text-muted">{NEWSLETTER.text}</p>
        <NewsletterForm />
      </Reveal>
    </section>
  );
}
