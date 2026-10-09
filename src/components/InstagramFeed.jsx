import React from 'react';
import { Heart } from 'lucide-react';

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
  handle = '/jumpclicksphotography', 
  profileUrl = 'https://instagram.com/jumpclicksphotography' 
}) {
  // Exact 10 Photography Demo Boxes (5 cols x 2 rows on desktop)
  const feedImages = [
    { id: 1, src: '/gallery/web/wedding/wedding_20.webp', alt: 'Jumpclicks Wedding Gallery 1', likes: 53 },
    { id: 2, src: '/gallery/web/wedding/wedding_2.webp', alt: 'Jumpclicks Wedding Gallery 2', likes: 87 },
    { id: 3, src: '/gallery/web/wedding/wedding_21.webp', alt: 'Jumpclicks Wedding Gallery 3', likes: 142 },
    { id: 4, src: '/gallery/web/wedding/wedding_3.webp', alt: 'Jumpclicks Wedding Gallery 4', likes: 96 },
    { id: 5, src: '/gallery/web/wedding/wedding_10.webp', alt: 'Jumpclicks Wedding Gallery 5', likes: 124 },
    { id: 6, src: '/gallery/web/prewedding/prewedding_36.webp', alt: 'Jumpclicks Prewedding Gallery 6', likes: 168 },
    { id: 7, src: '/gallery/web/prewedding/prewedding_27.webp', alt: 'Jumpclicks Prewedding Gallery 7', likes: 215 },
    { id: 8, src: '/gallery/web/wedding/wedding_27.webp', alt: 'Jumpclicks Wedding Gallery 8', likes: 119 },
    { id: 9, src: '/gallery/web/wedding/wedding_1.webp', alt: 'Jumpclicks Wedding Gallery 9', likes: 175 },
    { id: 10, src: '/gallery/web/wedding/wedding_14.webp', alt: 'Jumpclicks Wedding Gallery 10', likes: 132 },
  ];

  return (
    <section className="relative w-full bg-[#000000] text-white pt-20 sm:pt-24 md:pt-28 pb-14 sm:pb-20 overflow-hidden select-none border-none">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header (Matching Reference Screenshot: FOLLOW US ON INSTAGRAM / @jumpclicksphotography) */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-14 flex flex-col items-center select-none">
          {/* Subtle 1px vertical tick at top center */}
          <div className="w-[1px] h-5 sm:h-6 bg-white/20 mb-4 sm:mb-5" aria-hidden="true" />

          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-light text-white uppercase tracking-[0.34em] sm:tracking-[0.38em] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            Follow Us On Instagram
          </h2>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 sm:mt-2.5 text-sm sm:text-base md:text-[17px] text-neutral-400 hover:text-white italic tracking-wider transition-colors inline-block cursor-pointer"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            @ {handle.replace(/^\//, '')}
          </a>
        </div>
        
        {/* 2. Exact 10 Boxes Grid (5 cols x 2 rows on desktop, 2 cols on mobile) */}
        {/* Hairline-narrow black dividing lines between images matching reference, zero outer border */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[1.5px] sm:gap-[2px] bg-[#000000] border-none">
          {feedImages.map((img) => (
            <a
              key={img.id}
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#0d0c10] aspect-[4/5] block cursor-pointer border-none"
              aria-label={`View post on Instagram (${img.likes} likes)`}
            >
              {/* Image with zero zoom effect */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Desktop Hover Overlay with Likes (heart icon + likes count) */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base tracking-wide drop-shadow-md">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
                  <span>{img.likes} Likes</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 3. Instagram Icon and Handle Link Below Grid (Borderless, clean, matching reference) */}
        <div className="mt-6 sm:mt-8 text-center relative z-10 flex items-center justify-center">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors duration-300 group cursor-pointer border-none bg-transparent"
            aria-label={`Visit Jumpclicks Instagram profile ${handle}`}
          >
            {/* Instagram Gradient Logo */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[1.5px] flex items-center justify-center shadow-sm">
              <div className="w-full h-full bg-[#000000] rounded-[4px] sm:rounded-[6px] flex items-center justify-center">
                <InstagramIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white group-hover:scale-110 transition-transform duration-300" />
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
