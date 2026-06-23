'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroStatCardProps {
  value: string;
  label: string;
  className?: string;
  delay?: number;
}

export function HeroStatCard({ value, label, className, delay = 0 }: HeroStatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px -10px rgba(107, 30, 40, 0.12)' }}
      className={cn(
        'flex flex-col gap-1 rounded-2xl border border-border/50 bg-white/70 backdrop-blur-sm px-6 py-5 transition-colors hover:border-primary/20',
        className
      )}
    >
      <span className="font-heading text-3xl font-black text-foreground tracking-tight leading-none">
        {value}
      </span>
      <span className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground">
        {label}
      </span>
    </motion.div>
  );
}
