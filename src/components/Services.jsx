import React from 'react';
import { 
  Camera, 
  Film, 
  Sparkles, 
  Heart, 
  Check, 
  ArrowRight, 
  MessageCircle,
  Clock,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { servicesData } from '../data/contentData';

const iconMap = {
  Camera: Camera,
  Film: Film,
  Sparkles: Sparkles,
  Heart: Heart,
};

export default function Services({ onNavigate }) {
  const handleInquire = (serviceTitle) => {
    const text = `Hi Jumpclicks Photography, I would like to inquire about package details and availability for ${serviceTitle}.`;
    window.open(`https://wa.me/918856002272?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="relative py-24 bg-[#07090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-amber-300 mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>OUR PHOTOGRAPHY SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Crafted for Your Most <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-100 font-serif italic">
              Cherished Celebrations
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            From royal multi-day weddings to intimate family milestones, explore our specialized photography and cinematography verticals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((svc) => {
            const IconComponent = iconMap[svc.icon] || Camera;
            return (
              <div
                key={svc.id}
                className="rounded-3xl p-7 flex flex-col justify-between relative group border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-400/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mt-1 mb-3">
                    {svc.tagline}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-white/5 mb-6">
                    {svc.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('gallery')}
                    className="text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    View Samples
                  </button>
                  <button
                    onClick={() => handleInquire(svc.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>Inquire Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Package Consultation Banner */}
        <div className="rounded-3xl p-8 sm:p-10 border border-white/15 bg-gradient-to-r from-amber-950/30 via-slate-900 to-indigo-950/30 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Need a Tailored Package for Your Event?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you're planning a 3-day destination wedding, a 1-day intimate ceremony, or a cozy indoor shoot, we create custom photography packages tailored to your schedule and budget.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/918856002272?text=Hi%20Jumpclicks,%20I%20would%20like%20to%20discuss%20a%20customized%20package%20for%20my%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 cursor-pointer transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Send Booking Request</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
