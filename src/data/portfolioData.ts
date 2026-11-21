export type AccentTone = 'blue' | 'amber' | 'emerald' | 'indigo' | 'purple' | 'cyan';

export interface RibbonSlide {
  id: string;
  tag: string;
  period: string;
  title: string;
  summary: string;
  footerLeft: string;
  footerRight: string;
  tone: AccentTone;
  projectId: string;
  details: {
    role: string;
    organization: string;
    highlights: string[];
    skills: string[];
  };
}

export interface ExecutiveMetric {
  id: string;
  value: string;
  label: string;
  description: string;
  tone: 'blue' | 'emerald' | 'cyan' | 'amber';
  column: 'left' | 'right';
}

export type ProjectCategory = 'all' | 'engineering' | 'leadership' | 'design' | 'governance';

export interface FeaturedProject {
  id: string;
  number: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  title: string;
  description: string;
  keywords: [string, string];
  tone: 'blue' | 'amber' | 'emerald' | 'purple';
  cardType: 'python' | 'event' | 'design' | 'governance';
  caseStudy: {
    role: string;
    timeline: string;
    organization: string;
    challenge: string;
    execution: string[];
    impact: string;
    stack: string[];
  };
}

export interface CredentialItem {
  id: string;
  title: string;
  badge: string;
  badgeTone: 'blue' | 'cyan' | 'neutral' | 'purple' | 'emerald' | 'amber';
  subtitle: string;
  description: string;
}

export const PORTRAIT_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB8OW4BdLWqR-whN6apVLqHEbPGwircUhTi9yVtdte4KXNRBFHINWdvkEco-4Z0UOboXpwkLFaoMzMTZsAuss-4DWQISrJsDEJcLjEkugAKHAYgUFUN0ORABQ28cu1hhavZyXZ_wef2gaqAoCfG37pkKNwDnTCBgGFuKegHeH7y4rkg1QVDqN9glMA5occRU3H67aewVV5A9y-vERc-a_2pADfURA4J8lNeDQIgxcJJGy4mpokrS9aO6g';

export const RIBBON_SLIDES: RibbonSlide[] = [
  {
    id: 'sic-kickstart',
    tag: 'Samsung Innovation Campus',
    period: 'Batch 8',
    title: 'Code Kickstart (26 Hrs)',
    summary: 'Python Programming, CSV Data pipelines & Gen AI prompting logic.',
    footerLeft: 'Stage 1 Completed',
    footerRight: 'Score: Pass ✓',
    tone: 'blue',
    projectId: 'project-01',
    details: {
      role: 'Stage 1 Cohort Participant',
      organization: 'Samsung Innovation Campus Batch 8',
      highlights: [
        'Completed 26 hours of structured Python engineering covering Lists, Dictionaries, control structures, and clean modular functions.',
        'Built automated CSV ingestion and validation pipelines to normalize candidate datasets.',
        'Applied structured Generative AI prompt workflows for algorithmic debugging and evaluation.',
      ],
      skills: ['Python 3.11', 'CSV Pipelines', 'Data Normalization', 'Gen AI Prompting'],
    },
  },
  {
    id: 'pentas-seni',
    tag: 'Leadership & Stage',
    period: '2024',
    title: 'Pentas Seni Akbar',
    summary: 'Secretary & Stage Flow Direction for 2,000+ attendees across 5+ divisions.',
    footerLeft: '5+ Division Heads',
    footerRight: '2,000+ Crowd',
    tone: 'amber',
    projectId: 'project-02',
    details: {
      role: 'Secretary & Event Division Lead',
      organization: 'Pentas Seni Akbar',
      highlights: [
        'Directed synchronized stage transitions and crowd flow for over 2,000 live attendees.',
        'Coordinated 5+ operational divisions covering logistics, security, VIP protocol, and stage technicals.',
        'Managed official permit packages, minute-by-minute run-downs, and contingency escalation paths with zero protocol failures.',
      ],
      skills: ['Stage Direction', 'Crowd Governance', 'VIP Protocol', 'Cross-Division Comms'],
    },
  },
  {
    id: 'paradise-awards',
    tag: 'Award · 4x 1st Place',
    period: 'PARADISE IX & X',
    title: 'Perspektif Gedung & Mading Art',
    summary: 'Champion in technical architectural perspective drawing, painting & creative UI.',
    footerLeft: 'Tingkat Penegak',
    footerRight: 'Juara 1 Trophy',
    tone: 'emerald',
    projectId: 'project-03',
    details: {
      role: 'First-Place Competition Champion',
      organization: 'PARADISE IX & X (Tingkat Penegak)',
      highlights: [
        'Awarded Juara I Perspektif Gedung for precision architectural perspective drafting and geometric lighting.',
        'Swept first-place honors across Mading curation, Face Art, and Painting composition in PARADISE X.',
        'Translated spatial proportion and editorial layout craft directly into responsive Front-End UI engineering.',
      ],
      skills: ['Architectural Perspective', 'Visual Composition', 'Editorial Layout', 'Tailwind UI'],
    },
  },
  {
    id: 'perjusa-camp',
    tag: 'Event Director',
    period: '2024',
    title: 'PERJUSA Annual Camp',
    summary: 'Chief Event Organizer leading 20+ staff committee & 150 student campers.',
    footerLeft: '150 Campers',
    footerRight: '100% Safety Rec',
    tone: 'indigo',
    projectId: 'project-02',
    details: {
      role: 'Chief Event Organizer',
      organization: 'PERJUSA 2-Day Overnight Camp',
      highlights: [
        'Led end-to-end planning and live execution for a 2-day overnight student leadership camp with 150 campers.',
        'Supervised 20+ committee staff across field activities, logistics, night watch, and medical readiness.',
        'Maintained a 100% safety record and on-time rotation across all camp sessions.',
      ],
      skills: ['Event Architecture', 'Safety Operations', 'Staff Supervision', 'Schedule Control'],
    },
  },
  {
    id: 'amaliah-mediation',
    tag: 'Governance',
    period: 'IKSAN',
    title: 'Amaliah Tadris & Mediation',
    summary: 'Grade 86 (A-) Teaching Practicum, Quran Tahfizh 2 Juz, and conflict mediation.',
    footerLeft: 'Secretariat',
    footerRight: 'Nilai A- (86)',
    tone: 'purple',
    projectId: 'project-04',
    details: {
      role: 'General Secretary & Mediator',
      organization: 'IKSAN (2024–2025) & OSPTQ Al-Azka (2020–2023)',
      highlights: [
        'Achieved Grade 86 (Predikat A-) in Praktik Amaliah Tadris pedagogical evaluation.',
        'Served as neutral conflict mediator and standardized official proposal documentation across student organizations.',
        'Completed Tahfizhul Qur’an certification covering Juz 29, Juz 30, and selected chapters.',
      ],
      skills: ['Secretarial Governance', 'Conflict Mediation', 'Pedagogy', 'Official Proposals'],
    },
  },
];

export const EXECUTIVE_METRICS: ExecutiveMetric[] = [
  {
    id: 'audience',
    value: '2000+',
    label: 'Audience Managed',
    description:
      'Orchestrated stage flow & audience direction across 5+ divisions at Pentas Seni Akbar with zero protocol failure.',
    tone: 'blue',
    column: 'left',
  },
  {
    id: 'campers',
    value: '150+',
    label: 'Campers & Committee',
    description:
      'Chief Event Director for 2-day PERJUSA overnight camp leading 20+ staff committee members seamlessly.',
    tone: 'emerald',
    column: 'left',
  },
  {
    id: 'sic-hours',
    value: '26 HRS',
    label: 'Samsung Innovation Campus',
    description:
      'Intensive training in Python programming, algorithmic data parsing (CSV, Lists, Dictionaries) and generative AI prompt pipelines.',
    tone: 'cyan',
    column: 'right',
  },
  {
    id: 'trophies',
    value: '4x',
    label: '1st Place Trophies',
    description:
      'Consecutive first-place state honors in architectural perspective drawing, wall-magazine design & creative arts (PARADISE IX & X).',
    tone: 'amber',
    column: 'right',
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'project-01',
    number: '01.',
    category: 'engineering',
    categoryLabel: 'Python & Gen AI',
    title: 'Python & Generative AI Development',
    description:
      'Building structured, clean Python programs using Lists, Dictionaries, and CSV data pipelines alongside modern Generative AI prompting workflows completed during the intensive 26-hour Samsung Innovation Campus Batch 8 (Code Kickstart Stage).',
    keywords: ['ALGORITHMIC LOGIC', 'DATA NORMALIZATION'],
    tone: 'blue',
    cardType: 'python',
    caseStudy: {
      role: 'Python Developer & SIC Cohort Member',
      timeline: '2026 · 26-Hour Intensive',
      organization: 'Samsung Innovation Campus Batch 8',
      challenge:
        'Transform raw, inconsistent applicant CSV records into clean structured dictionaries ready for automated Generative AI scoring without manual preprocessing.',
      execution: [
        'Engineered deterministic CSV DictReader ingestion pipelines with UTF-8 normalization and missing-field guards.',
        'Structured nested Python list/dictionary transforms to tag, verify, and batch candidate records cleanly.',
        'Designed repeatable prompt templates for Generative AI evaluation with structured JSON-like verification summaries.',
      ],
      impact: 'Completed Stage 1 Code Kickstart with Pass certification and reusable Python data utility modules.',
      stack: ['Python 3.11', 'CSV Automation', 'Lists & Dictionaries', 'Generative AI Prompting'],
    },
  },
  {
    id: 'project-02',
    number: '02.',
    category: 'leadership',
    categoryLabel: 'Event Direction',
    title: 'Large-Scale Event & Stage Direction',
    description:
      'Serving as Secretary & Event Division lead for Pentas Seni Akbar (over 2,000 attendees across 5+ operational divisions) and Chief Event Organizer for the 2-day PERJUSA annual camp directing 150 campers and 20+ committee members.',
    keywords: ['CROWD GOVERNANCE', 'STAGE PROTOCOL'],
    tone: 'amber',
    cardType: 'event',
    caseStudy: {
      role: 'Secretary, Stage Director & Chief Organizer',
      timeline: '2024 · Live Productions',
      organization: 'Pentas Seni Akbar & PERJUSA Annual Camp',
      challenge:
        'Synchronize stage performers, VIP guests, technical crews, and multi-division student volunteers across high-density live schedules without bottlenecks.',
      execution: [
        'Authored master minute-by-minute run-downs and cross-division radio communication protocols.',
        'Managed official venue permits, stakeholder briefs, and real-time backstage transition cues across 5+ divisions.',
        'Directed 20+ camp committee staff overseeing 150 overnight PERJUSA participants with clear safety checkpoints.',
      ],
      impact: '2,000+ live audience managed with 100% schedule accuracy and zero safety or protocol incidents.',
      stack: ['Stage Run-Down Architecture', 'VIP Protocol', 'Crisis Mediation', 'Multi-Division Ops'],
    },
  },
  {
    id: 'project-03',
    number: '03.',
    category: 'design',
    categoryLabel: 'Front-End & Visuals',
    title: 'Front-End Web & Visual Design',
    description:
      'Crafting responsive web interfaces as an Informatics Engineering undergraduate at Institut Teknologi PLN, backed by 4x 1st-place trophies in architectural perspective drawing, painting, and creative composition (PARADISE IX & X).',
    keywords: ['SPATIAL AESTHETICS', 'DESIGN FIDELITY'],
    tone: 'emerald',
    cardType: 'design',
    caseStudy: {
      role: 'Front-End Developer & Visual Artist',
      timeline: '2024 – Present',
      organization: 'Institut Teknologi PLN · PARADISE IX & X',
      challenge:
        'Bridge fine-art spatial geometry and architectural perspective precision into clean, responsive semantic web interfaces.',
      execution: [
        'Applied architectural focal-point geometry and visual hierarchy mastered across 4 first-place PARADISE IX & X competitions.',
        'Built accessible semantic HTML5 and Tailwind CSS layouts with balanced grid rhythm and high-contrast editorial typography.',
        'Combined structural drafting precision (PERAK 2024 Hasta Karya) with modern component-driven web interfaces.',
      ],
      impact: '4x 1st Place Trophies (PARADISE IX & X) and 3rd Place Regional Craft Honors (PERAK 2024).',
      stack: ['HTML5 Semantic', 'Tailwind CSS', 'React & TypeScript', 'Perspective Drafting'],
    },
  },
  {
    id: 'project-04',
    number: '04.',
    category: 'governance',
    categoryLabel: 'Administration',
    title: 'Organizational Administration & Mediation',
    description:
      'Full-cycle secretarial governance, official proposal drafting, and empathetic interpersonal conflict mediation as General Secretary of IKSAN (2024–2025) and OSPTQ Al-Azka (2020–2023), paired with certified pedagogical teaching experience.',
    keywords: ['DIPLOMATIC RESOLUTION', 'GOVERNANCE ARCHIVE'],
    tone: 'purple',
    cardType: 'governance',
    caseStudy: {
      role: 'General Secretary & Certified Teaching Practicum',
      timeline: '2020 – 2025',
      organization: 'IKSAN & OSPTQ Al-Azka',
      challenge:
        'Maintain institutional continuity, transparent documentation, and constructive team cohesion across student governing boards.',
      execution: [
        'Standardized official proposal templates, meeting minutes, and confidential registry archives across multi-year terms.',
        'Mediated interpersonal and inter-division grievances calmly, turning friction into documented action agreements.',
        'Delivered structured classroom lessons during Praktik Amaliah Tadris earning Grade 86 (Predikat A-).',
      ],
      impact: 'Multi-year clean secretariat archive, Grade 86 (A-) teaching certification, and Predikat Baik LDK leadership.',
      stack: ['Secretarial Governance', 'Official Proposal Drafting', 'Conflict Mediation', 'Pedagogical Instruction'],
    },
  },
];

export const EDUCATION_CREDENTIALS: CredentialItem[] = [
  {
    id: 'edu-1',
    title: 'S1 Teknik Informatika',
    badge: '2026 – Present',
    badgeTone: 'blue',
    subtitle: 'Institut Teknologi PLN (Jakarta)',
    description: 'Undergraduate student focusing on web engineering, algorithms & UI logic.',
  },
  {
    id: 'edu-2',
    title: 'Samsung Innovation Campus (SIC)',
    badge: '2026',
    badgeTone: 'cyan',
    subtitle: 'Batch 8 — Stage 1: Code Kickstart Python Programming',
    description: '26 Hours of intensive Python algorithms, CSV data pipelines & Generative AI prompting.',
  },
  {
    id: 'edu-3',
    title: 'SMA Islam An-Nuqthah',
    badge: '2026',
    badgeTone: 'neutral',
    subtitle: 'Jurusan Matematika & Ilmu Pengetahuan Alam (MIPA)',
    description: 'Strong foundation in exact calculus, analytical logic & science.',
  },
  {
    id: 'edu-4',
    title: "SMP Tahfizhul Qur'an Al-Azka",
    badge: '2023',
    badgeTone: 'neutral',
    subtitle: 'Tahfizh & Boarding School Foundation',
    description: 'Disciplined memory retention, linguistic studies & leadership basics.',
  },
  {
    id: 'edu-5',
    title: 'Sertifikasi Amaliah Tadris & LDK',
    badge: 'Certified',
    badgeTone: 'purple',
    subtitle: 'Nilai 86 (Predikat A-) & LDK Jenjang SMA (Predikat Baik)',
    description: 'Evaluated on classroom instruction mastery, curriculum drafting & student engagement.',
  },
];

export const AWARDS_HONORS: CredentialItem[] = [
  {
    id: 'award-1',
    title: 'Juara I Perspektif Gedung (Penegak)',
    badge: '1st Place Trophy',
    badgeTone: 'emerald',
    subtitle: 'PARADISE IX',
    description: 'Technical architectural drawing with accurate focal points and geometric lighting.',
  },
  {
    id: 'award-2',
    title: 'Juara I Mading, Face Art & Melukis',
    badge: '1st Place Trophy',
    badgeTone: 'emerald',
    subtitle: 'PARADISE X (Tingkat Penegak)',
    description: 'Triple-category champion in editorial wall magazine curation and artistic painting.',
  },
  {
    id: 'award-3',
    title: 'Juara III Hasta Karya Putri Tingkat SMA',
    badge: '3rd Place',
    badgeTone: 'amber',
    subtitle: 'PERAK 2024',
    description: 'Regional craft and structural artifact competition for high-school level.',
  },
  {
    id: 'award-4',
    title: "Tahfizh Qur'an Juz 29 & 30 + Surat Pilihan",
    badge: 'Completed',
    badgeTone: 'cyan',
    subtitle: 'Wisuda Tahfizh Al-Azka',
    description: 'Rigorous verbal recitation, tajweed compliance & complete memorization.',
  },
  {
    id: 'award-5',
    title: 'Delegasi LP-Garuda II & LP A_GANGLION VI',
    badge: 'Regional Delegate',
    badgeTone: 'neutral',
    subtitle: 'Kwarda Banten & Putri Scout Contingent',
    description: 'Representative for provincial scout championship in field engineering and survival.',
  },
];

export const CONTACT_INFO = {
  email: 'ndyasyafaa15@gmail.com',
  linkedinUrl: "https://www.linkedin.com/in/andhyni-a'syafa-a-lifia",
  linkedinDisplay: "LinkedIn: Andhyni A'syafa A-lifia",
  whatsappUrl: 'https://wa.me/6281285231446',
  whatsappDisplay: '+62 812-8523-1446',
  location: 'Tangerang & Jakarta, Indonesia',
};
