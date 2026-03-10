import type { ReactNode } from 'react';

export interface CardProps {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

export function Card({ title, eyebrow, children }: CardProps) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white/80 p-4 shadow-sm">
      {eyebrow && (
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">{eyebrow}</p>
      )}
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <div className="text-sm text-neutral-600 leading-relaxed">{children}</div>
    </section>
  );
}
