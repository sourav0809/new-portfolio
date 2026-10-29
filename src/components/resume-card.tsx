"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRightIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const boldify = (text: string) => {
  const keywords = [
    "Next.js",
    "90%",
    "Lambda",
    "SQS",
    "ShadCN UI",
    "Gemini",
    "LangChain",
    "LangGraph",
    "LangSmith",
    "10 minutes",
    "Internal PR reviewer",
    "Mentor Activity Tracker",
    "Zero Downtime Deployment",
    "AI-powered communication task",
    "CSS Compiler",
    "Task Page UI/UX",
    "live chat support",
    "Interactive Guide",
    "Dynamic Feedback Forms",
    "microservice",
    "Material UI",
    "Tailwind CSS",
    "React Native CLI",
    "Firebase notifications",
    "mobile app from Expo",
    "$900 annually",
    "cron jobs for automated tracking",
    "increase user retention by 60 %",
    "45%",
    "40%",
    "60%",
    "AWS Lambda",
    "SQS",
    "API Gateway",
    "Bento Grid Layout",
    "25+",
    "~90%",
    "~40%",
    "clinical documentation module",
    "automatic retries",
    "Sentry-based logging and monitoring",
    "AI voice-to-note engine",
    "Whisper and Claude",
    "most-used features on the platform",
    "configurable template builder",
    "tables, images, checkboxes, and custom sections",
    "AI-powered goal management system",
    "personalized goal recommendations",
    "Goals Library",
    "documentation UI/UX",
    "web and mobile (iOS and Android)",
    "lazy loading",
    "persistent state management",
  ];

  // Single pass, longest first, so overlapping keywords (e.g. "Lambda" inside
  // "AWS Lambda") don't produce nested or broken spans.
  const pattern = Array.from(new Set(keywords))
    .sort((a, b) => b.length - a.length)
    .map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

  return text.replace(
    new RegExp(`(${pattern})`, "gi"),
    `<span class="font-semibold text-foreground">$1</span>`
  );
};
interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  /** Several roles at the same company, shown under one entry. */
  roles?: readonly { title: string; period: string; description?: string }[];
  isCurrent?: boolean;
  isLast?: boolean;
}

const Bullets = ({ description }: { description: string }) => (
  <>
    {description.split("•").map((item, index) => {
      const trimmed = item.trim();
      if (!trimmed) return null;

      return (
        <li
          key={index}
          className="ml-4 list-disc leading-relaxed marker:text-muted-foreground"
          dangerouslySetInnerHTML={{
            __html: boldify(trimmed),
          }}
        />
      );
    })}
  </>
);
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  roles,
  isCurrent,
  isLast,
}: ResumeCardProps) => {
  const hasDetails = Boolean(description || roles?.some((role) => role.description));
  const [isExpanded, setIsExpanded] = React.useState(Boolean(isCurrent));
  const { play } = useSoundEffects();

  const toggleExpanded = () => {
    play(isExpanded ? "collapse" : "expand");
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative flex gap-4 sm:gap-5">
      <div className="flex flex-col items-center">
        <Avatar
          className={cn(
            "size-10 border bg-card sm:size-11",
            isCurrent && "border-accent ring-2 ring-accent/20"
          )}
        >
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
        {!isLast && <div className="mt-2 w-px flex-1 bg-border" />}
      </div>

      <div className="flex-1 pb-8">
        <div className="group">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="inline-flex flex-wrap items-center gap-2 text-base font-semibold sm:text-lg">
              {href ? (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => play("hover")}
                  onClick={() => play("click")}
                  className="inline-flex items-center gap-1 hover:text-accent-text transition-colors"
                >
                  {title}
                  <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-colors group-hover:text-accent-text" />
                </Link>
              ) : (
                title
              )}
              {isCurrent && (
                <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-1.5 py-px font-mono-label text-[10px] font-medium uppercase tracking-wide text-accent-text align-middle">
                  <span className="size-1 rounded-full bg-accent-text" />
                  Current
                </span>
              )}
              {badges && (
                <span className="inline-flex gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
            </h3>
            <div className="font-mono-label text-sm tabular-nums text-muted-foreground">
              {period}
            </div>
          </div>
          {subtitle && (
            <div className="mt-0.5 text-sm text-muted-foreground sm:text-base">
              {subtitle}
            </div>
          )}
          {roles && (
            <div className="mt-0.5 text-sm text-muted-foreground sm:text-base">
              {roles.map((role) => role.title).join(" · ")}
            </div>
          )}

          {hasDetails && (
            <>
              <motion.div
                initial={false}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-3 flex w-full flex-col gap-y-2.5 overflow-hidden text-sm sm:text-base"
              >
                {description && <Bullets description={description} />}
                {roles?.map((role, index) => (
                  <div
                    key={role.title}
                    className={cn("flex flex-col gap-y-2.5", index > 0 && "mt-3")}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <span className="font-semibold text-foreground">{role.title}</span>
                      <span className="font-mono-label text-xs tabular-nums text-muted-foreground">
                        {role.period}
                      </span>
                    </div>
                    {role.description && <Bullets description={role.description} />}
                  </div>
                ))}
              </motion.div>
              <button
                type="button"
                onClick={toggleExpanded}
                className="mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <PlusIcon
                  className={cn(
                    "size-3 transition-transform duration-300",
                    isExpanded && "rotate-45"
                  )}
                />
                {isExpanded ? "Hide details" : "Show details"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
