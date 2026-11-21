import { useState } from 'react';
import { ArrowUpRight, Play, RotateCcw } from 'lucide-react';
import {
  FEATURED_PROJECTS,
  type FeaturedProject,
  type ProjectCategory,
} from '../data/portfolioData';

interface ProjectsSectionProps {
  onInspectProject: (project: FeaturedProject) => void;
}

const FILTER_TABS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'engineering', label: 'Python & AI' },
  { id: 'leadership', label: 'Event Direction' },
  { id: 'design', label: 'Web & Visuals' },
  { id: 'governance', label: 'Governance' },
];

const KEYWORD_TONES: Record<FeaturedProject['tone'], string> = {
  blue: 'text-blue-400',
  amber: 'text-amber-300',
  emerald: 'text-emerald-400',
  purple: 'text-purple-300',
};

function PythonShowcaseCard() {
  const [showOutput, setShowOutput] = useState(false);

  return (
    <div className="glass-hairline rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-neutral-900/90 to-[#080808] border border-white/10 hover:border-blue-500/40 transition-all duration-300">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shrink-0" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shrink-0" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shrink-0" />
          <span className="ml-2 text-neutral-300 truncate">sic_stage1_pipeline.py</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setShowOutput((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-950/60 border border-blue-700/50 text-[11px] text-blue-300 hover:bg-blue-900/60 hover:text-white transition-colors cursor-pointer"
          >
            {showOutput ? (
              <>
                <RotateCcw className="w-3 h-3" />
                <span>View Code</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3" />
                <span>Run Sample</span>
              </>
            )}
          </button>
          <span className="text-blue-400 hidden sm:inline">SIC Batch 8</span>
        </div>
      </div>

      {/* Terminal Code or Interactive Output */}
      {!showOutput ? (
        <div className="py-5 font-mono text-xs sm:text-sm text-neutral-300 space-y-2 overflow-x-auto">
          <p>
            <span className="text-purple-400">import</span> csv
          </p>
          <p>
            <span className="text-purple-400">from</span> ai_prompts{' '}
            <span className="text-purple-400">import</span> evaluate_dataset
          </p>
          <p className="text-neutral-500">
            # Process dataset pipelines with Python dictionaries
          </p>
          <p>
            <span className="text-blue-400">def</span>{' '}
            <span className="text-amber-300">process_applicant_stream</span>(filepath):
          </p>
          <p className="pl-4">records = []</p>
          <p className="pl-4">
            <span className="text-blue-400">with</span> open(filepath, mode=
            <span className="text-emerald-300">&apos;r&apos;</span>, encoding=
            <span className="text-emerald-300">&apos;utf-8&apos;</span>){' '}
            <span className="text-blue-400">as</span> stream:
          </p>
          <p className="pl-8">reader = csv.DictReader(stream)</p>
          <p className="pl-8">
            <span className="text-blue-400">for</span> entry{' '}
            <span className="text-blue-400">in</span> reader:
          </p>
          <p className="pl-12">
            records.append({'{'}
            <span className="text-emerald-300">&quot;id&quot;</span>: entry[
            <span className="text-emerald-300">&quot;candidate&quot;</span>],{' '}
            <span className="text-emerald-300">&quot;status&quot;</span>:{' '}
            <span className="text-emerald-300">&quot;VERIFIED&quot;</span>
            {'}'})
          </p>
          <p className="pl-4">
            <span className="text-blue-400">return</span> evaluate_dataset(records)
          </p>
        </div>
      ) : (
        <div className="py-5 font-mono text-xs sm:text-sm space-y-2.5 overflow-x-auto">
          <p className="text-neutral-400">$ python3 sic_stage1_pipeline.py applicants_batch8.csv</p>
          <div className="p-3.5 rounded-lg bg-black/50 border border-white/10 space-y-1.5 text-neutral-300">
            <p className="text-sky-400">Loaded 48 rows via csv.DictReader (UTF-8)</p>
            <p>{`{"id": "CAND-001", "track": "Python + GenAI", "status": "VERIFIED"}`}</p>
            <p>{`{"id": "CAND-002", "track": "Python + GenAI", "status": "VERIFIED"}`}</p>
            <p>{`{"id": "CAND-003", "track": "Python + GenAI", "status": "VERIFIED"}`}</p>
            <p className="text-emerald-400 pt-1">
              Pipeline complete · 48/48 normalized · 0 schema errors (0.04s)
            </p>
          </div>
        </div>
      )}

      {/* Status footer tags */}
      <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-[11px] font-mono">
        <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
          Python 3.11
        </span>
        <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
          CSV Automation
        </span>
        <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
          Generative AI Prompting
        </span>
        <span className="px-2.5 py-1 rounded bg-blue-900/40 text-blue-300 border border-blue-700/40">
          26-Hour Certification
        </span>
      </div>
    </div>
  );
}

function EventShowcaseCard() {
  const [activeEvent, setActiveEvent] = useState<'pentas' | 'perjusa'>('pentas');

  return (
    <div className="glass-hairline rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-neutral-900/90 to-[#080808] border border-white/10 hover:border-amber-500/40 transition-all duration-300">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          Architecture • Stage Run-down
        </span>
        <div className="flex items-center gap-1 p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
          <button
            type="button"
            onClick={() => setActiveEvent('pentas')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
              activeEvent === 'pentas'
                ? 'bg-amber-500/20 text-amber-300'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Pentas Seni
          </button>
          <button
            type="button"
            onClick={() => setActiveEvent('perjusa')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
              activeEvent === 'perjusa'
                ? 'bg-indigo-500/20 text-indigo-300'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            PERJUSA Camp
          </button>
        </div>
      </div>

      {activeEvent === 'pentas' ? (
        <>
          <div className="grid grid-cols-3 gap-3 py-6 text-center">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">2,000+</div>
              <div className="text-[11px] text-neutral-400 font-mono mt-1">Live Audience</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xl sm:text-2xl font-bold text-amber-300 tabular-nums">5+</div>
              <div className="text-[11px] text-neutral-400 font-mono mt-1">Divisions Led</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 tabular-nums">
                100%
              </div>
              <div className="text-[11px] text-neutral-400 font-mono mt-1">
                Schedule Accuracy
              </div>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.08] text-xs text-neutral-300 flex items-start gap-3 leading-relaxed">
            <span className="text-amber-400 font-serif text-lg leading-none">“</span>
            <span>
              Led official permits, run-down minutes, multi-division walkie coordination, and VIP
              protocol without a single contingency breakdown.
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-3 py-6 text-center">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">150</div>
              <div className="text-[11px] text-neutral-400 font-mono mt-1">Student Campers</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xl sm:text-2xl font-bold text-indigo-300 tabular-nums">20+</div>
              <div className="text-[11px] text-neutral-400 font-mono mt-1">Staff Committee</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 tabular-nums">
                2 Days
              </div>
              <div className="text-[11px] text-neutral-400 font-mono mt-1">100% Safety Rec</div>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.08] text-xs text-neutral-300 flex items-start gap-3 leading-relaxed">
            <span className="text-indigo-400 font-serif text-lg leading-none">“</span>
            <span>
              Chief Event Organizer for the overnight PERJUSA leadership camp, orchestrating field
              rotations, night safety protocols, and seamless committee handoffs.
            </span>
          </div>
        </>
      )}
    </div>
  );
}

function DesignShowcaseCard() {
  return (
    <div className="glass-hairline rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-neutral-900/90 to-[#080808] border border-white/10 hover:border-emerald-500/40 transition-all duration-300">
      <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          UI / Perspective Grid
        </span>
        <span className="text-xs font-mono text-emerald-400">Champion PARADISE IX &amp; X</span>
      </div>
      <div className="py-6 space-y-3">
        <div className="flex items-center justify-between text-xs text-neutral-300">
          <span>Perspektif Gedung 3D Drafting</span>
          <span className="text-emerald-400 font-mono">Juara 1 (1st Place)</span>
        </div>
        <div className="w-full bg-white/[0.05] h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-[96%]" />
        </div>

        <div className="flex items-center justify-between text-xs text-neutral-300 pt-2">
          <span>Mading, Face Art &amp; Painting Composition</span>
          <span className="text-emerald-400 font-mono">Juara 1 (1st Place)</span>
        </div>
        <div className="w-full bg-white/[0.05] h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-[94%]" />
        </div>

        <div className="flex items-center justify-between text-xs text-neutral-300 pt-2">
          <span>Hasta Karya Putri Architecture (PERAK)</span>
          <span className="text-amber-300 font-mono">Juara 3 (3rd Place)</span>
        </div>
        <div className="w-full bg-white/[0.05] h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-300 h-full w-[85%]" />
        </div>
      </div>
      <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-[11px] font-mono">
        <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
          HTML5 Semantic
        </span>
        <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
          Tailwind CSS
        </span>
        <span className="px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]">
          Perspective Drafting
        </span>
      </div>
    </div>
  );
}

function GovernanceShowcaseCard() {
  return (
    <div className="glass-hairline rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-neutral-900/90 to-[#080808] border border-white/10 hover:border-purple-500/40 transition-all duration-300">
      <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          Credential Matrix
        </span>
        <span className="text-xs font-mono text-purple-300">Secretariat • IKSAN</span>
      </div>
      <div className="py-6 space-y-3 font-mono text-xs">
        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
          <span className="text-white">Praktik Amaliah Tadris (Teaching Practicum)</span>
          <span className="text-purple-300 font-bold tabular-nums">Grade 86 (Predikat A-)</span>
        </div>
        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
          <span className="text-white">Tahfizhul Qur&apos;an Certification</span>
          <span className="text-emerald-400 font-bold">Juz 29 &amp; Juz 30</span>
        </div>
        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
          <span className="text-white">LDK Kepemimpinan Jenjang SMA</span>
          <span className="text-blue-300 font-bold">Predikat Baik</span>
        </div>
      </div>
      <p className="text-xs text-neutral-400 leading-relaxed italic p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
        “Bridging student body grievances, managing confidential registry books, and standardizing
        institutional proposal documentation.”
      </p>
    </div>
  );
}

export function ProjectsSection({ onInspectProject }: ProjectsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('all');

  const visibleProjects =
    selectedFilter === 'all'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedFilter);

  const renderCard = (cardType: FeaturedProject['cardType']) => {
    switch (cardType) {
      case 'python':
        return <PythonShowcaseCard />;
      case 'event':
        return <EventShowcaseCard />;
      case 'design':
        return <DesignShowcaseCard />;
      case 'governance':
        return <GovernanceShowcaseCard />;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 z-20 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Eyebrow & Filter Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
              • FEATURED WORK &amp; LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2 text-balance">
              Crafting Software &amp; Directing Experiences
            </h2>
          </div>
          <div className="space-y-4 lg:text-right max-w-md">
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              A dual focus on clean Python &amp; web code paired with institutional governance and
              massive stage direction.
            </p>
            {/* Interactive Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter projects by discipline"
              className="inline-flex flex-wrap gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08]"
            >
              {FILTER_TABS.map((tab) => {
                const isActive = selectedFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedFilter(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#080808] font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Alternating 2-Column Editorial Rows */}
        <div className="space-y-24">
          {visibleProjects.map((project, index) => {
            const cardFirstOnDesktop = index % 2 === 0;
            return (
              <article
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
              >
                {/* Media Showcase Card */}
                <div
                  className={`lg:col-span-7 ${
                    cardFirstOnDesktop ? 'order-2 lg:order-1' : 'order-2'
                  }`}
                >
                  {renderCard(project.cardType)}
                </div>

                {/* Editorial Text */}
                <div
                  className={`lg:col-span-5 space-y-4 ${
                    cardFirstOnDesktop ? 'order-1 lg:order-2' : 'order-1'
                  }`}
                >
                  <div className="font-serif text-5xl sm:text-6xl text-white/30 font-normal tabular-nums">
                    {project.number}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{project.description}</p>
                  <div
                    className={`pt-2 flex flex-wrap items-center gap-3 text-xs font-mono ${KEYWORD_TONES[project.tone]}`}
                  >
                    <span>{project.keywords[0]}</span>
                    <span aria-hidden="true">•</span>
                    <span>{project.keywords[1]}</span>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onInspectProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-200 hover:text-white border-b border-white/20 hover:border-white pb-1 transition-colors cursor-pointer"
                    >
                      <span>View detailed case brief</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
