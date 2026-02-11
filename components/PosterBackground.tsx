import React from 'react';

export const PosterBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Black Layer */}
      <div className="absolute inset-0 bg-zinc-950"></div>

      {/* Background Image - Hong Kong Night Street */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1543167123-57c2cb2f72bc?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Rain Animation Layer */}
      <div className="rain"></div>

      {/* Urban Grey Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
      
      {/* Scanline Animation */}
      <div className="scanline"></div>
      
      {/* Vignette for Noir feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

      {/* Neon Atmospheric Glows */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-blue-900/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-red-900/10 blur-[120px] rounded-full animate-pulse"></div>
    </div>
  );
};