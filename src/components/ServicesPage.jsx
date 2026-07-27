import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Hammer,
  Workflow,
  History,
  Phone,
  ArrowUpRight,
  Layers,
  HelpCircle,
  ChevronDown,
  Building2,
  Home,
  Check,
  Award,
  Users
} from "lucide-react";

import ProjectInvestmentGuide from "./ProjectInvestmentGuide.jsx";
import FlexibleSolutions from "./FlexibleSolutions.jsx";
import { SERVICES_PAGE_DATA, SITE_IMAGES } from "../lib/data.js";

const ICON_MAP = {
  History,
  Compass,
  Users,
  Sparkles,
  ShieldCheck,
  Award
};

export default function ServicesPage({ onBackToHome, onOpenQuote }) {
  // FAQ state
  const [activeFaq, setActiveFaq] = useState(null);

  const coreServices = SERVICES_PAGE_DATA.coreServices;
  const executionModels = SERVICES_PAGE_DATA.executionModels;
  const processSteps = SERVICES_PAGE_DATA.processSteps;
  const whyChooseUs = SERVICES_PAGE_DATA.whyChooseUs;
  const industries = SERVICES_PAGE_DATA.industries;
  const cities = SERVICES_PAGE_DATA.cities;
  const faqs = SERVICES_PAGE_DATA.faqs;

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-gold-accent/30 selection:text-stone-950 pt-[80px]">
      
      {/* PAGE HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
        {/* Full width premium background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={SITE_IMAGES.servicesHeroBg}
            alt="Luxurious spatial architecture Suthar Studio"
            className="w-full h-full object-cover opacity-25 filter brightness-[0.3] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40" />
        </div>

        {/* Blueprint line design */}
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
            <span className="text-gold-accent font-bold">SERVICES</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="text-gold-accent text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              OUR SERVICES
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight uppercase"
            >
              Complete Interior &amp; <br />
              <span className="text-gold-accent">Architectural</span> Solutions.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl pt-2"
            >
              From architectural planning and interior design to custom furniture manufacturing and turnkey execution, Suthar Interior Studio provides complete solutions tailored to your lifestyle, business, and budget.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-gold-accent px-6 py-4 rounded-none cursor-pointer"
            >
              <span>Book Free Consultation</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/10 bg-stone-950/5 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <button
              onClick={onBackToHome}
              className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md cursor-pointer hover:border-gold-accent hover:text-gold-accent"
            >
              View Projects
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 01: INTRODUCTION */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 text-left space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="text-gold-accent text-xs">✦</span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                  INTRODUCTION
                </span>
              </div>
              <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 leading-tight uppercase">
                Everything You Need. <br />
                <span className="text-gold-accent">Under One</span> Roof.
              </h2>
            </div>

            <div className="lg:col-span-7 text-left border-l-2 border-gold-accent pl-6 lg:pl-10">
              <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed">
                We believe every successful project begins with thoughtful planning and ends with exceptional craftsmanship. Our experienced architects, designers, and skilled craftsmen work together to provide complete solutions from concept to completion.
              </p>
              <p className="text-stone-400 text-xs font-mono tracking-widest mt-4 uppercase">
                Est. 1989 &bull; Traditional values &bull; Modern layouts
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02: OUR CORE SERVICES */}
      <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-32 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              DETAILED SERVICES
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
              Our Core <span className="text-gold-accent">Creative</span> Offerings
            </h2>
          </div>

          {coreServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Large Service Image */}
                <div className={`lg:col-span-6 relative ${isEven ? "" : "lg:order-2"}`}>
                  <div className="relative bg-white border border-stone-200/50 p-4 rounded-3xl shadow-xl overflow-hidden group">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-[1.2s]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Decorative hover overlay tag */}
                    <div className="absolute top-8 left-8 bg-stone-900 text-white font-mono text-[9px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase">
                      {service.accent}
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className={`lg:col-span-6 text-left space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                  <span className="text-gold-accent text-xs font-mono font-bold tracking-[0.2em] uppercase block">
                    0{index + 1} &bull; {service.accent}
                  </span>
                  
                  <h3 className="text-2xl md:text-4xl font-light text-stone-950 uppercase tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-mono font-bold block">
                      KEY CAPABILITIES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-stone-800">
                          <CheckCircle2 size={14} className="text-gold-accent shrink-0" />
                          <span className="text-xs sm:text-sm font-light font-sans">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={onOpenQuote}
                      className="inline-flex items-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 border-b-2 border-stone-900 hover:border-gold-accent hover:text-gold-accent pb-1 cursor-pointer"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>
      </section>

      {/* SECTION 03: OUR EXECUTION MODELS */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              FLEXIBLE EXECUTION MODELS
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
              How We <span className="text-gold-accent">Work With</span> You
            </h2>
            <p className="text-stone-500 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed pt-2">
              We offer multiple execution contracting formats to match your specific procurement comfort, budget control, and project stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {executionModels.map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-[#faf9f6] border border-stone-200/50 hover:border-gold-accent/30 hover:shadow-xl hover:-translate-y-1 p-6 md:p-8 rounded-2xl text-left space-y-4 transition-all duration-500 group"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-stone-200/30 text-gold-accent font-mono font-bold text-xs shadow-sm">
                  0{idx + 1}
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-950 group-hover:text-gold-accent transition-colors duration-300">
                    {model.title}
                  </h4>
                  <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE 3D VISUALIZATION & SERVICE PATHWAYS */}
      <FlexibleSolutions setView={onBackToHome} />

      {/* SECTION 04: OUR PROCESS (PREMIUM RESPONSIVE TIMELINE) */}
      <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              WORKFLOW PIPELINE
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
              Our Design &amp; <span className="text-gold-accent">Execution</span> Process
            </h2>
            <p className="text-stone-500 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed pt-2">
              From the initial introductory conversation to handing over the physical keys, we maintain rigorous milestones.
            </p>
          </div>

          {/* Timeline Grid (Horizontal on lg+, vertical/grid on mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-2 relative pt-8">
            
            {/* Horizontal Line connector (Visible on lg screens only) */}
            <div className="absolute top-[52px] left-8 right-8 h-[1px] bg-stone-200 pointer-events-none hidden lg:block" />

            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-white border border-stone-200/50 p-4 rounded-xl text-center flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all duration-300 relative group z-10"
              >
                {/* Visual node on timeline */}
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

      {/* SECTION 05: WHY CHOOSE SUTHAR INTERIOR STUDIO */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
              Why Clients <span className="text-gold-accent">Trust</span> Suthar Studio
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = ICON_MAP[item.iconName] || History;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
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

      {/* SECTION 06: INDUSTRIES WE SERVE */}
      <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute right-0 bottom-0 w-[40%] h-[100%] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(197,168,128,0.08),_transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-left max-w-3xl mb-16 md:mb-20 space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              OUR SPATIAL DIVERSITY
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-white uppercase">
              Industries <span className="text-gold-accent">We</span> Serve
            </h2>
            <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed">
              Our architects and carpenters are trained to adapt to specific residential codes, corporate fire regulations, retail circulation standards, and robust commercial acoustic requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-gold-accent/40 transition-all duration-300 text-left relative group cursor-default"
              >
                <div className="text-stone-500 font-mono text-[10px] group-hover:text-gold-accent transition-colors block mb-4">
                  {ind.count}
                </div>
                <h4 className="text-sm sm:text-base font-serif font-light tracking-wide text-white group-hover:text-gold-accent transition-colors">
                  {ind.name}
                </h4>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 06.5: PROJECT INVESTMENT GUIDE (Commented out) */}
      {/* <ProjectInvestmentGuide setView={onBackToHome} /> */}

      {/* SECTION 07: SERVICE AREAS */}
      <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-left max-w-3xl mb-16 md:mb-24 space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              REGIONAL OPERATIONS
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
              Service <span className="text-gold-accent">Areas &amp;</span> Locations
            </h2>
            <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
              We travel directly to verify custom measurements, supervise carpentry mockups, and run turnkey handovers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200/50 p-6 rounded-xl text-left hover:shadow-xl hover:border-gold-accent/30 transition-all duration-500 group relative"
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

        </div>
      </section>

      {/* SECTION 08: FAQ (8-10 SERVICE SPECIFIC COLLAPSIBLE PANEL ACCORDIONS) */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-stone-900 uppercase">
              Service <span className="text-gold-accent">Insights &amp;</span> FAQ
            </h2>
          </div>

          {/* Accordion Panels */}
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
            alt="Magnificent spatial architecture Suthar Studio final"
            className="w-full h-full object-cover opacity-20 filter brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/90 to-stone-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
          <div className="space-y-4 max-w-4xl mx-auto">
            <span className="text-gold-accent text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              LET'S START YOUR JOURNEY
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight uppercase">
              Let's Build Your <span className="text-gold-accent">Dream</span> Space.
            </h2>
            <p className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto pt-2">
              Whether you're planning a home, office, renovation, or custom furniture project, our team is ready to create spaces that combine thoughtful design with exceptional craftsmanship.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent px-8 py-5 rounded-full cursor-pointer shadow-xl"
            >
              <span>Book Free Consultation</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 border border-white/20 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full bg-white/5 backdrop-blur-md cursor-pointer hover:border-gold-accent hover:text-gold-accent"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
