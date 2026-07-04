import Image from "next/image";
import { StockPhoto } from "./StockPhoto";

type VisualCardProps = {
  src: string;
  title: string;
  description: string;
  tags?: string[];
  className?: string;
};

export function VisualCard({ src, title, description, tags = [], className = "" }: VisualCardProps) {
  return (
    <article className={`group overflow-hidden rounded-2xl border border-white/10 bg-white shadow-soft ${className}`}>
      <div className="relative min-h-[260px] overflow-hidden bg-brand-navy">
        {src.startsWith("http") ? (
          <StockPhoto src={src} alt={title} className="transition duration-500 group-hover:scale-105" />
        ) : (
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent p-5 text-white">
          <h3 className="text-2xl font-black tracking-tight">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-blue-100">{description}</p>
        </div>
      </div>
      {tags.length ? (
        <div className="flex flex-wrap gap-2 bg-white p-4">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-brand-pale px-3 py-1 text-xs font-bold text-brand-navy">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
