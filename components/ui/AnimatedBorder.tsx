import React from 'react';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedBorder: React.FC<AnimatedBorderProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-blue)] via-[var(--accent-purple)] to-[var(--accent-cyan)] rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
      <div className="relative h-full bg-[var(--bg-primary)] rounded-xl leading-none flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
