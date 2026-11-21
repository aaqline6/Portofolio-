import React, { useState } from 'react';
import { Check, Copy, ArrowUpRight, Send } from 'lucide-react';
import { PORTFOLIO_DATA, EducationItem } from '../data/portfolioData';

interface EducationAndConnectRowProps {
  onSelectEducation: (item: EducationItem) => void;
  onOpenContactModal: () => void;
}

export const EducationAndConnectRow: React.FC<EducationAndConnectRowProps> = ({
  onSelectEducation,
  onOpenContactModal,
}) => {
  const { education, contacts, owner } = PORTFOLIO_DATA;
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (e: React.MouseEvent, id: string, value: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Clipboard fallback ignored if blocked
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
      {/* Left Panel: EDUCATION */}
      <section
        id="education"
        className="bg-[#F6F3EE] bento-border-r px-6 py-9 sm:px-11 sm:py-12"
      >
        <div className="flex flex-wrap items-baseline gap-3.5 mb-7">
          <h2 className="font-display text-[clamp(34px,4vw,52px)] leading-[0.98] text-[#23201E]">
            EDUCATION
          </h2>
          <span className="font-script text-[22px] text-[#23201E] -rotate-2">
            Academic path &amp; milestones ♡
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
          {education.map((edu) => {
            const isCurrent = edu.variant === 'current';
            return (
              <button
                key={edu.id}
                type="button"
                onClick={() => onSelectEducation(edu)}
                className={`group text-left rounded-[14px] p-6 min-h-[230px] flex flex-col justify-between shadow-[0_8px_18px_rgba(0,0,0,0.06)] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F6D8A] ${
                  isCurrent
                    ? 'bg-gradient-to-br from-[#2C353D] to-[#1E2429] text-[#F6F3EE]'
                    : 'bg-[#D8CFC6] text-[#23201E] border border-[#23201E]/10'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`font-mono-code text-[10.5px] font-semibold tracking-[0.04em] px-3 py-1 rounded-full ${
                      isCurrent
                        ? 'bg-[#4F6D8A] text-white'
                        : 'bg-[#23201E]/10 text-[#23201E]'
                    }`}
                  >
                    {edu.period}
                  </span>
                  <ArrowUpRight
                    className={`w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity ${
                      isCurrent ? 'text-[#F6F3EE]' : 'text-[#23201E]'
                    }`}
                  />
                </div>

                <div>
                  <h3 className="text-[18px] font-extrabold leading-snug mb-1">
                    {edu.institution}
                  </h3>
                  <div className="text-[13.5px] font-semibold opacity-90 mb-2.5">
                    {edu.degree}
                  </div>
                  <p className="text-[12px] leading-[1.55] opacity-80">{edu.summary}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Right Panel: LET'S CONNECT */}
      <section
        id="contact"
        className="bg-[#23201E] text-[#F6F3EE] px-6 py-9 sm:px-11 sm:py-12 flex flex-col justify-between"
      >
        <div>
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6">
            <h2 className="font-display text-[clamp(34px,3.8vw,48px)] leading-[0.98] text-[#F6F3EE] whitespace-nowrap">
              LET&apos;S CONNECT
            </h2>
            <span className="font-script text-[20px] leading-[1.2] text-[#EFE5E1] -rotate-4 sm:text-right sm:max-w-[165px]">
              Let&apos;s learn &amp; build together ♡
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center justify-between gap-2 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] hover:border-[#4F6D8A] transition-all duration-200 px-3.5 py-2.5"
              >
                <a
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 min-w-0 flex-1 text-[13.5px] font-medium text-[#F6F3EE] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3BFD9]"
                >
                  <span aria-hidden="true" className="text-[#A3BFD9] font-bold shrink-0">
                    ✓
                  </span>
                  <span className="truncate">
                    <strong className="font-bold">{contact.platform}</strong> — {contact.handle}
                  </span>
                </a>

                {contact.copyValue && (
                  <button
                    type="button"
                    onClick={(e) => handleCopy(e, contact.id, contact.copyValue!)}
                    aria-label={`Copy ${contact.platform}`}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono-code bg-white/10 text-[#EFE5E1] hover:bg-[#4F6D8A] hover:text-white transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedId === contact.id ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onOpenContactModal}
            className="mt-4 w-full py-2.5 px-4 rounded-lg bg-[#4F6D8A] text-white text-[12px] font-bold tracking-[0.1em] uppercase flex items-center justify-center gap-2 hover:bg-[#5E7E9D] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3BFD9]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Compose Message</span>
          </button>
        </div>

        <div className="mt-7 pt-4 border-t border-white/12 flex items-center justify-between">
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#F6F3EE]/70">
            PORTOFOLIO {owner.year} · JAKARTA
          </span>
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 stroke-[#F6F3EE]/70 fill-none stroke-[1.5]"
            aria-hidden="true"
          >
            <path d="M3 21c8-3 12-9 14-18M7 16c2-4 6-6 10-7M12 11c3-2 5-5 6-9" strokeLinecap="round" />
          </svg>
        </div>
      </section>
    </div>
  );
};
