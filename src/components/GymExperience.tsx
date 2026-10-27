import React, { useState } from 'react';
import { Play, Sparkles } from 'lucide-react';
import { YOUTUBE_VIDEOS } from '../data/fitnessData';

export const GymExperience: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string>(YOUTUBE_VIDEOS[0].id);

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

        <div className="relative rounded-panel overflow-hidden panel border border-flow-border">
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

      </div>
    </section>
  );
};
