"use client";

import { useDesktopMotion } from "@/hooks/use-desktop-motion";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const BOOT_LINES = [
  "initializing session...",
  "loading profile: sourav_pathak",
  "mounting work_experience[]",
  "compiling skills.json",
  "ready.",
];

export function BootLoader({ children }: { children: React.ReactNode }) {
  const isDesktopMotion = useDesktopMotion();
  const { play } = useSoundEffects();
  const [phase, setPhase] = useState<"idle" | "booting" | "done">("idle");
  const [lineIndex, setLineIndex] = useState(0);
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
      if (i >= BOOT_LINES.length) {
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
      setLineIndex(i);
      setProgress(Math.round(((i + 1) / BOOT_LINES.length) * 100));
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
          <div className="mx-auto flex w-full max-w-md flex-col gap-3 font-mono-label text-sm">
            {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
              <div key={line} className="flex items-center gap-2 text-foreground">
                <span className="text-accent-text">
                  {i === BOOT_LINES.length - 1 ? "$" : ">"}
                </span>
                <span>{line}</span>
                {i === lineIndex && i !== BOOT_LINES.length - 1 && (
                  <span className="animate-pulse text-accent-text">_</span>
                )}
              </div>
            ))}
            <div className="mt-2 h-px w-full bg-border">
              <div
                className="h-px bg-accent-text transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-right text-xs text-muted-foreground tabular-nums">
              {progress}%
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
