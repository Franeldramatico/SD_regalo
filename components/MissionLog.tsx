import React from 'react';
import { CheckCircle2, Circle, MapPin, Heart, ShieldAlert } from 'lucide-react';
import { Mission } from '../types';

interface MissionLogProps {
  missions: Mission[];
  onToggle: (id: string) => void;
}

export const MissionLog: React.FC<MissionLogProps> = ({ missions, onToggle }) => {
  return (
    <div className="relative w-full max-w-md transform md:rotate-1">
      {/* Phone/HUD Header */}
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border-l-4 border-amber-500 p-4 shadow-2xl relative overflow-hidden">
        {/* Scanline effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
        
        <div className="relative z-10 flex justify-between items-end mb-4 border-b border-zinc-700 pb-2">
          <div>
             <span className="text-[10px] text-amber-500 font-mono tracking-widest block mb-1">HKPD DATABASE /// ACCESO AUTORIZADO</span>
             <h3 className="text-2xl md:text-3xl font-teko font-bold tracking-wide text-white uppercase italic">
               MISIONES ACTIVAS
             </h3>
          </div>
          <ShieldAlert className="w-6 h-6 text-amber-500 animate-pulse" />
        </div>

        <div className="relative z-10 space-y-3">
          {missions.map((mission) => (
            <div 
              key={mission.id} 
              onClick={() => onToggle(mission.id)}
              className={`
                relative group cursor-pointer transition-all duration-300 border border-transparent p-2
                ${mission.completed 
                  ? 'opacity-60 bg-zinc-900/50' 
                  : 'bg-zinc-800/40 hover:bg-zinc-800/80 hover:border-amber-500/30 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)]'}
              `}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 shrink-0">
                  {mission.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <Circle className={`w-5 h-5 ${mission.type === 'main' ? 'text-red-500' : 'text-cyan-400'}`} />
                  )}
                </div>
                <div className="flex-grow">
                  <h4 className={`
                    font-bold text-base md:text-lg leading-tight mb-1 font-asian tracking-wide uppercase
                    ${mission.type === 'main' ? 'text-amber-400' : 'text-zinc-200'}
                    ${mission.completed ? 'line-through decoration-red-600 decoration-2 text-zinc-500' : ''}
                  `}>
                    {mission.title}
                  </h4>
                  <p className="text-xs md:text-sm text-zinc-400 font-sans flex items-start gap-1 leading-snug">
                    <span className="mt-0.5 shrink-0">
                      {mission.type === 'main' && <Heart className="w-3 h-3 text-red-500 fill-red-500" />}
                      {mission.type === 'side' && <MapPin className="w-3 h-3 text-cyan-500" />}
                      {mission.type === 'date' && <span className="text-amber-500 font-bold text-[10px]">HK$</span>}
                    </span>
                    {mission.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};