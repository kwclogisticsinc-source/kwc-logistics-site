import { serviceAreas } from "@/lib/site";
import { StockPhoto, stock } from "./StockPhoto";

const hubs = [
  { name: "KWC", x: 38, y: 55, primary: true },
  { name: "London", x: 22, y: 67 },
  { name: "Windsor", x: 12, y: 76 },
  { name: "Hamilton", x: 49, y: 61 },
  { name: "Toronto", x: 62, y: 47 },
  { name: "Barrie", x: 57, y: 27 },
  { name: "Ottawa", x: 88, y: 16 },
  { name: "Kingston", x: 78, y: 36 },
  { name: "Sudbury", x: 50, y: 12 },
  { name: "Thunder Bay", x: 18, y: 10 }
];

export function CoverageMap() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft">
      <div className="grid lg:grid-cols-[0.9fr_1.35fr]">
        <div className="relative min-h-[520px] bg-brand-navy p-6 text-white sm:p-8">
          <div className="absolute inset-0 opacity-22">
            <StockPhoto src={stock.containers} alt="Ontario logistics network background" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-blue/55" />
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-cyan">Our Service Area</p>
            <h3 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-tight">
              Built in KWC. Delivering across Ontario.
            </h3>
            <p className="mt-6 max-w-lg text-base leading-7 text-blue-100">
              From our home base in Kitchener-Waterloo-Cambridge, KWC Logistics builds LTL,
              warehousing, cross-dock, final mile, courier, and freight programs around the
              markets that keep Ontario moving.
            </p>
            <div className="mt-8 space-y-4">
              {[
                ["KWC Warehouse", "Primary operations hub in Kitchener-Waterloo-Cambridge."],
                ["Wide Coverage", "Daily freight planning across Southwestern Ontario, Central Ontario, and the GTA."],
                ["Flexible Solutions", "LTL, warehousing, expedited, courier, distribution, and customized logistics."]
              ].map(([title, text]) => (
                <div key={title} className="border-t border-white/15 pt-4">
                  <p className="font-black uppercase tracking-wide text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-blue-100">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[520px] bg-[linear-gradient(135deg,#F8FBFF,#EAF4FF)] p-5 sm:p-8">
          <div className="absolute inset-0 opacity-45">
            <StockPhoto src={stock.fleet} alt="Freight network texture" />
          </div>
          <div className="absolute inset-0 bg-white/82" />
          <svg viewBox="0 0 100 86" role="img" aria-label="KWC Logistics Ontario coverage map" className="relative h-full min-h-[430px] w-full">
            <defs>
              <linearGradient id="routeBlue" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#12B7FF" />
                <stop offset="50%" stopColor="#087CFF" />
                <stop offset="100%" stopColor="#061A3A" />
              </linearGradient>
              <filter id="mapGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M11 75 C25 65 31 63 38 55 C48 45 55 51 62 47 C72 40 78 35 88 16" fill="none" stroke="#CFE1F6" strokeWidth="14" strokeLinecap="round" />
            <path d="M38 55 C47 64 54 66 64 62 C74 58 82 55 94 60" fill="none" stroke="#CFE1F6" strokeWidth="10" strokeLinecap="round" />
            <path d="M18 10 C30 18 42 15 50 12 C64 7 75 10 88 16" fill="none" stroke="#CFE1F6" strokeWidth="8" strokeLinecap="round" />
            <path d="M11 75 C25 65 31 63 38 55 C48 45 55 51 62 47 C72 40 78 35 88 16" fill="none" stroke="url(#routeBlue)" strokeWidth="3" strokeLinecap="round" />
            <path d="M38 55 C47 64 54 66 64 62 C74 58 82 55 94 60" fill="none" stroke="#087CFF" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M18 10 C30 18 42 15 50 12 C64 7 75 10 88 16" fill="none" stroke="#087CFF" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
            {hubs.map((hub) => (
              <g key={hub.name} filter={hub.primary ? "url(#mapGlow)" : undefined}>
                <circle cx={hub.x} cy={hub.y} r={hub.primary ? 6.8 : 3.1} fill={hub.primary ? "#061A3A" : "#087CFF"} />
                <circle cx={hub.x} cy={hub.y} r={hub.primary ? 2.5 : 1.2} fill="#FFFFFF" />
                <text x={hub.x} y={hub.y - (hub.primary ? 9 : 5.5)} textAnchor="middle" className="fill-brand-navy text-[3.2px] font-black">
                  {hub.name}
                </text>
              </g>
            ))}
            <g>
              <rect x="52" y="66" width="42" height="16" rx="2.5" fill="#FFFFFF" stroke="#087CFF" strokeWidth="0.4" />
              <text x="55" y="71" className="fill-brand-blue text-[3.2px] font-black uppercase">Coverage includes</text>
              {serviceAreas.slice(0, 10).map((city, index) => (
                <text key={city} x={index < 5 ? 55 : 75} y={75 + (index % 5) * 2.4} className="fill-brand-navy text-[2px] font-bold">
                  ✓ {city}
                </text>
              ))}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
