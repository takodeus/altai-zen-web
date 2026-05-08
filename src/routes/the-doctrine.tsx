import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { RidgeRule } from "../components/RidgeRule";
import { RiverRule } from "../components/RiverRule";
import { RiverFragment } from "../components/RiverFragment";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const teal = "#5a8f99";
const copperBright = "var(--copper-bright)";

const bodyMax: React.CSSProperties = { maxWidth: "56ch" };
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

        <p
          className="t-eyebrow"
          style={{ color: "var(--muted-foreground)", margin: 0, marginBottom: "2.5em" }}
        >
          The Doctrine
        </p>

        <h1 className="t-h1" style={{ color: teal, margin: 0 }}>
          <span style={{ display: "block" }}>Systems forget.</span>
          <span style={{ display: "block", marginTop: "0.08em" }}>
            That is why AI stalls.
          </span>
        </h1>

        <div style={{ width: "100%", maxWidth: "50ch", marginTop: "2.25em" }}>
          <RidgeRule height={32} stroke={copperBright} strokeWidth={2} />
        </div>

        {/* Opening */}
        <section style={{ marginTop: "3.25em", ...bodyMax }}>
          <p className="t-body" style={{ margin: 0 }}>
            Enterprise architecture was built for a world in which
            interpretation happened outside the system.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>The interpreter has been removed.</p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            What was implicit in the architecture is now load-bearing. And
            absent.
          </p>
        </section>

        {/* The arbitration. */}
        <section style={{ marginTop: "5em", ...bodyMax }}>
          <h2 className="t-h2" style={{ color: teal, margin: 0, marginBottom: "1.4em" }}>
            The arbitration.
          </h2>
          <p className="t-body" style={{ margin: 0 }}>
            Institutional meaning is not monolithic. Risk under one definition
            is not risk under another. Exposure depends on which committee is
            reading. Performance is measured against a thesis that itself
            moves.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            Firms have always operated under this. A person absorbed the
            inconsistency, translated between local definitions and the
            position the firm intended to hold, reconciled across systems that
            did not reconcile to each other. They governed meaning in real
            time, in their own heads. They did not write it down.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            That arbitration was the integration layer. It cannot be recovered
            from any system.
          </p>
        </section>

        <div style={pauseStyle}>
          <RiverFragment />
        </div>

        {/* The substitution. */}
        <section style={bodyMax}>
          <h2 className="t-h2" style={{ color: teal, margin: 0, marginBottom: "1.4em" }}>
            The substitution.
          </h2>
          <p className="t-body" style={{ margin: 0 }}>
            An agent inherits the data. It does not inherit the interpreter.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            It receives point-in-time data and inherits it as though it were
            final. It cannot see the alternatives that were ruled out, the
            contexts that decided which definition governed, or the moments
            when meaning moved. It produces output that is fluent yet
            unauditable.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            The reviewer has nothing to check it against. That record was
            never on the system in the first place.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            Pilots that do not fail technically stall here. Not because the
            model is wrong. Because the conditions the institution relied on
            for coherence have been removed.
          </p>
        </section>

        <div style={pauseStyle}>
          <RiverFragment />
        </div>

        {/* The condition. */}
        <section style={bodyMax}>
          <h2 className="t-h2" style={{ color: teal, margin: 0, marginBottom: "1.4em" }}>
            The condition.
          </h2>
          <p className="t-body" style={{ margin: 0 }}>The architecture was not wrong. The conditions changed.</p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            Coordination is now the institutional problem. Not capability.
            Not access. Not speed. The systems are fast. The models are
            capable. What no longer holds is the coherence between them.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            Three layers must now exist where the interpreter used to stand.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            <span style={{ fontStyle: "italic", fontWeight: 500, color: teal }}>Semantic governance.</span>{" "}
            The institution{"'"}s meaning, held consistently enough for systems
            to act on it.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            <span style={{ fontStyle: "italic", fontWeight: 500, color: teal }}>Interpretive authority.</span>{" "}
            A way to preserve multiple legitimate views of the same reality
            without collapsing them into false consensus.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            <span style={{ fontStyle: "italic", fontWeight: 500, color: teal }}>Decision lineage.</span>{" "}
            A retained record of judgment. Not the outcome. The reasoning the
            outcome rested on, in a form the firm can return to.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            These are not features. They are the interpretive layer the
            architecture quietly depended on, reconstituted on the system.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            Until they exist, institutions will continue producing output
            they cannot fully trust, at increasing scale, under increasing
            pressure.
          </p>
        </section>

        {/* Closing copper signature */}
        <div style={{ marginTop: "4em", ...bodyMax }}>
          <p
            className="t-lede"
            style={{ fontStyle: "italic", color: copperBright, margin: 0 }}
          >
            <Link
              to="/the-work"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              The work is the missing layer.
            </Link>
          </p>
        </div>

        <div style={{ height: "6vh" }} />
      </main>

      <div style={{ marginTop: "8vh", paddingTop: "4vh", paddingBottom: "1.5vh" }}>
        <RiverRule height={48} stroke="var(--accent)" strokeWidth={2} />
      </div>

      <Footer topLink={{ to: "/the-name", label: "The Origin" }} />

      <style>{`
        @media (max-width: 640px) {
          .doctrine-section { padding-top: 11vh; }
        }
      `}</style>
    </div>
  );
}
