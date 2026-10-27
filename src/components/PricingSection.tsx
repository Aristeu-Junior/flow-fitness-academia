import React from 'react';
import { motion } from 'motion/react';
import { Check, Phone } from 'lucide-react';
import { STANDARD_PLANS, SPECIAL_SERVICES, GYM_INFO } from '../data/fitnessData';

export const PricingSection: React.FC = () => {
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
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
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-[0.97] ${
                    isHighlight ? 'btn-gradient text-flow-bg hover:brightness-110' : 'bg-flow-card border border-flow-border text-white hover:border-flow-primary/40'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Escolher {plan.name}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Special plans: always visible, no tab */}
        <div className="mt-16">
          <div className="max-w-2xl mb-8">
            <span className="seg-num text-xs font-bold tracking-[0.18em] text-flow-primary uppercase">Condições Especiais</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2" style={{ textWrap: 'balance' }}>
              Avaliação física, plano família e aula avulsa.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SPECIAL_SERVICES.filter((s) => s.id !== 'flow-family').map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-panel panel border border-flow-border p-6 flex flex-col justify-between hover:border-flow-borderHover transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] seg-num font-bold text-flow-primary uppercase tracking-wider">{service.category}</span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-white font-bold">{service.highlight}</span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-white mt-2">{service.name}</h4>

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
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-flow-card border border-flow-border text-white hover:bg-flow-primary hover:text-flow-bg font-bold text-xs uppercase tracking-wider transition-colors active:scale-[0.97]"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Contratar {service.name}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
