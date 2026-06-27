import Image from "next/image";

export function LogoMark() {
  return (
    <span className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-line">
      <Image
        src="/kwc-logo-horse.png"
        alt="KWC Logistics blue horse"
        width={220}
        height={144}
        className="h-14 w-[88px] object-contain"
        priority
      />
    </span>
  );
}

export function LogoLockup() {
  return (
    <span className="flex items-center gap-4">
      <LogoMark />
      <span className="leading-none">
        <span className="flex items-baseline gap-1 text-4xl font-black tracking-tight text-brand-navy">
          <span>K</span>
          <span>W</span>
          <span className="text-brand-blue">C</span>
        </span>
        <span className="mt-1 block text-xs font-extrabold uppercase tracking-[0.28em] text-muted">
          Logistics Inc.
        </span>
      </span>
    </span>
  );
}

export function FullLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/kwc-logo-full.png"
      alt="KWC Logistics logo"
      width={332}
      height={299}
      className={`h-auto w-full object-contain ${className}`}
      priority
    />
  );
}

export function HeaderLogo() {
  return (
    <Image
      src="/kwc-logo-full.png"
      alt="KWC Logistics logo"
      width={420}
      height={420}
      className="h-24 w-44 object-contain sm:h-28 sm:w-52"
      priority
    />
  );
}
