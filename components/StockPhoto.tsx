/* eslint-disable @next/next/no-img-element */

type StockPhotoProps = {
  src: string;
  alt: string;
  className?: string;
};

export const stock = {
  hero: "/images/kwc-yard-fleet.png",
  warehouse: "/images/kwc-warehouse-crossdock.png",
  dock: "/images/kwc-straight-trucks-dock.png",
  pallets: "/images/kwc-warehouse-crossdock.png",
  dispatch: "/images/kwc-cargo-van-dock.png",
  driver: "/images/kwc-cargo-van-dock.png",
  technology: "/images/kwc-yard-fleet.png",
  fleet: "/images/kwc-yard-fleet.png",
  containers: "/images/kwc-straight-trucks-dock.png",
  cargoVan: "/images/kwc-cargo-van-dock.png",
  straightTruck: "/images/kwc-straight-trucks-dock.png",
  yard: "/images/kwc-yard-fleet.png",
  crossdock: "/images/kwc-warehouse-crossdock.png"
};

export function StockPhoto({ src, alt, className = "" }: StockPhotoProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
