import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { RecommendationCard } from "@/components/recommendation-card";
import { ResumeCard } from "@/components/resume-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import {
  BriefcaseIcon,
  GraduationCapIcon,
  MailIcon,
  MessageSquareQuoteIcon,
  UserIcon,
  WrenchIcon,
} from "lucide-react";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-3xl flex-col gap-20 px-6 py-16 sm:py-24">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about" className="flex flex-col gap-6">
        <SectionHeading index="01" title="About" icon={UserIcon} />
        <ScrollReveal>{DATA.summary}</ScrollReveal>
      </section>

      <section id="work" className="flex flex-col gap-8">
        <SectionHeading
          index="02"
          title="Work Experience & Training"
          icon={BriefcaseIcon}
        />
        <div className="flex flex-col">
          {DATA.work.map((work, id) => (
            <ScrollReveal key={work.company + work.title} delay={id * 0.05}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                isCurrent={work.end === "Present"}
                isLast={id === DATA.work.length - 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="skills" className="flex flex-col gap-6">
        <SectionHeading index="03" title="Skills" icon={WrenchIcon} />
        <div className="flex flex-col gap-5">
          {DATA.skillCategories.map((group, groupId) => (
            <ScrollReveal key={group.category} delay={groupId * 0.06}>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <h3 className="w-full shrink-0 font-mono-label text-xs uppercase tracking-wider text-accent-text sm:w-40">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm px-2.5 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="projects" className="flex flex-col gap-6">
        <SectionHeading
          index="04"
          title="Projects"
          icon={BriefcaseIcon}
          description="A few things I've built, from full-stack apps to internal tools."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <ScrollReveal key={project.title} delay={id * 0.05}>
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
                className="h-full"
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="recommendations" className="flex flex-col gap-6">
        <SectionHeading
          index="05"
          title="Recommendations"
          icon={MessageSquareQuoteIcon}
          description="Kind words from the people and teams I've had the privilege to collaborate with."
        />
        <div className="flex flex-col gap-4">
          {DATA.recommendations.map((rec, id) => (
            <ScrollReveal key={rec.name} delay={id * 0.06}>
              <RecommendationCard
                name={rec.name}
                role={rec.role}
                relationship={rec.relationship}
                avatarUrl={rec.avatarUrl}
                recommendation={rec.recommendation}
                linkedinUrl={rec.linkedinUrl}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="education" className="flex flex-col gap-8">
        <SectionHeading index="06" title="Education" icon={GraduationCapIcon} />
        <div className="flex flex-col">
          {DATA.education.map((education, id) => (
            <ScrollReveal key={education.school} delay={id * 0.05}>
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                isLast={id === DATA.education.length - 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="contact" className="flex flex-col items-start gap-6 pb-8">
        <SectionHeading index="07" title="Get in Touch" icon={MailIcon} />
        <ScrollReveal className="w-full">
          <div className="rounded-lg border border-border bg-card px-6 py-8 sm:px-10 sm:py-10">
            <p className="max-w-[520px] text-muted-foreground md:text-lg">
              Have a question? Send me a message on{" "}
              <a
                className="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-text"
                href="https://www.linkedin.com/in/devsourav"
                target="_blank"
              >
                LinkedIn
              </a>{" "}
              and I&rsquo;ll reply as soon as possible, or email me directly at{" "}
              <a
                href="mailto:souravpathakatwork@gmail.com"
                className="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-text"
              >
                souravpathakatwork@gmail.com
              </a>
              .
            </p>
            <p className="mt-4 font-mono-label text-xs text-muted-foreground">
              <span className="text-accent-text">$</span> status --looking-forward-to-hearing-from-you
            </p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
