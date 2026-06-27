import { existsSync } from "fs";
import { join } from "path";
import Image from "next/image";

type VisualCardProps = {
  src: string;
  title: string;
  description: string;
  tags?: string[];
  className?: string;
};

function publicFileExists(src: string) {
  return existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));
}

export function VisualCard({ src, title, description, tags = [], className = "" }: VisualCardProps) {
  const hasImage = publicFileExists(src);

  return (
    <article className={`group overflow-hidden rounded-2xl border border-white/10 bg-white shadow-soft ${className}`}>
      <div className="relative min-h-[260px] overflow-hidden bg-brand-navy">
        {hasImage ? (
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(18,183,255,0.52),transparent_28%),linear-gradient(135deg,#061A3A,#073B86_50%,#061A3A)] logistics-grid">
            <div className="motion-lines absolute inset-x-0 bottom-8 h-24 opacity-70" />
            <div className="absolute bottom-8 left-6 right-6 h-16 rounded-lg border border-white/25 bg-white/10 backdrop-blur">
              <div className="absolute left-5 top-5 h-6 w-28 rounded bg-white/25" />
              <div className="absolute bottom-0 right-10 h-10 w-16 rounded-t bg-brand-blue/60" />
            </div>
            <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Replace with {src}
            </div>
          </div>
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
