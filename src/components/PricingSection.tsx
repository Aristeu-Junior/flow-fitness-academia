import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Phone, ShieldCheck, Users } from 'lucide-react';
import { STANDARD_PLANS, SPECIAL_SERVICES, GYM_INFO } from '../data/fitnessData';

export const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'standard' | 'special'>('standard');
  const [dependentsCount, setDependentsCount] = useState<number>(2);

  const flowFamilyPricePerDependent = 69.9;
  const flowFamilyTotal = (dependentsCount * flowFamilyPricePerDependent).toFixed(2).replace('.', ',');
  const ladderLit = Math.round(((dependentsCount - 2) / (6 - 2)) * 10) + 2;

  return (
    <section id="planos" className="py-20 bg-flow-surface/40 relative border-t border-flow-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="seg-num text-xs font-bold tracking-[0.18em] text-flow-primary uppercase">Planos & Valores</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2" style={{ textWrap: 'balance' }}>
            Escolha o plano ideal para a sua rotina.
          </h2>
          <p className="text-flow-muted mt-3 text-sm sm:text-base">
            Sem fidelidade oculta e com isenção de matrícula garantida a partir do plano trimestral.
          </p>

          {/* Physical two-position toggle */}
          <div className="inline-flex items-center gap-0 mt-8 p-1 rounded-panel panel border border-flow-border">
            {(['standard', 'special'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 rounded-[7px] text-xs sm:text-sm font-bold seg-num tracking-wide transition-colors duration-200 ${
                  activeTab === tab ? 'bg-flow-primary text-flow-bg' : 'text-flow-muted hover:text-white'
                }`}
              >
                {tab === 'standard' ? 'MUSCULAÇÃO' : 'ESPECIAIS & AVALIAÇÃO'}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'standard' && (
            <motion.div
              key="standard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
            >
              {STANDARD_PLANS.map((plan) => {
                const isHighlight = plan.highlighted;
                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-panel p-6 flex flex-col justify-between transition-colors duration-300 ${
                      isHighlight ? 'bg-flow-card border-2 border-flow-primary' : 'panel border border-flow-border hover:border-flow-borderHover'
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-flow-primary text-flow-bg text-[10px] font-black uppercase tracking-wider whitespace-nowrap">
                        {plan.badge}
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mt-1">
                        <h3 className="font-display text-lg font-bold text-white">{plan.name}</h3>
                        {plan.savingBadge && (
                          <span className="text-[10px] seg-num font-bold px-2 py-0.5 rounded bg-flow-primary/15 text-flow-primary border border-flow-primary/30">
                            {plan.savingBadge}
                          </span>
                        )}
                      </div>

                      <div className="mt-5 mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs text-flow-muted font-medium">R$</span>
                          <span className="seg-num seg-lit text-4xl sm:text-5xl font-extrabold tracking-tight">{plan.price}</span>
                          <span className="text-xs text-flow-muted font-medium">{plan.period}</span>
                        </div>
                        {plan.totalPrice && <p className="text-xs font-semibold text-flow-primary mt-1 seg-num">{plan.totalPrice}</p>}
                        <p className="text-[11px] text-flow-muted mt-1 seg-num">{plan.billingText}</p>
                      </div>

                      <div className="py-2.5 px-3 rounded-lg bg-flow-bg/70 border border-flow-border/60 text-[11px] font-medium text-flow-light/80 mb-5">
                        <span className="text-flow-muted">Matrícula: </span>
                        <strong className={plan.enrollmentFee.includes('ISENTA') ? 'text-flow-primary' : 'text-white'}>{plan.enrollmentFee}</strong>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-sm text-flow-light/90">
                            <Check className="w-4 h-4 text-flow-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`${GYM_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(plan.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-[8px] font-bold text-xs uppercase tracking-wider transition-colors duration-200 active:scale-[0.97] ${
                        isHighlight ? 'bg-flow-primary text-flow-bg hover:bg-flow-primaryHover' : 'bg-flow-card border border-flow-border text-white hover:border-flow-primary/40'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span>Escolher {plan.name}</span>
                    </a>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'special' && (
            <motion.div
              key="special"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {SPECIAL_SERVICES.filter((s) => s.id !== 'flow-family').map((service) => (
                  <div key={service.id} className="rounded-panel panel border border-flow-border p-6 flex flex-col justify-between hover:border-flow-borderHover transition-colors">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] seg-num font-bold text-flow-primary uppercase tracking-wider">{service.category}</span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-white font-bold">{service.highlight}</span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-white mt-2">{service.name}</h3>

                      <div className="mt-4 mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs text-flow-muted font-medium">R$</span>
                          <span className="seg-num seg-lit text-3xl sm:text-4xl font-extrabold">{service.price}</span>
                          <span className="text-xs text-flow-muted font-medium">{service.type}</span>
                        </div>
                        <p className="text-xs text-flow-muted mt-2 leading-relaxed">{service.description}</p>
                      </div>

                      <ul className="space-y-2.5 py-4 border-t border-flow-border/60 mb-6">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-flow-light/90">
                            <Check className="w-3.5 h-3.5 text-flow-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`${GYM_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(service.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-[8px] bg-flow-card border border-flow-border text-white hover:bg-flow-primary hover:text-flow-bg font-bold text-xs uppercase tracking-wider transition-colors active:scale-[0.97]"
                    >
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span>Contratar {service.name}</span>
                    </a>
                  </div>
                ))}
              </div>

              <div className="rounded-panel panel border border-flow-primary/30 p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flow-primary/15 border border-flow-primary/30 text-xs font-bold text-flow-primary">
                      <Users className="w-3.5 h-3.5" />
                      <span className="seg-num">SIMULADOR PLANO FAMILIAR</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">Flow Family: saúde e economia para a família</h3>
                    <p className="text-sm text-flow-muted leading-relaxed">
                      1 titular + a partir de 2 dependentes pagam apenas <strong className="text-white">R$ 69,90/mês</strong> por dependente.
                    </p>
                  </div>

                  <div className="lg:col-span-5 p-5 rounded-panel bg-flow-bg/90 border border-flow-border space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-white mb-2">
                        <span>Número de Dependentes:</span>
                        <span className="seg-num seg-lit text-sm">{dependentsCount} pessoas</span>
                      </div>

                      {/* LED ladder standing in for the slider's fill */}
                      <div className="flex items-center gap-[3px] h-4 mb-2.5">
                        {Array.from({ length: 12 }, (_, i) => (
                          <div key={i} className={`flex-1 h-full rounded-[1px] transition-colors ${i < ladderLit ? 'bg-flow-primary' : 'bg-flow-border'}`} />
                        ))}
                      </div>

                      <input
                        type="range"
                        id="flow-family-dependents"
                        min={2}
                        max={6}
                        value={dependentsCount}
                        onChange={(e) => setDependentsCount(Number(e.target.value))}
                        className="w-full h-1.5 bg-flow-surface rounded-lg appearance-none cursor-pointer accent-flow-primary"
                      />
                      <div className="flex justify-between text-[10px] text-flow-muted seg-num mt-1">
                        <span>2 (mín.)</span><span>3</span><span>4</span><span>5</span><span>6+</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-flow-border/70 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-flow-muted block">Investimento mensal total:</span>
                        <span className="seg-num seg-lit text-2xl font-extrabold">
                          R$ {flowFamilyTotal} <span className="text-xs font-normal text-flow-muted">/mês</span>
                        </span>
                      </div>
                      <a
                        href={`${GYM_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(`Olá! Gostaria de cadastrar o Plano Flow Family para 1 Titular + ${dependentsCount} dependentes (R$ 69,90/cada).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-[8px] bg-flow-primary text-flow-bg font-bold text-xs uppercase tracking-wider active:scale-95 shrink-0"
                      >
                        Cadastrar Família
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 p-4 rounded-panel panel border border-flow-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-flow-primary shrink-0" />
            <span className="text-flow-light">
              <strong className="text-white">Transparência total:</strong> sem taxas escondidas de cancelamento ou manutenção anual abusiva.
            </span>
          </div>
          <a href={GYM_INFO.contacts.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-flow-primary hover:underline shrink-0">
            Falar com atendimento agora →
          </a>
        </div>

      </div>
    </section>
  );
};
