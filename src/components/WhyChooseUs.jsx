import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Compass,
  Hammer,
  Sparkles,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  ArrowRight,
  Award
} from "lucide-react";

// Local asset imports
const loftImg = "/assets/images/AI_images/antra_project_loft_1782744318019.jpg";
const transitionImg = "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg";
const coastalImg = "/assets/images/AI_images/antra_project_coastal_1782744299850.jpg";
const aboutImg = "/assets/images/AI_images/antra_about_side_1782744266546.jpg";

const expertisePillars = [
  {
    id: "01",
    key: "heritage",
    title: "30+ Years Timber Woodworking Heritage",
    subtitle: "Generational craftsmanship founded in 1989 by Ravalram H. Suthar.",
    category: "Generational Trust",
    icon: Hammer,
    image: loftImg,
    badge: "Master Artisan Guild",
    stats: [
      { label: "Guild Legacy", value: "Since 1989" },
      { label: "In-House Factory", value: "100% Owned" },
      { label: "Joinery Guarantee", value: "10 Years" }
    ],
    overview: "Combining multi-generational timber joinery traditions with modern European CNC precision. Every dining table, walk-in wardrobe, and architectural wall paneling is crafted by master artisans who have spent decades perfecting wood joinery, veneer matching, and lacquered PU polishes.",
    deliverables: [
      "Bespoke Solid Teak & Hardwood Joinery Units",
      "Factory-finished Acrylic & Veneer Modular Kitchens",
      "Custom Walk-in Wardrobe & Dressing Room Systems",
      "Hand-carved Temple Shrines & Statement Main Doors",
      "Post-installation Maintenance Guide & 10-Year Warranty"
    ],
    materials: [
      { name: "Core Plywood", spec: "100% Boiling Water Proof (BWP) IS:710 Marine Grade" },
      { name: "Solid Timber", spec: "Seasoned CP Teak, Steam Beech, Oak & Sheesham Wood" },
      { name: "Hardware Systems", spec: "German Hettich / Blum soft-close hinges & tandem box drawers" },
      { name: "Surface Finishes", spec: "SAYERLACK Italian PU Polish, Natural Veneer, Matte Acrylics" }
    ],
    timeline: [
      { stage: "Phase 1: Timber Selection & Grain Matching", duration: "2 - 3 Days" },
      { stage: "Phase 2: CNC Cutting & Edge Banding", duration: "10 - 12 Days" },
      { stage: "Phase 3: Multi-coat PU Polish & Finishing", duration: "5 - 7 Days" },
      { stage: "Phase 4: Dustless Site Laser Installation", duration: "2 - 3 Days" }
    ]
  },
  {
    id: "02",
    key: "architect",
    title: "100% Architect-Supervised Site Rigor",
    subtitle: "Direct daily monitoring by lead architect Padam P. Sutar & senior team.",
    category: "Architectural Precision",
    icon: Compass,
    image: coastalImg,
    badge: "Lead Architect Audit",
    stats: [
      { label: "Lead Architect", value: "Padam P. Sutar" },
      { label: "Site Tolerance", value: "0.1 mm" },
      { label: "Vastu Audit", value: "100% Compliant" }
    ],
    overview: "We eliminate the critical disconnect between architectural design concepts and on-site civil workers. Our lead architects inspect site dimensions, electrical trees, plumbing conduits, and ceiling alignments daily to ensure 100% fidelity to approved CAD drawings.",
    deliverables: [
      "Millimeter-precise Working CAD Sets (Civil, Electrical, MEP)",
      "Photorealistic 4K 3D Renderings & VR Walkthroughs",
      "Daily Site Progress Inspection Logs & Photo Updates",
      "Vastu Shastra Spatial Orientation & Light Audits",
      "Structural Load & Safety Clearance Certificates"
    ],
    materials: [
      { name: "Structural Metals", spec: "Heavy-gauge Galvanized Steel Framework & Toughened Glass" },
      { name: "Electrical Lines", spec: "Fire-safe Polycab copper cabling with Schneider switches" },
      { name: "Plumbing Conduits", spec: "CPVC Astra leak-proof piping with Grohe diverters" },
      { name: "Tiling Mortars", spec: "Laticrete polymer-modified tile adhesives & epoxy grouts" }
    ],
    timeline: [
      { stage: "Phase 1: Laser Site Survey & CAD Blueprinting", duration: "3 - 5 Days" },
      { stage: "Phase 2: 3D Visualization & Material Approval", duration: "5 - 7 Days" },
      { stage: "Phase 3: Daily Architect Site Inspection", duration: "Active Daily" },
      { stage: "Phase 4: Final Quality Punch List Handover", duration: "2 Days" }
    ]
  },
  {
    id: "03",
    key: "turnkey",
    title: "End-to-End Turnkey Execution",
    subtitle: "Single-point accountability from demolition to final interior styling.",
    category: "Zero Hassle Build",
    icon: ShieldCheck,
    image: transitionImg,
    badge: "Single Contact Partner",
    stats: [
      { label: "Execution Model", value: "Turnkey Design-Build" },
      { label: "SLA On-Time", value: "Guaranteed" },
      { label: "Client Hassle", value: "Zero" }
    ],
    overview: "Experience complete peace of mind with our turnkey design-build protocol. Suthar Interior Studio manages civil contractors, electrical wiring, plumbing, false ceiling, painting, joinery manufacturing, and decorative styling under a unified project contract.",
    deliverables: [
      "Comprehensive Turnkey Site Management Agreement",
      "Material Procurement & Logistics Coordination",
      "Demolition, Civil Rebuilding & Waterproofing",
      "Complete Lighting Curation & Soft Furnishing Assembly",
      "Professional Post-Construction Deep Cleaning"
    ],
    materials: [
      { name: "Sanitaryware", spec: "Concealed Grohe / Kohler thermo-diverters & wall-hung closets" },
      { name: "Paints & Finishes", spec: "Asian Paints Royale Luxury Emulsion & PU Wood Coatings" },
      { name: "Flooring Tiles", spec: "Nexion / Simpolo large format vitrified tiles & Italian Marble" },
      { name: "Ceiling Systems", spec: "Saint-Gobain Gyproc false ceiling channels & moisture boards" }
    ],
    timeline: [
      { stage: "Phase 1: Civil Demolition & MEP Overhaul", duration: "10 - 15 Days" },
      { stage: "Phase 2: Tiling, Ceiling & Waterproofing", duration: "12 - 15 Days" },
      { stage: "Phase 3: Joinery Assembly & Painting", duration: "15 - 20 Days" },
      { stage: "Phase 4: Deep Cleaning & Key Handover", duration: "2 - 3 Days" }
    ]
  },
  {
    id: "04",
    key: "transparency",
    title: "100% Transparent Itemized BOQ & SLA",
    subtitle: "Locked pricing blueprint with zero hidden fees or unexpected cost spikes.",
    category: "Financial Integrity",
    icon: FileText,
    image: aboutImg,
    badge: "Fixed Budget Blueprint",
    stats: [
      { label: "Hidden Costs", value: "0%" },
      { label: "BOQ Line Items", value: "100% Specified" },
      { label: "Delay SLA", value: "Financial Penalty" }
    ],
    overview: "We believe in absolute financial transparency. Before a single hammer strikes on your site, you receive a detailed Bill of Quantities (BOQ) explicitly stating ply thickness, veneer species, hardware brands, paint gallons, and labor costs.",
    deliverables: [
      "Itemized Bill of Quantities (BOQ) with OEM Brand Names",
      "Written Service Level Agreement (SLA) with Completion Date",
      "Financial Penalty Commitment for any Unexcused Delays",
      "Stage-wise Milestone Payment Schedule Linked to Progress",
      "Authentic Factory Material Batch Certificates"
    ],
    materials: [
      { name: "Plywood Brands", spec: "CenturyPly Club Prime / Greenply 710 BWP Marine Ply" },
      { name: "Hardware Brands", spec: "Hettich Germany / Blum Austria / Hafele Germany" },
      { name: "Adhesives & Sealants", spec: "Fevicol Hi-Per water-proof adhesives & Dow Corning silicones" },
      { name: "Electrical Brands", spec: "Polycab FR wires / Havells COB LEDs / Schneider Zencelo" }
    ],
    timeline: [
      { stage: "Phase 1: Site Survey & Requirement Intake", duration: "2 Days" },
      { stage: "Phase 2: Itemized BOQ Draft & Brand Selection", duration: "3 - 5 Days" },
      { stage: "Phase 3: Contract Signing & Fixed Rate Locking", duration: "1 Day" },
      { stage: "Phase 4: Milestone Payment Audits", duration: "Stage Wise" }
    ]
  }
];

export default function WhyChooseUs({ setView }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState("overview"); // "overview" | "deliverables" | "materials" | "timeline"

  const activePillar = expertisePillars[activeIdx];

  const handleConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation"));
  };

  return (
    <section id="why-choose-us" className="bg-[#faf9f6] py-20 md:py-32 relative overflow-hidden select-none border-b border-stone-200/60">
      
      {/* Background Subtle Watermark Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-left border-b border-stone-200/60 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 border border-stone-200 bg-stone-100 px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold-accent" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-gold-accent">
                OUR STUDIO PILLARS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
              Why Choose <span className="text-gold-accent">Suthar Studio</span>
            </h2>
          </div>

          <div className="text-left space-y-1 max-w-md">
            <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
              This isn't ordinary interior design. Explore our deep architectural specifications, material guarantees, and generational woodworking heritage.
            </p>
            <span className="text-xs font-mono font-bold text-gold-accent block pt-1">
              GENUINE CRAFTSMANSHIP • SINCE 1989
            </span>
          </div>
        </div>

        {/* 4 Pillar Selection Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertisePillars.map((pillar, idx) => {
            const isActive = activeIdx === idx;
            const IconComponent = pillar.icon;
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  setActiveIdx(idx);
                  setActiveSubTab("overview");
                }}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer ${
                  isActive
                    ? "bg-gold-accent text-white border-gold-accent shadow-xl scale-[1.02]"
                    : "bg-white text-stone-800 border-stone-200/80 hover:border-gold-accent hover:bg-stone-50"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-xs font-mono font-bold ${isActive ? "text-gold-accent" : "text-stone-400"}`}>
                    {pillar.id}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? "bg-gold-accent text-stone-950" : "bg-gold-accent/10 text-gold-accent"
                  }`}>
                    <IconComponent size={16} />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${isActive ? "text-stone-200" : "text-gold-accent"}`}>
                    {pillar.category}
                  </span>
                  <h3 className={`text-sm sm:text-base font-bold tracking-tight line-clamp-2 ${isActive ? "text-white" : "text-stone-950"}`}>
                    {pillar.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Pillar Specification Spotlight Card */}
        <div className="bg-white border border-stone-200/80 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden text-left">
          
          {/* Top Banner Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-100 gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2">
                <span className="text-gold-accent text-xs">✦</span>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gold-accent font-bold">
                  STUDIO ADVANTAGE SPECIFICATION // {activePillar.id}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 tracking-tight">
                {activePillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 font-light">
                {activePillar.subtitle}
              </p>
            </div>

            {/* Badge */}
            <div className="shrink-0 inline-flex items-center space-x-2 bg-gold-accent/10 border border-gold-accent/30 px-4 py-2 rounded-lg">
              <Award className="w-4 h-4 text-gold-accent" />
              <span className="text-xs font-bold text-gold-accent uppercase tracking-wider">
                {activePillar.badge}
              </span>
            </div>
          </div>

          {/* Sub-Tabs Navigation Bar */}
          <div className="flex items-center space-x-2 sm:space-x-4 border-b border-stone-100 my-6 overflow-x-auto pb-2 scrollbar-none">
            {[
              { key: "overview", label: "PILLAR OVERVIEW", icon: Compass },
              { key: "deliverables", label: "DELIVERABLES & SLA", icon: CheckCircle2 },
              { key: "materials", label: "MATERIAL STANDARDS", icon: Layers },
              { key: "timeline", label: "MILESTONE SCHEDULE", icon: Clock }
            ].map((tab) => {
              const isSubActive = activeSubTab === tab.key;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveSubTab(tab.key)}
                  className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 shrink-0 cursor-pointer ${
                    isSubActive
                      ? "bg-gold-accent text-white shadow-md"
                      : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Main Interactive View Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-h-[360px]">
            
            {/* Left 5 Cols: Visual Image & Stats Block */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 shadow-md group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePillar.id + activeSubTab}
                    src={activePillar.image}
                    alt={activePillar.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover filter brightness-[0.92]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-mono flex items-center justify-between bg-stone-950/80 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                  <span className="text-gold-accent font-bold">AUTHENTIC QUALITY</span>
                  <span className="text-stone-300">SUTHAR GUILD</span>
                </div>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-3">
                {(activePillar?.stats || []).map((st, i) => (
                  <div key={i} className="bg-stone-50 border border-stone-200/60 p-3 rounded-xl text-center space-y-0.5">
                    <p className="text-xs sm:text-sm font-extrabold text-stone-950">{st.value}</p>
                    <p className="text-[10px] text-stone-500 uppercase tracking-tight">{st.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 7 Cols: Tab Content Panels */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              
              <AnimatePresence mode="wait">
                {activeSubTab === "overview" && (
                  <motion.div
                    key="overview-tab"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <p className="text-stone-700 text-sm sm:text-base font-light leading-relaxed">
                      {activePillar.overview}
                    </p>

                    <div className="bg-stone-50 border border-stone-200/70 p-5 rounded-xl space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-gold-accent" />
                        <span>Core Studio Assurances</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 font-light">
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                          <span>100% In-house craftsman guild</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                          <span>No third-party labor sub-contracting</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                          <span>100% genuine OEM factory materials</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                          <span>Financial penalty for site delay</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeSubTab === "deliverables" && (
                  <motion.div
                    key="deliverables-tab"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-gold-accent" />
                      <span>Guaranteed Client Deliverables</span>
                    </h4>
                    <div className="space-y-2.5">
                      {(activePillar?.deliverables || []).map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3 bg-stone-50 border border-stone-200/60 p-3.5 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-stone-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeSubTab === "materials" && (
                  <motion.div
                    key="materials-tab"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center space-x-2">
                      <Layers className="w-4 h-4 text-gold-accent" />
                      <span>Strict Material Brand Specifications</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(activePillar?.materials || []).map((mat, idx) => (
                        <div key={idx} className="bg-stone-50 border border-stone-200/60 p-4 rounded-xl space-y-1">
                          <p className="text-xs font-bold text-gold-accent uppercase tracking-wider">{mat.name}</p>
                          <p className="text-xs text-stone-700 font-light leading-relaxed">{mat.spec}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeSubTab === "timeline" && (
                  <motion.div
                    key="timeline-tab"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gold-accent" />
                      <span>Pillar Execution Schedule</span>
                    </h4>
                    <div className="space-y-3">
                      {(activePillar?.timeline || []).map((stg, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-stone-50 border border-stone-200/60 p-3.5 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <span className="w-6 h-6 rounded-full bg-gold-accent/15 text-gold-accent text-xs font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-stone-900">{stg.stage}</span>
                          </div>
                          <span className="text-xs font-mono font-bold text-gold-accent bg-stone-900 text-white px-2.5 py-1 rounded">
                            {stg.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Action Footer */}
              <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-xs font-bold text-stone-900">Experience the Suthar difference on your site</p>
                  <p className="text-[11px] text-stone-500">Book an on-site consultation with lead architect Padam P. Sutar.</p>
                </div>

                <button
                  onClick={handleConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-stone-900 hover:bg-stone-950 text-white px-6 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md group cursor-pointer"
                >
                  <span>Book Architect Consultation</span>
                  <div className="w-6 h-6 rounded-full bg-gold-accent text-stone-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </div>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
