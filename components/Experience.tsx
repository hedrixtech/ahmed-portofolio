"use client";
import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { experiences } from "@/lib/data";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <SectionWrapper id="experience" index="03" title="Projects">
      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group"
          >
            <div className="grid md:grid-cols-12 gap-4 md:gap-6 py-8 md:py-14 hairline-b hover:bg-surface/50 transition-colors duration-500 px-2 md:px-4">
              {/* Left column — index + scale achievement */}
              <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-3 md:gap-4 overflow-hidden">
                <span className="font-display font-extrabold text-2xl text-signal leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {exp.scale && (
                  <span className="font-display text-[8px] uppercase tracking-[0.1em] text-patina bg-patina/10 border border-patina/20 px-2 py-1 leading-tight text-center md:text-left">
                    {exp.scale}
                  </span>
                )}
              </div>

              {/* Center — title + role */}
              <div className="md:col-span-4">
                <h3 className="font-display font-bold text-lg md:text-xl text-bone tracking-tight leading-snug group-hover:text-signal transition-colors duration-300">
                  {exp.title}
                </h3>
                {exp.role && (
                  <div className="mt-2 inline-flex items-center gap-2">
                    <span className="w-1 h-3 bg-signal/50" />
                    <span className="font-display text-[11px] uppercase tracking-[0.15em] text-signal font-bold">
                      {exp.role}
                    </span>
                  </div>
                )}
              </div>

              {/* Right — highlights */}
              <div className="md:col-span-7 md:border-l md:border-hairline md:pl-8 mt-4 md:mt-0">
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-stone leading-relaxed">
                      <span className="text-signal mt-1.5 shrink-0 w-1 h-1 bg-signal inline-block" />
                      <span className="font-body">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
