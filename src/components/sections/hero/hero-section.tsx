'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from '@/lib/gsap';
import { ArrowUpRight } from 'lucide-react';

const STATS = [
  { value: '45M+', label: 'Yards Annually' },
  { value: '25,000', label: 'Tons of Fiber' },
  { value: '12M', label: 'Garments Crafted' },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // Subtle background zoom in on load
      tl.fromTo(
        bgRef.current,
        { scale: 1.06 },
        { scale: 1, duration: 2.4, ease: 'power3.out' }
      );

      // Stagger headline lines up
      tl.fromTo(
        '.h-line',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, ease: 'power4.out' },
        '-=2.0'
      );

      // Fade in subtext & CTAs
      tl.fromTo(
        '.h-fade',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' },
        '-=0.6'
      );

      // Parallax on scroll
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-end"
    >
      {/* ── Full-bleed Background Image ── */}
      <div ref={bgRef} className="absolute inset-0 z-0 scale-105 origin-center">
        <Image
          src="/images/hero/bg.png"
          alt="Style Industries Manufacturing"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ── Gradient Overlays ── */}
      {/* Left/bottom dark gradient for text legibility — same concept as the reference */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/50 to-black/10 pointer-events-none" />
      {/* Bottom fade to site background colour — bridges hero → sections below */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #FAF8F4)' }} />

      {/* ── Content ── */}
      <div className="relative z-20 px-5 sm:px-10 lg:px-20 pb-20 sm:pb-32 pt-32 sm:pt-48 max-w-5xl">

        {/* Eyebrow */}
        <div className="overflow-hidden mb-6">
          <p className="h-line text-white/60 text-xs uppercase tracking-[0.3em] font-semibold flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-white/40" />
            Vertical Integration · Est. 1994
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading font-black uppercase leading-[0.9] tracking-tight mb-6 sm:mb-8">
          <div className="overflow-hidden">
            <span className="h-line block text-white text-[clamp(1.6rem,8vw,5.5rem)]">
              World Class
            </span>
          </div>
          <div className="overflow-hidden pb-2">
            <span className="h-line block text-[clamp(1.9rem,8vw,5.5rem)]">
              <span className="text-white">Textile </span>
              <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">Manufacturing</span>
            </span>
          </div>
        </h1>

        {/* Subheading */}
        <p className="h-fade text-white/70 text-base sm:text-lg font-light leading-relaxed max-w-xl mb-10">
          From raw fiber to finished garment — precision engineering, ecological responsibility, and global scale.
        </p>

        {/* CTA Row */}
        <div className="h-fade flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 sm:mb-16">
          <Link
            href="#capabilities"
            className="group flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-black bg-white hover:bg-stone-100 transition-all shadow-lg w-full sm:w-auto"
          >
            Discover More
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white/80 border border-white/25 hover:bg-white/10 transition-colors w-full sm:w-auto"
          >
            Get A Quote
          </Link>
        </div>

        {/* Stats Row */}
        <div className="h-fade flex flex-wrap items-center gap-6 sm:gap-16 pt-6 sm:pt-8 border-t border-white/15">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 w-[40%] sm:w-auto">
              <span className="font-heading font-black text-white text-2xl sm:text-3xl leading-none">
                {stat.value}
              </span>
              <span className="text-white/45 text-[10px] uppercase tracking-widest font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
