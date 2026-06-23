import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/common/container';

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-screen bg-stone-50 overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stone-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-stone-200/30 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        
        {/* Subtle Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-[1px] w-8 bg-black/20 inline-block" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500">
            Demonstration Mode
          </span>
          <span className="h-[1px] w-8 bg-black/20 inline-block" />
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black text-black text-4xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight mb-6 px-4">
          Inner Pages <br />
          <span className="text-stone-400">Coming Soon.</span>
        </h1>

        {/* Explanation Text */}
        <p className="text-stone-600 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl px-4">
          This is a conceptual demonstration site for <strong className="font-medium text-black">Style Textile</strong>. 
          All expanded routes and inner pages will be fully developed, populated, and integrated seamlessly following the approval of the core layout and design system.
        </p>

        {/* Return Button */}
        <Link 
          href="/"
          className="group flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-4 bg-black text-white rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-stone-800 transition-all shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-1" />
          <span>Return to Homepage</span>
        </Link>
        
      </Container>
    </main>
  );
}
