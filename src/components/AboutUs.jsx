import React from 'react';
import { 
  Sparkles, 
  Check, 
  X, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Users, 
  Camera, 
  Layers, 
  Cpu, 
  Award,
  ArrowRight
} from 'lucide-react';
import { comparisonData } from '../data/contentData';

export default function AboutUs({ onNavigate }) {
  return (
    <section id="about" className="relative py-28 bg-[#090b13] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-pink-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>DISRUPTING THE STATUS QUO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            We Didn’t Build a Photo Studio. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
              We Engineered a Creative-Tech Machine.
            </span>
          </h2>
          <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            Incepted in 2020, Jumpclicks set out with a relentless mission: eliminate the chaotic delays, generic poses, 
            and outdated workflows of traditional Indian photography by uniting high-end cinema craft with modern artificial intelligence.
          </p>
        </div>

        {/* Story & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
              SINCE 2020 // OUR GENESIS
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Why Indian Photography Needed a Radical Reboot
            </h3>
            <p className="text-slate-300 leading-relaxed">
              For decades, the Indian photography landscape has been plagued by the same frustrating story: clients invest their hard-earned money and emotions, only to wait 3 to 6 months for a thumb drive filled with 6,000 uncurated photos, inconsistent colors, and over-airbrushed skin.
            </p>
            <p className="text-slate-300 leading-relaxed">
              At <strong className="text-white">Jumpclicks</strong>, we treat visual production like a high-performance technology startup. We built an automated pipeline where:
            </p>

            <ul className="space-y-3.5 pt-2">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-1">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-200 text-sm">
                  <strong className="text-white">AI-Accelerated Selection:</strong> Over 10,000 raw frames are culled in minutes—automatically discarding blinks, missed focus, and unflattering angles.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-1">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-200 text-sm">
                  <strong className="text-white">Neural Color Calibration:</strong> Every single frame matches calibrated DCI-P3 cinema color science with realistic, glowing Indian skin tones.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-1">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-200 text-sm">
                  <strong className="text-white">Guest Facial Recognition:</strong> Wedding and event guests find their personal moments instantly by scanning a simple venue QR code.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-1">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-200 text-sm">
                  <strong className="text-white">48-Hour Express Previews:</strong> Share your biggest moments on Instagram while the buzz is still burning hot.
                </span>
              </li>
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
              >
                <span>Partner With Jumpclicks</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composite */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass-panel p-2">
                <img 
                  src="/gallery/web/wedding/wedding_3.webp" 
                  alt="Jumpclicks Photography In Action" 
                  className="w-full h-[460px] object-cover rounded-2xl"
                />
                
                {/* Floating badge 1: Founded year */}
                <div className="absolute top-6 left-6 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Inception</div>
                    <div className="text-sm font-extrabold text-white">Year 2020</div>
                  </div>
                </div>

                {/* Floating badge 2: Delivery guarantee */}
                <div className="absolute bottom-6 right-6 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-pink-500/20 text-pink-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Turnaround</div>
                    <div className="text-sm font-extrabold text-white">48h Delivery SLA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Startup vs Traditional Comparison Table */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-indigo-400 tracking-wider uppercase">
              THE COMPARISON THAT MATTERS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Traditional Indian Photography vs. Jumpclicks
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              See why high-growth founders, modern brides, and prestigious brands choose our tech-first studio.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[680px] glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/4">
                      Capability / Metric
                    </th>
                    <th className="py-4 px-6 text-xs font-semibold text-rose-300 uppercase tracking-wider w-3/8 bg-rose-500/5">
                      Legacy Photographer (India)
                    </th>
                    <th className="py-4 px-6 text-xs font-semibold text-indigo-300 uppercase tracking-wider w-3/8 bg-indigo-500/10">
                      Jumpclicks AI Creative Studio
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-semibold text-white">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-slate-400 bg-rose-500/[0.02]">
                        <div className="flex items-start gap-2.5">
                          <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-100 font-medium bg-indigo-500/[0.04]">
                        <div className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-indigo-200">{row.jumpclicks}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
