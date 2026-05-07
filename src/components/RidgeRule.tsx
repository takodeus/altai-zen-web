type RidgeRuleProps = {
  height?: number;
  stroke?: string;
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
        d="M 0 26 L 60 22 L 110 14 L 158 4 L 210 18 L 252 10 L 300 22 L 348 8 L 392 20 L 436 14 L 480 24"
        fill="none"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
