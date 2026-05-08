import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { RidgeRule } from "../components/RidgeRule";
import { RiverRule } from "../components/RiverRule";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function HomePage() {
  useDocumentMeta({
    title: "The Altai Group",
    meta: [
      {
        name: "description",
        content:
          "For real assets investors and operators moving past the dashboard era.",
      },
      { property: "og:title", content: "The Altai Group" },
      {
        property: "og:description",
        content:
          "For real assets investors and operators moving past the dashboard era.",
      },
    ],
  });

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header theme="dark" />
      <main>
        <section
          className="hero-section"
          style={{
            background: "#1f2326",
            color: "#edeef0",
            paddingTop: "14vh",
            paddingBottom: "10vh",
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
              backgroundColor: "#5a8f99",
              transformOrigin: "left center",
            }}
          />
          <p
            className="label-caps"
            style={{ color: "#edeef0", margin: 0, marginBottom: "1.75em" }}
          >
            Operational AI
          </p>
          <h1
            className="font-serif"
            style={{
              fontWeight: 300,
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              color: "#5a8f99",
              margin: 0,
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "clamp(3.5rem, 8.5vw, 6.15rem)",
                fontWeight: 360,
              }}
            >
              Doctrine upstream.
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(3.25rem, 8vw, 5.75rem)",
                marginTop: "0.12em",
              }}
            >
              Autonomy downstream.
            </span>
          </h1>
          <div style={{ width: "100%", maxWidth: "58ch", marginTop: "2.25em" }}>
            <RidgeRule height={32} stroke="var(--copper-bright)" strokeWidth={2} />
          </div>
          <p
            className="font-serif"
            style={{
              marginTop: "3.25em",
              fontSize: "1.15rem",
              lineHeight: 1.6,
              maxWidth: "50ch",
              color: "#edeef0",
            }}
          >
            For real assets investors and operators moving past the dashboard
            era.
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
            The systems your firm runs on were built to record what is true
            now. They do not preserve why anything was decided, under which
            definitions, or what context governed the call.
          </p>
          <p
            className="font-serif"
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.6,
              maxWidth: "50ch",
              margin: "1.5em 0 0 0",
              color: "#edeef0",
            }}
          >
            Agents deployed onto that architecture cannot act. They produce
            output no one can trace, and the pilot stalls.
          </p>
          <p
            className="font-serif"
            style={{
              fontSize: "1.15rem",
              fontStyle: "italic",
              lineHeight: 1.6,
              maxWidth: "50ch",
              margin: "2.5em 0 0 0",
              color: "var(--copper-bright)",
            }}
          >
            The doctrine sits upstream of this.
          </p>
        </section>

        {/* River band — straddles the dark/light seam.
            Top half is dark (extends the hero), bottom half is light.
            The river SVG sits exactly on the boundary. */}
        <div
          style={{
            background:
              "linear-gradient(to bottom, #1f2326 0%, #1f2326 50%, var(--background) 50%, var(--background) 100%)",
            display: "flex",
            alignItems: "center",
            paddingTop: "2vh",
            paddingBottom: "1.5vh",
          }}
        >
          <div style={{ width: "100%" }}>
            <RiverRule height={48} stroke="var(--accent)" strokeWidth={2} />
          </div>
        </div>
      </main>

      <footer
        style={{
          paddingTop: "1.5vh",
          paddingBottom: "4vh",
          paddingLeft: "max(24px, 7vw)",
          paddingRight: "max(24px, 7vw)",
        }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: "15px",
            fontStyle: "italic",
            color: "var(--copper-bright)",
            margin: 0,
            marginBottom: "8px",
          }}
        >
          <Link to="/the-name" style={{ color: "inherit", textDecoration: "none" }}>
            The Altai
          </Link>
        </p>
        <p
          className="font-sans"
          style={{
            fontSize: "12px",
            color: "var(--foreground)",
            opacity: 0.55,
            margin: 0,
          }}
        >
          {"\u00A9"} 2026 The Altai Group
        </p>
      </footer>

      <style>{`
        @media (max-width: 640px) {
          .hero-section { padding-top: 12vh; }
        }
      `}</style>
    </div>
  );
}
