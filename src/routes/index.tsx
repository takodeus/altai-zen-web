import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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
            className="t-eyebrow"
            style={{ color: "#edeef0", margin: 0, marginBottom: "1.75em" }}
          >
            Operational AI
          </p>
          <h1
            className="t-display"
            style={{ color: "#5a8f99", margin: 0 }}
          >
            <span style={{ display: "block" }}>Doctrine upstream.</span>
            <span style={{ display: "block", marginTop: "0.12em" }}>
              Autonomy downstream.
            </span>
          </h1>
          <div style={{ width: "100%", maxWidth: "58ch", marginTop: "2.25em" }}>
            <RidgeRule height={32} stroke="var(--copper-bright)" strokeWidth={2} />
          </div>
          <p
            className="t-body"
            style={{
              marginTop: "3.25em",
              maxWidth: "50ch",
              color: "#edeef0",
              margin: "3.25em 0 0 0",
            }}
          >
            For real assets investors and operators moving past the dashboard
            era.
          </p>
          <p
            className="t-body"
            style={{
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
            className="t-body"
            style={{
              maxWidth: "50ch",
              margin: "1.5em 0 0 0",
              color: "#edeef0",
            }}
          >
            Agents deployed onto that architecture cannot act. They produce
            output no one can trace.
          </p>
          <p
            className="t-lede"
            style={{
              fontStyle: "italic",
              maxWidth: "50ch",
              margin: "2.5em 0 0 0",
              color: "var(--copper-bright)",
            }}
          >
            <Link
              to="/the-doctrine"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              The doctrine sits upstream of this.
            </Link>
          </p>
        </section>

        {/* River band — straddles the dark/light seam. */}
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

      <Footer topLink={{ to: "/the-name", label: "The Origin" }} />

      <style>{`
        @media (max-width: 640px) {
          .hero-section { padding-top: 12vh; }
        }
      `}</style>
    </div>
  );
}
