import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Home, Building2, Hammer, Layers, Compass, Wrench,
  ArrowRight, ArrowLeft, Check, MapPin, Sparkles,
  Phone, Mail, Clock
} from "lucide-react";

/* ─────────────── DATA ─────────────── */
const SERVICES = [
  { id: "residential", icon: Home,      label: "Residential Interior",  sub: "Penthouses, Villas & Homes" },
  { id: "commercial",  icon: Building2, label: "Commercial Interior",   sub: "Offices, Showrooms & Retail" },
  { id: "turnkey",     icon: Layers,    label: "Turnkey Execution",     sub: "Design to Key Handover" },
  { id: "woodwork",    icon: Hammer,    label: "Custom Woodwork",       sub: "Kitchens, Wardrobes & Joinery" },
  { id: "renovation",  icon: Wrench,    label: "Full Renovation",       sub: "Structural & Interior Overhaul" },
  { id: "consult",     icon: Compass,   label: "On-Site Consultation",  sub: "Site Visit & Brief Session" },
];

const BUDGETS = [
  { id: "u5",  label: "Under ₹5L",  sub: "Small scope" },
  { id: "5-15",label: "₹5L – ₹15L", sub: "Mid-scale" },
  { id: "15-30",label: "₹15L – ₹30L",sub: "Premium finish" },
  { id: "30p", label: "₹30L+",      sub: "Luxury / Turnkey" },
];

const CITIES = [
  { id: "kumta",      city: "Kumta",      tag: "1989", note: "The first workbench — our origin." },
  { id: "honnavar",   city: "Honnavar",   note: "Homes built to take on the salt air and win." },
  { id: "murudeshwar",city: "Murudeshwar",note: "Resort timberwork along the temple coast." },
  { id: "hubballi",   city: "Hubballi",   note: "Retail fit-outs along the inland trade route." },
  { id: "bengaluru",  city: "Bengaluru",  note: "Smart residences for a city that never slows." },
  { id: "hyderabad",  city: "Hyderabad",  note: "Custom joinery for grand residential suites." },
  { id: "goa",        city: "Goa",        note: "Beachfront villas and bungalows, restored." },
  { id: "pune",       city: "Pune",       note: "Duplexes and high-end apartments, reimagined." },
  { id: "mumbai",     city: "Mumbai",     tag: "HQ",   note: "Flagship showroom. Everything comes together here.", address: "Linking Road, Santacruz West, 400054" },
];

const ease = [0.16, 1, 0.3, 1];
const STEPS = ["Vision", "Details", "Brief"];

/* ─────────────── FLOATING INPUT ─────────────── */
function InkInput({ label, type = "text", value, onChange, required = true, multiline = false }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const cls = "w-full bg-transparent text-2xl sm:text-3xl font-light text-stone-900 outline-none placeholder:text-transparent peer";

  return (
    <div className={`relative border-b-2 pb-3 pt-7 transition-colors duration-300 ${focused ? "border-[#c5a880]" : "border-stone-200"}`}>
      <label className={`absolute left-0 font-mono text-[10px] uppercase tracking-[0.22em] font-bold transition-all duration-300 pointer-events-none ${active ? "top-0 text-[#c5a880]" : "top-7 text-stone-400 text-xs"}`}>
        {label}
      </label>
      {multiline ? (
        <textarea rows={3} required={required} value={value} onChange={onChange}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          placeholder={label}
          className={`${cls} text-base sm:text-lg resize-none leading-relaxed`} />
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
  const [budget, setBudget] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [done, setDone] = useState(false);
  const [city, setCity] = useState("mumbai");

  const go = (n) => { setDir(n > step ? 1 : -1); setStep(n); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setView) { setView("thank-you"); window.scrollTo({ top: 0, behavior: "smooth" }); }
    else setDone(true);
  };

  const activeCity = CITIES.find(c => c.id === city);
  const progress = ((step + 1) / 3) * 100;

  return (
    <section id="contact" className="text-stone-900 overflow-hidden border-t border-stone-200/80 select-none">

      {/* ══════════════════════════════════════════
          ACT I — DARK MANIFESTO HEADER
      ══════════════════════════════════════════ */}
      <div className="bg-[#0c0a09] py-20 sm:py-28 lg:py-32 relative overflow-hidden">
        {/* Architectural grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Diagonal gold slash */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c5a880]/40 to-transparent hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

            {/* Left: Editorial headline */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-7 lg:pr-16 space-y-6"
            >
              <div className="inline-flex items-center gap-2 border border-[#c5a880]/30 bg-[#c5a880]/10 px-4 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase text-[#c5a880]/80">
                  Begin Your Project Brief
                </span>
              </div>

              <h2 className="text-[2.6rem] sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Your Space,
                <br />
                <span className="text-[#c5a880] italic font-serif">Our Craft.</span>
              </h2>

              <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed max-w-xl">
                From a bare structural frame to a bespoke spatial masterpiece — describe what you envision and our lead architect will reach out within 24 hours with a tailored design consultation.
              </p>

              {/* Stat row */}
              <div className="flex flex-wrap gap-8 pt-4 border-t border-white/8">
                {[["35+", "Years of craft"], ["500+", "Projects executed"], ["24h", "Response SLA"]].map(([v, l]) => (
                  <div key={l}>
                    <span className="text-2xl font-extrabold text-[#c5a880] block">{v}</span>
                    <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest">{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Quick contact block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="lg:col-span-5 lg:pl-16 lg:border-l lg:border-white/8 space-y-5"
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-stone-500 block">
                Direct Lines
              </span>

              <div className="space-y-4">
                <a href="tel:+919820012345" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] group-hover:bg-[#c5a880]/10 transition-colors">
                    <Phone size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-stone-500 uppercase tracking-wider block">Call / WhatsApp</span>
                    <span className="text-white font-semibold text-sm group-hover:text-[#c5a880] transition-colors">+91 98200 12345</span>
                  </div>
                </a>

                <a href="mailto:Support@SutharInterior.com" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] group-hover:bg-[#c5a880]/10 transition-colors">
                    <Mail size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-stone-500 uppercase tracking-wider block">Email</span>
                    <span className="text-white font-semibold text-sm group-hover:text-[#c5a880] transition-colors">Support@SutharInterior.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-stone-500 uppercase tracking-wider block">Showroom</span>
                    <span className="text-white font-semibold text-sm">Linking Road, Santacruz West, Mumbai</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-stone-500">
                    <Clock size={14} />
                  </div>
                  <span className="text-stone-500 text-xs font-mono">Mon–Sat · 10:00 – 19:00 IST</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ACT II — THE BRIEF WIZARD
      ══════════════════════════════════════════ */}
      <div className="bg-[#f8f2ec] py-0 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Card floats up over the dark section */}
          <div className="-mt-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="bg-white rounded-[36px] shadow-2xl overflow-hidden border border-stone-200/60"
            >

              {/* Progress bar */}
              <div className="h-1 bg-stone-100">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease }}
                  className="h-full bg-gradient-to-r from-[#c5a880] to-[#b0936b]"
                />
              </div>

              {/* Step indicator */}
              <div className="px-8 sm:px-12 pt-7 pb-0 flex items-center gap-3">
                {STEPS.map((s, i) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-500 ${
                      i < step ? "bg-[#c5a880] text-stone-950"
                      : i === step ? "border-2 border-[#c5a880] text-[#c5a880]"
                      : "border-2 border-stone-200 text-stone-300"
                    }`}>
                      {i < step ? <Check size={10} strokeWidth={3} /> : `0${i + 1}`}
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest transition-colors ${i === step ? "text-[#c5a880]" : "text-stone-300"}`}>
                      {s}
                    </span>
                    {i < STEPS.length - 1 && <div className="w-8 h-px bg-stone-200 mx-1" />}
                  </div>
                ))}
              </div>

              {/* Step Content */}
              <AnimatePresence mode="wait" custom={dir}>
                {!done ? (
                  <motion.div key={step}>

                    {/* ── STEP 0: Choose your vision ── */}
                    {step === 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: dir * 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: dir * -40 }}
                        transition={{ duration: 0.35, ease }}
                        className="px-8 sm:px-12 py-8 sm:py-10"
                      >
                        <div className="mb-7">
                          <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#b0936b] mb-2">Step 01 of 03</p>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-snug">
                            What are we{" "}
                            <span className="italic text-[#c5a880] font-serif">creating together?</span>
                          </h3>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {SERVICES.map(({ id, icon: Icon, label, sub }) => {
                            const active = service === id;
                            return (
                              <button
                                key={id}
                                type="button"
                                onClick={() => setService(id)}
                                className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer group ${
                                  active
                                    ? "border-[#c5a880] bg-[#0c0a09] shadow-xl scale-[1.02]"
                                    : "border-stone-200 bg-white hover:border-[#c5a880]/50 hover:shadow-md"
                                }`}
                              >
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                                  active ? "bg-[#c5a880]/20 text-[#c5a880]" : "bg-stone-100 text-stone-600 group-hover:bg-[#c5a880]/10 group-hover:text-[#c5a880]"
                                }`}>
                                  <Icon size={18} strokeWidth={1.8} />
                                </div>
                                <p className={`text-sm font-bold leading-tight mb-1 transition-colors ${active ? "text-white" : "text-stone-900"}`}>
                                  {label}
                                </p>
                                <p className={`text-[10px] font-light leading-snug transition-colors ${active ? "text-stone-400" : "text-stone-400"}`}>
                                  {sub}
                                </p>
                                {active && (
                                  <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#c5a880] flex items-center justify-center">
                                    <Check size={10} className="text-stone-950" strokeWidth={3} />
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>

                        <div className="mt-8 flex justify-end">
                          <button
                            type="button"
                            disabled={!service}
                            onClick={() => go(1)}
                            className="inline-flex items-center gap-3 bg-[#0c0a09] disabled:opacity-40 hover:bg-[#c5a880] hover:text-stone-950 text-white px-8 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg group disabled:cursor-not-allowed"
                          >
                            Continue
                            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* ── STEP 1: Your details ── */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: dir * 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: dir * -40 }}
                        transition={{ duration: 0.35, ease }}
                        className="px-8 sm:px-12 py-8 sm:py-10"
                      >
                        <div className="mb-8">
                          <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#b0936b] mb-2">Step 02 of 03</p>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-snug">
                            Who should we{" "}
                            <span className="italic text-[#c5a880] font-serif">reach out to?</span>
                          </h3>
                        </div>

                        <div className="space-y-8">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                            <InkInput label="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                            <InkInput label="Phone / WhatsApp" type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                          </div>
                          <InkInput label="Email Address" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                        </div>

                        <div className="mt-10 flex items-center justify-between">
                          <button type="button" onClick={() => go(0)} className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-700 text-xs font-mono font-bold uppercase tracking-widest transition-colors cursor-pointer">
                            <ArrowLeft size={13} /> Back
                          </button>
                          <button
                            type="button"
                            disabled={!form.name || !form.phone || !form.email}
                            onClick={() => go(2)}
                            className="inline-flex items-center gap-3 bg-[#0c0a09] disabled:opacity-40 hover:bg-[#c5a880] hover:text-stone-950 text-white px-8 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg group disabled:cursor-not-allowed"
                          >
                            Continue
                            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* ── STEP 2: Project brief + submit ── */}
                    {step === 2 && (
                      <motion.form
                        initial={{ opacity: 0, x: dir * 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: dir * -40 }}
                        transition={{ duration: 0.35, ease }}
                        onSubmit={handleSubmit}
                        className="px-8 sm:px-12 py-8 sm:py-10"
                      >
                        <div className="mb-8">
                          <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#b0936b] mb-2">Step 03 of 03</p>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-snug">
                            Describe your{" "}
                            <span className="italic text-[#c5a880] font-serif">vision</span>
                          </h3>
                        </div>

                        {/* Budget selector */}
                        <div className="mb-8">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-stone-400 block mb-3">
                            Approximate Budget
                          </span>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {BUDGETS.map(({ id, label, sub }) => (
                              <button
                                key={id}
                                type="button"
                                onClick={() => setBudget(id)}
                                className={`text-center py-3 px-2 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                                  budget === id
                                    ? "border-[#c5a880] bg-[#c5a880]/10 text-stone-900"
                                    : "border-stone-200 bg-white hover:border-[#c5a880]/40 text-stone-600"
                                }`}
                              >
                                <span className="block text-sm font-extrabold">{label}</span>
                                <span className="block text-[10px] font-mono text-stone-400">{sub}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <InkInput
                          label="Describe your project, space size, preferred style..."
                          value={form.message}
                          onChange={e => setForm({...form, message: e.target.value})}
                          multiline
                        />

                        {/* Summary strip */}
                        <div className="mt-6 p-4 rounded-2xl bg-[#f8f2ec] border border-[#e8ddd4] flex flex-wrap gap-3 text-[11px] font-mono">
                          <span className="text-stone-400">Brief for:</span>
                          <span className="text-stone-700 font-bold">{form.name}</span>
                          <span className="text-stone-300">·</span>
                          <span className="text-[#b0936b] font-bold">{SERVICES.find(s => s.id === service)?.label}</span>
                          {budget && <><span className="text-stone-300">·</span><span className="text-stone-600">{BUDGETS.find(b => b.id === budget)?.label}</span></>}
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                          <button type="button" onClick={() => go(1)} className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-700 text-xs font-mono font-bold uppercase tracking-widest transition-colors cursor-pointer">
                            <ArrowLeft size={13} /> Back
                          </button>
                          <button
                            type="submit"
                            className="inline-flex items-center gap-3 bg-[#c5a880] hover:bg-[#b0936b] text-stone-950 px-10 py-4 rounded-full text-xs font-mono font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-xl group"
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
                    className="px-8 sm:px-12 py-16 text-center flex flex-col items-center gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-[#c5a880] to-[#b0936b] flex items-center justify-center shadow-2xl"
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ACT III — REGIONS
      ══════════════════════════════════════════ */}
      <div className="bg-[#f8f2ec] pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-8">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-stone-200/80"
          >
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2">
                <Compass size={14} className="text-[#c5a880]" />
                <span className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase text-stone-400">Active Execution Regions</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Regions We <span className="text-[#c5a880] italic font-serif">Mostly Work In</span>
              </h3>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xs">
              Our team travels from Mumbai HQ for site visits across India.
            </p>
          </motion.div>

          {/* City pills */}
          <div className="flex flex-wrap gap-2">
            {CITIES.map((loc, i) => {
              const isActive = loc.id === city;
              return (
                <motion.button
                  key={loc.id}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease, delay: i * 0.05 }}
                  onClick={() => setCity(loc.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-mono font-bold transition-all duration-300 cursor-pointer ${
                    isActive ? "bg-[#0c0a09] text-[#c5a880] border-[#0c0a09] shadow-lg scale-105"
                             : "bg-white text-stone-600 border-stone-200 hover:border-[#c5a880]/50 hover:shadow-sm"
                  }`}
                >
                  <MapPin size={12} className={isActive ? "text-[#c5a880]" : "text-stone-400"} />
                  {loc.city}
                  {loc.tag && (
                    <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${loc.id === "mumbai" ? "bg-[#c5a880] text-stone-950" : "bg-stone-200 text-stone-700"}`}>
                      {loc.tag}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Active city card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease }}
              className="grid sm:grid-cols-12 gap-4 p-7 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c0a09] to-[#1c1917] border border-[#c5a880]/15 shadow-xl"
            >
              <div className="sm:col-span-8 space-y-2.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <MapPin size={14} className="text-[#c5a880]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a880]">
                    {activeCity?.note?.split(".")[0]}
                  </span>
                  {activeCity?.tag && (
                    <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded ${activeCity.id === "mumbai" ? "bg-[#c5a880] text-stone-950" : "bg-stone-700 text-stone-200"}`}>
                      {activeCity.tag}
                    </span>
                  )}
                </div>
                <h4 className="text-3xl font-extrabold text-white">{activeCity?.city}</h4>
                <p className="text-stone-400 text-sm font-light">{activeCity?.note}</p>
                {activeCity?.address && (
                  <p className="text-[#c5a880] text-xs font-mono mt-1">{activeCity.address}</p>
                )}
              </div>
              <div className="sm:col-span-4 flex sm:items-end sm:justify-end pt-4 sm:pt-0">
                <button
                  onClick={() => { setStep(0); window.scrollTo({ top: document.getElementById("contact")?.offsetTop - 80, behavior: "smooth" }); }}
                  className="inline-flex items-center gap-2 bg-[#c5a880] hover:bg-[#b0936b] text-stone-950 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer group"
                >
                  Start a Brief
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

    </section>
  );
}