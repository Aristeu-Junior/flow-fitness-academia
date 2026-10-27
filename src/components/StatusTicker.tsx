import React from 'react';
import { Dumbbell, ShieldCheck, Clock, Zap, HeartPulse, Award } from 'lucide-react';

export const StatusTicker: React.FC = () => {
  const tickerItems = [
    { icon: Dumbbell, text: 'MUSCULAÇÃO COMPLETA & PESOS LIVRES' },
    { icon: Clock, text: 'SEG-SEX 06H-22H · SÁB 07H-12H' },
    { icon: Zap, text: 'PLANOS A PARTIR DE R$ 63,33/MÊS' },
    { icon: Award, text: 'FLOW TOGETHER: AVALIAÇÃO PADRÃO OMS' },
    { icon: ShieldCheck, text: 'ISENÇÃO DE MATRÍCULA A PARTIR DO TRIMESTRAL' },
    { icon: HeartPulse, text: 'CARDIO & ERGOMETRIA DE ALTA PERFORMANCE' },
  ];

  return (
    <div className="relative w-full bg-[#0A0D10] border-y border-flow-border py-2.5 overflow-hidden">
      <div className="absolute inset-0 bg-scanline opacity-50 pointer-events-none" />
      <div className="flex w-max animate-marquee relative">
        {[...tickerItems, ...tickerItems].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-2.5 mx-7 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-flow-primary shrink-0" />
              <Icon className="w-3.5 h-3.5 text-flow-primary shrink-0" />
              <span className="seg-num text-xs font-bold tracking-[0.12em] text-flow-light/90">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
