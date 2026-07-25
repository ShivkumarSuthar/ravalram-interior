import { motion } from "motion/react";
import floorplanImg from "../assets/images/isometric_floor_plan_1784822786880.jpg";

export default function IsometricFloorplanShowcase() {
  return (
    <section className="relative w-full overflow-hidden select-none bg-[#faf9f6]">
      {/* Top Light Half Container */}
      <div className="relative pt-12 sm:pt-16 md:pt-20 pb-20 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-end min-h-[380px] sm:min-h-[480px]">
        
        {/* Giant Watermark Text "antra" / "suthar" */}
        <div className="absolute left-6 sm:left-12 bottom-4 sm:bottom-8 z-0 pointer-events-none">
          <span className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[300px] font-extrabold tracking-tighter text-stone-200/60 lowercase leading-none select-none font-display">
            suthar
          </span>
        </div>

        {/* 3D Isometric Floorplan Floating on Right */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 ml-auto w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl translate-y-12 sm:translate-y-16 md:translate-y-24"
        >
          <div className="relative rounded-3xl overflow-hidden drop-shadow-2xl">
            <img
              src={floorplanImg}
              alt="Suthar 3D Architectural Isometric Floor Plan Rendering"
              className="w-full h-auto object-contain block filter brightness-[0.99] contrast-[1.02]"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

      </div>

      {/* Bottom Dark Half Section with Pendant Lights */}
      <div className="relative w-full bg-[#2a3033] h-40 sm:h-52 md:h-64 border-t border-stone-800/40 z-10">
        
        {/* 3 Pendant Lights hanging down from upper boundary */}
        <div className="max-w-4xl mx-auto h-full relative flex items-start justify-center space-x-12 sm:space-x-20 md:space-x-28 pt-0">
          
          {/* Light 1 */}
          <div className="relative flex flex-col items-center">
            {/* Cord */}
            <div className="w-[2px] h-20 sm:h-28 md:h-36 bg-gradient-to-b from-stone-400/80 to-stone-900" />
            {/* Cylinder Lamp Head */}
            <div className="w-8 sm:w-10 md:w-12 h-12 sm:h-16 md:h-20 bg-stone-950 rounded-b-md shadow-2xl border-t border-stone-700 relative">
              {/* Soft warm glow under light */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-8 bg-amber-100/15 rounded-full blur-md pointer-events-none" />
            </div>
          </div>

          {/* Light 2 */}
          <div className="relative flex flex-col items-center">
            {/* Cord */}
            <div className="w-[2px] h-20 sm:h-28 md:h-36 bg-gradient-to-b from-stone-400/80 to-stone-900" />
            {/* Cylinder Lamp Head */}
            <div className="w-8 sm:w-10 md:w-12 h-12 sm:h-16 md:h-20 bg-stone-950 rounded-b-md shadow-2xl border-t border-stone-700 relative">
              {/* Soft warm glow under light */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-8 bg-amber-100/15 rounded-full blur-md pointer-events-none" />
            </div>
          </div>

          {/* Light 3 */}
          <div className="relative flex flex-col items-center">
            {/* Cord */}
            <div className="w-[2px] h-20 sm:h-28 md:h-36 bg-gradient-to-b from-stone-400/80 to-stone-900" />
            {/* Cylinder Lamp Head */}
            <div className="w-8 sm:w-10 md:w-12 h-12 sm:h-16 md:h-20 bg-stone-950 rounded-b-md shadow-2xl border-t border-stone-700 relative">
              {/* Soft warm glow under light */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-8 bg-amber-100/15 rounded-full blur-md pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
