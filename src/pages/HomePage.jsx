import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, MessageCircle, Camera, Film, Compass, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import IntimateWeddingShowcase from '../components/IntimateWeddingShowcase';
import WeddingFilmsCarousel from '../components/WeddingFilmsCarousel';
import InstagramFeed from '../components/InstagramFeed';
import { socialConfig } from '../data/contentData';

// Image-Led Editorial Photography Services
const editorialServices = [
  {
    id: 'weddings',
    number: '01',
    badge: 'SIGNATURE SERVICE',
    title: 'Wedding & Reception Photography',
    description: 'Complete celebration coverage capturing authentic rituals, raw emotions, and candid moments with timeless cinematic elegance.',
    image: '/gallery/web/wedding/wedding_17.webp',
  },
  {
    id: 'prewedding',
    number: '02',
    badge: 'MOST POPULAR',
    title: 'Pre-Wedding & Couple Shoots',
    description: 'Intimate, unscripted couple sessions framed by breathtaking scenic light, historic venues, and creative direction.',
    image: '/gallery/web/prewedding/prewedding_14.webp',
  },
  {
    id: 'bridal',
    number: '03',
    badge: 'FINE ART PORTRAITURE',
    title: 'Bridal & Groom Portraits',
    description: 'Editorial solo portraiture celebrating the heirloom details of your wedding attire, jewelry, royal poise, and intimate beauty.',
    image: '/gallery/web/bridal/bridal_11.webp',
  },
];

// Verifiable Business Pillars & Strengths
const whyChoosePillars = [
  {
    id: 'candid',
    badge: '01 / CANDID STORYTELLING',
    title: 'Unobtrusive Documentary Storytelling',
    subtitle: 'Real Emotions • Unposed Rituals',
    description: 'We blend seamlessly into your celebrations, capturing spontaneous tears, laughter, and sacred ritual nuances without awkward staging or disruptive interruptions.',
    icon: Camera,
  },
  {
    id: 'cinema',
    badge: '02 / CINEMATIC CRAFT',
    title: 'Bespoke 4K Wedding Films',
    subtitle: 'Cinema Lenses • Natural Audio Design',
    description: 'Tailor-made wedding films crafted with cinema-grade lenses, rich natural soundscapes, and bespoke color grading that feels like an editorial feature film.',
    icon: Film,
  },
  {
    id: 'destination',
    badge: '03 / NATIONWIDE REACH',
    title: 'Pan-India Destination Coverage',
    subtitle: 'Heritage Palaces • Coastal Celebrations',
    description: 'Experienced multi-camera crews equipped to travel anywhere in India—from heritage palace weddings in Rajasthan to coastal Goa celebrations.',
    icon: Compass,
  },
  {
    id: 'archival',
    badge: '04 / TIMELESS PRESERVATION',
    title: 'Archival Heirloom Deliverables',
    subtitle: 'Handcrafted Albums • 4K Digital Vault',
    description: 'Enduring preservation through handcrafted flush-mount heirloom albums, private high-resolution online galleries, and rapid sneak-peek previews.',
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  const [pillarIndex, setPillarIndex] = useState(0);

  const prevPillar = () => {
    setPillarIndex((prev) => (prev - 1 + whyChoosePillars.length) % whyChoosePillars.length);
  };

  const nextPillar = () => {
    setPillarIndex((prev) => (prev + 1) % whyChoosePillars.length);
  };

  return (
    <div className="bg-[#000000] text-white">
      {/* 100vh Full-Bleed KnotsbyAMP Style Hero */}
      <Hero />

      {/* Editorial Intimate Wedding Showcase (Matches User Reference) */}
      <IntimateWeddingShowcase />

      {/* Cinematic Wedding Films Carousel (Matches User Reference) */}
      <WeddingFilmsCarousel />

      {/* 1. Photography Services — Image-Led Editorial Design */}
      <section className="py-20 sm:py-24 bg-[#000000] border-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#df2531] font-semibold block mb-2 font-mono">
              OUR EXPERTISE
            </span>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-white uppercase tracking-[0.15em] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
            >
              Photography & Cinema Services
            </h2>
            <p 
              className="mt-3 text-xs sm:text-sm text-neutral-400 italic max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
            >
              Tailored visual coverage for weddings, pre-weddings, and fine-art portraits across India.
            </p>
          </div>

          {/* 3 Visually Rich Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {editorialServices.map((svc) => (
              <Link
                key={svc.id}
                to="/services"
                className="group relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] rounded-none overflow-hidden bg-[#0c0c10] border border-white/10 hover:border-white/30 transition-all duration-500 shadow-2xl flex flex-col justify-between p-6 sm:p-8 cursor-pointer"
              >
                {/* Background Image with subtle zoom on hover */}
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle Dark Gradient & Hover Veil for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/25 pointer-events-none z-0" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500 pointer-events-none z-0" />

                {/* Card Top: Number & Category Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/80 bg-black/60 px-2.5 py-1 border border-white/15 backdrop-blur-md">
                    {svc.badge}
                  </span>
                  <span className="text-[11px] font-mono tracking-widest text-white/50">
                    {svc.number}
                  </span>
                </div>

                {/* Card Bottom: Typography & CTA */}
                <div className="relative z-10 space-y-2">
                  <h3 
                    className="text-2xl sm:text-[1.75rem] font-normal text-white uppercase tracking-wider leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-2">
                    {svc.description}
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-white/90 group-hover:text-[#df2531] transition-colors">
                      <span>Explore Services</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Working View All Services Link */}
          <div className="text-center mt-12 sm:mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-none bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Client Stories / Why Choose JumpClicks — Refined Compact Carousel */}
      <section className="py-20 sm:py-24 bg-[#050507] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-12 sm:mb-14 gap-4 text-center sm:text-left">
            <div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#df2531] font-semibold block mb-2 font-mono">
                OUR COMMITMENT
              </span>
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-normal text-white uppercase tracking-[0.15em] leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                Why Choose JumpClicks
              </h2>
              <p 
                className="mt-2 text-xs sm:text-sm text-neutral-400 italic max-w-xl leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                Stories of craft, authenticity, and enduring memories captured across India.
              </p>
            </div>

            {/* Understated Carousel Navigation Controls */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={prevPillar}
                className="w-10 h-10 rounded-none bg-white/5 hover:bg-white/15 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous core strength"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
              </button>
              <button
                onClick={nextPillar}
                className="w-10 h-10 rounded-none bg-white/5 hover:bg-white/15 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next core strength"
              >
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </div>

          {/* Compact 1-2 Card Display with Understated Typography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              whyChoosePillars[pillarIndex % whyChoosePillars.length],
              whyChoosePillars[(pillarIndex + 1) % whyChoosePillars.length],
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={`${pillar.id}-${idx}`}
                  className={`p-8 sm:p-10 bg-[#09090c] border border-white/10 hover:border-white/20 transition-all duration-300 flex-col justify-between rounded-none shadow-xl ${
                    idx === 1 ? 'hidden md:flex' : 'flex'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#df2531]">
                        {pillar.badge}
                      </span>
                      <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
                        <IconComp className="w-4 h-4 stroke-[1.5]" />
                      </div>
                    </div>

                    <h3 
                      className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-wider mb-2 leading-snug"
                      style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase mb-5">
                      {pillar.subtitle}
                    </p>

                    <p className="text-sm text-neutral-300 font-light leading-relaxed">
                      "{pillar.description}"
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    <span>JumpClicks Cinematography</span>
                    <span className="text-[#df2531]/80">Verified Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Understated Carousel Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {whyChoosePillars.map((_, i) => (
              <button
                key={i}
                onClick={() => setPillarIndex(i)}
                className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                  pillarIndex === i ? 'w-8 bg-[#df2531]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Jump to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Instagram-Style Photography Feed (Inspired by User Reference) */}
      <InstagramFeed 
        handle={socialConfig.instagramHandle} 
        profileUrl={socialConfig.instagramUrl} 
      />

      {/* Final Booking CTA Banner — Positioned at the very end with earlier signature crimson gradient */}
      <section className="py-20 bg-gradient-to-r from-[#2a060a] via-[#0d0d10] to-[#1c0508] border-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 
            className="text-3xl sm:text-5xl font-normal text-white"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            Let’s Create Timeless Memories Together
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Contact us today to check our availability for your date and discuss customized packages.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#df2531] hover:bg-[#b81b25] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#df2531]/30 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Shoot</span>
            </Link>
            <a
              href="https://wa.me/919172322302?text=Hi%20Jumpclicks%20team,%20I'd%20like%20to%20check%20availability%20for%20a%20shoot."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

