import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { GYM_INFO } from '../data/fitnessData';
import { asset } from '../lib/assets';

interface FooterProps {
  onOpenConductModal: () => void;
  onOpenCareersModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConductModal, onOpenCareersModal }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-flow-surface border-t border-flow-border/80 pt-16 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-flow-border/60">

          <div className="lg:col-span-5 space-y-4">
            <a href="#inicio" className="inline-flex items-center gap-3">
              <img src={asset('images/logo.png')} alt="Flow Fitness Academia" className="w-10 h-10" />
              <span className="seg-num font-extrabold text-xl tracking-[0.1em] text-white">
                FLOW <span className="text-flow-primary">FITNESS</span>
              </span>
            </a>

            <p className="text-sm text-flow-muted leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">"{GYM_INFO.slogan}"</strong> — a academia que combina musculação de alta performance, avaliação física com padrão OMS e acolhimento em Ferraz de Vasconcelos.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a href={GYM_INFO.contacts.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Flow Fitness" className="w-9 h-9 rounded-lg panel border border-flow-border flex items-center justify-center text-flow-muted hover:text-flow-primary hover:border-flow-primary/40 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={GYM_INFO.contacts.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook da Flow Fitness" className="w-9 h-9 rounded-lg panel border border-flow-border flex items-center justify-center text-flow-muted hover:text-flow-primary hover:border-flow-primary/40 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={GYM_INFO.contacts.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Flow Fitness" className="w-9 h-9 rounded-lg panel border border-flow-border flex items-center justify-center text-flow-muted hover:text-flow-primary hover:border-flow-primary/40 transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="seg-num font-bold text-xs text-flow-muted uppercase tracking-[0.14em]">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="text-flow-muted hover:text-flow-primary transition-colors">Início</a></li>
              <li><a href="#modalidades" className="text-flow-muted hover:text-flow-primary transition-colors">Modalidades & Treinos</a></li>
              <li><a href="#planos" className="text-flow-muted hover:text-flow-primary transition-colors">Planos & Valores</a></li>
              <li><a href="#estrutura" className="text-flow-muted hover:text-flow-primary transition-colors">Estrutura & Fotos</a></li>
              <li><a href="#horarios" className="text-flow-muted hover:text-flow-primary transition-colors">Horários de Treino</a></li>
              <li><a href="#faq" className="text-flow-muted hover:text-flow-primary transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h4 className="seg-num font-bold text-xs text-flow-muted uppercase tracking-[0.14em]">Atendimento & Contato</h4>
            <div className="space-y-2.5 text-xs text-flow-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-flow-primary shrink-0 mt-0.5" />
                <span>{GYM_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-flow-primary shrink-0" />
                <a href={`mailto:${GYM_INFO.contacts.email}`} className="hover:text-white transition-colors">{GYM_INFO.contacts.email}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-flow-primary shrink-0" />
                <a href={GYM_INFO.contacts.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Atendimento via WhatsApp Oficial</a>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-2">
              <button onClick={onOpenConductModal} className="text-[11px] px-3 py-1.5 rounded-lg panel border border-flow-border text-flow-muted hover:text-white transition-colors">
                Normas de Boa Conduta
              </button>
              <button onClick={onOpenCareersModal} className="text-[11px] px-3 py-1.5 rounded-lg panel border border-flow-border text-flow-muted hover:text-white transition-colors">
                Trabalhe Conosco
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-flow-muted">
          <div>
            © {new Date().getFullYear()} Flow Fitness Academia. Todos os direitos reservados.
            <span className="block sm:inline sm:ml-2 text-[11px] text-flow-subtle">Parceiro: {GYM_INFO.contacts.partner}</span>
          </div>
          <button onClick={scrollToTop} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg panel border border-flow-border hover:border-flow-primary/40 text-flow-light hover:text-flow-primary transition-colors text-xs">
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
