import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // KnotsbyAMP exact navigation menu items
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/wedding-stories', label: 'Wedding Stories' },
    { path: '/wedding-films', label: 'Wedding Films' },
    { path: '/couple-shoot', label: 'Couple Shoot' },
    { path: '/about', label: 'About' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-none outline-none select-none transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-black/90 backdrop-blur-md py-4 shadow-none'
          : 'bg-gradient-to-b from-black/70 via-black/25 to-transparent py-6 sm:py-7'
      }`}
    >
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between">
          
          {/* Logo - KnotsbyAMP Style Circular Monogram Badge */}
          <Link 
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3.5 group outline-none focus:outline-none"
            aria-label="Jumpclicks Home"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/60 group-hover:border-white transition-all duration-300 flex items-center justify-center p-1 relative bg-black/20 backdrop-blur-[2px]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="none"
                />
                <text className="text-[9.5px] fill-white tracking-[0.22em] uppercase font-light">
                  <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                    Jumpclicks
                  </textPath>
                </text>
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  className="fill-white font-serif text-[20px] font-normal italic"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  JC
                </text>
              </svg>
            </div>

            <div className="hidden sm:block">
              <span 
                className="text-xl sm:text-2xl text-white font-normal tracking-wide block leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                Jumpclicks
              </span>
            </div>
          </Link>

          {/* KnotsbyAMP Style Pure Title Case Text Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
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
                  className={`text-[14.5px] xl:text-[15px] font-normal transition-all duration-200 outline-none focus:outline-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white outline-none focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - Seamless Borderless Design */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-2xl px-6 pt-5 pb-8 space-y-4 mt-3 border-none shadow-none">
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
                className={`block w-full text-left py-2 text-base font-normal tracking-wide transition-colors outline-none focus:outline-none ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
}
