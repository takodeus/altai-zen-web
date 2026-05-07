## Two changes, both about coherence

### 1. Restore a clear accent moment on each page

Slate teal (`#4a6b7a` light surface, `#6a8b9a` dark surface) should appear in the same two structural roles on both pages: **the small caps label** and **the ridge divider**. Right now the home page's ridge sits at the wrong width and the Altai page has no ridge in accent at all.

**Home (`src/routes/index.tsx`)** — the ridge is currently the divider but reads weakly because `RidgeRule` uses `vector-effect: non-scaling-stroke` plus `preserveAspectRatio="none"` and stretches across only 50ch. Bump its visual weight:
- Stroke color stays `#6a8b9a` (already accent on dark).
- Increase `strokeWidth` to `1.25` and remove `non-scaling-stroke` so the line gets thicker as it stretches.
- Keep width at `50ch`, height at `32px`.
- The "A coordination layer" label is already in `#6a8b9a` — keep.

**The Altai (`src/routes/the-altai.tsx`)** — currently the printer's-mark ridge is drawn in `var(--foreground)` (deep ink). Switch it to `var(--accent)` slate teal so the accent shows up structurally in the same place. Keep size (96px wide, 28px tall) and 0.8 opacity.

### 2. Restructure /the-altai to mirror home's composition (light palette)

Right now the page reads as a different layout: tiny mark → tiny label → body paragraphs. Home reads as: label → large serif headline → ridge divider → body. Apply the same structural rhythm on /the-altai, just on cool stone instead of deep ink.

New /the-altai structure:

```text
[ small ridge mark in slate teal, top-left ]

THE ALTAI                          ← label-caps, slate teal

The watershed.                     ← large serif headline,
                                     same clamp as home, deep ink

────── ridge divider ──────        ← RidgeRule, slate teal,
                                     50ch wide, 32px tall

The Altai is among the oldest…    ← body paragraphs, unchanged copy
What makes the range significant…
Major river systems originate…
A decision made in the catchment…

This is why we took the name.     ← italic closer, unchanged
```

Specifics:
- Add a new headline: `The watershed.` — `font-serif`, `clamp(3.25rem, 8vw, 5.75rem)`, weight 300, lineHeight 0.98, letter-spacing -0.02em, color `var(--foreground)`. Same exact spec as home's `<h1>`.
- Move the small ridge mark above the label (already there).
- Add a `RidgeRule` divider (slate teal accent, 50ch / 32px) between the headline and the first paragraph — mirroring home.
- Keep the existing label `THE ALTAI` in slate teal.
- Keep all body copy verbatim. Keep the closing italic line.
- Same outer padding (`max(24px, 7vw)`), same `paddingTop: 28vh` as home for vertical anchor consistency. (Currently 20vh — bump to 28vh.)
- Mobile breakpoint: same `@media (max-width: 640px) { padding-top: 22vh; }` rule as home, scoped via a class.

The page now reads as the quiet light-surface companion to the dark home: same skeleton, opposite palette, single recurring motif (the ridge) in three scales — small printer's mark, divider, and (on home) hero divider.

### What's not changing

- No copy edits.
- No new sections, no nav, no animations.
- Home palette stays inverted; /the-altai stays on cool stone.
- Header, footer, fonts, type scale all unchanged.

### Files touched

- `src/components/RidgeRule.tsx` — bump strokeWidth to 1.25, drop `non-scaling-stroke`.
- `src/routes/the-altai.tsx` — recolor mark to accent, add headline + accent divider, bump padding-top, add mobile rule.
- `src/routes/index.tsx` — no change needed unless ridge still reads weak after the RidgeRule tweak; if so, no further edits.

Proceed?