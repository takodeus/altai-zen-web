import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../components/Header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Altai Group" },
      {
        name: "description",
        content:
          "A coordination layer for real assets investors and operators adapting to machine-speed environments.",
      },
      { property: "og:title", content: "Altai Group" },
      {
        property: "og:description",
        content:
          "A coordination layer for real assets investors and operators adapting to machine-speed environments.",
      },
    ],
  }),
  component: HomePage,
});

function RidgeNetwork() {
  // Hand-placed network nodes (right third), x in ~320–470, y in ~60–160
  const nodes: Array<[number, number, number]> = [
    [318, 118, 0.95],
    [332, 104, 0.9],
    [344, 126, 0.85],
    [355, 112, 0.85],
    [360, 138, 0.8],
    [372, 96, 0.75],
    [378, 122, 0.75],
    [388, 142, 0.7],
    [394, 108, 0.65],
    [402, 130, 0.65],
    [410, 92, 0.55],
    [414, 118, 0.55],
    [422, 138, 0.5],
    [430, 104, 0.45],
    [436, 126, 0.4],
    [444, 88, 0.35],
    [448, 114, 0.32],
    [454, 134, 0.28],
    [462, 100, 0.22],
    [468, 122, 0.18],
  ];
  // Edges by index pairs
  const edges: Array<[number, number]> = [
    [0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [3, 6],
    [4, 7], [5, 6], [6, 8], [6, 9], [7, 9], [8, 10], [9, 11],
    [9, 12], [10, 13], [11, 13], [12, 14], [13, 15], [13, 16],
    [14, 17], [15, 16], [16, 18], [17, 19], [18, 19],
  ];

  return (
    <svg
      viewBox="0 0 480 200"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      {/* Ridge: one continuous line, three asymmetric peaks */}
      <g style={{ color: "var(--foreground)", opacity: 0.7 }}>
        <path
          d="M 8 168 L 60 150 L 96 132 L 128 88 L 162 56 L 196 102 L 222 78 L 254 124 L 288 110 L 318 118"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>

      {/* Network: dissolving into the right edge */}
      <g stroke="var(--accent)" fill="var(--accent)">
        {edges.map(([a, b], i) => {
          const [x1, y1, oa] = nodes[a];
          const [x2, y2, ob] = nodes[b];
          return (
            <line
              key={`e-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeWidth="0.6"
              opacity={Math.min(oa, ob) * 0.85}
            />
          );
        })}
        {nodes.map(([x, y, o], i) => (
          <circle key={`n-${i}`} cx={x} cy={y} r="1.5" opacity={o} />
        ))}
      </g>
    </svg>
  );
}

function HomePage() {
  return (
    <div style={{ minHeight: "100vh", paddingLeft: "max(24px, 7vw)", paddingRight: "max(24px, 7vw)" }}>
      <Header />
      <main>
        <section
          style={{
            paddingTop: "28vh",
            position: "relative",
          }}
          className="hero-section"
        >
          <div
            className="hairline hairline-draw"
            style={{ position: "absolute", top: "12vh", left: 0, right: 0 }}
          />
          <div className="hero-grid">
            <div className="hero-text">
              <p
                className="label-caps"
                style={{ color: "var(--accent)", margin: 0, marginBottom: "1.75em" }}
              >
                A coordination layer
              </p>
              <h1
                className="font-serif"
                style={{
                  fontSize: "clamp(3.25rem, 8vw, 5.75rem)",
                  fontWeight: 300,
                  lineHeight: 0.98,
                  letterSpacing: "-0.02em",
                  color: "var(--foreground)",
                  margin: 0,
                }}
              >
                Doctrine upstream.
                <br />
                Autonomy downstream.
              </h1>
              <div
                style={{
                  width: "100%",
                  maxWidth: "50ch",
                  height: "1px",
                  backgroundColor: "var(--accent)",
                  marginTop: "2.25em",
                }}
              />
              <p
                className="font-sans"
                style={{
                  marginTop: "1.5em",
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                  maxWidth: "50ch",
                }}
              >
                A coordination layer for real assets investors and operators adapting to
                machine-speed environments.
              </p>
              <p
                className="font-serif"
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.6,
                  maxWidth: "50ch",
                  margin: "2.5em 0 0 0",
                }}
              >
                The hardest problems in enterprise AI are not problems of model capability. They are
                problems of authority, memory, and coordination. Altai works on those.
              </p>
            </div>
            <div className="hero-motif" aria-hidden="true">
              <RidgeNetwork />
            </div>
          </div>
        </section>
      </main>

      <footer style={{ marginTop: "8vh", paddingBottom: "4vh" }}>
        <div className="hairline" style={{ marginBottom: "12px" }} />
        <p
          className="font-sans"
          style={{
            fontSize: "12px",
            color: "var(--foreground)",
            opacity: 0.55,
            textAlign: "center",
            margin: 0,
          }}
        >
          <Link to="/the-altai">The Altai</Link>
          <span style={{ margin: "0 0.5em" }}>·</span>
          <a href="mailto:[email protected]">[email protected]</a>
        </p>
      </footer>

      <style>{`
        .hero-grid {
          display: block;
        }
        .hero-motif {
          width: 100%;
          max-width: 280px;
          margin: 2.5em 0 0 0;
        }
        @media (min-width: 900px) {
          .hero-grid {
            display: grid;
            grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
            gap: 6vw;
            align-items: start;
          }
          .hero-motif {
            max-width: 480px;
            margin: 0.5em 0 0 0;
          }
        }
        @media (max-width: 640px) {
          .hero-section { padding-top: 22vh; }
        }
      `}</style>
    </div>
  );
}
