"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, Linkedin } from "lucide-react";
import { useState } from "react";

interface RecommendationCardProps {
  name: string;
  role: string;
  relationship: string;
  avatarUrl: string;
  recommendation: string;
  linkedinUrl?: string;
}

export function RecommendationCard({
  name,
  role,
  relationship,
  avatarUrl,
  recommendation,
  linkedinUrl,
}: RecommendationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split recommendation into paragraphs for proper spacing
  const paragraphs = recommendation
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  const previewParagraphs = paragraphs.slice(0, 1);
  const remainingParagraphs = paragraphs.slice(1);
  const hasMore = remainingParagraphs.length > 0;

  return (
    <div
      className="relative rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-border hover:shadow-md dark:hover:shadow-muted/5 overflow-hidden cursor-pointer"
      onClick={() => hasMore && setIsExpanded(!isExpanded)}
    >
      {/* Header: Avatar + Name + Role */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-start gap-3.5">
          <Avatar className="size-12 border border-border/60 shadow-sm flex-shrink-0">
            <AvatarImage alt={name} src={avatarUrl} className="object-cover" />
            <AvatarFallback className="text-xs font-semibold bg-muted">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-foreground leading-tight">
                {name}
              </h4>
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A66C2] hover:text-[#004182] transition-colors flex-shrink-0"
                  aria-label={`${name}'s LinkedIn profile`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="size-3.5" />
                </a>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
              {role}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{relationship}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px bg-border/40" />

      {/* Recommendation Text */}
      <div className="px-5 pt-3 pb-4">
        <div className="space-y-3">
          {/* Preview — first paragraph, always visible */}
          {previewParagraphs.map((para, i) => (
            <p key={i} className="text-sm leading-relaxed text-foreground">
              {para}
            </p>
          ))}

          {/* Expanded paragraphs — animated */}
          <AnimatePresence initial={false}>
            {isExpanded && remainingParagraphs.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-3">
                  {remainingParagraphs.map((para, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: i * 0.06,
                        ease: "easeOut",
                      }}
                      className="text-sm leading-relaxed text-foreground"
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Read More / Read Less Button */}
        {hasMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 flex items-center gap-1 text-xs font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 group"
          >
            <span className="underline underline-offset-2 decoration-foreground/30 group-hover:decoration-foreground/60 transition-colors">
              {isExpanded ? "Show less" : "Read full feedback"}
            </span>
            {isExpanded ? (
              <ChevronUp className="size-3.5 transition-transform" />
            ) : (
              <ChevronDown className="size-3.5 transition-transform" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
