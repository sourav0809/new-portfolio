"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
    "voice-based note taking",
    "AI and image-based template creation",
    "goal suggestions",
    "therapy workflows",
    "patient tracking",
    "UI/UX redesign",
    "note-taking workflow",
    "lazy loading",
    "persistent state",
  ];

  let result = text;
  keywords.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    result = result.replace(
      regex,
      `<span class="font-semibold text-foreground">${word}</span>`
    );
  });

  return result;
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
  isCurrent?: boolean;
  isLast?: boolean;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  isCurrent,
  isLast,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(Boolean(isCurrent));

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

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

          {description && (
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
                {description.split("•").map((item, index) => {
                  const trimmed = item.trim();
                  if (!trimmed) return null;

                  return (
                    <li
                      key={index}
                      className="ml-4 list-disc leading-relaxed marker:text-accent"
                      dangerouslySetInnerHTML={{
                        __html: boldify(trimmed),
                      }}
                    />
                  );
                })}
              </motion.div>
              <button
                type="button"
                onClick={toggleExpanded}
                className="mt-2 inline-flex items-center gap-1 font-mono-label text-xs text-muted-foreground transition-colors hover:text-accent-text"
              >
                <PlusIcon
                  className={cn(
                    "size-3 transition-transform duration-300",
                    isExpanded && "rotate-45"
                  )}
                />
                {isExpanded ? "collapse" : "expand"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
