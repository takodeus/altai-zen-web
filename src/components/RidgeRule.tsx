type RidgeRuleProps = {
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
  preserveAspectRatio?: string;
};

/**
 * A simplified mountain ridge drawn as a single 1px line.
 * Used as a divider under the home hero headline and as a small
 * printer's mark above the title on /the-altai.
 */
export function RidgeRule({
  height = 32,
  stroke = "var(--accent)",
  strokeWidth = 0.9,
  style,
  preserveAspectRatio = "none",
}: RidgeRuleProps) {
  return (
    <svg
      viewBox="0 0 480 32"
      preserveAspectRatio={preserveAspectRatio}
      aria-hidden="true"
      style={{ width: "100%", height, display: "block", ...style }}
    >
      <path
        d="M -20 25 L 38 21 L 92 11 L 151 3 L 198 19 L 233 9 L 271 23 L 312 6 L 347 17 L 389 11 L 428 22 L 470 15 L 520 27"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
