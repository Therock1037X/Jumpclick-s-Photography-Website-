import React, { useState, useMemo } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import Lightbox from './Lightbox';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(18);
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
    setVisibleCount(18);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 18);
  };

  return (
    <section id="gallery" className="relative py-20 bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
                    ? 'bg-[#df2531] text-white font-bold border-[#df2531] shadow-md shadow-[#df2531]/30'
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

        {/* Masonry Grid - Pure Photos, No Text Underneath */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="break-inside-avoid rounded-2xl overflow-hidden bg-[#0d0d10] border border-white/10 hover:border-[#df2531]/60 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1 relative"
            >
              <div className="relative w-full overflow-hidden bg-[#000000]">
                <img
                  src={item.thumb}
                  alt="Jumpclicks Photography"
                  loading="lazy"
                  className="w-full h-auto object-contain block group-hover:scale-[1.03] transition-transform duration-500"
                />
                
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
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0f0f12] hover:bg-[#df2531] text-white font-semibold text-sm border border-white/15 hover:border-[#df2531] transition-all cursor-pointer shadow-lg"
            >
              <span>Load More Photos</span>
              <span className="text-xs text-[#df2531] group-hover:text-white">
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
