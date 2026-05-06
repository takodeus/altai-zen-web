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
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
          className="hero-section"
        >
          <div
            className="hairline hairline-draw"
            style={{ position: "absolute", top: "12vh", left: 0, right: 0 }}
          />
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.1,
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
              width: "60px",
              height: "2px",
              backgroundColor: "var(--accent)",
              marginTop: "16px",
            }}
          />
          <p
            className="font-sans"
            style={{
              marginTop: "32px",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              maxWidth: "50ch",
            }}
          >
            A coordination layer for real assets investors and operators adapting to machine-speed
            environments.
          </p>
        </section>

        <section style={{ marginTop: "12vh" }}>
          <p className="font-serif" style={{ maxWidth: "50ch", margin: 0 }}>
            The hardest problems in enterprise AI are not problems of model capability. They are
            problems of authority, memory, and coordination. Altai works on those.
          </p>
        </section>
      </main>

      <footer style={{ marginTop: "12vh", paddingBottom: "4vh" }}>
        <div className="hairline" style={{ marginBottom: "24px" }} />
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
          .hero-section { min-height: 60vh; }
        }
      `}</style>
    </div>
  );
}
