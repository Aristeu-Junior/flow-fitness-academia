import React from 'react';
import { MapPin, Navigation, ExternalLink, Info } from 'lucide-react';
import { GYM_INFO, getLiveGymStatus } from '../data/fitnessData';

export const ScheduleAndLocation: React.FC = () => {
  const status = getLiveGymStatus();

  return (
    <section id="horarios" className="py-20 bg-flow-surface/40 relative border-t border-flow-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-12">
          <span className="seg-num text-xs font-bold tracking-[0.18em] text-flow-primary uppercase">Localização & Funcionamento</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2" style={{ textWrap: 'balance' }}>
            Fácil de chegar, amplo horário para treinar.
          </h2>
          <p className="text-flow-muted mt-3 text-sm sm:text-base">
            Localizada no coração da Vila Santo Antônio em Ferraz de Vasconcelos, aberta das 06h às 22h para acompanhar seu ritmo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-panel panel border border-flow-border p-6">
              <div className="flex items-center justify-between pb-4 border-b border-flow-border/70">
                <div className="flex items-center gap-2.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-flow-primary' : 'bg-flow-subtle'}`} />
                  <span className="font-bold text-white text-sm">Status em Tempo Real</span>
                </div>
                <span className={`px-3 py-1 rounded-full seg-num text-xs font-black uppercase border ${status.isOpen ? 'bg-flow-primary/15 text-flow-primary border-flow-primary/40' : 'bg-flow-surface text-flow-muted border-flow-border'}`}>
                  {status.text}
                </span>
              </div>

              <div className="pt-4 space-y-2.5">
                {GYM_INFO.schedule.detailed.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-flow-border/30 last:border-0">
                    <span className="font-medium text-flow-light/90">{item.day}</span>
                    <div className="flex items-center gap-3">
                      <span className="seg-num seg-lit font-bold">{item.hours}</span>
                      <span className="text-[10px] text-flow-muted hidden sm:inline-block seg-num">Pico: {item.peak}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3.5 rounded-lg bg-flow-bg/70 border border-flow-border/60 flex items-start gap-2.5 text-xs text-flow-muted">
                <Info className="w-4 h-4 text-flow-primary shrink-0 mt-0.5" />
                <span><strong>Dica:</strong> para menor fluxo de alunos, prefira horários entre 10h-16h ou após 20h30.</span>
              </div>
            </div>

            <div className="rounded-panel panel border border-flow-border p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-flow-primary/10 border border-flow-primary/30 flex items-center justify-center text-flow-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">Endereço Oficial</h4>
                  <p className="text-xs text-flow-muted mt-1 leading-relaxed">{GYM_INFO.address.full}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a href={GYM_INFO.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-flow-card border border-flow-border text-xs font-bold text-white hover:border-flow-primary/40 transition-colors">
                  <Navigation className="w-3.5 h-3.5 text-flow-primary" />
                  <span>Google Maps</span>
                </a>
                <a href={GYM_INFO.address.wazeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-flow-card border border-flow-border text-xs font-bold text-white hover:border-flow-primary/40 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5 text-flow-primary" />
                  <span>Abrir no Waze</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-panel overflow-hidden panel border border-flow-border p-2 h-full flex flex-col">
              <div className="relative w-full h-[380px] sm:h-[480px] rounded-[8px] overflow-hidden">
                <iframe
                  title="Localização da Flow Fitness Academia"
                  src="https://maps.google.com/maps?q=Rua+Guarani,+360+-+Vila+Santo+Antonio,+Ferraz+de+Vasconcelos+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale contrast-125 invert opacity-90 hover:opacity-100 hover:grayscale-0 hover:invert-0 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-flow-muted">
                <span className="seg-num">Rua Guarani, 360 - Ferraz de Vasconcelos - SP (CEP 08534-140)</span>
                <a href={GYM_INFO.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-flow-primary hover:underline shrink-0">
                  Como Chegar na Academia →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
