"use client";

import { useDesktopMotion } from "@/hooks/use-desktop-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

/**
 * Fades/slides children in as they enter the viewport via GSAP
 * ScrollTrigger — runs on both desktop and mobile. When the OS-level
 * prefers-reduced-motion setting is on, falls back to a plain CSS
 * opacity/translate fade via IntersectionObserver instead (no GSAP).
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
}: ScrollRevealProps) {
  const isDesktopMotion = useDesktopMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [isMobileVisible, setIsMobileVisible] = useState(false);

  useEffect(() => {
    if (!isDesktopMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [isDesktopMotion, delay, y]);

  useEffect(() => {
    if (isDesktopMotion || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMobileVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isDesktopMotion]);

  if (!isDesktopMotion) {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          opacity: isMobileVisible ? 1 : 0,
          transform: isMobileVisible ? "translateY(0)" : "translateY(8px)",
          transition: `opacity 0.4s ease-out ${delay}s, transform 0.4s ease-out ${delay}s`,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
