'use client';

import { Container } from '@/components/common/container';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-black text-white py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Newsletter (Left Col) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h2 className="font-heading font-black text-4xl tracking-tighter mb-2">
                STYLE<span className="text-stone-500">.</span>
              </h2>
              <p className="text-stone-400 font-light max-w-sm leading-relaxed">
                Redefining global textile manufacturing through vertical integration, sustainability, and technological innovation.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mt-auto pt-8">
              <span className="text-xs uppercase tracking-widest font-semibold text-stone-500">
                Join our Newsletter
              </span>
              <div className="flex items-center gap-2 max-w-md">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="bg-transparent border-b border-stone-800 py-3 text-white font-light focus:outline-none focus:border-stone-400 transition-colors placeholder:text-stone-600 flex-1"
                />
                <button 
                  type="button"
                  className="group flex items-center justify-center p-3 rounded-full hover:bg-stone-900 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Grid (Right Col) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:pl-16">
            
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-stone-500">
                Company
              </span>
              <ul className="flex flex-col gap-4">
                <li><Link href="#about" className="text-sm text-stone-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#capabilities" className="text-sm text-stone-400 hover:text-white transition-colors">Capabilities</Link></li>
                <li><Link href="#sustainability" className="text-sm text-stone-400 hover:text-white transition-colors">Sustainability</Link></li>
                <li><Link href="#global-presence" className="text-sm text-stone-400 hover:text-white transition-colors">Global Network</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-stone-500">
                Connect
              </span>
              <ul className="flex flex-col gap-4">
                <li><Link href="#contact" className="text-sm text-stone-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#life-at-style" className="text-sm text-stone-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#awards" className="text-sm text-stone-400 hover:text-white transition-colors">Press & Awards</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 sm:col-span-1 col-span-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-stone-500">
                Social
              </span>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/styletextileltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-stone-400">
                  <FacebookIcon />
                </a>
                <a href="https://twitter.com/pvt_style" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-stone-400">
                  <TwitterIcon />
                </a>
                <a href="https://www.linkedin.com/company/styletextile/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-stone-400">
                  <LinkedinIcon />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-24 pt-8 border-t border-stone-900">
          <p className="text-xs text-stone-600">
            &copy; {currentYear} Style Industries. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-stone-600 hover:text-stone-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-stone-600 hover:text-stone-400 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </Container>
    </footer>
  );
}

export default FooterSection;
