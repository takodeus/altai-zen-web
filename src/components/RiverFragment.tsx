type RiverFragmentProps = {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
};

/**
 * A two-branch fragment of the RiverRule. Used as the structural
 * pause between sections of substantive pages (Doctrine, Work).
 *
 * Visually it is a small piece of the same braided river that closes
 * each page above the footer — same color (teal/accent), same line
 * weight, but compressed to two branches and roughly 30% column width.
 *
 * The pause marks a structural turn in the argument without competing
 * with the brand's copper signature elements (the hero ridge rule and
 * the closing copper signature line on each page).
 */
export function RiverFragment({
  width = 200,
  height = 24,
  stroke = "var(--accent)",
  strokeWidth = 0.9,
  style,
}: RiverFragmentProps) {
  return (
    <svg
      viewBox="0 0 200 24"
      width={width}
      height={height}
      aria-hidden="true"
      style={{ display: "block", ...style }}
    >
      {/* Upper branch — splits early, drifts lower right */}
      <path
        d="M 0 9 Q 50 4, 110 5 Q 160 6, 200 9"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      {/* Lower branch — peels low, recovers slightly */}
      <path
        d="M 0 15 Q 50 18, 110 17 Q 160 16, 200 18"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
