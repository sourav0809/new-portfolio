"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDesktopMotion } from "@/hooks/use-desktop-motion";
import { DATA } from "@/data/resume";
import { gsap } from "gsap";
import { Download } from "lucide-react";
import { useEffect, useRef } from "react";

const ROLE_LINE = "Software Engineer / Building AI-native products";

export function HeroSection() {
  const isDesktopMotion = useDesktopMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isDesktopMotion || !rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.set(".hero-reveal", { opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)" })
        .set(".hero-avatar", { opacity: 0, scale: 0.9 })
        .to(".hero-eyebrow", {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.5,
        })
        .to(
          ".hero-name",
          { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.7 },
          "-=0.25"
        )
        .to(
          ".hero-role",
          { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.6 },
          "-=0.4"
        )
        .to(
          ".hero-desc",
          { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.6 },
          "-=0.35"
        )
        .to(
          ".hero-cta",
          { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.5 },
          "-=0.3"
        )
        .to(
          ".hero-avatar",
          { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.6)" },
          "-=0.9"
        );

      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.6,
        ease: "steps(1)",
      });
    }, rootRef);

    return () => ctx.revert();
  }, [isDesktopMotion]);

  const revealClass = isDesktopMotion ? "hero-reveal" : "";

  return (
    <div
      ref={rootRef}
      className="flex flex-col-reverse items-start gap-8 lg:flex-row lg:items-center lg:justify-between"
    >
      <div className="flex flex-1 flex-col gap-4">
        <p
          className={`hero-eyebrow ${revealClass} font-mono-label text-xs tracking-widest text-accent-text`}
        >
          <span className="text-muted-foreground">$</span> whoami
          <span ref={cursorRef} className="ml-1 text-accent-text">
            _
          </span>
        </p>
        <h1
          className={`hero-name ${revealClass} text-4xl font-bold tracking-tight text-balance sm:text-5xl xl:text-6xl`}
        >
          {DATA.name}
        </h1>
        <p
          className={`hero-role ${revealClass} font-mono-label text-sm text-muted-foreground sm:text-base`}
        >
          {ROLE_LINE}
        </p>
        <p
          className={`hero-desc ${revealClass} max-w-[560px] text-base text-muted-foreground md:text-lg`}
        >
          {DATA.description}
        </p>
        <a
          className={`hero-cta ${revealClass} group mt-2 flex w-fit items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent hover:text-accent-foreground`}
          href={DATA.contact.social.Resume.url}
          target="_blank"
        >
          <span>Resume</span>
          <Download
            size={16}
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          />
        </a>
      </div>
      <div className="hero-avatar shrink-0">
        <Avatar className="size-24 border-2 border-accent/40 shadow-[0_0_0_6px_hsl(var(--accent)/0.08)] sm:size-32">
          <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
