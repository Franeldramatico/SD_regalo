import React from 'react';
import { Mic2, Play } from 'lucide-react';

const songs = [
  { id: 1, title: "I Fought the Law", artist: "The Clash", active: false },
  { id: 2, title: "Yellow Fever", artist: "F.P.G.", active: false },
  { id: 3, title: "Softly", artist: "Aranxita's Theme", active: true },
  { id: 4, title: "Girls Just Want to Have Fun", artist: "Cyndi Lauper", active: false },
];

export const KaraokeList: React.FC = () => {
  return (
    <div className="w-full bg-black/60 border border-pink-500/30 p-4 backdrop-blur-sm transform md:rotate-1 mt-8">
      <div className="flex items-center gap-2 mb-4 text-pink-500 border-b border-pink-500/30 pb-2">
        <Mic2 className="animate-bounce" />
        <h3 className="font-teko text-2xl uppercase tracking-widest text-pink-400 neon-red-glow">
          Club Bam Bam Karaoke
        </h3>
      </div>
      <ul className="space-y-2">
        {songs.map((song) => (
          <li key={song.id} className={`flex justify-between items-center p-2 border-l-2 ${song.active ? 'bg-pink-900/20 border-pink-500' : 'border-transparent text-zinc-600'}`}>
            <div className="flex flex-col">
              <span className={`font-asian font-bold text-lg leading-none ${song.active ? 'text-white glitch' : ''}`} data-text={song.title}>
                {song.title}
              </span>
              <span className="text-xs uppercase tracking-wide font-sans">{song.artist}</span>
            </div>
            {song.active && <Play size={16} className="text-pink-400 fill-pink-400" />}
          </li>
        ))}
      </ul>
    </div>
  );
};