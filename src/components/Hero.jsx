import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-end justify-center bg-black select-none">
      
      {/* 100vh Full-Bleed Edge-to-Edge Hero Image (Natural Light & Composition) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/hero-silhouette.webp"
          alt="Jumpclicks Photography"
          className="w-full h-full object-cover object-center"
        />
        {/* Very soft, subtle gradient vignette only for text contrast, preserving natural lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* KnotsbyAMP Reference: Centerpiece Brand Title & Tagline in Lower Half */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center pb-20 sm:pb-28 pointer-events-none">
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-normal tracking-wide drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          Jumpclicks
        </h1>

        <p 
          className="text-lg sm:text-2xl md:text-3xl text-white/95 mt-2 sm:mt-4 tracking-[0.06em] font-light italic drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] max-w-3xl"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          Stories of Love & Joy of Weddings
        </p>
      </div>

    </section>
  );
}
