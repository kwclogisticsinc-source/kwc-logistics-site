/* eslint-disable @next/next/no-img-element */

type StockPhotoProps = {
  src: string;
  alt: string;
  className?: string;
};

export const stock = {
  hero: "/images/kwc-yard-fleet-1400.webp",
  warehouse: "/images/kwc-warehouse-crossdock-1400.webp",
  dock: "/images/kwc-straight-trucks-dock-1400.webp",
  pallets: "/images/kwc-warehouse-crossdock-1400.webp",
  dispatch: "/images/kwc-cargo-van-dock-1400.webp",
  driver: "/images/kwc-cargo-van-dock-1400.webp",
  technology: "/images/kwc-yard-fleet-1400.webp",
  fleet: "/images/kwc-yard-fleet-1400.webp",
  containers: "/images/kwc-straight-trucks-dock-1400.webp",
  cargoVan: "/images/kwc-cargo-van-dock-1400.webp",
  straightTruck: "/images/kwc-straight-trucks-dock-1400.webp",
  yard: "/images/kwc-yard-fleet-1400.webp",
  crossdock: "/images/kwc-warehouse-crossdock-1400.webp"
};

export function StockPhoto({ src, alt, className = "" }: StockPhotoProps) {
  return (
    <img
      src={src}
      srcSet={src.endsWith("-1400.webp") ? `${src.replace("-1400.webp", "-640.webp")} 640w, ${src} 1400w` : undefined}
      sizes="(max-width: 640px) 100vw, 60vw"
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
