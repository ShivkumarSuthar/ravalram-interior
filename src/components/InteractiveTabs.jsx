import AppImage from "./AppImage";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const coastalImg = "/images/antra_project_coastal_1782744299850.jpg";
const loftImg = "/images/antra_project_loft_1782744318019.jpg";
const transitionImg = "/images/antra_transition_luxury_1782747459033.jpg";
const aboutImg = "/images/antra_about_side_1782744266546.jpg";

const tabsData = [
  {
    id: 0,
    num: "01",
    title: "Renovations & Structural Planning",
    image: coastalImg,
    description: "We orchestrate complete structural transformations. Our certified site engineering team handles load-bearing evaluations, custom demolition blueprints, ceiling re-leveling, and wall displacement to maximize volume flow."
  },
  {
    id: 1,
    num: "02",
    title: "Materiality & Curation",
    image: loftImg,
    description: "Co-authoring the look and feel of your residence. During these workshops, we review material tactile boards, test paint light interaction, draft initial hand sketches, and define the absolute budget boundaries."
  },
  {
    id: 2,
    num: "03",
    title: "Spatial Architecture & Drafting",
    image: transitionImg,
    description: "We treat empty space as a canvas for motion. Our planners calculate ergonomics, visual focal directions, shadow zones, and furniture spacing to make sure pathways are generous and comfortable."
  },
  {
    id: 3,
    num: "04",
    title: "Virtual 3D Spatial Walkthroughs",
    image: aboutImg,
    description: "Walk inside your finished home before laying a single brick. We render full-scale photorealistic 3D spatial models showing real material textures, specific custom lighting, and customized art installations."
  }
];

export default function InteractiveTabs() {
  const [activeTab, setActiveTab] = useState(1); // Default active is 02 Materiality & Curation (index 1)

  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[75vh] flex flex-col justify-between overflow-hidden bg-stone-900 text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <AppImage
              src={tabsData[activeTab].image}
              alt={tabsData[activeTab].title}
              className="w-full h-full object-cover opacity-35 filter brightness-75"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/30" />
      </div>

      {/* Top Description Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-16 md:pt-24 text-center md:text-left space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-3xl"
          >
            <span className="text-[#E7A35F] text-sm tracking-[0.3em] uppercase font-bold font-mono">
              {tabsData[activeTab].num}
            </span>
            <h3 className="text-3xl md:text-5xl font-serif tracking-tight font-medium">
              {tabsData[activeTab].title}
            </h3>
            <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed max-w-2xl">
              {tabsData[activeTab].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Tabs Selection Bar (Overlaid Grid) */}
      <div className="relative z-10 w-full bg-stone-950/70 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="max-w-8xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {tabsData.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-6 md:py-8 px-6 text-left transition-all duration-300 cursor-pointer relative rounded-none ${
                  isActive ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                {/* Active Underline indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#E7A35F]"
                  />
                )}
                
                <div className="space-y-1">
                  <span className={`text-xs font-mono font-bold block ${isActive ? "text-[#E7A35F]" : "text-stone-500"}`}>
                    {tab.num}
                  </span>
                  <h4 className={`text-xs md:text-sm font-semibold tracking-wider uppercase ${isActive ? "text-white" : "text-stone-400"}`}>
                    {tab.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
