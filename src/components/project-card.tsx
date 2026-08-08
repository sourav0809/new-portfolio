import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_0_1px_hsl(var(--accent)/0.3)]",
        className
      )}
    >
      <Link href={href || "#"} className="relative block cursor-pointer">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top grayscale-[15%] transition-all duration-500 group-hover:grayscale-0"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
      <div className="flex flex-1 flex-col gap-2 px-4 pt-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
          <Link
            href={href || "#"}
            target="_blank"
            className="mt-0.5 shrink-0 text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:text-accent-text"
          >
            <ArrowUpRightIcon className="size-4" />
          </Link>
        </div>
        <time className="font-mono-label text-xs tabular-nums text-accent-text">
          {dates}
        </time>
        <div className="hidden font-sans text-xs underline print:visible">
          {link?.replace("https://", "").replace("www.", "").replace("/", "")}
        </div>
        <Markdown className="prose prose-sm max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
      </div>
      <div className="mt-auto flex flex-col gap-3 px-4 pb-4 pt-3">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1.5 py-0.5 text-xs font-normal"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1.5 border-t border-border pt-3">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  variant="outline"
                  className="flex gap-1.5 px-2 py-1 text-xs transition-colors hover:border-accent hover:text-accent-text"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
