"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-void flex flex-col">
      {/* HEADER HUD */}
      <header className="hairline-b bg-void/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.3em] text-stone hover:text-signal transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Return to Terminal
          </Link>
          <div className="flex items-center gap-6">
            <span className="font-display text-[9px] uppercase tracking-[0.2em] text-stone/50 hidden md:block">
              Classification // Ahmed_Ikrami_CV_2026
            </span>
            <div className="h-6 w-[1px] bg-hairline hidden md:block" />
            <a
              href="/Ahmed_Ikrami_CV.pdf"
              download
              className="font-display text-[10px] uppercase tracking-[0.3em] text-signal font-bold hover:text-white transition-colors"
            >
              Export PDF
            </a>
          </div>
        </div>
      </header>

      {/* PDF VIEWER CORE */}
      <section className="flex-grow relative bg-[#1E1E1E] overflow-hidden">
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden p-4 md:p-8 flex flex-col items-center" style={{ WebkitOverflowScrolling: 'touch' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full min-h-full max-w-5xl bg-white shadow-2xl rounded-sm overflow-hidden"
          >
            {/* Using object/embed for better mobile native scroll support */}
            <object
              data="/Ahmed_Ikrami_CV.pdf#toolbar=0&view=FitH"
              type="application/pdf"
              className="w-full h-screen md:h-full border-none"
            >
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <p className="text-void font-display text-sm mb-6">Unable to render preview on this device.</p>
                <a
                  href="/Ahmed_Ikrami_CV.pdf"
                  className="px-6 py-3 bg-void text-white font-display text-xs uppercase tracking-widest"
                >
                  Open Original File
                </a>
              </div>
            </object>
          </motion.div>
        </div>
      </section>

      {/* FOOTER DATA */}
      <footer className="hairline-t bg-void py-4">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <span className="font-display text-[8px] uppercase tracking-[0.4em] text-stone/40">
            Secure Viewer Environment // Authorized Access Only
          </span>
        </div>
      </footer>
    </main>
  );
}
