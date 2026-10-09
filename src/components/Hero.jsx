import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-[#000000]">
      {/* Deep Crimson Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[350px] bg-[#df2531]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Studio Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#df2531]/10 border border-[#df2531]/30 backdrop-blur-md text-xs font-semibold text-[#df2531]">
            <span className="w-2 h-2 rounded-full bg-[#df2531] animate-pulse" />
            <span>Founded in 2020 • Jumpclicks Photography Studio</span>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
            Capturing Life's Most <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ff6b75] to-[#df2531] font-serif italic font-normal">
              Timeless Moments
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Welcome to <strong className="text-white">Jumpclicks Photography</strong>. We tell genuine, emotional stories through natural candid moments, artistic lighting, and cinematic visual craft.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#df2531] hover:bg-[#b81b25] text-white font-bold text-sm shadow-xl shadow-[#df2531]/30 transition-all cursor-pointer group"
            >
              <span>Explore Gallery (180+ Photos)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 hover:border-[#df2531]/40 backdrop-blur-md transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#df2531]" />
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>

        {/* Centerpiece Hero Image: Silhouette Wedding Masterpiece (Pure Photography, Zero Text) */}
        <div className="max-w-5xl mx-auto mt-4">
          <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#000000]">
            <img
              src="/images/hero-silhouette.webp"
              alt="Jumpclicks Photography Featured Moment"
              className="w-full h-auto object-contain block mx-auto"
            />
          </div>
        </div>

        {/* Studio Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              1,200<span className="text-[#df2531]">+</span>
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
              25<span className="text-[#df2531]">+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-wider font-medium">
              Destinations Covered
            </p>
          </div>

          <div className="text-center">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              5<span className="text-[#df2531]">★</span>
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
