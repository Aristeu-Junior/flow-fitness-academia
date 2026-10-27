import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/fitnessData';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-flow-bg"
    >
      <div className="absolute inset-0 bg-scanline opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-flow-primary/[0.06] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          <motion.div
            initial="hidden"
            animate="show"
            className="flex flex-col items-start max-w-3xl"
          >
            <motion.h1
              custom={0}
              variants={fadeUp}
              className="font-display text-[2.6rem] sm:text-6xl lg:text-[4.2rem] font-bold text-white tracking-tight leading-[1.04]"
              style={{ textWrap: 'balance' }}
            >
              Treino sério,<br />
              resultado no{' '}
              <span className="seg-num seg-lit font-black">placar.</span>
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-base sm:text-lg text-flow-muted max-w-xl leading-relaxed mt-6"
            >
              Musculação completa, avaliação física no padrão da OMS e planos a partir de{' '}
              <strong className="text-white font-semibold seg-num">R$ 63,33/mês</strong>, a dois passos de casa em Vila Santo Antônio.
            </motion.p>

            <motion.div
              custom={2}
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
              custom={3}
              variants={fadeUp}
              className="flex items-center gap-2 mt-7 text-xs text-flow-muted"
            >
              <MapPin className="w-3.5 h-3.5 text-flow-primary shrink-0" />
              <span>{GYM_INFO.address.street} — {GYM_INFO.address.neighborhood}, {GYM_INFO.address.city}</span>
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
};
