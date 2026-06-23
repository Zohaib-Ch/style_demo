import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva(
  'font-heading font-bold tracking-tight text-foreground',
  {
    variants: {
      level: {
        h1: 'text-5xl sm:text-6xl lg:text-7xl leading-[1.05]',
        h2: 'text-4xl sm:text-5xl lg:text-6xl leading-[1.1]',
        h3: 'text-2xl sm:text-3xl lg:text-4xl leading-[1.2]',
        h4: 'text-xl sm:text-2xl lg:text-3xl leading-[1.3]',
        h5: 'text-lg sm:text-xl lg:text-2xl leading-[1.4]',
        h6: 'text-base sm:text-lg lg:text-xl leading-[1.4]',
      },
    },
    defaultVariants: {
      level: 'h2',
    },
  }
);

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Heading({
  children,
  className,
  level,
  as,
  ...props
}: HeadingProps) {
  const Tag = as || level || 'h2';
  return (
    <Tag
      className={cn(headingVariants({ level, className }))}
      {...props}
    >
      {children}
    </Tag>
  );
}
