"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../lib/project-data.js";

// Asymmetric magazine layout metadata per project index
const LAYOUT = [
  { col: "lg:col-span-7", ratio: "aspect-[4/3]", offset: "" },
  { col: "lg:col-span-5 lg:col-start-8", ratio: "aspect-[3/4]", offset: "lg:mt-32" },
  { col: "lg:col-span-5", ratio: "aspect-[3/4]", offset: "lg:-mt-16" },
  { col: "lg:col-span-6 lg:col-start-7", ratio: "aspect-[4/3]", offset: "lg:mt-24" },
];

export default function EditorialWorks() {
  const router = useRouter();

  const open = (slug) => {
    router.push(`/projects/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#0c0a09] text-[#faf9f6] py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <span className="editorial-kicker text-[10px] text-[#CAA05C]">02 — Selected Works</span>
          <span className="h-px flex-1 bg-white/15" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10 items-end mb-16 md:mb-24">
          <h2 className="lg:col-span-8 editorial-display text-[clamp(2.25rem,6vw,5.5rem)] font-light">
            Spaces with a
            <span className="italic text-[#CAA05C]"> quiet </span>
            authority.
          </h2>
          <p className="lg:col-span-4 text-sm md:text-[15px] leading-relaxed text-white/60 font-light lg:pb-4">
            A selection of residences, workspaces and coastal retreats — each drawn, built and finished under one roof.
          </p>
        </div>

        {/* Asymmetric works grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-10">
          {projects.map((project, i) => {
            const l = LAYOUT[i % LAYOUT.length];
            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`${l.col} ${l.offset} group cursor-pointer`}
                onClick={() => open(project.slug)}
              >
                <div className={`relative w-full ${l.ratio} overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/20" />
                  <div className="absolute top-5 right-5 h-11 w-11 rounded-full border border-white/40 bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-white/15 pt-4">
                  <div>
                    <h3 className="editorial-display text-2xl md:text-3xl font-light transition-colors duration-300 group-hover:text-[#CAA05C]">
                      {project.title}
                    </h3>
                    <span className="editorial-kicker text-[9px] text-white/50 mt-2 block">
                      {project.location}
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="editorial-kicker text-[9px] text-[#CAA05C] block">
                      {project.category}
                    </span>
                    <span className="editorial-display text-lg text-white/40 italic">
                      {project.year}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
