import React from 'react';

interface BackgroundThemeProps {
  children: React.ReactNode;
}

export function BackgroundTheme({ children }: BackgroundThemeProps) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Black background with white dot grid pattern */}
      <div 
        className="fixed inset-0 bg-black"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      
      {/* Radial gradient overlay to create the fading effect from center */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0.95) 100%)',
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
