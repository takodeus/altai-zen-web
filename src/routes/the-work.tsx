import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { RidgeRule } from "../components/RidgeRule";
import { RiverRule } from "../components/RiverRule";
import { RiverFragment } from "../components/RiverFragment";
import { PodMesh } from "../components/PodMesh";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const teal = "#5a8f99";
const copperBright = "var(--copper-bright)";

const bodyMax: React.CSSProperties = { maxWidth: "56ch" };
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

        <p
          className="t-eyebrow"
          style={{ color: "var(--muted-foreground)", margin: 0, marginBottom: "2.5em" }}
        >
          The Work
        </p>

        <h1 className="t-h1" style={{ color: teal, margin: 0 }}>
          <span style={{ display: "block" }}>Altai builds the layer</span>
          <span style={{ display: "block", marginTop: "0.08em" }}>
            the institution does not have.
          </span>
        </h1>

        <div style={{ width: "100%", maxWidth: "50ch", marginTop: "2.25em" }}>
          <RidgeRule height={32} stroke={copperBright} strokeWidth={2} />
        </div>

        {/* Opening */}
        <section style={{ marginTop: "3.25em", ...bodyMax }}>
          <p className="t-body" style={{ margin: 0 }}>
            The doctrine names the condition. Three layers must exist where
            the interpreter used to stand. They are not features of any
            platform. They are not the output of a redesigned workflow. They
            are institutional capabilities, built by doing the work in a way
            that preserves the reasoning as it happens.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>That is the layer Altai builds.</p>
        </section>

        {/* The category. */}
        <section style={{ marginTop: "5em", ...bodyMax }}>
          <h2 className="t-h2" style={{ color: teal, margin: 0, marginBottom: "1.4em" }}>
            The category.
          </h2>
          <p className="t-body" style={{ margin: 0 }}>
            Altai builds the interpretive layer between the firm's systems of
            record and the agents acting on them.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            A coherent institutional model of the firm. Entities,
            relationships, authorities, events. Resolved across systems and
            held over time. Who holds the authority to revise them as
            meaning moves.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            Once the layer exists, agents can act. Their autonomy is a
            property of the layer they reason against, not of the agent
            itself.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            The unit of work is not a recommendation, an integrated workflow,
            or a seat inside the firm. It is the governed layer the agents
            must reason against. The semantic governance, interpretive
            authority, and decision lineage the architecture requires.
            Reconstituted on the system.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            This is a different category of work than what is typically
            engaged. Institutions are discovering that interpretation itself
            now has to be governed infrastructure.
          </p>
        </section>

        <div style={pauseStyle}>
          <RiverFragment />
        </div>

        {/* The unit. */}
        <section style={bodyMax}>
          <h2 className="t-h2" style={{ color: teal, margin: 0, marginBottom: "1.4em" }}>
            The unit.
          </h2>
          <p className="t-body" style={{ margin: 0 }}>The layer is built by a pod inside the firm.</p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            The pod is composed of the disciplines the problem requires.
            Business. Technology. Data. The pod composes deep expertise
            across each. Composition adjusts to the problem.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            The pod is the Arban inside the institution. Different
            composition, same structure: governing principles travel with
            the unit, and the unit acts.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            The pod operates as a complete decision unit. Observation,
            orientation, decision, and action remain coupled inside the
            work itself. The unit holds them all.
          </p>
        </section>

        {/* PodMesh visual */}
        <div style={{ display: "flex", justifyContent: "center", margin: "3em 0" }}>
          <PodMesh />
        </div>

        <section style={bodyMax}>
          <p className="t-body" style={{ margin: 0 }}>
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
        <section style={bodyMax}>
          <h2 className="t-h2" style={{ color: teal, margin: 0, marginBottom: "1.4em" }}>
            The arrangement.
          </h2>
          <p className="t-body" style={{ margin: 0 }}>Pods are subscribed, not staffed.</p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            The firm does not contract hours, seats, or full-time
            equivalents. It subscribes to a pod. The pod is the unit of
            measure, the unit of accountability, and the unit of work.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            Through the pod, to the outcomes.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            A firm runs as many pods as the work requires. Different domains
            call for different compositions. A capital markets pod is not a
            portfolio operations pod. The subscription is structured for each
            pod separately, against the work it is built around.
          </p>
          <p className="t-body" style={{ marginTop: "1.4em" }}>
            When the work is done, the subscription ends. When the work
            continues, the subscription renews.
          </p>
        </section>

        {/* Closing copper signature */}
        <div style={{ marginTop: "4em", ...bodyMax }}>
          <p
            className="t-lede"
            style={{ fontStyle: "italic", color: copperBright, margin: 0 }}
          >
            <span style={{ display: "block" }}>Altai builds the layer</span>
            <span style={{ display: "block" }}>the institution does not have.</span>
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
          .work-section { padding-top: 11vh; }
        }
      `}</style>
    </div>
  );
}
