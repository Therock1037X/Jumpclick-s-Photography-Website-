import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Genuine client reviews with authentic wedding photography from the JumpClicks project
const editorialTestimonials = [
  {
    id: 'sneha-dhinesh',
    couple: 'SNEHA & DHINESH',
    quote: 'Probably the best decision we took. We loved your work , the team, ease of communication. When it came to choosing our wedding photography we had no confusion because you guys were our obvious choice. We loved the pictures , the album design and each detail and most important of all making us feel absolutely comfortable in front of the camera. Special thanks to the cofounder Sajith and team.',
    image: '/gallery/web/wedding/wedding_20.webp',
  },
  {
    id: 'priya-rahul',
    couple: 'PRIYA & RAHUL',
    quote: 'The team at Jumpclicks made our wedding celebration so effortlessly special. They were incredibly patient, captured every single sacred ritual, tear, and joy without disruptive interruptions or awkward poses. Looking through our heirloom album felt like reliving every magical second.',
    image: '/gallery/web/wedding/wedding_28.webp',
  },
  {
    id: 'anjali-vivek',
    couple: 'ANJALI & VIVEK',
    quote: 'We were quite camera-shy, but the photographers made us feel completely relaxed and natural. The scenic locations they guided us through and the golden hour sunset portraits exceeded all our expectations. Our friends and family are still raving about the cinematic highlight film!',
    image: '/gallery/web/wedding/wedding_26.webp',
  },
  {
    id: 'shruti-rohit',
    couple: 'DR. SHRUTI & ROHIT',
    quote: 'Such a polite, courteous, and exceptionally talented crew. They blended into our celebrations like family, honoring our traditional customs while delivering editorial magazine-grade portraits. The handcrafted flush-mount album craftsmanship is sheer heirloom perfection.',
    image: '/gallery/web/wedding/wedding_31.webp',
  },
];

// Delicate Muted Botanical Branch Illustration for dark theme
function WatercolorBotanicalLeaf({ className = "" }) {
  return (
    <svg 
      viewBox="0 0 170 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="darkLeafGrad1" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#7a946b" stopOpacity="0.75" />
          <stop offset="60%" stopColor="#4e6342" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#2c3a25" stopOpacity="0.5" />
        </radialGradient>
        <radialGradient id="darkLeafGrad2" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#9cb38c" stopOpacity="0.8" />
          <stop offset="55%" stopColor="#647d55" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#35452d" stopOpacity="0.5" />
        </radialGradient>
        <linearGradient id="darkStemWatercolor" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5c5240" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#7a6f58" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#a39578" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Main Curved Twig Stem */}
      <path 
        d="M 20 195 C 38 155 65 110 115 50 C 132 30 148 16 156 8" 
        stroke="url(#darkStemWatercolor)" 
        strokeWidth="2.2" 
        strokeLinecap="round"
      />

      {/* Bottom Leaf 1 (Left spreading) */}
      <path 
        d="M 38 162 C 16 160 2 174 12 188 C 26 191 42 181 40 166 Z" 
        fill="url(#darkLeafGrad1)" 
      />
      <path d="M 36 165 C 26 174 18 182 16 186" stroke="#232e1e" strokeWidth="0.8" opacity="0.4" />

      {/* Bottom Leaf 2 (Right spreading) */}
      <path 
        d="M 58 138 C 82 128 98 144 92 162 C 74 168 55 154 56 139 Z" 
        fill="url(#darkLeafGrad2)" 
      />
      <path d="M 58 139 C 74 148 86 158 88 160" stroke="#232e1e" strokeWidth="0.8" opacity="0.4" />

      {/* Mid Leaf 3 (Left spreading, elegant curve) */}
      <path 
        d="M 80 98 C 50 88 34 108 48 128 C 66 131 82 115 82 100 Z" 
        fill="url(#darkLeafGrad1)" 
      />
      <path d="M 78 100 C 58 112 48 124 48 126" stroke="#232e1e" strokeWidth="0.8" opacity="0.4" />

      {/* Upper Leaf 4 (Right spreading) */}
      <path 
        d="M 112 62 C 138 52 152 72 144 90 C 124 94 106 80 110 64 Z" 
        fill="url(#darkLeafGrad2)" 
      />
      <path d="M 112 64 C 128 75 140 86 142 88" stroke="#232e1e" strokeWidth="0.8" opacity="0.4" />

      {/* Topmost Tender Leaf 5 */}
      <path 
        d="M 142 26 C 158 10 172 24 166 38 C 152 41 138 34 140 26 Z" 
        fill="url(#darkLeafGrad1)" 
      />
    </svg>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(0);

  const current = editorialTestimonials[currentIndex];

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + editorialTestimonials.length) % editorialTestimonials.length);
      setIsTransitioning(false);
    }, 280);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % editorialTestimonials.length);
      setIsTransitioning(false);
    }, 280);
  };

  // Autoplay timer: advances every 7s unless hovered/touched
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  return (
    <section 
      className="relative w-full bg-[#000000] text-white py-20 sm:py-24 md:py-28 overflow-hidden select-none border-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Decorative Botanical Leaf Accent at Bottom Left in muted organic tones */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-10 lg:left-14 pointer-events-none z-10 opacity-30 sm:opacity-40">
        <WatercolorBotanicalLeaf className="w-24 sm:w-32 lg:w-36 h-auto" />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 relative z-20">
        
        {/* Editorial Section Header with Top Vertical Tick in Dark Theme */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16 md:mb-20 flex flex-col items-center">
          {/* Subtle 1px vertical tick at top center */}
          <div className="w-[1px] h-5 sm:h-6 bg-white/20 mb-4 sm:mb-5" aria-hidden="true" />

          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-light text-white uppercase tracking-[0.34em] sm:tracking-[0.38em] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            What Our Clients Say
          </h2>
          <p 
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-[15px] text-neutral-400 italic max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            “At the end of the day, people won't remember what you said or did, they will remember how you made them feel.”
          </p>
        </div>

        {/* Spacious Split Editorial Layout: Left Photo + Right Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Column: Authentic Wedding Photograph (Large Landscape Frame) */}
          <div className="lg:col-span-6 xl:col-span-6 z-20">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1.42] rounded-none overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-[#0e0e12] border border-white/10">
              <img
                src={current.image}
                alt={`${current.couple} Wedding Photography by Jumpclicks`}
                draggable="false"
                className={`w-full h-full object-cover object-center select-none pointer-events-none transition-all duration-700 ease-out ${
                  isTransitioning ? 'opacity-0 scale-[1.03]' : 'opacity-100 scale-100'
                }`}
                loading="lazy"
              />
              {/* Subtle ambient light vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Dark Luxury Obsidian Testimonial Panel */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 mt-6 lg:mt-0 lg:-ml-10 xl:-ml-14">
            <div className="bg-[#0e0e13] border border-white/10 hover:border-white/20 transition-colors duration-500 rounded-none p-8 sm:p-12 lg:p-14 xl:p-16 lg:pl-16 xl:pl-20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative flex flex-col justify-between min-h-[340px] sm:min-h-[370px]">
              
              {/* Testimonial Quote and Couple Attribution (Centered Typography in Dark Theme) */}
              <div className={`transition-all duration-500 ease-out text-center ${
                isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}>
                <p 
                  className="text-neutral-200 text-[13.5px] sm:text-[14px] md:text-[14.5px] lg:text-[15px] leading-[2.1] sm:leading-[2.2] font-normal text-center max-w-xl mx-auto"
                  style={{ fontFamily: "'Manrope', 'Plus Jakarta Sans', system-ui, sans-serif" }}
                >
                  "{current.quote}"
                </p>

                {/* Couple Attribution in small spaced uppercase directly beneath */}
                <div className="mt-8 sm:mt-10">
                  <span 
                    className="block text-[11px] sm:text-xs font-semibold tracking-[0.32em] uppercase text-white/90"
                    style={{ fontFamily: "'Manrope', 'Plus Jakarta Sans', system-ui, sans-serif" }}
                  >
                    {current.couple}
                  </span>
                </div>
              </div>

              {/* Minimal Circular Previous / Next Navigation Buttons (Positioned at bottom-right) */}
              <div className="flex items-center justify-end gap-3 mt-8 pt-2">
                <button
                  onClick={handlePrev}
                  onMouseDown={(e) => e.preventDefault()}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 hover:bg-white text-white hover:text-black shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center transition-all duration-300 cursor-pointer border border-white/15 hover:border-white select-none caret-transparent"
                  aria-label="Previous client testimonial"
                >
                  <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
                </button>
                <button
                  onClick={handleNext}
                  onMouseDown={(e) => e.preventDefault()}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 hover:bg-white text-white hover:text-black shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center transition-all duration-300 cursor-pointer border border-white/15 hover:border-white select-none caret-transparent"
                  aria-label="Next client testimonial"
                >
                  <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

