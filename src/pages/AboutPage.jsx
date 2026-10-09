import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Heart, Users, Award, ShieldCheck, Check, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { clientReviews } from '../data/contentData';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-[#000000] text-white">
      
      {/* Page Header */}
      <section className="py-16 bg-[#000000] border-none relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#df2531]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#df2531]/10 text-[#df2531] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#df2531]/30">
            <Camera className="w-3.5 h-3.5" />
            <span>ESTABLISHED IN 2020</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            About Jumpclicks Photography
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A collective of passionate photographers and cinematographers based in India, dedicated to capturing life’s most genuine, heartfelt moments.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-[#df2531] uppercase tracking-widest font-semibold">
                OUR GENESIS // 2020
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Born From a Deep Love for Authentic Human Emotion
              </h2>
              <p className="text-slate-300 leading-relaxed">
                When <strong className="text-white">Jumpclicks Photography</strong> was founded in 2020, our goal was clear: to move away from stiff, generic studio posing and capture real, spontaneous moments. The stolen glances between a bride and groom, the emotional tears of parents during the vidaai, and the innocent laughter of newborns.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Over the past 5+ years, we have had the honor of documenting over 1,200 unique celebrations across 25+ cities in India, including Nagpur, Mumbai, Pune, Udaipur, Goa, and Delhi NCR.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#df2531] hover:bg-[#b81b25] text-white font-bold text-sm shadow-lg shadow-[#df2531]/25 transition-all"
                >
                  <span>Book a Shoot With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0c0c0f]">
                {/* Natural Aspect Ratio Image */}
                <img
                  src="/gallery/web/wedding/wedding_4.webp"
                  alt="Jumpclicks Photography Moment"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>

          </div>

          {/* 4 Pillars of Our Approach */}
          <div className="mt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                How We Approach Every Shoot
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Our core values ensure you feel relaxed, valued, and completely yourselves.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#0c0c0f] border border-white/10 hover:border-[#df2531]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#df2531]/10 text-[#df2531] flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Unposed Candids</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We capture moments as they unfold naturally, without staging every smile or interrupting your rituals.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0c0c0f] border border-white/10 hover:border-[#df2531]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#df2531]/10 text-[#df2531] flex items-center justify-center mb-4">
                  <Camera className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Cinema-Grade Gear</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sony FX cinema cameras, prime master lenses, and 4K HDR drones to capture true colors and detail.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0c0c0f] border border-white/10 hover:border-[#df2531]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#df2531]/10 text-[#df2531] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Patient & Respectful</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Courteous with elders, gentle with toddlers, and fun with couples to create a relaxed experience.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0c0c0f] border border-white/10 hover:border-[#df2531]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#df2531]/10 text-[#df2531] flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Quality & Timeliness</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Quick sneak-peeks and meticulously color-corrected albums delivered on time as promised.
                </p>
              </div>
            </div>
          </div>

          {/* Studio Stats Summary */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20 p-8 rounded-3xl bg-[#0c0c0f] border border-white/10 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">1,200+</div>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Events Covered</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">2020</div>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Established Year</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">25+</div>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Cities Covered</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">100%</div>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Client Dedication</p>
            </div>
          </div>

        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-[#070709] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              What Our Clients Say
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Kind words from families and couples whose memories we preserved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-3xl bg-[#0c0c0f] border border-white/10 flex flex-col justify-between"
              >
                <p className="text-slate-200 text-sm leading-relaxed italic mb-4">
                  "{rev.quote}"
                </p>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{rev.name}</span>
                    <span className="text-[#df2531] font-semibold">{rev.event}</span>
                  </div>
                  <span className="text-slate-500">{rev.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Book CTA */}
      <section className="py-16 bg-gradient-to-r from-[#210609] via-[#0d0d10] to-[#170508] border-t border-[#df2531]/30 text-center shadow-2xl">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Let Us Tell Your Story
          </h2>
          <p className="text-slate-300 text-sm mb-6">
            Get in touch to check date availability or discuss your upcoming celebration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#df2531] hover:bg-[#b81b25] text-white font-bold text-sm shadow-lg shadow-[#df2531]/25"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919172322302"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
