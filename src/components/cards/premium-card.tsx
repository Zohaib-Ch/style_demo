'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PremiumCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

export function PremiumCard({ children, className, ...props }: PremiumCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 40px -15px rgba(107, 30, 40, 0.08)' }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-card-foreground transition-colors hover:border-primary/20',
        className
      )}
      {...props}
    >
      {/* Premium subtle gloss background */}
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-primary/[0.01] to-primary/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
export default PremiumCard;
