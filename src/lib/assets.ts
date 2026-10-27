/**
 * GitHub Pages serves this project under /flow-fitness-academia/, so a hardcoded
 * absolute path like "/images/x.jpg" 404s there. Route every static asset through
 * this helper instead of writing "/images/..." directly.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, '')}`;
}
