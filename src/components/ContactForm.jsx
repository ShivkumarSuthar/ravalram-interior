import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight, ArrowLeft, Check, Sparkles,
  ChevronDown, Compass
} from "lucide-react";
import dynamic from "next/dynamic";

const RegionsMap = dynamic(() => import("./RegionsMap"), { ssr: false, loading: () => <div className="w-full rounded-2xl bg-stone-100 animate-pulse" style={{ height: "480px" }} /> });

/* ─────────────── DATA ─────────────── */
const SERVICES = [
  { id: "residential", num: "01", label: "Residential", sub: "Home · Villa · Apartment" },
  { id: "commercial", num: "02", label: "Commercial", sub: "Office · Retail · Hospitality" },
  { id: "renovation", num: "03", label: "Renovation", sub: "Refresh · Transform · Reimagine" },
  { id: "bespoke", num: "04", label: "Bespoke", sub: "Furniture · Joinery · Custom" },
];

const CITIES_LIST = ["Mumbai", "Goa", "Pune", "Bengaluru", "Hyderabad", "Hubballi", "Kumta", "Honnavar", "Murudeshwar"];

const PROPERTY_TYPES = ["1 BHK", "2 BHK", "3 BHK", "4+ BHK", "Villa / Bungalow", "Duplex", "Penthouse", "Row House", "Office", "Showroom / Retail"];

const SCOPES = ["Full Home Interior", "Living & Dining", "Kitchen", "Bedrooms", "Bathroom", "Modular Furniture", "Office Fit-out", "Renovation / Redo"];

const TIMELINES = [
  { id: "now", label: "Immediately" },
  { id: "1-3", label: "1–3 Months" },
  { id: "3-6", label: "3–6 Months" },
  { id: "exploring", label: "Just Exploring" },
];

const ease = [0.16, 1, 0.3, 1];

/* ─────────────── DROPDOWN ─────────────── */
function Dropdown({ label, value, options, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-2 relative">
      <span className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase text-stone-400 block truncate">{label}</span>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl border border-stone-200 bg-white text-stone-900 text-sm font-semibold transition-colors hover:border-primary/60 cursor-pointer"
      >
        <span className={value ? "text-stone-900" : "text-stone-400"}>{value || "Select..."}</span>
        <ChevronDown size={14} className={`text-stone-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute z-50 top-full mt-1 w-full rounded-xl border border-stone-200 bg-white shadow-xl overflow-hidden max-h-56 overflow-y-auto"
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors cursor-pointer ${value === opt ? "bg-primary/10 text-primary-hover" : "text-stone-700 hover:bg-stone-50 hover:text-stone-900"}`}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────── FLOATING INPUT ─────────────── */
function FormInput({ label, type = "text", value, onChange, required = true, multiline = false }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const cls = "w-full bg-transparent text-lg sm:text-xl font-light text-stone-900 outline-none placeholder:text-transparent peer";

  return (
    <div className={`relative border-b pb-3 pt-6 transition-colors duration-300 ${focused ? "border-primary" : "border-stone-200"}`}>
      <label className={`absolute left-0 font-mono text-[10px] uppercase tracking-[0.22em] font-bold transition-all duration-300 pointer-events-none ${active ? "top-0 text-primary" : "top-6 text-stone-400 text-xs"}`}>
        {label}
      </label>
      {multiline ? (
        <textarea rows={3} required={required} value={value} onChange={onChange}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          placeholder={label}
          className={`${cls} text-sm sm:text-base resize-none leading-relaxed`} />
      ) : (
        <input type={type} required={required} value={value} onChange={onChange}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          placeholder={label}
          className={cls} />
      )}
    </div>
  );
}

/* ─────────────── MAIN COMPONENT ─────────────── */
export default function ContactForm({ setView }) {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [service, setService] = useState("");
  const [city, setCity] = useState("Mumbai");
  const [propertyType, setPropertyType] = useState("");
  const [scope, setScope] = useState("");
  const [timeline, setTimeline] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [done, setDone] = useState(false);

  const go = (n) => { setDir(n > step ? 1 : -1); setStep(n); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setView) { setView("thank-you"); window.scrollTo({ top: 0, behavior: "smooth" }); }
    else setDone(true);
  };

  const stepHeadings = [
    { tag: "01 / 03", title: "Tell Us About", accent: "Your Space.", subtitle: "Let\u2019s start with the big picture." },
    { tag: "02 / 03", title: "Who Should We", accent: "Reach Out To?", subtitle: "So our architect can get in touch." },
    { tag: "03 / 03", title: "Describe Your", accent: "Vision.", subtitle: "Budget, timeline, and any details that matter." },
  ];

  const heading = stepHeadings[step] || stepHeadings[0];

  return (
    <section id="contact" className="text-stone-900 overflow-hidden select-none">

      {/* ══════════════════════════════════════════
          FULL-WIDTH BRIEF LAYOUT
      ══════════════════════════════════════════ */}
      <div className="bg-bg-base min-h-dvh relative border-t border-stone-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-dvh">

          {/* ── LEFT PANEL: Image + Brand ── */}
          <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden flex-col border-r border-stone-200/60">
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src="/assets/images/living_01.png"
                alt="Suthar Interior Studio luxury living room design with bespoke timber joinery"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.55) contrast(1.1) saturate(0.5)" }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-dark/30" />
            </div>

            {/* Architectural frame lines */}
            <div className="absolute inset-6 sm:inset-10 border border-white/[0.08] rounded-sm pointer-events-none" />
            <div className="absolute top-10 left-10 right-10 h-px bg-gradient-to-r from-primary/40 via-transparent to-transparent" />

            {/* Brand footer */}
            <div className="relative z-10 mt-auto p-10 sm:p-14 space-y-1.5">
              <h4 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">Suthar Interiors</h4>
              <p className="text-[11px] font-mono font-medium uppercase tracking-[0.3em] text-stone-400">Spaces With Intent</p>
            </div>
          </div>

          {/* ── RIGHT PANEL: Form Wizard ── */}
          <div className="lg:col-span-7 flex flex-col bg-bg-base">

            {/* Top bar */}
            <div className="flex items-center justify-between px-5 sm:px-12 lg:px-16 pt-6 sm:pt-10 pb-4 sm:pb-6 border-b border-stone-200/60">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-primary">Project Brief</span>
              <span className="text-[11px] font-mono font-bold text-stone-400">{heading.tag}</span>
            </div>

            {/* Form content area */}
            <div className="flex-1 px-5 sm:px-12 lg:px-16 py-5 sm:py-10 overflow-y-auto">
              <AnimatePresence mode="wait" custom={dir}>
                {!done ? (
                  <motion.div key={step}>

                    {/* ── STEP 0: Your space ── */}
                    {step === 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: dir * 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: dir * -40 }}
                        transition={{ duration: 0.35, ease }}
                        className="space-y-5 sm:space-y-10"
                      >
                        {/* Heading */}
                        <div className="space-y-1 sm:space-y-3">
                          <h2 className="text-2xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.05] text-stone-900">
                            {heading.title}
                            <br />
                            <span className="block">{heading.accent}</span>
                          </h2>
                          <p className="text-primary-hover italic font-serif text-sm sm:text-lg">{heading.subtitle}</p>
                        </div>

                        {/* Service type selector */}
                        <div className="space-y-3">
                          <span className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase text-stone-400 block">
                            What are you looking to create?
                          </span>
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {SERVICES.map(({ id, num, label, sub }) => {
                              const active = service === id;
                              return (
                                <button
                                  key={id}
                                  type="button"
                                  onClick={() => setService(id)}
                                  className={`relative text-left p-3 sm:p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${active
                                    ? "border-primary bg-primary/[0.08] shadow-md"
                                    : "border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm"
                                    }`}
                                >
                                  <span className={`text-[10px] font-mono font-bold block mb-1 sm:mb-2 ${active ? "text-primary" : "text-stone-300"}`}>{num}</span>
                                  <span className={`text-sm sm:text-lg font-extrabold block mb-0.5 sm:mb-1 tracking-tight ${active ? "text-stone-900" : "text-stone-700"}`}>{label}</span>
                                  <span className="text-[10px] sm:text-[11px] text-stone-400 font-light hidden sm:block">{sub}</span>
                                  {/* Arrow icon */}
                                  <div className={`absolute top-3 right-3 sm:top-5 sm:right-5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center transition-all ${active ? "border-primary text-primary" : "border-stone-200 text-stone-300 group-hover:border-stone-300"}`}>
                                    <ArrowRight size={12} className={`transition-transform ${active ? "rotate-[-45deg]" : ""}`} />
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Project details */}
                        <div className="space-y-4 sm:space-y-6">
                          <span className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase text-stone-400 block">Your Project</span>

                          {/* Timeline slider */}
                          <div className="relative pt-2 pb-8 sm:pb-10">
                            <div className="h-[2px] bg-stone-200 rounded-full relative">
                              <motion.div
                                className="absolute top-0 left-0 h-full bg-primary rounded-full"
                                animate={{ width: timeline === "now" ? "25%" : timeline === "1-3" ? "50%" : timeline === "3-6" ? "75%" : timeline === "exploring" ? "100%" : "0%" }}
                                transition={{ duration: 0.4, ease }}
                              />
                              {[0, 33, 66, 100].map((pos, i) => (
                                <button
                                  key={pos}
                                  type="button"
                                  onClick={() => setTimeline(TIMELINES[i].id)}
                                  className={`absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 transition-all cursor-pointer ${TIMELINES.findIndex(t => t.id === timeline) >= i
                                      ? "bg-primary border-primary shadow-sm"
                                      : "bg-white border-stone-300 hover:border-stone-400"
                                    }`}
                                  style={{ left: `${pos}%`, marginLeft: pos === 0 ? 0 : pos === 100 ? "-14px" : "-7px" }}
                                  aria-label={TIMELINES[i].label}
                                />
                              ))}
                            </div>
                            <div className="absolute w-full mt-3 h-4">
                              {TIMELINES.map((t, i) => {
                                const pos = [0, 33, 66, 100][i];
                                return (
                                  <span 
                                    key={t.id} 
                                    className={`absolute top-0 text-[8.5px] sm:text-[9px] font-mono font-bold whitespace-nowrap transition-colors ${timeline === t.id ? "text-primary-hover" : "text-stone-400"}`}
                                    style={{ 
                                      left: `${pos}%`, 
                                      transform: pos === 0 ? 'translateX(0)' : pos === 100 ? 'translateX(-100%)' : 'translateX(-50%)' 
                                    }}
                                  >
                                    {t.label}
                                  </span>
                                );
                              })}
                            </div>
                          </div>

                          {/* Dropdowns row */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                            <Dropdown label="Where is your project?" value={city} options={CITIES_LIST} onChange={setCity} />
                            <Dropdown label="Property type" value={propertyType} options={PROPERTY_TYPES} onChange={setPropertyType} />
                            <Dropdown label="Scope of work" value={scope} options={SCOPES} onChange={setScope} />
                          </div>
                        </div>

                        {/* Continue */}
                        <div className="flex justify-end pt-1 sm:pt-2">
                          <button
                            type="button"
                            disabled={!service}
                            onClick={() => go(1)}
                            className="inline-flex items-center gap-3 bg-bg-dark disabled:opacity-30 hover:bg-primary hover:text-stone-950 text-white px-10 py-4 rounded-full text-xs font-mono font-extrabold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer shadow-lg group disabled:cursor-not-allowed"
                          >
                            Continue
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* ── STEP 1: Contact details ── */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: dir * 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: dir * -40 }}
                        transition={{ duration: 0.35, ease }}
                        className="space-y-5 sm:space-y-10"
                      >
                        <div className="space-y-1 sm:space-y-3">
                          <h2 className="text-2xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.05] text-stone-900">
                            {heading.title}
                            <br />
                            <span className="block">{heading.accent}</span>
                          </h2>
                          <p className="text-primary-hover italic font-serif text-sm sm:text-lg">{heading.subtitle}</p>
                        </div>

                        <div className="space-y-8">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                            <FormInput label="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                            <FormInput label="Phone / WhatsApp" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                          </div>
                          <FormInput label="Email Address" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <button type="button" onClick={() => go(0)} className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-700 text-xs font-mono font-bold uppercase tracking-widest transition-colors cursor-pointer">
                            <ArrowLeft size={13} /> Back
                          </button>
                          <button
                            type="button"
                            disabled={!form.name || !form.phone || !form.email}
                            onClick={() => go(2)}
                            className="inline-flex items-center gap-3 bg-bg-dark disabled:opacity-30 hover:bg-primary hover:text-stone-950 text-white px-10 py-4 rounded-full text-xs font-mono font-extrabold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer shadow-lg group disabled:cursor-not-allowed"
                          >
                            Continue
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* ── STEP 2: Vision + Submit ── */}
                    {step === 2 && (
                      <motion.form
                        initial={{ opacity: 0, x: dir * 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: dir * -40 }}
                        transition={{ duration: 0.35, ease }}
                        onSubmit={handleSubmit}
                        className="space-y-5 sm:space-y-10"
                      >
                        <div className="space-y-1 sm:space-y-3">
                          <h2 className="text-2xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.05] text-stone-900">
                            {heading.title}
                            <br />
                            <span className="block">{heading.accent}</span>
                          </h2>
                          <p className="text-primary-hover italic font-serif text-sm sm:text-lg">{heading.subtitle}</p>
                        </div>

                        <FormInput
                          label="Describe your project, preferred style, timeline..."
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          multiline
                        />

                        {/* Brief summary */}
                        <div className="p-4 rounded-xl bg-white border border-stone-200/80 flex flex-wrap gap-3 text-[11px] font-mono">
                          <span className="text-stone-400">Brief for:</span>
                          <span className="text-stone-900 font-bold">{form.name}</span>
                          <span className="text-stone-300">·</span>
                          <span className="text-primary-hover font-bold">{SERVICES.find(s => s.id === service)?.label}</span>
                          <span className="text-stone-300">·</span>
                          <span className="text-stone-600">{city}</span>
                          {propertyType && <><span className="text-stone-300">·</span><span className="text-stone-600">{propertyType}</span></>}
                          {scope && <><span className="text-stone-300">·</span><span className="text-stone-600">{scope}</span></>}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <button type="button" onClick={() => go(1)} className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-700 text-xs font-mono font-bold uppercase tracking-widest transition-colors cursor-pointer">
                            <ArrowLeft size={13} /> Back
                          </button>
                          <button
                            type="submit"
                            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-stone-950 px-10 py-4 rounded-full text-xs font-mono font-extrabold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer shadow-xl group"
                          >
                            <Sparkles size={14} />
                            Submit My Brief
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </motion.form>
                    )}

                  </motion.div>
                ) : (
                  /* ── Success ── */
                  <motion.div
                    key="done"
                    initial={{ scale: 0.94, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20 gap-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center shadow-2xl"
                    >
                      <Check size={32} className="text-stone-950" strokeWidth={3} />
                    </motion.div>
                    <div className="space-y-2 max-w-sm">
                      <h3 className="text-3xl font-extrabold text-stone-900">Brief Received.</h3>
                      <p className="text-stone-500 text-sm font-light leading-relaxed">
                        Thank you, <strong className="text-stone-800">{form.name}</strong>. Our lead architect will study your brief and respond within <strong className="text-stone-800">24 hours</strong>.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom bar */}
            <div className="mt-auto px-5 sm:px-12 lg:px-16 py-3 sm:py-5 border-t border-stone-200/60 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-stone-400 overflow-hidden">
                <span className="text-stone-500 font-bold whitespace-nowrap">Suthar Interiors</span>
                {["Mumbai", "Goa", "Bengaluru", "Hyderabad"].map((c) => (
                  <span key={c} className="hidden sm:inline">
                    <span className="mx-1.5 text-stone-300">·</span>
                    <span className="whitespace-nowrap">{c}</span>
                  </span>
                ))}
              </div>
              <span className="text-primary text-sm font-mono font-bold">0{step + 1}</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}