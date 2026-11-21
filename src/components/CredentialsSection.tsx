import {
  AWARDS_HONORS,
  EDUCATION_CREDENTIALS,
  type CredentialItem,
} from '../data/portfolioData';

const BADGE_TONES: Record<CredentialItem['badgeTone'], string> = {
  blue: 'text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded',
  cyan: 'text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded',
  neutral: 'text-neutral-400',
  purple: 'text-purple-400',
  emerald: 'text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded font-bold',
  amber: 'text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded',
};

function CredentialColumn({
  heading,
  range,
  items,
}: {
  heading: string;
  range: string;
  items: CredentialItem[];
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 pb-3 border-b border-white/[0.12] flex items-center justify-between">
        <span>{heading}</span>
        <span className="text-neutral-500 tabular-nums">{range}</span>
      </h3>
      <div className="divide-y divide-white/[0.08]">
        {items.map((item) => (
          <div key={item.id} className="py-4 space-y-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold text-white text-base">{item.title}</span>
              <span className={`text-xs font-mono whitespace-nowrap ${BADGE_TONES[item.badgeTone]}`}>
                {item.badge}
              </span>
            </div>
            <p className="text-xs text-neutral-400">{item.subtitle}</p>
            <p className="text-xs text-neutral-500 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CredentialsSection() {
  return (
    <section id="credentials" className="py-24 px-6 z-20 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            • INDEX &amp; CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
            Education, Certifications &amp; Honors
          </h2>
        </div>

        {/* 2-Column Hairline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <CredentialColumn
            heading="Education & Certifications"
            range="01 — 05"
            items={EDUCATION_CREDENTIALS}
          />
          <CredentialColumn
            heading="Awards & Honors"
            range="01 — 05"
            items={AWARDS_HONORS}
          />
        </div>
      </div>
    </section>
  );
}
