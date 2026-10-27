import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Eye, X, Camera, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, YOUTUBE_VIDEOS } from '../data/fitnessData';

export const GymExperience: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string>(YOUTUBE_VIDEOS[0].id);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="estrutura" className="py-20 bg-flow-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="seg-num text-xs font-bold tracking-[0.18em] text-flow-primary uppercase">Experiência & Estrutura</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2" style={{ textWrap: 'balance' }}>
              Conheça nosso espaço por dentro.
            </h2>
            <p className="text-flow-muted mt-3 text-sm sm:text-base">
              Ambiente planejado para proporcionar conforto, fluidez de treino e motivação diária.
            </p>
          </div>

          <div className="flex items-center gap-1 panel p-1 rounded-panel border border-flow-border self-start md:self-auto">
            {YOUTUBE_VIDEOS.map((video, idx) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video.id)}
                className={`px-4 py-2 rounded-[7px] text-xs font-bold seg-num transition-colors flex items-center gap-2 ${
                  activeVideo === video.id ? 'bg-flow-primary text-flow-bg' : 'text-flow-muted hover:text-white'
                }`}
              >
                <Play className="w-3 h-3 fill-current" />
                <span>CANAL {idx + 1}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative rounded-panel overflow-hidden panel border border-flow-border mb-12">
          <div className="aspect-video w-full max-h-[520px]">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=0&rel=0&modestbranding=1`}
              title="Tour Flow Fitness Academia"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-4 sm:p-5 border-t border-flow-border/70 flex items-center gap-2 text-xs font-medium text-flow-light">
            <Sparkles className="w-4 h-4 text-flow-primary shrink-0" />
            <span>Vídeo oficial gravado diretamente no salão da Flow Fitness em Ferraz de Vasconcelos</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs seg-num font-bold text-flow-muted uppercase tracking-wider">
              <Camera className="w-4 h-4 text-flow-primary" />
              <span>Galeria de Fotos do Salão</span>
            </div>
            <span className="text-xs text-flow-muted">Clique na imagem para ampliar</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {GALLERY_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setLightboxImg(item.src)}
                className="group relative rounded-panel overflow-hidden panel border border-flow-border aspect-[4/3] cursor-pointer hover:border-flow-primary/40 transition-colors duration-300"
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-flow-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-bold text-white drop-shadow-md seg-num">{item.title}</span>
                    <div className="w-7 h-7 rounded-full bg-flow-primary text-flow-bg flex items-center justify-center">
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-4 flex items-center justify-center"
            onClick={() => setLightboxImg(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] rounded-panel overflow-hidden border border-white/10">
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-flow-primary hover:text-flow-bg transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              <img src={lightboxImg} alt="Foto ampliada da Flow Fitness" className="max-h-[85vh] w-auto object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
