import React from 'react';
import { Link } from 'react-router-dom';

export default function IntimateWeddingShowcase() {
  return (
    <section className="relative w-full bg-[#000000] text-white py-20 sm:py-28 lg:py-36 overflow-hidden select-none border-none">
      
      {/* 1. Gradient-Mixed Dotted World Map (Soft Ethereal Dissolve with Zero Box Edges) */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-3/4 h-[550px] pointer-events-none opacity-25 overflow-hidden flex items-start justify-end"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 60% at 75% 25%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 75% 25%, black 20%, transparent 75%)',
        }}
      >
        <svg 
          viewBox="0 0 1000 500" 
          className="w-[1300px] h-auto object-cover max-w-none -mr-32 mt-0"
          fill="none" 
          stroke="currentColor"
        >
          <pattern id="darkDotMap" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" fill="#ffffff" />
          </pattern>
          <rect width="1000" height="500" fill="url(#darkDotMap)" />
        </svg>
      </div>

      {/* 2. Fluid Organic Curvy Graphic Backdrop (Directly Replicating Reference Wavy Silhouette) */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[68%] xl:w-[65%] h-full pointer-events-none z-0">
        <svg 
          viewBox="0 0 1000 800" 
          className="w-full h-full object-fill" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="curvyGraphicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#121017" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#0e0d13" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#08070b" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Organic flowing S-curve contour matching the reference image's wavy backdrop */}
          <path 
            d="M 1000,0 
               L 360,0 
               C 280,0, 220,70, 200,160 
               C 180,250, 120,330, 60,410 
               C 0,490, -10,580, 50,670 
               C 90,730, 150,800, 250,800 
               L 1000,800 Z" 
            fill="url(#curvyGraphicGrad)" 
            stroke="rgba(255,255,255,0.06)" 
            strokeWidth="1.2"
          />
        </svg>

        {/* Delicate hairline path tracing the organic curve with subtle location marker pin */}
        <div className="absolute left-[3%] top-[48%] -translate-y-1/2 w-48 h-40 hidden lg:block opacity-40">
          <svg viewBox="0 0 160 140" className="w-full h-full overflow-visible">
            <path
              d="M 0 130 C 50 130, 90 90, 120 20"
              fill="none"
              stroke="#a1a1aa"
              strokeWidth="0.8"
            />
            <circle cx="120" cy="20" r="2.5" fill="#e4e4e7" />
          </svg>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-[1650px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Editorial Narrative Column (4 cols) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between pt-2 lg:pt-6">
            <div>
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.05] tracking-tight uppercase"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                INTIMATE<br />WEDDING
              </h2>

              <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#df2531] font-semibold block mt-3 mb-6">
                Showcase
              </span>

              <p className="text-slate-300 text-sm sm:text-[14.5px] leading-[1.85] font-light max-w-md">
                Intimate destination weddings offer an unparalleled chance to revel in the splendor of love amid an awe-inspiring panorama, enveloped by the cherished ones who matter the most. Our destination wedding photographers have mastered the art of seizing the essence of unbridled feelings and unfeigned instances that make these ceremonies so extraordinary. As a premier wedding photography company in India, we encapsulate the moments of an everlasting union that surpasses the constraints of time and space, as an ode to the odyssey of two hearts towards eternity.
              </p>

              {/* Photography Quote */}
              <div className="pt-8 sm:pt-10 max-w-sm">
                <p 
                  className="text-slate-400 text-sm italic leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  "I like to photograph anyone before they know what their best angles are."
                </p>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block mt-1.5 font-sans">
                  — Ellen Von Unwerth
                </span>
              </div>
            </div>

            {/* Clean Minimal Action Link (No harsh red lines or navigation tracks) */}
            <div className="pt-10 sm:pt-14">
              <Link
                to="/contact"
                className="inline-block text-[13px] uppercase tracking-[0.22em] font-semibold text-white/95 border-b border-white/40 pb-1 hover:text-white hover:border-white transition-all duration-300"
              >
                Make It Real
              </Link>
            </div>
          </div>

          {/* Right Area: Exact Staggered 3-Card Collage (8 cols) */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-4 lg:gap-6">
              
              {/* Card 1: Karthik & Swetha (Starts HIGHEST, WIDER & TALLER, breaks out above the wave) */}
              <div className="w-full sm:w-[38%] flex flex-col group z-20 transition-transform duration-500">
                <Link
                  to="/gallery?category=wedding"
                  className="block overflow-hidden bg-[#141418] rounded-none border border-white/10 group-hover:border-[#df2531]/60 shadow-[0_20px_45px_rgba(0,0,0,0.7)] group-hover:shadow-[0_25px_50px_rgba(223,37,49,0.2)] transition-all duration-500 transform group-hover:-translate-y-1.5"
                >
                  <div className="w-full aspect-[4/4.8] overflow-hidden bg-neutral-900">
                    <img
                      src="/images/showcase-couple-1.webp"
                      alt="Karthik & Swetha"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="pt-3.5 text-center sm:text-left">
                  <h3 
                    className="text-white text-base sm:text-lg font-serif font-normal tracking-wide"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Karthik & Swetha
                  </h3>
                  <p className="text-xs italic text-slate-400 mt-0.5 font-light">
                    Destination : Thottam
                  </p>
                </div>
              </div>

              {/* Card 2: KRISHNA & CONNOR (Starts MUCH LOWER, narrower, sits deep in lower wave) */}
              <div className="w-full sm:w-[28%] flex flex-col group z-10 sm:mt-28 md:mt-36 lg:mt-44 transition-transform duration-500">
                <Link
                  to="/gallery?category=wedding"
                  className="block overflow-hidden bg-[#141418] rounded-none border border-white/10 group-hover:border-[#df2531]/60 shadow-[0_20px_45px_rgba(0,0,0,0.7)] group-hover:shadow-[0_25px_50px_rgba(223,37,49,0.2)] transition-all duration-500 transform group-hover:-translate-y-1.5"
                >
                  <div className="w-full aspect-[3/3.8] overflow-hidden bg-neutral-900">
                    <img
                      src="/images/showcase-couple-2-v2.webp"
                      alt="KRISHNA & CONNOR"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="pt-3.5 text-center sm:text-left">
                  <h3 className="text-white text-xs sm:text-[13px] uppercase tracking-[0.14em] font-sans font-semibold">
                    KRISHNA & CONNOR
                  </h3>
                  <p className="text-xs italic text-slate-400 mt-0.5 font-light">
                    Destination : Kunnathoor Mana
                  </p>
                </div>
              </div>

              {/* Card 3: SAI & AISHWARYA (Starts at INTERMEDIATE height, between Card 1 & 2) */}
              <div className="w-full sm:w-[28%] flex flex-col group z-10 sm:mt-10 md:mt-14 lg:mt-20 transition-transform duration-500">
                <Link
                  to="/gallery?category=wedding"
                  className="block overflow-hidden bg-[#141418] rounded-none border border-white/10 group-hover:border-[#df2531]/60 shadow-[0_20px_45px_rgba(0,0,0,0.7)] group-hover:shadow-[0_25px_50px_rgba(223,37,49,0.2)] transition-all duration-500 transform group-hover:-translate-y-1.5"
                >
                  <div className="w-full aspect-[3/3.8] overflow-hidden bg-neutral-900">
                    <img
                      src="/images/showcase-couple-3-tight.webp"
                      alt="SAI & AISHWARYA"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="pt-3.5 text-center sm:text-left">
                  <h3 className="text-white text-xs sm:text-[13px] uppercase tracking-[0.14em] font-sans font-semibold">
                    SAI & AISHWARYA
                  </h3>
                  <p className="text-xs italic text-slate-400 mt-0.5 font-light">
                    Destination : Nandhi Hills
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Right Handwritten "with love" Signature (Exact Reference Element) */}
            <div className="flex justify-end pt-12 sm:pt-16 pr-2 sm:pr-8">
              <span 
                className="text-4xl sm:text-5xl text-white/90 font-normal italic select-none transform -rotate-3 hover:rotate-0 transition-transform duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
                style={{ fontFamily: "'Caveat', cursive, 'Brush Script MT', serif" }}
              >
                with love
              </span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
