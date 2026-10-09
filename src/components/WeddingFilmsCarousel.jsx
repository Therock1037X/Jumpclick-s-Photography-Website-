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

  // Mouse & Touch drag-to-scroll state & refs
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

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
    if (!carouselRef.current || isResettingRef.current || isDraggingRef.current) return;
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
    if (!carouselRef.current || isDraggingRef.current) return;
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
    if (isPaused || selectedFilm || reducedMotion || isDragging) return;

    const timer = setInterval(() => {
      scrollOneCard('right');
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, selectedFilm, reducedMotion, isDragging, scrollOneCard]);

  // Navigate between films inside modal
  const handlePrevFilm = useCallback(() => {
    if (!selectedFilm) return;
    const currentIndex = weddingFilmsData.findIndex(f => f.id === selectedFilm.id);
    const prevIndex = (currentIndex - 1 + weddingFilmsData.length) % weddingFilmsData.length;
    setSelectedFilm(weddingFilmsData[prevIndex]);
  }, [selectedFilm]);

  const handleNextFilm = useCallback(() => {
    if (!selectedFilm) return;
    const currentIndex = weddingFilmsData.findIndex(f => f.id === selectedFilm.id);
    const nextIndex = (currentIndex + 1) % weddingFilmsData.length;
    setSelectedFilm(weddingFilmsData[nextIndex]);
  }, [selectedFilm]);

  // Close modal on escape key, arrow keys navigation & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedFilm(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrevFilm();
      } else if (e.key === 'ArrowRight') {
        handleNextFilm();
      }
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
  }, [selectedFilm, handlePrevFilm, handleNextFilm]);

  // Finish drag with smooth momentum snap to nearest card
  const finishDrag = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.querySelector('.film-card');
      const cardWidth = card ? card.getBoundingClientRect().width : 300;
      const gap = window.innerWidth >= 1024 ? 24 : window.innerWidth >= 640 ? 20 : 16;
      const cardStep = cardWidth + gap;

      const v = velocityRef.current;
      let target = container.scrollLeft;

      // If flicked with speed, push in flick direction
      if (Math.abs(v) > 0.3) {
        target -= v * 220;
      }

      // Snap neatly to nearest card boundary
      const nearestIdx = Math.round(target / cardStep);
      const snapScroll = nearestIdx * cardStep;

      container.scrollTo({
        left: snapScroll,
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      setIsPaused(false);
    }, 1200);
  }, []);

  // Global mousemove and mouseup listeners for seamless dragging outside container
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!isDraggingRef.current || !carouselRef.current) return;
      const x = e.clientX;
      const dx = x - startXRef.current;
      if (Math.abs(dx) > 4) {
        hasDraggedRef.current = true;
      }
      const now = Date.now();
      const dt = now - lastTimeRef.current;
      if (dt > 10) {
        velocityRef.current = (x - lastXRef.current) / dt;
        lastXRef.current = x;
        lastTimeRef.current = now;
      }
      carouselRef.current.scrollLeft = scrollLeftRef.current - dx;
    };

    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        finishDrag();
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [finishDrag]);

  // Mouse Drag Initiation
  const handleMouseDown = (e) => {
    if (!carouselRef.current || e.button !== 0) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
    hasDraggedRef.current = false;
    lastXRef.current = e.clientX;
    lastTimeRef.current = Date.now();
    velocityRef.current = 0;
    setIsDragging(true);
    setIsPaused(true);
  };

  // Touch Drag Handlers
  const handleTouchStart = (e) => {
    if (!carouselRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].clientX;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
    hasDraggedRef.current = false;
    lastXRef.current = e.touches[0].clientX;
    lastTimeRef.current = Date.now();
    velocityRef.current = 0;
    setIsDragging(true);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    const x = e.touches[0].clientX;
    const dx = x - startXRef.current;
    if (Math.abs(dx) > 4) {
      hasDraggedRef.current = true;
    }
    const now = Date.now();
    const dt = now - lastTimeRef.current;
    if (dt > 10) {
      velocityRef.current = (x - lastXRef.current) / dt;
      lastXRef.current = x;
      lastTimeRef.current = now;
    }
    carouselRef.current.scrollLeft = scrollLeftRef.current - dx;
  };

  const handleTouchEnd = () => {
    finishDrag();
  };

  return (
    <section 
      className="relative w-full bg-[#000000] text-white py-12 sm:py-14 md:py-16 overflow-hidden select-none border-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (!isDraggingRef.current) setIsPaused(false);
      }}
    >
      
      {/* 1. Header Section (Matches User Reference Typography) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-10 select-none">
        <h2 
          className="text-xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-white uppercase tracking-[0.14em] sm:tracking-[0.25em] md:tracking-[0.3em] leading-tight"
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
      <div className="relative max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 select-none">
        
        {/* Left Circular Arrow Button (Hidden on touch mobile to prevent covering posters, visible sm+) */}
        <button
          onClick={() => scrollOneCard('left')}
          onMouseDown={(e) => e.preventDefault()}
          className="hidden sm:flex absolute left-2 sm:left-4 lg:left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-900 hover:bg-slate-200 shadow-2xl items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 opacity-90 hover:opacity-100 border border-black/10 select-none caret-transparent"
          aria-label="Previous wedding film"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Right Circular Arrow Button (Hidden on touch mobile to prevent covering posters, visible sm+) */}
        <button
          onClick={() => scrollOneCard('right')}
          onMouseDown={(e) => e.preventDefault()}
          className="hidden sm:flex absolute right-2 sm:right-4 lg:right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-900 hover:bg-slate-200 shadow-2xl items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 opacity-90 hover:opacity-100 border border-black/10 select-none caret-transparent"
          aria-label="Next wedding film"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Horizontal Infinite Scrolling Track with Butter-Smooth Drag & Inertial Snap */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scrollbar-hide py-3 px-1 select-none will-change-scroll ${
            isDragging ? 'snap-none cursor-grabbing' : 'snap-x snap-mandatory cursor-grab'
          }`}
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: isDragging ? 'auto' : 'smooth',
          }}
        >
          {displayFilms.map((film, index) => (
            <div
              key={`${film.id}-${index}`}
              onClick={() => {
                if (!hasDraggedRef.current) setSelectedFilm(film);
              }}
              className="film-card snap-center sm:snap-start flex-shrink-0 w-[72%] sm:w-[47%] md:w-[31%] lg:w-[calc(25%-18px)] group relative aspect-[9/16] rounded-none overflow-hidden bg-[#0e0e12] border border-white/10 hover:border-white/25 transition-colors duration-500 shadow-2xl shadow-black select-none"
              style={{ aspectRatio: '9 / 16' }}
            >
              {/* Poster Image (object-cover without distortion, subtle enlargement on hover) */}
              <img
                src={film.poster}
                alt={`${film.title} - ${film.couple}`}
                draggable="false"
                className={`w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] select-none pointer-events-none ${
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

      {/* 3. YouTube Cinematic Video Modal Screening Room */}
      {selectedFilm && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-8 animate-in fade-in duration-300 select-none"
          onClick={() => setSelectedFilm(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedFilm.title} - ${selectedFilm.couple} Wedding Film`}
        >
          <div 
            className="relative w-full max-w-5xl xl:max-w-6xl bg-[#09090b] rounded-none overflow-hidden border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Slim Cinematic Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 border-b border-white/10 bg-black/90 flex-shrink-0">
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 pr-3">
                {/* Film Icon in sharp rectangular frame */}
                <div className="w-8 h-8 rounded-none bg-white/5 border border-white/15 flex items-center justify-center text-white/90 flex-shrink-0">
                  <Film className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div className="min-w-0">
                  <h4 
                    className="text-sm sm:text-base md:text-lg font-normal text-white uppercase tracking-[0.18em] truncate leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                  >
                    {selectedFilm.title} — {selectedFilm.couple}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-neutral-400 font-mono tracking-wider truncate mt-0.5">
                    {selectedFilm.chapter} • {selectedFilm.location}
                  </p>
                </div>
              </div>

              {/* Close Button on the right with sharp rectangular styling */}
              <button
                onClick={() => setSelectedFilm(null)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-none bg-white/5 hover:bg-white/15 active:bg-white/25 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer flex-shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                aria-label="Close cinematic video player"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
              </button>
            </div>

            {/* Video Player Area: Lazy Loaded Responsive 16:9 YouTube Iframe */}
            <div className="relative aspect-video w-full bg-black flex-1 min-h-0">
              {selectedFilm.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedFilm.youtubeId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
                  title={`${selectedFilm.title} - ${selectedFilm.couple} Wedding Film`}
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#14141a] to-[#08080a]">
                  <div className="w-14 h-14 rounded-none bg-white/5 border border-white/15 flex items-center justify-center text-white mb-3 shadow-lg">
                    <PlayIcon className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                  <h5 
                    className="text-lg sm:text-xl font-normal text-white uppercase tracking-wider"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                  >
                    {selectedFilm.title}
                  </h5>
                  <p className="text-neutral-400 text-xs mt-1 max-w-md">
                    JumpClicks Cinematic Wedding Film for {selectedFilm.couple} ({selectedFilm.location}).
                  </p>
                </div>
              )}
            </div>

            {/* Slim Custom Player Footer */}
            <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-black/95 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 flex-shrink-0">
              <div className="flex items-center gap-2 text-neutral-400">
                <Volume2 className="w-3.5 h-3.5 text-neutral-400" />
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-300 font-mono">
                  JUMPCLICKS WEDDING CINEMA
                </span>
              </div>

              {/* Functional Prev / Next Film Switcher */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevFilm}
                  className="px-3 sm:px-3.5 py-1.5 rounded-none bg-white/5 hover:bg-white/15 active:bg-white/20 border border-white/15 hover:border-white/30 text-white text-[10px] sm:text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  aria-label="Previous wedding film"
                >
                  <ChevronLeft className="w-3.5 h-3.5 stroke-[2]" />
                  <span>Prev Film</span>
                </button>
                <button
                  onClick={handleNextFilm}
                  className="px-3 sm:px-3.5 py-1.5 rounded-none bg-white/5 hover:bg-white/15 active:bg-white/20 border border-white/15 hover:border-white/30 text-white text-[10px] sm:text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  aria-label="Next wedding film"
                >
                  <span>Next Film</span>
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
