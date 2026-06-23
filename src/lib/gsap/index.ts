import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins globally in client environment
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Configure default easing and configurations
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  });
}

export * from 'gsap';
export { ScrollTrigger };
export default gsap;
