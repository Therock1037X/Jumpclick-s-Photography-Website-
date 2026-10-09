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
      className="relative w-full bg-[#000000] text-white py-12 sm:py-14 md:py-16 overflow-hidden select-none border-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 relative z-20">
        
        {/* Editorial Section Header with Top Vertical Tick in Dark Theme */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 flex flex-col items-center">
          {/* Subtle 1px vertical tick at top center */}
          <div className="w-[1px] h-5 sm:h-6 bg-white/20 mb-3 sm:mb-4" aria-hidden="true" />

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

