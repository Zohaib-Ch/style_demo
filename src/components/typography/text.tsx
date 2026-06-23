import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textVariants = cva(
  'font-sans text-muted-foreground',
  {
    variants: {
      variant: {
        lead: 'text-lg sm:text-xl font-light leading-relaxed',
        body: 'text-base sm:text-lg leading-relaxed',
        small: 'text-sm leading-relaxed',
        caption: 'text-xs tracking-wider uppercase font-semibold text-primary',
      },
    },
    defaultVariants: {
      variant: 'body',
    },
  }
);

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div';
}

export function Text({
  children,
  className,
  variant,
  as: Component = 'p',
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(textVariants({ variant, className }))}
      {...props}
    >
      {children}
    </Component>
  );
}
