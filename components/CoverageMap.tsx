import { serviceAreas } from "@/lib/site";

const networkPoints = [
  { city: "Kitchener", label: "KWC Hub", x: 38, y: 53, primary: true },
  { city: "Waterloo", x: 35, y: 48 },
  { city: "Cambridge", x: 41, y: 57 },
  { city: "Guelph", x: 45, y: 47 },
  { city: "London", x: 22, y: 66 },
  { city: "Windsor", x: 9, y: 78 },
  { city: "Hamilton", x: 53, y: 60 },
  { city: "Burlington", x: 57, y: 56 },
  { city: "Mississauga", x: 62, y: 52 },
  { city: "Brampton", x: 62, y: 46 },
  { city: "Toronto", x: 68, y: 48 },
  { city: "Barrie", x: 61, y: 30 },
  { city: "Niagara", x: 65, y: 69 },
  { city: "Owen Sound", x: 38, y: 25 },
  { city: "Kingston", x: 84, y: 38 },
  { city: "Ottawa", x: 94, y: 24 },
  { city: "Sudbury", x: 53, y: 12 },
  { city: "North Bay", x: 66, y: 13 },
  { city: "Thunder Bay", x: 15, y: 8 }
];

const corridors = [
  "M8 77 C18 70 28 64 38 53 C51 39 60 43 68 48 C76 45 82 39 94 24",
  "38 53 C47 59 56 63 65 69",
  "38 53 C31 60 26 63 22 66 C16 71 12 75 9 78",
  "38 53 C41 48 43 48 45 47 C52 45 58 46 62 46",
  "38 53 C37 44 36 34 38 25 C42 16 47 13 53 12 C57 10 62 11 66 13",
  "68 48 C75 47 80 43 84 38"
];

const coverageGroups = [
  ["Waterloo Region", "Kitchener", "Waterloo", "Cambridge", "Guelph"],
  ["GTA & Golden Horseshoe", "Toronto", "Mississauga", "Brampton", "Hamilton", "Burlington", "Niagara"],
  ["Southwestern Ontario", "London", "Windsor", "Milton", "Owen Sound"],
  ["Eastern & Northern Ontario", "Barrie", "Kingston", "Ottawa", "Sudbury", "North Bay", "Thunder Bay"]
];

export function CoverageMap() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft">
      <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="bg-brand-navy p-6 text-white sm:p-8 lg:p-10">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Ontario Service Network</p>
          <h3 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Built in KWC. Connected across Ontario.
          </h3>
          <p className="mt-6 text-base leading-7 text-blue-100">
            KWC plans freight from a Kitchener-Waterloo-Cambridge base with coverage across
            major Ontario markets, regional business lanes, warehouse nodes, and custom
            transportation requirements.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              ["Primary Hub", "Kitchener-Waterloo-Cambridge operations and dispatch planning."],
              ["Core Lanes", "Waterloo Region, GTA, Golden Horseshoe, Southwestern Ontario, Eastern Ontario, and Northern Ontario by plan."],
              ["Custom Reach", "Ontario-wide service programs with broader Canadian requirements reviewed by lane, timing, and volume."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/8 p-5">
                <p className="font-black uppercase tracking-wide text-white">{title}</p>
                <p className="mt-2 text-sm leading-6 text-blue-100">{text}</p>
              </div>
            ))}
          </div>
        </aside>

        <div className="relative bg-[radial-gradient(circle_at_28%_42%,rgba(8,124,255,0.18),transparent_30%),linear-gradient(135deg,#F8FBFF,#E7F2FF)] p-5 sm:p-8 lg:p-10">
          <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(8,124,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(8,124,255,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="relative rounded-[1.75rem] border border-white bg-white/78 p-4 shadow-soft backdrop-blur sm:p-6">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-blue">Coverage Map</p>
                <h4 className="mt-2 text-3xl font-black tracking-tight text-ink">Ontario freight coverage</h4>
              </div>
              <div className="rounded-full border border-line bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-brand-navy">
                KWC Hub + Regional Lanes
              </div>
            </div>

            <svg viewBox="0 0 100 86" role="img" aria-label="KWC Logistics Ontario coverage network" className="h-[460px] w-full">
              <defs>
                <linearGradient id="coverageRoute" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#12B7FF" />
                  <stop offset="46%" stopColor="#087CFF" />
                  <stop offset="100%" stopColor="#061A3A" />
                </linearGradient>
                <filter id="softRouteShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#087CFF" floodOpacity="0.22" />
                </filter>
              </defs>

              <path
                d="M6 81 C16 74 29 72 39 61 C51 48 61 53 70 48 C82 42 89 35 97 25"
                fill="none"
                stroke="#D9E8F8"
                strokeWidth="22"
                strokeLinecap="round"
              />
              <path
                d="M28 22 C40 12 58 7 72 14 C86 21 93 31 96 42"
                fill="none"
                stroke="#E5F0FB"
                strokeWidth="15"
                strokeLinecap="round"
              />
              <path
                d="M34 76 C48 72 61 73 77 67"
                fill="none"
                stroke="#E5F0FB"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <text x="8" y="84" className="fill-brand-blue text-[2.4px] font-black uppercase tracking-widest">Southwestern Ontario</text>
              <text x="68" y="33" className="fill-brand-blue text-[2.4px] font-black uppercase tracking-widest">Eastern Ontario</text>
              <text x="39" y="8" className="fill-brand-blue text-[2.4px] font-black uppercase tracking-widest">Northern Ontario</text>
              <text x="55" y="76" className="fill-brand-blue text-[2.4px] font-black uppercase tracking-widest">Golden Horseshoe</text>

              {corridors.map((route) => (
                <path key={route} d={route} fill="none" stroke="url(#coverageRoute)" strokeWidth="2.5" strokeLinecap="round" filter="url(#softRouteShadow)" />
              ))}

              <g opacity="0.55">
                <circle cx="38" cy="53" r="21" fill="none" stroke="#087CFF" strokeWidth="0.45" />
                <circle cx="38" cy="53" r="14" fill="none" stroke="#087CFF" strokeWidth="0.45" />
                <circle cx="38" cy="53" r="7" fill="none" stroke="#087CFF" strokeWidth="0.45" />
              </g>

              {networkPoints.map((point) => (
                <g key={point.city}>
                  <circle cx={point.x} cy={point.y} r={point.primary ? 7.6 : 3.2} fill={point.primary ? "#061A3A" : "#087CFF"} stroke="#FFFFFF" strokeWidth={point.primary ? 1.2 : 0.9} />
                  {point.primary ? (
                    <>
                      <path d={`M${point.x - 2.5} ${point.y} h5 M${point.x} ${point.y - 2.5} v5`} stroke="#12B7FF" strokeWidth="0.9" strokeLinecap="round" />
                      <rect x={point.x - 13.5} y={point.y + 9.5} width="27" height="8.5" rx="2" fill="#061A3A" />
                      <text x={point.x} y={point.y + 14.8} textAnchor="middle" className="fill-white text-[2.45px] font-black uppercase">
                        {point.label}
                      </text>
                    </>
                  ) : null}
                  <text
                    x={point.x}
                    y={point.y - (point.primary ? 10 : 5.6)}
                    textAnchor="middle"
                    className="fill-brand-navy text-[2.65px] font-black"
                  >
                    {point.city}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="relative mt-5 grid gap-3 md:grid-cols-2">
            {coverageGroups.map(([title, ...cities]) => (
              <div key={title} className="rounded-2xl border border-line bg-white p-4 shadow-sm">
                <p className="text-sm font-black uppercase tracking-wide text-brand-blue">{title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <span key={city} className="rounded-full bg-brand-pale px-3 py-1 text-xs font-bold text-brand-navy">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="relative mt-5 text-sm leading-6 text-muted">
            Coverage can be customized around the full Ontario network, including {serviceAreas.slice(0, 8).join(", ")},
            {" "}and additional lanes by shipment profile, schedule, equipment need, and volume.
          </p>
        </div>
      </div>
    </div>
  );
}
