import React from 'react';
import { Star } from 'lucide-react';

export const FaceMeter: React.FC = () => {
  return (
    <div className="flex items-center gap-3 w-full max-w-xs md:max-w-md my-4">
      <div className="bg-yellow-500/20 rounded-full p-2 border border-yellow-500/50">
        <Star className="text-yellow-400 fill-yellow-400 w-6 h-6 animate-[spin_10s_linear_infinite]" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between text-yellow-500 font-teko text-sm tracking-widest uppercase mb-1">
          <span>Reputación del Corazón</span>
          <span className="animate-pulse">Nivel: Máximo</span>
        </div>
        <div className="h-4 bg-zinc-900 border border-yellow-600/30 transform -skew-x-12 relative overflow-hidden">
          {/* Fill Bar */}
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 transform origin-left animate-pulse-gold"></div>
          {/* Shine effect */}
          <div className="absolute top-0 left-0 h-full w-full bg-white/20 transform skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};