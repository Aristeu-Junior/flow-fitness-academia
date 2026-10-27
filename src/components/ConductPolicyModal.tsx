import React from 'react';
import { X, ShieldCheck, CheckCircle2, HeartHandshake } from 'lucide-react';
import { CONDUCT_POLICIES } from '../data/fitnessData';

interface ConductPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConductPolicyModal: React.FC<ConductPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-flow-surface border border-flow-border rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-flow-border/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-flow-primary/15 border border-flow-primary/30 flex items-center justify-center text-flow-primary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                Normas de Boa Conduta
              </h3>
              <p className="text-xs text-flow-muted">
                Diretrizes para um ambiente harmonioso e seguro na Flow Fitness
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-flow-card text-flow-muted hover:text-white hover:bg-flow-border transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Body */}
        <div className="py-6 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
          {CONDUCT_POLICIES.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-flow-bg/80 border border-flow-border/70 space-y-1.5"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-flow-primary shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-flow-muted leading-relaxed pl-6">
                {item.description}
              </p>
            </div>
          ))}

          <div className="p-4 rounded-2xl bg-flow-primary/10 border border-flow-primary/30 flex items-start gap-3 text-xs text-flow-light">
            <HeartHandshake className="w-5 h-5 text-flow-primary shrink-0 mt-0.5" />
            <span>
              Nosso compromisso é oferecer um espaço inclusivo, onde todos possam treinar com conforto, foco e respeito mútuo.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-flow-border/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-flow-primary text-flow-bg font-bold text-xs uppercase tracking-wider hover:bg-flow-primaryHover transition-all"
          >
            Entendido e Concordo
          </button>
        </div>
      </div>
    </div>
  );
};
