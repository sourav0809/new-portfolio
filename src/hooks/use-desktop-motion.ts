"use client";

import { useEffect, useState } from "react";

/**
 * Gates heavy scroll/load animation (GSAP, parallax, choreography) to
 * desktop viewports with no reduced-motion preference. Mobile always
 * renders instantly with no animation — matches touch/perf expectations.
 */
export function useDesktopMotion() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setEnabled(desktopQuery.matches && !motionQuery.matches);
    update();

    desktopQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    return () => {
      desktopQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}
