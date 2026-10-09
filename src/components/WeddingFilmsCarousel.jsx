import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Film, Volume2 } from 'lucide-react';
import { weddingFilmsData } from '../data/weddingFilmsData';

function PlayIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6 4 20 12 6 20 6 4" />
    </svg>
  );
}

export default function WeddingFilmsCarousel() {
  const carouselRef = useRef(null);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const isResettingRef = useRef(false);

  // Tripled dataset to support butter-smooth infinite looping in both directions
  const displayFilms = [...weddingFilmsData, ...weddingFilmsData, ...weddingFilmsData];

  // Check reduced-motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Initialize carousel scroll position to the middle segment on mount
  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const oneThird = container.scrollWidth / 3;
      container.scrollLeft = oneThird;
    }
  }, []);

  // Infinite loop boundary handler: silently jumps between segments when boundaries are reached
  const handleScroll = useCallback(() => {
    if (!carouselRef.current || isResettingRef.current) return;
    const container = carouselRef.current;
    const oneThird = container.scrollWidth / 3;

    // If scrolled past 2/3, silently jump back to 1/3
    if (container.scrollLeft >= oneThird * 2) {
      isResettingRef.current = true;
      container.scrollLeft -= oneThird;
      setTimeout(() => {
        isResettingRef.current = false;
      }, 50);
    }
    // If scrolled before 1/3, silently jump ahead to 2/3
    else if (container.scrollLeft <= 10) {
      isResettingRef.current = true;
      container.scrollLeft += oneThird;
      setTimeout(() => {
        isResettingRef.current = false;
      }, 50);
    }
  }, []);

  // Smooth scroll handler: advances by exactly one card width + gap
  const scrollOneCard = useCallback((direction = 'right') => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    
    // Get exact width of a single card
    const card = container.querySelector('.film-card');
    const cardWidth = card ? card.getBoundingClientRect().width : 300;
    const gap = window.innerWidth >= 1024 ? 24 : window.innerWidth >= 640 ? 20 : 16;
    const scrollStep = cardWidth + gap;

    container.scrollBy({
      left: direction === 'left' ? -scrollStep : scrollStep,
      behavior: 'smooth',
    });
  }, []);

  // 4-Second Automatic Carousel Movement (Autoplay)
  useEffect(() => {
    if (isPaused || selectedFilm || reducedMotion) return;

    const timer = setInterval(() => {
      scrollOneCard('right');
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, selectedFilm, reducedMotion, scrollOneCard]);

  // Close modal on escape key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedFilm(null);
    };
    if (selectedFilm) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedFilm]);

  // Navigate between films inside modal
  const handlePrevFilm = () => {
    const currentIndex = weddingFilmsData.findIndex(f => f.id === selectedFilm.id);
    const prevIndex = (currentIndex - 1 + weddingFilmsData.length) % weddingFilmsData.length;
    setSelectedFilm(weddingFilmsData[prevIndex]);
  };

  const handleNextFilm = () => {
    const currentIndex = weddingFilmsData.findIndex(f => f.id === selectedFilm.id);
    const nextIndex = (currentIndex + 1) % weddingFilmsData.length;
    setSelectedFilm(weddingFilmsData[nextIndex]);
  };

  return (
    <section 
      className="relative w-full bg-[#000000] text-white py-20 sm:py-24 md:py-28 overflow-hidden select-none border-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      
      {/* 1. Header Section (Matches User Reference Typography) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-white uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          REDEFINING WEDDING FILMS THROUGH STORY TELLING
        </h2>
        
        <p 
          className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-300 italic max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          Our wedding films are tailor made for your big day. We make it feel more personal and earthy to you, with real emotions and sounds captured through candid moments.
        </p>
      </div>

      {/* 2. Infinite Carousel Container with Edge-Overlapping Navigation Arrows */}
      <div className="relative max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Left Circular Arrow Button (Always Active in Infinite Loop, No Red Hover) */}
        <button
          onClick={() => scrollOneCard('left')}
          className="absolute left-2 sm:left-4 lg:left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-900 hover:bg-slate-200 shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 opacity-90 hover:opacity-100 border border-black/10"
          aria-label="Previous wedding film"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Right Circular Arrow Button (Always Active in Infinite Loop, No Red Hover) */}
        <button
          onClick={() => scrollOneCard('right')}
          className="absolute right-2 sm:right-4 lg:right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-900 hover:bg-slate-200 shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 opacity-90 hover:opacity-100 border border-black/10"
          aria-label="Next wedding film"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Horizontal Infinite Scrolling Track (Strict 9:16 Cards, 4 cards visible on desktop) */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-3 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayFilms.map((film, index) => (
            <div
              key={`${film.id}-${index}`}
              onClick={() => setSelectedFilm(film)}
              className="film-card snap-start flex-shrink-0 w-[82%] sm:w-[47%] md:w-[31%] lg:w-[calc(25%-18px)] group relative aspect-[9/16] rounded-none overflow-hidden cursor-pointer bg-[#0e0e12] border border-white/10 hover:border-white/25 transition-colors duration-500 shadow-2xl shadow-black"
              style={{ aspectRatio: '9 / 16' }}
            >
              {/* Poster Image (object-cover without distortion, subtle enlargement on hover) */}
              <img
                src={film.poster}
                alt={`${film.title} - ${film.couple}`}
                className={`w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
                  film.styleVariant === 'monochrome' ? 'grayscale contrast-125' : ''
                }`}
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />

              {/* Permanent Base Vignette for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/25 pointer-events-none z-0" />

              {/* Requirement 1: Center-Expanding Dark Translucent Charcoal/Black Hover Curtain (450-600ms) */}
              <div 
                className="film-hover-curtain"
                aria-hidden="true"
              />

              {/* Requirement 2: Clean Centered Play Icon smoothly revealed on hover (matching reference screenshot) */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-2xl flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 ease-out">
                  <svg className="w-4 h-4 fill-[#666666] ml-0.5 drop-shadow-sm" viewBox="0 0 24 24">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </div>
              </div>

              {/* Poster Artwork & Typography Overlay (Top metadata completely removed, titles at bottom) */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-20 pointer-events-none">
                {/* Bottom Poster Title & Credits */}
                <div className="space-y-1 text-center pb-1">
                  {film.styleVariant === 'monochrome' && (
                    <div className="space-y-0.5">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 block">
                        JOURNEY OF
                      </span>
                      <h3 
                        className="text-2xl sm:text-3xl font-extrabold tracking-[0.25em] text-white uppercase leading-tight"
                        style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                      >
                        L O V E
                      </h3>
                      <p className="text-[11px] text-slate-300 font-light tracking-wider">
                        {film.couple}
                      </p>
                    </div>
                  )}

                  {film.styleVariant === 'crimsonArch' && (
                    <div className="space-y-0.5">
                      <h3 
                        className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase leading-tight drop-shadow"
                        style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                      >
                        {film.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-white/90 font-medium block">
                        {film.chapter}
                      </span>
                      <p className="text-[11px] text-slate-300 font-light">
                        {film.couple}
                      </p>
                    </div>
                  )}

                  {film.styleVariant === 'script' && (
                    <div className="space-y-0.5">
                      <h3 
                        className="text-2xl sm:text-3xl italic font-normal text-white leading-tight"
                        style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                      >
                        {film.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/80 block">
                        A JUMPCLICKS FILM
                      </span>
                      <p className="text-[11px] text-slate-300 font-light">
                        {film.couple}
                      </p>
                    </div>
                  )}

                  {film.styleVariant === 'polaroid' && (
                    <div className="space-y-0.5">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/80 block">
                        {film.title}
                      </span>
                      <h3 
                        className="text-xl sm:text-2xl font-bold tracking-wide text-white uppercase"
                        style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                      >
                        {film.couple}
                      </h3>
                      <p className="text-[10px] text-slate-300 uppercase tracking-widest font-mono">
                        {film.location}
                      </p>
                    </div>
                  )}

                  {film.styleVariant === 'editorial' && (
                    <div className="space-y-0.5">
                      <h3 
                        className="text-xl sm:text-2xl font-bold tracking-wider text-white uppercase"
                        style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                      >
                        {film.title}
                      </h3>
                      <p className="text-[11px] text-slate-300 font-light">
                        {film.couple} • {film.location}
                      </p>
                    </div>
                  )}

                  {/* Watch Film CTA (Clean White Text on Hover, Zero Red) */}
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-white/90">
                      <span>Watch Film</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 3. YouTube Cinematic Video Modal Player */}
      {selectedFilm && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedFilm(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-[#0e0e12] rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/70">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Film className="w-4 h-4" />
                </div>
                <div>
                  <h4 
                    className="text-base sm:text-lg font-normal text-white uppercase tracking-wider leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                  >
                    {selectedFilm.title} — {selectedFilm.couple}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono">
                    {selectedFilm.chapter} • {selectedFilm.location}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedFilm(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Area: Lazy Loaded Responsive 16:9 YouTube Iframe */}
            <div className="relative aspect-video w-full bg-black">
              {selectedFilm.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedFilm.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={`${selectedFilm.title} - ${selectedFilm.couple} Wedding Film`}
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#14141a] to-[#08080a]">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-4 shadow-lg">
                    <PlayIcon className="w-7 h-7 fill-white ml-0.5" />
                  </div>
                  <h5 
                    className="text-xl sm:text-2xl font-normal text-white uppercase tracking-wider"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                  >
                    {selectedFilm.title}
                  </h5>
                  <p className="text-slate-300 text-sm mt-1 max-w-md">
                    JumpClicks Cinematic Wedding Film for {selectedFilm.couple} ({selectedFilm.location}).
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer Controls */}
            <div className="px-5 py-3.5 bg-black/80 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <Volume2 className="w-3.5 h-3.5 text-white/80" />
                <span className="text-white/90 font-semibold uppercase tracking-wider">
                  JumpClicks Wedding Cinema
                </span>
              </div>

              {/* Prev / Next Film Switcher */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevFilm}
                  className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3 h-3" />
                  <span>Prev Film</span>
                </button>
                <button
                  onClick={handleNextFilm}
                  className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Next Film</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
