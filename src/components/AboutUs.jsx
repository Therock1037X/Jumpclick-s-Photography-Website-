import React from 'react';
import { Camera, Heart, Check, Users, Sparkles, Award, ArrowRight } from 'lucide-react';

export default function AboutUs({ onNavigate }) {
  return (
    <section id="about" className="relative py-24 bg-[#090b13] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-amber-300 mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>OUR STORY & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Behind the Lens at <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-100 font-serif italic">
              Jumpclicks Photography
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Founded in 2020, we are a close-knit collective of photographers and cinematographers dedicated to telling genuine, heartfelt visual stories.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-xs font-mono text-amber-300">
              EST. 2020 // PASSION DRIVEN
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Every Photograph Tells an Unrepeatable Story
            </h3>
            
            <p className="text-slate-300 leading-relaxed">
              When we started <strong className="text-white">Jumpclicks Photography in 2020</strong>, our vision was simple: move away from rigid, unnatural poses and focus on authentic emotions—the quiet glances, joyful laughter, unscripted tears, and genuine warmth of Indian families.
            </p>
            
            <p className="text-slate-300 leading-relaxed">
              Whether documenting a grand multi-day royal wedding, an intimate pre-wedding sunrise session, or a tender baby milestone, our team combines technical mastery with deep human empathy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                  <Heart className="w-4 h-4 text-amber-400" />
                  <span>Unobtrusive Candids</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We blend into your celebrations seamlessly, allowing you and your loved ones to enjoy every moment without feeling staged.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                  <Camera className="w-4 h-4 text-amber-400" />
                  <span>Top-Tier Equipment</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Equipped with Sony full-frame cinema cameras, high-aperture prime glass, and professional lighting for rich, natural skin tones.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Caring & Patient Team</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Gentle with babies, respectful with elders, and encouraging with camera-shy couples to bring out your natural beauty.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Timely Deliverables</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Clear timelines, quick sneak-peeks, and beautifully curated high-resolution digital albums and heirloom print books.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg shadow-amber-400/20 transition-all cursor-pointer"
              >
                <span>Book Your Session With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 p-2">
                <img 
                  src="/gallery/web/wedding/wedding_3.webp" 
                  alt="Jumpclicks Photography Moments" 
                  className="w-full h-[460px] object-cover rounded-2xl"
                />
                
                <div className="absolute top-6 left-6 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-400/20 text-amber-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Inception</div>
                    <div className="text-sm font-extrabold text-white">Year 2020</div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-rose-500/20 text-rose-300">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Satisfied Clients</div>
                    <div className="text-sm font-extrabold text-white">1,200+ Shoots</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
