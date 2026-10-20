import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn('space-y-4', align === 'center' && 'mx-auto max-w-3xl text-center', className)}>
      <p className="text-sm font-semibold tracking-[0.24em] text-primary uppercase">{eyebrow}</p>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <p className="text-base leading-7 text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
}
