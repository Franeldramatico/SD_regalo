import React from 'react';

export const BrushTitle: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
  <div className="relative inline-block">
    {/* Red paint splash effect behind text */}
    <div className="absolute -inset-4 bg-red-700 opacity-60 blur-xl transform skew-x-12 rotate-2 rounded-full mix-blend-multiply pointer-events-none"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-red-600/80 -rotate-3 skew-y-3 pointer-events-none mix-blend-hard-light z-0"></div>
    
    <h1 className={`relative z-10 font-brush text-5xl sm:text-7xl md:text-9xl text-white transform -rotate-2 leading-none tracking-tighter ${className}`}
        style={{
          textShadow: '3px 3px 0px #7f1d1d, 6px 6px 0px #000, 0 0 20px rgba(0,0,0,0.5)'
        }}>
      {text}
    </h1>
  </div>
);

export const RedStamp: React.FC<{ text: string }> = ({ text }) => (
  <div className="inline-block border-[3px] md:border-4 border-red-700 p-1 md:p-2 transform rotate-6 bg-red-600/10 backdrop-blur-sm shadow-[0_0_15px_rgba(220,38,38,0.4)]">
    <div className="border border-red-700/50 p-1">
      <span className="text-red-600 font-asian font-black text-lg md:text-2xl uppercase tracking-[0.2em]">
        {text}
      </span>
    </div>
  </div>
);

export const NeonText: React.FC<{ text: string; color?: 'green' | 'blue' | 'pink' | 'amber' }> = ({ text, color = 'green' }) => {
  const glowClass = color === 'green' ? 'neon-green-glow text-green-400' 
                  : color === 'blue' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' 
                  : color === 'amber' ? 'text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]'
                  : 'text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]';
                  
  return (
    <span className={`font-teko text-xl md:text-4xl uppercase tracking-wider ${glowClass}`}>
      {text}
    </span>
  );
};

export const ChineseChar: React.FC<{ char: string; size?: string }> = ({ char, size = "text-9xl" }) => (
  <span className={`font-asian font-black text-red-900/20 absolute select-none pointer-events-none ${size}`}>
    {char}
  </span>
);