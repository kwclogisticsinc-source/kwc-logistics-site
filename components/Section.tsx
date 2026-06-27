import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section className={`py-14 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">{eyebrow}</p> : null}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
          {intro ? <p className="mt-4 text-base leading-7 text-muted">{intro}</p> : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
