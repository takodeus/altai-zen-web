import { Link } from "react-router-dom";

type FooterProps = {
  topLink?: { to: string; label: string };
};

export function Footer({ topLink }: FooterProps) {
  return (
    <footer
      style={{
        paddingTop: "1.5vh",
        paddingBottom: "4vh",
        paddingLeft: "max(24px, 7vw)",
        paddingRight: "max(24px, 7vw)",
      }}
    >
      {topLink && (
        <p
          className="font-serif"
          style={{
            fontSize: "15px",
            fontStyle: "italic",
            color: "var(--copper-bright)",
            margin: 0,
            marginBottom: "8px",
          }}
        >
          <Link to={topLink.to} style={{ color: "inherit", textDecoration: "none" }}>
            {topLink.label}
          </Link>
        </p>
      )}
      <p
        className="t-meta"
        style={{
          color: "var(--foreground)",
          opacity: 0.55,
          margin: 0,
        }}
      >
        {"\u00A9"} 2026 The Altai Group
      </p>
    </footer>
  );
}
