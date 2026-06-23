'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/common/container';

// High-fidelity inline mockups of the client logos
const LOGOS = [
  {
    name: 'ZARA',
    element: (
      <span className="font-serif tracking-[0.3em] font-medium text-3xl text-[#1a1a1a]">
        Z A R A
      </span>
    )
  },
  {
    name: 'VICTORIAS SECRET',
    element: (
      <div className="flex flex-col items-center justify-center font-serif text-[#1a1a1a] leading-none">
        <span className="text-xl tracking-widest">VICTORIA&apos;S</span>
        <span className="text-xl tracking-widest">SECRET</span>
      </div>
    )
  },
  {
    name: 'adidas',
    element: (
      <div className="flex flex-col items-center justify-center gap-1 text-[#1a1a1a]">
        <svg width="40" height="30" viewBox="0 0 100 70" fill="currentColor">
          <path d="M49.9 50.8c-7.3 0-13.6-5.4-14.8-12.6L20 8.3C26.1 2.2 34.6 0 43.1 0c14.6 0 27.6 9.6 31.9 23.4l-11.6 24C59.9 49.6 55.1 50.8 49.9 50.8z"/>
          <path d="M72.2 26.2c-5.8 0-11.2 3.3-13.7 8.5L47 58.6c5.7 3.5 12.6 4.3 18.9 2.1 11-3.9 17.5-15.3 15.3-26.6l-9-7.9z"/>
          <path d="M28.4 33.1c-3.1-6.1-9.2-10-15.9-10C6.6 23.1 1.5 28.5 0 34.5l14.4 29.5c5.1.3 10.2-1.4 14.1-4.8L28.4 33.1z"/>
          <path d="M0 65h100v5H0z"/>
        </svg>
        <span className="font-sans font-bold tracking-tighter text-xl">adidas</span>
      </div>
    )
  },
  {
    name: 'Calvin Klein',
    element: (
      <span className="font-sans font-light tracking-tight text-[1.7rem] text-[#1a1a1a]">
        Calvin Klein
      </span>
    )
  },
  {
    name: 'GAP',
    element: (
      <div className="bg-[#000033] text-white px-4 py-2 flex items-center justify-center">
        <span className="font-serif tracking-widest text-3xl h-[40px] flex items-center">GAP</span>
      </div>
    )
  },
  {
    name: 'HAGGAR',
    element: (
      <div className="flex flex-col items-center justify-center gap-1 text-[#1a1a1a]">
        <div className="relative flex items-center justify-center">
          <svg width="30" height="24" viewBox="0 0 100 80" fill="currentColor">
            <path d="M10 20h80v40H10z" fill="none" stroke="currentColor" strokeWidth="8"/>
            <path d="M30 0h40v20H30z"/>
          </svg>
          <span className="absolute font-serif font-bold text-sm">H</span>
        </div>
        <span className="font-serif tracking-[0.2em] font-bold text-xl">HAGGAR</span>
      </div>
    )
  }
];

export function TrustedBySection() {
  return (
    <section
      id="trusted-by"
      className="relative py-16 sm:py-20 bg-[#FAF8F4] overflow-hidden"
    >
      <Container>
        {/* Caption */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <span className="h-[1px] w-10 bg-[#6B1E28]/40 inline-block" />
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-stone-500 text-center">
            Trusted by the world&apos;s most demanding brands
          </p>
        </div>
      </Container>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex items-center overflow-hidden h-[120px] bg-white border-y border-stone-200/50">
        
        {/* Left/Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex flex-nowrap items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35, // Adjust speed here
          }}
        >
          {/* We duplicate the logo array multiple times to create a seamless infinite scroll loop */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="inline-flex items-center justify-center w-[250px] sm:w-[300px] shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default"
            >
              {logo.element}
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}

export default TrustedBySection;
