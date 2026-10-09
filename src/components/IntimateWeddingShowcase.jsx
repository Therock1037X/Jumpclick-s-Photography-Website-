import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function IntimateWeddingShowcase() {
  const showcaseCouples = [
    {
      id: 1,
      names: 'Karthik & Swetha',
      destination: 'Alibaug Palace',
      image: '/gallery/web/wedding/wedding_20.webp',
      offsetClass: 'lg:-translate-y-6',
      ratioClass: 'aspect-[3/4]',
      style: 'titlecase',
    },
    {
      id: 2,
      names: 'KRISHNA & CONNOR',
      destination: 'Udaipur Heritage',
      image: '/gallery/web/wedding/wedding_21.webp',
      offsetClass: 'lg:translate-y-8',
      ratioClass: 'aspect-[3/4]',
      style: 'uppercase',
    },
    {
      id: 3,
      names: 'SAI & AISHWARYA',
      destination: 'Nandi Hills',
      image: '/gallery/web/prewedding/prewedding_44.webp',
      offsetClass: 'lg:translate-y-0',
      ratioClass: 'aspect-[3/4]',
      style: 'uppercase',
    },
  ];

  return (
    <section className="relative w-full bg-[#fbf9f6] text-neutral-900 py-20 sm:py-24 lg:py-32 overflow-hidden select-none">
      
      {/* Subtle Dotted World Map Graphic in the Background */}
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none opacity-[0.16] overflow-hidden flex items-start justify-end">
        <svg 
          viewBox="0 0 1000 500" 
          className="w-[1200px] h-auto object-cover max-w-none -mr-40 mt-4"
          fill="none" 
          stroke="currentColor"
        >
          {/* Subtle world map dot matrix pattern */}
          <pattern id="dotMap" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#71717a" />
          </pattern>
          <rect width="1000" height="500" fill="url(#dotMap)" />
        </svg>
      </div>

      {/* Asymmetric Warm Linen Background Shape for Right Side (Matches reference card block) */}
      <div className="absolute bottom-0 right-0 w-full lg:w-[62%] h-[75%] lg:h-[82%] bg-[#f3eee5] rounded-tl-[60px] sm:rounded-tl-[100px] lg:rounded-tl-[140px] pointer-events-none" />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-[1550px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Editorial Narrative Column (5 cols) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between pt-2 lg:pt-6">
            <div>
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-900 leading-[1.05] tracking-tight uppercase"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                INTIMATE<br />WEDDING
              </h2>

              <span className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-neutral-500 font-medium block mt-3 mb-6">
                Showcase
              </span>

              <p className="text-neutral-700 text-sm sm:text-[14.5px] leading-[1.8] font-light max-w-md">
                Intimate destination weddings offer an unparalleled chance to revel in the splendor of love amid an awe-inspiring panorama, enveloped by the cherished ones who matter the most. Our destination wedding photographers have mastered the art of seizing the essence of unbridled feelings and unfeigned instances that make these ceremonies so extraordinary. As a premier wedding photography company in India, we encapsulate the moments of an everlasting union that surpasses the constraints of time and space, as an ode to the odyssey of two hearts towards eternity.
              </p>

              {/* Photography Quote */}
              <div className="pt-8 sm:pt-10 max-w-sm">
                <p 
                  className="text-neutral-500 text-sm italic leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  "I like to photograph anyone before they know what their best angles are."
                </p>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mt-1.5 font-sans">
                  — Ellen Von Unwerth
                </span>
              </div>
            </div>

            {/* Action Link & Map Pin Path */}
            <div className="pt-10 sm:pt-14 relative">
              <Link
                to="/contact"
                className="inline-block text-[13px] uppercase tracking-[0.2em] font-semibold text-neutral-900 border-b border-neutral-900 pb-1 hover:text-[#df2531] hover:border-[#df2531] transition-colors"
              >
                Make It Real
              </Link>

              {/* Sinuous Curved Line to Destination with Map Pin */}
              <div className="hidden lg:block absolute left-28 top-12 w-64 h-24 pointer-events-none">
                <svg viewBox="0 0 240 80" className="w-full h-full overflow-visible">
                  <path
                    d="M 0 10 C 60 10, 80 50, 140 50 S 200 20, 240 20"
                    fill="none"
                    stroke="#c7bead"
                    strokeWidth="1.2"
                    strokeDasharray="4 3"
                  />
                  <circle cx="140" cy="50" r="3" fill="#df2531" />
                </svg>
                <div className="absolute left-[132px] top-[26px]">
                  <MapPin className="w-4 h-4 text-[#df2531] fill-[#df2531]/20" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Cascading Couple Showcase Cards (8 cols) */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 lg:gap-7 items-start">
              {showcaseCouples.map((couple) => (
                <div
                  key={couple.id}
                  className={`flex flex-col group transition-transform duration-500 ${couple.offsetClass}`}
                >
                  {/* Photo Card with Natural Aspect Ratio & Refined Shadow */}
                  <Link
                    to="/gallery?category=wedding"
                    className="block overflow-hidden bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.16)] transition-all duration-500 transform group-hover:-translate-y-1.5"
                  >
                    <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-200">
                      <img
                        src={couple.image}
                        alt={couple.names}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                  </Link>

                  {/* Clean Typography Details Under Card (Matches Reference) */}
                  <div className="pt-3.5 text-center sm:text-left">
                    <h3 
                      className={`text-neutral-900 font-medium ${
                        couple.style === 'titlecase'
                          ? 'text-sm sm:text-[14.5px] font-serif font-bold tracking-normal'
                          : 'text-[11px] sm:text-xs uppercase tracking-[0.14em] font-sans font-bold'
                      }`}
                      style={couple.style === 'titlecase' ? { fontFamily: "'Cormorant Garamond', Georgia, serif" } : {}}
                    >
                      {couple.names}
                    </h3>
                    <p className="text-[11px] italic text-neutral-500 mt-0.5 font-light">
                      Destination : {couple.destination}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Right Handwritten "with love" Signature (Exact Reference Element) */}
            <div className="flex justify-end pt-12 sm:pt-16 pr-2 sm:pr-6">
              <span 
                className="text-4xl sm:text-5xl text-neutral-800 font-normal italic select-none transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                style={{ fontFamily: "'Caveat', cursive, 'Brush Script MT', serif" }}
              >
                with love
              </span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
