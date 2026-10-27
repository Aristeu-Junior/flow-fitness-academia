import React, { useState } from 'react';
import { X, Mail, Briefcase, Send, CheckCircle2, Copy } from 'lucide-react';
import { GYM_INFO } from '../data/fitnessData';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareersModal: React.FC<CareersModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Instrutor de Musculação');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(GYM_INFO.contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Currículo: ${name || 'Candidato'} - ${role}`);
    const body = encodeURIComponent(`Olá equipe Flow Fitness,\n\nMeu nome é ${name}.\nTenho interesse na vaga de: ${role}.\n\nResumo profissional / Mensagem:\n${message}\n\n(Currículo em anexo)\n\nContato:\n${name}`);
    window.location.href = `mailto:${GYM_INFO.contacts.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-flow-surface border border-flow-border rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-flow-border/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-flow-primary/15 border border-flow-primary/30 flex items-center justify-center text-flow-primary">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                Trabalhe Conosco
              </h3>
              <p className="text-xs text-flow-muted">
                Faça parte da equipe da Flow Fitness Academia
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-flow-card text-flow-muted hover:text-white hover:bg-flow-border transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSendMail} className="py-5 space-y-4 overflow-y-auto pr-1">
          <div className="p-3.5 rounded-2xl bg-flow-bg/80 border border-flow-border/70 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-flow-muted">
              <Mail className="w-4 h-4 text-flow-primary" />
              <span className="font-mono text-white select-all">{GYM_INFO.contacts.email}</span>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-flow-card border border-flow-border text-[11px] font-bold text-flow-primary hover:bg-flow-border transition-colors"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-flow-light">Seu Nome Completo</label>
            <input
              type="text"
              required
              placeholder="Ex: João da Silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-flow-bg border border-flow-border text-white text-xs focus:outline-none focus:border-flow-primary transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-flow-light">Área de Interesse / Cargo</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-flow-bg border border-flow-border text-white text-xs focus:outline-none focus:border-flow-primary transition-colors"
            >
              <option value="Instrutor de Musculação">Instrutor(a) de Musculação / Ed. Física</option>
              <option value="Estagiário de Educação Física">Estagiário(a) de Educação Física</option>
              <option value="Recepção e Atendimento">Recepção & Atendimento ao Aluno</option>
              <option value="Serviços Gerais / Limpeza">Serviços Gerais / Limpeza</option>
              <option value="Outro">Outra Área</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-flow-light">Apresentação / Experiência (Opcional)</label>
            <textarea
              rows={3}
              placeholder="Conte brevemente sobre sua formação, horários disponíveis ou experiência prévia..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-flow-bg border border-flow-border text-white text-xs focus:outline-none focus:border-flow-primary transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-flow-primary text-flow-bg font-bold text-xs uppercase tracking-wider hover:bg-flow-primaryHover transition-all shadow-glow-primary active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Abrir E-mail com Currículo</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
