import Image from "next/image";

export function LogoMark() {
  return (
    <span className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden">
      <Image
        src="/images/kwc-horse-transparent.png"
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
      src="/images/kwc-logo-transparent.png"
      alt="KWC Logistics logo"
      width={332}
      height={299}
      className={`h-auto w-full object-contain drop-shadow-[0_12px_28px_rgba(18,183,255,0.30)] ${className}`}
      priority
    />
  );
}

export function HeaderLogo() {
  return (
    <Image
      src="/images/kwc-logo-transparent.png"
      alt="KWC Logistics logo"
      width={720}
      height={512}
      className="h-16 w-44 object-contain drop-shadow-[0_12px_22px_rgba(6,26,58,0.14)] sm:h-[72px] sm:w-56 lg:h-20 lg:w-64"
      priority
    />
  );
}
