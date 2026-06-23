'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from '@/lib/gsap';
import { Container } from '@/components/common/container';
import { ArrowRight } from 'lucide-react';

const GALLERY = [
  {
    id: 1,
    src: '/images/life/design-studio.png', // Placeholder, we can let user generate it if needed
    caption: 'Milan Design Studio Collaboration',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 2,
    src: '/images/life/factory-floor.png',
    caption: 'Precision Engineering at Dhaka Plant',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 3,
    src: '/images/life/community.png',
    caption: 'Community Education Initiative',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 4,
    src: '/images/life/quality-control.png',
    caption: 'Quality Control Laboratory',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    aspect: 'aspect-[16/9]'
  }
];

export function LifeAtStyleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Fade in images with a stagger
      gsap.fromTo(
        '.gallery-img',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="life-at-style"
      className="relative py-20 sm:py-32 bg-white"
    >
      <Container>
        {/* Header & Intro */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start md:items-end mb-16 sm:mb-24">
          <div className="flex flex-col gap-4 max-w-2xl flex-1">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-black inline-block" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-black">
                Our People
              </span>
            </div>
            <h2 className="font-heading font-black text-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Life At <br />
              <span className="text-stone-400">Style.</span>
            </h2>
          </div>
          
          <div className="flex-1 max-w-xl pb-2">
            <p className="text-stone-600 text-lg sm:text-xl font-light leading-relaxed mb-6">
              Behind the robotics and massive scale are thousands of dedicated artisans, engineers, and designers. 
              We build careers, support communities, and foster a culture of constant innovation.
            </p>
            <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:text-stone-500 transition-colors">
              Explore Careers
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Gallery Grid (Mobile Carousel, Desktop Grid) */}
        <div 
          ref={galleryRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-3 sm:gap-6 -mx-5 px-5 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {GALLERY.map((item) => (
            <div 
              key={item.id} 
              className={`gallery-img group relative overflow-hidden rounded-2xl bg-stone-100 flex-shrink-0 w-[85vw] md:w-auto snap-center ${item.colSpan} ${item.aspect}`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white font-semibold tracking-wide">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </Container>
    </section>
  );
}

export default LifeAtStyleSection;
