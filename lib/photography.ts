export const servicePhotos = [
  {
    src: "/images/courier-hero.webp",
    alt: "Illustrative courier making a parcel handoff",
  },
  {
    src: "/images/freight-delivery.webp",
    alt: "Illustrative pallet and tailgate delivery",
  },
  {
    src: "/images/ontario-road-freight.webp",
    alt: "Illustrative highway tractor and dry van on an Ontario road",
  },
  {
    src: "/images/business-orders.webp",
    alt: "Illustrative business owner preparing packaged customer orders",
  },
  {
    src: "/images/freight-delivery.webp",
    alt: "Illustrative commercial freight receiving",
  },
  {
    src: "/images/business-pickup.webp",
    alt: "Illustrative business pickup for regional delivery",
  },
] as const;
export function articlePhoto(slug: string) {
  if (slug === "planning-recurring-deliveries")
    return {
      src: "/images/business-orders.webp",
      alt: "Illustrative packaged orders prepared for business delivery",
    };
  if (slug === "delivery-without-a-loading-dock")
    return {
      src: "/images/freight-delivery.webp",
      alt: "Illustrative pallet delivery and tailgate handling",
    };
  return {
    src: "/images/ontario-road-freight.webp",
    alt: "Illustrative truck and dry van travelling on an Ontario highway",
  };
}
