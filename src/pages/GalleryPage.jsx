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
    <div className="pt-24 pb-20">
      
      {/* Page Header */}
      <section className="py-16 bg-[#07090e] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <Camera className="w-3.5 h-3.5" />
            <span>ORIGINAL PHOTOGRAPHY ARCHIVE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Photo Gallery
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore 180+ real photographs captured by Jumpclicks across weddings, pre-weddings, portraits, and celebrations.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16 bg-[#090b13]">
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
                      ? 'bg-amber-400 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-400/20'
                      : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{cat.label}</span>
                  {cat.count && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-slate-900/20 text-slate-950 font-bold' : 'bg-white/10 text-slate-400'
                    }`}>
                      {cat.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 cursor-pointer shadow-lg hover:shadow-2xl hover:border-amber-400/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.thumb}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-200 border border-white/10">
                        {item.categoryName}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Click to view full photo
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Jumpclicks Photography
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-3.5 py-2 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="capitalize truncate max-w-[150px]">{item.categoryName}</span>
                  <span className="text-[10px] text-slate-500 uppercase">{item.orientation}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredItems.length && (
            <div className="text-center mt-14">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 backdrop-blur-md hover:border-amber-400/40 transition-all cursor-pointer shadow-lg"
              >
                <span>Load More Photos</span>
                <span className="text-xs text-amber-400">
                  ({filteredItems.length - visibleCount} remaining)
                </span>
              </button>
            </div>
          )}

          {/* Bottom Inquire Card */}
          <div className="mt-20 p-8 rounded-3xl bg-white/[0.02] border border-white/10 text-center max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Love What You See?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Let's create timeless, natural memories for your upcoming wedding or celebration.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs"
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
