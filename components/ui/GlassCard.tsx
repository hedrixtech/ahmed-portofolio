"use client";
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'cyan' | 'none';
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'none',
  hoverEffect = false,
  ...props 
}) => {
  const glowClass = glowColor !== 'none' ? `hover:glow-${glowColor}` : '';
  const transitionClass = hoverEffect ? 'transition-all duration-300 hover:-translate-y-1' : '';

  return (
    <motion.div 
      className={`glass-panel rounded-xl p-6 ${glowClass} ${transitionClass} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
