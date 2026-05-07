import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { RidgeRule } from "../components/RidgeRule";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Altai Group" },
      {
        name: "description",
        content:
          "A coordination layer for real assets investors and operators adapting to machine-speed environments.",
      },
      { property: "og:title", content: "The Altai Group" },
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
    <div style={{ minHeight: "100vh" }}>
      <Header theme="dark" />
      <main>
        <section
          className="hero-section"
          style={{
            background: "#1f2326",
            color: "#edeef0",
            paddingTop: "28vh",
            paddingBottom: "16vh",
            paddingLeft: "max(24px, 7vw)",
            paddingRight: "max(24px, 7vw)",
            position: "relative",
          }}
        >
          <div
            className="hairline-draw"
            style={{
              position: "absolute",
              top: "12vh",
              left: "max(24px, 7vw)",
              right: "max(24px, 7vw)",
              height: "2px",
              backgroundColor: "#4ab8cc",
              transformOrigin: "left center",
            }}
          />
          <p
            className="label-caps"
            style={{ color: "#4ab8cc", margin: 0, marginBottom: "1.75em" }}
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
              color: "#edeef0",
              margin: 0,
            }}
          >
            Doctrine upstream.
            <br />
            Autonomy downstream.
          </h1>
          <div style={{ width: "100%", maxWidth: "50ch", marginTop: "2.25em" }}>
            <RidgeRule height={32} stroke="#4ab8cc" />
          </div>
          <p
            className="font-sans"
            style={{
              marginTop: "1.5em",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              maxWidth: "50ch",
              color: "#edeef0",
            }}
          >
            A coordination layer for real assets investors and operators adapting to machine-speed
            environments.
          </p>
          <p
            className="font-serif"
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.6,
              maxWidth: "50ch",
              margin: "2.5em 0 0 0",
              color: "#edeef0",
            }}
          >
            The hardest problems in enterprise AI are not problems of model capability. They are
            problems of authority, memory, and coordination. Altai works on those.
          </p>
        </section>
      </main>

      <footer
        style={{
          marginTop: "8vh",
          paddingBottom: "4vh",
          paddingLeft: "max(24px, 7vw)",
          paddingRight: "max(24px, 7vw)",
        }}
      >
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
