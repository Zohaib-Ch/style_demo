# SEO Guidelines and Metadata Schema

Our SEO framework ensures every route is discoverable, optimized, and rich in semantic content.

## 1. Title Tags and Meta Descriptions

- Every page must define standard Metadata with:
  - Page-specific descriptive title (format: `[Page Name] | Style`)
  - A compelling description under 160 characters.
  - OpenGraph tags for premium social card previews.

## 2. Heading Structure

- Limit each page to exactly one `<h1>`.
- Ensure cascading headings (`<h2>` -> `<h3>` -> `<h4>`) without skipping levels.
- Interactive elements must use descriptive aria-labels where necessary.

## 3. Semantic HTML5 Elements

- Layout structures must follow:
  - `<header>` for navigation systems.
  - `<main>` for core content.
  - `<section>` for logical sections with headers.
  - `<footer>` for footer elements.

## 4. Reusable Metadata Generator

Use the SEO utility at `@/lib/seo/metadata` to generate page configurations dynamically.
