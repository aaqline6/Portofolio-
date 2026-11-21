import React from 'react';
import { Cpu, Code2, Search, FileText, Star, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA, QualificationItem } from '../data/portfolioData';

interface AboutAndSkillsRowProps {
  selectedQualificationId: string | null;
  onSelectQualification: (item: QualificationItem) => void;
}

const renderSkillIcon = (icon: QualificationItem['icon']) => {
  switch (icon) {
    case 'cpu':
      return <Cpu className="w-[17px] h-[17px]" />;
    case 'code':
      return <Code2 className="w-[17px] h-[17px]" />;
    case 'search':
      return <Search className="w-[17px] h-[17px]" />;
    case 'file':
      return <FileText className="w-[17px] h-[17px]" />;
    case 'star':
      return <Star className="w-[17px] h-[17px]" />;
  }
};

export const AboutAndSkillsRow: React.FC<AboutAndSkillsRowProps> = ({
  selectedQualificationId,
  onSelectQualification,
}) => {
  const { about, qualifications, studentNote } = PORTFOLIO_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] bento-border-b">
      {/* Left Panel: WHO AM I */}
      <section
        id="about"
        className="bg-[#EFE5E1] bento-border-r px-6 py-9 sm:px-11 sm:py-12 flex flex-col justify-between"
      >
        <div>
          <h2 className="font-display text-[clamp(38px,4.5vw,58px)] text-[#23201E] mb-6">
            {about.heading}
          </h2>

          <div className="space-y-4 text-[14.5px] leading-[1.7] text-[#23201E]/78 max-w-[54ch]">
            <p>
              Hi! I&apos;m <strong className="font-bold text-[#23201E]">Aaqilah Adelline Syndri</strong>, an
              Informatics Engineering student at Institut Teknologi PLN with a strong interest in
              Artificial Intelligence and AI Agent Automation.
            </p>
            <p>{about.paragraphs[1]}</p>
          </div>
        </div>

        <div className="mt-8 pt-2 flex items-end gap-3 -rotate-2 origin-left">
          <div className="font-script text-[24px] leading-[1.2] text-[#23201E]">
            {about.scriptLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </div>
          <svg
            viewBox="0 0 24 24"
            className="w-[22px] h-[22px] stroke-[#23201E] fill-none stroke-2 mb-1 shrink-0"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
      </section>

      {/* Right Panel: QUALIFICATIONS */}
      <section id="skills" className="bg-[#F6F3EE] px-6 py-9 sm:px-11 sm:py-12">
        <h2 className="font-display text-[clamp(38px,4.5vw,58px)] text-[#23201E] mb-6">
          QUALIFICATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
          {/* Interactive Skill Stack */}
          <div className="flex flex-col gap-3">
            {qualifications.map((item) => {
              const isSelected = selectedQualificationId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectQualification(item)}
                  aria-pressed={isSelected}
                  className={`w-full text-left rounded-[14px] px-4 py-3 flex items-center gap-3.5 border transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F6D8A] ${
                    isSelected
                      ? 'bg-[#E5DCD8] border-[#4F6D8A]/50 translate-x-1'
                      : 'bg-[#EFE5E1] border-[#23201E]/8 hover:bg-[#E8DCD7] hover:translate-x-1'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#4F6D8A] shrink-0 shadow-[0_2px_6px_rgba(0,0,0,0.06)]">
                    {renderSkillIcon(item.icon)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[13.5px] font-semibold text-[#23201E] leading-snug">
                      {item.label}
                    </span>
                    {isSelected && (
                      <span className="block mt-1 text-[12px] leading-relaxed text-[#23201E]/75">
                        {item.detail}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tilted Tactile Student Note Card */}
          <div className="relative rounded-[14px] bg-[#E8E1D9] px-5 py-6 min-h-[260px] flex flex-col justify-between border border-dashed border-[#23201E]/25 md:-rotate-2 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.08)]">
            {/* Tape Strip */}
            <div
              aria-hidden="true"
              className="absolute -top-2 left-[42%] w-10 h-3.5 bg-white/70 border border-[#23201E]/10 -rotate-3"
            />

            <div>
              <div className="text-[11px] font-extrabold tracking-[0.12em] uppercase text-[#4F6D8A]">
                {studentNote.label}
              </div>
              <div className="mt-3.5 font-script text-[27px] leading-[1.3] text-[#23201E]">
                {studentNote.quote}
              </div>
            </div>

            <div className="mt-5 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[#23201E]/75 bg-white/75 px-3 py-1.5 rounded-full self-start">
              <MapPin className="w-3.5 h-3.5 text-[#4F6D8A] shrink-0" />
              <span>{studentNote.location}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
