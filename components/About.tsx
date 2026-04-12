"use client";
import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { personalData } from "@/lib/data";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <SectionWrapper id="about" index="01" title="Profile">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8">
        {/* Summary — takes most of the width */}
        <motion.div
          className="md:col-span-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed font-body text-bone/90 tracking-tight">
            {personalData.summary}
          </p>
        </motion.div>

        {/* Data strip — right column */}
        <motion.div
          className="md:col-span-4 pt-8 border-t border-hairline-strong md:pt-0 md:border-t-0 md:border-l md:pl-8 space-y-8 mt-2 md:mt-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div>
            <div className="font-display text-[10px] uppercase tracking-[0.3em] text-stone mb-2">
              Designation
            </div>
            <div className="font-display font-bold text-sm text-bone leading-snug">
              {personalData.role}
            </div>
          </div>

          <div className="h-[1px] bg-hairline" />

          <div>
            <div className="font-display text-[10px] uppercase tracking-[0.3em] text-stone mb-2">
              Base
            </div>
            <div className="font-display font-bold text-sm text-bone">
              {personalData.location}
            </div>
          </div>

          <div className="h-[1px] bg-hairline" />

          <div>
            <div className="font-display text-[10px] uppercase tracking-[0.3em] text-stone mb-2">
              Foundation
            </div>
            <div className="font-display font-bold text-sm text-bone">
              {personalData.education}
            </div>
          </div>

          <div className="h-[1px] bg-hairline" />

        </motion.div>
      </div>
    </SectionWrapper>
  );
};
