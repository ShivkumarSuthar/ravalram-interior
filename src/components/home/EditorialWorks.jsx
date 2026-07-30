"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { projects } from "../../lib/project-data.js";

const ease = [0.16, 1, 0.3, 1];

export default function EditorialWorks() {
  const router = useRouter();
  const featured = projects[0];
  const plates = projects.slice(1, 5);
  const open = (slug) => {
    router.push(`/projects/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-[#0c0a09] py-28 text-[#f2efe8] md:py-44">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <header className="grid grid-cols-2 border-y border-[#f2efe8]/20 py-3 md:grid-cols-12">
          <span className="editorial-kicker text-[9px] text-[#c69a53] md:col-span-2">Chapter II</span>
          <span className="editorial-kicker text-[9px] text-[#f2efe8]/45 md:col-span-4">Selected works / 2021—26</span>
          <span className="hidden text-right font-editorial text-sm italic text-[#f2efe8]/45 md:col-span-6 md:block">Four studies in light, grain and proportion</span>
        </header>

        <div className="relative mt-16 md:mt-28">
          <p className="editorial-display pointer-events-none absolute -top-12 right-0 z-20 text-[clamp(5rem,17vw,18rem)] leading-none text-[#f2efe8] mix-blend-difference">01</p>
          <button type="button" onClick={() => open(featured.slug)} className="group block w-full text-left md:w-[82%]">
            <motion.div initial={{ clipPath: "inset(0 0 100% 0)" }} whileInView={{ clipPath: "inset(0 0 0% 0)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease }} className="relative aspect-[4/3] overflow-hidden md:aspect-[16/9]">
              <Image src={featured.image} alt={`${featured.title} — ${featured.category}`} fill className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]" referrerPolicy="no-referrer" />
            </motion.div>
            <div className="relative z-20 -mt-6 ml-[8%] md:-mt-14 md:ml-[42%]">
              <h2 className="editorial-display text-[clamp(3.2rem,9vw,9rem)] font-light leading-[0.8] tracking-[-0.04em]">{featured.title}</h2>
              <div className="mt-7 flex max-w-lg items-start justify-between border-t border-[#f2efe8]/25 pt-3">
                <span className="editorial-kicker text-[8px] text-[#c69a53]">{featured.category}</span>
                <span className="editorial-kicker text-[8px] text-[#f2efe8]/45">{featured.location} / {featured.year}</span>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-28 md:mt-56">
          {plates.map((project, index) => {
            const even = index % 2 === 0;
            return (
              <motion.article key={project.slug} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease }} className={`relative mb-28 md:mb-52 ${even ? "md:mr-[34%]" : "md:ml-[38%]"}`}>
                <button type="button" onClick={() => open(project.slug)} className="group block w-full text-left">
                  <div className={`relative overflow-hidden ${index === 1 ? "aspect-[4/5] md:aspect-[5/6]" : "aspect-[5/4]"}`}>
                    <Image src={project.image} alt={`${project.title} — ${project.category}`} fill className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
                    <span className="absolute left-3 top-3 editorial-kicker text-[8px] text-[#f2efe8] mix-blend-difference">Plate 0{index + 2}</span>
                  </div>
                  <div className={`relative -mt-4 flex items-end gap-5 ${even ? "ml-[12%]" : "mr-[10%] justify-end text-right"}`}>
                    <h3 className="editorial-display text-[clamp(2.8rem,7vw,7rem)] font-light leading-[0.8] tracking-[-0.04em] transition-colors group-hover:text-[#c69a53]">{project.title}</h3>
                    <span className="mb-1 font-editorial text-xl italic text-[#c69a53]">0{index + 2}</span>
                  </div>
                  <div className={`mt-5 flex gap-6 ${even ? "ml-[12%]" : "mr-[10%] justify-end"}`}>
                    <span className="editorial-kicker text-[8px] text-[#f2efe8]/45">{project.location}</span>
                    <span className="editorial-kicker text-[8px] text-[#f2efe8]/45">{project.category} / {project.year}</span>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
