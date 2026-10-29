"use client";

import { DATA } from "@/data/resume";
import { useDesktopMotion } from "@/hooks/use-desktop-motion";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const BOOT_STEPS = 5;

export function BootLoader({ children }: { children: React.ReactNode }) {
  const isDesktopMotion = useDesktopMotion();
  const { play } = useSoundEffects();
  const [phase, setPhase] = useState<"idle" | "booting" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    if (isDesktopMotion === null) return; // motion preference not read yet
    hasRun.current = true;

    if (!isDesktopMotion) {
      setPhase("done");
      return;
    }

    if (window.sessionStorage.getItem("booted") === "true") {
      setPhase("done");
      return;
    }

    setPhase("booting");
  }, [isDesktopMotion]);

  useEffect(() => {
    if (phase !== "booting") return;

    let cancelled = false;
    const runLine = (i: number) => {
      if (cancelled) return;
      if (i >= BOOT_STEPS) {
        window.sessionStorage.setItem("booted", "true");
        gsap.to(overlayRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.6,
          ease: "power3.inOut",
          delay: 0.25,
          onComplete: () => setPhase("done"),
        });
        return;
      }
      setProgress(Math.round(((i + 1) / BOOT_STEPS) * 100));
      play("expand");
      setTimeout(() => runLine(i + 1), 260);
    };

    runLine(0);
    return () => {
      cancelled = true;
    };
  }, [phase, play]);

  return (
    <>
      {phase === "booting" && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex flex-col justify-center bg-background px-8"
          style={{ clipPath: "inset(0 0 0% 0)" }}
        >
          <div className="mx-auto flex w-48 flex-col items-center gap-4">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              {DATA.name}
            </span>
            <div className="h-px w-full bg-border">
              <div
                className="h-px bg-accent-text transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
