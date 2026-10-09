import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Sliders, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Camera, 
  ChevronRight,
  Flame
} from 'lucide-react';

export default function Hero({ onNavigate }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Startup Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 backdrop-blur-md shadow-inner text-xs font-semibold text-indigo-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wide">Pioneering Tech-Enabled Photography Since 2020</span>
            <span className="text-slate-500">•</span>
            <span className="text-pink-400 font-bold flex items-center gap-1">
              <Flame className="w-3 h-3 text-pink-400" />
              Not Just Another Studio
            </span>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            THE NEW CODE OF <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-500">
              VISUAL STORYTELLING
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Where cinema-grade optics meet artificial intelligence. We replace outdated wedding and event photography chaos with 
            <span className="text-white font-semibold"> 8K Sony cinema gear</span>, 
            <span className="text-indigo-300 font-semibold"> proprietary neural color science</span>, and 
            <span className="text-pink-400 font-semibold"> 48-hour delivery</span>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-pink-600 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all cursor-pointer group"
            >
              <span>Explore 180+ Works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 backdrop-blur-md hover:border-indigo-400/40 transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>AI Shoot Price Estimator</span>
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-2xl text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              <span>Why Jumpclicks?</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Interactive AI Technology Showcase (Interactive Color Grade Comparison) */}
        <div className="max-w-5xl mx-auto mt-6">
          <div className="glass-panel rounded-3xl p-3 sm:p-5 shadow-2xl relative overflow-hidden">
            
            {/* Showcase Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10 px-2">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400 tracking-wider">
                  JUMPCLICKS_NEURAL_PIPELINE // LIVE COLOR CALIBRATION
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                <span>Drag slider to compare: Raw Sensor vs. AI Neural Grade</span>
              </div>
            </div>

            {/* Split Screen Slider Container */}
            <div 
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden mt-3 cursor-ew-resize select-none border border-white/10 group shadow-2xl"
              onMouseMove={handleSliderMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (AI Neural Color Master) */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="/gallery/web/wedding/wedding_1.webp" 
                  alt="Jumpclicks AI Color Grade" 
                  className="w-full h-full object-cover filter contrast-[1.08] saturate-[1.15]"
                />
                <div className="absolute top-4 right-4 bg-indigo-950/80 backdrop-blur-md text-indigo-200 border border-indigo-500/30 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span>Jumpclicks Neural Grade</span>
                </div>
              </div>

              {/* Before Image (Flat Standard Raw) with dynamic clip path */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative w-full h-full" style={{ width: '100%', minWidth: '100%' }}>
                  <img 
                    src="/gallery/web/wedding/wedding_1.webp" 
                    alt="Standard Raw Sensor" 
                    className="absolute inset-0 w-full h-full object-cover filter grayscale-[25%] contrast-[0.88] brightness-[0.92] sepia-[10%]"
                    style={{ 
                      width: '100vw',
                      maxWidth: 'none',
                      left: 0
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-slate-300 border border-white/10 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                    Traditional Camera Raw
                  </div>
                </div>
              </div>

              {/* Divider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl border-2 border-indigo-600">
                  <Sliders className="w-4 h-4 text-indigo-700" />
                </div>
              </div>

              {/* Bottom live telemetry tag */}
              <div className="absolute bottom-4 left-4 z-20 hidden sm:flex items-center gap-3 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-slate-300">
                <span className="text-emerald-400 font-bold">● SONY FX6 MASTER</span>
                <span className="text-slate-500">|</span>
                <span>DCI-P3 GAMUT</span>
                <span className="text-slate-500">|</span>
                <span>NEURAL RETOUCH: ACTIVE</span>
              </div>
            </div>

            {/* Micro-Features Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Delivery Speed</p>
                  <p className="text-sm font-bold text-white">48h Express AI Cut</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Smart Culling</p>
                  <p className="text-sm font-bold text-white">Zero Blink & Blur</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Cinema Optics</p>
                  <p className="text-sm font-bold text-white">8K Sony Cinema Line</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Guest Delivery</p>
                  <p className="text-sm font-bold text-white">AI Face-Recognition</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Key Metrics Counter Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-14 pt-10 border-t border-white/10">
          <div className="text-center">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              1,200<span className="text-indigo-400">+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              Productions Delivered
            </p>
          </div>

          <div className="text-center">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              48<span className="text-pink-400">hrs</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              Express AI Teaser
            </p>
          </div>

          <div className="text-center">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              25<span className="text-cyan-400">+</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              Pan-India Destinations
            </p>
          </div>

          <div className="text-center">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              99.8<span className="text-emerald-400">%</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              5-Star Client Satisfaction
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
