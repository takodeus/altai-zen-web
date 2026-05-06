import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";

export const Route = createFileRoute("/the-altai")({
  head: () => ({
    meta: [
      { title: "The Altai — Altai Group" },
      {
        name: "description",
        content:
          "The Altai is among the oldest mountain systems in Asia. The watershed is what makes it significant.",
      },
      { property: "og:title", content: "The Altai — Altai Group" },
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
      <main style={{ paddingTop: "20vh" }}>
        <div
          className="hairline hairline-draw"
          style={{ position: "absolute", top: "12vh", left: "max(24px, 7vw)", right: "max(24px, 7vw)" }}
        />
        <svg
          aria-hidden="true"
          width="72"
          height="40"
          viewBox="0 0 72 40"
          fill="none"
          stroke="rgba(31, 35, 38, 0.8)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ display: "block", marginBottom: "1.75em" }}
        >
          <path d="M6 30 L24 18 L36 6 L48 18 L66 30" />
          <path d="M36 6 C 30 16, 22 24, 12 34" />
          <path d="M36 6 C 42 16, 50 24, 60 34" />
        </svg>
        <p className="label-caps" style={{ color: "var(--accent)", margin: 0 }}>
          The Altai
        </p>

        <section style={{ marginTop: "3em", maxWidth: "50ch" }}>
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
          <p
            className="font-serif"
            style={{ marginTop: "4em", fontStyle: "italic", marginBottom: 0 }}
          >
            This is why we took the name.
          </p>
        </section>

        <div style={{ height: "20vh" }} />
      </main>
    </div>
  );
}
