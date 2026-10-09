import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, MessageCircle, Camera, Film, Compass, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import IntimateWeddingShowcase from '../components/IntimateWeddingShowcase';
import WeddingFilmsCarousel from '../components/WeddingFilmsCarousel';
import InstagramFeed from '../components/InstagramFeed';
import Testimonials from '../components/Testimonials';
import { socialConfig } from '../data/contentData';

// Image-Led Editorial Photography Services (All 6 Services)
const editorialServices = [
  {
    id: 'weddings',
    number: '01',
    badge: 'SIGNATURE SERVICE',
    title: 'Wedding & Reception Photography',
    subtitle: 'Candid Moments • Cinematic Films • Drone Coverage',
    description: 'Complete celebration coverage capturing authentic rituals, raw emotions, and candid moments with timeless cinematic elegance.',
    image: '/gallery/web/wedding/wedding_17.webp',
  },
  {
    id: 'prewedding',
    number: '02',
    badge: 'MOST POPULAR',
    title: 'Pre-Wedding & Couple Shoots',
    subtitle: 'Romantic Locations • Creative Concepts • Teaser Film',
    description: 'Intimate, unscripted couple sessions framed by breathtaking scenic light, historic venues, and creative direction.',
    image: '/gallery/web/prewedding/prewedding_14.webp',
  },
  {
    id: 'bridal',
    number: '03',
    badge: 'FINE ART PORTRAITURE',
    title: 'Bridal & Groom Portraits',
    subtitle: 'Detailed Elegance • Jewelry & Attire • Studio & Venue',
    description: 'Editorial solo portraiture celebrating the heirloom details of your wedding attire, jewelry, royal poise, and intimate beauty.',
    image: '/gallery/web/bridal/bridal_11.webp',
  },
  {
    id: 'maternity',
    number: '04',
    badge: 'PRECIOUS MOMENTS',
    title: 'Maternity & Motherhood',
    subtitle: 'Warm & Gentle • Studio or Outdoor • Comfortable Pace',
    description: 'Gentle, warm, and radiant portraiture celebrating the miraculous journey of motherhood in calm indoor or scenic outdoor sunset settings.',
    image: '/gallery/web/maternity/maternity_10.webp',
  },
  {
    id: 'baby',
    number: '05',
    badge: 'HEIRLOOM ARCHIVES',
    title: 'Baby & Newborn Photography',
    subtitle: 'Safe & Cozy • Gentle Posing • Milestone Smiles',
    description: 'Cozy, baby-safe sessions capturing newborn innocence, tiny hands, playful smiles, and tender parent bonds.',
    image: '/gallery/web/baby/baby_10.webp',
  },
  {
    id: 'events',
    number: '06',
    badge: 'SPECIAL CELEBRATIONS',
    title: 'Events, Birthdays & Celebrations',
    subtitle: 'Lively Candids • Family Groups • Full Event Coverage',
    description: 'Vibrant, high-energy coverage for milestone birthdays, anniversaries, and family celebrations with fast sneak-peek turnaround.',
    image: '/gallery/web/birthday/birthday_15.webp',
  },
];

// Tripled dataset for infinite services carousel
const displayServices = [
  ...editorialServices,
  ...editorialServices,
  ...editorialServices,
];

// Verifiable Business Pillars & Strengths
const whyChoosePillars = [
  {
    id: 'candid',
    badge: '01 / CANDID STORYTELLING',
    title: 'Unobtrusive Documentary Storytelling',
    subtitle: 'Real Emotions • Unposed Rituals',
    description: 'We blend seamlessly into your celebrations, capturing spontaneous tears, laughter, and sacred ritual nuances without awkward staging or disruptive interruptions.',
    icon: Camera,
  },
  {
    id: 'cinema',
    badge: '02 / CINEMATIC CRAFT',
    title: 'Bespoke 4K Wedding Films',
    subtitle: 'Cinema Lenses • Natural Audio Design',
    description: 'Tailor-made wedding films crafted with cinema-grade lenses, rich natural soundscapes, and bespoke color grading that feels like an editorial feature film.',
    icon: Film,
  },
  {
    id: 'destination',
    badge: '03 / NATIONWIDE REACH',
    title: 'Pan-India Destination Coverage',
    subtitle: 'Heritage Palaces • Coastal Celebrations',
    description: 'Experienced multi-camera crews equipped to travel anywhere in India—from heritage palace weddings in Rajasthan to coastal Goa celebrations.',
    icon: Compass,
  },
  {
    id: 'archival',
    badge: '04 / TIMELESS PRESERVATION',
    title: 'Archival Heirloom Deliverables',
    subtitle: 'Handcrafted Albums • 4K Digital Vault',
    description: 'Enduring preservation through handcrafted flush-mount heirloom albums, private high-resolution online galleries, and rapid sneak-peek previews.',
    icon: ShieldCheck,
  },
];

// Tripled pillars dataset to support continuous seamless infinite sliding
const displayPillars = [
  ...whyChoosePillars,
  ...whyChoosePillars,
  ...whyChoosePillars,
];

export default function HomePage() {
  // Viewport mode: 'mobile' | 'tablet' | 'desktop'
  const [viewportMode, setViewportMode] = useState('desktop');
  const [reducedMotion, setReducedMotion] = useState(false);

  // --- Services Carousel State & Drag Refs ---
  const [serviceIndex, setServiceIndex] = useState(6); // Start at middle set (indices 6-11)
  const [isServiceTransitioning, setIsServiceTransitioning] = useState(true);
  const [isServicesPaused, setIsServicesPaused] = useState(false);
  const [serviceDragOffset, setServiceDragOffset] = useState(0);
  const [isDraggingServices, setIsDraggingServices] = useState(false);
  const servicesStartXRef = useRef(0);
  const servicesIsDraggingRef = useRef(false);
  const servicesMovedRef = useRef(false);

  // --- Why Choose JumpClicks Carousel State & Drag Refs ---
  const [pillarIndex, setPillarIndex] = useState(4); // Start at middle set (indices 4-7)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPillarsPaused, setIsPillarsPaused] = useState(false);
  const [pillarDragOffset, setPillarDragOffset] = useState(0);
  const [isDraggingPillars, setIsDraggingPillars] = useState(false);
  const pillarsStartXRef = useRef(0);
  const pillarsIsDraggingRef = useRef(false);
  const pillarsMovedRef = useRef(false);

  // Viewport & Reduced Motion Detection
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkViewport = () => {
      const w = window.innerWidth;
      if (w >= 1024) {
        setViewportMode('desktop');
      } else if (w >= 768) {
        setViewportMode('tablet');
      } else {
        setViewportMode('mobile');
      }
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const motionHandler = (e) => setReducedMotion(e.matches);
    motionQuery.addEventListener('change', motionHandler);

    return () => {
      window.removeEventListener('resize', checkViewport);
      motionQuery.removeEventListener('change', motionHandler);
    };
  }, []);

  // Global mousemove / mouseup for smooth dragging even if cursor leaves element
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (pillarsIsDraggingRef.current) {
        const diff = e.clientX - pillarsStartXRef.current;
        if (Math.abs(diff) > 5) pillarsMovedRef.current = true;
        setPillarDragOffset(diff);
      }
      if (servicesIsDraggingRef.current) {
        const diff = e.clientX - servicesStartXRef.current;
        if (Math.abs(diff) > 5) servicesMovedRef.current = true;
        setServiceDragOffset(diff);
      }
    };

    const handleGlobalMouseUp = () => {
      if (pillarsIsDraggingRef.current) {
        pillarsIsDraggingRef.current = false;
        setIsDraggingPillars(false);
        setIsPillarsPaused(false);
        setPillarDragOffset((curr) => {
          if (curr < -40) {
            setPillarIndex((prev) => prev + 1);
          } else if (curr > 40) {
            setPillarIndex((prev) => prev - 1);
          }
          return 0;
        });
      }

      if (servicesIsDraggingRef.current) {
        servicesIsDraggingRef.current = false;
        setIsDraggingServices(false);
        setIsServicesPaused(false);
        setServiceDragOffset((curr) => {
          if (curr < -40) {
            setServiceIndex((prev) => prev + 1);
          } else if (curr > 40) {
            setServiceIndex((prev) => prev - 1);
          }
          return 0;
        });
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  // --- Services Autoplay ---
  useEffect(() => {
    if (isServicesPaused || isDraggingServices || reducedMotion) return;

    const timer = setInterval(() => {
      setServiceIndex((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(timer);
  }, [isServicesPaused, isDraggingServices, reducedMotion]);

  // Seamless Services Infinite Looping
  const handleServiceTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;

    if (serviceIndex >= 12) {
      setIsServiceTransitioning(false);
      setServiceIndex(serviceIndex - 6);
    } else if (serviceIndex < 6) {
      setIsServiceTransitioning(false);
      setServiceIndex(serviceIndex + 6);
    }
  };

  useEffect(() => {
    if (!isServiceTransitioning) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsServiceTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isServiceTransitioning]);

  const prevService = () => {
    setServiceIndex((prev) => prev - 1);
  };

  const nextService = () => {
    setServiceIndex((prev) => prev + 1);
  };

  const handleServiceDotClick = (targetIndex) => {
    const currentActive = ((serviceIndex % editorialServices.length) + editorialServices.length) % editorialServices.length;
    const diff = targetIndex - currentActive;
    setServiceIndex((prev) => prev + diff);
  };

  // Services Touch Drag
  const handleServiceTouchStart = (e) => {
    servicesIsDraggingRef.current = true;
    servicesStartXRef.current = e.touches[0].clientX;
    servicesMovedRef.current = false;
    setIsDraggingServices(true);
    setIsServicesPaused(true);
  };

  const handleServiceTouchMove = (e) => {
    if (!servicesIsDraggingRef.current) return;
    const diff = e.touches[0].clientX - servicesStartXRef.current;
    if (Math.abs(diff) > 5) servicesMovedRef.current = true;
    setServiceDragOffset(diff);
  };

  const handleServiceTouchEnd = () => {
    if (!servicesIsDraggingRef.current) return;
    servicesIsDraggingRef.current = false;
    setIsDraggingServices(false);
    setIsServicesPaused(false);
    if (serviceDragOffset < -40) {
      nextService();
    } else if (serviceDragOffset > 40) {
      prevService();
    }
    setServiceDragOffset(0);
  };

  const handleServiceMouseDown = (e) => {
    e.preventDefault();
    servicesIsDraggingRef.current = true;
    servicesStartXRef.current = e.clientX;
    servicesMovedRef.current = false;
    setIsDraggingServices(true);
    setIsServicesPaused(true);
  };

  const activeServiceDot = ((serviceIndex % editorialServices.length) + editorialServices.length) % editorialServices.length;

  // --- Why Choose JumpClicks Autoplay ---
  useEffect(() => {
    if (isPillarsPaused || isDraggingPillars || reducedMotion) return;

    const timer = setInterval(() => {
      setPillarIndex((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPillarsPaused, isDraggingPillars, reducedMotion]);

  // Seamless Looping Boundary Reset for Pillars
  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;

    if (pillarIndex >= 8) {
      setIsTransitioning(false);
      setPillarIndex(pillarIndex - 4);
    } else if (pillarIndex < 4) {
      setIsTransitioning(false);
      setPillarIndex(pillarIndex + 4);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning]);

  const prevPillar = () => {
    setPillarIndex((prev) => prev - 1);
  };

  const nextPillar = () => {
    setPillarIndex((prev) => prev + 1);
  };

  const handlePillarDotClick = (targetIndex) => {
    const currentActiveDot = ((pillarIndex % whyChoosePillars.length) + whyChoosePillars.length) % whyChoosePillars.length;
    const diff = targetIndex - currentActiveDot;
    setPillarIndex((prev) => prev + diff);
  };

  // Pillars Drag Handlers
  const handlePillarMouseDown = (e) => {
    e.preventDefault();
    pillarsIsDraggingRef.current = true;
    pillarsStartXRef.current = e.clientX;
    pillarsMovedRef.current = false;
    setIsDraggingPillars(true);
    setIsPillarsPaused(true);
  };

  const handlePillarTouchStart = (e) => {
    pillarsIsDraggingRef.current = true;
    pillarsStartXRef.current = e.touches[0].clientX;
    pillarsMovedRef.current = false;
    setIsDraggingPillars(true);
    setIsPillarsPaused(true);
  };

  const handlePillarTouchMove = (e) => {
    if (!pillarsIsDraggingRef.current) return;
    const diff = e.touches[0].clientX - pillarsStartXRef.current;
    if (Math.abs(diff) > 5) pillarsMovedRef.current = true;
    setPillarDragOffset(diff);
  };

  const handlePillarTouchEnd = () => {
    if (!pillarsIsDraggingRef.current) return;
    pillarsIsDraggingRef.current = false;
    setIsDraggingPillars(false);
    setIsPillarsPaused(false);
    if (pillarDragOffset < -40) {
      nextPillar();
    } else if (pillarDragOffset > 40) {
      prevPillar();
    }
    setPillarDragOffset(0);
  };

  const activePillarDot = ((pillarIndex % whyChoosePillars.length) + whyChoosePillars.length) % whyChoosePillars.length;

  return (
    <div className="bg-[#000000] text-white">
      {/* 100vh Full-Bleed KnotsbyAMP Style Hero */}
      <Hero />

      {/* Editorial Intimate Wedding Showcase (Matches User Reference) */}
      <IntimateWeddingShowcase />

      {/* Cinematic Wedding Films Carousel with Mouse & Touch Drag */}
      <WeddingFilmsCarousel />

      {/* 1. Photography & Cinema Services — Image-Led Editorial Design (All 6 Services with Drag & Autoplay) */}
      <section 
        className="py-20 sm:py-24 bg-[#000000] border-none select-none relative"
        onMouseEnter={() => setIsServicesPaused(true)}
        onMouseLeave={() => setIsServicesPaused(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-12 sm:mb-14 gap-4 text-center sm:text-left select-none">
            <div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#df2531] font-semibold block mb-2 font-mono">
                OUR EXPERTISE
              </span>
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-normal text-white uppercase tracking-[0.15em] leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                Photography & Cinema Services
              </h2>
              <p 
                className="mt-3 text-xs sm:text-sm text-neutral-400 italic max-w-xl leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                Tailored visual coverage for weddings, pre-weddings, portraits, and cherished family milestones across India.
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={prevService}
                onMouseDown={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-none bg-white/5 hover:bg-white/15 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer select-none caret-transparent"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
              </button>
              <button
                onClick={nextService}
                onMouseDown={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-none bg-white/5 hover:bg-white/15 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer select-none caret-transparent"
                aria-label="Next service"
              >
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </div>

          {/* Draggable Smooth Moving Track for All 6 Services */}
          <div 
            className="w-full overflow-hidden py-2 select-none"
            onMouseDown={handleServiceMouseDown}
            onTouchStart={handleServiceTouchStart}
            onTouchMove={handleServiceTouchMove}
            onTouchEnd={handleServiceTouchEnd}
          >
            <div
              onTransitionEnd={handleServiceTransitionEnd}
              className={`flex gap-6 items-stretch will-change-transform ${
                isDraggingServices ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              style={{
                transform: viewportMode === 'desktop'
                  ? `translateX(calc(-${serviceIndex} * (100% + 1.5rem) / 3 + ${serviceDragOffset}px))`
                  : viewportMode === 'tablet'
                  ? `translateX(calc(-${serviceIndex} * (100% + 1.5rem) / 2 + ${serviceDragOffset}px))`
                  : `translateX(calc(-${serviceIndex} * (100% + 1.5rem) + ${serviceDragOffset}px))`,
                transition: isDraggingServices
                  ? 'none'
                  : isServiceTransitioning && !reducedMotion
                  ? 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1)'
                  : 'none',
              }}
            >
              {displayServices.map((svc, idx) => (
                <div
                  key={`${svc.id}-${idx}`}
                  className="w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] flex-shrink-0 select-none"
                >
                  <Link
                    to="/services"
                    onClick={(e) => {
                      if (servicesMovedRef.current) e.preventDefault();
                    }}
                    className="group relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] rounded-none overflow-hidden bg-black border-0 border-transparent outline-none ring-0 shadow-none hover:border-0 hover:outline-none hover:ring-0 hover:shadow-none transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 cursor-pointer select-none block h-full"
                    style={{ isolation: 'isolate' }}
                  >
                    {/* Background Image with subtle zoom on hover - 100% natural, vibrant, zero tint */}
                    <img
                      src={svc.image}
                      alt={svc.title}
                      draggable="false"
                      className="absolute -inset-[1px] w-[calc(100%+2px)] h-[calc(100%+2px)] max-w-none object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                      loading="lazy"
                    />

                    {/* Clean localized bottom gradient strictly behind text for readability — zero tint over couple or photography */}
                    <div className="absolute -inset-x-2 bottom-0 h-[50%] bg-gradient-to-t from-black via-black/85 via-black/40 to-transparent pointer-events-none z-0" />

                    {/* Card Top: Number & Category Badge (Border-free clean design) */}
                    <div className="relative z-10 flex items-center justify-between select-none">
                      <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/90 bg-black/60 px-2.5 py-1 border-0 outline-none backdrop-blur-md">
                        {svc.badge}
                      </span>
                      <span className="text-[11px] font-mono tracking-widest text-white/60">
                        {svc.number}
                      </span>
                    </div>

                    {/* Card Bottom: Typography & CTA with enhanced contrast */}
                    <div className="relative z-10 space-y-2 select-none">
                      <h3 
                        className="text-2xl sm:text-[1.75rem] font-normal text-white uppercase tracking-wider leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
                        style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                      >
                        {svc.title}
                      </h3>
                      <p className="text-[11px] font-mono tracking-wider text-[#ff5c6a] uppercase font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">
                        {svc.subtitle}
                      </p>
                      <p className="text-xs text-neutral-200 font-normal leading-relaxed line-clamp-2 drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">
                        {svc.description}
                      </p>
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-white group-hover:text-[#ff5c6a] transition-colors drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">
                          <span>Explore Services</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators for All 6 Services */}
          <div className="flex items-center justify-center gap-2 mt-8 select-none">
            {editorialServices.map((_, i) => (
              <button
                key={i}
                onClick={() => handleServiceDotClick(i)}
                onMouseDown={(e) => e.preventDefault()}
                className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer select-none caret-transparent ${
                  activeServiceDot === i ? 'w-8 bg-[#df2531]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Jump to service ${i + 1}`}
              />
            ))}
          </div>

          {/* Working View All Services Link */}
          <div className="text-center mt-10 sm:mt-12 select-none">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-none bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300"
            >
              <span>View All 6 Services Detailed Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Instagram-Style Photography Feed (Inspired by User Reference) */}
      <InstagramFeed 
        handle={socialConfig.instagramHandle} 
        profileUrl={socialConfig.instagramUrl} 
      />

      {/* Editorial Client Testimonials — "WHAT OUR CLIENTS SAY" (Matches User Reference Screenshot) */}
      <Testimonials />

      {/* 2. Client Stories / Why Choose JumpClicks — Refined Compact Carousel with Mouse & Touch Drag */}
      <section 
        className="py-20 sm:py-24 bg-[#050507] border-y border-white/5 relative select-none"
        onMouseEnter={() => setIsPillarsPaused(true)}
        onMouseLeave={() => setIsPillarsPaused(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-12 sm:mb-14 gap-4 text-center sm:text-left select-none">
            <div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#df2531] font-semibold block mb-2 font-mono">
                OUR COMMITMENT
              </span>
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-normal text-white uppercase tracking-[0.15em] leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                Why Choose JumpClicks
              </h2>
              <p 
                className="mt-2 text-xs sm:text-sm text-neutral-400 italic max-w-xl leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              >
                Stories of craft, authenticity, and enduring memories captured across India.
              </p>
            </div>

            {/* Understated Carousel Navigation Controls */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={prevPillar}
                onMouseDown={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-none bg-white/5 hover:bg-white/15 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer select-none caret-transparent"
                aria-label="Previous core strength"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
              </button>
              <button
                onClick={nextPillar}
                onMouseDown={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-none bg-white/5 hover:bg-white/15 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer select-none caret-transparent"
                aria-label="Next core strength"
              >
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </div>

          {/* Smooth Continuous Moving Track (Autoplay & Draggable) */}
          <div 
            className="w-full overflow-hidden py-2 select-none"
            onMouseDown={handlePillarMouseDown}
            onTouchStart={handlePillarTouchStart}
            onTouchMove={handlePillarTouchMove}
            onTouchEnd={handlePillarTouchEnd}
          >
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex gap-6 items-stretch will-change-transform ${
                isDraggingPillars ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              style={{
                transform: viewportMode !== 'mobile'
                  ? `translateX(calc(-${pillarIndex} * (50% + 0.75rem) + ${pillarDragOffset}px))`
                  : `translateX(calc(-${pillarIndex} * (100% + 1.5rem) + ${pillarDragOffset}px))`,
                transition: isDraggingPillars
                  ? 'none'
                  : isTransitioning && !reducedMotion
                  ? 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1)'
                  : 'none',
              }}
            >
              {displayPillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={`${pillar.id}-${idx}`}
                    className="w-full md:w-[calc((100%-1.5rem)/2)] flex-shrink-0 p-8 sm:p-10 bg-[#09090c] border border-white/10 hover:border-white/20 transition-colors duration-300 flex flex-col justify-between rounded-none shadow-xl select-none"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#df2531]">
                          {pillar.badge}
                        </span>
                        <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
                          <IconComp className="w-4 h-4 stroke-[1.5]" />
                        </div>
                      </div>

                      <h3 
                        className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-wider mb-2 leading-snug"
                        style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                      >
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase mb-5">
                        {pillar.subtitle}
                      </p>

                      <p className="text-sm text-neutral-300 font-light leading-relaxed">
                        "{pillar.description}"
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                      <span>JumpClicks Cinematography</span>
                      <span className="text-[#df2531]/80">Verified Standard</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Understated Carousel Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8 select-none">
            {whyChoosePillars.map((_, i) => (
              <button
                key={i}
                onClick={() => handlePillarDotClick(i)}
                onMouseDown={(e) => e.preventDefault()}
                className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer select-none caret-transparent ${
                  activePillarDot === i ? 'w-8 bg-[#df2531]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Jump to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final Booking CTA Banner — Positioned at the very end with signature crimson gradient */}
      <section className="py-20 bg-gradient-to-r from-[#2a060a] via-[#0d0d10] to-[#1c0508] border-none select-none cursor-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 select-none cursor-default">
          <h2 
            className="text-3xl sm:text-5xl font-normal text-white select-none cursor-default"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            Let’s Create Timeless Memories Together
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto select-none cursor-default">
            Contact us today to check our availability for your date and discuss customized packages.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#df2531] hover:bg-[#b81b25] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#df2531]/30 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Shoot</span>
            </Link>
            <a
              href="https://wa.me/919172322302?text=Hi%20Jumpclicks%20team,%20I'd%20like%20to%20check%20availability%20for%20a%20shoot."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

