import React from 'react';
import { Link } from 'react-router-dom';

export default function IntimateWeddingShowcase() {
  return (
    <section className="relative w-full bg-[#000000] text-white py-20 sm:py-28 lg:py-36 overflow-hidden select-none border-none">
      
      {/* 1. Circular Gradient in Top-Left Corner (Smooth Atmospheric Glow) */}
      <div 
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(223, 37, 49, 0.18) 0%, rgba(142, 19, 27, 0.10) 42%, rgba(74, 8, 13, 0.04) 65%, transparent 75%)'
        }}
      />

      {/* 2. Dotted World Map Graphic with Smooth Radial Gradient Mask (No Hard Rectangular Edge) */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none opacity-20 overflow-hidden flex items-start justify-end"
        style={{
          maskImage: 'radial-gradient(ellipse at 80% 30%, black 15%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 80% 30%, black 15%, transparent 75%)',
        }}
      >
        <svg 
          viewBox="0 0 1000 500" 
          className="w-[1300px] h-auto object-cover max-w-none -mr-32 mt-2"
          fill="none" 
          stroke="currentColor"
        >
          <pattern id="darkDotMap" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" fill="#ffffff" />
          </pattern>
          <rect width="1000" height="500" fill="url(#darkDotMap)" />
        </svg>
      </div>

      {/* 3. Curvy Organic Background Panel (From Reference Image 2) */}
      <div className="absolute bottom-0 right-0 w-full lg:w-[60%] h-[74%] lg:h-[80%] bg-[#0d0c11] border-t border-l border-white/[0.06] rounded-tl-[80px] sm:rounded-tl-[120px] lg:rounded-tl-[160px] pointer-events-none shadow-[inset_0_1px_35px_rgba(223,37,49,0.03)]" />

      {/* Organic sweeping contour line on the left boundary */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 1600 900" className="w-full h-full object-cover" preserveAspectRatio="none">
          <path
            d="M 540 60 C 460 220, 500 420, 430 560 C 370 680, 240 760, 60 820"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-[1650px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Editorial Narrative Column (4.5 cols) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between pt-2 lg:pt-4">
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

            {/* Action Link (Clean, NO Red Navigation Line) & Curvy Graphics from Image 3 */}
            <div className="pt-10 sm:pt-14 relative">
              <Link
                to="/contact"
                className="inline-block text-[13px] uppercase tracking-[0.2em] font-medium text-white/90 hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-all outline-none focus:outline-none"
              >
                Make It Real
              </Link>

              {/* Exact Curvy Dashed Graphic with Red Dot & Map Pin from Reference Image 3 */}
              <div className="relative mt-8 sm:mt-10 w-full max-w-[380px] h-20 pointer-events-none">
                <svg viewBox="0 0 360 70" className="w-full h-full overflow-visible">
                  {/* Sinuous dashed wave path from Reference Image 3 */}
                  <path
                    d="M 10 24 C 80 24, 130 55, 180 55 C 235 55, 290 28, 350 28"
                    fill="none"
                    stroke="#df2531"
                    strokeWidth="1.5"
                    strokeDasharray="7 5"
                    strokeOpacity="0.85"
                  />
                  {/* Solid Red Dot on the curve dip */}
                  <circle cx="180" cy="55" r="4" fill="#df2531" />
                  
                  {/* Floating Red Location Pin directly above the dot */}
                  <g transform="translate(171, 20)">
                    <path
                      d="M9 0C4.029 0 0 4.029 0 9c0 5.25 9 14.5 9 14.5s9-9.25 9-14.5c0-4.971-4.029-9-9-9z"
                      fill="#df2531"
                    />
                    <circle cx="9" cy="8.5" r="3" fill="#ffffff" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Area: Exact Reference Staggered 3-Card Collage (8 cols) */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-4 lg:gap-6">
              
              {/* Card 1: Karthik & Swetha (Starts HIGHEST, WIDER & TALLER, overlaps background card) */}
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

              {/* Card 2: KRISHNA & CONNOR (Starts MUCH LOWER, narrower, sits deep in lower card) */}
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
                className="text-4xl sm:text-5xl text-white/90 font-normal italic select-none transform -rotate-3 hover:rotate-0 transition-transform duration-300 drop-shadow-[0_2px_10px_rgba(223,37,49,0.25)]"
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
