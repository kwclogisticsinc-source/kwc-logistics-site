const hubs = [
  { name: "London", x: 20, y: 63 },
  { name: "Kitchener", x: 36, y: 53, primary: true },
  { name: "Guelph", x: 43, y: 48 },
  { name: "Hamilton", x: 49, y: 58 },
  { name: "Mississauga", x: 56, y: 49 },
  { name: "Toronto / GTA", x: 64, y: 43 },
  { name: "Kingston", x: 86, y: 28 }
];

const serviceTypes = [
  "LTL freight",
  "Expedited transportation",
  "Warehousing",
  "Cross-docking",
  "Straight truck delivery"
];

export function CoverageMap() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
      <div className="border-b border-line bg-brand-pale px-5 py-4 sm:px-6">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-blue">Coverage Map</p>
        <h3 className="mt-1 text-2xl font-black tracking-tight text-ink">Waterloo Region first. Ontario-wide reach.</h3>
      </div>
      <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="relative min-h-[360px] bg-[radial-gradient(circle_at_50%_45%,rgba(18,183,255,0.16),transparent_34%),linear-gradient(135deg,#F8FBFF,#EAF4FF)] p-4 sm:p-6">
          <svg viewBox="0 0 100 80" role="img" aria-label="KWC Logistics Southern Ontario coverage map" className="h-full min-h-[320px] w-full">
            <defs>
              <linearGradient id="kwcRoute" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#12B7FF" />
                <stop offset="55%" stopColor="#087CFF" />
                <stop offset="100%" stopColor="#061A3A" />
              </linearGradient>
              <filter id="softGlow" x="-25%" y="-25%" width="150%" height="150%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M9 70 C19 60 29 59 36 53 C46 44 55 47 64 43 C75 35 81 31 93 23"
              fill="none"
              stroke="#C7DDF6"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M9 70 C19 60 29 59 36 53 C46 44 55 47 64 43 C75 35 81 31 93 23"
              fill="none"
              stroke="url(#kwcRoute)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeDasharray="1 4"
            />
            <path
              d="M38 55 C47 63 56 62 66 57 C73 53 80 50 92 52"
              fill="none"
              stroke="#087CFF"
              strokeOpacity="0.28"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M18 69 C31 74 45 73 59 69 C70 66 82 64 94 68"
              fill="none"
              stroke="#12B7FF"
              strokeOpacity="0.22"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {hubs.map((hub) => (
              <g key={hub.name} filter={hub.primary ? "url(#softGlow)" : undefined}>
                <circle cx={hub.x} cy={hub.y} r={hub.primary ? 5.8 : 4.4} fill={hub.primary ? "#061A3A" : "#087CFF"} />
                <circle cx={hub.x} cy={hub.y} r={hub.primary ? 2.4 : 1.8} fill="#FFFFFF" />
                <text
                  x={hub.x}
                  y={hub.y - (hub.primary ? 9 : 7)}
                  textAnchor="middle"
                  className="fill-brand-navy text-[4px] font-black"
                >
                  {hub.name}
                </text>
              </g>
            ))}

            <text x="36" y="67" textAnchor="middle" className="fill-brand-blue text-[3.4px] font-bold">
              Kitchener dispatch base
            </text>
            <text x="61" y="18" textAnchor="middle" className="fill-muted text-[3.2px] font-bold">
              Kitchener • Waterloo • Cambridge • GTA • Ontario
            </text>
          </svg>
        </div>

        <div className="bg-brand-navy p-6 text-white">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-cyan">How Coverage Works</p>
          <p className="mt-4 text-sm leading-6 text-blue-100">
            KWC is built in Waterloo Region and plans freight around Kitchener, Waterloo, Cambridge,
            nearby commercial markets, and Ontario-wide lanes supported by trusted carrier partners.
          </p>
          <div className="mt-6 grid gap-2">
            {serviceTypes.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-blue-100">
            Coverage depends on freight size, timing, pickup access, receiver hours, lane density,
            warehousing requirements, and available equipment.
          </p>
        </div>
      </div>
    </div>
  );
}
