import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Hammer,
  Compass,
  ShieldCheck,
  FileText,
  Check,
  X,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Maximize2,
  Award,
  Layers,
  ChevronRight
} from "lucide-react";

// Local asset imports
const loftImg = "/assets/images/AI_images/antra_project_loft_1782744318019.jpg";
const transitionImg = "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg";
const coastalImg = "/assets/images/AI_images/antra_project_coastal_1782744299850.jpg";
const aboutImg = "/assets/images/AI_images/antra_about_side_1782744266546.jpg";

const PILLARS = [
  {
    id: "craftsmanship",
    num: "01",
    question: "Who actually crafts my furniture & joinery?",
    title: "In-House Guild Artisans & Factory",
    category: "Guild Craftsmanship",
    icon: Hammer,
    image: loftImg,
    badge: "10-Yr Joinery Warranty",
    summary: "Handcrafted in our owned factory since 1989. IS 710 Marine Plywood & solid teak joinery with zero sub-contracting.",
    hotspot: { x: "32%", y: "45%", label: "IS:710 Marine Ply & Teak Joinery" },
    details: [
      "100% owned timber factory & guild master artisans",
      "IS:710 BWP Marine grade plywood standard",
      "Lacquered PU & melamine polishes with 10-year warranty"
    ]
  },
  {
    id: "supervision",
    num: "02",
    question: "Who ensures site work matches the drawings?",
    title: "Architect Padam P. Sutar & Lead Team",
    category: "Site Rigor",
    icon: Compass,
    image: coastalImg,
    badge: "Daily Site Audits",
    summary: "Daily on-site supervision bridging CAD blueprints to civil execution with millimeter precision and photo logs.",
    hotspot: { x: "68%", y: "35%", label: "0.1mm Site Laser Tolerances" },
    details: [
      "Daily architect site inspections & photo logs",
      "0.1mm tolerance for false ceilings & joinery",
      "100% Vastu Shastra spatial orientation audit"
    ]
  },
  {
    id: "turnkey",
    num: "03",
    question: "Do I have to coordinate multiple contractors?",
    title: "100% Single-Point Turnkey Control",
    category: "Full Accountability",
    icon: ShieldCheck,
    image: transitionImg,
    badge: "1 Single Agreement",
    summary: "One single agreement covering civil demolition, electrical, plumbing, false ceilings, joinery, and final styling.",
    hotspot: { x: "50%", y: "55%", label: "End-to-End Civil & Interior Build" },
    details: [
      "Unified contract with zero contractor friction",
      "Direct factory procurement with no markups",
      "Professional deep-clean & turnkey site handover"
    ]
  },
  {
    id: "pricing",
    num: "04",
    question: "Will there be hidden costs or delay excuses?",
    title: "Locked BOQ & Delay Penalty SLA",
    category: "Financial Transparency",
    icon: FileText,
    image: aboutImg,
    badge: "0% Hidden Surges",
    summary: "Itemized BOQ with fixed brand specs, locked unit rates, and a written SLA enforcing financial delay penalties.",
    hotspot: { x: "40%", y: "60%", label: "Locked Unit Rates & SLA Guarantee" },
    details: [
      "0% hidden costs or surprise price surges",
      "Written SLA with site delay financial penalty",
      "Milestone-linked transparent payment schedules"
    ]
  }
];

const COMPARISON_ITEMS = [
  {
    feature: "Joinery & Woodworking",
    suthar: "100% In-House Factory & Guild Master Artisans",
    regular: "Outsourced On-Site Carpenters & Unskilled Labor",
  },
  {
    feature: "Site Supervision",
    suthar: "Daily On-Site Architect Inspections (Padam P. Sutar)",
    regular: "Infrequent Visits by Unqualified Project Agents",
  },
  {
    feature: "Material Quality",
    suthar: "IS 710 BWP Marine Plywood & German Hettich Fittings",
    regular: "Commercial Grade MDF / Particle Board & Generic Hardware",
  },
  {
    feature: "Pricing & Timelines",
    suthar: "Locked BOQ Blueprint & SLA Delay Penalty Guarantee",
    regular: "Vague Lump-Sum Quotes & Frequent Unexplained Delays",
  }
];

export default function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [showComparison, setShowComparison] = useState(false);

  const handleConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation"));
  };

  const toggleAccordion = (idx) => {
    setActiveIdx((current) => (current === idx ? null : idx));
  };

  return (
    <section id="why-choose-us" className="bg-[#faf9f6] py-10 sm:py-16 relative overflow-hidden border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5 text-left">
          <div className="max-w-2xl space-y-1.5">
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-gold-accent uppercase">
              <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
              <span>THE SUTHAR STUDIO STANDARD</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-950 leading-tight">
              Architectural Rigor. <span className="font-serif italic font-normal text-gold-accent">Guild Craftsmanship.</span>
            </h2>
          </div>

          {/* View Switcher Tabs */}
          <div className="flex items-center space-x-1.5 bg-stone-200/80 p-1 rounded-xl self-start md:self-auto text-xs font-mono">
            <button
              onClick={() => setShowComparison(false)}
              className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center space-x-2 ${
                !showComparison ? "bg-[var(--color-surface-dark)] text-gold-accent shadow-sm" : "text-stone-700 hover:text-stone-950"
              }`}
            >
              <Award size={14} />
              <span>GUARANTEE BLUEPRINT</span>
            </button>
            <button
              onClick={() => setShowComparison(true)}
              className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center space-x-2 ${
                showComparison ? "bg-[var(--color-surface-dark)] text-gold-accent shadow-sm" : "text-stone-700 hover:text-stone-950"
              }`}
            >
              <Layers size={14} />
              <span>VS MARKET</span>
            </button>
          </div>
        </div>

        {!showComparison ? (
          /* PURE ACCORDION EXPERIENCE - SELF-CONTAINED STORYTELLING PANELS */
          <div className="space-y-4 text-left">
            {PILLARS.map((p, idx) => {
              const Icon = p.icon;
              const isOpen = activeIdx === idx;

              return (
                <div
                  key={p.id}
                  className={`group relative rounded-2xl sm:rounded-3xl transition-all duration-500 overflow-hidden border ${
                    isOpen
                      ? "bg-white text-stone-950 border-2 border-gold-accent shadow-xl ring-1 ring-gold-accent/30"
                      : "bg-white text-stone-900 border border-stone-200/90 hover:border-gold-accent/60 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Active Gold Left Indicator Bar */}
                  {isOpen && (
                    <motion.div
                      layoutId="activeAccordionBar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold-accent z-20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Accordion Header Trigger */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-4 sm:p-6 cursor-pointer flex items-center justify-between text-left transition-colors focus:outline-none relative z-10"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-3.5 sm:space-x-5 min-w-0">
                      <span
                        className={`text-xs sm:text-sm font-mono font-extrabold px-3 py-1.5 rounded-xl shrink-0 transition-all ${
                          isOpen
                            ? "bg-gold-accent text-stone-950 shadow-md"
                            : "bg-stone-100 text-stone-800 border border-stone-200 group-hover:bg-gold-accent group-hover:text-stone-950 group-hover:border-gold-accent"
                        }`}
                      >
                        {p.num}
                      </span>

                      <div className="min-w-0 space-y-0.5">
                        <div className="flex items-center space-x-1.5 text-[11px] font-mono font-semibold text-stone-500">
                          <HelpCircle
                            size={12}
                            className={isOpen ? "text-gold-accent shrink-0 animate-pulse" : "text-stone-400 shrink-0"}
                          />
                          <span className="truncate">"{p.question}"</span>
                        </div>
                        <h3
                          className={`text-base sm:text-xl font-extrabold tracking-tight truncate transition-colors ${
                            isOpen ? "text-stone-950" : "text-stone-900 group-hover:text-gold-accent"
                          }`}
                        >
                          {p.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 shrink-0 ml-3">
                      <span
                        className={`hidden md:inline-flex items-center space-x-1 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-lg border ${
                          isOpen
                            ? "bg-[var(--color-surface-dark)] text-gold-accent border-stone-800"
                            : "bg-stone-100 text-stone-600 border-stone-200 group-hover:border-gold-accent/50 group-hover:text-stone-950"
                        }`}
                      >
                        {isOpen && <Sparkles size={11} className="text-gold-accent" />}
                        <span>{p.badge}</span>
                      </span>
                      <div
                        className={`p-2 rounded-full transition-all duration-300 ${
                          isOpen
                            ? "bg-gold-accent text-stone-950 shadow-md"
                            : "bg-stone-100 text-stone-600 group-hover:bg-gold-accent group-hover:text-stone-950"
                        }`}
                      >
                        <ChevronRight size={18} className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
                      </div>
                    </div>
                  </button>

                  {/* Expandable Content Panel Inside Accordion */}
                  <AnimatePresence mode="wait">
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden relative bg-[#faf9f6]"
                      >
                        {/* Background Subtle Grid Pattern */}
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

                        {/* Corner Blueprint Label */}
                        <div className="absolute top-3 right-5 text-[9px] font-mono font-bold text-stone-400 z-10 pointer-events-none">
                          [SPEC #{p.num} &bull; SUTHAR DIRECTIVE]
                        </div>

                        <div className="px-4 pb-6 sm:px-8 sm:pb-8 pt-0 space-y-6 border-t border-stone-200/90 relative z-10">
                          
                          {/* 1. Large Premium Architectural Image with Interactive Hotspot Badge */}
                          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-stone-100 border border-stone-200/90 mt-5 group/img shadow-md">
                            <img
                              src={p.image}
                              alt={p.title}
                              className="w-full h-full object-cover filter brightness-[0.98] group-hover/img:scale-105 transition-transform duration-1000 ease-out"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                            
                            {/* Overlay Top-Left Category Tag */}
                            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-stone-900 font-mono font-bold text-[10px] sm:text-xs px-3 py-1.5 rounded-lg border border-stone-200/90 flex items-center space-x-2 shadow-md">
                              <Sparkles size={12} className="text-gold-accent" />
                              <span>DIRECTIVE {p.num} &bull; {p.category.toUpperCase()}</span>
                            </div>

                            {/* Floating Interactive Spec Hotspot Pin on Photo */}
                            <div
                              style={{ left: p.hotspot.x, top: p.hotspot.y }}
                              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                            >
                              <div className="relative flex items-center justify-center">
                                <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-gold-accent opacity-75" />
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-gold-accent border-2 border-stone-950" />
                              </div>
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-[var(--color-surface-dark)] text-gold-accent text-[10px] font-mono px-2.5 py-1 rounded-md shadow-2xl flex items-center space-x-1">
                                <Maximize2 size={10} />
                                <span className="font-bold">{p.hotspot.label}</span>
                              </div>
                            </div>

                            {/* Bottom-Right Badge Tag */}
                            <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-stone-800 font-mono text-[10px] sm:text-xs px-3 py-1 rounded-lg border border-stone-200 flex items-center space-x-1.5 shadow-md">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              <span className="font-semibold">{p.badge}</span>
                            </div>
                          </div>

                          {/* 2. Title & Short Description */}
                          <div className="space-y-2 max-w-4xl">
                            <div className="flex items-center space-x-2">
                              <Icon size={20} className="text-gold-accent shrink-0" />
                              <h4 className="text-lg sm:text-2xl font-extrabold text-stone-950 tracking-tight">
                                {p.title}
                              </h4>
                            </div>
                            <p className="text-sm sm:text-base font-light text-stone-600 leading-relaxed pl-7">
                              {p.summary}
                            </p>
                          </div>

                          {/* 3. Proof Points Grid with Micro-Card Hover States */}
                          <div className="space-y-2.5">
                            <span className="text-[10px] font-mono font-bold text-gold-accent uppercase tracking-widest block pl-1">
                              VERIFIED BLUEPRINT GUARANTEES
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              {p.details.map((detail, dIdx) => (
                                <div
                                  key={dIdx}
                                  className="bg-white hover:bg-stone-50 border border-stone-200/90 hover:border-gold-accent/60 rounded-xl p-4 flex items-start space-x-3 text-xs font-mono text-stone-800 transition-all duration-300 group/card shadow-xs hover:shadow-md"
                                >
                                  <div className="p-1 rounded-md bg-gold-accent/15 text-gold-accent group-hover/card:bg-gold-accent group-hover/card:text-stone-950 transition-colors shrink-0 mt-0.5">
                                    <Check size={14} />
                                  </div>
                                  <span className="leading-relaxed font-semibold text-stone-800">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* 4. Primary CTA Bar */}
                          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-stone-200/90">
                            <div className="flex items-center space-x-2.5 text-xs font-mono text-stone-500">
                              <span className="w-2 h-2 rounded-full bg-gold-accent" />
                              <span>Direct Factory Execution &bull; 10-Yr Warranty &bull; Zero Sub-contracting</span>
                            </div>
                            <button
                              onClick={handleConsultation}
                              className="inline-flex items-center justify-center space-x-2.5 bg-gold-accent hover:bg-[var(--color-primary-hover)] text-stone-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer text-xs font-mono tracking-wider uppercase group/btn"
                            >
                              <span>BOOK ONSITE AUDIT & BLUEPRINT REVIEW</span>
                              <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : (
          /* CONTRACTOR COMPARISON BLUEPRINT TABLE */
          <div className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-gold-accent uppercase tracking-widest block">
                  TRANSPARENT DIRECT COMPARISON
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-stone-950 tracking-tight">
                  How Suthar Studio Outperforms Standard Market Contractors
                </h3>
              </div>
              <button
                onClick={handleConsultation}
                className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-stone-950 hover:text-gold-accent transition-colors cursor-pointer"
              >
                <span>BOOK AUDIT</span>
                <ArrowRight size={13} className="text-gold-accent" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-mono text-[10px] uppercase tracking-wider">
                    <th className="py-2 px-3 font-normal">Feature / Standard</th>
                    <th className="py-2 px-3 font-bold text-stone-950 bg-stone-50 rounded-t-xl">Suthar Studio Guarantee</th>
                    <th className="py-2 px-3 font-normal text-stone-400">Market Contractor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {COMPARISON_ITEMS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-2.5 px-3 font-bold text-stone-900 font-mono text-[11px]">
                        {item.feature}
                      </td>
                      <td className="py-2.5 px-3 font-medium text-stone-950 bg-stone-50/80">
                        <div className="flex items-center space-x-2 text-stone-950">
                          <Check size={14} className="text-gold-accent shrink-0" />
                          <span>{item.suthar}</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 font-light text-stone-500">
                        <div className="flex items-center space-x-2">
                          <X size={14} className="text-[var(--color-text-muted)] shrink-0" />
                          <span>{item.regular}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* METRICS RIBBON */}
        <div className="bg-[var(--color-surface-dark)] text-white rounded-2xl p-4 border border-stone-800 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-0 md:divide-x divide-stone-800/80">
            <div className="space-y-0.5">
              <p className="text-xl font-extrabold text-gold-accent font-mono">35+ Yrs</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400">Guild Lineage</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-xl font-extrabold text-gold-accent font-mono">100%</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400">Architect Supervised</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-xl font-extrabold text-gold-accent font-mono">10 Yrs</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400">Joinery Warranty</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-xl font-extrabold text-gold-accent font-mono">0%</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400">Hidden Costs</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

