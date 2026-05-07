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
            A coordination layer for real assets investors and operators adapting to machine-speed
            environments.
          </p>
          <p
            className="font-serif"
            style={{
              marginTop: "2.5em",
              fontSize: "1.15rem",
              lineHeight: 1.6,
              maxWidth: "50ch",
              margin: "2.5em 0 0 0",
            }}
          >
            The hardest problems in enterprise AI are not problems of model capability. They are
            problems of authority, memory, and coordination. Altai works on those.
          </p>
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
        @media (max-width: 640px) {
          .hero-section { padding-top: 22vh; }
        }
      `}</style>
    </div>
  );
}
