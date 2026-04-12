"use client";
import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { aiAndSystemDesign } from "@/lib/data";
import { motion } from "framer-motion";

export const AIResearch = () => {
  return (
    <SectionWrapper id="ai-research" index="06" title="Neural">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Training experience */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-signal" />
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-signal">
              Research Lab
            </span>
          </div>
          <h3 className="font-display font-extrabold text-2xl md:text-3xl text-bone tracking-tight mb-2">
            {aiAndSystemDesign.training}
          </h3>
          <div className="h-[1px] bg-hairline-strong my-6" />

          <div className="space-y-0">
            {aiAndSystemDesign.skills.map((skill, i) => (
              <div key={i} className="py-4 hairline-b flex gap-4 items-start">
                <span className="font-display text-signal text-xs shrink-0 mt-0.5">
                  [{String(i).padStart(2, "0")}]
                </span>
                <span className="font-body text-bone/80 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Theoretical foundation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-patina" />
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-patina">
              Theoretical Study
            </span>
          </div>

          <div className="border-l-2 border-patina pl-6 py-4">
            <p className="font-body italic text-lg md:text-xl text-bone/90 leading-relaxed mb-6">
              {aiAndSystemDesign.system_design_study}
            </p>
          </div>

          <div className="bg-surface border border-hairline p-6 mt-8">
            <div className="font-display text-[10px] uppercase tracking-[0.3em] text-stone mb-4">
              Systems Thinking Log
            </div>
            <p className="font-body italic text-stone text-sm leading-relaxed">
              System scaling concepts acquired — from small language model constraints
              to large-scale cloud abstractions. Compute cost analysis integrated
              into core design patterns. Inference pipeline understanding drives
              architectural decisions for AI-integrated products.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
