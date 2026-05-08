## Font audit

### Currently loaded
- **Cormorant Garamond** (300, 400, 500, 400 italic) — body + display serif
- **Hanken Grotesk** (400, 500) — UI / label sans
- Stack fallbacks reference "Ivar" and "Suisse Intl" but neither is loaded — dead aliases

### Where type lives
- `src/styles.css` — defines `--font-serif`, `--font-sans`, `body` defaults, `.label-caps`, `.font-serif`, `.font-sans`
- `src/routes/index.tsx` — hero (clamp 3.5–6.15rem, weight 360), kicker label-caps, body 1.15rem, closer 1.25–1.65rem, footer 15px serif + 12px sans
- `src/routes/the-doctrine.tsx` and `src/routes/the-work.tsx` — near-identical local `style` constants (eyebrow 11px sans, h1 2.6–4.6rem serif 360, h2 1.6–2.2rem serif 500, body 1.1rem serif, closer 1.25–1.65rem serif)
- `src/routes/the-name.tsx` — h1 3.25–5.75rem serif 300, body inherited, closer 1.25–1.65rem
- `src/components/Header.tsx` — wordmark 15px sans 500, tracking 0.14em
- `src/components/PodMesh.tsx` — 13px sans 600 tracking 0.16em (node labels), 10px sans (annotation)
- `src/components/ui/*` — shadcn defaults (text-sm font-medium / font-semibold). Not used on marketing pages.

### Findings

1. **Weight inconsistency on the hero serif.** Index uses `360`, doctrine/work h1 uses `360`, the-name h1 uses `300`. Three near-identical headlines, three different weights. Cormorant doesn't ship a 360 — browsers synthesize, which thins the strokes inconsistently across OSes.
2. **Font sizes are scattered as raw clamps and pixel values across files.** No scale. Eyebrow appears as both `11px` (doctrine/work) and `0.6rem` (`.label-caps`) and `12px` (footers) and `13px`/`10px` (PodMesh). Five sizes for the same role.
3. **Letter-spacing values for caps drift**: `0.14em` (header), `0.16em` (mesh), `0.18em` (eyebrows/label-caps). Three values for what reads as one role.
4. **Closer paragraph style is duplicated verbatim** in 4 files (`clamp(1.25rem, 2.4vw, 1.65rem)` + `letterSpacing: -0.01em` + serif). Same for h1, h2, body, eyebrow.
5. **Dead font fallbacks.** "Ivar" and "Suisse Intl" are paid fonts not loaded — they never resolve and just bloat the stack string.
6. **Body font-size is fixed at 17px**, doesn't respond to viewport. Long-form on `the-name` reads tight on small screens, loose on ultrawide.
7. **Cormorant 400 italic is loaded but never used** in app code (verified — no `italic`, `<em>`, or `font-style` references in routes). Wasted ~20KB.
8. **Hanken Grotesk is fine as a working choice but is overexposed** — same default Google pairing seen on many startup sites. The brand voice (Altai, doctrine, river/ridge motifs) deserves something with more character at the small caps role where it shows the most.

### Proposed optimization

A two-part change: **(A) consolidate type into a real scale + tokens** so duplication disappears, **(B) one targeted font swap** to lift brand distinctiveness.

#### A. Type tokens + utility classes (in `src/styles.css`)

Add a documented type scale as CSS variables and matching utility classes. Touch only `src/styles.css` plus the four route files + Header + PodMesh to switch their inline styles to the utilities.

```text
Role          Token / class            Size                                Weight   Tracking
display       --type-display / .t-display    clamp(3.25rem, 8vw, 6.15rem)   400      -0.02em
h1 (section)  --type-h1 / .t-h1              clamp(2.6rem, 6.5vw, 4.6rem)   400      -0.02em
h2            --type-h2 / .t-h2              clamp(1.6rem, 3.2vw, 2.2rem)   500      -0.01em
lede / closer --type-lede / .t-lede          clamp(1.25rem, 2.4vw, 1.65rem) 400      -0.01em
body          --type-body / .t-body          clamp(1rem, 0.95rem + 0.2vw, 1.15rem)  400  0
small         --type-small / .t-small        0.9rem                          400      0
eyebrow       --type-eyebrow / .t-eyebrow    0.6875rem (11px)                500      0.18em uppercase sans
wordmark      --type-wordmark / .t-wordmark  0.9375rem (15px)                500      0.18em uppercase sans
```

Decisions baked in:
- Headline weight standardized at **400** (the real Cormorant cut), no synthesized 300/360.
- One eyebrow style replaces five variants. Header wordmark aligns its tracking to 0.18em with the eyebrows so caps look like one family.
- Body becomes fluid (1rem → 1.15rem).
- Drop `italic 400` from the Google Fonts URL until a real use case appears.
- Drop dead "Ivar" / "Suisse Intl" fallback names.

#### B. One font swap (recommendation, not bundled)

Keep Cormorant Garamond for headlines and body — it already carries the editorial voice. Replace **Hanken Grotesk** with one of:

1. **Inter Tight** — closer letterforms, modern, free, very legible at 11px caps. Safe.
2. **National 2 Narrow** (Klim) — paid, but the narrow caps would feel custom against the wide serif. Best brand fit if budget allows.
3. **GT America Mono / JetBrains Mono** — for eyebrow/labels only, leaves Hanken for nothing → drop the sans entirely. Editorial + mono is a strong, distinctive pairing and matches the "doctrine / OODA / pod mesh" technical undertone.

Recommendation: **Option 3 (mono for labels, no neutral sans)** — most differentiated, removes a font family rather than swapping one for another, and reinforces the analytical brand voice. JetBrains Mono is free.

If you'd rather stay neutral, Option 1 is the lowest-risk swap.

### Out of scope
- Color, spacing, layout, animation
- shadcn/ui defaults (not used on marketing pages)
- Any route content changes; only typography style attributes get migrated to the new utilities

### Open questions
1. Font swap appetite: keep Hanken, switch to Inter Tight, or go to a mono for labels (recommended)?
2. OK to standardize headline weight at 400 across all three pages (today: 300 / 360 / 360)?
3. OK to remove the loaded-but-unused Cormorant italic 400?
