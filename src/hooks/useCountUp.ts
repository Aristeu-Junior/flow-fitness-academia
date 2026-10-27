import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

interface UseCountUpOptions {
  end: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

/** Animates a number from 0 to `end` once the element scrolls into view, as a lit scoreboard digit flipping up. */
export function useCountUp<T extends HTMLElement>({ end, decimals = 0, duration = 1.4, prefix = '', suffix = '' }: UseCountUpOptions) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: end,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [end, decimals, duration, prefix, suffix]);

  return ref;
}

export function useScrollReveal<T extends HTMLElement>(selector = '[data-reveal]') {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll(selector);
    if (!targets.length) return;

    const tweens = gsap.utils.toArray(targets).map((target, i) =>
      gsap.fromTo(
        target as Element,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: target as Element,
            start: 'top 88%',
            once: true,
          },
        }
      )
    );

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, [selector]);

  return ref;
}

export { ScrollTrigger };
