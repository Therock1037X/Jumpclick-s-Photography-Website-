import React, { useState } from 'react';
import { 
  Camera, 
  Film, 
  Sparkles, 
  Layers, 
  Heart, 
  Zap, 
  Check, 
  ArrowRight, 
  Calculator,
  MessageCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { servicesData } from '../data/contentData';

const iconMap = {
  Camera: Camera,
  Film: Film,
  Sparkles: Sparkles,
  Layers: Layers,
  Heart: Heart,
  Zap: Zap,
};

export default function Services({ onNavigate, onSelectServicePackage }) {
  // Estimator State
  const [eventType, setEventType] = useState('wedding');
  const [coverageDays, setCoverageDays] = useState(2);
  const [needCinema, setNeedCinema] = useState(true);
  const [needDrone, setNeedDrone] = useState(true);
  const [needAiReels, setNeedAiReels] = useState(true);
  const [needFacePortal, setNeedFacePortal] = useState(true);

  // Dynamic cost calculation logic
  const baseRates = {
    wedding: 65000,
    prewedding: 35000,
    bridal: 25000,
    commercial: 45000,
    maternity: 20000,
    events: 25000,
  };

  const calculateEstimate = () => {
    let base = baseRates[eventType] || 35000;
    let daysMultiplier = coverageDays === 1 ? 1 : 1 + (coverageDays - 1) * 0.75;
    let total = base * daysMultiplier;

    if (needCinema) total += 25000 * coverageDays;
    if (needDrone) total += 12000 * coverageDays;
    if (needAiReels) total += 8000;
    if (needFacePortal) total += 6000;

    return Math.round(total / 1000) * 1000;
  };

  const handleBookEstimate = () => {
    const quoteText = `Hi Jumpclicks, I calculated an estimate of ₹${calculateEstimate().toLocaleString('en-IN')} for my ${eventType.toUpperCase()} shoot (${coverageDays} day(s), Cinema: ${needCinema ? 'Yes' : 'No'}, Drone: ${needDrone ? 'Yes' : 'No'}, AI Features: Yes). I would like to lock in this date!`;
    window.open(`https://wa.me/919172322302?text=${encodeURIComponent(quoteText)}`, '_blank');
  };

  return (
    <section id="services" className="relative py-28 bg-[#07090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-pink-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-SPECTRUM VISUAL VERTICALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cinematic Artistry. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400">
              Supercharged with Modern AI.
            </span>
          </h2>
          <p className="mt-5 text-slate-300 text-base sm:text-lg">
            Every service is backed by our signature 48-hour preview turnaround, 8K cinema optics, and private facial-recognition client cloud.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {servicesData.map((svc) => {
            const IconComponent = iconMap[svc.icon] || Camera;
            return (
              <div
                key={svc.id}
                className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between relative group border border-white/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600/30 to-pink-500/30 border border-indigo-500/30 flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-400 mt-1 mb-3">
                    {svc.tagline}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-white/5 mb-6">
                    {svc.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => {
                      onNavigate('gallery');
                    }}
                    className="text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    View Samples
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('contact');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>Inquire Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature: AI Shoot Price & Package Estimator */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Estimator Controls (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-2">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>TRANSPARENT AI CALCULATOR</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Estimate Your Production in Real-Time
                </h3>
                <p className="text-slate-300 text-sm mt-1">
                  No hidden fees, no delayed quotes. Select your parameters to simulate your customized investment.
                </p>
              </div>

              {/* Event Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  1. Production Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'wedding', label: 'Grand Wedding' },
                    { id: 'prewedding', label: 'Pre-Wedding' },
                    { id: 'commercial', label: 'Commercial / Brand' },
                    { id: 'bridal', label: 'Bridal Editorial' },
                    { id: 'maternity', label: 'Maternity & Baby' },
                    { id: 'events', label: 'Milestone Event' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setEventType(t.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer text-left border ${
                        eventType === t.id
                          ? 'bg-indigo-600/20 text-white border-indigo-500 shadow-md shadow-indigo-600/20'
                          : 'bg-white/5 text-slate-300 border-white/5 hover:bg-white/10'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Coverage Days */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  2. Duration / Coverage: <span className="text-indigo-400 font-bold">{coverageDays} Day(s)</span>
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((d) => (
                    <button
                      key={d}
                      onClick={() => setCoverageDays(d)}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                        coverageDays === d
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                          : 'bg-white/5 text-slate-400 border-white/5 hover:text-white'
                      }`}
                    >
                      {d} {d === 1 ? 'Day' : 'Days'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-on Deliverables Toggle */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  3. Production Modules & Add-ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                    <input
                      type="checkbox"
                      checked={needCinema}
                      onChange={(e) => setNeedCinema(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-black/40 border-white/20"
                    />
                    <div>
                      <span className="text-xs font-medium text-white block">8K Cinema Master Film</span>
                      <span className="text-[10px] text-slate-400">+₹25,000 / day</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                    <input
                      type="checkbox"
                      checked={needDrone}
                      onChange={(e) => setNeedDrone(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-black/40 border-white/20"
                    />
                    <div>
                      <span className="text-xs font-medium text-white block">4K HDR Drone Aerials</span>
                      <span className="text-[10px] text-slate-400">+₹12,000 / day</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                    <input
                      type="checkbox"
                      checked={needAiReels}
                      onChange={(e) => setNeedAiReels(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-black/40 border-white/20"
                    />
                    <div>
                      <span className="text-xs font-medium text-white block">48h Express AI Teaser Reel</span>
                      <span className="text-[10px] text-slate-400">+₹8,000 (Express SLA)</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                    <input
                      type="checkbox"
                      checked={needFacePortal}
                      onChange={(e) => setNeedFacePortal(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-black/40 border-white/20"
                    />
                    <div>
                      <span className="text-xs font-medium text-white block">Guest Facial Recognition Portal</span>
                      <span className="text-[10px] text-slate-400">+₹6,000 (Venue QR QR Stand)</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Live Estimate Card (Right 5 Cols) */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-b from-[#111728] to-[#0c101d] rounded-2xl p-6 sm:p-8 border border-indigo-500/30 shadow-2xl relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                    ESTIMATED INVESTMENT
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Transparent SLA
                  </span>
                </div>

                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  ₹{calculateEstimate().toLocaleString('en-IN')}
                  <span className="text-xs font-normal text-slate-400 block mt-1">
                    *Approximate estimate. Custom destination travel quoted separately.
                  </span>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Coverage Duration:</span>
                    <span className="font-semibold text-white">{coverageDays} Day(s)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Lead Cameras:</span>
                    <span className="font-semibold text-white">Cinema Master Prime Rigs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Color Grading:</span>
                    <span className="font-semibold text-indigo-300">Proprietary Neural DCI-P3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Turnaround Time:</span>
                    <span className="font-semibold text-pink-400">48h Express AI Preview</span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <button
                    onClick={handleBookEstimate}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Lock In Estimate on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-colors cursor-pointer"
                  >
                    Or Send Formal Booking Inquiry
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
