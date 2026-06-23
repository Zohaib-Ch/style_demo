import { useEffect, useRef, DependencyList } from 'react';
import gsap from '@/lib/gsap';

/**
 * Custom hook to safely run GSAP animations inside React with automatic context revert.
 * Returns a containerRef to scope selectors.
 */
export function useGsap(
  animationCallback: (context: gsap.Context) => void,
  dependencies: DependencyList = []
) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animationCallback(ctx);
    }, containerRef);
    
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return containerRef;
}
export default useGsap;
