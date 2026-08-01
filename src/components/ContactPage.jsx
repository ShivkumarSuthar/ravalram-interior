import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Check,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Compass,
  Award,
  Users,
  ShieldCheck,
  Zap,
  HelpCircle,
  MessageSquare,
  Building2,
  Calendar,
  Globe
} from "lucide-react";

import { COMPANY_INFO, FAQ_DATA, SITE_IMAGES, CONTACT_PAGE_DATA } from "../lib/data.js";

// Centralized asset references from data manager
const coastalImg = SITE_IMAGES.projectCoastal;
const loftImg = SITE_IMAGES.projectLoft;
const transitionImg = SITE_IMAGES.transitionLuxury;
const aboutImg = SITE_IMAGES.aboutSide;
const bannerImg = SITE_IMAGES.lobbyBanner;

const ICON_MAP = {
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Sparkles,
  Compass,
  ShieldCheck,
  Users,
  Award,
  Zap
};

export default function ContactPage({ onBackToHome, onOpenQuote, setView }) {
  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeCityIdx, setActiveCityIdx] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    projectType: "Residential",
    budget: "₹10–25 Lakh",
    message: "",
    agree: false
  });

  // Accordion active FAQ state
  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to be contacted regarding your project.");
      return;
    }
    
    if (setView) {
      setView("thank-you");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setFormSubmitted(true);
      // Reset form after delay
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          city: "",
          projectType: "Residential",
          budget: "₹10–25 Lakh",
          message: "",
          agree: false
        });
      }, 5000);
    }
  };

  const contactMethods = (CONTACT_PAGE_DATA?.contactMethods || []).map(item => ({
    ...item,
    icon: ICON_MAP[item.iconName] || Phone
  }));

  const whyContactUs = (CONTACT_PAGE_DATA?.whyBookConsultation || []).map(item => ({
    ...item,
    icon: ICON_MAP[item.iconName] || Sparkles
  }));

  const processSteps = [
    { num: "01", name: "Contact Us", desc: "Submit your basic spatial parameters and timeline." },
    { num: "02", name: "Free Consultation", desc: "Discussing ideas, goals, budgets, and layouts." },
    { num: "03", name: "Site Visit", desc: "High-precision laser measurements on site." },
    { num: "04", name: "Design Discussion", desc: "Exploring 2D drafts and photorealistic 3D CGI." },
    { num: "05", name: "Estimate & Proposal", desc: "Detailed bill of quantities and milestone schedule." },
    { num: "06", name: "Execution Begins", desc: "On-site civil or factory modular joinery fabrication." }
  ];

  const cities = [
    { name: "Mumbai", detail: "Luxury turnkey homes and premium offices." },
    { name: "Pune", detail: "Contemporary custom flats and design consultations." },
    { name: "Goa", detail: "Exquisite coastal villas and hospitality projects." },
    { name: "Bengaluru", detail: "Modern smart homes and architectural space plans." },
    { name: "Hyderabad", detail: "Custom furniture layouts and residential execution." },
    { name: "Hubballi", detail: "End-to-end renovations and modular cabinetry." },
    { name: "Kumta", detail: "Our native carpentry hub with traditional wood roots." },
    { name: "Honnavar", detail: "Bespoke private bungalows and space upgrades." },
    { name: "Murudeshwar", detail: "Scenic commercial stores and custom homes." },
    { name: "Nearby Regions", detail: "Other cities based on scope and blueprint size." }
  ];

  const faqs = (FAQ_DATA || []).map(item => ({
    q: item.question,
    a: item.answer
  }));

  const handleOpenConsultation = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      window.dispatchEvent(new CustomEvent("open-consultation"));
    }
  };

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-gold-accent/30 selection:text-stone-950 pt-[80px]">
      
      {/* PAGE HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
        {/* Full-width premium background image with subtle dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={SITE_IMAGES.aboutHeroBg}
            alt="Premium spatial architecture Suthar Studio"
            className="w-full h-full object-cover opacity-25 filter brightness-[0.8]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40" />
        </div>

        {/* Blueprint lines layout overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-10">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12 px-6">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full text-left space-y-8 py-20">
          <div className="inline-flex items-center space-x-2 text-stone-400 text-xs tracking-[0.25em] font-mono uppercase">
            <button onClick={onBackToHome} className="hover:text-gold-accent transition-colors cursor-pointer">HOME</button>
            <span>/</span>
            <span className="text-gold-accent font-bold">CONTACT US</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="text-gold-accent text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              CONTACT US
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight uppercase"
            >
              Let's Bring Your <br />
              <span className="text-gold-accent">Vision To</span> Life.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl pt-2"
            >
              Every great space begins with a conversation. Whether you're planning a new home, renovating an existing property, designing a commercial space, or creating custom furniture, our experienced architects and craftsmen are ready to help. Let's discuss your ideas and create something exceptional together.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={handleOpenConsultation}
              className="inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-gold-accent px-6 py-4 rounded-none cursor-pointer"
            >
              <span>Book Free Consultation</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/10 bg-stone-950/5 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <a
              href="tel:+14804560789"
              className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md cursor-pointer hover:border-gold-accent hover:text-gold-accent text-center"
            >
              Call Our Team
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 01: CONTACT INFORMATION */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-5 text-left space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="text-gold-accent text-xs">✦</span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                  GET IN TOUCH
                </span>
              </div>
              <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 leading-tight uppercase">
                We're Here <br />
                <span className="text-gold-accent">To</span> Help.
              </h2>
            </div>

            <div className="lg:col-span-7 text-left border-l-2 border-gold-accent pl-6 lg:pl-10">
              <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed">
                Have questions about your project? Need an estimate? Want to schedule a site visit? Our team is always ready to assist you. Contact us via phone, email, or WhatsApp, or visit our showroom to speak with our architects.
              </p>
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={idx}
                  href={method.link}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="bg-[#faf9f6] border border-stone-200/50 hover:border-gold-accent/40 p-6 rounded-2xl text-left block space-y-4 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 rounded-xl ${method.color} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                    <Icon size={18} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block font-bold">
                      {method.title}
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-950 group-hover:text-gold-accent transition-colors">
                      {method.action}
                    </h3>
                    <p className="text-gold-accent font-mono text-xs font-semibold select-all pt-1 leading-tight">
                      {method.detail}
                    </p>
                    <p className="text-stone-400 text-[10px] font-light leading-tight">
                      {method.subDetail}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Working Across Regions */}
          <div className="mt-12 bg-stone-50 border border-stone-200/30 p-6 md:p-8 rounded-2xl text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-gold-accent text-[10px] uppercase font-mono tracking-widest block font-bold">
                  REGIONAL OUTREACH
                </span>
                <h4 className="text-lg font-serif text-stone-900">
                  Active Architectural Execution Regions
                </h4>
                <p className="text-xs text-stone-500 font-light max-w-xl">
                  Our professional architects, civil engineers, and traditional carpenters regularly travel across major Indian cities to supervise site planning, take laser measurements, and manage turnkey execution projects.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 max-w-xl">
                {[
                  "Mumbai", "Pune", "Goa", "Bengaluru", "Hyderabad",
                  "Hubballi", "Kumta", "Honnavar", "Murudeshwar", "Nearby Regions"
                ].map((region, idx) => (
                  <span
                    key={idx}
                    className="bg-white border border-stone-200 text-stone-700 text-[10px] font-mono font-bold tracking-wider px-3 py-1.5 rounded uppercase shadow-sm"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 02: CONTACT FORM */}
      <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden" id="showroom-map">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Form Left Side Text */}
            <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-[120px]">
              <div className="inline-flex items-center space-x-2">
                <span className="text-gold-accent text-xs">✦</span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                  PROJECT ENQUIRY
                </span>
              </div>
              <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 leading-tight uppercase">
                Tell Us About <br />
                <span className="text-gold-accent">Your</span> Project.
              </h2>
              <p className="text-stone-500 font-light text-sm sm:text-base leading-relaxed">
                Take a few moments to outline your spatial concept. Once received, our lead design architects will evaluate the parameters and schedule an introductory structural video call or personal meeting.
              </p>

              <div className="space-y-4 pt-4 border-t border-stone-200/50">
                <div className="flex items-center space-x-3 text-stone-700 text-xs font-mono">
                  <CheckCircle2 size={14} className="text-gold-accent" />
                  <span>Free initial design analysis & ballpark pricing</span>
                </div>
                <div className="flex items-center space-x-3 text-stone-700 text-xs font-mono">
                  <CheckCircle2 size={14} className="text-gold-accent" />
                  <span>Interactive screen-share reviews for floorplans</span>
                </div>
                <div className="flex items-center space-x-3 text-stone-700 text-xs font-mono">
                  <CheckCircle2 size={14} className="text-gold-accent" />
                  <span>No pushy marketing; only high-fidelity advice</span>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="lg:col-span-7 bg-white border border-stone-200/50 p-8 md:p-12 rounded-3xl shadow-xl text-left">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="enquiry-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-mono font-bold">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:bg-white rounded-lg px-4 py-3 text-sm text-stone-900 outline-none transition-all duration-300"
                          placeholder="e.g. Ramesh Suthar"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-mono font-bold">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:bg-white rounded-lg px-4 py-3 text-sm text-stone-900 outline-none transition-all duration-300"
                          placeholder="e.g. +91 98200 98200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-mono font-bold">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:bg-white rounded-lg px-4 py-3 text-sm text-stone-900 outline-none transition-all duration-300"
                          placeholder="e.g. ramesh@gmail.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-mono font-bold">
                          Your City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:bg-white rounded-lg px-4 py-3 text-sm text-stone-900 outline-none transition-all duration-300"
                          placeholder="e.g. Mumbai, Pune, Goa"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-mono font-bold">
                          Project Type
                        </label>
                        <div className="relative">
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:bg-white rounded-lg px-4 py-3 text-sm text-stone-900 outline-none transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Office">Office</option>
                            <option value="Renovation">Renovation</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Architecture">Architecture</option>
                            <option value="Turnkey">Turnkey</option>
                          </select>
                          <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-mono font-bold">
                          Approximate Budget
                        </label>
                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:bg-white rounded-lg px-4 py-3 text-sm text-stone-900 outline-none transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="Below ₹5 Lakh">Below ₹5 Lakh</option>
                            <option value="₹5–10 Lakh">₹5–10 Lakh</option>
                            <option value="₹10–25 Lakh">₹10–25 Lakh</option>
                            <option value="₹25 Lakh+">₹25 Lakh+</option>
                          </select>
                          <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-mono font-bold">
                        Message / Preferred Timeline
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-stone-50 border border-stone-200 focus:border-gold-accent focus:bg-white rounded-lg px-4 py-3 text-sm text-stone-900 outline-none transition-all duration-300 resize-none"
                        placeholder="Tell us about your space. E.g., 'Looking to renovate our 3BHK flat in Khar with sustainable materials by October.'"
                      />
                    </div>

                    {/* Checkbox agreement */}
                    <div className="flex items-start space-x-3 pt-2">
                      <input
                        type="checkbox"
                        id="agree-checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-gold-accent border-stone-300 rounded focus:ring-gold-accent cursor-pointer"
                      />
                      <label htmlFor="agree-checkbox" className="text-xs text-stone-500 font-light leading-tight text-left cursor-pointer select-none">
                        I agree to be contacted regarding my project parameters, blueprint audits, and custom estimate reports by Suthar Interior Studio.
                      </label>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-gold-accent py-4 rounded-xl cursor-pointer shadow-lg"
                      >
                        <span>Request Free Consultation</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold-accent/15 border border-gold-accent/30 flex items-center justify-center text-gold-accent shadow-md">
                      <Check size={32} strokeWidth={2.5} />
                    </div>
                    <div className="space-y-2 max-w-lg">
                      <h3 className="text-2xl font-serif text-stone-950">
                        Consultation Request Submitted!
                      </h3>
                      <p className="text-stone-600 text-sm font-light leading-relaxed">
                        Thank you, <span className="font-semibold text-stone-900">{formData.fullName}</span>. Suthar Interior Studio has registered your project enquiry. 
                      </p>
                      <p className="text-stone-500 text-xs font-light">
                        Our lead design architects are analyzing your parameters (Approximate budget: <span className="font-medium text-stone-800">{formData.budget}</span> for <span className="font-medium text-gold-accent">{formData.projectType}</span>). An architect will contact you within 1-2 hours on <span className="font-mono text-stone-800">{formData.phone}</span>.
                      </p>
                    </div>
                    <div className="bg-stone-50 border border-stone-200/50 p-4 rounded-xl w-full text-xs text-stone-400 font-mono text-center">
                      ESTIMATED CONTACT WINDOW: TODAY &bull; WITHIN 120 MINUTES
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 03: WHY CONTACT US */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              OUR SERVICE PROMISE
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
              Why Connect <span className="text-gold-accent">With</span> Suthar Studio
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyContactUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="bg-stone-50 border border-stone-100 hover:bg-white hover:border-gold-accent/30 hover:shadow-xl rounded-2xl p-6 md:p-8 text-left space-y-4 transition-all duration-500 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/50 flex items-center justify-center text-gold-accent group-hover:bg-gold-accent/10 transition-colors duration-500 shadow-sm">
                    <Icon size={18} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-950 group-hover:text-gold-accent transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 04: OUR PROCESS (PREMIUM TIMELINE) */}
      <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              ONBOARDING PATH
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
              Our Project <span className="text-gold-accent">Onboarding</span> Process
            </h2>
            <p className="text-stone-500 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed pt-2">
              From your initial spatial submission to handing over certified architectural estimates and starting carpentry.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative pt-8">
            {/* Horizontal Line connector (lg screen) */}
            <div className="absolute top-[52px] left-12 right-12 h-[1px] bg-stone-200 pointer-events-none hidden lg:block" />

            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-white border border-stone-200/50 p-4 rounded-2xl text-center flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all duration-300 relative group z-10"
              >
                <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center font-mono font-bold text-xs text-gold-accent mx-auto group-hover:bg-gold-accent group-hover:text-stone-900 transition-colors duration-300">
                  {step.num}
                </div>
                
                <div className="space-y-1 flex-grow">
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-tight line-clamp-1">
                    {step.name}
                  </h4>
                  <p className="text-[10px] text-stone-400 font-light leading-tight">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 05: SERVICE AREAS */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-left max-w-3xl mb-16 md:mb-24 space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              SERVICE COVERAGE
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
              Our Geographical <span className="text-gold-accent">Service</span> Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="bg-stone-50 border border-stone-200/50 p-6 rounded-xl text-left hover:shadow-xl hover:bg-white hover:border-gold-accent/30 transition-all duration-500 group relative"
              >
                <div className="absolute top-6 right-6 text-gold-accent opacity-40 group-hover:opacity-100 transition-opacity">
                  <MapPin size={16} />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-medium text-stone-950 group-hover:text-gold-accent transition-colors duration-300 mb-2">
                  {city.name}
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                  {city.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Under Areas Message */}
          <div className="mt-12 text-center max-w-xl mx-auto space-y-3 bg-[#faf9f6] border border-stone-200/50 p-6 rounded-xl">
            <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-stone-800">
              Don't see your location?
            </h4>
            <p className="text-stone-500 text-xs font-light leading-relaxed">
              We also undertake architectural and complete turnkey interior projects in other cities depending on blueprint sizes and requirements.
            </p>
            <div className="pt-2">
              <button
                onClick={handleOpenConsultation}
                className="inline-flex items-center space-x-2 text-stone-900 font-bold text-xs tracking-widest uppercase transition-colors hover:text-gold-accent cursor-pointer border-b border-stone-950 pb-0.5"
              >
                <span>Contact us to discuss your project</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 06: GOOGLE MAP */}
      <section className="py-24 bg-[#faf9f6] relative overflow-hidden" id="showroom-address-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-12">
            <div className="lg:col-span-6 text-left space-y-4">
              <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
                PHYSICAL ATELIER
              </span>
              <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
                Visit Our <span className="text-gold-accent">Showroom &amp;</span> Studio
              </h2>
            </div>
            <div className="lg:col-span-6 text-left">
              <p className="text-stone-500 font-light text-sm sm:text-base leading-relaxed">
                Schedule an appointment and meet our architects to discuss your spatial parameters in detail. Inspect timber selectives, stone samples, modular cabinetry, and German hardware profiles.
              </p>
            </div>
          </div>

          {/* Showroom Details & City Locations Card */}
          <div className="relative w-full rounded-3xl overflow-hidden border border-stone-200/90 bg-white p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Left Column: Flagship Showroom HQ */}
              <div className="space-y-4 text-left p-6 rounded-2xl bg-[#faf9f6] border border-stone-200/80">
                <span className="text-gold-accent text-[10px] font-mono tracking-widest font-bold uppercase block">
                  FLAGSHIP HEADQUARTERS
                </span>
                <h4 className="text-xl font-extrabold text-stone-900">
                  Santacruz Atelier &amp; Showroom
                </h4>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  Linking Road, Near Sacred Heart Church, Santacruz West, Mumbai, Maharashtra 400054
                </p>
                <div className="pt-2 text-xs font-mono text-stone-500 space-y-1">
                  <p><strong className="text-stone-800">Phone:</strong> +91 98200 12345 / +1 (480) 456-0789</p>
                  <p><strong className="text-stone-800">Email:</strong> Support@SutharInterior.com</p>
                  <p><strong className="text-stone-800">Hours:</strong> Mon – Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>

              {/* Right Column: Major Active Cities with Interactive Spec Preview */}
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 text-[10px] font-mono tracking-widest font-bold uppercase block">
                    ACTIVE CITIES &amp; REGIONS
                  </span>
                  <span className="text-[10px] font-mono text-gold-accent font-bold uppercase">
                    TAP CITY TO PREVIEW
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cities.map((c, i) => {
                    const isSelected = activeCityIdx === i;
                    return (
                      <button
                        key={i}
                        onClick={() => setActiveCityIdx(i)}
                        className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                          isSelected
                            ? "bg-stone-950 text-gold-accent border-stone-950 shadow-md scale-105"
                            : "bg-stone-50 text-stone-800 border-stone-200/90 hover:border-gold-accent/50 hover:bg-white"
                        }`}
                      >
                        <MapPin size={13} className={isSelected ? "text-gold-accent" : "text-stone-400"} />
                        <span>{c.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Selected City Spec Box */}
                {cities[activeCityIdx] && (
                  <div className="p-4 rounded-xl bg-gold-accent/10 border border-gold-accent/30 space-y-1 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-extrabold text-stone-900 uppercase">
                        {cities[activeCityIdx].name} REGIONAL SCOPE
                      </span>
                      <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
                    </div>
                    <p className="text-xs font-medium text-stone-700 leading-relaxed">
                      {cities[activeCityIdx].detail}
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 07: BUSINESS HOURS */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              AVAILABILITY MATRIX
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
              Business <span className="text-gold-accent">Hours &amp;</span> Access
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#faf9f6] border border-stone-200/50 p-6 md:p-8 rounded-2xl text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-950 text-gold-accent flex items-center justify-center shadow-md">
                <Clock size={18} />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-950">
                Monday – Saturday
              </h4>
              <p className="text-gold-accent text-lg font-serif font-medium leading-none">
                9:00 AM – 7:00 PM
              </p>
              <p className="text-stone-400 text-xs font-light leading-tight">
                Architects are fully available at our Santacruz showroom for design drafts.
              </p>
            </div>

            <div className="bg-[#faf9f6] border border-stone-200/50 p-6 md:p-8 rounded-2xl text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-950 text-gold-accent flex items-center justify-center shadow-md">
                <Calendar size={18} />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-950">
                Sunday
              </h4>
              <p className="text-stone-600 text-lg font-serif font-medium leading-none">
                By Appointment Only
              </p>
              <p className="text-stone-400 text-xs font-light leading-tight">
                For comprehensive client reviews, site acquisitions, and premium contracts only.
              </p>
            </div>

            <div className="bg-[#faf9f6] border border-stone-200/50 p-6 md:p-8 rounded-2xl text-left space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-950 text-gold-accent flex items-center justify-center shadow-md">
                <Globe size={18} />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-950">
                Emergency Consults
              </h4>
              <p className="text-stone-600 text-lg font-serif font-medium leading-none">
                Available on Request
              </p>
              <p className="text-stone-400 text-xs font-light leading-tight">
                If you have tight developer handover timelines, we can run overnight measurement runs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 08: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              REDUCING HESITATION
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
              Frequently <span className="text-gold-accent">Asked</span> Questions
            </h2>
          </div>

          {/* Accordion FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-stone-50 border border-stone-200/40 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg font-medium text-stone-900 group-hover:text-gold-accent transition-colors">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-stone-400 group-hover:text-gold-accent shrink-0 ml-4"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-xs sm:text-sm font-light text-stone-600 leading-relaxed border-t border-stone-200/30 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative w-full overflow-hidden py-24 md:py-32 bg-stone-950 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={SITE_IMAGES.ctaBg}
            alt="Magnificent spatial architecture Suthar Studio finale"
            className="w-full h-full object-cover opacity-15 filter brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/90 to-stone-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
          <div className="space-y-4 max-w-4xl mx-auto">
            <span className="text-gold-accent text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              LET'S START THE JOURNEY
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight uppercase">
              Let's Create <br />
              Something <span className="text-gold-accent">Beautiful</span> Together.
            </h2>
            <p className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto pt-2">
              From your first consultation to the final handover, Suthar Interior Studio is committed to creating spaces that reflect your lifestyle, vision, and aspirations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={handleOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent px-8 py-5 rounded-full cursor-pointer shadow-xl"
            >
              <span>Book Free Consultation</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <a
              href="https://wa.me/919820012345"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 border border-white/20 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full bg-white/5 backdrop-blur-md cursor-pointer hover:border-gold-accent hover:text-gold-accent text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
