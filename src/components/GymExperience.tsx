import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { YOUTUBE_VIDEOS } from '../data/fitnessData';
import { revealHeader } from '../lib/reveal';

export const GymExperience: React.FC = () => {
  return (
    <section id="estrutura" className="py-20 bg-flow-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div {...revealHeader} className="max-w-2xl mb-12">
          <span className="seg-num text-xs font-bold tracking-[0.18em] text-flow-primary uppercase">Experiência & Estrutura</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2" style={{ textWrap: 'balance' }}>
            Conheça nosso espaço por dentro.
          </h2>
          <p className="text-flow-muted mt-3 text-sm sm:text-base">
            Ambiente planejado para proporcionar conforto, fluidez de treino e motivação diária.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {YOUTUBE_VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-panel overflow-hidden panel border border-flow-border"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-[1.12]"
                  allow="autoplay; encrypted-media"
                  tabIndex={-1}
                />
              </div>
              <div className="p-4 flex items-center gap-2 text-xs font-medium text-flow-light border-t border-flow-border/70">
                <Sparkles className="w-4 h-4 text-flow-primary shrink-0" />
                <span>{video.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
