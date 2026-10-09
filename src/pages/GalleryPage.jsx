import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { Camera, Maximize2, MessageCircle, ArrowRight } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import Lightbox from '../components/Lightbox';

export default function GalleryPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const getActiveCategory = () => {
    if (location.pathname === '/wedding-stories') return 'wedding';
    if (location.pathname === '/couple-shoot') return 'prewedding';
    return searchParams.get('category') || 'all';
  };

  const [selectedCategory, setSelectedCategory] = useState(getActiveCategory());
  const [visibleCount, setVisibleCount] = useState(24);
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    setSelectedCategory(getActiveCategory());
    setVisibleCount(24);
  }, [location.pathname, searchParams]);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setVisibleCount(24);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 24);
  };

  return (
    <div className="pt-24 pb-20 bg-[#000000] text-white min-h-screen">
      
      {/* Page Header */}
      <section className="py-16 bg-[#000000] border-none relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#df2531]/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#df2531]/10 text-[#df2531] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#df2531]/30">
            <Camera className="w-3.5 h-3.5" />
            <span>ORIGINAL ARCHIVE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Photo Gallery
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore 180+ real photographs captured by Jumpclicks. Every photograph is displayed in its pure, natural composition.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-14 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
            {galleryCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#df2531] text-white font-bold border-[#df2531] shadow-lg shadow-[#df2531]/35'
                      : 'bg-[#0f0f12] text-slate-300 border-white/10 hover:border-[#df2531]/40 hover:text-white'
                  }`}
                >
                  <span>{cat.label}</span>
                  {cat.count && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-black/30 text-white font-bold' : 'bg-white/10 text-slate-400'
                    }`}>
                      {cat.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* TRUE MASONRY GRID - PURE IMAGES WITH ZERO BOTTOM TEXT */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="break-inside-avoid rounded-2xl overflow-hidden bg-[#0d0d10] border border-white/10 hover:border-[#df2531]/60 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1 relative"
              >
                {/* Image in Natural Aspect Ratio - NO fixed ratio, NO text underneath */}
                <div className="relative w-full overflow-hidden bg-[#000000]">
                  <img
                    src={item.thumb}
                    alt="Jumpclicks Photography"
                    loading="lazy"
                    className="w-full h-auto object-contain block group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  
                  {/* Subtle Clean Hover Overlay without text */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-black/70 border border-white/30 text-white flex items-center justify-center backdrop-blur-md shadow-xl">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredItems.length && (
            <div className="text-center mt-14">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0f0f12] hover:bg-[#df2531] text-white font-semibold text-sm border border-white/15 hover:border-[#df2531] transition-all cursor-pointer shadow-lg hover:shadow-[#df2531]/25"
              >
                <span>Load More Photos</span>
                <span className="text-xs text-[#df2531] group-hover:text-white">
                  ({filteredItems.length - visibleCount} remaining)
                </span>
              </button>
            </div>
          )}

          {/* Bottom Inquire Card */}
          <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-[#210609] via-[#0d0d10] to-[#170508] border border-[#df2531]/30 text-center max-w-3xl mx-auto shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Love What You See?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Let's create timeless, natural memories for your upcoming wedding or celebration.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#df2531] hover:bg-[#b81b25] text-white font-bold text-xs shadow-lg shadow-[#df2531]/25 transition-colors"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://wa.me/918856002272"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <Lightbox
          item={activePhoto}
          items={filteredItems}
          onClose={() => setActivePhoto(null)}
          onSelect={(newItem) => setActivePhoto(newItem)}
        />
      )}

    </div>
  );
}
