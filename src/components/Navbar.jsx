import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { MoreVertical, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Requested tabs: Home, About Us, Services, Gallery, Contact Us
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-none outline-none select-none transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-black/95 backdrop-blur-md py-3 sm:py-4 shadow-none'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4 sm:py-6'
      }`}
    >
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between">
          
          {/* Official Jumpclicks Logo */}
          <Link 
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group outline-none focus:outline-none py-0.5"
            aria-label="Jumpclicks Photography Home"
          >
            <img 
              src="/images/jumpclicks-logo-white.webp" 
              alt="Jumpclicks Photography" 
              className="h-8 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            />
          </Link>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-7 md:gap-8 lg:gap-11 py-0.5">
            {navLinks.map((link) => {
              const isActive = 
                link.path === '/' 
                  ? location.pathname === '/' 
                  : location.pathname.startsWith(link.path);

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={`text-[12px] xl:text-[12.5px] uppercase tracking-[0.18em] font-medium transition-all duration-200 outline-none focus:outline-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-white font-semibold border-b border-[#df2531] pb-0.5'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile 3-Dots Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-white/90 hover:text-white rounded-full bg-white/5 hover:bg-white/10 active:scale-95 transition-all cursor-pointer border border-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <MoreVertical className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer - Seamless Luxury Design */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-2xl px-6 pt-4 pb-6 space-y-3 mt-2 border-b border-white/10 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = 
                link.path === '/' 
                  ? location.pathname === '/' 
                  : location.pathname.startsWith(link.path);

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left py-2.5 px-3 rounded-xl text-[13px] uppercase tracking-[0.18em] font-medium transition-colors outline-none focus:outline-none ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold border-l-2 border-[#df2531]'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10">
            <a
              href="https://wa.me/918856002272?text=Hi%20Jumpclicks%20team,%20I'd%20like%20to%20chat%20about%20photography."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
