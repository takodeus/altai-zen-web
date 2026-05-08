import { useEffect, useState } from "react";

/**
 * The Arban Pod.
 *
 * Five disciplines form a peer mesh; the OODA loop runs continuously inside.
 * A traveling arc sweeps clockwise around an inner ring; each phase label is
 * dormant until the arc's leading edge reaches it, at which point the label
 * pulses to full accent and decays back to dormant.
 *
 * Honors prefers-reduced-motion: arc and pulse freeze, all phase labels
 * remain at full accent so the structure reads as a static diagram.
 */
export function PodMesh() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // Pentagon vertices at radius 240 from center (400, 310).
  // Vertex 0: top, 1: upper right, 2: lower right, 3: lower left, 4: upper left.
  const center = { x: 400, y: 310 };
  const radius = 240;
  const angles = [-90, -18, 54, 126, 198];
  const vertices = angles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return {
      x: center.x + radius * Math.cos(rad),
      y: center.y + radius * Math.sin(rad),
    };
  });

  // Discipline labels, in pentagon-vertex order (clockwise from top).
  const disciplines = [
    "Product Management",
    "AI Architecture",
    "Data Science",
    "Data Engineering",
    "Domain Experts",
  ];

  // Plate dimensions.
  const plateW = 168;
  const plateH = 38;

  // Full mesh: every vertex connected to every other (10 edges).
  const edges: Array<[number, number]> = [];
  for (let i = 0; i < vertices.length; i++) {
    for (let j = i + 1; j < vertices.length; j++) {
      edges.push([i, j]);
    }
  }

  // Coordinated mesh wave: vertices light up clockwise around the pentagon;
  // each edge fires when the earlier of its two endpoints activates.
  const meshDuration = 8; // seconds
  const vertexStep = 1.2; // seconds between adjacent vertices
  const vertexDelays = vertices.map((_, i) => i * vertexStep);
  const edgeDelaysList = edges.map(([a, b]) =>
    Math.min(vertexDelays[a], vertexDelays[b]),
  );

  const phaseLabelStyle = {
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase" as const,
    fill: reduce ? "var(--copper-bright)" : "var(--foreground)",
    opacity: reduce ? 1 : 0.15,
  };

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
          width: "100%",
          aspectRatio: "1.35 / 1",
          margin: "0 auto",
        }}
      >
        <svg
          viewBox="0 0 800 600"
          style={{
            width: "100%",
            height: "100%",
            overflow: "visible",
          }}
          aria-label="The Arban Pod: five disciplines forming a peer mesh, with an OODA loop running continuously inside."
          role="img"
        >
          {/* Mesh: each edge fires from BOTH endpoints so when any vertex
              lights up, all four of its incident edges illuminate with it,
              visibly radiating the lateral peer mesh. Two stacked lines per
              edge, each driven by one endpoint's delay. */}
          {edges.map(([a, b], k) => (
            <g key={`edge-${k}`}>
              <line
                x1={vertices[a].x}
                y1={vertices[a].y}
                x2={vertices[b].x}
                y2={vertices[b].y}
                stroke="var(--accent)"
                strokeWidth={1}
                strokeDasharray="3 4"
                fill="none"
                style={{
                  opacity: reduce ? 0.55 : 0.2,
                  animation: reduce
                    ? "none"
                    : `pod-edge-pulse ${meshDuration}s ease-in-out ${vertexDelays[a]}s infinite`,
                }}
              />
              {!reduce && (
                <line
                  x1={vertices[a].x}
                  y1={vertices[a].y}
                  x2={vertices[b].x}
                  y2={vertices[b].y}
                  stroke="var(--accent)"
                  strokeWidth={1}
                  strokeDasharray="3 4"
                  fill="none"
                  style={{
                    opacity: 0.2,
                    animation: `pod-edge-pulse ${meshDuration}s ease-in-out ${vertexDelays[b]}s infinite`,
                    mixBlendMode: "screen",
                  }}
                />
              )}
            </g>
          ))}

          {/* OODA ring backdrop, base, traveling arc */}
          <circle cx={center.x} cy={center.y} r={130} fill="var(--background)" />
          <circle
            cx={center.x}
            cy={center.y}
            r={130}
            fill="none"
            stroke="var(--border)"
            strokeWidth={2}
          />
          <circle
            cx={center.x}
            cy={center.y}
            r={130}
            fill="none"
            stroke="var(--copper-bright)"
            strokeWidth={3}
            strokeLinecap="round"
            strokeDasharray="204 613"
            style={{
              transformOrigin: `${center.x}px ${center.y}px`,
              transform: "rotate(-90deg)",
              animation: reduce ? "none" : "pod-arc-travel 6s linear infinite",
            }}
          />

          {/* Pod core: copper anchor at the center of the OODA ring */}
          <circle
            cx={center.x}
            cy={center.y}
            r={14}
            fill="var(--copper)"
            opacity={0.18}
            style={{
              animation: reduce
                ? "none"
                : "pod-core-breath 5s ease-in-out infinite",
              transformOrigin: `${center.x}px ${center.y}px`,
            }}
          />
          <circle
            cx={center.x}
            cy={center.y}
            r={6}
            fill="var(--copper-bright)"
          />

          {/* Phase labels: dormant until arc arrives, then pulse to full accent */}
          <text
            className="font-sans pod-phase-label pod-phase-observe"
            x={center.x}
            y={225}
            textAnchor="middle"
            dominantBaseline="middle"
            style={phaseLabelStyle}
          >
            OBSERVE
          </text>
          <text
            className="font-sans pod-phase-label pod-phase-orient"
            x={475}
            y={center.y}
            textAnchor="middle"
            dominantBaseline="middle"
            style={phaseLabelStyle}
          >
            ORIENT
          </text>
          <text
            className="font-sans pod-phase-label pod-phase-decide"
            x={center.x}
            y={395}
            textAnchor="middle"
            dominantBaseline="middle"
            style={phaseLabelStyle}
          >
            DECIDE
          </text>
          <text
            className="font-sans pod-phase-label pod-phase-act"
            x={325}
            y={center.y}
            textAnchor="middle"
            dominantBaseline="middle"
            style={phaseLabelStyle}
          >
            ACT
          </text>

          {/* Discipline plates */}
          {vertices.map((v, i) => (
            <g key={`plate-${i}`}>
              <rect
                x={v.x - plateW / 2}
                y={v.y - plateH / 2}
                width={plateW}
                height={plateH}
                rx={2}
                className="pod-plate-rect"
                fill="var(--background)"
                stroke="var(--border)"
                strokeWidth={1}
                style={{
                  animation: reduce
                    ? "none"
                    : `pod-plate-rect ${meshDuration}s ease-in-out ${vertexDelays[i]}s infinite`,
                }}
              />
              <text
                className="font-sans pod-plate-text"
                x={v.x}
                y={v.y}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  fill: "var(--foreground)",
                  animation: reduce
                    ? "none"
                    : `pod-plate-text ${meshDuration}s ease-in-out ${vertexDelays[i]}s infinite`,
                }}
              >
                {disciplines[i]}
              </text>
            </g>
          ))}
        </svg>
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
        loop runs continuously, inside the unit, against the firm{"'"}s context.
      </p>

      <style>{`
        @keyframes pod-edge-pulse {
          0%   { opacity: 0.18; }
          8%   { opacity: 0.95; }
          18%  { opacity: 0.5; }
          75%  { opacity: 0.35; }
          85%  { opacity: 0.9; }
          95%  { opacity: 0.35; }
          100% { opacity: 0.18; }
        }
        @keyframes pod-plate-rect {
          0%, 100% { stroke: var(--border); stroke-width: 1; }
          8%, 18%  { stroke: var(--accent); stroke-width: 1.5; }
          85%      { stroke: var(--accent); stroke-width: 1.5; }
        }
        @keyframes pod-plate-text {
          0%, 100% { fill: var(--foreground); }
          8%, 18%  { fill: var(--accent); }
          85%      { fill: var(--accent); }
        }
        @keyframes pod-arc-travel {
          from { transform: rotate(-90deg); }
          to { transform: rotate(270deg); }
        }
        @keyframes pod-core-breath {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50%      { opacity: 0.36; transform: scale(1.15); }
        }
        /* Peak at 0% so animation-delay aligns directly with the arc's
           leading-edge arrival time at each label. */
        @keyframes pod-label-pulse {
          0%   { opacity: 1;    fill: var(--copper-bright); }
          12%  { opacity: 0.9;  fill: var(--copper-bright); }
          22%  { opacity: 0.15; fill: var(--foreground); }
          100% { opacity: 0.15; fill: var(--foreground); }
        }
        /* Arc: 6s clockwise from top. Leading edge passes OBSERVE at 0s,
           ORIENT at 1.5s, DECIDE at 3s, ACT at 4.5s. Negative delay = phase
           offset within the loop. */
        .pod-phase-observe { animation: pod-label-pulse 6s linear infinite;  animation-delay: 0s; }
        .pod-phase-orient  { animation: pod-label-pulse 6s linear infinite;  animation-delay: -4.5s; }
        .pod-phase-decide  { animation: pod-label-pulse 6s linear infinite;  animation-delay: -3s; }
        .pod-phase-act     { animation: pod-label-pulse 6s linear infinite;  animation-delay: -1.5s; }
        @media (prefers-reduced-motion: reduce) {
          .pod-phase-label,
          .pod-plate-rect,
          .pod-plate-text { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
