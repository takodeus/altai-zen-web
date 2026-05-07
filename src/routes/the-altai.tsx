import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { RidgeRule } from "../components/RidgeRule";

export const Route = createFileRoute("/the-altai")({
  head: () => ({
    meta: [
      { title: "The Altai — The Altai Group" },
      {
        name: "description",
        content:
          "The Altai is among the oldest mountain systems in Asia. The watershed is what makes it significant.",
      },
      { property: "og:title", content: "The Altai — The Altai Group" },
      {
        property: "og:description",
        content:
          "The Altai is among the oldest mountain systems in Asia. The watershed is what makes it significant.",
      },
    ],
  }),
  component: TheAltaiPage,
});

function TheAltaiPage() {
  return (
    <div style={{ minHeight: "100vh", paddingLeft: "max(24px, 7vw)", paddingRight: "max(24px, 7vw)" }}>
      <Header />
      <main className="altai-section" style={{ paddingTop: "28vh", position: "relative" }}>
        <div
          className="hairline hairline-draw"
          style={{ position: "absolute", top: "12vh", left: 0, right: 0 }}
        />
        <p className="label-caps" style={{ color: "var(--accent)", margin: 0, marginBottom: "1.75em" }}>
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
            marginTop: "1.5em",
            marginBottom: 0,
            fontStyle: "italic",
            color: "#c9612a",
            fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          This is why we took the name.
        </p>

        <div style={{ height: "20vh" }} />
      </main>

      <style>{`
        .altai-closer { white-space: nowrap; }
        @media (max-width: 640px) {
          .altai-section { padding-top: 22vh; }
          .altai-closer { white-space: normal; }
        }
      `}</style>
    </div>
  );
}
