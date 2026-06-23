# Performance Rules and Architecture Guidelines

This system is built with a **Performance-First Architecture**, aiming for 60 FPS scrolling and interaction speeds across all devices, mobile-first design, and a 100/100 Lighthouse score potential.

## 1. Image Optimization System

- **Use `<Image />` from `next/image`** for all raster graphics.
- **Sizes Attribute**: Always provide a descriptive `sizes` attribute to prevent downloading oversized images on smaller screens:
  ```tsx
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  ```
- **Placeholders**: For premium transitions, use base64 blur placeholders or CSS gradient backgrounds during image load to prevent layout shifts.
- **Aspect Ratio**: Always define specific ratios (`aspect-[16/9]`, `aspect-[4/5]`) to prevent Layout Shift.

## 2. Video Optimization System

- **Hosted Videos**: Keep premium background videos hosted on high-speed CDN or in public assets. Ensure sizes are compressed (< 5MB) using H.264/HEVC double encoding.
- **Lazy Loading**: Do not load videos immediately unless they are above-the-fold and critical. Use `IntersectionObserver` or standard `loading="lazy"` attributes.
- **Muted Autoplay**: Always include `muted playInline autoPlay loop` attributes to ensure browsers allow automatic playback without layout issues.

## 3. Dynamic Imports & Lazy Loading

- Use Next.js `dynamic()` imports for heavy components that are below the fold (e.g. Map components, complex sliders, heavy GSAP features).
- Example:
  ```tsx
  import dynamic from 'next/dynamic';
  const GlobePresence = dynamic(() => import('@/components/sections/global-presence'), {
    loading: () => <div className="h-[500px] animate-pulse bg-muted" />,
    ssr: false
  });
  ```

## 4. Scroll Optimization & Lenis

- Integrations with GSAP ScrollTrigger must call `ScrollTrigger.update()` on Lenis scroll events.
- Avoid heavy computation inside scroll listeners; use debouncing, throttling, or let GSAP handle animations via native hardware-accelerated transforms (translate3d).
- Use `will-change` CSS property sparingly, specifically on elements undergoing complex transformations during scrolling.
