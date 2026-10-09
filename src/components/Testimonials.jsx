import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { clientReviews } from '../data/contentData';

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#07090e] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>VERIFIED REPUTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved by Visionary Couples & Modern Brands
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Don’t just take our word for it. Here is why clients choose the Jumpclicks tech-enabled experience over traditional studios.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clientReviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel rounded-3xl p-7 border border-white/10 flex flex-col justify-between relative group hover:border-indigo-500/30 transition-all duration-300"
            >
              <div>
                {/* Rating stars & event tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {rev.tag}
                  </span>
                </div>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-indigo-400">
                    {rev.event}
                  </p>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  {rev.city}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
