import { useEffect, useRef } from 'react';
import gsap from '@/lib/gsap';
import { ScrollTrigger } from '@/lib/gsap';

interface UseCounterOptions {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
}

/**
 * Animates a DOM element's text from 0 to `end` when it enters the viewport.
 * Returns a ref to attach to the element that will display the number.
 */
export function useCounter({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  separator = '',
}: UseCounterOptions) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const obj = { val: 0 };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: end,
          duration,
          ease: 'power2.out',
          onUpdate() {
            const formatted = separator
              ? Math.round(obj.val).toLocaleString()
              : Math.round(obj.val).toString();
            el.textContent = `${prefix}${formatted}${suffix}`;
          },
        });
      },
    });

    return () => trigger.kill();
  }, [end, duration, prefix, suffix, separator]);

  return ref;
}
