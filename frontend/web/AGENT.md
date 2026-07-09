# AGENT.md — portfolio kattsyna (frontend/web)

A React 19 + TypeScript SPA built with Vite 7 and Tailwind CSS v4.
Routing: react-router-dom v7. Animation: motion. Icons: react-icons.

## Project layout — where things go
- `src/components/ui/` — reusable UI primitives: `Button`, `Card`, `ProjectCard`,
  `Form`, `Link`, `Navbar`, `MobileMenu`. **Check here before building any card,
  button, input, or link.**
- `src/components/` — shared layout: `Section`, `Header`, `Footer`, `chat/`.
- `src/pages/<page>/components/` — page-specific sections and content.
- `src/pages/<page>/components/data.tsx` — static content arrays for that page.
- `src/assets/` — images (`.webp`), imported as modules via `@/assets/...`.
- `src/types/` — shared TypeScript types.

## Component conventions
- One component per file; filename = component name in PascalCase `.tsx`.
- Function declarations, default-exported — match the file you're editing
  (`function X() { ... } export default X;` or `export default function X() {}`).
  No `React.FC`, no arrow-const components, no explicit return type.
- Props are a named type `type XProps = {...}` / `interface XProps {...}`,
  destructured in the signature.
- Import with the `@/` alias for src-rooted paths, relative `./Sibling` for
  siblings. Match the extension style of the neighbouring imports.
- **JSX comments are `{/* ... */}` — never `<!-- ... -->` (that is a parse error).**
- Section pattern: `XSection` renders `<Section>` wrapping `<XContent />`;
  the markup lives in `XContent`.

## Reuse before creating
- Do NOT recreate a component that exists in `src/components/ui/`. Import it.
  - `ProjectCard` props: `{ title, src, url, srcActive?, isActive? }` — an image
    link card. It does NOT take `text`/`col`.
  - The title/text/`col` card in `ExpertiseContent` is an inline `<div>` that
    `.map()`s over the `cards` array in `data.tsx` — follow that pattern for
    grids of text cards, adding a `key`.
- Repeated content is data-driven: add to `data.tsx` and map over it, don't
  hardcode repeated elements.

## Styling (Tailwind v4)
- Prefer the project's design tokens over raw palette values:
  text `text-text-primary|secondary|ternary`, surfaces `bg-surface-hero|card`,
  `bg-button-primary`, brand `bg-brand-300|700`; fonts `font-unitea|goorm|stack`;
  widths `max-w-container|prose`. Avoid `bg-blue-400`-style raw colors.
- Responsive prefixes in use: `md: xl: 2xl:`. Use `classnames` /
  `tailwind-merge` for conditional classes (see `Button`).

## Prefer existing libraries
`motion` (animation), `react-icons` (icons), `classnames` + `tailwind-merge`
(class composition), `react-router-dom` (routing), `react-error-boundary`.
Don't add a new dependency when one of these fits.

## Before you finish
Code must pass `npm run lint` and `npm run build` (`tsc -b && vite build`).
Follow Prettier: 2-space indent, single quotes, semicolons. Respect the
react-hooks lint rules.
