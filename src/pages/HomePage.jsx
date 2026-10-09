import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Calendar, MessageCircle } from 'lucide-react';
import Hero from '../components/Hero';
import IntimateWeddingShowcase from '../components/IntimateWeddingShowcase';
import WeddingFilmsCarousel from '../components/WeddingFilmsCarousel';
import InstagramFeed from '../components/InstagramFeed';
import { servicesData, clientReviews, socialConfig } from '../data/contentData';
import { galleryItems } from '../data/galleryData';

export default function HomePage() {
  // Grab top 8 featured photographs for homepage preview
  const featuredPhotos = galleryItems.filter(item => item.featured).slice(0, 8);

  return (
    <div className="bg-[#000000] text-white">
      {/* 100vh Full-Bleed KnotsbyAMP Style Hero */}
      <Hero />

      {/* Editorial Intimate Wedding Showcase (Matches User Reference) */}
      <IntimateWeddingShowcase />

      {/* Cinematic Wedding Films Carousel (Matches User Reference) */}
      <WeddingFilmsCarousel />

      {/* Featured Gallery Preview - Pure Photography, Zero Text Below Images */}
      <section className="py-16 bg-[#000000] border-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-10 gap-3">
            <div>
              <h3 
                className="text-2xl sm:text-4xl font-normal text-white"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                Selected Works
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Authentic, uncropped moments captured across India.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#df2531] hover:text-white transition-colors"
            >
              <span>View Full Gallery (180+ Photos)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Natural Uncropped Masonry Grid - Pure Images Only */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            {featuredPhotos.map((item) => (
              <Link
                key={item.id}
                to="/gallery"
                className="break-inside-avoid block group relative rounded-2xl overflow-hidden bg-[#0d0d10] border border-white/10 hover:border-[#df2531]/60 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={item.thumb}
                  alt="Jumpclicks Photography"
                  className="w-full h-auto object-contain block group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#df2531] hover:bg-[#b81b25] text-white font-bold text-xs tracking-wider uppercase shadow-xl shadow-[#df2531]/30 transition-all cursor-pointer"
            >
              <span>Explore All 180+ Photographs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#000000] border-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#df2531] font-semibold block mb-2">
              OUR EXPERTISE
            </span>
            <h2 
              className="text-3xl sm:text-5xl font-normal text-white"
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
            >
              Photography & Cinema Verticals
            </h2>
            <p className="mt-3 text-slate-300 text-sm">
              Tailored visual coverage for your celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((svc) => (
              <div
                key={svc.id}
                className="rounded-3xl p-8 bg-[#0c0c0f] border border-white/10 hover:border-[#df2531]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#df2531]/15 text-[#df2531] border border-[#df2531]/30 inline-block mb-5">
                    {svc.badge}
                  </span>
                  <h3 
                    className="text-2xl font-normal text-white mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#df2531] hover:text-white transition-colors pt-4 border-none"
                >
                  <span>Explore Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase border border-white/15 hover:border-[#df2531]/40 transition-all"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-24 bg-[#000000] border-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 
              className="text-3xl sm:text-5xl font-normal text-white"
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
            >
              Client Testimonials
            </h2>
            <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider">
              Kind words from couples and families across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientReviews.slice(0, 2).map((rev) => (
              <div
                key={rev.id}
                className="rounded-3xl p-8 bg-[#0c0c0f] border border-white/10 flex flex-col justify-between"
              >
                <div className="flex items-center gap-1 text-[#df2531] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#df2531]" />
                  ))}
                </div>
                <p 
                  className="text-slate-200 text-base sm:text-lg italic mb-6 leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  "{rev.quote}"
                </p>
                <div className="pt-4 border-none flex items-center justify-between text-xs">
                  <span className="font-bold text-white uppercase tracking-wider">{rev.name}</span>
                  <span className="text-slate-400">{rev.event} • {rev.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#2a060a] via-[#0d0d10] to-[#1c0508] border-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 
            className="text-3xl sm:text-5xl font-normal text-white"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            Let’s Create Timeless Memories Together
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Contact us today to check our availability for your date and discuss customized packages.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#df2531] hover:bg-[#b81b25] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#df2531]/30 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Shoot</span>
            </Link>
            <a
              href="https://wa.me/919172322302?text=Hi%20Jumpclicks%20team,%20I'd%20like%20to%20check%20availability%20for%20a%20shoot."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* Premium Instagram-Style Photography Feed (Inspired by User Reference) */}
      <InstagramFeed 
        handle={socialConfig.instagramHandle} 
        profileUrl={socialConfig.instagramUrl} 
      />
    </div>
  );
}
