import AppImage from "./AppImage";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

const aboutImg = "/images/antra_about_side_1782744266546.jpg";

function ProgressBar({ label, targetValue }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const step = () => {
        current += 1.5;
        if (current < targetValue) {
          setVal(Math.floor(current));
          requestAnimationFrame(step);
        } else {
          setVal(targetValue);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, targetValue]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center text-xs font-semibold tracking-wider uppercase text-stone-800">
        <span>{label}</span>
        <span>{val}%</span>
      </div>
      <div className="w-full h-[3px] bg-stone-200/80 rounded-none overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${targetValue}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>
    </div>
  );
}

export default function ExpertBento() {
  return (
    <section className="bg-field py-24 md:py-32 relative overflow-hidden border-t border-stone-200/50">
      {/* Background large ghost outline 'suthar' */}
      <div className="absolute left-6 bottom-6 select-none pointer-events-none z-0">
        <span className="text-[12vw] font-serif font-black text-stone-900/[0.015] uppercase tracking-widest leading-none">
          suthar
        </span>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading & Progress Bars */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="text-primary text-xs">✦</span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                  CRAFT SKILLS
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
                Trusted Expert In <br />
                <span className="font-serif italic text-primary font-normal lowercase">Architectural Design</span> <br />
                And Innovation.
              </h2>
              <p className="text-stone-500 font-light text-sm leading-relaxed max-w-xl">
                Our approach to craft is grounded in technical expertise. We maintain master-level credentials across three spatial dimensions, ensuring that our artistic vision rests on durable, sound engineering.
              </p>
            </div>

            {/* Progress Bars */}
            <div className="space-y-6 max-w-lg">
              <ProgressBar label="Custom Furniture & Cabinets" targetValue={95} />
              <ProgressBar label="Architectural Interiors" targetValue={90} />
              <ProgressBar label="Turnkey Project Delivery" targetValue={85} />
            </div>
          </div>

          {/* Right Column: Beautiful Bento Layout Box */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-6">
              {/* Main Arched Frame */}
              <div className="col-span-8 bg-white border border-stone-200/60 p-4 rounded-none shadow-sm relative overflow-hidden">
                <div className="w-full aspect-[3/4] overflow-hidden rounded-none bg-stone-100">
                  <AppImage
                    src={aboutImg}
                    alt="Elegant architectural space"
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Smaller bento components */}
              <div className="col-span-4 flex flex-col justify-between gap-6">
                <div className="bg-white border border-stone-200/60 p-5 rounded-none shadow-sm text-left space-y-2">
                  <span className="text-xs font-bold text-primary font-mono">250+</span>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-stone-400">SPACES DESIGNED</p>
                </div>

                {/* Styled Round Mirror mockup widget */}
                <div className="bg-white border border-stone-200/60 p-5 aspect-square rounded-none shadow-sm flex items-center justify-center flex-col relative overflow-hidden">
                  <div className="absolute inset-2 border border-dashed border-stone-300" />
                  <span className="text-xs font-serif italic text-stone-700">Artisan</span>
                  <span className="text-[8px] uppercase tracking-widest text-stone-400 font-bold mt-1">MIRROR_VIBE</span>
                </div>

                <div className="bg-stone-900 text-white p-5 rounded-none shadow-sm text-left space-y-1">
                  <span className="text-xs font-bold text-primary font-mono">35+</span>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-stone-400">LEGACY YEARS</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
