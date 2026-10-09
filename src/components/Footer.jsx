import React from 'react';
import { Link } from 'react-router-dom';

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
    <footer className="w-full bg-[#000000] border-none text-slate-400 select-none">
      {/* Ending Bar Styled in JumpClicks Dark Velvet Theme */}
      <div className="w-full py-6 sm:py-7 border-none">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-[13px]">
          
          {/* Left: Navigation Tabs (Same as main tabs) + WhatsApp Chat */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 sm:gap-x-7 gap-y-2.5 text-slate-300 text-[11.5px] uppercase tracking-[0.16em] font-medium">
            <Link to="/" className="hover:text-[#df2531] transition-colors">Home</Link>
            <Link to="/about" className="hover:text-[#df2531] transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-[#df2531] transition-colors">Services</Link>
            <Link to="/gallery" className="hover:text-[#df2531] transition-colors">Gallery</Link>
            <Link to="/contact" className="hover:text-[#df2531] transition-colors">Contact Us</Link>

            {/* WhatsApp Chat Link */}
            <a
              href="https://wa.me/919172322302?text=Hi%20Jumpclicks%20team,%20I'd%20like%20to%20chat%20about%20photography."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors ml-1 font-medium capitalize"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Chat</span>
            </a>
          </div>

          {/* Right: Copyright Text + Circular Back-to-Top Button */}
          <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 text-slate-400 text-[11px] sm:text-xs">
            <span className="text-center md:text-right font-normal">
              All Rights Reserved @ 2026 · Website Designed by JumpClicks Photography
            </span>

            {/* Circular Back-to-Top Button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#df2531] text-white flex items-center justify-center transition-all duration-300 shadow cursor-pointer flex-shrink-0 hover:scale-105 active:scale-95 border border-white/10 hover:border-transparent"
              aria-label="Back to top"
            >
              <svg 
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" 
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
