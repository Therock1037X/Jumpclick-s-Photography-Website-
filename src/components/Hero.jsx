import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Camera, Award, MapPin, Heart, Calendar } from 'lucide-react';

export default function Hero({ onNavigate }) {
  // Curated hero showcase photographs from real Jumpclicks archive
  const heroImages = [
    {
      src: '/gallery/web/wedding/wedding_1.webp',
      title: 'Grand Wedding Celebration',
      category: 'Weddings',
    },
    {
      src: '/gallery/web/prewedding/prewedding_1.webp',
      title: 'Romantic Pre-Wedding Chronicle',
      category: 'Pre-Wedding',
    },
    {
      src: '/gallery/web/bridal/bridal_1.webp',
      title: 'Royal Bridal Portrait',
      category: 'Bridal Editorial',
    },
    {
      src: '/gallery/web/engagement/engagement_1.webp',
      title: 'Intimate Ring Ceremony',
      category: 'Engagements',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Studio Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-slate-300">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Founded in 2020 • Professional Photography Studio</span>
          </div>
        </div>

        {/* Hero Headline & Intro */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
            Capturing Life's Most <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-100 font-serif italic font-normal">
              Timeless Moments
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Welcome to <strong className="text-white">Jumpclicks Photography</strong>. We tell genuine, emotional stories through natural candid moments, artistic lighting, and cinematic visual craft.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-sm shadow-xl hover:bg-slate-200 transition-all cursor-pointer group"
            >
              <span>Explore Gallery (180+ Photos)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 backdrop-blur-md transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>

        {/* Curated Visual Showcase Banner */}
        <div className="max-w-5xl mx-auto mt-4">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950 aspect-[16/9] sm:aspect-[21/9]">
            {heroImages.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  activeSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                {/* Bottom photo info */}
                <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-white/10 inline-block mb-1.5">
                      {img.category}
                    </span>
                    <h3 className="text-base sm:text-xl font-bold">
                      {img.title}
                    </h3>
                  </div>

                  {/* Indicator dots */}
                  <div className="flex gap-2">
                    {heroImages.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setActiveSlide(dotIdx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          activeSlide === dotIdx ? 'w-6 bg-white' : 'w-2 bg-white/40'
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              1,200<span className="text-amber-400">+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-wider font-medium">
              Shoots Delivered
            </p>
          </div>

          <div className="text-center">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              2020
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-wider font-medium">
              Established Year
            </p>
          </div>

          <div className="text-center">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              25<span className="text-amber-400">+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-wider font-medium">
              Destinations Covered
            </p>
          </div>

          <div className="text-center">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              5<span className="text-amber-400">★</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-wider font-medium">
              Top Rated by Clients
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
