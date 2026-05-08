import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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
          className="t-display"
          style={{ color: "#1f7a8c", margin: 0 }}
        >
          The watershed.
        </h1>

        <div style={{ width: "100%", maxWidth: "50ch", marginTop: "2.25em" }}>
          <RidgeRule height={32} stroke="var(--copper-bright)" strokeWidth={2} />
        </div>

        <section style={{ marginTop: "2.5em", maxWidth: "50ch" }}>
          <p className="t-body" style={{ margin: 0 }}>
            The Altai is among the oldest mountain systems in Asia, formed roughly five hundred
            million years ago and shaped since by tectonic uplift and glacial cycles.
          </p>
          <p className="t-body" style={{ marginTop: "1.5em" }}>
            What makes the range significant is not its height. It is not the tallest in Asia. It is
            the watershed.
          </p>
          <p className="t-body" style={{ marginTop: "1.5em" }}>
            Major river systems originate in the Altai and flow outward across thousands of
            kilometers, shaping conditions far beyond the mountains themselves.
            Communities downstream may never see the source directly, yet remain dependent on the
            conditions it creates.
          </p>
          <p className="t-body" style={{ marginTop: "1.5em" }}>
            A decision made in the catchment can alter conditions a thousand kilometers away,
            generations later, in places that no longer remember where the water began.
          </p>
          <p className="t-body" style={{ marginTop: "2em" }}>
            The Altai is also a homeland. Centuries ago, the operating unit
            constituted there was the Arban: ten riders carrying authority
            with them, acting on first contact, coordinating across distance
            without waiting for permission to return from the center.
          </p>
        </section>

        <p
          className="t-lede altai-closer"
          style={{
            marginTop: "2.5em",
            marginBottom: 0,
            fontStyle: "italic",
            color: "var(--copper-bright)",
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

      <Footer topLink={{ to: "/", label: "The Altai" }} />

      <style>{`
        @media (max-width: 640px) {
          .name-section { padding-top: 11vh; }
        }
      `}</style>
    </div>
  );
}
