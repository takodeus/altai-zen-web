## Two-accent system: slate teal (structure) + oxidized copper (emphasis)

The brief's discipline was "one accent, used sparingly." Adding a second color only works if each has a **distinct, non-overlapping job**. Otherwise it's just decoration.

### Roles

- **Slate teal** (structural) — keeps everything it does today: small caps labels, ridge dividers, hairline rule. The cartographic register.
- **Oxidized copper** (emphasis) — appears **once or twice per page maximum**, only on words/marks that earn it. Never on structural elements, never on more than one element in the same eyeline.

If copper ever appears next to teal in the same horizontal band, one of them is wrong.

### Color values

- `--accent` (teal): keep current `#1f7a8c` light / `#4ab8cc` dark.
- `--copper`: `#a87a4a` on light surfaces (cool-stone Altai page).
- `--copper-bright`: `#c69468` on the dark hero — same hue, lifted ~15% for legibility on `#1f2326`.

Both copper values are desaturated and earthy — oxidized, not new-penny. They sit in the same mineral family as the teal: things you'd find in rock, not on a screen.

### Where copper appears

**Home (dark hero) — exactly one use:**
- The word **"Doctrine"** in the headline rendered in `--copper-bright`. Everything else stays parchment. The headline reads: [copper]Doctrine[/] upstream. / Autonomy downstream.
- Reasoning: it's the doctrine that's the upstream act — copper marks the hinge word, not decoration.

**The Altai (light) — exactly one use:**
- The closing italic line **"This is why we took the name."** in `--copper` instead of deep ink. It already sits alone with 4em of breathing room above it; coloring it makes the closer feel like a signature rather than a sentence.

**Footer / header / body / dividers / labels — no copper anywhere.** The accent stays disciplined.

### What it looks like in tokens

```css
:root {
  --accent: #1f7a8c;          /* teal, structural */
  --accent-bright: #4ab8cc;   /* teal on dark */
  --copper: #a87a4a;          /* copper, emphasis, on light */
  --copper-bright: #c69468;   /* copper, emphasis, on dark */
}
```

### Files touched

- `src/styles.css` — add `--copper` and `--copper-bright` tokens.
- `src/routes/index.tsx` — wrap "Doctrine" in a `<span style={{ color: "var(--copper-bright)" }}>`.
- `src/routes/the-altai.tsx` — color the closing italic line `var(--copper)`.

### What's not changing

- Slate teal remains the only structural accent.
- No copper in dividers, labels, hairlines, links, or headers.
- No copper on /the-altai's heading, body, or label.
- No new sections, no copy edits.

### The discipline test

After deploying, walk through both pages. If copper appears more than once per page, or appears anywhere structural, it's overused — pull it back. The rule is: copper marks meaning, teal marks structure. If you can't say in one sentence why a copper element earned the color, it shouldn't be copper.

Proceed?