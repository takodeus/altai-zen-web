import { useEffect, useRef, useState } from "react";

/**
 * A five-node lateral mesh visualizing the Arban Pod.
 *
 * Adapted from the Takodeus MongolMesh. Five disciplines, every node
 * connected to every other, no hierarchy. Random nodes light briefly,
 * edges pulse. Beneath the mesh, a band names the loop the unit runs.
 *
 * Honors prefers-reduced-motion.
 */
export function PodMesh() {
  const nodes = [
    "Domain",
    "Data Engineering",
    "Data Science",
    "AI Architecture",
    "Product",
  ];

  // Layout: 2-3 staggered grid, centered. Top row: 2 nodes. Bottom row: 3 nodes.
  // Each node gets an explicit (x, y) so we control the visual rhythm.
  const cellW = 140;
  const cellH = 44;
  const padX = 18;
  const padY = 22;
  // Row widths
  const topRowW = 2 * cellW + 1 * padX;
  const bottomRowW = 3 * cellW + 2 * padX;
  const w = bottomRowW;
  const topOffset = (bottomRowW - topRowW) / 2;
  const positions = [
    // Top row: Domain, Product (2 nodes — the "outward-facing" disciplines)
    { x: topOffset, y: 0, label: nodes[0] },
    { x: topOffset + cellW + padX, y: 0, label: nodes[4] },
    // Bottom row: Data Engineering, Data Science, AI Architecture
    { x: 0, y: cellH + padY, label: nodes[1] },
    { x: cellW + padX, y: cellH + padY, label: nodes[2] },
    { x: 2 * (cellW + padX), y: cellH + padY, label: nodes[3] },
  ];
  const h = 2 * cellH + padY;

  const cx = (i: number) => positions[i].x + cellW / 2;
  const cy = (i: number) => positions[i].y + cellH / 2;

  // Every node connects to every other node — full mesh.
  const connections: Array<[number, number]> = [];
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      connections.push([i, j]);
    }
  }

  const edgeMeta = useRef(
    connections.map(() => ({
      duration: 1.8 + Math.random() * 1.4,
      delay: Math.random() * 2,
    })),
  );

  const [active, setActive] = useState<number[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      const n = Math.floor(Math.random() * positions.length);
      setActive((prev) => [n, ...prev].slice(0, 2));
      setTimeout(
        () => setActive((prev) => prev.filter((x) => x !== n)),
        650,
      );
    }, 1100);
    return () => clearInterval(id);
  }, [positions.length]);

  return (
    <div
      style={{
        border: "1px solid var(--border)",
        background: "var(--background)",
        padding: "1.6em 1.4em 1.4em",
        maxWidth: "640px",
        width: "100%",
      }}
    >
      <div
        className="font-sans"
        style={{
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--copper-bright)",
          marginBottom: "1.4em",
        }}
      >
        The Arban Pod
      </div>

      <div
        style={{
          position: "relative",
          width: w,
          height: h,
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            overflow: "visible",
          }}
          viewBox={`0 0 ${w} ${h}`}
          fill="none"
          aria-hidden="true"
        >
          {connections.map(([a, b], k) => {
            const lit = active.includes(a) || active.includes(b);
            const meta = edgeMeta.current[k];
            return (
              <line
                key={k}
                x1={cx(a)}
                y1={cy(a)}
                x2={cx(b)}
                y2={cy(b)}
                stroke="var(--accent)"
                strokeWidth={lit ? 1 : 0.6}
                strokeDasharray="2 3"
                style={{
                  opacity: lit ? 0.85 : 0.3,
                  transition: "opacity 280ms ease, stroke-width 280ms ease",
                  animation: `pod-edge-pulse ${meta.duration}s ease-in-out ${meta.delay}s infinite`,
                }}
              />
            );
          })}
        </svg>

        {positions.map((p, i) => {
          const isActive = active.includes(i);
          return (
            <div
              key={p.label}
              style={{
                position: "absolute",
                left: p.x,
                top: p.y,
                width: cellW,
                height: cellH,
                border: `1px solid ${isActive ? "var(--accent)" : "var(--border)"}`,
                background: isActive
                  ? "rgba(31, 122, 140, 0.04)"
                  : "var(--background)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: isActive
                  ? "0 0 12px 1px rgba(31, 122, 140, 0.18)"
                  : "0 0 0 0 transparent",
                transition: "border-color 320ms ease, background 320ms ease, box-shadow 320ms ease",
              }}
            >
              <span
                className="font-sans"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.04em",
                  color: "var(--foreground)",
                  fontWeight: 500,
                }}
              >
                {p.label}
              </span>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "1.6em",
          border: "1px solid var(--copper-bright)",
          padding: "0.6em 0.9em",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(110deg, rgba(198,148,104,0.04) 0%, rgba(198,148,104,0.18) 50%, rgba(198,148,104,0.04) 100%)",
          backgroundSize: "220% 100%",
          animation: "pod-band-sheen 6s ease-in-out infinite",
        }}
      >
        <span
          className="font-sans"
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--copper-bright)",
          }}
        >
          OODA loop
        </span>
      </div>

      <p
        className="font-serif"
        style={{
          marginTop: "1.6em",
          marginBottom: 0,
          fontSize: "0.95rem",
          lineHeight: 1.7,
          color: "var(--foreground)",
          opacity: 0.85,
        }}
      >
        Five disciplines, one unit. Authority is constituted at the pod. The
        loop runs continuously, inside the unit, against the firm's context.
      </p>

      <style>{`
        @keyframes pod-edge-pulse {
          0%, 100% { opacity: 0.18; }
          50% { opacity: 0.5; }
        }
        @keyframes pod-band-sheen {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @media (prefers-reduced-motion: reduce) {
          line { animation: none !important; }
          [style*="pod-band-sheen"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
