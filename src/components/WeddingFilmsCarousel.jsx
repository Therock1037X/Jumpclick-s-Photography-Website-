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
  const isResettingRef = useRef(false);

  // Tripled dataset to support butter-smooth infinite looping in both directions
  const displayFilms = [...weddingFilmsData, ...weddingFilmsData, ...weddingFilmsData];

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

  // Smooth scroll handler for circular arrows
  const scroll = (direction) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = container.clientWidth / (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1.25);
      const scrollAmount = cardWidth * 1.5;

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
    <section className="relative w-full bg-[#000000] text-white py-20 sm:py-24 md:py-28 overflow-hidden select-none border-none">
      
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
        
        {/* Left Circular Arrow Button (Always Active in Infinite Loop) */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 sm:left-4 lg:left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-900 hover:bg-[#df2531] hover:text-white shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 opacity-90 hover:opacity-100"
          aria-label="Previous wedding films (infinite loop)"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Right Circular Arrow Button (Always Active in Infinite Loop) */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 sm:right-4 lg:right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-900 hover:bg-[#df2531] hover:text-white shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 opacity-90 hover:opacity-100"
          aria-label="Next wedding films (infinite loop)"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Horizontal Infinite Scrolling Track (4 cards visible on desktop) */}
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
              className="snap-start flex-shrink-0 w-[82%] sm:w-[47%] md:w-[31%] lg:w-[calc(25%-18px)] group relative aspect-[9/14.5] rounded-xl overflow-hidden cursor-pointer bg-[#0e0e12] border border-white/10 hover:border-[#df2531]/70 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#df2531]/20 hover:-translate-y-1.5"
            >
              {/* Poster Image */}
              <img
                src={film.poster}
                alt={`${film.title} - ${film.couple}`}
                className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
                  film.styleVariant === 'monochrome' ? 'grayscale contrast-125' : ''
                }`}
                loading="lazy"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/25 transition-opacity duration-300" />

              {/* Poster Artwork Overlay (Matches Reference Aesthetic) */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white z-10">
                
                {/* Top Badge & Tag */}
                <div className="flex items-center justify-between text-[10px] tracking-[0.22em] uppercase font-mono text-white/80">
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                    {film.badge}
                  </span>
                  <span className="font-semibold text-white/90">
                    {film.duration}
                  </span>
                </div>

                {/* Center: Glowing Glassmorphic Play Button */}
                <div className="my-auto flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/30 group-hover:border-[#df2531] group-hover:bg-[#df2531] text-white flex items-center justify-center transition-all duration-300 shadow-2xl group-hover:scale-110">
                    <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5 drop-shadow" />
                  </div>
                </div>

                {/* Bottom Poster Title & Credits */}
                <div className="space-y-1 text-center">
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
                        className="text-2xl sm:text-3xl font-black tracking-tight text-[#df2531] uppercase leading-tight drop-shadow"
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

                  {/* Watch Film CTA On Hover */}
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#df2531]">
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
                <div className="w-8 h-8 rounded-lg bg-[#df2531]/20 border border-[#df2531]/40 flex items-center justify-center text-[#df2531]">
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
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#df2531] text-white flex items-center justify-center transition-colors cursor-pointer"
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
                  <div className="w-16 h-16 rounded-full bg-[#df2531]/20 border border-[#df2531]/40 flex items-center justify-center text-[#df2531] mb-4 shadow-lg shadow-[#df2531]/20">
                    <PlayIcon className="w-7 h-7 fill-[#df2531] ml-0.5" />
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
                <Volume2 className="w-3.5 h-3.5 text-[#df2531]" />
                <span className="text-[#df2531] font-semibold uppercase tracking-wider">
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
