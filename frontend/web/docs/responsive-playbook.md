# Responsive Layout Playbook

A repeatable approach for building/refactoring responsive layouts in this
project (React + TypeScript + Tailwind CSS v4). Distilled from the
`ResultsSection` and `homePage` refactors.

> **One-sentence version:** Tailwind for how it looks, `useMediaQuery` for what
> renders; let flex/grid do the positioning, and never delete a "hack" until you
> know what it was holding up.

---

## Part A — Core lessons (mental model)

**1. Diagnose the _type_ of responsive change before writing any class.**
Ask: _does only the styling change, or does the composition/behavior change too?_
- **Styling only** (size, spacing, type, colors, simple reflow) → **Tailwind
  breakpoints**. This is ~90% of cases.
- **Behavior / component tree changes** (carousel ↔ stack, drag on/off, a whole
  subtree appears/disappears, different interaction model) → **JS breakpoint**
  (`useMediaQuery`) that renders different components.

**2. Pixel-pushing is a symptom, not a solution.**
`pt-80`, `-mt-50`, `translate-y-15`, `top-[75%]`, `-translate-y-1/2` almost
always mean _the layout is fighting itself_. Fix by letting flex/grid position
content naturally:
- `justify-between` / `justify-end` on a sized box instead of top-padding.
- `gap` instead of margins.
- `aspect-square` / `min-h-*` to give a box intrinsic size instead of pushing
  content into it.

**3. Split components only where behavior diverges — never to vary styling.**
Two layouts that share the same tree and interaction model but differ in
spacing/type are **one component with Tailwind classes**, not two files.
(That's why `ResultsSection` became `MobileResults` + _one_ `CarouselResults`,
not Mobile + Tablet + Desktop.)

**4. Separate the "what" from the "how".**
- **Shared, single-sourced:** data, copy strings, assets, the reusable
  card/button primitive.
- **Per-layout:** structure, positioning, spacing, behavior wiring.

When the same data renders in two places (e.g. Results carousel + Expertise
grid), extract _one_ card component and let each caller pass sizing via
`className`.

**5. Don't "clean" positioning that's anchored to background art.**
Before removing a "hack," check _why_ it exists. The Expertise `col-start`
scatter + negative margins align cards onto lines baked into `Block_3.webp`.
Flattening them would break the design. Preserve intent; only swap the
_implementation_ where it's genuinely arbitrary.

**6. Verify every breakpoint by measurement, not by eye.**
Screenshots lie (scaling, stale frames). Trust DOM measurements:
`getBoundingClientRect`, `scrollWidth > clientWidth`, computed styles. Check
mobile / tablet / desktop explicitly — bugs hide at exactly one width (e.g.
`sm:` leaking a carousel into "mobile" at 640px).

**7. Know the tooling gotcha: Tailwind v4 config.**
Tailwind **v4** does **not** auto-load `tailwind.config.ts` — it needs a
`@config` directive, or you define tokens/utilities in CSS via `@theme` /
`@utility`. Otherwise custom classes (`max-w-container`, `scrollbar-hide`, …)
silently compile to nothing. Always confirm a custom class actually renders.

---

## Part B — The repeatable process

### Phase 1 — Analyze (don't touch code yet)
1. List each component's responsibilities. Flag ones mixing layout + behavior +
   content.
2. Map the design into **behavior tiers**, not just widths: "where does the
   _interaction model_ actually change?" That boundary is your only JS
   breakpoint.
3. Audit for symptoms (see cheat sheet). Note which are _bugs_ vs
   _intentional-but-ugly_.
4. Confirm you have **design intent per breakpoint**. If not, adopt "preserve
   current look, verify by screenshot" — don't redesign blind.

### Phase 2 — Decide architecture
5. Draw the target tree: `Section` decides the breakpoint → renders
   behavior-distinct layouts.
6. Decide shared vs per-layout for each piece. Extract shared primitives to a
   common `ui/` location if used by 2+ places.
7. Choose Tailwind vs `useMediaQuery` per rule A/1. Add zero dependencies you
   don't need (a ~20-line `matchMedia` hook beats pulling in MUI).

### Phase 3 — Implement
8. Build shared primitives first (card, hook, content constants).
9. Build each layout; mount behavior hooks (drag, etc.) **only** in the layout
   that uses them.
10. Replace pixel-pushing with flex/grid natural flow as you go.
11. Delete the old component and any dead code you uncovered.

### Phase 4 — Verify
12. `tsc` + `eslint` clean.
13. Load each breakpoint; **measure** (not just screenshot) heading centering,
    overflow, grid columns, no horizontal page scroll.
14. Confirm shared components still work in _every_ place they're used.

---

## Part C — Red-flag cheat sheet

| You see… | It usually means… | Do instead |
|---|---|---|
| `pt-80`, `-mt-50`, `translate-y-*`, `top-[x%]` | fighting the layout | `justify-*` / `gap` / `aspect-*` on a sized box |
| `sm:` classes on a "mobile" design | breakpoint leak (640px isn't mobile if your boundary is 768) | use the breakpoint that matches the _design_ boundary |
| `md:text-5xl xl:text-5xl` | dead/duplicate breakpoint | delete the redundant one |
| `col-start-*` on a flex child | no-op leftover from a grid | remove, or switch container to grid |
| `xl:text-sm` (shrinks then grows) | accidental scale inversion | make the type scale monotonic |
| same data rendered in 2 files | content duplication | one shared component, sizing via props |
| a whole subtree `hidden lg:block` with heavy logic | it still mounts when hidden | gate with `useMediaQuery` so it doesn't mount |
| custom class does nothing | token/util not compiled (v4 config) | define via `@theme` / `@utility`, verify it renders |

---

## Reference: this project's breakpoints

Tailwind defaults (no custom `screens` override): `sm` 640 · `md` 768 · `lg`
1024 · `xl` 1280 · `2xl` 1536.

The Results refactor uses `md` (768) as the mobile↔carousel behavior boundary
(via `useMediaQuery('(min-width: 768px)')`) and `xl` (1280) as the
tablet↔desktop **styling** boundary (Tailwind only).
