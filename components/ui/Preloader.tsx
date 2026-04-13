"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  isLoading: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const [complete, setComplete] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // Start minimum time timer
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Only set complete to true if both conditions are met
    if (!isLoading && minTimeElapsed) {
      const timer = setTimeout(() => setComplete(true), 400); // reduced from 1000ms
      return () => clearTimeout(timer);
    }
  }, [isLoading, minTimeElapsed]);

  if (complete) return null;

  const isVisible = isLoading || !minTimeElapsed;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           initial={{ opacity: 1 }}
           exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
           className="fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 dot-grid opacity-20" />
          
          {/* Scanning Line */}
          <motion.div 
            initial={{ translateY: "-100%" }}
            animate={{ translateY: "100vh" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[2px] bg-signal/20 blur-[2px] z-10"
          />

          {/* Loading Content */}
          <div className="relative z-20 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="font-display font-extrabold text-2xl tracking-[0.2em] text-bone uppercase">
                AHMED<span className="text-signal">.</span>
              </h1>
            </motion.div>

            <div className="flex flex-col gap-2 w-64">
              <div className="flex justify-between items-end">
                <span className="font-display text-[8px] uppercase tracking-[0.4em] text-stone">
                  System Status
                </span>
                <span className="font-mono text-[8px] text-signal/80">
                  Ready
                </span>
              </div>
              
              {/* Progress Bar Container */}
              <div className="h-[2px] w-full bg-hairline relative overflow-hidden">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 bg-signal origin-left"
                />
              </div>

              <div className="flex justify-between items-start mt-1">
                <motion.span 
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="font-display text-[8px] uppercase tracking-[0.4em] text-stone"
                >
                  Initializing Neural Interface...
                </motion.span>
                <div className="flex gap-1">
                   {[...Array(4)].map((_, i) => (
                     <motion.div 
                       key={i}
                       animate={{ opacity: [0.2, 1, 0.2] }}
                       transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                       className="w-1 h-1 bg-signal"
                     />
                   ))}
                </div>
              </div>
            </div>

            {/* Decorative HUD Elements */}
            <div className="absolute -left-32 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 opacity-10">
               <div className="w-16 h-[1px] bg-stone" />
               <div className="text-[6px] font-mono text-stone space-y-1">
                 <div>TRK//092.1</div>
                 <div>ID//AH-2025</div>
                 <div>LOC//VOID.OS</div>
               </div>
            </div>

            <div className="absolute -right-32 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 items-end opacity-10">
               <div className="w-16 h-[1px] bg-stone" />
               <div className="text-[6px] font-mono text-stone space-y-1 text-right">
                 <div>ST//ACTIVE</div>
                 <div>MD//3D_MESH</div>
                 <div>PX//HD.RENDER</div>
               </div>
            </div>
          </div>

          {/* Glitch Overlay Effect */}
          <motion.div 
            animate={{ opacity: [0, 0.05, 0, 0.1, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 bg-signal mix-blend-overlay pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
