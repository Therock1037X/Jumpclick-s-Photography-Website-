import React, { useState, useMemo } from 'react';
import { Camera, Maximize2, Layers } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import Lightbox from './Lightbox';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(18);
  const [activePhoto, setActivePhoto] = useState(null);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setVisibleCount(18); // Reset pagination on category change
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 18);
  };

  return (
    <section id="gallery" className="relative py-24 bg-[#090b13] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-amber-300 mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Work & Memories
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A curated collection of over 180 genuine moments captured by Jumpclicks across weddings, pre-weddings, portraits, and family events.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {galleryCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-white text-slate-950 font-semibold border-white shadow-md'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                {cat.count && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-slate-200 text-slate-950 font-bold' : 'bg-white/10 text-slate-400'
                  }`}>
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 cursor-pointer shadow-lg hover:shadow-2xl hover:border-amber-400/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container with aspect ratio */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.thumb}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-200 border border-white/10">
                      {item.categoryName}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Click to view full photo
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Jumpclicks Photography Archive
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="capitalize">{item.categoryName}</span>
                <span className="text-[10px] text-slate-500 uppercase">{item.orientation}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 backdrop-blur-md hover:border-amber-400/40 transition-all cursor-pointer shadow-lg"
            >
              <span>Load More Photos</span>
              <span className="text-xs text-amber-400">
                ({filteredItems.length - visibleCount} more available)
              </span>
            </button>
          </div>
        )}

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && (
        <Lightbox
          item={activePhoto}
          items={filteredItems}
          onClose={() => setActivePhoto(null)}
          onSelect={(newItem) => setActivePhoto(newItem)}
        />
      )}
    </section>
  );
}
