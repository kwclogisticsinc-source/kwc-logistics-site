import Image from "next/image";
import blueHorse from "@/public/images/kwc-galloping-horse.png";

export function BrandLogo({
  className,
  priority,
  decorative = false,
}: {
  className?: string;
  priority?: boolean;
  decorative?: boolean;
}) {
  return (
    <Image
      src={blueHorse}
      alt={decorative ? "" : "KWC Logistics"}
      className={className}
      priority={priority}
    />
  );
}
