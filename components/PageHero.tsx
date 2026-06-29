import type { ReactNode } from "react";
import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  image?: string;
};

export function PageHero({ eyebrow, title, children, image = "/images/kwc-yard-fleet.png" }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-brand-blue/20 bg-brand-navy text-white">
      <Image
        src={image}
        alt=""
        fill
        priority={false}
        className="object-cover opacity-28"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/92 to-brand-navy/55" />
      <div className="absolute inset-0 logistics-grid opacity-30" />
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-4xl">
          {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">{eyebrow}</p> : null}
          <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">{title}</h1>
          {children ? <div className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">{children}</div> : null}
        </div>
        <div className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
          {["Waterloo Region", "Professional Freight", "Ontario Capability"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-blue-50 backdrop-blur">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
