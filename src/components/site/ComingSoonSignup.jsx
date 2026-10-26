"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Honeypot from "./Honeypot";
import sendEnquiry from "../../lib/send-enquiry";

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

// Interactive part of the coming-soon page: optional countdown + email sign-up
export default function ComingSoonSignup({ launchDate }) {
  const countdown = useCountdown(launchDate);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendEnquiry({ from_name: "Launch updates", from_email: email, message: "Please notify this address when the new page launches." }, e.currentTarget);
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {countdown && (
        <p className="mt-8 flex justify-center gap-6 font-heading text-section text-white sm:gap-10" aria-label="Time until launch">
          {countdown.map(([value, unit]) => (
            <span key={unit}>{value}{unit}</span>
          ))}
        </p>
      )}
      <form onSubmit={submit} className="relative mx-auto mt-10 max-w-112.5 border-b border-white/60 text-left transition-colors focus-within:border-primary">
        <Honeypot />
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
    </>
  );
}
