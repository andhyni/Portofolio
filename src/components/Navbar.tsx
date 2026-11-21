import { useEffect, useState } from 'react';
import { MapPin, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'whyme', label: 'Why Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'credentials', label: 'Experience' },
];

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const scrollPosition = window.scrollY + 140;
      const sectionIds = ['about', 'whyme', 'projects', 'credentials', 'contact'];
      let current = 'about';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
        scrolled
          ? 'bg-[#080808]/88 border-white/[0.08]'
          : 'bg-[#080808]/75 border-white/[0.06]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        {/* Brand Wordmark */}
        <a
          href="#about"
          aria-label="Andhyni Homepage"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm"
        >
          <span className="font-sans font-semibold tracking-tight text-xl text-white group-hover:text-blue-200 transition-colors">
            Andhyni<span className="text-blue-500 font-bold">.</span>
          </span>
        </a>

        {/* Center Status Context (Visible on xl screens to guarantee zero crowding) */}
        <div className="hidden xl:flex items-center gap-4 text-xs font-medium text-neutral-400 shrink-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" aria-hidden="true" />
            <span>Based in Tangerang &amp; Jakarta</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-neutral-200 whitespace-nowrap">
            <span className="inline-flex rounded-full h-2 w-2 bg-cyan-400 shrink-0" aria-hidden="true" />
            <span className="font-mono text-[11px] tracking-wide text-neutral-300">
              Open for Internships &amp; Projects
            </span>
          </div>
        </div>

        {/* Right Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-7 text-xs uppercase tracking-widest text-neutral-400 font-medium shrink-0"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`whitespace-nowrap shrink-0 transition-colors duration-200 py-1 border-b ${
                  isActive
                    ? 'text-white border-sky-400/80'
                    : 'text-neutral-400 border-transparent hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <button
            type="button"
            onClick={onOpenInquiry}
            className="whitespace-nowrap shrink-0 px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#080808] hover:border-white transition-all duration-200 font-semibold tracking-normal normal-case cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={onOpenInquiry}
            className="whitespace-nowrap shrink-0 px-3.5 py-2 rounded-full border border-white/20 text-xs text-white font-semibold hover:bg-white hover:text-[#080808] transition-colors cursor-pointer"
          >
            Contact
          </button>
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2.5 rounded-lg border border-white/10 text-neutral-300 hover:text-white hover:border-white/25 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#080808]/95 backdrop-blur-xl px-6 py-5 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 pb-3 border-b border-white/[0.08]">
            <span>Tangerang &amp; Jakarta</span>
            <span aria-hidden="true">·</span>
            <span className="text-sky-300">Open for Internships &amp; Projects</span>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`py-2.5 text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="py-2.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              Direct Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
