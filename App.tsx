import React, { useState, useEffect } from 'react';
import { PosterBackground } from './components/PosterBackground';
import { BrushTitle, NeonText, RedStamp, ChineseChar } from './components/Typography';
import { MissionLog } from './components/MissionLog';
import { FaceMeter } from './components/FaceMeter';
import { KaraokeList } from './components/KaraokeList';
import { generateRomanticNoirContent } from './services/geminiService';
import { Mission, GeneratedPoem } from './types';
import { Terminal, Lock, RefreshCw, Printer, ShieldCheck, Map, Smartphone } from 'lucide-react';

export default function App() {
  const [poem, setPoem] = useState<GeneratedPoem | null>(null);
  const [loading, setLoading] = useState(false);
  const [missions, setMissions] = useState<Mission[]>([
    { id: '1', title: 'CONQUISTAR EL CORAZÓN', description: 'Objetivo: Aranxita. Recompensa: Lealtad Eterna.', completed: false, type: 'main' },
    { id: '2', title: 'OPERACIÓN PORK BUN', description: 'Conseguir bollos calientes a las 2 AM.', completed: true, type: 'side' },
    { id: '3', title: 'REFUGIO SEGURO', description: 'Maratón de películas bajo el fuerte de sábanas.', completed: false, type: 'date' },
    { id: '4', title: 'PASEO EN MOTO', description: 'Escapar de la policía a toda velocidad.', completed: true, type: 'side' },
  ]);

  const handleToggleMission = (id: string) => {
    setMissions(prev => prev.map(m => 
      m.id === id ? { ...m, completed: !m.completed } : m
    ));
  };

  const generateNewMessage = async () => {
    setLoading(true);
    const data = await generateRomanticNoirContent("Aranxita");
    setPoem(data);
    setLoading(false);
  };

  useEffect(() => {
    generateNewMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      <PosterBackground />
      
      {/* Decorative Kanji Layers */}
      <div className="fixed top-[10%] left-[5%] z-0 opacity-20 animate-pulse">
         <ChineseChar char="愛" size="text-[15rem]" />
      </div>
      <div className="fixed top-[40%] right-[-5%] z-0 opacity-10">
         <ChineseChar char="義" size="text-[20rem]" />
      </div>
      <div className="fixed bottom-[10%] left-[-5%] z-0 opacity-10">
         <ChineseChar char="忠" size="text-[18rem]" />
      </div>

      {/* --- SECTION 1: HERO & TITLE --- */}
      <header className="relative z-10 w-full min-h-[90vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="flex flex-col items-center gap-6">
           <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
              <span className="text-amber-400 font-teko text-xl tracking-[0.5em] uppercase glow">Undercover Love</span>
              <div className="h-[2px] w-12 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
           </div>
           
           <BrushTitle text="ARANXITA" className="neon-red-glow" />
           
           <div className="transform rotate-2 mt-4">
             <RedStamp text="DRAGON'S HEART" />
           </div>

           <div className="mt-8 max-w-lg bg-black/60 backdrop-blur-sm p-6 border-l-4 border-amber-400 transform -skew-x-6 hover:skew-x-0 transition-transform duration-500">
              <p className="text-zinc-200 text-lg md:text-xl font-light italic transform skew-x-6">
                "En Hong Kong la sangre se lava con lluvia, pero nuestro amor está escrito en neón permanente."
              </p>
           </div>
        </div>

        <div className="absolute bottom-10 animate-bounce text-zinc-500 flex flex-col items-center gap-2">
          <span className="font-teko text-sm tracking-widest uppercase">Desliza para acceder</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-red-500 to-transparent"></div>
        </div>
      </header>


      {/* --- SECTION 2: INTEL & FACE METER --- */}
      <section className="relative z-10 w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-12 bg-gradient-to-b from-transparent via-black/40 to-transparent">
        
        <div className="flex-1 w-full max-w-md space-y-8">
           <NeonText text="ESTADO ACTUAL" color="amber" />
           
           <FaceMeter />
           
           <div className="bg-zinc-900/80 p-4 border border-zinc-700 flex items-center gap-4 shadow-lg">
              <div className="w-16 h-16 bg-zinc-800 flex items-center justify-center border border-zinc-600">
                 <ShieldCheck className="text-green-500 w-8 h-8" />
              </div>
              <div>
                 <h4 className="text-white font-teko text-xl uppercase">Protección Triada</h4>
                 <p className="text-zinc-400 text-xs uppercase tracking-wider">Nadie te toca. Estás a salvo conmigo.</p>
              </div>
           </div>
        </div>

        <div className="flex-1 w-full max-w-lg">
          {/* AI Message Card */}
          <div className="bg-zinc-950/90 border-2 border-zinc-800 p-8 relative shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-600 shadow-[0_0_10px_#dc2626]"></div>
            
            <div className="flex justify-between items-center mb-6">
               <div className="flex items-center gap-2">
                 <Terminal size={16} className="text-red-500" />
                 <span className="text-red-500 font-mono text-xs uppercase tracking-[0.2em] glitch" data-text="ENCRIPTADO">ENCRIPTADO</span>
               </div>
               <span className="text-zinc-600 font-teko text-xl">ID: ARX-01</span>
            </div>

            <div className="min-h-[150px] flex items-center justify-center text-center">
              {loading ? (
                <div className="flex flex-col items-center gap-2">
                  <RefreshCw className="animate-spin text-red-500" size={24} />
                  <span className="text-red-500 font-mono text-xs blink">HACKEANDO CÁMARA...</span>
                </div>
              ) : poem ? (
                <div className="animate-in fade-in zoom-in duration-500">
                  <h3 className="text-2xl font-teko text-white mb-3 uppercase tracking-wide text-left border-l-4 border-amber-500 pl-3">
                    {poem.title}
                  </h3>
                  <p className="font-asian text-zinc-300 text-base md:text-lg leading-relaxed text-left">
                    {poem.content}
                  </p>
                </div>
              ) : null}
            </div>

            <button 
              onClick={generateNewMessage}
              disabled={loading}
              className="mt-6 w-full py-3 bg-zinc-900 hover:bg-red-900/40 border border-zinc-700 hover:border-red-500 text-zinc-400 hover:text-white transition-all uppercase font-teko tracking-widest text-lg flex items-center justify-center gap-2 group"
            >
              <Smartphone size={18} />
              {loading ? 'Conectando...' : 'Interceptar Mensaje'}
            </button>
          </div>
        </div>
      </section>


      {/* --- SECTION 3: MISSIONS & NIGHT LIFE --- */}
      <section className="relative z-10 w-full min-h-screen flex flex-col items-center p-6 gap-12 bg-black/20">
        
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-12 items-start">
           {/* Left: Mission Phone UI */}
           <div className="flex-1 w-full">
              <div className="mb-6 flex items-center gap-4">
                 <div className="bg-red-600 text-white font-bold p-1 px-3 transform -skew-x-12 shadow-lg">
                    <span className="transform skew-x-12 block font-teko text-xl tracking-wider">OBJETIVOS</span>
                 </div>
                 <div className="h-[1px] flex-grow bg-zinc-800"></div>
              </div>
              <MissionLog missions={missions} onToggle={handleToggleMission} />
           </div>

           {/* Right: City Life & Karaoke */}
           <div className="flex-1 w-full flex flex-col gap-8">
              <div className="relative group overflow-hidden border-2 border-zinc-800 hover:border-cyan-500 transition-colors duration-500 h-64">
                 {/* Map Placeholder */}
                 <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=22.2783,114.1747&zoom=14&size=600x300&maptype=roadmap&style=feature:all|element:geometry|color:0x242f3e&style=feature:all|element:labels.text.stroke|visibility:off&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:administrative.locality|element:labels.text.fill|color:0xd59563&style=feature:poi|element:labels.text.fill|color:0xd59563&style=feature:poi.park|element:geometry|color:0x263c3f&style=feature:poi.park|element:labels.text.fill|color:0x6b9a76&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:geometry.stroke|color:0x212a37&style=feature:road.highway|element:geometry|color:0x746855&style=feature:road.highway|element:geometry.stroke|color:0x1f2835&style=feature:road.highway|element:labels.text.fill|color:0xf3d19c&style=feature:transit|element:geometry|color:0x2f3948&style=feature:transit.station|element:labels.text.fill|color:0xd59563&style=feature:water|element:geometry|color:0x17263c&style=feature:water|element:labels.text.fill|color:0x515c6d&style=feature:water|element:labels.text.stroke|visibility:off&sensor=false&key=YOUR_API_KEY')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                 <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay"></div>
                 
                 <div className="absolute top-2 right-2 bg-black/80 text-cyan-500 px-2 py-1 font-mono text-xs border border-cyan-500/50 flex items-center gap-2">
                    <Map size={12} />
                    <span>NORTH POINT</span>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                    <div className="w-4 h-4 bg-red-500 rounded-full absolute border-2 border-white"></div>
                 </div>
              </div>

              <KaraokeList />
           </div>
        </div>

      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 bg-zinc-950 border-t-2 border-zinc-800 p-8 flex flex-col items-center justify-center text-center gap-4">
        <div className="flex gap-4 mb-4">
           <ChineseChar char="永遠" size="text-4xl text-zinc-700 relative static" />
        </div>
        <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">
          Designed for Aranxita /// Mission Complete
        </p>
        <button onClick={() => window.print()} className="text-zinc-600 hover:text-white transition-colors">
          <Printer size={20} />
        </button>
      </footer>
    </div>
  );
}