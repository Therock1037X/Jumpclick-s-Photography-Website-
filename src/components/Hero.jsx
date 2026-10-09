import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full bg-black select-none pt-16 pb-0 sm:pt-0 sm:pb-0 sm:h-screen sm:min-h-[600px] sm:overflow-hidden sm:flex sm:items-end sm:justify-center">
      
      {/* Mobile Presentation (< sm): Exact Uncropped 3:2 Photo with Overlapping Brand Typography */}
      <div className="sm:hidden relative w-full aspect-[3/2] overflow-hidden">
        <img
          src="/images/hero-silhouette.webp"
          alt="Jumpclicks Photography"
          className="w-full h-full object-contain"
        />
        {/* Subtle bottom shadow gradient to guarantee crisp text legibility over lower silhouettes */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
        
        {/* Overlapping Brand Title & Tagline directly over the bottom of the photo */}
        <div className="absolute inset-x-0 bottom-2.5 text-center px-4 z-20 pointer-events-none">
          <h1 
            className="text-4xl xs:text-5xl text-white font-normal tracking-wide drop-shadow-[0_3px_20px_rgba(0,0,0,0.95)] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            Jumpclicks
          </h1>

          <p 
            className="text-xs xs:text-sm text-white/95 mt-1 tracking-[0.06em] font-light italic drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] max-w-xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            Every Frame, a Work of Art
          </p>
        </div>
      </div>

      {/* Desktop Presentation (>= sm): Full-Bleed Edge-to-Edge Hero Image (100% Original Desktop Layout) */}
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

      {/* Desktop Centerpiece Brand Title & Tagline (>= sm) */}
      <div className="hidden sm:flex relative z-20 text-center px-4 max-w-5xl mx-auto flex-col items-center justify-center pb-12 sm:pb-24 pointer-events-none">
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
