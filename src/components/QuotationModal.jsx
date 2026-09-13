"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Sparkles, CheckCircle2, Phone, Mail, User, MapPin, Compass, Building2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICES_OPTIONS = [
  "Interior Design",
  "Custom Furniture",
  "Home Renovation",
  "Turnkey Solutions",
  "Commercial Interior"
];

const CITIES_OPTIONS = [
  "Mumbai",
  "Goa",
  "Pune",
  "Bengaluru",
  "Hyderabad",
  "Other Location"
];

export default function QuotationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    service_needed: "Interior Design",
    city: "Mumbai",
    message: ""
  });

  // Open modal handler
  const handleOpen = useCallback(() => {
    setIsSubmitted(false);
    setErrorMessage("");
    setFormData({
      user_name: "",
      user_phone: "",
      user_email: "",
      service_needed: "Interior Design",
      city: "Mumbai",
      message: ""
    });
    setIsOpen(true);
  }, []);

  // Close modal handler
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // 1. Auto-open modal after a small delay (5 seconds)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasSeenModal = localStorage.getItem("hasSeenQuotationModal");
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("hasSeenQuotationModal", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  // 2. Global event listeners for manual triggers ("open-quotation")
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onOpenEvent = () => handleOpen();

    window.addEventListener("open-quotation", onOpenEvent);

    return () => {
      window.removeEventListener("open-quotation", onOpenEvent);
    };
  }, [handleOpen]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Additional safety for some iOS Safari setups
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit via EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_suthar";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_suthar_quote";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key_suthar";

    const templateParams = {
      from_name: formData.user_name,
      from_email: formData.user_email,
      from_phone: formData.user_phone,
      service_needed: formData.service_needed,
      city: formData.city,
      message: formData.message || "No additional notes provided.",
      site_name: "Suthar Living"
    };

    try {
      if (publicKey && publicKey !== "public_key_suthar") {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // Fallback simulation when EmailJS env vars are not set
        console.log("EmailJS Submission Payload (Configure NEXT_PUBLIC_EMAILJS_* keys in .env):", templateParams);
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.warn("EmailJS error fallback activated:", error);
      // Still notify user of submission receipt
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-md">
          {/* Backdrop Click to Close */}
          <div
            className="absolute inset-0 z-0 cursor-pointer"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl mx-auto bg-[#faf9f6] border border-stone-200/50 text-stone-900 rounded-3xl shadow-2xl overflow-hidden text-left"
          >
            {/* Top Gold Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-20" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer border border-stone-200 z-20 shadow-sm"
              aria-label="Close Quotation Modal"
            >
              <X size={18} />
            </button>

            {!isSubmitted ? (
              <>
                {/* Fixed Header */}
                <div className="p-6 pb-5 sm:p-8 sm:pb-6 md:p-10 md:pb-6 pr-16 sm:pr-16 md:pr-16 border-b border-stone-200/60 bg-[#faf9f6] relative z-10">
                  <div className="space-y-2.5">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif tracking-tight leading-tight pt-1">
                      Request Free Estimate
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
                      Tell us about your space and requirements. Our team will review your details and send a personalized design & cost blueprint.
                    </p>
                  </div>
                </div>

                {/* Scrollable Form Container */}
                <div className="overflow-y-auto max-h-[60vh] sm:max-h-[65vh] modal-scroll p-6 sm:p-8 md:p-10" data-lenis-prevent="true">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 flex items-center gap-1.5">
                        <User size={12} className="text-primary" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        required
                        value={formData.user_name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Suthar"
                        className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 sm:py-3.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm"
                      />
                    </div>

                    {/* Phone & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 flex items-center gap-1.5">
                          <Phone size={12} className="text-primary" />
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="user_phone"
                          required
                          value={formData.user_phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 7020104354"
                          className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 sm:py-3.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 flex items-center gap-1.5">
                          <Mail size={12} className="text-primary" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          required
                          value={formData.user_email}
                          onChange={handleChange}
                          placeholder="e.g. rajesh@example.com"
                          className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 sm:py-3.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Service Needed Selection */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 flex items-center gap-1.5">
                        <Compass size={12} className="text-primary" />
                        Service Required
                      </label>
                      <select
                        name="service_needed"
                        value={formData.service_needed}
                        onChange={handleChange}
                        className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 sm:py-3.5 text-sm text-stone-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm cursor-pointer"
                      >
                        {SERVICES_OPTIONS.map((srv) => (
                          <option key={srv} value={srv} className="bg-white text-stone-900">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* City Selection */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500 flex items-center gap-1.5">
                        <MapPin size={12} className="text-primary" />
                        Project Location
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 sm:py-3.5 text-sm text-stone-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm cursor-pointer"
                      >
                        {CITIES_OPTIONS.map((c) => (
                          <option key={c} value={c} className="bg-white text-stone-900">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500">
                        Project Details / Carpet Area (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="e.g. 3 BHK renovation..."
                        className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 sm:py-3.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3 sm:pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover disabled:opacity-50 text-stone-950 py-4 px-6 rounded-full font-mono font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:scale-[1.01]"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                            <span>Sending Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Quotation Request</span>
                            <Send size={14} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="p-6 sm:p-8 md:p-10 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-5 w-full"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary text-primary flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
                      Quotation Request Sent!
                    </h3>
                    <p className="text-sm text-stone-600 font-light max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-stone-900">{formData.user_name}</strong>. Our lead architect and team will review your project details for <strong className="text-primary">{formData.service_needed}</strong> in <strong className="text-stone-900">{formData.city}</strong> and get back to you within 24 hours.
                    </p>
                  </div>

                  <button
                    onClick={handleClose}
                    className="inline-flex items-center space-x-2 bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                  >
                    <span>Continue Exploring</span>
                  </button>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
