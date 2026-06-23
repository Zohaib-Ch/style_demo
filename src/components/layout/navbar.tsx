'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/common/container';
import { PremiumButton } from '@/components/buttons/premium-button';
import gsap from '@/lib/gsap';

const MAIN_NAV = [
  { label: 'About', href: '/about' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Careers', href: '/careers' },
  { label: 'Awards', href: '/awards' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Morphing trigger on scroll
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide / Show Navbar using GSAP on scroll direction change
      if (navbarRef.current) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
          gsap.to(navbarRef.current, {
            y: '-100%',
            opacity: 0,
            duration: 0.4,
            ease: 'power3.inOut',
          });
        } else {
          gsap.to(navbarRef.current, {
            y: '0%',
            opacity: 1,
            duration: 0.4,
            ease: 'power3.out',
          });
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // No mega menu GSAP logic needed
  return (
    <>
      <header
        ref={navbarRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'py-4 bg-white/95 backdrop-blur-md shadow-sm border-b border-border/20' : 'py-6 bg-transparent'
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center">
              <span className="font-heading text-2xl font-black tracking-[0.2em] text-primary">
                STYLE
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {MAIN_NAV.map((item) => (
                <div
                  key={item.href}
                  className="relative group py-2"
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link href="/contact">
                <PremiumButton
                  variant="outline"
                  size="sm"
                  className="group gap-2 border-primary/20 hover:border-primary text-foreground"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="h-3 w-3 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </PremiumButton>
              </Link>
            </div>

            {/* Mobile Menu Toggle button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
              aria-label="Toggle Menu"
            >
              <span
                className={cn(
                  'block w-6 h-[1.5px] bg-foreground transition-all duration-300 origin-center',
                  isOpen ? 'rotate-45 translate-y-[4px]' : ''
                )}
              />
              <span
                className={cn(
                  'block w-6 h-[1.5px] bg-foreground transition-all duration-300 origin-center',
                  isOpen ? '-rotate-45 -translate-y-[4px]' : ''
                )}
              />
            </button>
          </div>
        </Container>

      </header>

      {/* Mobile Fullscreen Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.3, 0.86, 0.36, 0.95] }}
            className="fixed inset-0 bg-background z-40 flex flex-col justify-center px-12 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-left">
              {MAIN_NAV.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  key={item.href}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-4xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 border-t border-border/40 mt-4"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <PremiumButton variant="primary" size="lg" className="w-full">
                    Get in Touch
                  </PremiumButton>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Navbar;
