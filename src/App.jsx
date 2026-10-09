import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      const scrollY = window.scrollY;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Fixed Header */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Section 1: Home (Hero, Startup Ticker, AI Split-Screen Grade, Metrics) */}
        <Hero onNavigate={handleNavigate} />

        {/* Section 2: About Us (Inception 2020, Startup Genesis, Comparison Table) */}
        <AboutUs onNavigate={handleNavigate} />

        {/* Section 3: Services (6 Verticals, AI Shoot Price Estimator) */}
        <Services onNavigate={handleNavigate} />

        {/* Section 4: Gallery (181 Original Photos, Filters, Fullscreen Lightbox) */}
        <GallerySection />

        {/* Client Reputation & Social Proof */}
        <Testimonials />

        {/* Section 5: Contact Us (Inquiry Form, WhatsApp Priority, Studio Info, FAQs) */}
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
