'use client';

import { useEffect, useRef } from 'react';
import gsap from '@/lib/gsap';
import { Container } from '@/components/common/container';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';


export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Form fade in
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Info fade in
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
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
      id="contact"
      className="relative py-20 sm:py-32 bg-white border-t border-stone-200/50"
    >
      <Container>
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 sm:mb-24">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-black inline-block" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-black">
              Get In Touch
            </span>
          </div>
          <h2 className="font-heading font-black text-black text-3xl sm:text-5xl leading-[1.1] tracking-tight">
            Connect with <br />
            <span className="text-stone-400">Style.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div ref={formRef} className="flex flex-col">
            <form className="flex flex-col gap-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Jane Doe"
                    className="border-b border-stone-300 py-3 bg-transparent text-black font-medium focus:outline-none focus:border-black transition-colors placeholder:text-stone-300"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                    Company
                  </label>
                  <input 
                    type="text" 
                    id="company"
                    placeholder="Your Brand"
                    className="border-b border-stone-300 py-3 bg-transparent text-black font-medium focus:outline-none focus:border-black transition-colors placeholder:text-stone-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="jane@company.com"
                  className="border-b border-stone-300 py-3 bg-transparent text-black font-medium focus:outline-none focus:border-black transition-colors placeholder:text-stone-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="inquiry" className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                  Inquiry Type
                </label>
                <select 
                  id="inquiry"
                  className="border-b border-stone-300 py-3 bg-transparent text-black font-medium focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                >
                  <option value="wholesale">Wholesale & Retail</option>
                  <option value="press">Press & Media</option>
                  <option value="careers">Careers</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                  Message
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="border-b border-stone-300 py-3 bg-transparent text-black font-medium focus:outline-none focus:border-black transition-colors placeholder:text-stone-300 resize-none"
                />
              </div>

              <button 
                type="button"
                className="group flex items-center justify-center sm:justify-between w-full sm:w-auto mt-4 px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-stone-800 transition-colors gap-3"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Right Column: Departments & Details */}
          <div ref={infoRef} className="flex flex-col gap-12 lg:pl-12 lg:border-l border-stone-200">

            {/* Global HQ Address & Map */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-bold text-xl text-black">
                Global Headquarters
              </h3>
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-stone-400 mt-1 shrink-0" />
                  <p className="text-sm font-medium text-stone-600 leading-relaxed">
                    126/3, Quaid-e-Azam Industrial Estate<br />
                    Kot Lakhpat, Lahore, 54770, Pakistan
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                  <p className="text-sm font-medium text-stone-600">
                    +92 42 35118888
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-medium text-stone-600">
                      Open Mon–Sat: 8:00 AM – 5:30 PM
                    </p>
                    <p className="text-xs font-light text-stone-400">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Responsive Google Maps Embed */}
              <div className="w-full h-[280px] rounded-2xl overflow-hidden mt-4 border border-stone-200 shadow-sm relative group">
                <iframe 
                  src="https://maps.google.com/maps?q=Style%20Textile,%20Lahore&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                ></iframe>
              </div>
            </div>

          </div>
          
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
