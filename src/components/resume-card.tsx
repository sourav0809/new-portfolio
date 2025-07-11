"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const boldify = (text: string) => {
  const keywords = [
    "Next.js",
    "90%",
    "ShadCN UI",
    "Gemini",
    "LangChain",
    "LangGraph",
    "LangSmith",
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
  ];

  let result = text;
  keywords.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    result = result.replace(
      regex,
      `<span class="font-medium text-foreground">${word}</span>`
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
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar
            className="border size-12 m-auto bg-muted-background dark:bg-foreground"
            onClick={() => {
              window?.open(href, "_blank");
            }}
          >
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
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
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm whitespace-normal w-full flex flex-col gap-x-1 gap-y-2"
            >
              {description.split("•").map((item, index) => {
                const trimmed = item.trim();
                if (!trimmed) return null;

                return (
                  <li
                    key={index}
                    className="leading-snug"
                    dangerouslySetInnerHTML={{
                      __html: boldify(trimmed),
                    }}
                  />
                );
              })}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
