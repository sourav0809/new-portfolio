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
      className="group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-accent/50"
      onClick={() => hasMore && setIsExpanded(!isExpanded)}
    >
      {/* Quote mark accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-3 font-mono-label text-4xl leading-none text-accent/10 transition-colors duration-300 group-hover:text-accent/20"
      >
        &rdquo;
      </span>

      {/* Header: Avatar + Name + Role */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-start gap-3.5">
          <Avatar className="size-12 border border-border shadow-sm flex-shrink-0">
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
              <h4 className="text-base font-semibold text-foreground leading-tight">
                {name}
              </h4>
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent-text transition-colors flex-shrink-0"
                  aria-label={`${name}'s LinkedIn profile`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="size-3.5" />
                </a>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
              {role}
            </p>
            <p className="mt-1 font-mono-label text-xs text-accent-text">
              {relationship}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px bg-border" />

      {/* Recommendation Text */}
      <div className="px-5 pt-3 pb-4">
        <div className="space-y-3">
          {/* Preview — first paragraph, always visible */}
          {previewParagraphs.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-foreground">
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
                      className="text-base leading-relaxed text-foreground"
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
            className="mt-3 flex items-center gap-1 font-mono-label text-xs font-medium text-muted-foreground hover:text-accent-text transition-colors duration-200 group"
          >
            <span className="underline underline-offset-2 decoration-muted-foreground/30 group-hover:decoration-accent/60 transition-colors">
              {isExpanded ? "show_less()" : "read_more()"}
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
