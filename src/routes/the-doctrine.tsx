import { Header } from "../components/Header";
import { RidgeRule } from "../components/RidgeRule";
import { RiverRule } from "../components/RiverRule";
import { RiverFragment } from "../components/RiverFragment";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const teal = "#5a8f99";
const copperBright = "var(--copper-bright)";

const eyebrowStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--muted-foreground)",
  margin: 0,
  marginBottom: "2.5em",
};

const heroStyle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontWeight: 360,
  fontSize: "clamp(2.6rem, 6.5vw, 4.6rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.02em",
  color: teal,
  margin: 0,
};

const sectionNumStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--muted-foreground)",
  margin: "0 0 0.6em 0",
};

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontWeight: 500,
  fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
  lineHeight: 1.15,
  letterSpacing: "-0.01em",
  color: teal,
  margin: 0,
  marginBottom: "1.4em",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "1.1rem",
  lineHeight: 1.75,
  color: "var(--foreground)",
  margin: 0,
  maxWidth: "56ch",
};

const bodyParaStyle: React.CSSProperties = {
  ...bodyStyle,
  marginTop: "1.4em",
};

const layerNameStyle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontWeight: 500,
  fontStyle: "italic",
  color: teal,
};

const closingLineStyle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontStyle: "italic",
  fontSize: "clamp(1.25rem, 2.4vw, 1.65rem)",
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
  color: copperBright,
  margin: 0,
};

const pauseStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  margin: "5em 0",
};

export function TheDoctrinePage() {
  useDocumentMeta({
    title: "The Doctrine \u2014 The Altai Group",
    meta: [
      {
        name: "description",
        content:
          "Systems forget. That is why AI stalls. Enterprise architecture was built for a world in which interpretation happened outside the system.",
      },
      { property: "og:title", content: "The Doctrine \u2014 The Altai Group" },
      {
        property: "og:description",
        content:
          "Systems forget. That is why AI stalls. Enterprise architecture was built for a world in which interpretation happened outside the system.",
      },
    ],
  });

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main
        className="doctrine-section"
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

        <p style={eyebrowStyle}>The Doctrine</p>

        <h1 style={heroStyle}>
          <span style={{ display: "block" }}>Systems forget.</span>
          <span style={{ display: "block", marginTop: "0.08em" }}>
            That is why AI stalls.
          </span>
        </h1>

        <div style={{ width: "100%", maxWidth: "50ch", marginTop: "2.25em" }}>
          <RidgeRule height={32} stroke={copperBright} strokeWidth={2} />
        </div>

        {/* Opening */}
        <section style={{ marginTop: "3.25em", maxWidth: "56ch" }}>
          <p style={bodyStyle}>
            Enterprise architecture was built for a world in which
            interpretation happened outside the system.
          </p>
          <p style={bodyParaStyle}>The interpreter has been removed.</p>
          <p style={bodyParaStyle}>
            What was implicit in the architecture is now load-bearing. And
            absent.
          </p>
        </section>

        {/* I. The arbitration. */}
        <section style={{ marginTop: "5em", maxWidth: "56ch" }}>
          <p style={sectionNumStyle}>I.</p>
          <h2 style={sectionTitleStyle}>The arbitration.</h2>
          <p style={bodyStyle}>
            Institutional meaning is not monolithic. Risk under one definition
            is not risk under another. Exposure depends on which committee is
            reading. Performance is measured against a thesis that itself
            moves.
          </p>
          <p style={bodyParaStyle}>
            Firms have always operated under this. A person absorbed the
            inconsistency, translated between local definitions and the
            position the firm intended to hold, reconciled across systems that
            did not reconcile to each other. They governed meaning in real
            time, in their own heads. They did not write it down.
          </p>
          <p style={bodyParaStyle}>
            That arbitration was the integration layer. It cannot be recovered
            from any system.
          </p>
        </section>

        <div style={pauseStyle}>
          <RiverFragment />
        </div>

        {/* II. The substitution. */}
        <section style={{ maxWidth: "56ch" }}>
          <p style={sectionNumStyle}>II.</p>
          <h2 style={sectionTitleStyle}>The substitution.</h2>
          <p style={bodyStyle}>
            An agent inherits the data. It does not inherit the interpreter.
          </p>
          <p style={bodyParaStyle}>
            It receives point-in-time data and inherits it as though it were
            final. It cannot see the alternatives that were ruled out, the
            contexts that decided which definition governed, or the moments
            when meaning moved. It produces output that is fluent yet
            unauditable.
          </p>
          <p style={bodyParaStyle}>
            The reviewer has nothing to check it against. The record the
            interpreter was checking against was never on the system in the
            first place.
          </p>
          <p style={bodyParaStyle}>
            Pilots that do not fail technically stall here. Not because the
            model is wrong. Because the conditions the institution relied on
            for coherence have been removed.
          </p>
        </section>

        <div style={pauseStyle}>
          <RiverFragment />
        </div>

        {/* III. The condition. */}
        <section style={{ maxWidth: "56ch" }}>
          <p style={sectionNumStyle}>III.</p>
          <h2 style={sectionTitleStyle}>The condition.</h2>
          <p style={bodyStyle}>The architecture was not wrong. The conditions changed.</p>
          <p style={bodyParaStyle}>
            Coordination is now the institutional problem. Not capability.
            Not access. Not speed. The systems are fast. The models are
            capable. What no longer holds is the coherence between them.
          </p>
          <p style={bodyParaStyle}>
            Three layers must now exist where the interpreter used to stand.
          </p>
          <p style={bodyParaStyle}>
            <span style={layerNameStyle}>Semantic governance.</span> The
            institution{"'"}s meaning, held consistently enough for systems
            to act on it.
          </p>
          <p style={bodyParaStyle}>
            <span style={layerNameStyle}>Interpretive authority.</span> A way
            to preserve multiple legitimate views of the same reality without
            collapsing them into false consensus.
          </p>
          <p style={bodyParaStyle}>
            <span style={layerNameStyle}>Decision lineage.</span> A retained
            record of judgment. Not the outcome. The reasoning the outcome
            rested on, in a form the firm can return to.
          </p>
          <p style={bodyParaStyle}>
            These are not features. They are the interpretive layer the
            architecture quietly depended on, reconstituted on the system.
          </p>
          <p style={bodyParaStyle}>
            Until they exist, institutions will continue producing output
            they cannot fully trust, at increasing scale, under increasing
            pressure.
          </p>
        </section>

        {/* Closing copper signature */}
        <div
          style={{
            marginTop: "4em",
            maxWidth: "56ch",
          }}
        >
          <p style={closingLineStyle}>
            Systems forget. That is why AI stalls.
          </p>
        </div>

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
          .doctrine-section { padding-top: 11vh; }
        }
      `}</style>
    </div>
  );
}
