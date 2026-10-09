import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Maximize2, Layers, MessageCircle, ArrowRight } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import Lightbox from '../components/Lightbox';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(24);
  const [activePhoto, setActivePhoto] = useState(null);

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
      <section className="py-16 bg-[#000000] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#df2531]/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#df2531]/10 text-[#df2531] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#df2531]/30">
            <Camera className="w-3.5 h-3.5" />
            <span>ORIGINAL PHOTOGRAPHY ARCHIVE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Photo Gallery
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Browse our original archive across weddings, pre-weddings, portraits, and milestones. Each photo is shown in its authentic, uncropped original composition.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-14 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs with #df2531 Crimson Styling */}
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

          {/* TRUE MASONRY GRID - PRESERVES NATURAL ORIGINAL ASPECT RATIOS WITHOUT CROPPING */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="break-inside-avoid rounded-2xl overflow-hidden bg-[#0d0d10] border border-white/10 hover:border-[#df2531]/50 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1"
              >
                {/* Image Container with Natural Ratio */}
                <div className="relative w-full overflow-hidden bg-[#000000]">
                  <img
                    src={item.thumb}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto object-contain block group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 pointer-events-none">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#df2531] text-white shadow-md">
                        {item.categoryName}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Click to view full photo
                      </p>
                      <p className="text-[10px] text-slate-300 uppercase tracking-widest font-mono">
                        Original Ratio • Jumpclicks
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Photo Metadata Strip */}
                <div className="px-3.5 py-2.5 bg-[#0a0a0c] border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="capitalize font-medium text-slate-300 truncate max-w-[150px]">
                    {item.categoryName}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {item.orientation}
                  </span>
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

          {/* Bottom Inquire Card with Crimson Styling */}
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
                href="https://wa.me/919172322302"
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
