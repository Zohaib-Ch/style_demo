'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from '@/lib/gsap';
import { Container } from '@/components/common/container';

const CAPABILITIES = [
  {
    id: 'spinning',
    num: '01',
    tag: 'FIBER & SPINNING',
    title: 'Precision Spinning',
    description: 'Sourcing the finest long-staple organic cotton and merino wool, spun into yarns of exceptional tensile strength and soft hand-feel.',
    statValue: '25,000 Tons',
    statLabel: 'Annual Capacity',
    image: '/images/capabilities/spinning.png',
    specs: [
      { name: 'Material', value: '100% GOTS Cotton' },
      { name: 'Spindle Speed', value: '18,500 RPM' },
      { name: 'Yarn Count', value: '20s to 80s Ne' }
    ]
  },
  {
    id: 'weaving',
    num: '02',
    tag: 'WEAVING & KNITTING',
    title: 'Advanced Weaving',
    description: 'Transforming premium yarns into high-performance knits and luxury double-face jacquards with automated defect detection.',
    statValue: '45M Yards',
    statLabel: 'Annual Output',
    image: '/images/capabilities/weaving.png',
    specs: [
      { name: 'Technology', value: 'High-Speed Air-Jet' },
      { name: 'Quality System', value: 'Laser Thread Scan' },
      { name: 'Fabric Widths', value: 'Up to 320 cm' }
    ]
  },
  {
    id: 'design',
    num: '03',
    tag: 'GARMENT ARCHITECTURE',
    title: 'Garment Tech & Design',
    description: 'Where human design intelligence meets state-of-the-art production, bespoke pattern creation, and ecological washing.',
    statValue: '12M Units',
    statLabel: 'Garments Crafted',
    image: '/images/capabilities/design.png',
    specs: [
      { name: 'Software', value: '3D CLO / Optitex Pro' },
      { name: 'Adjustments', value: 'Digital Micro-Fit' },
      { name: 'Washing Tech', value: 'Ozone Eco-Wash' }
    ]
  }
];

export function CapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      
      const items = gsap.utils.toArray('.cap-item');
      
      items.forEach((item: any, index: number) => {
        const imgContainer = item.querySelector('.cap-img-container');
        const imgInner = item.querySelector('.cap-img-inner');
        const textContent = item.querySelector('.cap-text-content');
        
        // 1. Image Reveal (Clip Path)
        // Alternating clip path directions for left/right alignment
        const isReverse = index % 2 !== 0;
        const initialClipPath = isReverse ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)';
        
        gsap.fromTo(
          imgContainer,
          { clipPath: initialClipPath },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              once: true
            }
          }
        );

        // 2. Image Parallax (Scrub)
        if (imgInner) {
          gsap.fromTo(
            imgInner,
            { yPercent: -15 },
            {
              yPercent: 15,
              ease: 'none',
              scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              }
            }
          );
        }

        // 3. Text Reveal (Stagger)
        if (textContent) {
          gsap.fromTo(
            textContent.children,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 75%',
                once: true
              }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative py-20 sm:py-32 bg-white overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16 sm:mb-24 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-black inline-block" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-black">
              Vertical Integration
            </span>
          </div>
          <h2 className="font-heading font-black text-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Our Manufacturing <br />
            <span className="text-stone-400">Capabilities.</span>
          </h2>
          <p className="text-stone-600 text-lg sm:text-xl font-light leading-relaxed mt-2 max-w-2xl">
            From raw fiber sourcing to completed retail garments, we control every step of the supply chain 
            to guarantee unmatched quality and environmental responsibility.
          </p>
        </div>

        {/* Capabilities List */}
        <div className="flex flex-col gap-20 sm:gap-32">
          {CAPABILITIES.map((cap, index) => (
            <div 
              key={cap.id}
              className={`cap-item flex flex-col md:flex-row gap-8 sm:gap-10 lg:gap-20 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Column */}
              <div className="w-full md:w-1/2">
                {/* The clipping container */}
                <div className="cap-img-container relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-100">
                  {/* The inner parallax wrapper (taller than container) */}
                  <div className="cap-img-inner absolute inset-0 w-full h-[130%] -top-[15%]">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 z-10 rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-bold text-black tracking-widest uppercase shadow-sm">
                    {cap.num}
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-1/2 flex flex-col justify-center cap-text-content">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#6B1E28]">
                    {cap.tag}
                  </span>
                </div>
                
                <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-black leading-tight mb-4">
                  {cap.title}
                </h3>
                
                <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light mb-8 max-w-lg">
                  {cap.description}
                </p>

                {/* Specs and stats section */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 xl:gap-12 pt-6 border-t border-stone-200">
                  
                  {/* Highlight Metric */}
                  <div className="flex flex-col gap-1 shrink-0">
                    <span className="text-3xl font-heading font-black text-black leading-none">
                      {cap.statValue}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mt-1">
                      {cap.statLabel}
                    </span>
                  </div>

                  {/* Micro Technical Specs */}
                  <div className="flex flex-col gap-2 justify-center sm:border-l-2 border-[#6B1E28]/20 sm:pl-6 xl:pl-6">
                    {cap.specs.map((spec) => (
                      <div key={spec.name} className="flex items-center gap-0">
                        <span className="text-xs font-bold text-black min-w-[100px] uppercase tracking-wider">
                          {spec.name}
                        </span>
                        <span className="text-sm font-medium text-stone-500">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default CapabilitiesSection;
