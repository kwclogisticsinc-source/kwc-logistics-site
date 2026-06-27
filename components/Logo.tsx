export function LogoMark() {
  return (
    <span className="grid h-11 w-14 shrink-0 place-items-center rounded-xl bg-brand-navy shadow-sm ring-1 ring-brand-navy/10">
      <svg viewBox="0 0 56 44" aria-hidden="true" className="h-11 w-14">
        <rect width="56" height="44" rx="12" fill="#0b1f38" />
        <path d="M12 28h17.5c6.4 0 10.9-2.7 14.5-8.2" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M13 34h10.5c9.5 0 17.2-4.2 22.8-12.6" fill="none" stroke="#d91f2d" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M15 12v20h4.5v-7l6.2 7h5.7l-8.1-9.1L31 12h-5.3l-6.2 8.7V12H15Z" fill="#fff" />
        <path d="M46 15.8c-2.1-2.1-5-3.3-8.2-3.3-6.2 0-10.4 4.1-10.4 9.8s4.3 9.7 10.5 9.7c3.2 0 6-1.1 8.1-3.2" fill="none" stroke="#d91f2d" strokeWidth="4.3" strokeLinecap="round" />
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
          <span className="text-brand-red">C</span>
        </span>
        <span className="mt-1 block text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-muted">
          Logistics Inc.
        </span>
      </span>
    </span>
  );
}
