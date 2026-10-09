import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MessageCircle, ArrowUp } from 'lucide-react';

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#25D366" />
      <path
        d="M17.5 14.3c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.8.9-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4-.1-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2 0 1.2.9 2.3 1 2.5.1.2 1.7 2.6 4.1 3.6.6.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.3-.6 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#000000] border-none pt-16 pb-0 overflow-hidden text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-none">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#df2531]/15 p-0.5 border border-[#df2531]/40">
                <div className="w-full h-full bg-[#000000] rounded-[9px] flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/logo.webp"
                    alt="Jumpclicks Photography"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <Camera className="w-4 h-4 text-[#df2531]" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-lg tracking-wider text-white">
                JUMPCLICKS PHOTOGRAPHY
              </span>
            </Link>

            <p className="text-slate-300 leading-relaxed max-w-sm">
              Founded in 2020, Jumpclicks Photography is a premier photography and cinematography studio capturing genuine, heartfelt moments across weddings, pre-weddings, portraits, and family milestones in India.
            </p>

            <div className="flex items-center gap-2 text-[#df2531] text-[11px] font-semibold tracking-wider">
              <span>ESTABLISHED 2020 • PAN-INDIA COVERAGE</span>
            </div>
          </div>

          {/* Quick Links / Page Tabs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Pages
            </h4>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/gallery', label: 'Gallery' },
                { path: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-[#df2531] transition-colors cursor-pointer text-slate-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Verticals (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Photography Verticals
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/services" className="hover:text-[#df2531] transition-colors">
                  Wedding & Reception
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#df2531] transition-colors">
                  Pre-Wedding & Couple Sessions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#df2531] transition-colors">
                  Bridal & Groom Portraits
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#df2531] transition-colors">
                  Maternity & Newborn
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#df2531] transition-colors">
                  Baby Milestones
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#df2531] transition-colors">
                  Events & Birthdays
                </Link>
              </li>
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

      </div>

      {/* Clean Full-Width White Ending Bar (Matches Reference Screenshot) */}
      <div className="w-full bg-white text-[#334155] py-4 sm:py-4.5 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-[13px]">
          
          {/* Left: Navigation Links + WhatsApp Chat */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 sm:gap-x-6 gap-y-2 text-[#475569] font-normal">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <Link to="/gallery" className="hover:text-black transition-colors">Photography</Link>
            <Link to="/wedding-films" className="hover:text-black transition-colors">Films</Link>
            <Link to="/wedding-stories" className="hover:text-black transition-colors">Blog</Link>
            <Link to="/about" className="hover:text-black transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
            <Link to="/faq" className="hover:text-black transition-colors">FAQ</Link>

            {/* WhatsApp Chat link */}
            <a
              href="https://wa.me/919172322302?text=Hi%20Jumpclicks%20team,%20I'd%20like%20to%20chat%20about%20photography."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#334155] hover:text-emerald-600 transition-colors ml-1 font-medium"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Chat</span>
            </a>
          </div>

          {/* Right: Copyright text + Circular Black Back-to-Top Button */}
          <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 text-slate-500 text-[11px] sm:text-xs">
            <span className="text-center md:text-right font-normal">
              All Rights Reserved @ 2026 · Website Designed by JumpClicks Photography
            </span>

            {/* Circular Black Back-to-Top Button */}
            <button
              onClick={scrollToTop}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black hover:bg-slate-800 text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm cursor-pointer flex-shrink-0"
              aria-label="Back to top"
            >
              <svg 
                className="w-3.5 h-3.5 text-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
