import Image from "next/image";

export function LogoMark() {
  return (
    <span className="flex h-12 w-[74px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-line">
      <Image
        src="/kwc-logo-horse.png"
        alt="KWC Logistics blue horse"
        width={148}
        height={96}
        className="h-11 w-[68px] object-contain"
        priority
      />
    </span>
  );
}

export function LogoLockup() {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="leading-none">
        <span className="flex items-baseline gap-1 text-2xl font-black tracking-tight text-brand-navy">
          <span>K</span>
          <span>W</span>
          <span className="text-brand-blue">C</span>
        </span>
        <span className="mt-1 block text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-muted">
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
