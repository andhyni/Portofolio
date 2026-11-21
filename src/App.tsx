import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyMeSection } from './components/WhyMeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactFooter } from './components/ContactFooter';
import { DetailModal, type ModalItem } from './components/DetailModal';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';

export default function App() {
  const [activeDetail, setActiveDetail] = useState<ModalItem | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (topic?: string) => {
    setInquiryTopic(topic);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white relative selection:bg-blue-900 selection:text-white antialiased">
      {/* Ambient Background Perspective Floor Grid & Radial Spotlight */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-perspective-grid pointer-events-none z-0"
      />
      <div
        aria-hidden="true"
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0"
      />

      {/* Fixed Glass Navigation Header */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <HeroSection
          onSelectSlide={(slide) => setActiveDetail({ kind: 'slide', data: slide })}
          onBeginProject={() => handleOpenInquiry()}
        />

        <WhyMeSection />

        <ProjectsSection
          onInspectProject={(project) => setActiveDetail({ kind: 'project', data: project })}
        />

        <CredentialsSection />
      </main>

      <ContactFooter onOpenInquiry={() => handleOpenInquiry()} />

      {/* Interactive Modals */}
      <DetailModal
        item={activeDetail}
        onClose={() => setActiveDetail(null)}
        onStartProject={(topic) => handleOpenInquiry(topic)}
      />

      <ProjectInquiryModal
        isOpen={inquiryOpen}
        initialTopic={inquiryTopic}
        onClose={() => setInquiryOpen(false)}
      />
    </div>
  );
}
