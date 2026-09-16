import { useEffect, useState } from "react";

export type Route = "about" | "drop";

function parseRoute(): Route {
  return window.location.hash === "#/about" ? "about" : "drop";
}

export function useHashRoute(): [Route, (route: Route) => void] {
  const [route, setRoute] = useState<Route>(parseRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function navigate(next: Route) {
    const target = next === "about" ? "#/about" : "#/drop";
    if (window.location.hash === target) {
      setRoute(next);
    } else {
      window.location.hash = target;
    }
  }

  return [route, navigate];
}
