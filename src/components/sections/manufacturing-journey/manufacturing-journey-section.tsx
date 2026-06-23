'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from '@/lib/gsap';
import { Container } from '@/components/common/container';

const JOURNEY_STEPS = [
  {
    num: '01',
    tag: 'PHASE 01 // ORIGIN & EARTH',
    title: 'Responsible Sourcing',
    description: 'We partner directly with organic-certified farms to source the highest grade raw cotton and extra-fine merino wool. Every fiber is checked for staple length and purity, ensuring the foundation of our fabrics is ethical, sustainable, and premium.',
    image: '/images/manufacturing/sourcing.png',
    metrics: [
      { label: 'Organic Certification', value: '100% GOTS Certified' },
      { label: 'Sourcing Partners', value: 'Fair-Trade Farms' }
    ]
  },
  {
    num: '02',
    tag: 'PHASE 02 // FIBER REFINEMENT',
    title: 'Precision Spinning',
    description: 'Raw fibers are carded, combed, and drawn into fine slivers before entering our spinning frames. Using state-of-the-art ring-spinning and air-jet technologies, we engineer yarns with high tensile strength and minimal hairiness.',
    image: '/images/manufacturing/spinning.png',
    metrics: [
      { label: 'Daily Output', value: '70+ Tons Refined' },
      { label: 'Fiber Length', value: '32mm Long-Staple' }
    ]
  },
  {
    num: '03',
    tag: 'PHASE 03 // ARCHITECTURAL WEFT',
    title: 'High-Speed Weaving',
    description: 'Our automated weaving systems control warp and weft density with electronic precision. High-speed rapier and air-jet looms process yarns into intricate double-face jacquards and performance fabrics, scanned in real-time for defects.',
    image: '/images/capabilities/weaving.png',
    metrics: [
      { label: 'Inspection System', value: 'Laser Thread-Scan' },
      { label: 'Loom Speed', value: 'Up to 900 RPM' }
    ]
  },
  {
    num: '04',
    tag: 'PHASE 04 // FINAL SILHOUETTE',
    title: 'Bespoke Assembly',
    description: 'Fabric rolls are conditioned and digitally cut with zero-waste layouts. Our master artisans assemble the final silhouettes, applying reinforcing seams and eco-friendly garment washes to guarantee luxury comfort and durability.',
    image: '/images/capabilities/design.png',
    metrics: [
      { label: 'Garment Output', value: '12M+ Units Annually' },
      { label: 'Eco-Washing Tech', value: 'Ozone Zero-Discharge' }
    ]
  }
];

export function ManufacturingJourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // 1. Reveal each staggered step card as it enters the viewport
      const cards = gsap.utils.toArray('.journey-card');
      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              once: true
            }
          }
        );
      });

      // 2. Animate timeline dots as they scroll into view
      const dots = gsap.utils.toArray('.timeline-dot');
      dots.forEach((dot: any) => {
        gsap.fromTo(
          dot,
          { scale: 0.8, backgroundColor: '#E5E0D8' },
          {
            scale: 1.2,
            backgroundColor: '#6B1E28', // Brand primary red
            duration: 0.4,
            scrollTrigger: {
              trigger: dot,
              start: 'top 65%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="manufacturing-journey"
      className="relative py-20 sm:py-36 bg-background overflow-hidden"
    >
      <Container>
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 sm:mb-24 max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-6 bg-primary" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">
              Craftsmanship Process
            </span>
            <span className="h-[1px] w-6 bg-primary" />
          </div>
          <h2 className="font-heading font-black text-foreground text-3xl sm:text-5xl leading-none tracking-tight">
            Manufacturing Journey<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
            Trace the path of our production cycle — an uncompromising dedication to technical precision 
            and sustainable practices at every stage.
          </p>
        </div>

        {/* Timeline Staggered Layout */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Vertical Center Line (Desktop only) */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[1px] bg-stone-200 -translate-x-1/2 pointer-events-none" />

          <div className="flex flex-col gap-16 lg:gap-32">
            {JOURNEY_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`relative flex flex-col lg:flex-row items-start ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  } pl-8 sm:pl-10 lg:pl-0`}
                >
                  
                  {/* Timeline Node Dot */}
                  <div
                    className="timeline-dot absolute left-4 lg:left-1/2 top-4 sm:top-2 lg:top-12 w-3.5 h-3.5 rounded-full border-2 border-background -translate-x-1/2 z-20 shadow-sm"
                    style={{ willChange: 'background-color, transform' }}
                  />

                  {/* Spacer Column (Desktop only) */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Content Column */}
                  <div className="w-full lg:w-1/2 lg:px-12">
                    <div className="journey-card flex flex-col gap-6" style={{ willChange: 'opacity, transform' }}>
                      
                      {/* Step Visual Card */}
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-100 shadow-sm">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <span className="absolute bottom-4 left-4 z-20 font-mono text-[10px] text-white/90 font-bold uppercase tracking-wider">
                          {step.tag}
                        </span>
                      </div>

                      {/* Step Details */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <span className="font-heading font-black text-sm text-primary">
                            {step.num}
                          </span>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
                            STEP {step.num}
                          </span>
                        </div>
                        
                        <h3 className="font-heading font-black text-2xl text-foreground leading-tight">
                          {step.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed font-light">
                          {step.description}
                        </p>

                        {/* Specs grid */}
                        <div className="grid grid-cols-2 gap-4 mt-2 pt-4 border-t border-stone-200/60">
                          {step.metrics.map((m) => (
                            <div key={m.label} className="flex flex-col gap-0.5">
                              <span className="text-[9px] uppercase tracking-wider text-stone-400 font-semibold">
                                {m.label}
                              </span>
                              <span className="text-xs font-semibold text-foreground leading-none">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </Container>
    </section>
  );
}

export default ManufacturingJourneySection;
