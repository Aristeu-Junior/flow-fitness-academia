---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: []
---

## Scope & visitor mode

Persuade. Landing institucional de 1 página (App.tsx) da Flow Fitness Academia. Visitante decide ir até a academia (aula experimental), WhatsApp é apoio.

## Audience, job, action, proof, constraints

Moradores de Ferraz de Vasconcelos/Vila Santo Antônio pesquisando academia pelo Google antes de visitar. Job: decidir se vale ir até lá. Ação primária: "Agendar aula experimental". Prova: nota 4,8/170 avaliações reais, selo LGBTQ+, fotos/vídeos reais já existentes, preços reais (R$ 63,33–74,90/mês), depoimentos reais (Evelin, Tiago, Luciana). Restrição: não inventar depoimentos/preços; stack fixa (React+TS+Vite+Tailwind v3, motion/react + GSAP).

## Direction contract

**THESIS:** A academia como um placar ao vivo — nota, horário, ocupação e preço lidos como número aceso num painel, nunca como texto decorativo com glow. Recusa o arranjo padrão da categoria (hero dark + headline em gradiente neon + grid de cards genérico), que é literalmente o que o site já era antes.

**OWN-WORLD:** Fundo quase-preto `#0A0D10` como "parede da quadra"; verde de marca `#00F575` reservado para segmentos acesos (números, status, CTA principal) — nunca como gradiente decorativo em texto solto. Bezel metálico escuro (`#1a2420`/`#232b26`) emoldurando blocos de conteúdo como módulos de painel. Tipografia: `JetBrains Mono` (já na stack) para todo número/dado/label — nota, preço, horário, contador — travado em maiúsculas com tracking largo, imitando dígito de sete segmentos; `Syne` (marca, mantida) só em headlines de prosa; `Plus Jakarta Sans` no corpo. Textura de scanline sutil (1-2% opacidade) substitui o glow-everywhere atual.

**STORY:** Visitante abre o site e em 2 segundos vê: está aberta agora, nota 4,8 com 170 avaliações reais, preço de entrada, e empurra pra "Agendar aula experimental". Cada seção seguinte (modalidades, planos, horários, FAQ) continua como módulo de painel — numerado, com dado real em destaque — nunca como card genérico com ícone + texto solto.

**FIRST VIEWPORT:** Nav como fascia de painel (logo mono à esquerda, 4 links em pills escuras, CTA verde sólido à direita). Coluna esquerda (60%): kicker "ABERTO AGORA" com dot aceso, headline prosa+mono misto, subtexto curto, CTA primário "Agendar aula experimental" (sólido, bezel duplo) + secundário ghost "Ver planos". Coluna direita (40%): painel-placar real com 3 números acesos (nota 4,8 / 170 avaliações / horário 06-22) + mini gráfico de barras de pico de movimento (dado real já existe em `fitnessData.ts`) + linha de rodapé do painel com endereço + selo LGBTQ+.

**FORM:** Direção sorteada (índice 7 da lista própria ordenada por ressonância: ficha de treino, mural comunitário, anilha+fita métrica, balança analógica, vestiário numerado, carteirinha laminada, painel de placar). seed:ecfad0ef0a563622. Raise aplicado do challenger "Deck Cassette Futurista" (declinado): toggles/controles travam em estados discretos com feedback visual de clique, e barras de progresso (ocupação, valor de plano) sobem como escada de segmentos em vez de barra plana.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions

- Se StatusTicker (horário de pico) deve virar literalmente o painel-placar do hero ou permanecer seção própria mais abaixo — decidir durante a seção "sections" do build.
- Se CareersModal/ConductPolicyModal herdam a estética de painel ou ficam neutros (provavelmente herdam, a confirmar no finish).
