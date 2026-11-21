import React, { useEffect, useState } from 'react';
import { X, Copy, Check, Mail, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA, FocusItem, EducationItem } from '../data/portfolioData';

export type ActiveModal =
  | { type: 'focus'; item: FocusItem }
  | { type: 'education'; item: EducationItem }
  | { type: 'project' }
  | { type: 'contact' }
  | null;

interface DetailModalsProps {
  modal: ActiveModal;
  onClose: () => void;
}

export const DetailModals: React.FC<DetailModalsProps> = ({ modal, onClose }) => {
  const [copiedJson, setCopiedJson] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderSubject, setSenderSubject] = useState('Collaboration / Learning Inquiry');
  const [senderMessage, setSenderMessage] = useState('');
  const [draftPrepared, setDraftPrepared] = useState(false);

  useEffect(() => {
    if (!modal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modal, onClose]);

  useEffect(() => {
    setDraftPrepared(false);
    setCopiedJson(false);
  }, [modal]);

  if (!modal) return null;

  const jsonPreview = JSON.stringify(
    {
      owner: PORTFOLIO_DATA.owner,
      featuredProject: PORTFOLIO_DATA.featuredProject,
      education: PORTFOLIO_DATA.education.map(({ id, period, institution, degree }) => ({
        id,
        period,
        institution,
        degree,
      })),
    },
    null,
    2
  );

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(jsonPreview);
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 2000);
    } catch {
      // Ignore if clipboard blocked
    }
  };

  const handlePrepareMailto = (e: React.FormEvent) => {
    e.preventDefault();
    setDraftPrepared(true);
  };

  const mailtoUrl = `mailto:adellinesyndri@gmail.com?subject=${encodeURIComponent(
    senderSubject || 'Hello Aaqilah'
  )}&body=${encodeURIComponent(
    `${senderName ? `From: ${senderName}\n\n` : ''}${senderMessage}`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#23201E]/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#F6F3EE] text-[#23201E] border-[1.5px] border-[#23201E]/20 shadow-[0_24px_60px_-12px_rgba(35,32,30,0.35)] overflow-hidden max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#EFE5E1] border-b border-[#23201E]/14 flex items-center justify-between gap-4">
          <div className="font-mono-code text-[11px] uppercase tracking-[0.14em] text-[#4F6D8A] font-semibold">
            {modal.type === 'focus' && 'Focus Track Notes'}
            {modal.type === 'education' && 'Academic Milestone'}
            {modal.type === 'project' && 'Featured Build · Data & Structure'}
            {modal.type === 'contact' && 'Direct Message · Jakarta'}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close detail dialog"
            className="w-8 h-8 rounded-full bg-white/80 text-[#23201E] flex items-center justify-center hover:bg-[#23201E] hover:text-[#F6F3EE] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          {modal.type === 'focus' && (
            <>
              <div>
                <h3 className="font-display text-[34px] leading-none text-[#23201E] mb-2">
                  {modal.item.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[#23201E]/78">
                  {modal.item.description}
                </p>
              </div>

              <div className="rounded-xl bg-[#E8E1D9] p-4 border border-dashed border-[#23201E]/25">
                <div className="text-[11px] font-extrabold tracking-[0.12em] uppercase text-[#4F6D8A] mb-1">
                  STUDY LOG NOTE
                </div>
                <p className="font-script text-[22px] leading-snug text-[#23201E]">
                  {modal.item.currentNote}
                </p>
              </div>

              <div>
                <h4 className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#23201E] mb-2.5">
                  Core Exploration Topics
                </h4>
                <ul className="space-y-2">
                  {modal.item.topics.map((topic) => (
                    <li
                      key={topic}
                      className="text-[13.5px] text-[#23201E]/85 flex items-start gap-2.5"
                    >
                      <span aria-hidden="true" className="text-[#4F6D8A]">
                        ✦
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-[#23201E]/12 flex flex-wrap items-center gap-2 text-[12px] font-mono-code text-[#23201E]/75">
                <span className="font-bold text-[#23201E]">Tools:</span>
                {modal.item.tools.map((tool, index) => (
                  <React.Fragment key={tool}>
                    <span>{tool}</span>
                    {index < modal.item.tools.length - 1 && <span aria-hidden="true">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </>
          )}

          {modal.type === 'education' && (
            <>
              <div>
                <div className="font-mono-code text-[11px] uppercase tracking-[0.1em] text-[#4F6D8A] mb-1.5">
                  {modal.item.period} · {modal.item.location}
                </div>
                <h3 className="font-display text-[32px] leading-[1.02] text-[#23201E] mb-1.5">
                  {modal.item.institution}
                </h3>
                <div className="text-[15px] font-bold text-[#23201E]/90">
                  {modal.item.degree}
                </div>
              </div>

              <p className="text-[14.5px] leading-relaxed text-[#23201E]/78">
                {modal.item.summary}
              </p>

              <div className="rounded-xl bg-[#EFE5E1] p-5 border border-[#23201E]/10">
                <h4 className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#23201E] mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {modal.item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-[13.5px] text-[#23201E]/85 flex items-start gap-2.5"
                    >
                      <span aria-hidden="true" className="text-[#4F6D8A]">
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {modal.type === 'project' && (
            <>
              <div>
                <h3 className="font-display text-[32px] leading-none text-[#23201E] mb-2">
                  {PORTFOLIO_DATA.featuredProject.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#23201E]/78">
                  {PORTFOLIO_DATA.featuredProject.summary}
                </p>
              </div>

              <div className="rounded-xl bg-[#23201E] text-[#F6F3EE] overflow-hidden border border-[#23201E]">
                <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
                  <span className="font-mono-code text-[11px] text-[#A3BFD9]">
                    portfolioData.json
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyJson}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono-code bg-white/10 hover:bg-[#4F6D8A] transition-colors cursor-pointer"
                  >
                    {copiedJson ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied JSON</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy JSON</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 text-[11.5px] leading-relaxed font-mono-code overflow-x-auto max-h-[260px] text-[#EFE5E1]">
                  {jsonPreview}
                </pre>
              </div>
            </>
          )}

          {modal.type === 'contact' && (
            <>
              <div>
                <h3 className="font-display text-[32px] leading-none text-[#23201E] mb-2">
                  LET&apos;S LEARN &amp; BUILD TOGETHER
                </h3>
                <p className="text-[14px] text-[#23201E]/75">
                  Prepare a note below to open in your email client, or connect directly via
                  LinkedIn or WhatsApp.
                </p>
              </div>

              <form onSubmit={handlePrepareMailto} className="space-y-3.5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#23201E]/80 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g., Nadia Pratama"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#23201E]/18 text-[14px] text-[#23201E] focus:outline-none focus:border-[#4F6D8A]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#23201E]/80 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#23201E]/18 text-[14px] text-[#23201E] focus:outline-none focus:border-[#4F6D8A]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#23201E]/80 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Share a project idea, study topic, or question..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#23201E]/18 text-[14px] text-[#23201E] focus:outline-none focus:border-[#4F6D8A]"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-lg bg-[#23201E] text-[#F6F3EE] text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[#4F6D8A] transition-colors cursor-pointer"
                  >
                    Prepare Email Draft
                  </button>

                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#23201E]/20 text-[12px] font-bold uppercase tracking-[0.08em] text-[#23201E] hover:bg-[#EFE5E1] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open Mail App</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>

                {draftPrepared && (
                  <div className="rounded-lg bg-[#EFE5E1] px-4 py-3 text-[13px] text-[#23201E] border border-[#23201E]/12">
                    Draft ready for <strong>adellinesyndri@gmail.com</strong>. Click &ldquo;Open
                    Mail App&rdquo; to send your message.
                  </div>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
