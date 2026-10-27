import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { FAQS, GYM_INFO } from '../data/fitnessData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFaq = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section id="faq" className="py-20 bg-flow-bg relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="seg-num text-xs font-bold tracking-[0.18em] text-flow-primary uppercase">Tire suas dúvidas</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2" style={{ textWrap: 'balance' }}>
            Perguntas Frequentes
          </h2>
          <p className="text-flow-muted mt-3 text-sm sm:text-base">
            Tudo o que você precisa saber antes de começar seus treinos na Flow Fitness.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-panel border transition-colors duration-200 overflow-hidden ${
                  isOpen ? 'panel border-flow-primary/40' : 'bg-flow-surface/60 border-flow-border hover:border-flow-borderHover'
                }`}
              >
                <button onClick={() => toggleFaq(idx)} className="w-full p-5 sm:p-6 text-left flex items-center gap-4" aria-expanded={isOpen}>
                  <span className="seg-num text-[11px] font-bold text-flow-subtle shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="font-display font-bold text-sm sm:text-base text-white flex-1">{faq.question}</span>
                  <div className={`w-7 h-7 rounded-full bg-flow-card border border-flow-border flex items-center justify-center text-flow-primary shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-flow-primary text-flow-bg border-transparent' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pl-[52px] text-sm text-flow-muted leading-relaxed border-t border-flow-border/40 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-panel panel border border-flow-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-lg bg-flow-primary/15 text-flow-primary flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Ainda tem alguma dúvida?</h4>
              <p className="text-xs text-flow-muted">Nossa equipe responde rápido diretamente no WhatsApp.</p>
            </div>
          </div>
          <a href={GYM_INFO.contacts.whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-[8px] bg-flow-primary text-flow-bg font-bold text-xs uppercase tracking-wider active:scale-95 shrink-0 flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Falar com Instrutor</span>
          </a>
        </div>

      </div>
    </section>
  );
};
