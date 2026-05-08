import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // On every route change, jump to the top of the next page.
    // Instant rather than smooth: the next page should appear at the top,
    // not scroll into view from below.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return <Outlet />;
}
