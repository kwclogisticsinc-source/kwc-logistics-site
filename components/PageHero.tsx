import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-brand-pale">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">{eyebrow}</p> : null}
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">{title}</h1>
          {children ? <div className="mt-5 text-lg leading-8 text-muted">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
