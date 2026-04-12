"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface EditorialCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  accent?: "signal" | "patina" | "none";
}

export const EditorialCard: React.FC<EditorialCardProps> = ({
  children,
  className = "",
  accent = "none",
  ...props
}) => {
  const accentBorder =
    accent === "signal"
      ? "border-l-signal"
      : accent === "patina"
      ? "border-l-patina"
      : "border-l-hairline-strong";

  return (
    <motion.div
      className={`bg-surface border border-hairline border-l-2 ${accentBorder} p-6 md:p-8 transition-colors duration-300 hover:bg-raised ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
