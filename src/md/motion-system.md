# Motion System Guidelines

## Core Principles
1. **Fluidity**: Everything flows from one state to another.
2. **Intentionality**: Animations must not feel like visual clutter. They exist to guide the eye.
3. **Hardware Acceleration**: Only animate layout-neutral properties (`transform`, `opacity`) for smooth 60 FPS performance.

## Stack Usage
- **Lenis**: Global smooth scrolling.
- **GSAP**: Scroll-triggered timelines, complex sequenced animations.
- **Framer Motion**: Micro-interactions, hover states, UI toggles.
