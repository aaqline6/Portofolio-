import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutAndSkillsRow } from './components/AboutAndSkillsRow';
import { FocusAndProjectRow } from './components/FocusAndProjectRow';
import { EducationAndConnectRow } from './components/EducationAndConnectRow';
import { DetailModals, ActiveModal } from './components/DetailModals';
import { PORTFOLIO_DATA, QualificationItem } from './data/portfolioData';

export default function App() {
  const [selectedQualificationId, setSelectedQualificationId] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  const handleSelectQualification = (item: QualificationItem) => {
    setSelectedQualificationId((prev) => (prev === item.id ? null : item.id));
  };

  return (
    <div className="min-h-screen bg-[#F6F3EE] text-[#23201E] relative">
      {/* Subtle Paper Grain SVG Overlay */}
      <svg
        className="paper-grain"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="paperNoiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves={3}
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#paperNoiseFilter)" />
      </svg>

      {/* Main Architectural Editorial Container */}
      <div className="max-w-[1280px] mx-auto bento-border-x bg-[#F6F3EE] shadow-[0_0_50px_rgba(0,0,0,0.04)] relative">
        <Navbar onOpenContactModal={() => setActiveModal({ type: 'contact' })} />

        <main>
          <HeroSection />

          <AboutAndSkillsRow
            selectedQualificationId={selectedQualificationId}
            onSelectQualification={handleSelectQualification}
          />

          <FocusAndProjectRow
            onSelectFocus={(item) => setActiveModal({ type: 'focus', item })}
            onInspectProject={() => setActiveModal({ type: 'project' })}
          />

          <EducationAndConnectRow
            onSelectEducation={(item) => setActiveModal({ type: 'education', item })}
            onOpenContactModal={() => setActiveModal({ type: 'contact' })}
          />
        </main>

        {/* Bottom Copyright Bar */}
        <footer className="bg-[#23201E] border-t border-[#F6F3EE]/12 px-6 sm:px-11 py-4.5 text-[#F6F3EE]/65 text-[12px] flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div>
            © {PORTFOLIO_DATA.owner.year} {PORTFOLIO_DATA.owner.name}. All rights reserved.
          </div>
          <div>
            Informatics Engineering · {PORTFOLIO_DATA.owner.institutionShort}
          </div>
        </footer>
      </div>

      <DetailModals modal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
