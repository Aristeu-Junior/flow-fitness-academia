import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Dumbbell, HeartPulse, Activity, Users, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { MODALITIES, GYM_INFO } from '../data/fitnessData';
import { revealHeader } from '../lib/reveal';

const iconMap: Record<string, React.ElementType> = { Dumbbell, HeartPulse, Activity, Users };

export const Modalities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="modalidades" className="py-20 bg-flow-bg relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div {...revealHeader} className="max-w-2xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Tudo o que seu corpo precisa para evoluir com consistência.
          </h2>
          <p className="text-flow-muted mt-3 text-sm sm:text-base leading-relaxed">
            Ambiente planejado para quem busca emagrecimento, hipertrofia, saúde ou longevidade, com orientação de profissionais e equipamentos de ponta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MODALITIES.map((modality, idx) => {
            const Icon = iconMap[modality.icon] || Dumbbell;
            const isFeatured = idx === 2;

            return (
              <motion.div
                key={modality.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className={`group relative rounded-panel overflow-hidden border transition-colors duration-300 ${
                  isFeatured ? 'bg-flow-card border-flow-primary/40' : 'panel border-flow-border hover:border-flow-borderHover'
                }`}
              >
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <img
                    src={modality.image}
                    alt={modality.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-flow-surface via-flow-surface/40 to-transparent" />

                  <div className="absolute top-0 left-0 px-3 py-2 bg-[#0A0D10]/90 border-r border-b border-flow-border seg-num text-[11px] font-bold text-flow-primary tracking-[0.1em]">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/75 border border-white/10 rounded-md text-[11px] font-semibold text-white">
                    <Icon className="w-3 h-3 text-flow-primary" />
                    <span className="seg-num tracking-wide">{modality.category}</span>
                  </div>

                  {isFeatured && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-flow-primary text-flow-bg text-[10px] font-extrabold tracking-wider uppercase">
                      Destaque OMS
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-flow-primary transition-colors">
                    {modality.title}
                  </h3>

                  <p className="text-flow-muted text-sm leading-relaxed">{modality.description}</p>

                  <ul className="space-y-2 pt-3 border-t border-flow-border/60">
                    {modality.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-sm text-flow-light/90">
                        <CheckCircle2 className="w-4 h-4 text-flow-primary shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`${GYM_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre a modalidade: ${modality.title} na Flow Fitness.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-flow-primary hover:text-white transition-colors pt-1"
                  >
                    <span>Tirar dúvidas sobre este treino</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
