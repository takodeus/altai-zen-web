import { Link } from "@tanstack/react-router";

type HeaderProps = {
  theme?: "light" | "dark";
};

export function Header({ theme = "light" }: HeaderProps) {
  const color = theme === "dark" ? "#edeef0" : "var(--foreground)";
  const background = theme === "dark" ? "#1f2326" : "var(--background)";
  return (
    <header
      className="fixed top-0 left-0 right-0 z-10"
      style={{
        padding: "max(24px, 7vw)",
        paddingTop: "max(20px, 2.5vh)",
        paddingBottom: "max(16px, 2vh)",
        background,
      }}
    >
      <Link
        to="/"
        className="font-sans"
        style={{
          fontSize: "15px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontWeight: 500,
          color,
        }}
      >
        The Altai Group
      </Link>
    </header>
  );
}
