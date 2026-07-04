import Image from "next/image";

const coverageHighlights = [
  ["Wide Coverage", "From Windsor to Ottawa and all major Ontario business corridors."],
  ["Reliable & Fast", "Daily, regular, and on-demand freight programs across Ontario."],
  ["Flexible Solutions", "LTL, FTL, dedicated, expedited, final-mile, and specialized services."],
  ["Local Expertise", "Regional knowledge, direct communication, and practical dispatch support."]
];

export function CoverageMap() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft">
      <div className="relative bg-white p-3 sm:p-4">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-brand-pale">
          <Image
            src="/images/kwc-ontario-coverage-map.png"
            alt="KWC Logistics delivery coverage map across Ontario"
            width={1600}
            height={1000}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 1120px, 100vw"
          />
        </div>
      </div>

      <div className="grid gap-4 border-t border-line bg-brand-navy p-5 text-white sm:grid-cols-2 lg:grid-cols-4 lg:p-7">
        {coverageHighlights.map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-white/8 p-5">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-brand-cyan">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-blue-100">{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
