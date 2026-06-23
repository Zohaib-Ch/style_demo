'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import gsap from '@/lib/gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { Container } from '@/components/common/container';
import { useCounter } from '@/hooks/use-counter';

// ── Stat counter sub-component ──────────────────────────────
function StatCounter({
  end,
  suffix = '',
  label,
  separator,
}: {
  end: number;
  suffix?: string;
  label: string;
  separator?: boolean;
}) {
  const ref = useCounter({ end, suffix, duration: 2.2, separator: separator ? ',' : '' });
  return (
    <div className="flex flex-col gap-2">
      <span
        ref={ref}
        className="font-heading font-black text-foreground"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}
      >
        0{suffix}
      </span>
      <span className="text-xs uppercase tracking-[0.18em] font-medium text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

const headlineLines = [
  { text: 'Built on Craft.', accent: true },
  { text: 'Driven by Purpose.', accent: true },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {

      // ── 1. Heading: isolated GPU-accelerated reveal ─────────────
      const headlineWords = headlineRef.current?.querySelectorAll('.about-headline-word');
      if (headlineWords?.length) {
        gsap.fromTo(
          headlineWords,
          { y: '105%' },
          {
            y: '0%',
            duration: 0.85,
            stagger: 0.09,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }

      // ── 2. Body text stagger ───────────
      const bodyElements = textRef.current?.querySelectorAll('.about-body-reveal');
      if (bodyElements?.length) {
        gsap.fromTo(
          bodyElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );
      }

      // ── 3. Image Reveal (Premium Clip-Path) ──────────────────
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.5,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }

      // ── 4. Inner Image Parallax & Scale Scrub ──────────────────
      const innerImg = imageRef.current?.querySelector('.about-img-inner');
      if (innerImg) {
        gsap.fromTo(
          innerImg,
          { yPercent: -15, scale: 1.2 },
          {
            yPercent: 15,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            }
          }
        );
      }

      // ── 5. Stats row stagger ────────────────────────────────────
      if (statsRef.current) {
        const items = statsRef.current.querySelectorAll('.stat-item');
        gsap.fromTo(
          items,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 sm:py-36 bg-background overflow-hidden"
    >
      <Container>
        {/* ── Main Split Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 xl:gap-28 items-start">

          {/* Left: Story Text */}
          <div className="flex flex-col gap-8">

            {/* Eyebrow — part of body reveal, not heading */}
            <div ref={textRef} className="flex flex-col gap-8">
              <div className="about-body-reveal flex items-center gap-3">
                <span className="h-[1px] w-8 bg-primary inline-block" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-primary">
                  Since 1994 · Bangladesh
                </span>
              </div>
            </div>

            {/* ── Heading: isolated overflow-clip reveal ── */}
            {/* Each word sits inside overflow:hidden so only transform is animated */}
            <h2 className="sr-only">Built on Craft. Driven by Purpose.</h2>
            <div
              ref={headlineRef}
              aria-hidden
              className="flex flex-col gap-1"
            >
              {headlineLines.map((line, i) => {
                const parts = line.text.split('.');
                return (
                  <div key={i} className="overflow-hidden leading-[1.05]">
                    <span
                      className="about-headline-word inline-block font-heading font-black text-foreground will-change-transform"
                      style={{ fontSize: 'clamp(2rem, 8vw, 4.2rem)' }}
                    >
                      {parts[0]}
                      <span className="text-primary">.</span>
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Body content — separate reveal from heading */}
            <div ref={textRef} className="flex flex-col gap-5">
              <div className="about-body-reveal flex flex-col gap-5 max-w-prose">
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  For over three decades, Style has been at the intersection of precision manufacturing
                  and human creativity. What began as a small weaving facility in Dhaka has grown into
                  one of Asia&apos;s most respected vertically-integrated textile groups.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  We believe a garment is more than fabric and thread — it is a promise. A promise of
                  quality, responsibility, and craftsmanship delivered to millions of people across
                  fifty countries.
                </p>
              </div>

              {/* Vision and Mission */}
              <div className="about-body-reveal grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex flex-col gap-2 border-l-2 border-primary/30 pl-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary">
                    Vision
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    To be the world&apos;s most trusted and sustainable textile partner.
                  </p>
                </div>
                <div className="flex flex-col gap-2 border-l-2 border-primary/30 pl-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary">
                    Mission
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Crafting exceptional products through people, technology, and responsibility.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="about-body-reveal">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <span>Read our full story</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Parallax Image */}
          <div className="relative">
            <div
              ref={imageRef}
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200 shadow-xl shadow-stone-900/10"
            >
              <div className="about-img-inner absolute inset-0 w-full h-[120%] -top-[10%]">
                <Image 
                  src="/images/about/facility.png"
                  alt="Style Industries Main Production Facility in Dhaka"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium block">
                  Dhaka, Bangladesh
                </span>
                <span className="text-sm font-medium text-white/90">Main Production Facility</span>
              </div>

              <div className="absolute top-6 right-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                <span className="font-heading text-xs font-bold text-white/80 tracking-wider">
                  EST. 1994
                </span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/8 -z-10" />
          </div>
        </div>

        {/* ── Statistics Row ── */}
        <div
          ref={statsRef}
          className="mt-16 sm:mt-24 pt-12 border-t border-border/40 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8"
        >
          {[
            { end: 30, suffix: '+', label: 'Years of Heritage', separator: false },
            { end: 1000, suffix: '+', label: 'Global Employees', separator: true },
            { end: 50, suffix: '+', label: 'Countries Served', separator: false },
          ].map((stat) => (
            <div key={stat.label} className="stat-item">
              <StatCounter {...stat} />
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom feather */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-primary/4 blur-3xl -translate-y-1/2" />
    </section>
  );
}

export default AboutSection;
