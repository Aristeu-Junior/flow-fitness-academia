# Design — Flow Fitness Academia

<!-- impeccable:design-schema 1 -->

## World

**Painel de Placar Luminoso.** A academia lida como um placar de quadra de bairro: nota, horário, ocupação e preço aparecem como número aceso num painel, nunca como texto decorativo com glow solto. Ver direção completa em `.impeccable/surfaces/src-app-tsx.md`.

## Tokens

### Cor (`tailwind.config.js`)

| Token | Valor | Uso |
|---|---|---|
| `flow-bg` | `#080B0E` | fundo base |
| `flow-surface` / `flow-card` | `#10151A` / `#141B22` | superfícies elevadas |
| `flow-border` / `flow-borderHover` | `#212D38` / `#2E3E4D` | bordas de painel |
| `flow-primary` | `#00F575` | segmento aceso — números, status, CTA primário |
| `flow-primaryHover` | `#00D664` | hover do CTA primário |
| `flow-muted` / `flow-subtle` | `#8B9CAE` / `#4B5B6D` | texto secundário / segmento apagado |
| `flow-light` | `#F4F7FA` | texto principal |

### Tipografia

- **Display** (`font-display`): `Syne` — headlines de prosa (H1/H2).
- **Corpo** (`font-sans`): `Plus Jakarta Sans` — parágrafos, texto corrido (fonte de marca incumbente).
- **Placar** (`font-mono` / classe `.seg-num`): `JetBrains Mono` — todo número, label, horário, preço, nav. `font-variant-numeric: tabular-nums`, `letter-spacing: 0.02em`.
- `.seg-lit` — cor `flow-primary` + leve `text-shadow` (1px, nunca glow difuso).

### Superfícies (`src/index.css`)

- `.panel` — módulo de painel: fundo `#0E1411`, borda `#1a2420`, `box-shadow` interno (nunca glow externo), textura scanline via `::before`.
- `.rounded-panel` — raio `10px` (quadrado/técnico, não `rounded-3xl`).
- `bg-scanline` — textura de 1-3px repetida, opacidade baixa, substitui glow em telas cheias (hero, ticker).

### Motion

- `motion/react` para entradas (fade+slide stagger no Hero, reveal on scroll em Modalities/Gallery, altura animada no FAQ accordion, `AnimatePresence` nas tabs de Planos).
- `gsap` + `ScrollTrigger` (`src/lib/gsap.ts`, `src/hooks/useCountUp.ts`) para contagem de números (nota, avaliações) e stagger das barras de "pico de movimento" quando entram na viewport.
- `animate-seg-flicker` (keyframe Tailwind) — flicker sutil de LED nos números do painel do Hero.

## Componentes

Todos os componentes de `src/components/` foram reconstruídos nesse sistema (Hero, Navbar, StatusTicker, Modalities, PricingSection, GymExperience, ScheduleAndLocation, FaqSection, Footer). Modals (`CareersModal`, `ConductPolicyModal`) e `FloatingWhatsApp` ainda estão no sistema visual anterior — herdar o painel é uma decisão em aberto (ver `.impeccable/surfaces/src-app-tsx.md` → Unresolved decisions).

## Conteúdo real — gap conhecido

`src/data/fitnessData.ts` → `GALLERY_ITEMS` e `MODALITIES` usam apenas 2 fotos reais confirmadas do salão (`gallery_1.jpg`, `gallery_real_2.jpg`, baixada do perfil Google Business da academia em 2026-10-27). As demais imagens originais do pacote (`gallery_2/3/4/5/6.jpg`) eram artes de divulgação/logos de terceiros — removidas do grid. Pendente: mais fotos reais do dono para enriquecer a galeria e cobrir as 4 modalidades sem repetir as mesmas 2 fotos.

## Finish

Revisão de craft (contraste, glow, tipografia, responsivo) feita inline nesta sessão via `impeccable detect` + inspeção visual desktop (1440) e mobile (390) com Playwright — sem os subagentes `impeccable-finish-reviewer`/`impeccable-documenter` (não disponíveis neste harness). Considerar uma segunda passada com esses agentes se/quando disponíveis.
