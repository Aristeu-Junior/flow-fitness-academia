import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { GYM_INFO } from '../data/fitnessData';
import { asset } from '../lib/assets';

interface NavbarProps {
  onOpenConductModal: () => void;
  onOpenCareersModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConductModal, onOpenCareersModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Planos', href: '#planos' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Horários', href: '#horarios' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-flow-bg/92 backdrop-blur-xl border-b border-flow-border py-3' : 'bg-flow-bg/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
          <img src={asset('images/logo.png')} alt="Flow Fitness Academia" className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="seg-num font-extrabold text-sm sm:text-base tracking-[0.12em] text-white">
            FLOW <span className="text-flow-primary">FITNESS</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-flow-muted hover:text-flow-primary px-3 py-2 rounded-lg hover:bg-flow-surface transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenConductModal}
            className="text-xs font-semibold text-flow-subtle hover:text-white px-3 py-2 rounded-lg hover:bg-flow-surface transition-colors"
          >
            Normas
          </button>
        </nav>

        <div className="hidden sm:flex items-center shrink-0">
          <a
            href={GYM_INFO.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex items-center gap-2 px-4 py-2.5 rounded-panel text-flow-bg font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Matricule-se</span>
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg panel border border-flow-border text-flow-light"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-flow-bg/97 backdrop-blur-2xl border-b border-flow-border px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg panel border border-flow-border text-sm font-medium text-flow-light hover:text-flow-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex gap-2 pt-2 border-t border-flow-border/60">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenConductModal(); }}
              className="flex-1 py-2 rounded-lg panel text-xs font-semibold text-flow-muted border border-flow-border"
            >
              Normas de Conduta
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCareersModal(); }}
              className="flex-1 py-2 rounded-lg panel text-xs font-semibold text-flow-muted border border-flow-border"
            >
              Trabalhe Conosco
            </button>
          </div>

          <a
            href={GYM_INFO.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient w-full flex items-center justify-center gap-2 py-3 rounded-panel text-flow-bg font-bold text-sm uppercase tracking-wide"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
};
