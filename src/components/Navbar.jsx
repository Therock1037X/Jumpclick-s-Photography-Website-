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
          ? 'bg-black/90 backdrop-blur-md py-4 shadow-none'
          : 'bg-gradient-to-b from-black/70 via-black/25 to-transparent py-6 sm:py-7'
      }`}
    >
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between">
          
          {/* Official Jumpclicks Logo */}
          <Link 
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group outline-none focus:outline-none py-1"
            aria-label="Jumpclicks Photography Home"
          >
            <img 
              src="/images/jumpclicks-logo-white.webp" 
              alt="Jumpclicks Photography" 
              className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            />
          </Link>

          {/* KnotsbyAMP Style Pure Title Case Text Navigation */}
          <nav className="hidden md:flex items-center gap-7 md:gap-8 lg:gap-11">
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
                  className={`text-[12px] xl:text-[12.5px] uppercase tracking-[0.18em] font-medium transition-all duration-200 outline-none focus:outline-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white outline-none focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - Seamless Borderless Design */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-2xl px-6 pt-5 pb-8 space-y-4 mt-3 border-none shadow-none">
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
                className={`block w-full text-left py-2 text-[13px] uppercase tracking-[0.18em] font-medium transition-colors outline-none focus:outline-none ${
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
