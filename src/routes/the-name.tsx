import { Header } from "../components/Header";
import { RidgeRule } from "../components/RidgeRule";
import { RiverRule } from "../components/RiverRule";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function TheNamePage() {
  useDocumentMeta({
    title: "The Origin \u2014 The Altai Group",
    meta: [
      {
        name: "description",
        content:
          "The Altai is among the oldest mountain systems in Asia. The watershed is what makes it significant.",
      },
      { property: "og:title", content: "The Origin \u2014 The Altai Group" },
      {
        property: "og:description",
        content:
          "The Altai is among the oldest mountain systems in Asia. The watershed is what makes it significant.",
      },
    ],
  });

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main
        className="name-section"
        style={{
          paddingTop: "14vh",
          paddingLeft: "max(24px, 7vw)",
          paddingRight: "max(24px, 7vw)",
          position: "relative",
        }}
      >
        <div
          className="hairline hairline-draw"
          style={{
            position: "absolute",
            top: "6vh",
            left: "max(24px, 7vw)",
            right: "max(24px, 7vw)",
          }}
        />
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(3.25rem, 8vw, 5.75rem)",
            fontWeight: 300,
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            color: "#1f7a8c",
            margin: 0,
          }}
        >
          The watershed.
        </h1>

        <div style={{ width: "100%", maxWidth: "50ch", marginTop: "2.25em" }}>
          <RidgeRule height={32} stroke="var(--copper-bright)" strokeWidth={2} />
        </div>

        <section style={{ marginTop: "2.5em", maxWidth: "50ch" }}>
          <p className="font-serif" style={{ margin: 0 }}>
            The Altai is among the oldest mountain systems in Asia, formed roughly five hundred
            million years ago and shaped since by tectonic uplift and glacial cycles.
          </p>
          <p className="font-serif" style={{ marginTop: "1.5em", marginBottom: 0 }}>
            What makes the range significant is not its height. It is not the tallest in Asia. It is
            the watershed.
          </p>
          <p className="font-serif" style={{ marginTop: "1.5em", marginBottom: 0 }}>
            Major river systems originate in the Altai and flow outward across thousands of
            kilometers, shaping conditions far beyond the mountains themselves.
            Communities downstream may never see the source directly, yet remain dependent on the
            conditions it creates.
          </p>
          <p className="font-serif" style={{ marginTop: "1.5em", marginBottom: 0 }}>
            A decision made in the catchment can alter conditions a thousand kilometers away,
            generations later, in places that no longer remember where the water began.
          </p>
          <p className="font-serif" style={{ marginTop: "2em", marginBottom: 0 }}>
            The Altai is also a homeland. Centuries ago, the operating unit
            constituted there was the Arban: ten riders carrying authority
            with them, acting on first contact, coordinating across distance
            without waiting for permission to return from the center.
          </p>
        </section>

        <p
          className="font-serif altai-closer"
          style={{
            marginTop: "2.5em",
            marginBottom: 0,
            fontStyle: "italic",
            color: "var(--copper-bright)",
            fontSize: "clamp(1.25rem, 2.4vw, 1.65rem)",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          }}
        >
          <span style={{ display: "block" }}>The name is the watershed.</span>
          <span style={{ display: "block" }}>The work is the inheritance.</span>
        </p>

        <div style={{ height: "6vh" }} />
      </main>

      <div style={{ marginTop: "8vh", paddingTop: "4vh", paddingBottom: "1.5vh" }}>
        <RiverRule height={48} stroke="var(--accent)" strokeWidth={2} />
      </div>

      <footer
        style={{
          paddingTop: "1.5vh",
          paddingBottom: "4vh",
          paddingLeft: "max(24px, 7vw)",
          paddingRight: "max(24px, 7vw)",
        }}
      >
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
          .name-section { padding-top: 11vh; }
        }
      `}</style>
    </div>
  );
}
