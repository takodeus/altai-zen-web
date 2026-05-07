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
  // Peaks (local minima of y in the path) — where sparkles emit from.
  const peaks: Array<{ x: number; y: number; delay: string }> = [
    { x: 151, y: 3, delay: "0s" },
    { x: 312, y: 6, delay: "1.6s" },
    { x: 389, y: 11, delay: "3.2s" },
    { x: 233, y: 9, delay: "4.8s" },
  ];

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
      {peaks.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={1.2}
          fill={stroke}
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: `ridge-sparkle 6s ease-in-out ${p.delay} infinite`,
            opacity: 0,
          }}
        />
      ))}
      <style>{`
        @keyframes ridge-sparkle {
          0%, 70%, 100% { opacity: 0; transform: scale(0.6); }
          78% { opacity: 1; transform: scale(1.6); }
          86% { opacity: 0.4; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          circle { animation: none !important; opacity: 0 !important; }
        }
      `}</style>
    </svg>
  );
}
