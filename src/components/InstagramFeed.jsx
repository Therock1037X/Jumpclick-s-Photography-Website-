import React from 'react';
import { ExternalLink } from 'lucide-react';

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function InstagramFeed({ 
  handle = '@jumpclicksphotography', 
  profileUrl = 'https://instagram.com/jumpclicksphotography' 
}) {
  // 8 Curated Real Client Photographs from Jumpclicks archive (4 cols x 2 rows on desktop)
  const feedImages = [
    {
      id: 1,
      src: '/gallery/web/wedding/wedding_20.webp',
      alt: 'Jumpclicks Candid Wedding Moment',
    },
    {
      id: 2,
      src: '/gallery/web/wedding/wedding_2.webp',
      alt: 'Joyful Haldi Celebration Splash',
    },
    {
      id: 3,
      src: '/gallery/web/wedding/wedding_21.webp',
      alt: 'Traditional Royal Varmala Ceremony',
    },
    {
      id: 4,
      src: '/gallery/web/wedding/wedding_3.webp',
      alt: 'Couple Portrait & Radiant Smiles',
    },
    {
      id: 5,
      src: '/gallery/web/prewedding/prewedding_36.webp',
      alt: 'Scenic Pre-Wedding Couple in Nature',
    },
    {
      id: 6,
      src: '/gallery/web/prewedding/prewedding_27.webp',
      alt: 'Romantic Couple Shoot on Bridge',
    },
    {
      id: 7,
      src: '/gallery/web/wedding/wedding_27.webp',
      alt: 'Royal Groom Celebration Portrait',
    },
    {
      id: 8,
      src: '/gallery/web/wedding/wedding_1.webp',
      alt: 'Vibrant Haldi Smiles with Loved Ones',
    },
  ];

  return (
    <section className="relative w-full bg-[#000000] text-white pt-24 sm:pt-32 md:pt-40 pb-20 sm:pb-28 overflow-hidden select-none border-none">
      
      {/* 1. Large Subtle Background Typography (Behind Gallery, Tops Peeking Above Grid) */}
      <div 
        className="absolute top-8 sm:top-12 md:top-14 lg:top-16 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden px-4"
        aria-hidden="true"
      >
        <span 
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11.5rem] text-white/[0.06] tracking-tight whitespace-nowrap leading-none block font-light select-none transition-all duration-300"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          JumpClicks on Instagram
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. Clean, Edge-Aligned Grid (4 cols x 2 rows on desktop, 2 cols on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 lg:gap-3 bg-[#000000]">
          {feedImages.map((img) => (
            <a
              key={img.id}
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#0d0c10] aspect-[4/5] block cursor-pointer transition-all duration-500 shadow-lg shadow-black/40"
              aria-label="View Jumpclicks photography on Instagram"
            >
              {/* Image with subtle hover zoom */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Desktop Hover Overlay with Instagram Icon */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2 text-white">
                <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                  <InstagramIcon className="w-5 h-5 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-white/90">
                  JumpClicks
                </span>
                <span className="text-[9px] text-[#df2531] font-semibold tracking-wider flex items-center gap-1">
                  <span>View Post</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* 3. Instagram Icon and Handle Link Below Grid */}
        <div className="mt-8 sm:mt-12 text-center relative z-10 flex items-center justify-center">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#df2531]/50 text-slate-300 hover:text-white transition-all duration-300 group shadow-md"
            aria-label={`Visit Jumpclicks Instagram profile ${handle}`}
          >
            {/* Instagram Gradient Logo */}
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[1.5px] flex items-center justify-center shadow-sm">
              <div className="w-full h-full bg-[#000000] rounded-[6px] flex items-center justify-center">
                <InstagramIcon className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              {handle}
            </span>
          </a>
        </div>

      </div>

    </section>
  );
}
