import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { RecommendationCard } from "@/components/recommendation-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import {
  BriefcaseIcon,
  Download,
  GraduationCapIcon,
  MessageSquareQuoteIcon,
  UserIcon,
  WrenchIcon,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.03;

export default function Page() {
  return (
    <>
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-3xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <a
                    className="flex items-center gap-2 mt-2 w-fit text-sm bg-black text-white px-4 py-1.5 dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-md  transition-all duration-300 ease-in-out"
                    href={DATA.contact.social.Resume.url}
                    target="_blank"
                  >
                    <span>Resume</span>
                    <Download size={16} />
                  </a>
                </BlurFade>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <UserIcon className="size-5" /> About Me
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>{DATA.summary}</BlurFade>
        </section>

        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <BriefcaseIcon className="size-5" /> Work Experience &
                Training
              </h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <WrenchIcon className="size-5" /> My Skills
              </h2>
            </BlurFade>
            {DATA.skillCategories.map((group, groupId) => (
              <BlurFade
                key={group.category}
                delay={BLUR_FADE_DELAY * 10 + groupId * 0.1}
              >
                <div className="space-y-1.5">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {group.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="recommendations">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="space-y-2">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <MessageSquareQuoteIcon className="size-5" /> LinkedIn
                  Recommendations
                </h2>
                <p className="text-sm text-muted-foreground max-w-[600px]">
                  Kind words from the people and teams I&apos;ve had the
                  privilege to collaborate with.
                </p>
              </div>
            </BlurFade>
            <div className="flex flex-col gap-4">
              {DATA.recommendations.map((rec, id) => (
                <BlurFade
                  key={rec.name}
                  delay={BLUR_FADE_DELAY * 14 + id * 0.1}
                >
                  <RecommendationCard
                    name={rec.name}
                    role={rec.role}
                    relationship={rec.relationship}
                    avatarUrl={rec.avatarUrl}
                    recommendation={rec.recommendation}
                    linkedinUrl={rec.linkedinUrl}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <GraduationCapIcon className="size-5" /> Education
              </h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a question? Send me a message on{" "}
                  <a
                    className="font-bold underline"
                    href="https://www.linkedin.com/in/devsourav"
                    target="_blank"
                  >
                    LinkedIn
                  </a>{" "}
                  and I’ll reply as soon as possible!
                  <br />
                  You can also email me at{" "}
                  <a
                    href="mailto:souravpathakatwork@gmail.com"
                    className="font-semibold underline"
                  >
                    souravpathakatwork@gmail.com
                  </a>
                  <br />
                  Looking forward to hearing from you! 😊
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  );
}
