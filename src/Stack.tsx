import type { ReactNode } from 'react';

export interface StackProps {
  gap?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Stack({ gap = 'md', children }: StackProps) {
  const spacing = gap === 'sm' ? 'space-y-1.5' : gap === 'lg' ? 'space-y-4' : 'space-y-3';
  return <div className={spacing}>{children}</div>;
}
