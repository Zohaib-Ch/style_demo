'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from '@/lib/gsap';
import { Container } from '@/components/common/container';
import { Award, ShieldCheck, Leaf } from 'lucide-react';

const AWARDS = [
  {
    id: 1,
    year: '2025',
    title: 'Global Sustainability Excellence',
    organization: 'Textile Exchange',
    description: 'Awarded for pioneering closed-loop water recycling systems across all manufacturing hubs.',
    icon: Leaf,
    image: '/images/awards/sustainability.png'
  },
  {
    id: 2,
    year: '2024',
    title: 'LEED Platinum Certification',
    organization: 'U.S. Green Building Council',
    description: 'Achieved highest possible rating for our Dhaka manufacturing facility.',
    icon: ShieldCheck,
    image: '/images/awards/leed.png'
  },
  {
    id: 3,
    year: '2023',
    title: 'Best Vertical Integration',
    organization: 'Apparel Sourcing Awards',
    description: 'Recognized for seamless supply chain transparency from fiber to retail garment.',
    icon: Award,
    image: '/images/awards/vertical.png'
  },
  {
    id: 4,
    year: '2023',
    title: 'Fair Trade Employer of the Year',
    organization: 'Fair Trade International',
    description: 'Honored for exceptional worker welfare programs and community education initiatives.',
    icon: Award,
    image: '/images/awards/fairtrade.png'
  }
];

export function AwardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Individual scroll trigger for each award item
      const items = gsap.utils.toArray<HTMLElement>('.award-item');
      
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              once: true
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="awards"
      className="relative py-20 sm:py-32 bg-stone-50 border-t border-stone-200/50"
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative">
          
          {/* Left Column: Header (Sticky) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:sticky lg:top-32 lg:h-fit z-10">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-black inline-block" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-black">
                Recognition
              </span>
            </div>
            <h2 className="font-heading font-black text-black text-3xl sm:text-5xl leading-[1.1] tracking-tight">
              Awards & <br />
              <span className="text-stone-400">Accolades.</span>
            </h2>
            <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed mt-4 max-w-sm">
              Our commitment to quality, ecological stewardship, and ethical manufacturing has been recognized globally by leading industry authorities.
            </p>
          </div>

          {/* Right Column: Awards List */}
          <div className="w-full lg:w-2/3" ref={listRef}>
            <div className="flex flex-col border-t border-stone-200">
              {AWARDS.map((award) => {
                const Icon = award.icon;
                return (
                  <div 
                    key={award.id}
                    className="award-item group flex flex-col sm:flex-row gap-6 sm:gap-12 py-8 sm:py-12 border-b border-stone-200 hover:bg-white transition-colors duration-300 px-4 sm:px-6 -mx-4 sm:-mx-6 cursor-default"
                  >
                    {/* Award Image Thumbnail */}
                    <div className="relative w-full sm:w-48 aspect-[16/9] sm:aspect-square shrink-0 rounded-2xl overflow-hidden bg-stone-100 shadow-sm border border-stone-200/60">
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 192px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-stone-700 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center gap-2 flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-heading font-bold text-xl text-stone-400 group-hover:text-black transition-colors duration-300">
                          {award.year}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-stone-300"></span>
                        <span className="text-xs uppercase tracking-widest font-semibold text-stone-500">
                          {award.organization}
                        </span>
                      </div>
                      
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-black leading-tight sm:group-hover:translate-x-2 transition-transform duration-500">
                        {award.title}
                      </h3>
                      
                      <p className="text-sm font-light text-stone-600 mt-2 leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}

export default AwardsSection;
