"use client";
import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { earlyDevelopment } from "@/lib/data";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <SectionWrapper id="projects" index="04" title="Evolution">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
        {/* Left — Genesis / Early Projects */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-display text-[10px] uppercase tracking-[0.3em] text-signal mb-3">
            Origin Platform
          </div>
          <h3 className="font-display font-bold text-lg text-bone mb-2">
            {earlyDevelopment.platform}
          </h3>
          <div className="h-[1px] bg-hairline-strong my-6" />

          <div className="space-y-0">
            {earlyDevelopment.built_projects.map((project, i) => (
              <div key={i} className="py-4 hairline-b flex gap-4 items-start">
                <span className="font-display text-xs text-stone shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-bone/80 text-sm">{project}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Progression / Stack Ascension */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-display text-[10px] uppercase tracking-[0.3em] text-patina mb-6">
            Stack Progression
          </div>

          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-hairline-strong" />

            <div className="space-y-10">
              {earlyDevelopment.progression.map((stage, i) => (
                <div key={i} className="relative flex items-start gap-6 pl-0">
                  {/* Node */}
                  <div
                    className={`relative z-10 w-6 h-6 flex items-center justify-center shrink-0 ${
                      i === earlyDevelopment.progression.length - 1
                        ? "bg-signal"
                        : "bg-surface border border-hairline-strong"
                    }`}
                  >
                    <span className="font-display text-[9px] font-bold text-bone">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Label */}
                  <div className="pt-0.5">
                    <span className="font-display font-bold text-base md:text-lg text-bone tracking-tight">
                      {stage}
                    </span>
                    {i === earlyDevelopment.progression.length - 1 && (
                      <span className="block mt-1 font-display text-[10px] uppercase tracking-[0.2em] text-signal">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
