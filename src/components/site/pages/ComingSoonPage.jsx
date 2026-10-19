import Logo from "../Logo";
import Eyebrow from "../Eyebrow";
import TitleParts from "../TitleParts";
import Reveal from "../Reveal";
import ComingSoonSignup from "../ComingSoonSignup";
import { COMING_SOON_PAGE } from "../../../lib/pages-content";
import { CONTACT } from "../../../lib/home-content";

// Full-screen holding page: logo, title, optional countdown, email sign-up
export default function ComingSoonPage() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 text-center">
      <img src={COMING_SOON_PAGE.background} alt="" fetchPriority="high" className="absolute inset-0 -z-20 size-full object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/60" />

      <Reveal delay={0.2} duration={1} className="w-full max-w-180">
        <Logo tone="light" className="justify-center" />
        <div className="mt-14">
          <Eyebrow tone="light">{COMING_SOON_PAGE.eyebrow}</Eyebrow>
        </div>
        <h1 data-cursor="lg" className="mt-6 font-heading text-section-lg capitalize text-white">
          <TitleParts parts={COMING_SOON_PAGE.title} />
        </h1>
        <p className="mx-auto mt-8 max-w-125 text-base leading-7 text-white/85">
          {COMING_SOON_PAGE.text} For anything urgent, email{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-primary underline">{CONTACT.email}</a>.
        </p>
        <ComingSoonSignup launchDate={COMING_SOON_PAGE.launchDate} />
      </Reveal>
    </main>
  );
}
