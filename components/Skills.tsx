"use client";
import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Server, 
  Cloud, 
  Network, 
  Cpu, 
  Layout, 
  Wrench,
  CheckCircle2
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-4 h-4" />,
    skills: ["JavaScript", "TypeScript", "C++", "Swift", "Kotlin"]
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-4 h-4" />,
    skills: ["React Native", "Expo", "SwiftUI"]
  },
  {
    title: "Backend",
    icon: <Server className="w-4 h-4" />,
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="w-4 h-4" />,
    skills: ["AWS (EC2)", "Firebase", "Appwrite"]
  },
  {
    title: "System Design Concepts",
    icon: <Network className="w-4 h-4" />,
    skills: ["Scalability", "API Design", "Modular Architecture", "Event-driven Systems"]
  },
  {
    title: "AI",
    icon: <Cpu className="w-4 h-4" />,
    skills: ["OpenAI APIs", "Prompt Engineering", "SLM Training"]
  },
  {
    title: "UI/UX",
    icon: <Layout className="w-4 h-4" />,
    skills: ["Figma", "Dashboard Systems", "Product UI Architecture"]
  },
  {
    title: "Tools",
    icon: <Wrench className="w-4 h-4" />,
    skills: ["Git", "GitHub"]
  }
];

export const Skills = () => {
  return (
    <SectionWrapper id="skills" index="02" title="Technical Matrix">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative p-6 bg-surface/30 border border-hairline hover:border-signal/30 transition-all duration-500 flex flex-col h-full"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-signal/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-void border border-hairline-strong text-signal group-hover:border-signal/40 transition-colors">
                {category.icon}
              </div>
              <h3 className="font-display font-bold text-[10px] uppercase tracking-[0.2em] text-bone">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill) => (
                <div 
                  key={skill}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-void/50 border border-hairline text-stone group-hover:text-bone hover:border-signal/20 transition-all duration-300"
                >
                  <div className="w-1 h-1 bg-signal/50 rounded-full" />
                  <span className="font-display text-[9px] uppercase tracking-wider whitespace-nowrap">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Matrix Corner Accent */}
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-signal/20" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
