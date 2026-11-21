import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
}

const COLLAB_TYPES = [
  'Software / Front-End Engineering',
  'Python & Data Automation',
  'Event & Stage Direction',
  'Internship / Organization Role',
];

export function ProjectInquiryModal({
  isOpen,
  initialTopic,
  onClose,
}: ProjectInquiryModalProps) {
  const [selectedType, setSelectedType] = useState<string>(COLLAB_TYPES[0]);
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [copiedBrief, setCopiedBrief] = useState(false);

  useEffect(() => {
    if (isOpen && initialTopic) {
      setMessage(`Hi Andhyni, I saw your work on "${initialTopic}" and would love to discuss a collaboration.`);
    }
  }, [isOpen, initialTopic]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const subject = encodeURIComponent(
    `[${selectedType}] Collaboration Inquiry${name ? ` from ${name}` : ''}`
  );
  const fullBodyText = [
    `Hello Andhyni,`,
    ``,
    `Collaboration Focus: ${selectedType}`,
    name ? `Name: ${name}` : null,
    organization ? `Organization / Team: ${organization}` : null,
    ``,
    message.trim() ||
      `I'd like to discuss an upcoming project, internship, or event opportunity.`,
  ]
    .filter((line) => line !== null)
    .join('\n');

  const mailtoHref = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${encodeURIComponent(
    fullBodyText
  )}`;
  const whatsappHref = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(fullBodyText)}`;

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(fullBodyText);
      setCopiedBrief(true);
      window.setTimeout(() => setCopiedBrief(false), 2400);
    } catch {
      setCopiedBrief(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#101118] border border-white/15 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block">
              Initiate Collaboration
            </span>
            <h3
              id="inquiry-modal-title"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Begin a Project Brief
            </h3>
            <p className="text-xs text-neutral-400">
              Compose a quick inquiry to send via email or WhatsApp directly to Andhyni.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close inquiry modal"
            className="p-2 rounded-full border border-white/15 text-neutral-300 hover:text-white hover:border-white/35 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Discipline Selector */}
        <div className="space-y-2.5">
          <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
            Collaboration Track
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {COLLAB_TYPES.map((type) => {
              const active = selectedType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`px-3.5 py-2.5 rounded-xl text-left text-xs font-medium border transition-colors cursor-pointer ${
                    active
                      ? 'bg-blue-950/60 border-sky-400/70 text-white'
                      : 'bg-white/[0.02] border-white/10 text-neutral-400 hover:text-white hover:border-white/25'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="inquiry-name" className="text-xs font-medium text-neutral-300 block">
              Your Name
            </label>
            <input
              id="inquiry-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Raka Pratama"
              className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="inquiry-org" className="text-xs font-medium text-neutral-300 block">
              Organization / Company
            </label>
            <input
              id="inquiry-org"
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="e.g. IT PLN / Tech Team"
              className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="inquiry-message" className="text-xs font-medium text-neutral-300 block">
            Project Scope or Role Details
          </label>
          <textarea
            id="inquiry-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share timeline, deliverables, or event scale..."
            className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-sky-400 transition-colors resize-none"
          />
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopyBrief}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-xs font-medium text-neutral-300 hover:text-white hover:border-white/35 transition-colors cursor-pointer"
          >
            {copiedBrief ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Brief Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Text</span>
              </>
            )}
          </button>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-hairline text-xs font-semibold text-emerald-300 hover:border-emerald-400/50 transition-colors"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#080808] text-xs font-semibold hover:bg-neutral-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send via Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
