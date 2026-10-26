"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import useOverlay from "./useOverlay";
import Eyebrow from "./Eyebrow";
import { EASE_OUT } from "./Reveal";
import Select from "./Select";
import Honeypot from "./Honeypot";
import sendEnquiry from "../../lib/send-enquiry";
import { CONTACT } from "../../lib/home-content";
import { CONTACT_PAGE } from "../../lib/pages-content";

// Corner radius is added per element: rounded-full for inputs/selects, rounded-3xl for the textarea
const FIELD_BASE =
  "w-full border border-line/30 bg-bg-soft px-5 py-3 text-base text-ink outline-none transition-colors placeholder:text-text-muted focus:border-primary focus-visible:outline-none!";

const FIELD = `${FIELD_BASE} rounded-full`;
const EMPTY ={ name: "", phone: "", email: "", city: "", service: "", message: "" };

// Quote request popup. Opens on window event "open-quotation" (or legacy "open-consultation");
// event.detail.topic (e.g. a pricing plan) pre-fills the project details.
export default function QuoteModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const close = () => setOpen(false);
  useOverlay(open, close);

  useEffect(() => {
    const onOpen = (e) => {
      const topic = e.detail?.topic;
      setForm({ ...EMPTY, message: topic ? `I'm interested in: ${topic}. ` : "" });
      setStatus("idle");
      setOpen(true);
    };
    window.addEventListener("open-quotation", onOpen);
    window.addEventListener("open-consultation", onOpen);
    return () => {
      window.removeEventListener("open-quotation", onOpen);
      window.removeEventListener("open-consultation", onOpen);
    };
  }, []);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendEnquiry({
        from_name: form.name,
        from_email: form.email,
        from_phone: form.phone,
        city: form.city,
        service_needed: form.service,
        message: form.message || "No additional notes provided.",
      }, e.currentTarget);
      setOpen(false);
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="quote-modal"
          className="fixed inset-0 z-[110] flex items-end justify-center bg-black/60 sm:items-center sm:p-5"
          onClick={close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-title"
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92dvh] w-full max-w-160 overflow-y-auto rounded-t-3xl bg-bg-base px-6 pb-8 pt-7 sm:rounded-3xl sm:px-10 sm:pb-10 sm:pt-9"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Close"
              className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-line/30 text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              <X className="size-4.5" />
            </button>

            <Eyebrow>Free Consultation</Eyebrow>
            <h2 id="quote-title" className="mt-4 pr-12 font-heading text-card-lg text-ink">
              Tell Us About Your Space
            </h2>
            <p className="mt-2 text-base leading-7 text-text-muted">
              Share a few details and our team will call you to discuss your project and arrange a site visit.
            </p>

            <form onSubmit={submit} className="mt-7 grid gap-4 sm:grid-cols-2">
              <Honeypot />
              <div className="sm:col-span-2">
                <label htmlFor="q-name" className="mb-1.5 block font-heading text-base text-ink">Full Name <span className="text-primary">*</span></label>
                <input id="q-name" name="name" required autoComplete="name" value={form.name} onChange={update} placeholder="Your name" className={FIELD} />
              </div>
              <div>
                <label htmlFor="q-phone" className="mb-1.5 block font-heading text-base text-ink">Phone / WhatsApp <span className="text-primary">*</span></label>
                <input id="q-phone" name="phone" type="tel" required autoComplete="tel" value={form.phone} onChange={update} placeholder="+91" className={FIELD} />
              </div>
              <div>
                <label htmlFor="q-email" className="mb-1.5 block font-heading text-base text-ink">Email <span className="text-primary">*</span></label>
                <input id="q-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update} placeholder="you@example.com" className={FIELD} />
              </div>
              <div>
                <label htmlFor="q-service" className="mb-1.5 block font-heading text-base text-ink">Service</label>
                <Select id="q-service" name="service" value={form.service} onChange={update} options={CONTACT_PAGE.services} placeholder="Select a service" className={FIELD} />
              </div>
              <div>
                <label htmlFor="q-city" className="mb-1.5 block font-heading text-base text-ink">City</label>
                <Select id="q-city" name="city" value={form.city} onChange={update} options={CONTACT_PAGE.cities} placeholder="Select your city" className={FIELD} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="q-message" className="mb-1.5 block font-heading text-base text-ink">Project Details</label>
                <textarea id="q-message" name="message" rows={3} value={form.message} onChange={update} placeholder="Size of the space, rooms, budget range, timeline..." className={`${FIELD_BASE} rounded-3xl`} />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative isolate inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-primary py-2.5 pl-6.25 pr-3.75 font-heading text-base text-white transition-colors duration-300 hover:bg-surface-dark disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? "Sending..." : "Request A Call Back"}
                  <span aria-hidden className="ml-2.5 flex size-10 items-center justify-center rounded-full bg-bg-base text-primary">
                    <ArrowRight className="size-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                  </span>
                </button>
              </div>
            </form>

            <div aria-live="polite">
              <AnimatePresence>
                {status === "error" && (
                  <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 text-base leading-7 text-text-muted">
                    Your request couldn&apos;t be sent just now. Please call{" "}
                    <a href={CONTACT.phoneHref} className="text-primary underline">{CONTACT.phone}</a> or email{" "}
                    <a href={`mailto:${CONTACT.email}`} className="text-primary underline">{CONTACT.email}</a>.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
