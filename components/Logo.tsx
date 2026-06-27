export function LogoMark() {
  return (
    <span className="grid h-11 w-14 shrink-0 place-items-center rounded-xl bg-brand-navy shadow-sm ring-1 ring-brand-blue/20">
      <svg viewBox="0 0 56 44" aria-hidden="true" className="h-11 w-14">
        <defs>
          <linearGradient id="kwcMarkGradient" x1="10" x2="48" y1="34" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#12b7ff" />
            <stop offset="1" stopColor="#1f5eff" />
          </linearGradient>
        </defs>
        <rect width="56" height="44" rx="12" fill="#0b1f38" />
        <path d="M10 30h18.7c6.8 0 12-3 16.3-9.4" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M11 35h11.2c10.2 0 18.4-4.4 24.5-13.3" fill="none" stroke="url(#kwcMarkGradient)" strokeWidth="3.3" strokeLinecap="round" />
        <path d="M14.5 12v20h4.6v-7.2l6.3 7.2h5.9L23 22.8 30.8 12h-5.5l-6.2 8.7V12h-4.6Z" fill="#fff" />
        <path d="M45.7 15.7c-2.1-2-4.9-3.2-8-3.2-6.1 0-10.2 4.1-10.2 9.7s4.2 9.6 10.3 9.6c3.2 0 5.9-1.1 8-3.1" fill="none" stroke="url(#kwcMarkGradient)" strokeWidth="4.1" strokeLinecap="round" />
        <path d="M39.8 21.8h8.1l-3.1-3.1" fill="none" stroke="#12b7ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
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
