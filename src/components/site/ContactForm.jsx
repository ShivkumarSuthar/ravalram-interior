"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Select from "./Select";
import sendEnquiry from "../../lib/send-enquiry";
import { CONTACT } from "../../lib/home-content";
import { CONTACT_PAGE } from "../../lib/pages-content";

// Corner radius is added per element: rounded-full for inputs/selects, rounded-3xl for the textarea
const FIELD_BASE =
  "w-full border border-line/30 bg-bg-base px-6 py-3.5 text-base text-ink outline-none transition-colors placeholder:text-text-muted focus:border-primary focus-visible:outline-none!";
const FIELD = `${FIELD_BASE} rounded-full`;

function Field({ label, id, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-heading text-base text-ink">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
    </div>
  );
}

// Enquiry form: sends through EmailJS, then goes to the thank-you page; on failure shows direct contacts
export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", service: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | error

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
      });
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <form onSubmit={submit} className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" id="c-name" required>
          <input id="c-name" name="name" required autoComplete="name" value={form.name} onChange={update} placeholder="Your name" className={FIELD} />
        </Field>
        <Field label="Phone" id="c-phone" required>
          <input id="c-phone" name="phone" type="tel" required autoComplete="tel" value={form.phone} onChange={update} placeholder="+91" className={FIELD} />
        </Field>
        <Field label="Email" id="c-email" required>
          <input id="c-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update} placeholder="you@example.com" className={FIELD} />
        </Field>
        <Field label="City" id="c-city">
          <Select id="c-city" name="city" value={form.city} onChange={update} options={CONTACT_PAGE.cities} placeholder="Select your city" className={FIELD} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Service Needed" id="c-service">
            <Select id="c-service" name="service" value={form.service} onChange={update} options={CONTACT_PAGE.services} placeholder="Select a service" className={FIELD} />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Project Details" id="c-message">
            <textarea id="c-message" name="message" rows={5} value={form.message} onChange={update} placeholder="Size of the space, rooms, budget range, with or without materials, timeline..." className={`${FIELD_BASE} rounded-3xl`} />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="group relative isolate inline-flex items-center overflow-hidden rounded-full border border-line/60 py-2.5 pl-6.25 pr-3.75 font-heading text-base leading-none text-ink transition-colors duration-300 hover:border-primary hover:text-white disabled:opacity-60"
          >
            <span aria-hidden className="absolute inset-0 -z-10 origin-right scale-x-0 bg-primary transition-transform duration-400 group-hover:origin-left group-hover:scale-x-100" />
            {status === "sending" ? "Sending..." : "Send Message"}
            <span aria-hidden className="ml-2.5 flex size-10 items-center justify-center rounded-full bg-primary text-white">
              <ArrowRight className="size-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </span>
          </button>
        </div>
      </form>

      <div aria-live="polite">
        <AnimatePresence>
          {status === "error" && (
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 text-base leading-7 text-text-muted">
              Your message couldn&apos;t be sent just now. Please call{" "}
              <a href={CONTACT.phoneHref} className="text-primary underline">{CONTACT.phone}</a> or email{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-primary underline">{CONTACT.email}</a>.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
