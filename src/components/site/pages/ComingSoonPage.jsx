"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Logo from "../Logo";
import Eyebrow from "../Eyebrow";
import TitleParts from "../TitleParts";
import Reveal from "../Reveal";
import sendEnquiry from "../../../lib/send-enquiry";
import { COMING_SOON_PAGE } from "../../../lib/pages-content";
import { CONTACT } from "../../../lib/home-content";

function useCountdown(target) {
  const [left, setLeft] = useState(null);
  useEffect(() => {
    if (!target) return;
    const end = new Date(target).getTime();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  if (left === null) return null;
  const s = Math.floor(left / 1000);
  return [
    [Math.floor(s / 86400), "d"],
    [Math.floor((s % 86400) / 3600), "h"],
    [Math.floor((s % 3600) / 60), "m"],
    [s % 60, "s"],
  ];
}

// Full-screen holding page: logo, title, optional countdown, email sign-up
export default function ComingSoonPage() {
  const countdown = useCountdown(COMING_SOON_PAGE.launchDate);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendEnquiry({ from_name: "Launch updates", from_email: email, message: "Please notify this address when the new page launches." });
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

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
        {countdown && (
          <p className="mt-8 flex justify-center gap-6 font-heading text-section text-white sm:gap-10" aria-label="Time until launch">
            {countdown.map(([value, unit]) => (
              <span key={unit}>{value}{unit}</span>
            ))}
          </p>
        )}
        <p className="mx-auto mt-8 max-w-125 text-base leading-7 text-white/85">
          {COMING_SOON_PAGE.text} For anything urgent, email{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-primary underline">{CONTACT.email}</a>.
        </p>
        <form onSubmit={submit} className="relative mx-auto mt-10 max-w-112.5 border-b border-white/60 text-left transition-colors focus-within:border-primary">
          <label htmlFor="cs-email" className="sr-only">Email address</label>
          <input id="cs-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="w-full bg-transparent py-3 pr-14 text-base text-white outline-none placeholder:text-white/70 focus-visible:outline-none!" />
          <button type="submit" disabled={status === "sending"} aria-label="Notify me" className="absolute right-0 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-primary text-white disabled:opacity-60">
            <ArrowRight className="size-4.5 -rotate-45" />
          </button>
        </form>
        <div aria-live="polite" className="mt-4 min-h-7">
          <AnimatePresence mode="wait">
            {status === "done" && <motion.p key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-base text-primary">Thank you, we will be in touch.</motion.p>}
            {status === "error" && <motion.p key="err" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-base text-white/85">Couldn&apos;t sign you up just now. Please email us instead.</motion.p>}
          </AnimatePresence>
        </div>
      </Reveal>
    </main>
  );
}
