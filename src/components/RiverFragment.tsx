type RiverFragmentProps = {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
};

/**
 * A compressed quotation of the closing RiverRule, used as the structural
 * pause between sections of substantive pages (Doctrine, Work).
 *
 * Geometry mirrors RiverRule's asymmetric three-flow logic at fragment scale:
 * a source stub on the left, a dominant upper branch that runs wide, and a
 * shorter lower branch that peels off late. A small copper dot at the source
 * marks the section pivot and echoes the page's copper hero ridge without
 * competing with it.
 */
export function RiverFragment({
  width = 200,
  height = 24,
  stroke = "var(--accent)",
  strokeWidth = 1.1,
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
      {/* Source stub — short entry on the left */}
      <path
        d="M 0 12 L 22 12"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      {/* Upper branch — splits early, runs wide and dominant */}
      <path
        d="M 22 12 Q 50 6, 95 4 Q 140 3, 200 5"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      {/* Lower branch — peels off the source later, short run */}
      <path
        d="M 80 13 Q 130 17, 200 18"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      {/* Copper source mark — section pivot, echoes the hero ridge */}
      <circle cx={4} cy={12} r={1.8} fill="var(--copper-bright)" />
    </svg>
  );
}
