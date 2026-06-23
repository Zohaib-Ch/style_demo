import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/common/container';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id: string;
  hasContainer?: boolean;
  background?: 'default' | 'muted' | 'contrast';
}

export function SectionWrapper({
  children,
  className,
  id,
  hasContainer = true,
  background = 'default',
  ...props
}: SectionWrapperProps) {
  const bgClasses = {
    default: 'bg-background text-foreground',
    muted: 'bg-muted text-foreground',
    contrast: 'bg-primary text-primary-foreground',
  };

  return (
    <section
      id={id}
      className={cn('py-20 sm:py-28 lg:py-36 relative overflow-hidden', bgClasses[background], className)}
      {...props}
    >
      {hasContainer ? <Container>{children}</Container> : children}
    </section>
  );
}
export default SectionWrapper;
