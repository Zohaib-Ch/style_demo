'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from '@/lib/gsap';
import { Container } from '@/components/common/container';

const LOCATIONS = [
  {
    id: 'dhaka',
    city: 'Dhaka',
    country: 'Bangladesh',
    type: 'Manufacturing Hub',
    timezone: 'Asia/Dhaka',
  },
  {
    id: 'milan',
    city: 'Milan',
    country: 'Italy',
    type: 'R&D & Sourcing',
    timezone: 'Europe/Rome',
  },
  {
    id: 'london',
    city: 'London',
    country: 'UK',
    type: 'Design Studio',
    timezone: 'Europe/London',
  },
  {
    id: 'new-york',
    city: 'New York',
    country: 'USA',
    type: 'Sales HQ',
    timezone: 'America/New_York',
  }
];

export function GlobalPresenceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [times, setTimes] = useState<Record<string, { time: string, period: string }>>({});

  // Update local times for each location
  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, { time: string, period: string }> = {};
      LOCATIONS.forEach(loc => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: loc.timezone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
        const parts = formatter.formatToParts(new Date());
        const hour = parts.find(p => p.type === 'hour')?.value || '00';
        const minute = parts.find(p => p.type === 'minute')?.value || '00';
        const period = parts.find(p => p.type === 'dayPeriod')?.value || 'AM';
        
        newTimes[loc.id] = { time: `${hour}:${minute}`, period };
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000); // Update every second to feel "live" even if it's just minutes ticking
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const rows = listRef.current?.querySelectorAll('.timezone-row');
      
      if (rows) {
        gsap.fromTo(
          rows,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="global-presence"
      className="relative py-28 sm:py-40 bg-white overflow-hidden border-t border-stone-100"
    >
      {/* ── Massive Background Marquee Ticker ── */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none z-0 opacity-[0.02]">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          <h2 className="font-heading font-black text-[15rem] leading-none uppercase tracking-tighter">
            DHAKA — MILAN — LONDON — NEW YORK — DHAKA — MILAN — LONDON — NEW YORK —&nbsp;
          </h2>
        </motion.div>
        <motion.div
          className="flex whitespace-nowrap mt-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
        >
          <h2 className="font-heading font-black text-[15rem] leading-none uppercase tracking-tighter">
            DHAKA — MILAN — LONDON — NEW YORK — DHAKA — MILAN — LONDON — NEW YORK —&nbsp;
          </h2>
        </motion.div>
      </div>

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-24 max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-black inline-block" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-black">
              Timezones
            </span>
            <span className="h-[1px] w-8 bg-black inline-block" />
          </div>
          <h2 className="font-heading font-black text-black text-4xl sm:text-5xl leading-[1.1] tracking-tight">
            Always <span className="text-[#6B1E28]">Active.</span>
          </h2>
        </div>

        {/* The Minimalist Timezone Board */}
        <div ref={listRef} className="flex flex-col border-t-2 border-black max-w-5xl mx-auto">
          {LOCATIONS.map((loc) => (
             <div 
               key={loc.id} 
               className="timezone-row group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-stone-200 hover:bg-stone-50/50 transition-colors px-4 cursor-default"
             >
                {/* City & Country */}
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-black tracking-tighter group-hover:translate-x-4 transition-transform duration-500 ease-out">
                    {loc.city}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.3em] font-medium text-stone-400 mt-3 ml-1 group-hover:translate-x-4 transition-transform duration-500 delay-75 ease-out">
                    {loc.country}
                  </p>
                </div>

                {/* Office Type (Hidden on mobile, centered on desktop) */}
                <div className="hidden md:flex flex-1 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <p className="text-sm uppercase tracking-widest text-[#6B1E28] font-bold">
                     {loc.type}
                   </p>
                </div>

                {/* Live Clock */}
                <div className="text-left md:text-right flex-1 md:flex-none">
                   <div className="flex items-baseline md:justify-end gap-2">
                     <span className="font-sans font-light text-5xl md:text-6xl tracking-tight text-black tabular-nums">
                       {times[loc.id]?.time || '00:00'}
                     </span>
                     <span className="font-bold text-lg text-stone-400">
                       {times[loc.id]?.period || 'AM'}
                     </span>
                   </div>
                </div>
             </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default GlobalPresenceSection;
