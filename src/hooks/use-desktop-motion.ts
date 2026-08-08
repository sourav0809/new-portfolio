"use client";

import { useEffect, useState } from "react";

/**
 * Gates heavy scroll/load animation (GSAP, parallax, choreography) to
 * desktop viewports with no reduced-motion preference. Mobile always
 * renders instantly with no animation — matches touch/perf expectations.
 *
 * Returns null until the viewport has actually been measured (first
 * client render is always false pre-mount) — callers that need to avoid
 * racing the "undetermined" state (e.g. a one-shot boot sequence) should
 * treat null as "not ready yet" rather than "not desktop".
 */
export function useDesktopMotion() {
  const [enabled, setEnabled] = useState<boolean | null>(null);

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
