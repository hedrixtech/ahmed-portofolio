"use client";
import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";

export const SystemDesign = () => {
  return (
    <SectionWrapper id="systems" index="05" title="Architecture">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
        {/* Architecture diagram — clean line-drawing style */}
        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-surface border border-hairline p-6 md:p-10">
            <div className="font-display text-[10px] uppercase tracking-[0.3em] text-stone mb-8">
              System Topology — Community Platform
            </div>

            <div className="space-y-6">
              {/* Client Layer */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 border border-hairline-strong p-4 text-center">
                  <div className="font-display text-[10px] uppercase tracking-[0.2em] text-stone mb-1">Client</div>
                  <div className="font-display font-bold text-sm text-bone">iOS / React Native</div>
                </div>
                <div className="flex-1 border border-hairline-strong p-4 text-center">
                  <div className="font-display text-[10px] uppercase tracking-[0.2em] text-stone mb-1">Client</div>
                  <div className="font-display font-bold text-sm text-bone">Web Dashboard</div>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center">
                <div className="w-[1px] h-8 bg-signal" />
              </div>

              {/* Gateway */}
              <div className="border-2 border-signal/30 bg-signal/5 p-5 text-center">
                <div className="font-display text-[10px] uppercase tracking-[0.2em] text-signal mb-1">
                  Gateway
                </div>
                <div className="font-display font-bold text-sm text-bone">
                  REST API Layer — AWS EC2
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center">
                <div className="w-[1px] h-8 bg-hairline-strong" />
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Auth System", "Moderation", "Economy", "AI Pipeline"].map(
                  (service, i) => (
                    <div
                      key={service}
                      className={`border p-4 text-center transition-colors ${
                        i === 3
                          ? "border-patina bg-patina/5"
                          : "border-hairline hover:border-hairline-strong"
                      }`}
                    >
                      <div className="font-display font-bold text-xs text-bone uppercase tracking-wider">
                        {service}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Arrow down */}
              <div className="flex justify-center">
                <div className="w-[1px] h-8 bg-hairline-strong" />
              </div>

              {/* Data Layer */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 border border-hairline p-4 text-center bg-raised">
                  <div className="font-display text-[10px] uppercase tracking-[0.2em] text-stone mb-1">
                    Persistence
                  </div>
                  <div className="font-display font-bold text-xs text-bone">
                    Database / RDS
                  </div>
                </div>
                <div className="flex-1 border border-hairline p-4 text-center bg-raised">
                  <div className="font-display text-[10px] uppercase tracking-[0.2em] text-stone mb-1">
                    Storage
                  </div>
                  <div className="font-display font-bold text-xs text-bone">
                    S3 / Media CDN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Principles strip */}
        <motion.div
          className="lg:col-span-4 space-y-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-display text-[10px] uppercase tracking-[0.3em] text-stone mb-6">
            Design Principles
          </div>

          {[
            {
              title: "Decoupled Services",
              desc: "Each domain (auth, media, economy) operates independently to prevent cascade failures.",
              accent: "signal",
            },
            {
              title: "Multi-Region Content",
              desc: "Media architecture designed for low-latency global delivery via CDN endpoints.",
              accent: "patina",
            },
            {
              title: "AI Abstraction",
              desc: "Moderation pipelines isolated from the main request loop, scaling independently.",
              accent: "signal",
            },
          ].map((principle, i) => (
            <div key={i} className={`py-6 ${i > 0 ? "hairline-t" : ""}`}>
              <h4 className="font-display font-bold text-sm text-bone mb-2 tracking-tight">
                {principle.title}
              </h4>
              <p className="font-body italic text-stone text-sm leading-relaxed">
                {principle.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
