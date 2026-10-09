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
      className="fixed inset-0 z-50 bg-[#000000]/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div 
        className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#df2531] text-white shadow-md shadow-[#df2531]/30">
            {item.categoryName}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-[#df2531] text-white transition-colors cursor-pointer border border-white/10"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Center Image Stage - Pure Natural Aspect Ratio */}
      <div 
        className="relative flex-1 flex items-center justify-center my-3 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev Button */}
        {hasPrev && (
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-20 p-3.5 rounded-full bg-black/75 hover:bg-[#df2531] text-white border border-white/20 transition-all cursor-pointer backdrop-blur-md shadow-2xl"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* The Image - Natural Ratio, uncropped */}
        <div className="relative max-h-[78vh] max-w-[92vw] flex items-center justify-center">
          <img
            src={item.src}
            alt={item.title}
            className="max-h-[78vh] max-w-[92vw] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/15"
            loading="eager"
          />
        </div>

        {/* Next Button */}
        {hasNext && (
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-20 p-3.5 rounded-full bg-black/75 hover:bg-[#df2531] text-white border border-white/20 transition-all cursor-pointer backdrop-blur-md shadow-2xl"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div 
        className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0a0a0c] border border-white/10 rounded-2xl p-4 backdrop-blur-md z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Camera className="w-4 h-4 text-[#df2531]" />
          <span className="font-semibold text-white">Jumpclicks Photography</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 capitalize">{item.categoryName} Master</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 uppercase font-mono">{item.orientation}</span>
        </div>

        <button
          onClick={handleInquireStyle}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#df2531] hover:bg-[#b81b25] text-white font-bold text-xs shadow-lg shadow-[#df2531]/30 cursor-pointer transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Inquire About This Style on WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
