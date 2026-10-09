import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Heart, Sparkles, Award, Star, Calendar, MessageCircle } from 'lucide-react';
import Hero from '../components/Hero';
import { servicesData, clientReviews } from '../data/contentData';
import { galleryItems } from '../data/galleryData';

export default function HomePage() {
  // Grab top 6 featured photographs for homepage preview
  const featuredPhotos = galleryItems.filter(item => item.featured).slice(0, 6);

  return (
    <div className="pt-8 bg-[#000000] text-white">
      {/* Hero Section */}
      <Hero onNavigate={() => {}} />

      {/* Featured Gallery Preview - Using Original Natural Ratios */}
      <section className="py-20 bg-[#000000] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[500px] h-[300px] bg-[#df2531]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#df2531]/10 text-[#df2531] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#df2531]/30">
                <Camera className="w-3.5 h-3.5" />
                <span>PORTFOLIO HIGHLIGHTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Recent Moments Captured
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                A glimpse of our work across Indian weddings, pre-weddings, and family milestones in their uncropped original ratios.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#df2531] text-white text-xs font-semibold border border-white/15 hover:border-[#df2531] transition-all self-start md:self-auto cursor-pointer shadow-md"
            >
              <span>Explore All 180+ Photos in Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Natural Uncropped Aspect Ratio Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {featuredPhotos.map((item) => (
              <Link
                key={item.id}
                to="/gallery"
                className="break-inside-avoid block group relative rounded-2xl overflow-hidden bg-[#0d0d10] border border-white/10 hover:border-[#df2531]/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="w-full h-auto object-contain block group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#df2531] text-white shadow-md inline-block mb-1">
                      {item.categoryName}
                    </span>
                    <p className="text-sm font-bold text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#df2531] hover:bg-[#b81b25] text-white font-bold text-sm shadow-xl shadow-[#df2531]/30 transition-all cursor-pointer"
            >
              <span>Open Complete Photo Gallery (180+ Photos)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Teaser */}
      <section className="py-20 bg-[#070709] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold text-[#df2531] uppercase tracking-widest">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Photography & Cinema Services
            </h2>
            <p className="mt-3 text-slate-300 text-sm">
              We specialize in full-service visual coverage for life's most meaningful milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesData.slice(0, 3).map((svc) => (
              <div
                key={svc.id}
                className="rounded-3xl p-6 bg-[#0c0c0f] border border-white/10 hover:border-[#df2531]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#df2531]/15 text-[#df2531] border border-[#df2531]/30 inline-block mb-4">
                    {svc.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {svc.description}
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#df2531] hover:text-white transition-colors pt-3 border-t border-white/5"
                >
                  <span>Learn More & Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/15 hover:border-[#df2531]/40 transition-all"
            >
              <span>View All 6 Photography Verticals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-[#000000] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono text-[#df2531] uppercase tracking-wider">
                ESTABLISHED 2020 // ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
                Passionate Photographers Committed to Your Memories
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Founded in 2020, Jumpclicks has had the honor of documenting over 1,200 weddings and milestones across 25+ cities in India. We believe in candid emotions, warm family connections, and delivering beautiful memories that stand the test of time.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#df2531] hover:bg-[#b81b25] text-white font-bold text-xs shadow-lg shadow-[#df2531]/20 transition-all"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#0d0d10]">
                <img
                  src="/gallery/web/wedding/wedding_2.webp"
                  alt="Jumpclicks Photography Team"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Strip */}
      <section className="py-20 bg-[#070709] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Words From Our Clients
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Real reviews from couples and families we’ve had the privilege to document.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientReviews.slice(0, 2).map((rev) => (
              <div
                key={rev.id}
                className="rounded-3xl p-6 bg-[#0c0c0f] border border-white/10 flex flex-col justify-between"
              >
                <div className="flex items-center gap-1 text-[#df2531] mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#df2531]" />
                  ))}
                </div>
                <p className="text-slate-200 text-sm italic mb-4">
                  "{rev.quote}"
                </p>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{rev.name}</span>
                  <span className="text-slate-400">{rev.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#2a060a] via-[#0d0d10] to-[#1c0508] border-t border-[#df2531]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Planning an Upcoming Wedding or Event?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Contact us today to check our availability for your date and discuss customized packages.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#df2531] hover:bg-[#b81b25] text-white font-bold text-sm shadow-xl shadow-[#df2531]/30 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </Link>
            <a
              href="https://wa.me/919172322302?text=Hi%20Jumpclicks%20team,%20I'd%20like%20to%20check%20availability%20for%20a%20shoot."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
