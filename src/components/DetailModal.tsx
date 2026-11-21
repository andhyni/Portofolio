import { useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import type { FeaturedProject, RibbonSlide } from '../data/portfolioData';

export type ModalItem =
  | { kind: 'project'; data: FeaturedProject }
  | { kind: 'slide'; data: RibbonSlide };

interface DetailModalProps {
  item: ModalItem | null;
  onClose: () => void;
  onStartProject: (topic?: string) => void;
}

export function DetailModal({ item, onClose, onStartProject }: DetailModalProps) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const isProject = item.kind === 'project';
  const title = item.data.title;
  const subtitle = isProject ? item.data.caseStudy.organization : item.data.details.organization;
  const role = isProject ? item.data.caseStudy.role : item.data.details.role;
  const eyebrow = isProject
    ? `${item.data.number} ${item.data.categoryLabel}`
    : `${item.data.tag} · ${item.data.period}`;
  const highlights = isProject ? item.data.caseStudy.execution : item.data.details.highlights;
  const stack = isProject ? item.data.caseStudy.stack : item.data.details.skills;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-modal-title"
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#101118] border border-white/15 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Row */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div className="space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block">
              {eyebrow}
            </span>
            <h3
              id="detail-modal-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
            >
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              {role} <span aria-hidden="true">·</span> {subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close detail dialog"
            className="p-2 rounded-full border border-white/15 text-neutral-300 hover:text-white hover:border-white/35 transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Challenge (if Project) */}
        {isProject && (
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Objective &amp; Scope
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {item.data.caseStudy.challenge}
            </p>
          </div>
        )}

        {/* Execution Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Key Execution Highlights
          </h4>
          <ul className="space-y-2.5">
            {highlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact Summary */}
        {isProject && (
          <div className="p-4 rounded-xl bg-blue-950/35 border border-blue-500/25 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-300">
              Verified Outcome
            </span>
            <p className="text-sm text-white leading-relaxed">{item.data.caseStudy.impact}</p>
          </div>
        )}

        {/* Skills / Stack */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Capabilities Applied
          </h4>
          <div className="flex flex-wrap gap-2">
            {stack.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.04] text-neutral-300 border border-white/[0.08]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-full border border-white/15 text-xs font-medium text-neutral-300 hover:text-white hover:border-white/35 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onStartProject(title);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#080808] text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <span>Discuss similar collaboration</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
