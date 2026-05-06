# Altai Group — Build Plan

A two-page static site. The brief is exhaustive and unambiguous, so this plan executes it literally without additions.

## Pages

- `/` — Home (`src/routes/index.tsx`, replace placeholder)
- `/the-altai` — The Altai (`src/routes/the-altai.tsx`)

## Shared

- `src/components/Header.tsx` — wordmark "ALTAI GROUP" upper-left, links to `/`. Used on both pages.
- `src/components/Footer.tsx` — used only on home.
- `src/routes/__root.tsx` — set `<html lang="en">`, update `head()` meta (title "Altai Group", description matching the subhead). Remove sample meta.

## Design tokens (`src/styles.css`)

Replace existing tokens with the four-value palette:
- `--background: #F7F4ED` (alpine white)
- `--foreground: #2A2D2E` (basalt slate)
- `--accent: #8B5A3C` (oxidized copper)
- `--border: rgba(42,45,46,0.08)` (hairline)

Add font-face declarations for self-hosted Cormorant Garamond and Hanken Grotesk woff2 (Ivar/Suisse Intl are not freely licensed; use the fallbacks specified in the brief). Expose as `--font-serif` and `--font-sans`.

Body defaults: serif, 17px, line-height 1.7, ranged left.
Utility class for tracked small-cap labels (sans, 0.6rem, 0.18em tracking, uppercase).
CSS variable `--entrance-duration: 1.8s` for the hairline draw.

Keyframes: `hairline-draw` scaling X from 0 to 1, transform-origin left, 1.8s ease-out cubic, runs once. Wrap in `@media (prefers-reduced-motion: no-preference)`; otherwise render the line at full width with no animation.

Link transition: 500ms color only. No other hover effects.

## Layout rules

- Page padding: `7vw` sides, min 24px on mobile.
- Body prose max-width: 640px / 50ch as specified per block.
- Vertical rhythm: 12vh between major blocks.

## Home page contents (in order)

1. Fixed transparent header with wordmark.
2. Hero (70vh desktop / 60vh mobile):
   - Top hairline (animated entrance).
   - Headline serif weight 300, `clamp(2.5rem,6vw,4rem)`, two lines: "Doctrine upstream." / "Autonomy downstream."
   - Copper hairline 60×2px, 16px below headline.
   - Subhead sans 1.05rem/1.6, max-width 50ch, 32px below copper hairline: coordination-layer sentence.
3. 12vh gap, then body paragraph (serif, max 50ch): the "hardest problems" sentence.
4. 12vh gap, then footer: top hairline, single centered sans 12px line at 60% opacity: `The Altai · [email protected]`. "The Altai" → `/the-altai` Link, email → `mailto:`. Middle dot separator.

## The Altai page contents

1. Header (wordmark only).
2. 20vh top spacing, then label "THE ALTAI" in copper small-caps tracked.
3. Four serif paragraphs, max 50ch, 1.5em spacing, exact copy from brief.
4. 4em below final paragraph: italic serif line "This is why we took the name."
5. 20vh whitespace. No footer.

## Constraints honored

- Straight quotes only in JSX literals; no em dashes anywhere.
- No images, OG images, analytics, schema, cookie banner, sitemap additions, social links, forms, navigation beyond the wordmark and footer link.
- Semantic HTML (`header`, `main`, `section`, `footer`); visible focus states on the two interactive elements.
- No JS beyond the CSS-driven entrance animation; site works without JS.
- Favicon: simple basalt-slate square SVG in `public/` referenced from `__root.tsx` head links.

## Verification

- Production build completes.
- Visual check at 1440 / 768 / 375.
- Confirm mailto, footer→/the-altai, and wordmark→/ navigation.
- Confirm entrance animation runs once and is suppressed under `prefers-reduced-motion`.

## Out of scope (explicitly not built)

Any page, section, asset, script, or feature not enumerated above.
