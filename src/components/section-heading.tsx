import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  index: string;
  title: string;
  icon: LucideIcon;
  description?: string;
  className?: string;
}

export function SectionHeading({
  index,
  title,
  icon: Icon,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center gap-3">
        <span className="font-mono-label text-xs text-accent">{index}</span>
        <div className="h-px flex-1 bg-border" />
        <Icon className="size-4 text-muted-foreground" strokeWidth={1.75} />
      </div>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {description && (
        <p className="max-w-[600px] text-base text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
