# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React 18 + TypeScript 5.x + Vite 6 + Tailwind CSS v3 (existing codebase; keep). Adding `motion` (motion/react) for simple animations and GSAP for complex ones, per owner's standing convention across projects.

## Users

Moradores de Ferraz de Vasconcelos - SP e bairros próximos (Vila Santo Antônio e entorno) buscando academia de musculação/cardio. Perfil amplo: iniciantes, alunos de meia-idade, público 60+ (plano dedicado), famílias (plano Flow Family), comunidade LGBTQ+ (local explicitamente acolhedor, selo do Google). Decisão de compra é local e sensível a preço/proximidade — pesquisam no Google Maps antes de visitar.

## Product Purpose

Site institucional/comercial de venda (o dono está desenvolvendo para vender à academia) cuja função é converter visitante em visita presencial / aula experimental na Flow Fitness Academia. WhatsApp é canal de apoio (agendamento, dúvidas), não o CTA primário — a meta final é o pé na academia.

## Positioning

Academia de bairro com avaliação 4,8/170 no Google, preço de entrada baixo (a partir de R$ 63,33–74,90/mês conforme plano), avaliação física seguindo protocolo da OMS (serviço "Flow Together") como diferencial técnico incomum para academia de bairro, plano familiar (Flow Family) e plano 60+, e ambiente explicitamente acolhedor para a comunidade LGBTQ+. Não compete por equipamento premium/boutique — compete por acolhimento, preço justo e proximidade.

## Operating Context

Negócio físico real: Rua Guarani, 360 - Vila Santo Antônio, Ferraz de Vasconcelos - SP, 08534-140. Horário: Seg-Sex 06h-22h, Sáb 07h-12h, Dom fechado. Telefone (11) 91233-7377. Site será usado tanto por alunos em potencial quanto pelo próprio dono da academia ao decidir comprar o site do desenvolvedor (Aristeu) — ou seja, a entrega também precisa impressionar o comprador do serviço, não só o usuário final.

## Capabilities and Constraints

- Dados reais confirmados via Google Maps: nota 4,8 (170 avaliações), selo "Empresa que acolhe a comunidade LGBTQ+", endereço e telefone acima.
- Fotos reais já existentes em `public/images/` (gallery_1 a gallery_6, logo_or_hero_1) — usar, não inventar novas fotos de pessoas/interior.
- Vídeos reais no YouTube já linkados em `fitnessData.ts` (YOUTUBE_VIDEOS).
- Planos e preços em `fitnessData.ts` (STANDARD_PLANS, SPECIAL_SERVICES) são reais e não podem ser alterados sem confirmação do dono.
- Não inventar depoimentos novos — usar os reais do Google (Evelin Silva, Tiago Silva, Luciana Valieri) ou omitir até termos mais.
- Contato WhatsApp: `http://wa.me/message/2MAOGAJA7IXWK1` (já configurado, manter).

## Brand Commitments

- Nome: Flow Fitness Academia. Slogan existente: "Deixe seu potencial Fluir".
- Paleta: dark theme, verde `#00F575` (flow-primary) como cor de marca — manter.
- Tipografia display: "Syne" — manter como commitment de marca, mas liberdade para repensar uso/escala.

## Evidence on Hand

- Avaliação Google: 4,8 estrelas, 170 avaliações.
- 3 depoimentos reais coletados (ver acima).
- Selo de inclusão LGBTQ+ do Google Maps.
- Fotos e vídeos reais já no repositório (ver Capabilities).
- Concorrência local direta (Google "lugares também pesquisados"): Fit Way Gym (4,8), Leal Fitness (4,7), Academia Strong (4,7), Hop Academia (4,8), Zo Fitness (4,4) — todas no mesmo padrão de nota alta, então nota isolada não diferencia; diferencial real é OMS + família + 60+ + acolhimento.

## Product Principles

1. Prova social real (nota 4,8/170, depoimentos reais, selo LGBTQ+) pesa mais que promessa genérica de "academia completa".
2. CTA final é visita/aula experimental — WhatsApp é meio, não fim; linguagem deve convidar a ir até o local, não só "fale com a gente".
3. Dados e preços são factuais e fixos — qualquer componente novo deve consumir `fitnessData.ts`, nunca reescrever valores.
4. Site serve dois públicos ao mesmo tempo: aluno em potencial (decide visitar) e o proprietário da academia (decide comprar o site do dev) — o acabamento visual é parte do argumento de venda.

## Accessibility & Inclusion

Nenhum requisito de acessibilidade específico foi levantado pelo dono ainda; seguir padrão WCAG AA razoável por padrão (contraste, foco visível, alt text) dado que o tema é dark com texto verde sobre fundo escuro.
