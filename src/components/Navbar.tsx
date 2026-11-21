import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenContactModal: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F6F3EE]/92 backdrop-blur-md bento-border-b">
      <div className="h-[60px] px-5 md:px-8 flex items-center justify-between gap-6">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#"
          className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.14em] uppercase text-[#23201E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4F6D8A]"
        >
          {PORTFOLIO_DATA.owner.name}
        </a>

        {/* Zone 2: Clean single-line text nav links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative py-1 text-[12px] font-semibold tracking-[0.14em] uppercase text-[#23201E] hover:text-[#4F6D8A] transition-colors whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4F6D8A]"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#4F6D8A] transition-all duration-200 group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenContactModal}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#23201E] text-[#F6F3EE] text-[11.5px] font-bold tracking-[0.12em] uppercase hover:bg-[#4F6D8A] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F6D8A]"
          >
            Say Hello
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#23201E]/15 text-[#23201E] hover:bg-[#EFE5E1] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#23201E]/14 bg-[#F6F3EE] px-5 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="py-2.5 px-3 rounded-lg text-[12px] font-bold tracking-[0.14em] uppercase text-[#23201E] hover:bg-[#EFE5E1] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenContactModal();
            }}
            className="mt-1 py-2.5 px-4 rounded-lg bg-[#23201E] text-[#F6F3EE] text-[12px] font-bold tracking-[0.12em] uppercase text-center hover:bg-[#4F6D8A] transition-colors cursor-pointer"
          >
            Say Hello
          </button>
        </div>
      )}
    </header>
  );
};
