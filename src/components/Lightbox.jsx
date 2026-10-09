import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Camera } from 'lucide-react';

export default function Lightbox({ item, items, onClose, onSelect }) {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const handlePrev = (e) => {
    e.stopPropagation();
    if (hasPrev) onSelect(items[currentIndex - 1]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (hasNext) onSelect(items[currentIndex + 1]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onSelect(items[currentIndex - 1]);
      if (e.key === 'ArrowRight' && hasNext) onSelect(items[currentIndex + 1]);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, hasPrev, hasNext, items, onClose, onSelect]);

  const handleInquireStyle = () => {
    const text = `Hi Jumpclicks Photography! I loved this photograph (${item.categoryName}) on your website and would like to achieve a similar shoot style.`;
    window.open(`https://wa.me/919172322302?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div 
        className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-white/10 text-amber-200 border border-white/10">
            {item.categoryName}
          </span>
          <span className="text-xs text-slate-400">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Center Image Stage */}
      <div 
        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev Button */}
        {hasPrev && (
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer backdrop-blur-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* The Image */}
        <div className="relative max-h-[75vh] max-w-[90vw] flex items-center justify-center">
          <img
            src={item.src}
            alt={item.title}
            className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/10"
            loading="eager"
          />
        </div>

        {/* Next Button */}
        {hasNext && (
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer backdrop-blur-md"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div 
        className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Camera className="w-4 h-4 text-amber-400" />
          <span className="font-medium text-white">Jumpclicks Photography Studio</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400">High-Resolution Master</span>
        </div>

        <button
          onClick={handleInquireStyle}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 cursor-pointer transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
          <span>Inquire About This Style on WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
