'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from '@/lib/gsap';
import { Container } from '@/components/common/container';

const ECO_CERTIFICATIONS = [
  { name: 'GOTS', label: 'Global Organic Textile Standard' },
  { name: 'OEKO-TEX', label: 'Standard 100 Eco-Safe' },
  { name: 'LEED', label: 'Gold Certified Facility' },
  { name: 'ISO 14001', label: 'Environmental Management' }
];

export function SustainabilitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // 1. Text Block Stagger Reveal
      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }

      // 2. Image Clip-Path Reveal
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { clipPath: 'inset(0% 0% 0% 100%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: visualRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }

      // 3. Inner Image Parallax Scrub
      const innerImg = visualRef.current?.querySelector('.sus-img-inner');
      if (innerImg) {
        gsap.fromTo(
          innerImg,
          { yPercent: -15, scale: 1.15 },
          {
            yPercent: 15,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          }
        );
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="sustainability"
      className="relative py-20 sm:py-36 bg-background overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Vision & Metrics */}
          <div ref={textRef} className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-primary inline-block" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">
                Ecological Responsibility
              </span>
            </div>

            <h2 className="font-heading font-black text-foreground text-3xl sm:text-5xl leading-none tracking-tight">
              Conscious Craft<span className="text-primary">.</span>
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed max-w-prose">
              Our factories are engineered with the environment in mind. From high-capacity rooftop 
              solar arrays supplying clean energy to closed-loop water filtration systems that recycle 
              processing water, we prove that scale and ecological stewardship can coexist.
            </p>

            {/* Metrics block */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 border-t border-stone-200/60 pt-6 sm:pt-8 mt-2">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold">
                  Solar Energy Share
                </span>
                <span className="font-heading font-black text-2xl sm:text-4xl text-foreground">
                  65%
                </span>
                <span className="text-xs text-muted-foreground font-light leading-snug">
                  Powered by clean grid solar installations.
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold">
                  Water Recycled
                </span>
                <span className="font-heading font-black text-2xl sm:text-4xl text-foreground">
                  98%
                </span>
                <span className="text-xs text-muted-foreground font-light leading-snug">
                  Re-routed through our internal biological filtration.
                </span>
              </div>
            </div>

            {/* Certifications Row */}
            <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-stone-200/60">
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold">
                Industry Certifications
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {ECO_CERTIFICATIONS.map((cert) => (
                  <div 
                    key={cert.name} 
                    className="flex flex-col rounded-lg border border-stone-200/50 bg-stone-50/50 p-2 sm:p-3 hover:border-primary/20 transition-all duration-300"
                  >
                    <span className="font-heading font-black text-xs text-primary">
                      {cert.name}
                    </span>
                    <span className="text-[9px] text-muted-foreground font-medium truncate mt-1">
                      {cert.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Visual Frame */}
          <div ref={visualRef} className="relative w-full rounded-[24px] overflow-hidden shadow-[0_20px_45px_-15px_rgba(0,0,0,0.1)] bg-stone-100 aspect-[4/3]">
            <div className="sus-img-inner absolute inset-0 w-full h-[120%] -top-[10%]">
              <Image
                src="/images/sustainability/solar.png"
                alt="Solar plant integration on factory roof"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none" />
              
            <div className="absolute bottom-6 left-6 z-20">
              <span className="text-[9px] uppercase tracking-widest text-white/70 block leading-none font-mono">
                LEED GOLD CERTIFIED FACILITY
              </span>
              <span className="text-sm font-semibold text-white mt-1.5 block">
                Solar Grid Installation · Dhaka
              </span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default SustainabilitySection;
