import React from 'react';
import {
  Terminal,
  Settings,
  Sparkles,
  LayoutGrid,
  Search,
  FileText,
  ArrowUpRight,
} from 'lucide-react';
import { PORTFOLIO_DATA, FocusItem } from '../data/portfolioData';

interface FocusAndProjectRowProps {
  onSelectFocus: (focus: FocusItem) => void;
  onInspectProject: () => void;
}

const renderFocusIcon = (icon: FocusItem['icon']) => {
  switch (icon) {
    case 'terminal':
      return <Terminal className="w-[18px] h-[18px]" />;
    case 'cog':
      return <Settings className="w-[18px] h-[18px]" />;
    case 'sparkles':
      return <Sparkles className="w-[18px] h-[18px]" />;
    case 'grid':
      return <LayoutGrid className="w-[18px] h-[18px]" />;
    case 'search':
      return <Search className="w-[18px] h-[18px]" />;
    case 'doc':
      return <FileText className="w-[18px] h-[18px]" />;
  }
};

export const FocusAndProjectRow: React.FC<FocusAndProjectRowProps> = ({
  onSelectFocus,
  onInspectProject,
}) => {
  const { focusAreas, featuredProject } = PORTFOLIO_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bento-border-b">
      {/* Left Panel: MY FOCUS INCLUDES */}
      <section
        id="focus"
        className="bg-[#F6F3EE] bento-border-r px-6 py-9 sm:px-11 sm:py-12"
      >
        <div className="flex items-baseline justify-between gap-4 mb-7">
          <h2 className="font-display text-[clamp(34px,4vw,52px)] leading-[0.98] text-[#23201E]">
            MY FOCUS INCLUDES
          </h2>
          <span className="font-mono-code text-[11px] text-[#23201E]/60 whitespace-nowrap">
            6 tracks
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {focusAreas.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectFocus(item)}
                className={`group text-left rounded-xl p-4 border border-[#23201E]/8 flex flex-col justify-between min-h-[156px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_18px_-6px_rgba(0,0,0,0.08)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F6D8A] ${
                  isEven ? 'bg-[#E8E1D9]' : 'bg-[#EFE5E1]'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-[34px] h-[34px] rounded-lg bg-white flex items-center justify-center text-[#4F6D8A] shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
                    {renderFocusIcon(item.icon)}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#23201E]/40 group-hover:text-[#4F6D8A] transition-colors" />
                </div>

                <div>
                  <h3 className="text-[12px] font-extrabold uppercase tracking-[0.04em] text-[#23201E] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[11.5px] leading-[1.48] text-[#23201E]/75">
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Right Panel: FEATURED BUILD */}
      <section
        id="projects"
        className="bg-[#EFE5E1] px-6 py-9 sm:px-11 sm:py-12 flex flex-col justify-between"
      >
        <div>
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
            <div>
              <div className="text-[12px] font-extrabold tracking-[0.14em] uppercase text-[#4F6D8A] mb-1.5">
                {featuredProject.eyebrow}
              </div>
              <h2 className="font-display text-[clamp(34px,4vw,52px)] leading-[0.98] text-[#23201E]">
                {featuredProject.sectionTitle}
              </h2>
            </div>

            <div className="font-script text-[19px] leading-[1.2] text-[#4F6D8A] sm:text-right sm:max-w-[175px] -rotate-3 sm:-rotate-5 shrink-0">
              {featuredProject.scriptNote}
            </div>
          </div>

          <h3 className="text-[18px] font-extrabold text-[#23201E] mb-2">
            {featuredProject.title}
          </h3>
          <p className="text-[14px] leading-[1.6] text-[#23201E]/76 mb-4">
            {featuredProject.summary}
          </p>

          <ul className="space-y-1.5 mb-6">
            {featuredProject.highlights.map((bullet) => (
              <li
                key={bullet}
                className="text-[13px] leading-[1.5] text-[#23201E] flex items-start gap-2.5"
              >
                <span aria-hidden="true" className="text-[#4F6D8A] text-[12px] leading-[1.5]">
                  ✦
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* 3-Column Metrics */}
          <div className="grid grid-cols-3 gap-2.5 mb-5">
            {featuredProject.metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-white/75 px-2.5 py-3 text-center rounded-lg border border-[#23201E]/8"
              >
                <div className="font-display text-[22px] leading-[1.1] text-[#23201E] tabular-nums">
                  {metric.value}
                </div>
                <div className="mt-1 text-[9.5px] font-bold uppercase tracking-[0.08em] text-[#23201E]/70">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Strip + Interactive Case Study Action */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/55 px-4 py-3.5 rounded-[10px] border border-[#23201E]/8">
            <div className="text-[12px] font-semibold text-[#23201E] leading-snug">
              <strong>{featuredProject.milestones[0].step}</strong>
              <span className="block text-[11px] font-normal text-[#23201E]/75">
                {featuredProject.milestones[0].detail}
              </span>
            </div>

            <span aria-hidden="true" className="font-script text-[24px] text-[#4F6D8A] hidden sm:inline">
              →
            </span>

            <div className="text-[12px] font-semibold text-[#23201E] leading-snug">
              <strong>{featuredProject.milestones[1].step}</strong>
              <span className="block text-[11px] font-normal text-[#23201E]/75">
                {featuredProject.milestones[1].detail}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onInspectProject}
            className="w-full py-2.5 px-4 rounded-lg bg-[#23201E] text-[#F6F3EE] text-[12px] font-bold tracking-[0.1em] uppercase flex items-center justify-center gap-2 hover:bg-[#4F6D8A] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F6D8A]"
          >
            <span>View Build Architecture &amp; JSON</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
