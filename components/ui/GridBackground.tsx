import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-primary)] to-[var(--bg-primary)] opacity-80"></div>
    </div>
  );
};
