"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { AIResearch } from "@/components/AIResearch";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <Hero />

      {/* Full-width rule after hero */}
      <div className="h-[1px] bg-hairline-strong" />

      <About />
      <Skills />
      <Experience />
      <AIResearch />
      <Contact />

      {/* Footer — precision minimal */}
      <footer className="hairline-t py-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-display text-xs uppercase tracking-[0.2em] text-stone">
            Ahmed<span className="text-signal">.</span> — {new Date().getFullYear()}
          </div>
          <div className="font-display text-[10px] uppercase tracking-[0.3em] text-stone/50">
            Designed & Engineered
          </div>
        </div>
      </footer>
    </main>
  );
}
