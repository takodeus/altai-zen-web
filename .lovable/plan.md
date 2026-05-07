## Diagnosis

The page isn't boring because it's minimal — it's boring because the elements are *floating*. The headline sits in the vertical middle of a tall section with nothing anchoring it. The body paragraph below is detached. The accent rule is a thin tick that doesn't carry weight. Nothing establishes a relationship between the elements.

The fix is not "add more content." It's typographic presence and structural anchoring.

## Proposed changes (home page)

1. **Headline weight & size**
   - Bump `font-size` from `clamp(2.5rem, 6vw, 4rem)` → `clamp(3.25rem, 8vw, 5.75rem)`.
   - Tighten `line-height` from `1.1` → `0.98`.
   - Tighten `letter-spacing` to `-0.02em`.
   - Result: the title actually fills its column and reads as a statement, not a caption.

2. **Anchor the hero to the top, not the middle**
   - Remove `justifyContent: center` and the `70vh` min-height. Replace with a fixed top offset (`paddingTop: 28vh`) so the title sits at a deliberate position relative to the wordmark — like a title page, not a vertically-centered slide.

3. **Promote the second paragraph into the hero**
   - Pull the "hardest problems in enterprise AI…" paragraph up directly under the subhead, separated by a single hairline rule rather than `12vh` of empty space. Treat the page as one composition, not two stacked sections with a void between them.
   - Set this paragraph in serif (not sans), slightly larger (`1.15rem`), so it reads as continuous editorial body rather than a stranded note.

4. **Stronger accent rule**
   - The 60×2px copper tick becomes a 1px full-column rule (matching the body column width, ~50ch) in `--accent` at full opacity. Same idea, more presence — it sits *under* the headline like a printed rule, not floating beside it.

5. **Typographic detail**
   - Wordmark in the header: bump to `15px`, increase letter-spacing to `0.14em`, set in sans (Hanken Grotesk) caps. Currently it's serif and almost invisible — making it a true wordmark gives the page an upper anchor.
   - Add a tiny sans label `EST. ——` or `A COORDINATION LAYER` above the headline in `label-caps` slate teal. One small piece of metadata gives the headline something to push off of.

6. **Footer**
   - Add the hairline tighter to the footer text (`marginBottom: 12px` not `24px`) and reduce `marginTop` from `12vh` → `8vh`. Pull it back into the composition.

## What I am *not* proposing

- No imagery, no gradients, no animations beyond the existing entrance hairline.
- No new sections, no nav, no CTA.
- No color additions — accent stays slate teal, palette unchanged.
- The Altai page stays as-is (it already has the glyph as its anchor).

## Optional, if you want one more degree of presence

Replace the current top-of-hero hairline with a pair of thin rules framing the headline — one above, one below — like a printed title block. Increases structural weight without adding content.

---

Want me to apply all of the above, or pick a subset?
