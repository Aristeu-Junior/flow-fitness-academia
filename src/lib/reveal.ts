/** Shared scroll-reveal variants (fade + slide-up stagger), used across sections. */
export const revealHeader = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export function revealItem(index: number, baseDelay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.45, delay: baseDelay + index * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  };
}
