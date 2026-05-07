import { Header } from "../components/Header";
import { RidgeRule } from "../components/RidgeRule";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function TheAltaiPage() {
  useDocumentMeta({
    title: "The Altai \u2014 The Altai Group",
    meta: [
      {
        name: "description",
        content:
          "The Altai is among the oldest mountain systems in Asia. The watershed is what makes it significant.",
      },
      { property: "og:title", content: "The Altai \u2014 The Altai Group" },
      {
        property: "og:description",
        content:
          "The Altai is among the oldest mountain systems in Asia. The watershed is what makes it significant.",
      },
    ],
  });

  return (
    <div style={{ minHeight: "100vh", paddingLeft: "max(24px, 7vw)", paddingRight: "max(24px, 7vw)" }}>
      <Header />
      <main className="altai-section" style={{ paddingTop: "14vh", position: "relative" }}>
        <div
          className="hairline hairline-draw"
          style={{ position: "absolute", top: "6vh", left: 0, right: 0 }}
        />
        <p className="label-caps" style={{ color: "var(--foreground)", margin: 0, marginBottom: "1.75em" }}>
          The Altai
        </p>

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
          <RidgeRule height={32} stroke="var(--accent)" />
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
            kilometers, shaping the hydrology of regions far larger than the mountains themselves.
            Communities downstream may never see the source directly, yet remain dependent on the
            conditions it creates.
          </p>
          <p className="font-serif" style={{ marginTop: "1.5em", marginBottom: 0 }}>
            A decision made in the catchment can alter conditions a thousand kilometers away,
            generations later, in places that no longer remember where the water began.
          </p>
        </section>

        <p
          className="font-serif altai-closer"
          style={{
            marginTop: "0.5em",
            marginBottom: 0,
            fontStyle: "italic",
            color: "var(--copper-bright)",
            fontSize: "clamp(1.15rem, 2.2vw, 1.75rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          This is why we took the name.
        </p>

        <div style={{ height: "6vh" }} />
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
          {"\u00A9"} 2026 The Altai Group
        </p>
      </footer>

      <style>{`
        .altai-closer { white-space: nowrap; }
        @media (max-width: 640px) {
          .altai-section { padding-top: 11vh; }
          .altai-closer { white-space: normal; }
        }
      `}</style>
    </div>
  );
}
