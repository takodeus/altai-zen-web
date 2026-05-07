Combined execution of all pending changes:

## 1. Header → "The Altai Group", links home

`src/components/Header.tsx`: change wordmark text from `Altai Group` to `The Altai Group`. Already wrapped in `<Link to="/">`, so it returns home from any route.

Also update `<title>` / `og:title` on `src/routes/index.tsx` to `The Altai Group`.

## 2. Replace the straight rule with a mountain-ridge divider

On the home hero, the 1px slate-teal `<div>` rule sitting under the headline becomes a small inline SVG ridge:

- One continuous 1px stroke in `var(--accent)`, full opacity.
- Three asymmetric peaks, shallow, drawn in the same hand as the /the-altai glyph but stretched horizontally.
- ~32px tall, `width: 100%; max-width: 50ch` matching the body column.
- `preserveAspectRatio="none"` so it stretches like a rule.
- No fill, no nodes, no animation, `aria-hidden="true"`.

## 3. Remove the right-column network motif

Delete the `RidgeNetwork` component and `.hero-grid` / `.hero-motif` CSS from `src/routes/index.tsx`. Hero returns to single-column, left-aligned. The ridge now lives only as the divider.

## 4. Repeat the ridge on /the-altai

Extract the ridge into `src/components/RidgeRule.tsx` (shared). Use it in two places:

- `src/routes/index.tsx` — as the divider under the headline (max-width 50ch, ~32px tall).
- `src/routes/the-altai.tsx` — replace the existing 72×40 three-stroke watershed glyph above the "THE ALTAI" label with the same `RidgeRule`, sized small (width ~96px, height ~28px) so it still reads as a printer's mark, not a horizon line. Same drawing, two scales.

## 5. Color-differentiate the home hero

Wrap the home hero in a full-bleed inverted band — the only place on the site that flips palette.

- Band background: `#1f2326` (deep ink), text: `#edeef0` (cool stone).
- Accent stays `#4a6b7a` slate teal — reads on both surfaces; bumped slightly to `#6a8b9a` for the ridge stroke inside the dark band so it remains visible.
- Band extends edge-to-edge via negative horizontal margin, with matching inner padding to restore gutters.
- Footer stays on the normal cool-stone surface, outside the band.
- Header sits over the dark band on home only. Add a `theme?: "dark" | "light"` prop to `Header`; home passes `"dark"` and the wordmark renders in `#edeef0`. Default stays current behavior so /the-altai is unchanged.

## Files touched

- `src/components/Header.tsx` — text + theme prop.
- `src/components/RidgeRule.tsx` — new shared SVG.
- `src/routes/index.tsx` — meta title, remove network/grid, add ridge divider, wrap hero in inverted band, pass `theme="dark"` to Header.
- `src/routes/the-altai.tsx` — swap glyph for small `RidgeRule`.

Nothing else changes (copy, footer, type, /the-altai body all preserved).