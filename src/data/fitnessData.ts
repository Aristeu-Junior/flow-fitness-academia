import { asset } from '../lib/assets';

export interface Plan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  billingText: string;
  totalPrice?: string;
  savingBadge?: string;
  highlighted?: boolean;
  features: string[];
  enrollmentFee: string;
  whatsappMessage: string;
}

export interface Modality {
  id: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  icon: string;
  image: string;
}

export interface GymGalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
}

export const GYM_INFO = {
  name: "Flow Fitness Academia",
  slogan: "Deixe seu potencial Fluir",
  shortDescription: "A melhor experiência fitness de Ferraz de Vasconcelos. Treino sério, equipamentos modernos e avaliação física profissional para você alcançar sua melhor versão.",
  address: {
    street: "Rua Guarani, 360",
    neighborhood: "Vila Santo Antônio",
    city: "Ferraz de Vasconcelos",
    state: "SP",
    cep: "08534-140",
    full: "Rua Guarani, 360 - Vila Santo Antônio, Ferraz de Vasconcelos - SP, CEP: 08534-140",
    mapEmbedUrl: "https://maps.google.com/maps?q=Rua+Guarani,+360+-+Vila+Santo+Antonio,+Ferraz+de+Vasconcelos+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed",
    wazeUrl: "https://waze.com/ul?q=Rua+Guarani+360+Ferraz+de+Vasconcelos",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Guarani+360+Ferraz+de+Vasconcelos+SP"
  },
  schedule: {
    weekdays: "Segunda à Sexta: 06h00 às 22h00",
    saturday: "Sábado: 07h00 às 12h00",
    sunday: "Domingo e Feriados: Fechado (ou consulte avisos)",
    detailed: [
      { day: "Segunda-feira", hours: "06:00 - 22:00", peak: "18h às 20h" },
      { day: "Terça-feira", hours: "06:00 - 22:00", peak: "18h às 20h" },
      { day: "Quarta-feira", hours: "06:00 - 22:00", peak: "18h às 20h" },
      { day: "Quinta-feira", hours: "06:00 - 22:00", peak: "18h às 20h" },
      { day: "Sexta-feira", hours: "06:00 - 22:00", peak: "17h às 19h" },
      { day: "Sábado", hours: "07:00 - 12:00", peak: "09h às 11h" },
      { day: "Domingo", hours: "Fechado", peak: "Descanso" }
    ]
  },
  contacts: {
    whatsappUrl: "http://wa.me/message/2MAOGAJA7IXWK1",
    whatsappDisplay: "(11) WhatsApp Oficial",
    email: "flowfitnessacademia@gmail.com",
    instagram: "https://www.instagram.com/flowfitnessacademia/",
    instagramDisplay: "@flowfitnessacademia",
    facebook: "https://www.facebook.com/flowfitnessacademia",
    partner: "Conect Ferraz (conectferraz.com.br)"
  }
};

export const STANDARD_PLANS: Plan[] = [
  {
    id: "mensal",
    name: "Plano Mensal",
    price: "74,90",
    period: "/mês",
    billingText: "Cobrança mensal recorrente",
    enrollmentFee: "R$ 10,00 (1º mês: R$ 84,90)",
    highlighted: false,
    features: [
      "Acesso completo à área de Musculação",
      "Treinos de segunda a sábado",
      "Orientação de professores de salão",
      "Sem fidelidade de longo prazo",
      "App de treino e suporte ao aluno"
    ],
    whatsappMessage: "Olá! Gostaria de me matricular no Plano Mensal da Flow Fitness (R$ 74,90/mês)."
  },
  {
    id: "trimestral",
    name: "Plano Trimestral",
    badge: "Mais Procurado",
    price: "71,00",
    period: "/mês",
    totalPrice: "R$ 213,00 por trimestre",
    billingText: "Renovação a cada 3 meses (90 dias)",
    enrollmentFee: "ISENTA (Economize R$ 10)",
    savingBadge: "Matrícula Grátis",
    highlighted: true,
    features: [
      "Isenção total da taxa de matrícula",
      "Acesso ilimitado de musculação & cardio",
      "Foco e consistência de 90 dias",
      "Acompanhamento e ajuste de ficha",
      "Acesso em todos os horários de funcionamento"
    ],
    whatsappMessage: "Olá! Tenho interesse no Plano Trimestral da Flow Fitness com isenção de matrícula (R$ 213,00 / 90 dias)."
  },
  {
    id: "semestral",
    name: "Plano Semestral",
    badge: "Excelente Custo-Benefício",
    price: "66,66",
    period: "/mês",
    totalPrice: "R$ 400,00 por semestre",
    billingText: "Renovação a cada 6 meses (180 dias)",
    enrollmentFee: "ISENTA",
    savingBadge: "Economia de 11%",
    highlighted: false,
    features: [
      "Isenção total da taxa de matrícula",
      "Acesso completo à musculação",
      "Período ideal para evolução física sólida",
      "Acompanhamento contínuo",
      "Economia garantida mês a mês"
    ],
    whatsappMessage: "Olá! Gostaria de saber mais e contratar o Plano Semestral da Flow Fitness (R$ 400,00 / 180 dias)."
  },
  {
    id: "anual",
    name: "Plano Anual",
    badge: "Melhor Valor",
    price: "63,33",
    period: "/mês",
    totalPrice: "R$ 760,00 por ano",
    billingText: "Renovação a cada 12 meses (365 dias)",
    enrollmentFee: "ISENTA",
    savingBadge: "Economia Máxima",
    highlighted: false,
    features: [
      "Isenção total da taxa de matrícula",
      "Menor valor mensal garantido por 1 ano",
      "Acesso total sem limites",
      "Compromisso anual com seu estilo de vida",
      "Prioridade em campanhas e avaliações"
    ],
    whatsappMessage: "Olá! Quero garantir a melhor condição no Plano Anual da Flow Fitness (R$ 760,00 / 365 dias)."
  }
];

export const SPECIAL_SERVICES = [
  {
    id: "flow-together",
    name: "Flow Together",
    category: "Avaliação Física Especializada",
    price: "60,00",
    type: "Por sessão / avaliação",
    highlight: "Padrão OMS",
    description: "Serviço de avaliação física detalhada realizado por profissional de Educação Física sob os parâmetros de recomendações da OMS (Organização Mundial da Saúde).",
    features: [
      "Análise de composição corporal e medidas",
      "Avaliação postural e funcional",
      "Definição de metas personalizadas",
      "Prescrição sob medida de cargas e treinos",
      "Agendamento flexível diretamente na recepção"
    ],
    whatsappMessage: "Olá! Gostaria de agendar uma avaliação física Flow Together (R$ 60,00) com o profissional de Educação Física."
  },
  {
    id: "flow-family",
    name: "Flow Family",
    category: "Plano Familiar",
    price: "69,90",
    type: "/mês por pessoa",
    highlight: "Treinem Juntos",
    description: "Condição especial para a família: 1 Titular + a partir de 2 dependentes para treinarem juntos com mensalidade reduzida.",
    features: [
      "Válido para Titular + 2 ou mais dependentes",
      "Valor fixo mensal de R$ 69,90 por dependente",
      "Incentivo mútuo e saúde para toda a família",
      "Acesso irrestrito a todos os integrantes cadastrados"
    ],
    whatsappMessage: "Olá! Quero cadastrar minha família no Plano Flow Family (R$ 69,90/mês por dependente)."
  },
  {
    id: "flow-60",
    name: "Flow 60+",
    category: "Melhor Idade",
    price: "64,90",
    type: "/mês",
    highlight: "Saúde & Longevidade",
    description: "Plano especial desenvolvido para alunos com 60 anos ou mais, estimulando mobilidade, ganho de força, equilíbrio e autonomia.",
    features: [
      "Exclusivo para pessoas com 60 anos ou mais",
      "Valor fixo mensal com desconto especial",
      "Supervisão atenta para segurança articular e cardiovascular",
      "Ambiente acolhedor e integrador"
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre o Plano Flow 60+ (R$ 64,90/mês)."
  },
  {
    id: "day-pass",
    name: "Aula Avulsa (Day Pass)",
    category: "Treino Diário",
    price: "14,90",
    type: "por dia",
    highlight: "Treine Hoje",
    description: "Perfeito para visitantes, amigos ou para quem quer conhecer a estrutura antes de fechar um plano mensal.",
    features: [
      "Válido para 1 diária de musculação",
      "Contratado diretamente na recepção da academia",
      "Necessário cadastro e apresentação de documento oficial com foto"
    ],
    whatsappMessage: "Olá! Gostaria de fazer uma aula avulsa (Day Pass) hoje na Flow Fitness."
  }
];

export const MODALITIES: Modality[] = [
  {
    id: "musculacao",
    title: "Musculação & Hipertrofia",
    category: "Força & Estética",
    description: "Equipamentos biomecanicamente calibrados para ativação muscular máxima, ganho de massa magra, força e queima de gordura.",
    benefits: [
      "Aparelhos ergonômicos e pesos livres variados",
      "Treinos personalizados para iniciantes até avançados",
      "Aumento da densidade óssea e postura corporal"
    ],
    icon: "Dumbbell",
    image: asset("images/gallery_1.jpg")
  },
  {
    id: "cardio",
    title: "Cardio & Condicionamento",
    category: "Resistência & Saúde",
    description: "Esteiras, bicicletas e estações aeróbicas para melhorar sua capacidade cardiovascular, queimar calorias e ganhar resistência para o dia a dia.",
    benefits: [
      "Melhora do fôlego e controle da pressão arterial",
      "Ambiente ventilado com música estimulante",
      "Acompanhamento de zonas de frequência cardíaca"
    ],
    icon: "HeartPulse",
    image: asset("images/gallery_real_2.jpg")
  },
  {
    id: "flow-together-mod",
    title: "Flow Together (Avaliação OMS)",
    category: "Ciência do Movimento",
    description: "Avaliação física completa com profissional de Educação Física, fundamentada nas diretrizes internacionais da Organização Mundial da Saúde.",
    benefits: [
      "Percentual de gordura, massa magra e circunferências",
      "Detecção de desbalanços musculares e assimetrias",
      "Relatório claro com metas para o seu treino"
    ],
    icon: "Activity",
    image: asset("images/gallery_1.jpg")
  },
  {
    id: "acompanhamento",
    title: "Acompanhamento & Orientação",
    category: "Suporte Humano",
    description: "Professores presentes no salão para instruir a execução correta dos exercícios, ajustar aparelhos e garantir sua segurança constante.",
    benefits: [
      "Atendimento próximo e humanizado",
      "Orientação contra lesões e sobrecargas",
      "Ambiente motivador sem intimidação"
    ],
    icon: "Users",
    image: asset("images/gallery_real_2.jpg")
  }
];

/**
 * Apenas fotos reais do salão confirmadas (dumbbell rack + foto do perfil Google
 * Business da academia). O restante do pacote original (gallery_2 a gallery_6)
 * eram artes de divulgação/logos de terceiros, não fotos do salão — removidas
 * daqui em 2026-10-27. Ver .impeccable/surfaces/src-app-tsx.md.
 */
export const GALLERY_ITEMS: GymGalleryItem[] = [
  { id: "1", title: "Área de Musculação e Pesos Livres", category: "Musculação", src: asset("images/gallery_1.jpg") },
  { id: "2", title: "Treino Funcional no Salão", category: "Treino", src: asset("images/gallery_real_2.jpg") },
];

export const YOUTUBE_VIDEOS = [
  {
    id: "0SRtS9ybUnM",
    title: "Tour & Treino na Flow Fitness",
    embedUrl: "https://www.youtube.com/embed/0SRtS9ybUnM"
  },
  {
    id: "sj47z8tl5EY",
    title: "Ambiente e Energia Flow Fitness",
    embedUrl: "https://www.youtube.com/embed/sj47z8tl5EY"
  }
];

export const FAQS = [
  {
    question: "Como funciona a taxa de matrícula na Flow Fitness?",
    answer: "A taxa de matrícula é de apenas R$ 10,00 no plano mensal. Nos planos Trimestral, Semestral e Anual, você ganha ISENÇÃO TOTAL da taxa de matrícula!"
  },
  {
    question: "Posso treinar apenas um dia para conhecer a academia?",
    answer: "Sim! Oferecemos a Aula Avulsa (Day Pass) por R$ 14,90. Basta comparecer à recepção com um documento oficial de identificação com foto."
  },
  {
    question: "Como funciona o plano familiar Flow Family?",
    answer: "O plano Flow Family foi feito para estimular parentes a treinarem juntos. É composto por 1 titular + a partir de 2 dependentes, saindo por apenas R$ 69,90 mensais por dependente."
  },
  {
    question: "O que é o serviço Flow Together?",
    answer: "É a nossa avaliação física especializada, realizada por um profissional de Educação Física seguindo rigorosamente os protocolos da OMS (Organização Mundial da Saúde) por apenas R$ 60,00."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos Pix, cartões de crédito, débito e dinheiro na recepção. Para planos trimestrais, semestrais e anuais, consulte opções facilitadas de parcelamento."
  },
  {
    question: "Como envio meu currículo para trabalhar na Flow Fitness?",
    answer: "Estamos sempre em busca de talentos apaixonados por saúde e bem-estar! Você pode enviar seu currículo diretamente para o e-mail: flowfitnessacademia@gmail.com com o assunto 'Currículo - [Sua Área]'."
  }
];

export const CONDUCT_POLICIES = [
  {
    title: "1. Uso de Toalha e Higiene",
    description: "É recomendável o uso de toalha individual durante o treino e a higienização dos aparelhos e colchonetes com o álcool disponibilizado após o uso."
  },
  {
    title: "2. Organização e Guarda de Pesos",
    description: "Após utilizar halteres, anilhas e barras, guarde-os nos seus respectivos suportes para garantir a segurança e fluidez do treino de todos."
  },
  {
    title: "3. Revezamento de Aparelhos",
    description: "Permita o revezamento durante os intervalos de descanso entre séries, promovendo um ambiente colaborativo e respeitoso."
  },
  {
    title: "4. Vestimenta Adequada",
    description: "Obrigatório o uso de tênis apropriado e roupas adequadas para prática de atividade física no salão de musculação."
  },
  {
    title: "5. Respeito Mútuo",
    description: "Mantenha um tom de voz equilibrado, use fones de ouvido para músicas pessoais e respeite todos os alunos, instrutores e colaboradores."
  }
];
