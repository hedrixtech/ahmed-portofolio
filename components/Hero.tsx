"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeWriter } from "./ui/TypeWriter";
import { Hero3D } from "./Hero3D";
import { personalData } from "@/lib/data";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] w-full flex flex-col items-center pt-20 md:pt-32 overflow-hidden px-10"
    >
      {/* 3D CORE COMPONENT */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      {/* MINIMALIST CENTERED HEADER */}
      <div className="relative z-10 w-full max-w-[1400px] text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Main Title - Single Line Editorial */}
          <h1 className="font-display font-extrabold text-[clamp(1.4rem,6vw,4.5rem)] md:text-[clamp(2rem,4vw,3.2rem)] tracking-tight leading-none text-bone uppercase whitespace-nowrap">
            AHMED <span className="text-signal">IKRAMI</span>
          </h1>
          
          {/* Systems Line with Dynamic Accents */}
          <div className="flex items-center gap-6 mt-3 opacity-80">
            <div className="h-[1px] w-4 md:w-16 bg-signal/30" />
            <h2 className="font-display text-[8px] md:text-[10px] uppercase tracking-[0.6em] text-stone">
              Systems Engineer
            </h2>
            <div className="h-[1px] w-4 md:w-16 bg-signal/30" />
          </div>

          {/* Action Layer - Minimalist HUD CV Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 pointer-events-auto"
          >
            <Link
              href="/cv"
              className="group relative flex items-center justify-center px-12 py-4 bg-void/40 backdrop-blur-xl border border-hairline hover:border-signal/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-signal/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              <div className="relative flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-signal shadow-[0_0_12px_rgba(95,209,196,0.8)]" />
                <span className="font-display text-[9px] uppercase tracking-[0.4em] text-bone font-bold">
                  View Dossier [CV]
                </span>
                <span className="text-stone/40 text-[8px] font-mono group-hover:text-signal transition-colors">
                  ID//26
                </span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* MINIMALIST SCROLL HINT */}
      <div className="absolute bottom-10 left-0 right-0 px-6 pointer-events-none z-10">
        <div className="max-w-[1400px] mx-auto flex justify-center">
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="group flex flex-col items-center gap-4 pointer-events-auto"
          >
            <span className="text-[8px] uppercase tracking-[0.4em] text-stone group-hover:text-signal transition-colors">
              Initiate
            </span>
            <div className="w-[1px] h-10 bg-hairline-strong group-hover:bg-signal/50 transition-all origin-top scale-y-100 group-hover:scale-y-125" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
