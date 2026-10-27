import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { GYM_INFO, getLiveGymStatus } from '../data/fitnessData';
import { useCountUp } from '../hooks/useCountUp';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export const Hero: React.FC = () => {
  const status = getLiveGymStatus();
  const ratingRef = useCountUp<HTMLSpanElement>({ end: 4.8, decimals: 1, duration: 1.2 });
  const reviewsRef = useCountUp<HTMLSpanElement>({ end: 170, decimals: 0, duration: 1.4 });

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden bg-flow-bg"
    >
      <div className="absolute inset-0 bg-scanline opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-flow-primary/[0.06] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left: thesis + CTA */}
          <motion.div
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col items-start"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 px-3.5 py-2 panel rounded-full border border-flow-border mb-7"
            >
              <span className="relative flex h-2 w-2">
                {status.isOpen && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flow-primary opacity-70" />
                )}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${status.isOpen ? 'bg-flow-primary' : 'bg-flow-subtle'}`} />
              </span>
              <span className="seg-num text-[11px] font-bold text-flow-primary tracking-[0.18em] uppercase">
                {status.text} · {status.subtext}
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-display text-[2.6rem] sm:text-6xl lg:text-[4.2rem] font-bold text-white tracking-tight leading-[1.04]"
              style={{ textWrap: 'balance' }}
            >
              Treino sério,<br />
              resultado no{' '}
              <span className="seg-num seg-lit font-black">placar.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-base sm:text-lg text-flow-muted max-w-xl leading-relaxed mt-6"
            >
              Musculação completa, avaliação física no padrão da OMS e planos a partir de{' '}
              <strong className="text-white font-semibold seg-num">R$ 63,33/mês</strong>, a dois passos de casa em Vila Santo Antônio.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mt-8"
            >
              <a
                href={`${GYM_INFO.contacts.whatsappUrl}?text=${encodeURIComponent('Olá! Quero agendar minha aula experimental na Flow Fitness.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-panel bg-flow-primary text-flow-bg font-extrabold text-sm uppercase tracking-wider transition-transform duration-150 hover:bg-flow-primaryHover active:scale-[0.97] shadow-[0_0_0_3px_#080B0E,0_0_0_5px_#1d3a28]"
              >
                <span>Agendar Aula Experimental</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-panel panel border border-flow-border text-white font-semibold text-sm hover:border-flow-primary/40 transition-colors"
              >
                <span>Ver Planos</span>
              </a>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              className="flex items-center gap-2 mt-7 text-xs text-flow-muted"
            >
              <MapPin className="w-3.5 h-3.5 text-flow-primary shrink-0" />
              <span>{GYM_INFO.address.street} — {GYM_INFO.address.neighborhood}, {GYM_INFO.address.city}</span>
            </motion.div>
          </motion.div>

          {/* Right: live scoreboard panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full"
          >
            <div className="panel border border-flow-border rounded-panel p-5 sm:p-6">
              <div className="flex items-center justify-between pb-4 border-b border-flow-border/70 mb-4">
                <span className="seg-num text-[11px] font-bold text-flow-muted tracking-[0.2em] uppercase">Flow // Placar</span>
                <span className="seg-num text-[11px] font-bold text-flow-primary tracking-[0.15em]">AO VIVO</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="text-center">
                  <span ref={ratingRef} className="block seg-num seg-lit text-3xl sm:text-4xl font-extrabold animate-seg-flicker">0.0</span>
                  <span className="block text-[10px] text-flow-muted uppercase tracking-[0.14em] mt-1">Nota Google</span>
                </div>
                <div className="text-center border-x border-flow-border/60">
                  <span ref={reviewsRef} className="block seg-num seg-lit text-3xl sm:text-4xl font-extrabold animate-seg-flicker">0</span>
                  <span className="block text-[10px] text-flow-muted uppercase tracking-[0.14em] mt-1">Avaliações</span>
                </div>
                <div className="text-center">
                  <span className="block seg-num seg-lit text-3xl sm:text-4xl font-extrabold">06-22</span>
                  <span className="block text-[10px] text-flow-muted uppercase tracking-[0.14em] mt-1">Horário Hoje</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 text-[10px] uppercase tracking-[0.14em] seg-num">
                <span className="text-flow-muted">Pico de Movimento · Terça</span>
                <span className="text-flow-primary">18h–20h</span>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-flow-border/60 text-[10px] text-flow-muted uppercase tracking-[0.1em] seg-num">
                <span>{GYM_INFO.address.street.toUpperCase()}</span>
                <span className="text-flow-primary">● LGBTQ+ FRIENDLY</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
