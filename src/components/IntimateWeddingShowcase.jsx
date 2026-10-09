import React from 'react';
import { Link } from 'react-router-dom';

export default function IntimateWeddingShowcase() {
  return (
    <section className="relative w-full bg-[#000000] text-white py-12 sm:py-14 md:py-16 overflow-hidden select-none border-none">
      
      {/* Fluid Organic Curvy Graphic Backdrop (Soft Luxury Silhouette Behind Images - Zero Top Edges or Lines) */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[68%] xl:w-[65%] h-full pointer-events-none z-0 overflow-hidden">
        <svg 
          viewBox="0 0 1000 800" 
          className="w-full h-full object-fill" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="curvyGraphicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#16121d" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#0e0d13" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#050508" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          {/* Organic flowing S-curve contour starting well below y=0 to prevent any top seam line */}
          <path 
            d="M 1000,800 
               L 1000,80 
               C 750,80, 550,60, 420,130 
               C 300,200, 220,300, 150,400 
               C 70,510, 40,610, 90,700 
               C 130,760, 200,800, 320,800 Z" 
            fill="url(#curvyGraphicGrad)" 
            stroke="none"
          />
        </svg>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-[1650px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Editorial Narrative Column (4 cols) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between pt-2 lg:pt-6">
            <div>
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-normal text-white leading-[1.08] tracking-[0.14em] sm:tracking-[0.16em] uppercase"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                TALES OF<br />FOREVER
              </h2>

              <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#df2531] font-semibold block mt-3 mb-6 font-mono">
                Showcase
              </span>

              <p className="text-slate-300 text-sm sm:text-[14.5px] leading-[1.85] font-normal max-w-md">
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
                <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500 block mt-1.5 font-mono">
                  — Ellen Von Unwerth
                </span>
              </div>
            </div>

            {/* Clean Minimal Action Link (No harsh red lines or navigation tracks) */}
            <div className="pt-10 sm:pt-14">
              <Link
                to="/contact"
                className="inline-block text-[12px] uppercase tracking-[0.22em] font-semibold text-white/95 border-b border-white/40 pb-1 hover:text-white hover:border-white transition-all duration-300"
              >
                Make It Real
              </Link>
            </div>
          </div>

          {/* Right Area: Exact Staggered 3-Card Collage (Side-by-side on all screen sizes, exact like laptop) */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="flex flex-row items-start justify-between gap-2 sm:gap-4 lg:gap-6">
              
              {/* Card 1: Karthik & Swetha (Starts HIGHEST, WIDER & TALLER, breaks out above the wave) */}
              <div className="w-[39%] sm:w-[38%] flex flex-col group z-20 transition-transform duration-500">
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

                <div className="pt-2 sm:pt-3.5 text-center sm:text-left">
                  <h3 
                    className="text-white text-[11px] sm:text-base md:text-[17px] font-normal tracking-[0.08em] sm:tracking-[0.14em] uppercase"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                  >
                    Karthik & Swetha
                  </h3>
                  <p className="text-[9px] sm:text-xs italic text-slate-400 mt-0.5 font-light tracking-wide">
                    Destination : Thottam
                  </p>
                </div>
              </div>

              {/* Card 2: KRISHNA & CONNOR (Starts MUCH LOWER, narrower, sits deep in lower wave) */}
              <div className="w-[28.5%] sm:w-[28%] flex flex-col group z-10 mt-6 sm:mt-28 md:mt-36 lg:mt-44 transition-transform duration-500">
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

                <div className="pt-2 sm:pt-3.5 text-center sm:text-left">
                  <h3 
                    className="text-white text-[10px] sm:text-sm md:text-[15px] font-normal tracking-[0.08em] sm:tracking-[0.14em] uppercase"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                  >
                    Krishna & Connor
                  </h3>
                  <p className="text-[9px] sm:text-xs italic text-slate-400 mt-0.5 font-light tracking-wide">
                    Destination : Kunnathoor Mana
                  </p>
                </div>
              </div>

              {/* Card 3: SAI & AISHWARYA (Starts at INTERMEDIATE height, between Card 1 & 2) */}
              <div className="w-[28.5%] sm:w-[28%] flex flex-col group z-10 mt-2 sm:mt-10 md:mt-14 lg:mt-20 transition-transform duration-500">
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

                <div className="pt-2 sm:pt-3.5 text-center sm:text-left">
                  <h3 
                    className="text-white text-[10px] sm:text-sm md:text-[15px] font-normal tracking-[0.08em] sm:tracking-[0.14em] uppercase"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                  >
                    Sai & Aishwarya
                  </h3>
                  <p className="text-[9px] sm:text-xs italic text-slate-400 mt-0.5 font-light tracking-wide">
                    Destination : Nandhi Hills
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Right Handwritten "with love" Signature (Exact Reference Element) */}
            <div className="flex justify-end pt-6 sm:pt-16 pr-2 sm:pr-8">
              <span 
                className="text-3xl sm:text-5xl text-white/90 font-normal italic select-none transform -rotate-3 hover:rotate-0 transition-transform duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
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
