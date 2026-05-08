## Goal

Rename two discipline plates in the Arban Pod:

- "Product" → "Product Management"
- "Domain" → "Domain Experts"

## Change

In `src/components/PodMesh.tsx`, update the `disciplines` array:

```ts
const disciplines = [
  "Product Management",  // was "Product"
  "AI Architecture",
  "Data Science",
  "Data Engineering",
  "Domain Experts",      // was "Domain"
];
```

## Notes

The current plate width is `plateW = 132` and label font size is 13px. "Product Management" and "Domain Experts" are longer than the existing labels and may not fit comfortably on a single line at the current plate width. To handle this cleanly, also bump `plateW` to ~168 so the longer labels fit without changing pentagon geometry or font size. If you'd prefer to shrink the font instead or wrap to two lines, say so and I'll adjust.

## Out of scope

Mesh animation, OODA sync, pentagon math, other components.
