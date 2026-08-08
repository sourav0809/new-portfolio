"use client";

import { useEffect, useState } from "react";

/**
 * Gates GSAP/scroll/load animation and sound to devices with no
 * reduced-motion preference. Runs on both desktop and mobile — the name
 * is legacy from when this was desktop-only; kept to avoid touching every
 * call site for a rename.
 *
 * Returns null until the preference has actually been read (first client
 * render is always null pre-mount) — callers that need to avoid racing the
 * "undetermined" state (e.g. a one-shot boot sequence) should treat null
 * as "not ready yet" rather than "disabled".
 */
export function useDesktopMotion() {
  const [enabled, setEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setEnabled(!motionQuery.matches);
    update();

    motionQuery.addEventListener("change", update);
    return () => {
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}
