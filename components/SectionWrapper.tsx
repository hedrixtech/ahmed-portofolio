"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  index?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  index,
  title,
  children,
  className = "",
  noPadding = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      id={id}
      className={`relative ${noPadding ? "" : "py-16 md:py-32"} ${className}`}
    >
      {/* Oversized background index number — hidden on mobile to prevent overflow */}
      {index && (
        <div className="section-index hidden md:block" aria-hidden="true">
          {index}
        </div>
      )}

      <div className={`max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10`}>
        {title && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 md:mb-24"
          >
            {/* Title with expanding hairline */}
            <div className="flex items-end gap-6">
              {index && (
                <span className="font-display font-extrabold text-signal text-sm tracking-[0.3em] uppercase">
                  {index}
                </span>
              )}
              <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight uppercase text-bone">
                {title}
              </h2>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] bg-hairline-strong mt-6 origin-left"
            />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
