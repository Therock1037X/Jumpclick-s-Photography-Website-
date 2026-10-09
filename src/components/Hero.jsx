import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] sm:h-screen min-h-[480px] sm:min-h-[600px] overflow-hidden flex items-end justify-center bg-black select-none">
      
      {/* 100vh Full-Bleed Edge-to-Edge Hero Image (Natural Light & Composition) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/hero-silhouette.webp"
          alt="Jumpclicks Photography"
          className="w-full h-full object-cover object-[28%_35%] sm:object-center"
        />
        {/* Soft gradient vignette for text contrast, and deep feather fade at bottom to blend with next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none z-10" />
      </div>

      {/* KnotsbyAMP Reference: Centerpiece Brand Title & Tagline in Lower Half */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center pb-12 sm:pb-24 pointer-events-none">
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-normal tracking-wide drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          Jumpclicks
        </h1>

        <p 
          className="text-base sm:text-2xl md:text-3xl text-white/95 mt-2 sm:mt-4 tracking-[0.06em] sm:tracking-[0.08em] font-light italic drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] max-w-3xl"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          Every Frame, a Work of Art
        </p>
      </div>

    </section>
  );
}
