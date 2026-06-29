import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sparkles, Instagram, Linkedin, Twitter, Target, Layers, Layout, Monitor } from "lucide-react";

export default function ApproachAndExperts() {
  const [activeApproach, setActiveApproach] = useState(0);

  const approaches = [
    {
      id: 0,
      step: "01",
      title: "Renovation And Remodeling",
      icon: Layers,
      description: "We orchestrate complete structural transformations. Our certified site engineering team handles load-bearing evaluations, custom demolition blueprints, ceiling re-leveling, and wall displacement to maximize volume flow.",
      milestones: ["Detailed site survey & scan", "Custom structural load testing", "Demolition & electrical mapping"]
    },
    {
      id: 1,
      step: "02",
      title: "Custom Design Consultation",
      icon: Target,
      description: "Co-authoring the look and feel of your residence. During these workshops, we review material tactile boards, test paint light interaction, draft initial hand sketches, and define the absolute budget boundaries.",
      milestones: ["Tactile material board assembly", "Initial furniture drafting", "Luminous lux-value mapping"]
    },
    {
      id: 2,
      step: "03",
      title: "Space Planning And Layout",
      icon: Layout,
      description: "We treat empty space as a canvas for motion. Our planners calculate ergonomics, visual focal directions, shadow zones, and furniture spacing to make sure pathways are generous and comfortable.",
      milestones: ["High-precision CAD floorplans", "Sightline and focal map calculation", "Optimal pathway ergonomics validation"]
    },
    {
      id: 3,
      step: "04",
      title: "3D Design Visualisation",
      icon: Monitor,
      description: "Walk inside your finished home before laying a single brick. We render full-scale photorealistic 3D spatial models showing real material textures, specific custom lighting, and customized art installations.",
      milestones: ["Bespoke high-fidelity digital renders", "Virtual reality room walkthroughs", "Complete material procurement logs"]
    }
  ];

  const team = [
    {
      name: "Mark Jackson",
      role: "Lead Architect & Spatialist",
      focus: "Structural Balance",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800", // Elegant portrait
      bio: "Focuses on double-height structural conversions and concrete-to-timber spatial ratios."
    },
    {
      name: "Helen Reeves",
      role: "Bespoke Material Director",
      focus: "Tactile Harmony",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800", // Elegant portrait
      bio: "Dedicated to sourcing rare Italian travertine, hand-dyed linens, and custom-cut quartzites."
    },
    {
      name: "Alex Rostowsky",
      role: "Lighting Design Virtuoso",
      focus: "Luminous Drama",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800", // Elegant portrait
      bio: "Sculpts architectural volumes using indirect linear lighting channels and warm recessed lux-fields."
    }
  ];

  return (
    <div className="bg-white py-24 md:py-32 overflow-hidden">
      {/* SECTION 1: ARCHITECTURAL APPROACH */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold block">
                How We Operate
              </span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
                Our Methodical <br />
                <span className="font-serif italic text-gold-500">Interior Design</span> Approach
              </h2>
              <p className="text-stone-500 font-light text-sm leading-relaxed">
                Design without procedure creates chaos. We run a strict, luxury-grade structural timeline 
                consisting of four distinct phases to guarantee that from concept to procurement, your spatial dream builds flawlessly.
              </p>
            </div>

            {/* Showcase the current step detail */}
            <div className="bg-stone-50 border border-stone-100 p-8 shadow-sm rounded-none hidden lg:block">
              <div className="flex items-center space-x-3 text-gold-500 mb-4">
                <Sparkles size={16} />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold font-mono">Phase {approaches[activeApproach].step} Focus</span>
              </div>
              <h3 className="text-xl font-serif text-stone-900 font-medium mb-3">
                {approaches[activeApproach].title}
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed font-light mb-6">
                {approaches[activeApproach].description}
              </p>
              <div className="space-y-2 border-t border-stone-200/60 pt-4">
                <span className="text-[10px] tracking-wider uppercase font-bold text-stone-400 font-mono">Deliverables:</span>
                <ul className="grid grid-cols-1 gap-2">
                  {approaches[activeApproach].milestones.map((m) => (
                    <li key={m} className="text-[11px] text-stone-600 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-2 shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Steps Accordion List */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {approaches.map((app, index) => {
              const isSelected = activeApproach === index;
              const Icon = app.icon;
              return (
                <div
                  key={app.step}
                  onClick={() => setActiveApproach(index)}
                  className={`border border-stone-100 p-6 md:p-8 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    isSelected ? "bg-stone-900 text-white shadow-xl" : "bg-stone-50 hover:bg-stone-100/50"
                  }`}
                  id={`approach-step-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <span className={`text-2xl md:text-3xl font-serif font-light transition-colors duration-300 ${
                        isSelected ? "text-gold-500" : "text-stone-300"
                      }`}>
                        {app.step}
                      </span>
                      <h3 className={`text-base md:text-xl font-medium tracking-wide transition-colors duration-300 ${
                        isSelected ? "text-white" : "text-stone-800"
                      }`}>
                        {app.title}
                      </h3>
                    </div>
                    <div className={`p-2 transition-transform duration-300 ${isSelected ? "text-gold-500 rotate-180" : "text-stone-400"}`}>
                      <ChevronDown size={18} />
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 border-t border-stone-800 pt-6 space-y-4 lg:hidden">
                          <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
                            {app.description}
                          </p>
                          <div className="space-y-2">
                            <span className="text-[10px] tracking-wider uppercase font-bold text-stone-500 font-mono">Deliverables:</span>
                            <ul className="space-y-1.5">
                              {app.milestones.map((m) => (
                                <li key={m} className="text-stone-300 text-xs flex items-center">
                                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-2" />
                                  {m}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="hidden lg:block h-2" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 2: MEET THE EXPERTS / TEAM */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-stone-100 pt-24">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold block">
            Creative Brains
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
            Meet The Experts Our <br />
            <span className="font-serif italic text-gold-500">Interior Designers</span>
          </h2>
          <p className="text-stone-500 text-sm font-light">
            We are a collective of structuralists, materials engineers, and visual directors dedicated to quiet, uncompromising spatial beauty.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="bg-white border border-stone-100 p-6 shadow-sm hover:shadow-xl transition-all duration-500 relative group"
              id={`team-member-${idx}`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-stone-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay social handles */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 z-10">
                  <a href="#" className="p-2.5 rounded-none bg-stone-900 text-white hover:text-gold-500 hover:bg-black transition-all duration-300">
                    <Instagram size={14} />
                  </a>
                  <a href="#" className="p-2.5 rounded-none bg-stone-900 text-white hover:text-gold-500 hover:bg-black transition-all duration-300">
                    <Linkedin size={14} />
                  </a>
                  <a href="#" className="p-2.5 rounded-none bg-stone-900 text-white hover:text-gold-500 hover:bg-black transition-all duration-300">
                    <Twitter size={14} />
                  </a>
                </div>

                {/* Focus Badge */}
                <div className="absolute bottom-4 left-4 z-15 bg-gold-500 text-stone-950 text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                  {member.focus}
                </div>
              </div>

              {/* Text Description */}
              <div className="space-y-2">
                <h3 className="text-xl font-serif text-stone-900 font-medium">
                  {member.name}
                </h3>
                <p className="text-xs text-gold-600 uppercase tracking-widest font-bold">
                  {member.role}
                </p>
                <p className="text-stone-500 text-xs font-light leading-relaxed pt-2 border-t border-stone-100">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
