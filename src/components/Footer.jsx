import React from 'react';
import { Camera, MessageCircle, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06070b] border-t border-white/10 pt-16 pb-12 overflow-hidden text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 p-0.5 border border-white/20">
                <div className="w-full h-full bg-[#090A0F] rounded-[9px] flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/logo.webp"
                    alt="Jumpclicks Photography"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <Camera className="w-4 h-4 text-slate-300" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-lg tracking-wide text-white">
                JUMPCLICKS PHOTOGRAPHY
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-sm">
              Founded in 2020, Jumpclicks Photography is a premier photography and cinematography studio capturing genuine, heartfelt moments across weddings, pre-weddings, portraits, and family milestones in India.
            </p>

            <div className="flex items-center gap-2 text-amber-300 text-[11px] font-medium">
              <span>ESTABLISHED 2020 • PAN-INDIA COVERAGE</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact Us'].map((item) => {
                const idMap = {
                  'Home': 'home',
                  'About Us': 'about',
                  'Services': 'services',
                  'Gallery': 'gallery',
                  'Contact Us': 'contact',
                };
                return (
                  <li key={item}>
                    <button
                      onClick={() => onNavigate(idMap[item])}
                      className="hover:text-white transition-colors cursor-pointer text-slate-400"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Verticals (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Photography Verticals
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Wedding & Reception</li>
              <li>Pre-Wedding & Couple Sessions</li>
              <li>Bridal & Groom Portraits</li>
              <li>Maternity & Newborn</li>
              <li>Baby Milestones</li>
              <li>Events & Birthdays</li>
            </ul>
          </div>

          {/* Contact Fast Track (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Direct Contact
            </h4>
            <a
              href="https://wa.me/919172322302?text=Hi%20Jumpclicks%20team,%20I'd%20like%20to%20inquire%20about%20a%20shoot."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-all font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <p className="text-[11px] text-slate-400">
              +91 91723 22302
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2020–2026 Jumpclicks Photography. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Made with Care for Cherished Moments</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
