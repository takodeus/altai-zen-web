import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-10"
      style={{ padding: "max(24px, 7vw)", paddingTop: "max(24px, 3vh)", paddingBottom: 0 }}
    >
      <Link
        to="/"
        className="font-serif"
        style={{ fontSize: "14px", letterSpacing: "0.05em" }}
      >
        ALTAI GROUP
      </Link>
    </header>
  );
}
