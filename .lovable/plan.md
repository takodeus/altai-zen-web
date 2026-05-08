## Goal

Introduce `--copper` / `--copper-bright` as an accent in the Arban Pod graphic so the visual isn't carried by teal alone. Today, only the small eyebrow ("The Arban Pod") uses copper — everything inside the SVG is teal accent or neutral.

## Where copper could go

Ranked by how much they sharpen the meaning of the diagram, not just decoration:

### A. OODA arc + active phase label (recommended primary)
- Repaint the traveling arc and the *currently lit* phase label in copper.
- Static ring stays neutral; dormant labels stay neutral.
- Why: copper marks "what's happening right now inside the pod." The static structure (mesh, plates, ring) stays in teal/neutral; copper is reserved for the live cursor of attention. This is the cleanest semantic split — teal = network, copper = action.

### B. Mesh peak highlight
- When an edge or plate hits its peak (the brightest moment of the wave), tint it copper instead of brighter teal; it returns to teal at rest.
- Why: makes the lateral mesh visibly "fire" rather than just brighten. Reads as energy moving through the network.
- Risk: with 10 edges + 5 plates already pulsing, additional color shifts can feel busy on a small viewport. Mitigate by using copper only at the very peak (~8–12% of the cycle) and keeping the dormant/decay states teal.

### C. Center dot / pod core
- Add a small filled copper dot at the center of the OODA ring (with a soft glow) representing "the pod" — the thing the five disciplines constitute.
- Why: gives the diagram a focal anchor and a single-glance read of "this is a pod."
- Low-risk, additive, works alongside A or B.

### D. Eyebrow only (status quo)
- Leave the SVG as-is. No change. Listed for completeness; doesn't address the request.

## Recommendation

**A + C together.** This gives copper a clear role (live action + pod core), preserves teal as the structural color (mesh + plates + dormant labels), and avoids the visual noise risk of B. If after seeing it you want more copper presence, add B as a follow-up.

## Technical plan (if A + C approved)

Edit only `src/components/PodMesh.tsx`.

1. **Arc**: change the traveling-arc `<circle>` `stroke` from `var(--accent)` to `var(--copper-bright)`. Static ring stays `var(--border)`.
2. **Active phase label**: in the `pod-label-pulse` keyframe, swap the `fill` peak from `var(--accent)` to `var(--copper-bright)`. Dormant state stays `var(--foreground)` at low opacity.
3. **Pod core dot**: add a small `<circle>` at `(center.x, center.y)` with `r ≈ 6`, `fill="var(--copper-bright)"`, plus a faint outer `circle` (`r ≈ 14`, `fill="var(--copper)"`, low opacity) for a soft glow. Optional gentle 4–6s opacity breath on the glow ring; respects `prefers-reduced-motion`.
4. **No changes** to mesh edges, discipline plates, eyebrow, copy, or layout.

## Out of scope

- Mesh edge/plate colors (kept teal to preserve the structure-vs-action split).
- Ridge sparkles or other components.
- New tokens — uses existing `--copper` / `--copper-bright` from `src/styles.css`.
