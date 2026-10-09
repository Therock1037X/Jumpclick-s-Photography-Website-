import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Film, Sparkles, Heart, Check, ArrowRight, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';
import { servicesData } from '../data/contentData';

const iconMap = {
  Camera: Camera,
  Film: Film,
  Sparkles: Sparkles,
  Heart: Heart,
};

export default function ServicesPage() {
  const handleInquire = (serviceTitle) => {
    const text = `Hi Jumpclicks Photography, I would like to inquire about package details and availability for ${serviceTitle}.`;
    window.open(`https://wa.me/919172322302?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* Page Header */}
      <section className="py-16 bg-[#07090e] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <Camera className="w-3.5 h-3.5" />
            <span>SERVICES & PACKAGES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Photography & Cinema Services
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive, professional visual coverage for weddings, pre-weddings, portraits, and cherished family milestones across India.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#090b13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {servicesData.map((svc) => {
              const IconComponent = iconMap[svc.icon] || Camera;
              return (
                <div
                  key={svc.id}
                  className="rounded-3xl p-7 flex flex-col justify-between border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-400/30 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {svc.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-amber-400 font-medium mb-3">
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
                    <Link
                      to="/gallery"
                      className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      View Photos
                    </Link>
                    <button
                      onClick={() => handleInquire(svc.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
                    >
                      <span>Inquire Package</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Standard Deliverables Included in Every Shoot */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                OUR COMMITMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Included in Every Jumpclicks Package
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-300">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-bold text-white text-sm mb-1">Color Grading</h4>
                <p className="text-slate-400">
                  Every selected photo is individually color-corrected and refined for natural skin tones and rich dynamic depth.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-bold text-white text-sm mb-1">High-Res Digital Vault</h4>
                <p className="text-slate-400">
                  Private online gallery link with full-resolution downloads for you, your family, and friends.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-bold text-white text-sm mb-1">Full Printing Rights</h4>
                <p className="text-slate-400">
                  Complete personal print release allowing you to print canvas frames, enlargements, and custom albums anytime.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-bold text-white text-sm mb-1">Safe Long-Term Backup</h4>
                <p className="text-slate-400">
                  Your wedding and milestone photos are safely archived on secure cloud drives so you never lose a memory.
                </p>
              </div>
            </div>
          </div>

          {/* Custom Package Consultation Card */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-indigo-950/30 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Need a Custom Quote or Multi-Day Coverage?
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Tell us about your event dates, locations, and special requests. We will provide a transparent, personalized estimate.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/919172322302?text=Hi%20Jumpclicks,%20I'd%20like%20to%20discuss%20a%20customized%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
