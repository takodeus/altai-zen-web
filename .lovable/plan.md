
## 1. "You / your" audit

Site-wide, second-person pronouns appear in only **two** places. The rest of the copy uses an institutional third-person voice ("the firm", "the institution", "agents", "Altai builds…"). The two outliers break that register.

### Finding A — `src/routes/index.tsx`, hero body (line 92)

> "The systems **your firm** runs on were built to record what is true now."

This is the only second-person address in the entire doctrine/work/origin arc. It reads as advertising voice inside what is otherwise a manifesto.

**Proposed rewrites (pick one direction):**

- **Institutional (matches the rest of the site):**
  > "The systems **a firm** runs on were built to record what is true now."
- **Sharper / more universal:**
  > "**Enterprise systems** were built to record what is true now."
- **Keep the cadence, drop the pronoun:**
  > "The systems **the firm** runs on were built to record what is true now."

Recommendation: option 3. Same rhythm as the original, removes the only "your" on the homepage, mirrors the language used on `/the-doctrine` and `/the-work` ("the firm…", "the institution…").

### Finding B — `src/routes/NotFound.tsx` (line 10)

> "The page **you** are looking for does not exist or has been moved."

Boilerplate 404 copy. Low stakes, but it is the only other "you".

**Proposed rewrite:**
> "This page does not exist, or has moved."

### Result

After both edits, the site contains zero second-person pronouns. The voice becomes uniformly observational/institutional, which is consistent with the doctrine ("Systems forget", "The interpreter has been removed", "Altai builds…"). That uniformity is itself a positioning signal — it says the work is described, not sold.

---

## 2. Body text font assessment

**Current state:** body copy is set in **Cormorant Garamond 400** at `clamp(1rem, 0.95rem + 0.2vw, 1.15rem)` with `line-height: 1.7` (1.75 on `.t-body`).

### What works
- High editorial register, matches the manifesto tone of the doctrine and work pages.
- Pairs cleanly with JetBrains Mono labels (serif body / mono labels is a strong, deliberate pairing).
- Italics carry the closer/CTA lines well — Cormorant's italic has personality.

### What is fragile
- **Cormorant is a display-leaning Garamond revival.** It was drawn for headlines. At 16–18px on screen, especially on Windows ClearType and lower-DPI displays, the thin strokes lose contrast and the counters fill in. It reads beautifully on a Retina Mac, less reliably elsewhere.
- **Long-form readability:** the doctrine and work pages have ~600–900 words of body in a single column at 56ch. Cormorant is workable here, but it is the heaviest reading load on the site and the most demanding face for it.
- **Weight 400 + light background:** on `#edeef0` the contrast holds; on the dark hero (`#1f2326`) at `#edeef0`, hairlines thin further. This is where the face is most at risk.
- **Line-height 1.7–1.75 is correct for this face** — do not reduce it.

---

## 3. Implications of moving to a more modern body font

"More modern" can mean three different things. Each has different consequences.

### Option A — Keep serif, switch to a screen-tuned text serif
Examples: **Source Serif 4**, **Newsreader**, **Literata**, **Fraunces** (text optical size), **EB Garamond** (more conservative, closer to current).

- **Voice:** preserved. Still editorial, still doctrinal.
- **Readability:** materially better at body sizes across OSes. Each of these was drawn for running text on screen.
- **Pairing:** still works with JetBrains Mono labels.
- **Risk:** lowest. The site continues to feel like the same brand, just with body copy that holds up at 16px on a PC.
- **Best fit:** **Source Serif 4** or **Newsreader**. Newsreader has more character (slight wedge serifs, lively italic) and would feel like a small step toward "modern editorial" without breaking the manifesto register. Cormorant could stay for the display headlines if you want to preserve the current hero typography.

### Option B — Move body to a humanist sans, keep serif for display only
Examples: **Inter**, **Söhne** (commercial), **General Sans**, **GT America**, **Geist**.

- **Voice:** shifts from "manifesto" to "tech-forward editorial" or "considered SaaS". Less hushed, more confident-in-product. Closer to Linear, Stripe, Vercel marketing.
- **Readability:** excellent at every size and DPI. Removes the hairline-stroke risk on the dark hero entirely.
- **Pairing problem:** a sans body next to mono labels is much weaker than a serif body next to mono labels. The mono no longer feels like a *deliberate* counterpoint — it feels like an arbitrary choice. You would likely need to drop mono labels back to a sans variant, which means losing the typographic signature established last round.
- **Risk:** medium-high. The brand stops reading as a doctrine and starts reading as a product site. That is a positioning move, not just a font change.

### Option C — Mono for everything (extreme)
Already half-implemented (labels/wordmark are mono).

- **Voice:** "research lab / quant firm / engineering memo". Strong identity, narrow audience.
- **Readability:** mono is poor for paragraph reading at length. Doctrine and work pages would suffer.
- **Risk:** high. Would actively work against the long-form sections.
- Not recommended unless the site is restructured to be much shorter and more list/spec-driven.

### Cross-cutting implications regardless of which option you pick

1. **The italics matter.** Closers (`The doctrine sits upstream of this.`, `The name is the watershed. The work is the inheritance.`) lean on the italic carrying weight. Whatever face replaces or supplements Cormorant must have an italic with character — not an oblique. Newsreader, Fraunces, and Source Serif 4 all qualify. Inter does not.
2. **`fontStyle: "italic"` synthesis.** Currently Cormorant Italic 400 is loaded specifically because four spots use italics. Any replacement must include real italic files, otherwise we trade font modernity for synthesized-italic ugliness — a regression.
3. **Hero treatment.** The hero "Doctrine upstream. / Autonomy downstream." at `clamp(3.25rem, 8vw, 6.15rem)` weight 300 is the most visually distinctive moment on the site. It depends on Cormorant's high contrast and tall ascenders. If you switch body away from Cormorant, **keep Cormorant for `.t-display` / `.t-h1`** (Option A or B both allow this). Replacing the hero face is a separate, larger decision.
4. **Page weight.** Current load: Cormorant 300/400/500 + italic 400 + JetBrains Mono 400/500 ≈ ~5 weights from Google Fonts. Adding a second serif (Newsreader 400/400i/500) adds ~60–80KB. Replacing Cormorant body-only and keeping it for display does not add weight if you also drop Cormorant 400 italic from the load (since the italic moves to the new face).
5. **`--type-body-size` may need to drop.** Cormorant runs visually large for its point size. A switch to Source Serif 4 or Newsreader will read ~5–8% larger at the same px value — you will likely want to reduce the clamp ceiling from `1.15rem` to `1.05–1.08rem`.

---

## Recommendation

1. **Apply both copy edits** (homepage hero + 404). These are independent of the font question and worth doing regardless.
2. **For typography: pursue Option A — Newsreader (or Source Serif 4) for body, keep Cormorant for display headlines, keep JetBrains Mono for labels.** This preserves the editorial voice and the mono-label pairing, fixes the cross-OS body-text fragility, and is reversible.
3. **Defer Option B** unless you want to deliberately reposition the site away from "manifesto" toward "product/marketing". That is a brand decision, not a typography decision.

If you approve, the next step is a small spike: load Newsreader 400/400i/500, swap `.t-body`, `.t-small`, `.t-lede` to use a new `--font-text` variable, lower the body clamp ceiling, drop Cormorant 400 italic from the load, and review on light + dark hero before committing.
