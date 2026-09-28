import { useEffect, useState } from "react";

export type Route = "about" | "drop" | "prelaunch";

function parseRoute(): Route {
  if (window.location.hash === "#/about") return "about";
  if (window.location.hash === "#/drop") return "drop";
  return "prelaunch";
}

export function useHashRoute(): [Route, (route: Route) => void] {
  const [route, setRoute] = useState<Route>(parseRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function navigate(next: Route) {
    const target = next === "about" ? "#/about" : next === "drop" ? "#/drop" : "#/";
    if (window.location.hash === target) {
      setRoute(next);
    } else {
      window.location.hash = target;
    }
  }

  return [route, navigate];
}
