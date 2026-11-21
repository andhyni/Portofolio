import { useState } from 'react';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import {
  PORTRAIT_IMAGE_URL,
  RIBBON_SLIDES,
  type AccentTone,
  type RibbonSlide,
} from '../data/portfolioData';

interface HeroSectionProps {
  onSelectSlide: (slide: RibbonSlide) => void;
  onBeginProject: () => void;
}

const TONE_BADGE_CLASSES: Record<AccentTone, string> = {
  blue: 'text-blue-400 bg-blue-950/60 border-blue-800/40',
  amber: 'text-amber-300 bg-amber-950/50 border-amber-800/40',
  emerald: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/40',
  indigo: 'text-indigo-300 bg-indigo-950/50 border-indigo-800/40',
  purple: 'text-purple-300 bg-purple-950/50 border-purple-800/40',
  cyan: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/40',
};

const TONE_FOOTER_CLASSES: Record<AccentTone, string> = {
  blue: 'text-cyan-400 font-semibold',
  amber: 'text-white font-semibold',
  emerald: 'text-emerald-400 font-bold',
  indigo: 'text-indigo-300 font-semibold',
  purple: 'text-purple-300 font-semibold',
  cyan: 'text-cyan-400 font-semibold',
};

export function HeroSection({ onSelectSlide, onBeginProject }: HeroSectionProps) {
  const [portraitFailed, setPortraitFailed] = useState(false);
  const [portraitLoaded, setPortraitLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-[92vh] pt-24 pb-14 flex flex-col justify-between overflow-hidden z-10"
    >
      {/* Top Micro Bar */}
      <div className="max-w-7xl w-full mx-auto px-6 pt-4 flex flex-wrap justify-between items-center gap-4 text-xs text-neutral-400">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-neutral-300">Mahasiswa S1 Teknik Informatika</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline font-mono text-neutral-500">
            ARCHITECTURAL VISION · PYTHON AUTOMATION
          </span>
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={isPaused ? 'Resume highlight ribbon' : 'Pause highlight ribbon'}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono text-neutral-400 hover:text-white hover:border-white/25 transition-colors cursor-pointer"
          >
            {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
            <span>{isPaused ? 'Resume' : 'Pause'}</span>
          </button>
        </div>
      </div>

      {/* Center Stage: 3D Curved Continuous Ribbon & Portrait Anchor */}
      <div className="relative w-full my-auto py-12 sm:py-16 hero-perspective-stage flex items-center justify-center overflow-hidden min-h-[340px] sm:min-h-[430px] lg:min-h-[480px]">
        {/* 3D Ribbon moving infinitely in background */}
        <div
          className={`curved-marquee-track gap-6 opacity-65 hover:opacity-95 transition-opacity duration-500 ${
            isPaused ? 'is-paused' : ''
          }`}
          data-purpose="3d-carousel-ribbon"
        >
          {[0, 1].map((dupIndex) =>
            RIBBON_SLIDES.map((slide) => (
              <button
                key={`${dupIndex}-${slide.id}`}
                type="button"
                aria-hidden={dupIndex === 1 ? true : undefined}
                tabIndex={dupIndex === 1 ? -1 : 0}
                onClick={() => onSelectSlide(slide)}
                className="w-72 sm:w-80 h-44 rounded-xl p-5 text-left bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/10 hover:border-white/30 shadow-2xl flex flex-col justify-between backdrop-blur-md transform transition-all duration-300 hover:scale-[1.03] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${TONE_BADGE_CLASSES[slide.tone]}`}
                  >
                    {slide.tag}
                  </span>
                  <span className="text-xs text-neutral-500 whitespace-nowrap">{slide.period}</span>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-white">{slide.title}</h2>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                    {slide.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>{slide.footerLeft}</span>
                  <span className={TONE_FOOTER_CLASSES[slide.tone]}>{slide.footerRight}</span>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Center Cutout Portrait of Andhyni */}
        <div className="absolute bottom-[-14px] sm:bottom-[-20px] left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
          {/* Soft navy backlight glow under portrait */}
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-500/18 blur-3xl absolute top-10 pointer-events-none" />

          {!portraitFailed ? (
            <img
              src={PORTRAIT_IMAGE_URL}
              alt="Andhyni A'syafa A-lifia portrait"
              referrerPolicy="no-referrer"
              onLoad={() => setPortraitLoaded(true)}
              onError={() => setPortraitFailed(true)}
              className={`h-[340px] sm:h-[430px] md:h-[480px] max-h-[68vh] w-auto max-w-[90vw] object-contain object-top drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] select-none transition-opacity duration-500 ${
                portraitLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            /* Editorial Fallback Monogram Arch when external image is unreachable */
            <div className="w-60 sm:w-72 h-[310px] sm:h-[380px] rounded-t-[150px] rounded-b-3xl bg-gradient-to-b from-[#1A365D]/95 via-[#0f1f38]/95 to-[#080808] border border-blue-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-sky-400/20 to-transparent" />
              <span className="font-serif italic text-6xl sm:text-7xl text-white/90 tracking-tight select-none">
                AA
              </span>
              <span className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-blue-200/80">
                Andhyni A&apos;syafa A-lifia
              </span>
              <span className="mt-1.5 text-xs text-neutral-400">
                Informatics · Event Leadership
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Left & Right Editorial Floating Blocks */}
      <div className="max-w-7xl w-full mx-auto px-6 relative z-30 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          {/* Left: Large H1 Title & White Primary Pill CTA */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Hi, I&apos;m Andhyni
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-[-0.02em] text-white leading-[1.08] text-balance">
                Informatics &amp; <br />
                <span className="text-neutral-100">Event Leader</span>
              </h1>
            </div>
            <div>
              <button
                type="button"
                onClick={onBeginProject}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-[#080808] font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 group shadow-lg hover:shadow-white/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                <span>Begin a project</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#080808] text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </button>
            </div>
          </div>

          {/* Right: Editorial Bio & Signature */}
          <div className="md:text-right space-y-4 max-w-md md:ml-auto">
            <p className="text-sm sm:text-base text-[#8E929B] leading-relaxed font-normal">
              I&apos;m <strong className="text-white font-semibold">Andhyni</strong>, an Informatics
              Engineering student at{' '}
              <strong className="text-white font-semibold">Institut Teknologi PLN</strong> who turns{' '}
              <strong className="text-white font-semibold">clean Python &amp; web code</strong> and{' '}
              <strong className="text-white font-semibold">structured event management</strong>{' '}
              into real, impactful experiences.
            </p>
            {/* Handwritten Signature with safe right padding so it never clips */}
            <div className="pt-1 pr-3 flex md:justify-end items-center">
              <span className="font-signature text-4xl sm:text-[42px] text-neutral-200 tracking-wide select-none inline-block -rotate-3 hover:rotate-0 transition-transform duration-300">
                Andhyni
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
