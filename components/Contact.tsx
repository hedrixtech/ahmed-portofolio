"use client";
import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export const Contact = () => {
  return (
    <SectionWrapper id="contact" index="04" title="Connect">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        <p className="font-body italic text-lg md:text-2xl text-bone/80 leading-relaxed mb-8 md:mb-12">
          Available for engineering roles, system design consulting, and
          cross-platform development collaborations. Let&apos;s build something at scale.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:akro.a2007@gmail.com"
            className="group flex items-center gap-6 py-6 px-6 bg-surface/30 border border-hairline hover:border-signal/40 transition-all duration-500"
          >
            <div className="p-3 bg-void border border-hairline-strong text-signal group-hover:border-signal/60 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-display text-[10px] uppercase tracking-[0.3em] text-stone mb-1">
                Direct Channel
              </span>
              <span className="font-display text-sm md:text-base text-bone group-hover:text-signal transition-colors">
              akro.a2007@gmail.com
              </span>
            </div>
            <ArrowUpRight className="ml-auto w-4 h-4 text-stone/30 group-hover:text-signal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <a
            href="tel:+201556501535"
            className="group flex items-center gap-6 py-6 px-6 bg-surface/30 border border-hairline hover:border-signal/40 transition-all duration-500"
          >
            <div className="p-3 bg-void border border-hairline-strong text-signal group-hover:border-signal/60 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-display text-[10px] uppercase tracking-[0.3em] text-stone mb-1">
                Secure Line
              </span>
              <span className="font-display text-sm md:text-base text-bone group-hover:text-signal transition-colors">
                +20 155 650 1535
              </span>
            </div>
            <ArrowUpRight className="ml-auto w-4 h-4 text-stone/30 group-hover:text-signal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
