## What's there now

`RiverFragment` (`src/components/RiverFragment.tsx`) is the section divider used between blocks on `/the-doctrine` and `/the-work`. It draws two near-parallel teal curves (~200×24px), both 0.9px stroke weight, both gently undulating left → right with similar arc directions.

**Why it underwhelms today:**
- The two curves run almost parallel and almost the same length, so the mark reads as a generic squiggle rather than as a deliberate brand element.
- It uses no copper, so it has no visual link to the hero `RidgeRule` (copper) or the brand identity.
- Stroke weight (0.9) is so light it nearly disappears at standard zoom and on the dark theme.
- It doesn't echo the asymmetric three-flow logic of `RiverRule` (the closing mark on every page) — it feels like an unrelated motif rather than a compressed quotation of the river.
- It sits dead-centered with no anchor mark, so its role as a "turn" is purely decorative.

## Five directions to consider

Ranked roughly by ambition. Pick one (or layered combinations).

### 1. "Quotation of the river" (recommended — minimal, principled)
Make the fragment a true compressed quote of the closing `RiverRule`: same three-flow asymmetry, same proportions, just shorter. Upper branch dominant and long, middle branch direct, lower branch peels off late and short. Same teal, same 0.9 stroke. Adds a tiny copper dot at the source point (left edge) as a "section pivot" marker — echoes the copper hero rule without competing.

- Pros: cheapest change; ties divider to the page-close mark and the brand's copper signature; reinforces the river-as-propagation metaphor instead of being decoration.
- Cons: subtle; the change reads as "more intentional" rather than dramatically different.

### 2. Asymmetric counter-flow
Keep two branches, but reverse one: upper flows left → right, lower flows right → left (drawn with a subtle taper so direction reads). Suggests two streams meeting at the section turn.

- Pros: communicates "two threads of the argument converging here," which fits a section break.
- Cons: requires gradient or taper to make direction legible, more SVG complexity.

### 3. Centered confluence mark
Two short curves that converge into a single point at the horizontal center, then diverge back out — visually a braided "knot" or pinch. Optional small copper diamond/dot at the pinch point.

- Pros: most graphically distinctive; gives the divider a clear focal point.
- Cons: more decorative; risks competing with the hero ridge.

### 4. Single river line + copper tick
One teal curve (the river), with a single short copper tick mark crossing it at the left third — like a survey mark on a map. Most editorial.

- Pros: strong editorial restraint; very on-brand for a topographic identity system.
- Cons: biggest visual departure; loses the "two-branch" quality that ties to RiverFragment's current role.

### 5. Status quo + weight bump only
Just bump stroke from 0.9 → 1.4 and lengthen one branch ~15% so the asymmetry reads. No copper, no shape change.

- Pros: zero risk.
- Cons: doesn't address the core "feels generic" problem.

## Recommendation

**Direction 1 ("quotation of the river") with a copper source dot.** It's the smallest change that actually fixes the underlying issues: it ties the divider to the page-closing river, introduces a controlled sliver of copper that connects to the hero ridge, and makes the asymmetry intentional. If after seeing it you want more presence, layer in Direction 2's counter-flow on top.

If you want a bolder, more graphic divider (option 3 or 4), say which and I'll plan that instead.

## Technical sketch (Direction 1)

Edit only `src/components/RiverFragment.tsx`. No new tokens, no usage-site changes.

1. Replace the two near-parallel paths with three paths derived from `RiverRule`'s geometry, scaled to the fragment's 200-wide viewBox:
   - **Source stub** (`M 0 12 L 22 12`) — short entry on the left.
   - **Upper branch** — long, wide arc from `(22,12)` drifting up to ~y=4 then settling at the right edge around y=5.
   - **Lower branch** — peels off the source later (~x=80), short, drops to y=18.
   - (Skip the middle branch — two visible branches keeps the fragment compact and readable at small size.)
2. Add a small copper dot at the source point: `<circle cx={4} cy={12} r={1.6} fill="var(--copper-bright)" />`.
3. Bump default `strokeWidth` from 0.9 → 1.1 for slightly more presence without losing the editorial feel.
4. Keep all existing props (`width`, `height`, `stroke`, `strokeWidth`, `style`) and defaults so the four call sites in `the-doctrine.tsx` and `the-work.tsx` need no changes.
5. `aria-hidden="true"` stays.

## Out of scope

- `RiverRule` (closing mark on every page) and `RidgeRule` (hero mark) stay untouched.
- No changes to spacing, alignment, or the routes that render the fragment.
- No new color tokens.
