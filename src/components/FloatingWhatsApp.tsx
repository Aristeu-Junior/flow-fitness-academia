import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { GYM_INFO } from '../data/fitnessData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative bg-flow-surface border border-flow-border text-white text-xs py-2 px-3.5 rounded-2xl shadow-2xl flex items-center gap-2.5 max-w-[220px] animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 w-4 h-4 bg-flow-card border border-flow-border rounded-full flex items-center justify-center text-flow-muted hover:text-white"
          >
            <X className="w-2.5 h-2.5" />
          </button>
          <div className="w-2 h-2 rounded-full bg-flow-primary shrink-0 animate-ping" />
          <p className="leading-tight text-[11px]">
            <strong className="text-flow-primary">Atendimento Online!</strong> Tire dúvidas sobre planos ou agende sua visita.
          </p>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={GYM_INFO.contacts.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Falar com a Flow Fitness pelo WhatsApp"
      >
        <div className="absolute inset-0 rounded-2xl bg-emerald-500 animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};
