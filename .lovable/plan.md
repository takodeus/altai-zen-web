## Reading the reference

The Cherre banner does three things at once:

1. A hand-drawn **mountain silhouette** sits as the visual anchor.
2. A **dissolving network** (dots + lines) emerges from the ridge, encoding the "physical world → data" idea without a word of copy.
3. A deep **gradient field** gives the whole thing atmosphere — dark to slightly darker, never flat.

That's a strong, literal expression of the same metaphor we're already using ("doctrine upstream, autonomy downstream", watershed, Altai). We can borrow the *structural idea* — terrain dissolving into network — without copying the execution (white-line-on-magenta would be off-brand for us).

## What I'd propose for the home page

One single motif, hero-right, sitting opposite the headline. Not a banner, not a background — an editorial illustration.

### The motif

A single SVG, ~480px wide on desktop, ~280px on mobile:

- **Left two-thirds**: a low, wide ridge profile drawn as one continuous 1px line in `var(--foreground)` at ~70% opacity — three peaks, asymmetric, in the spirit of the existing watershed glyph on /the-altai (same hand, larger scale).
- **Right third**: the ridge's terminal slope dissolves into a sparse **network of dots and thin connecting lines** in `var(--accent)` (slate teal). ~25–35 nodes, hand-placed (not algorithmic-looking), connections varying in opacity from 100% near the ridge to 0% at the right edge.
- No fill. No gradient. No shadow. Pure line work.

This keeps the cartographic register: it reads as a survey diagram, not a marketing illustration.

### Layout change

Current hero is single-column, left-aligned. Move to a two-column composition on desktop (≥900px):

```text
┌───────────────────────────────────────────────────────┐
│ ALTAI GROUP                                           │
│                                                       │
│                          ╱╲                           │
│ A COORDINATION LAYER    ╱  ╲    ╱╲       · ·          │
│                        ╱    ╲__╱  ╲___ · · · · ·      │
│ Doctrine upstream.    ╱                 ·  ·  · ·     │
│ Autonomy downstream.                       · ·        │
│ ─────────────────                                     │
│ A coordination layer for…                             │
│                                                       │
│ The hardest problems…                                 │
└───────────────────────────────────────────────────────┘
```

On mobile the motif stacks above the label, scaled down, same line weights.

### Background

Stay on `#edeef0` cool stone. **Do not** add a gradient field — that would push us toward the "premium/cinematic" register the brief explicitly forbids. The reference uses gradient because it's a tech brand; we're a monograph. The motif provides all the visual interest the page needs.

If you want a *whisper* more depth, I'd add a single `radial-gradient` at maybe 4% opacity behind the motif only — barely perceptible, just enough to make the line work feel like it's sitting on paper rather than floating. Optional.

### What I am explicitly *not* proposing

- No photographs, no raster mountain art.
- No magenta, no dark mode, no glow.
- No animation on the motif (the existing entrance hairline stays as-is).
- No motif on /the-altai — that page keeps its single small printer's-mark glyph. The home gets the larger composition; The Altai keeps the editorial punctuation. Two scales of the same visual idea.
- No new copy, no new sections.

### Implementation notes (technical)

- Single inline SVG component in `src/routes/index.tsx`, `aria-hidden="true"`.
- `viewBox` around `0 0 480 200`, `preserveAspectRatio="xMidYMid meet"`.
- Ridge: one `<path>` with `stroke="currentColor"`, `stroke-width="1"`, container at `color: var(--foreground); opacity: 0.7`.
- Network: group of `<circle r="1.5">` and `<line stroke-width="0.6">` in `stroke="var(--accent)"` / `fill="var(--accent)"`, each with its own opacity in the 0.25–1.0 range.
- Hero section becomes `display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 6vw;` above 900px, single column below.

---

Want me to build it as described? Or would you rather see the motif slightly different — e.g. ridge in slate teal and network in foreground, or a denser network, or no two-column layout (motif sits below the headline instead of beside it)?