"use client";
import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { aiAndSystemDesign } from "@/lib/data";
import { motion } from "framer-motion";

export const AIResearch = () => {
  return (
    <SectionWrapper id="ai-research" index="06" title="Intelligence">
      <div className="max-w-4xl">
        {/* MAIN HEADER FROM IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl text-bone tracking-[0.1em] uppercase mb-2">
            Applied System Design & AI
          </h2>
          <div className="h-[2px] w-full bg-bone max-w-full" />
        </motion.div>

        <div className="space-y-16">
          {aiAndSystemDesign.sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative"
            >
              <h3 className="font-display font-bold text-lg md:text-xl text-bone mb-1">
                {section.title}
              </h3>
              <p className="font-body italic text-bone/80 text-base md:text-lg mb-4">
                {section.org}
              </p>
              
              <ul className="space-y-3">
                {section.highlights.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                    className="flex gap-4 items-start"
                  >
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                    <span className="font-body text-stone md:text-lg leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
