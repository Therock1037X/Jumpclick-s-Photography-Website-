import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88svh] sm:h-screen sm:min-h-[600px] overflow-hidden flex flex-col justify-between sm:justify-end items-center bg-black select-none pt-20 pb-10 sm:pt-0 sm:pb-24">
      
      {/* Mobile Presentation: Exact Uncropped Horizontal 3:2 Photography */}
      <div className="sm:hidden w-full flex-1 flex flex-col justify-center items-center px-0 relative my-auto">
        <div className="w-full relative overflow-hidden aspect-[3/2] flex items-center justify-center">
          <img
            src="/images/hero-silhouette.webp"
            alt="Jumpclicks Photography"
            className="w-full h-full object-contain"
          />
          {/* Subtle cinematic top and bottom gradients blending seamlessly into pure black */}
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Desktop Presentation: Full-Bleed Edge-to-Edge Hero Image (100% Unchanged) */}
      <div className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none">
        <img
          src="/images/hero-silhouette.webp"
          alt="Jumpclicks Photography"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft gradient vignette for text contrast, and deep feather fade at bottom to blend with next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/85 to-transparent z-10" />
      </div>

      {/* KnotsbyAMP Reference: Centerpiece Brand Title & Tagline in Lower Area */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center pointer-events-none">
        <h1 
          className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-normal tracking-wide drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          Jumpclicks
        </h1>

        <p 
          className="text-xs xs:text-sm sm:text-2xl md:text-3xl text-white/95 mt-1.5 sm:mt-4 tracking-[0.06em] sm:tracking-[0.08em] font-light italic drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] max-w-3xl"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          Every Frame, a Work of Art
        </p>
      </div>

    </section>
  );
}
