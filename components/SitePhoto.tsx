import Image from "next/image";
export function SitePhoto({
  src,
  alt,
  caption = "Illustrative marketing photography",
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={"site-photo " + className}>
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={853}
        sizes="(max-width:800px) 100vw, 60vw"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
