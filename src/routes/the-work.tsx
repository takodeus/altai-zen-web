import { Header } from "../components/Header";
import { RidgeRule } from "../components/RidgeRule";
import { RiverRule } from "../components/RiverRule";
import { RiverFragment } from "../components/RiverFragment";
import { PodMesh } from "../components/PodMesh";
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
  fontWeight: 300,
  fontSize: "clamp(2.6rem, 6.5vw, 4.6rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.02em",
  color: teal,
  margin: 0,
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

export function TheWorkPage() {
  useDocumentMeta({
    title: "The Work \u2014 The Altai Group",
    meta: [
      {
        name: "description",
        content:
          "Altai builds the layer the institution does not have. The interpretive layer between the firm's systems of record and the agents acting on them.",
      },
      { property: "og:title", content: "The Work \u2014 The Altai Group" },
      {
        property: "og:description",
        content:
          "Altai builds the layer the institution does not have. The interpretive layer between the firm's systems of record and the agents acting on them.",
      },
    ],
  });

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main
        className="work-section"
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

        <p style={eyebrowStyle}>The Work</p>

        <h1 style={heroStyle}>
          <span style={{ display: "block" }}>Altai builds the layer</span>
          <span style={{ display: "block", marginTop: "0.08em" }}>
            the institution does not have.
          </span>
        </h1>

        <div style={{ width: "100%", maxWidth: "50ch", marginTop: "2.25em" }}>
          <RidgeRule height={32} stroke={copperBright} strokeWidth={2} />
        </div>

        {/* Opening */}
        <section style={{ marginTop: "3.25em", maxWidth: "56ch" }}>
          <p style={bodyStyle}>
            The doctrine names the condition. Three layers must exist where
            the interpreter used to stand. They are not features of any
            platform. They are not the output of a redesigned workflow. They
            are institutional capabilities, built by doing the work in a way
            that preserves the reasoning as it happens.
          </p>
          <p style={bodyParaStyle}>That is the layer Altai builds.</p>
        </section>

        {/* The category. */}
        <section style={{ marginTop: "5em", maxWidth: "56ch" }}>
          <h2 style={sectionTitleStyle}>The category.</h2>
          <p style={bodyStyle}>
            Altai builds the interpretive layer between the firm's systems of
            record and the agents acting on them.
          </p>
          <p style={bodyParaStyle}>
            A coherent institutional model of the firm. Entities,
            relationships, authorities, events. Resolved across systems and
            held over time. Who holds the authority to revise them as
            meaning moves.
          </p>
          <p style={bodyParaStyle}>
            Once the layer exists, agents can act. Their autonomy is a
            property of the layer they reason against, not of the agent
            itself.
          </p>
          <p style={bodyParaStyle}>
            The unit of work is not a recommendation, an integrated workflow,
            or a seat inside the firm. It is the governed layer the agents
            must reason against. The semantic governance, interpretive
            authority, and decision lineage the architecture requires.
            Reconstituted on the system.
          </p>
          <p style={bodyParaStyle}>
            This is a different category of work than what is typically
            engaged. Institutions are discovering that interpretation itself
            now has to be governed infrastructure.
          </p>
        </section>

        <div style={pauseStyle}>
          <RiverFragment />
        </div>

        {/* The unit. */}
        <section style={{ maxWidth: "56ch" }}>
          <h2 style={sectionTitleStyle}>The unit.</h2>
          <p style={bodyStyle}>The layer is built by a pod inside the firm.</p>
          <p style={bodyParaStyle}>
            The pod is composed of the disciplines the problem requires.
            Business. Technology. Data. The pod composes deep expertise
            across each. Composition adjusts to the problem.
          </p>
          <p style={bodyParaStyle}>
            The pod is the Arban inside the institution. Different
            composition, same structure: governing principles travel with
            the unit, and the unit acts.
          </p>
          <p style={bodyParaStyle}>
            The pod operates as a complete decision unit. Observation,
            orientation, decision, and action remain coupled inside the
            work itself. The unit holds them all.
          </p>
        </section>

        {/* PodMesh visual */}
        <div style={{ display: "flex", justifyContent: "center", margin: "3em 0" }}>
          <PodMesh />
        </div>

        <section style={{ maxWidth: "56ch" }}>
          <p style={bodyStyle}>
            This is what distinguishes the pod from any other forward-deployed
            engineering team a firm might engage. The pod does not produce
            recommendations for someone else to act on. It does not redesign
            workflows for the firm to operate. It runs the loop inside the
            firm, with the judgment to act, and the work it does is what the
            firm would otherwise have to build itself.
          </p>
        </section>

        <div style={pauseStyle}>
          <RiverFragment />
        </div>

        {/* The arrangement. */}
        <section style={{ maxWidth: "56ch" }}>
          <h2 style={sectionTitleStyle}>The arrangement.</h2>
          <p style={bodyStyle}>Pods are subscribed, not staffed.</p>
          <p style={bodyParaStyle}>
            The firm does not contract hours, seats, or full-time
            equivalents. It subscribes to a pod. The pod is the unit of
            measure, the unit of accountability, and the unit of work.
          </p>
          <p style={bodyParaStyle}>
            Through the pod, to the outcomes.
          </p>
          <p style={bodyParaStyle}>
            A firm runs as many pods as the work requires. Different domains
            call for different compositions. A capital markets pod is not a
            portfolio operations pod. The subscription is structured for each
            pod separately, against the work it is built around.
          </p>
          <p style={bodyParaStyle}>
            When the work is done, the subscription ends. When the work
            continues, the subscription renews.
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
            <span style={{ display: "block" }}>Altai builds the layer</span>
            <span style={{ display: "block" }}>the institution does not have.</span>
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
          .work-section { padding-top: 11vh; }
        }
      `}</style>
    </div>
  );
}
