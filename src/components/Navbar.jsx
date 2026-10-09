import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
          ? 'bg-black/95 backdrop-blur-md py-2 sm:py-4 shadow-none'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-2.5 sm:py-6'
      }`}
    >
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-4 md:gap-8">
          
          {/* Official Jumpclicks Logo */}
          <Link 
            to="/"
            className="flex items-center gap-3 group outline-none focus:outline-none py-0.5"
            aria-label="Jumpclicks Photography Home"
          >
            <img 
              src="/images/jumpclicks-logo-white.webp" 
              alt="Jumpclicks Photography" 
              className="h-8 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            />
          </Link>

          {/* All 5 Navigation Tabs Directly Visible on Mobile & Desktop (No hamburger / 3 dots) */}
          <nav className="flex items-center justify-center gap-3.5 sm:gap-7 md:gap-8 lg:gap-11 flex-wrap py-0.5">
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
                  className={`text-[10.5px] xs:text-[11.5px] sm:text-[12px] xl:text-[12.5px] uppercase tracking-[0.12em] sm:tracking-[0.18em] font-medium transition-all duration-200 outline-none focus:outline-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] cursor-pointer whitespace-nowrap ${
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

        </div>
      </div>
    </header>
  );
}
