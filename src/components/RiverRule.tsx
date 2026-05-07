type RiverRuleProps = {
  height?: number;
  stroke?: string;
  style?: React.CSSProperties;
  preserveAspectRatio?: string;
};

/**
 * A simplified braided river drawn as single 1px lines.
 * Asymmetric three-flow geometry: source enters above center, splits into
 * an upper branch (long, dominant), a middle branch (direct), and a lower
 * branch (peels off later, short). Pairs with RidgeRule as the bottom mark
 * on each page — ridge above (source), river below (propagation).
 */
export function RiverRule({
  height = 32,
  stroke = "var(--accent)",
  style,
  preserveAspectRatio = "none",
}: RiverRuleProps) {
  return (
    <svg
      viewBox="0 0 480 32"
      preserveAspectRatio={preserveAspectRatio}
      aria-hidden="true"
      style={{ width: "100%", height, display: "block", ...style }}
    >
      {/* Source — enters above center */}
      <path
        d="M -20 14 L 55 14"
        fill="none"
        stroke={stroke}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      {/* Upper branch — splits early, runs wide */}
      <path
        d="M 55 14 Q 95 7, 165 5 Q 230 4, 290 7 Q 360 9, 500 8"
        fill="none"
        stroke={stroke}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      {/* Middle branch — splits later, more direct */}
      <path
        d="M 55 14 Q 110 16, 175 17 Q 260 19, 340 17 Q 410 16, 500 18"
        fill="none"
        stroke={stroke}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      {/* Lower branch — peels off the middle later, short run */}
      <path
        d="M 220 18 Q 290 24, 360 26 Q 430 27, 500 26"
        fill="none"
        stroke={stroke}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}
