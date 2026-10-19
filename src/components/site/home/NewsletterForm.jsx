"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import sendEnquiry from "../../../lib/send-enquiry";
import { CONTACT } from "../../../lib/home-content";

// Email sign-up; only confirms when EmailJS actually sent the request
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendEnquiry({
        from_name: "Newsletter subscriber",
        from_email: email,
        message: "Please add this address to the Suthar Brothers newsletter.",
      });
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <form onSubmit={submit} className="relative mx-auto mt-14 max-w-112.5 border-b border-ink/60 text-left transition-colors focus-within:border-primary">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full bg-transparent py-3 pr-14 text-base text-ink outline-none placeholder:text-text-muted focus-visible:outline-none!"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          aria-label="Subscribe"
          className="absolute right-0 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-primary text-white transition-colors duration-300 hover:bg-surface-dark disabled:opacity-60"
        >
          <ArrowRight className="size-4.5 -rotate-45" />
        </button>
      </form>

      <div aria-live="polite" className="mx-auto mt-5 min-h-7 max-w-112.5">
        <AnimatePresence mode="wait">
          {status === "done" && (
            <motion.p key="done" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-base text-primary">
              Thank you, you are on the list.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p key="error" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-base text-text-muted">
              We couldn&apos;t sign you up just now. Please email{" "}
              <a href={`mailto:${CONTACT.email}?subject=Newsletter`} className="text-primary underline">
                {CONTACT.email}
              </a>{" "}
              instead.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
