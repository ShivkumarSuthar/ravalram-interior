"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "../WhatsAppIcon";
import PageShell from "../PageShell";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import sendEnquiry from "../../../lib/send-enquiry";
import { CONTACT } from "../../../lib/home-content";
import { CONTACT_PAGE, BANNERS } from "../../../lib/pages-content";

// Corner radius is added per element: rounded-full for inputs/selects, rounded-3xl for the textarea
const FIELD_BASE =
  "w-full border border-line/30 bg-bg-base px-6 py-3.5 text-base text-surface-dark outline-none transition-colors placeholder:text-text-muted focus:border-primary focus-visible:outline-none!";
const FIELD = `${FIELD_BASE} rounded-full`;

function Field({ label, id, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-heading text-base text-surface-dark">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactPage() {
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

  const details = [
    { icon: MapPin, label: "Address", value: CONTACT.address },
    { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}` },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Clock, label: "Working Hours", value: CONTACT_PAGE.hours },
  ];

  return (
    <PageShell seoView="contact" title="Contact Us" crumbs={[{ label: "Contact Us" }]} image={BANNERS.contact}>
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={CONTACT_PAGE.eyebrow} title={CONTACT_PAGE.title} />

          <ul className="mx-auto grid max-w-heading gap-8 border-y border-line/30 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-white">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-text-muted">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="mt-1 block break-words font-heading text-base text-surface-dark transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="mt-1 block font-heading text-base text-surface-dark">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="left" className="h-80 overflow-hidden rounded-3xl lg:h-auto">
              <img src={CONTACT_PAGE.image.src} alt={CONTACT_PAGE.image.alt} loading="lazy" decoding="async" className="size-full object-cover" />
            </Reveal>

            <Reveal direction="right">
              <h3 className="font-heading text-card-lg text-surface-dark">{CONTACT_PAGE.formTitle}</h3>
              <p className="mt-3 text-base leading-7 text-text-muted">{CONTACT_PAGE.formText}</p>

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
                  <select id="c-city" name="city" value={form.city} onChange={update} className={FIELD}>
                    <option value="">Select your city</option>
                    {CONTACT_PAGE.cities.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Service Needed" id="c-service">
                    <select id="c-service" name="service" value={form.service} onChange={update} className={FIELD}>
                      <option value="">Select a service</option>
                      {CONTACT_PAGE.services.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Project Details" id="c-message">
                    <textarea id="c-message" name="message" rows={5} value={form.message} onChange={update} placeholder="Size of the space, rooms, budget range, timeline..." className={`${FIELD_BASE} rounded-3xl`} />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group relative isolate inline-flex items-center overflow-hidden rounded-full border border-line/60 py-2.5 pl-6.25 pr-3.75 font-heading text-base leading-none text-surface-dark transition-colors duration-300 hover:border-primary hover:text-white disabled:opacity-60"
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
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal delay={0} className="mx-auto max-w-site px-5 pb-24 lg:pb-32.5">
        <iframe
          title="Suthar Living studio location on Google Maps"
          src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-100 w-full rounded-3xl border-0 grayscale lg:h-130"
        />
      </Reveal>
    </PageShell>
  );
}
