import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Download,
  Sparkles,
} from "lucide-react";

import BlurText from "@/components/BlurText";
import FadeContent from "@/components/FadeContent";
import ShinyText from "@/components/ShinyText";
import SpotlightCard from "@/components/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  aboutParagraphs,
  achievementBadges,
  achievementItems,
  certifications,
  closingHighlights,
  contactLinks,
  contactNeeds,
  educationRecords,
  endorsementNote,
  focusAreas,
  guidingPillars,
  heroStats,
  navigation,
  profilePoints,
  projectEntries,
  quickFacts,
  signatureHighlights,
  skillGroups,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <Badge
        variant="outline"
        className="h-8 rounded-full border-slate-900/10 bg-white/75 px-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-600"
      >
        {eyebrow}
      </Badge>
      <div className="space-y-3">
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-balance text-base leading-8 text-slate-600 md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

function App() {
  const linkedinLink = contactLinks.find((link) => link.label === "LinkedIn");
  const resumeLink = contactLinks.find((link) => link.label === "Resume");
  const EndorsementIcon = endorsementNote.icon;

  const opensNewTab = (href: string) =>
    href.startsWith("http") || href.endsWith(".pdf");

  return (
    <div className="relative isolate overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="grid-overlay absolute inset-0 opacity-60 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.22))]" />
        <div className="absolute left-[-8rem] top-[-4rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(16,63,61,0.18),transparent_66%)] blur-3xl" />
        <div className="absolute right-[-4rem] top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.2),transparent_68%)] blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(50,72,99,0.12),transparent_70%)] blur-3xl" />
      </div>

      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 md:px-8 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.35)] backdrop-blur-xl">
            <a
              href="#home"
              className="flex items-center gap-3 text-sm text-slate-700 transition hover:text-slate-950"
            >
              <span className="grid size-10 place-items-center rounded-full bg-slate-950 font-heading text-sm font-semibold tracking-[0.2em] text-white">
                HR
              </span>
              <span className="space-y-0.5">
                <span className="block font-semibold text-slate-950">
                  Harsh Ranjan
                </span>
                <span className="block text-xs uppercase tracking-[0.22em] text-slate-500">
                  Portfolio
                </span>
              </span>
            </a>

            <nav className="flex flex-wrap items-center justify-end gap-2 text-sm text-slate-600">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-slate-950/6 hover:text-slate-950"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-4 md:px-8 lg:px-10">
        <FadeContent blur duration={0.8}>
          <section
            id="home"
            className="grid gap-10 pb-16 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12 lg:pt-14"
          >
            <div className="space-y-8 lg:pt-6">
              <Badge
                variant="outline"
                className="h-9 rounded-full border-slate-900/10 bg-white/80 px-4 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-600"
              >
                Third Year | B.Tech | Information Technology
              </Badge>

              <div className="space-y-3">
                <h1 className="sr-only">
                  Harsh Ranjan, third-year B.Tech student specializing in
                  Information Technology
                </h1>
                <BlurText
                  text="Harsh Ranjan"
                  delay={180}
                  animateBy="letters"
                  className="font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.08em] text-slate-950 md:text-7xl"
                />
                <BlurText
                  text="Dedicated Information Technology student with a strong foundation in HTML, CSS, JavaScript, Python, SQL, and Java."
                  delay={42}
                  animateBy="words"
                  direction="bottom"
                  className="max-w-3xl font-heading text-xl leading-tight tracking-[-0.04em] text-slate-700 md:text-3xl"
                />
              </div>

              <p className="max-w-2xl text-balance text-base leading-8 text-slate-600 md:text-lg">
                I am an Information Technology student focused on improving my
                fundamentals, building meaningful projects, and preparing for
                internships and real-world software opportunities.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {resumeLink ? (
                  <a
                    href={resumeLink.href}
                    target={opensNewTab(resumeLink.href) ? "_blank" : undefined}
                    rel={
                      opensNewTab(resumeLink.href) ? "noreferrer" : undefined
                    }
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "h-12 rounded-full px-6 text-sm font-semibold shadow-[0_18px_40px_-24px_rgba(16,63,61,0.55)]",
                    )}
                  >
                    View resume
                    <Download className="size-4" />
                  </a>
                ) : null}

                {linkedinLink ? (
                  <a
                    href={linkedinLink.href}
                    target={opensNewTab(linkedinLink.href) ? "_blank" : undefined}
                    rel={
                      opensNewTab(linkedinLink.href) ? "noreferrer" : undefined
                    }
                    className={cn(
                      buttonVariants({ size: "lg", variant: "outline" }),
                      "h-12 rounded-full border-slate-900/12 bg-white/75 px-6 text-sm font-semibold backdrop-blur-md",
                    )}
                  >
                    LinkedIn profile
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : null}

                <a
                  href="#about"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "ghost" }),
                    "h-12 rounded-full px-6 text-sm font-semibold text-slate-700",
                  )}
                >
                  Explore profile
                  <ArrowRight className="size-4" />
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={opensNewTab(link.href) ? "_blank" : undefined}
                      rel={opensNewTab(link.href) ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:text-slate-950"
                    >
                      <Icon className="size-4" />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>

              <div className="rounded-[1.75rem] border border-white/70 bg-white/70 px-5 py-4 shadow-[0_18px_60px_-36px_rgba(15,23,42,0.3)] backdrop-blur-xl">
                <ShinyText
                  text="Focused on web development, strong fundamentals, and steady growth through projects, learning, and consistent practice."
                  speed={5}
                  color="#5e6778"
                  shineColor="#103f3d"
                  spread={150}
                  className="text-xs font-semibold uppercase tracking-[0.24em] md:text-sm"
                />
              </div>
            </div>

            <div className="space-y-5 lg:pl-6">
              <SpotlightCard
                className="border-slate-900/8 bg-slate-950 text-slate-50 shadow-[0_28px_80px_-42px_rgba(15,23,42,0.9)]"
                spotlightColor="rgba(245, 158, 11, 0.18)"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-3">
                    <Badge className="h-8 rounded-full bg-white/10 px-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white">
                      Profile card
                    </Badge>
                    <span className="grid size-10 place-items-center rounded-full bg-white/10 text-white">
                      <Camera className="size-5" />
                    </span>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4">
                    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
                      <div className="relative aspect-[4/5]">
                        <img
                          src="/harsh-profile.jpeg"
                          alt="Harsh Ranjan portrait"
                          className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent px-5 pb-5 pt-16">
                          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-slate-300">
                            Harsh Ranjan
                          </p>
                          <p className="mt-2 text-sm leading-7 text-slate-200">
                            Information Technology student focused on web
                            development, practical learning, and long-term
                            growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {heroStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-[1.25rem] border border-white/10 bg-white/6 p-4"
                      >
                        <p className="text-2xl font-semibold tracking-[-0.05em] text-white">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-sm text-slate-300">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard spotlightColor="rgba(16, 63, 61, 0.12)">
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-3">
                    <Badge
                      variant="outline"
                      className="h-8 rounded-full border-slate-900/10 bg-slate-950/4 px-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-600"
                    >
                      Quick snapshot
                    </Badge>
                    <Sparkles className="size-5 text-amber-600" />
                  </div>

                  <div className="space-y-4">
                    {quickFacts.map((fact) => (
                      <div key={fact.eyebrow} className="space-y-2">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                          {fact.eyebrow}
                        </p>
                        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                          {fact.value}
                        </h2>
                        <p className="text-sm leading-7 text-slate-600">
                          {fact.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {signatureHighlights.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="h-auto rounded-full border-slate-900/10 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </section>
        </FadeContent>

        <Separator className="bg-slate-900/10" />

        <FadeContent blur duration={0.75} delay={0.1}>
          <section
            id="about"
            className="grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
          >
            <SectionHeading
              eyebrow="About"
              title="A little about me, my background, and what I am working toward."
              description="I enjoy building my foundation step by step and turning academic learning into practical skills, projects, and long-term growth."
            />

            <div className="space-y-6">
              {aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-slate-600 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}

              <div className="grid gap-4 sm:grid-cols-2">
                {profilePoints.map((point) => (
                  <div
                    key={point.label}
                    className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_-38px_rgba(15,23,42,0.25)] backdrop-blur-xl"
                  >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      {point.label}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                      {point.value}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {point.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-[0_18px_60px_-38px_rgba(15,23,42,0.25)] backdrop-blur-xl">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Current strengths
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {achievementBadges.map((badge) => (
                      <Badge
                        key={badge}
                        variant="outline"
                        className="h-auto rounded-full border-slate-900/10 bg-slate-950/4 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-[0_18px_60px_-38px_rgba(15,23,42,0.25)] backdrop-blur-xl">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    What matters to me
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {guidingPillars.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="h-auto rounded-full border-slate-900/10 bg-slate-950/4 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeContent>

        <Separator className="bg-slate-900/10" />

        <FadeContent blur duration={0.75} delay={0.12}>
          <section id="skills" className="space-y-10 py-16">
            <SectionHeading
              eyebrow="Skills"
              title="Core technologies, subjects, and learning areas from the resume."
              description="These sections reflect what is already present in your resume while still leaving room for stronger project proof and deeper specialization later."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_-38px_rgba(15,23,42,0.25)] backdrop-blur-xl"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {group.title}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="h-auto rounded-full border-slate-900/10 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {focusAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <SpotlightCard key={area.title}>
                    <div className="space-y-4">
                      <span className="grid size-12 place-items-center rounded-2xl bg-slate-950 text-white">
                        <Icon className="size-5" />
                      </span>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-semibold tracking-[-0.05em] text-slate-950">
                          {area.title}
                        </h3>
                        <p className="text-sm leading-7 text-slate-600 md:text-base">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </section>
        </FadeContent>

        <Separator className="bg-slate-900/10" />

        <FadeContent blur duration={0.75} delay={0.16}>
          <section id="education" className="space-y-10 py-16">
            <SectionHeading
              eyebrow="Education"
              title="My academic path and the certifications that shaped my learning."
              description="A quick view of my education and the courses that have helped me strengthen my technical foundation so far."
            />

            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-4">
                {educationRecords.map((record) => (
                  <div
                    key={`${record.period}-${record.institution}`}
                    className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_-38px_rgba(15,23,42,0.25)] backdrop-blur-xl"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-2">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                          {record.period}
                        </p>
                        <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950">
                          {record.institution}
                        </h3>
                        <p className="text-sm font-medium text-slate-700">
                          {record.credential}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="h-auto rounded-full border-slate-900/10 bg-slate-950/4 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {record.result}
                      </Badge>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                      {record.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {certifications.map((certification) => (
                  <SpotlightCard
                    key={certification.title}
                    spotlightColor="rgba(245, 158, 11, 0.12)"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                            {certification.issuer}
                          </p>
                          <h3 className="text-2xl font-semibold tracking-[-0.05em] text-slate-950">
                            {certification.title}
                          </h3>
                        </div>
                        {certification.result ? (
                          <Badge className="h-auto rounded-full px-3 py-1.5 text-sm">
                            {certification.result}
                          </Badge>
                        ) : null}
                      </div>
                      <p className="text-sm leading-7 text-slate-600 md:text-base">
                        {certification.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {certification.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="h-auto rounded-full border-slate-900/10 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>
        </FadeContent>

        <Separator className="bg-slate-900/10" />

        <FadeContent blur duration={0.75} delay={0.18}>
          <section id="achievements" className="space-y-10 py-16">
            <SectionHeading
              eyebrow="Achievements"
              title="Highlights and milestones that reflect my progress so far."
              description="These points capture the certifications, academic performance, and project work I am building on as I grow."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {achievementItems.map((item) => {
                const Icon = item.icon;

                return (
                  <SpotlightCard
                    key={item.title}
                    spotlightColor="rgba(245, 158, 11, 0.12)"
                  >
                    <div className="space-y-4">
                      <span className="grid size-12 place-items-center rounded-2xl bg-slate-950 text-white">
                        <Icon className="size-5" />
                      </span>
                      <div className="space-y-2">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                          {item.title}
                        </p>
                        <h3 className="text-2xl font-semibold tracking-[-0.05em] text-slate-950">
                          {item.value}
                        </h3>
                        <p className="text-sm leading-7 text-slate-600">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_-38px_rgba(15,23,42,0.25)] backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white">
                    <EndorsementIcon className="size-5" />
                  </span>
                  <div className="space-y-3">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      {endorsementNote.title}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em] text-slate-950">
                      More complete, more personal, more credible.
                    </h3>
                    <p className="text-sm leading-7 text-slate-600 md:text-base">
                      {endorsementNote.summary}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_-38px_rgba(15,23,42,0.25)] backdrop-blur-xl">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Current highlights
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {closingHighlights.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="h-auto rounded-full border-slate-900/10 bg-slate-950/4 px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeContent>

        <Separator className="bg-slate-900/10" />

        <FadeContent blur duration={0.75} delay={0.2}>
          <section id="work" className="space-y-10 py-16">
            <SectionHeading
              eyebrow="Work"
              title="Projects and concept work that reflect what I am learning and building."
              description="My Rock Paper Scissor project is featured here along with concept case studies that reflect the kind of products I want to build next."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {projectEntries.map((project) => {
                const isActualProject = project.category === "Actual Project";

                return (
                  <SpotlightCard
                    key={project.title}
                    spotlightColor={
                      isActualProject
                        ? "rgba(245, 158, 11, 0.18)"
                        : "rgba(50, 72, 99, 0.14)"
                    }
                    className={
                      isActualProject
                        ? "border-slate-900/8 bg-slate-950 text-slate-50 shadow-[0_28px_80px_-42px_rgba(15,23,42,0.9)]"
                        : undefined
                    }
                  >
                    <div className="flex h-full flex-col gap-6">
                      <div
                        className={cn(
                          "rounded-[1.6rem] border p-5",
                          isActualProject
                            ? "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]"
                            : "border-slate-900/10 bg-[linear-gradient(180deg,rgba(16,63,61,0.06),rgba(255,255,255,0.8))]",
                        )}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p
                              className={cn(
                                "text-[0.72rem] font-semibold uppercase tracking-[0.24em]",
                                isActualProject
                                  ? "text-slate-400"
                                  : "text-slate-500",
                              )}
                            >
                              {project.previewCaption}
                            </p>
                            <h3
                              className={cn(
                                "mt-3 text-3xl font-semibold tracking-[-0.06em]",
                                isActualProject
                                  ? "text-white"
                                  : "text-slate-950",
                              )}
                            >
                              {project.previewMetric}
                            </h3>
                          </div>
                          <Badge
                            variant={isActualProject ? "secondary" : "outline"}
                            className={cn(
                              "h-8 rounded-full px-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em]",
                              isActualProject
                                ? "bg-white/10 text-white"
                                : "border-slate-900/10 bg-white/80 text-slate-600",
                            )}
                          >
                            {project.category}
                          </Badge>
                        </div>

                        <div className="mt-6 space-y-2">
                          {project.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className={cn(
                                "flex items-center gap-3 rounded-full px-3 py-2 text-sm",
                                isActualProject
                                  ? "border border-white/10 bg-white/6 text-slate-200"
                                  : "border border-slate-900/8 bg-white/80 text-slate-700",
                              )}
                            >
                              <span
                                className={cn(
                                  "size-2 shrink-0 rounded-full",
                                  isActualProject
                                    ? "bg-amber-300"
                                    : "bg-emerald-700",
                                )}
                              />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h3
                            className={cn(
                              "text-2xl font-semibold tracking-[-0.05em]",
                              isActualProject ? "text-white" : "text-slate-950",
                            )}
                          >
                            {project.title}
                          </h3>
                          <ArrowUpRight
                            className={cn(
                              "size-5 shrink-0",
                              isActualProject ? "text-slate-300" : "text-slate-500",
                            )}
                          />
                        </div>
                        <p
                          className={cn(
                            "text-sm leading-7 md:text-base",
                            isActualProject ? "text-slate-300" : "text-slate-600",
                          )}
                        >
                          {project.summary}
                        </p>
                        <p
                          className={cn(
                            "text-sm leading-7",
                            isActualProject ? "text-slate-400" : "text-slate-500",
                          )}
                        >
                          {project.impact}
                        </p>
                        <p
                          className={cn(
                            "rounded-2xl px-3 py-3 text-sm leading-6",
                            isActualProject
                              ? "border border-white/10 bg-white/6 text-slate-200"
                              : "border border-amber-200/80 bg-amber-50 text-amber-900",
                          )}
                        >
                          {project.note}
                        </p>
                      </div>

                      <div className="mt-auto space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className={cn(
                                "h-auto rounded-full px-3 py-1.5 text-sm font-medium",
                                isActualProject
                                  ? "border-white/10 bg-white/6 text-white"
                                  : "border-slate-900/10 bg-white/80 text-slate-700",
                              )}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {project.href ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                              buttonVariants({
                                size: "lg",
                                variant: isActualProject ? "secondary" : "outline",
                              }),
                              "h-11 rounded-full px-5 text-sm font-semibold",
                            )}
                          >
                            {project.ctaLabel}
                            <ArrowUpRight className="size-4" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </section>
        </FadeContent>

        <FadeContent blur duration={0.8} delay={0.24}>
          <section
            id="contact"
            className="rounded-[2rem] border border-slate-900/10 bg-slate-950 px-6 py-8 text-white shadow-[0_35px_90px_-48px_rgba(15,23,42,0.95)] md:px-8 md:py-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <div className="space-y-5">
                <Badge className="h-8 rounded-full bg-white/10 px-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white">
                  Contact
                </Badge>
                <div className="space-y-4">
                  <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                    Connect with Harsh and explore the full profile.
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                    If you would like to connect, feel free to reach out through
                    the links below. I am always open to learning
                    opportunities, internships, and meaningful collaboration.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {contactLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={opensNewTab(link.href) ? "_blank" : undefined}
                      rel={opensNewTab(link.href) ? "noreferrer" : undefined}
                      className="flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-white/6 p-5 transition hover:bg-white/10"
                    >
                      <div className="flex items-center gap-4">
                        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-white">
                          <Icon className="size-5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                            {link.label}
                          </p>
                          <p className="mt-1 text-sm text-slate-200">
                            {link.detail}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="size-5 shrink-0 text-slate-400" />
                    </a>
                  );
                })}

                <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Next goals
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {contactNeeds.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="h-auto rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeContent>
      </main>

      <footer className="mx-auto max-w-6xl px-6 pb-10 md:px-8 lg:px-10">
        <div className="flex flex-col gap-2 rounded-full border border-white/70 bg-white/70 px-5 py-4 text-sm text-slate-600 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.25)] backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <p>
            Harsh Ranjan | B.Tech Information Technology | Haldia Institute of
            Technology
          </p>
          <p>
            Crafted with React, Tailwind CSS, shadcn/ui, and motion-driven
            components.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
