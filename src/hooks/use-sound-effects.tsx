"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDesktopMotion } from "@/hooks/use-desktop-motion";

type SoundKind = "hover" | "click" | "toggle" | "expand" | "collapse";

interface SoundContextValue {
  play: (kind: SoundKind) => void;
  enabled: boolean;
  supported: boolean;
  toggle: () => void;
}

const SoundContext = createContext<SoundContextValue | null>(null);

const STORAGE_KEY = "sound-enabled";

/** Short synthesized blips via WebAudio oscillators — no audio files to ship. */
function playTone(
  ctx: AudioContext,
  {
    freq,
    duration,
    type = "sine",
    gain = 0.05,
  }: { freq: number; duration: number; type?: OscillatorType; gain?: number }
) {
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  g.gain.setValueAtTime(gain, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
  osc.connect(g);
  g.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const isDesktopMotion = useDesktopMotion();
  const [enabled, setEnabled] = useState(true);
  const [supported, setSupported] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "AudioContext" in window);
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "false") setEnabled(false);
  }, []);

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    if (ctxRef.current.state === "suspended") {
      ctxRef.current.resume();
    }
    return ctxRef.current;
  }, []);

  const play = useCallback(
    (kind: SoundKind) => {
      if (!enabled || !isDesktopMotion || !supported) return;
      const ctx = getCtx();

      switch (kind) {
        case "hover":
          playTone(ctx, { freq: 1400, duration: 0.06, gain: 0.16, type: "sine" });
          break;
        case "click":
          playTone(ctx, { freq: 720, duration: 0.1, gain: 0.32, type: "square" });
          break;
        case "toggle":
          playTone(ctx, { freq: 880, duration: 0.12, gain: 0.28, type: "triangle" });
          break;
        case "expand":
          playTone(ctx, { freq: 520, duration: 0.11, gain: 0.24, type: "sine" });
          break;
        case "collapse":
          playTone(ctx, { freq: 340, duration: 0.11, gain: 0.24, type: "sine" });
          break;
      }
    },
    [enabled, isDesktopMotion, supported, getCtx]
  );

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      window.localStorage.setItem(STORAGE_KEY, String(next));
      if (next) getCtx();
      return next;
    });
  }, [getCtx]);

  const value = useMemo(
    () => ({ play, enabled: enabled && Boolean(isDesktopMotion), supported, toggle }),
    [play, enabled, isDesktopMotion, supported, toggle]
  );

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}

export function useSoundEffects() {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    throw new Error("useSoundEffects must be used within a SoundProvider");
  }
  return ctx;
}
