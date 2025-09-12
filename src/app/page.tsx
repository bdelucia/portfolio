"use client";
import BlurFade from "@/components/magicui/blur-fade";
import Navbar from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";
import { WordRotate } from "@/components/magicui/word-rotate";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Starfield } from "@/components/magicui/starfield";
import { PerformanceMonitor } from "@/components/performance-monitor";
import { useAnimations } from "@/contexts/AnimationContext";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { Switch } from "@/components/ui/switch";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
    const { theme: currentTheme, resolvedTheme, systemTheme } = useTheme();
    const { animationsEnabled, toggleAnimations } = useAnimations();
    const [mounted, setMounted] = useState(false);

    // Use resolvedTheme for consistent rendering, fallback to systemTheme
    const effectiveTheme = resolvedTheme || systemTheme || "light";

    // List of technology slugs for the icon cloud
    const slugs = [
        "react",
        "nextdotjs",
        "javascript",
        "shadcnui",
        "typescript",
        "nodedotjs",
        "python",
        "postgresql",
        "docker",
        "cplusplus",
        "dotnet",
        "archlinux",
        "linux",
        "github",
        "vite",
    ];

    // Generate icon URLs from the slugs
    const skillIconUrls = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
    );

    // Prevent hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    // Don't render until mounted to prevent hydration mismatch
    if (!mounted) {
        return (
            <main>
                <div className="flex flex-col min-h-[100dvh] bg-gray-50 dark:bg-gray-50/10 space-y-10 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-4 sm:mx-auto my-12 box-border p-8 rounded-lg relative overflow-hidden">
                    <div className="flex items-center justify-center min-h-[200px]">
                        <div className="text-lg">Loading...</div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <PerformanceMonitor />
            <Starfield />
            {/* Light theme background */}
            <div className="fixed inset-0 pointer-events-none dark:hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.1),transparent_50%)]"></div>
            </div>
            {/* Mobile navbar - positioned at top for better tab order */}
            <div className="max-[460px]:block hidden">
                <Navbar />
            </div>
            <div className="flex flex-col min-h-[100dvh] bg-gray-50 dark:bg-gray-50/10 space-y-10 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-4 sm:mx-auto my-12 box-border p-8 rounded-lg relative overflow-hidden">
                <ShineBorder
                    key={effectiveTheme}
                    borderWidth={3}
                    duration={20}
                    shineColor={
                        effectiveTheme === "dark"
                            ? ["#A07CFE", "#FE8FB5", "#FFBE7B"]
                            : "#000000"
                    }
                />
                <section id="hero">
                    <div className="mx-auto w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl space-y-8">
                        <div className="gap-2 grid grid-cols-5 justify-between max-[460px]:flex max-[460px]:flex-col max-[460px]:gap-4">
                            {/* Avatar for very small screens (above hero text) */}
                            <div
                                className="md:hidden col-span-full row-start-1 row-span-1 flex justify-center items-center mb-4"
                                tabIndex={0}
                                aria-label={`${DATA.name} profile picture`}
                            >
                                <BlurFade delay={BLUR_FADE_DELAY}>
                                    <Avatar className="size-20 border">
                                        <AvatarImage
                                            alt={`${DATA.name} profile picture`}
                                            src={"/me.png"}
                                            loading="lazy"
                                        />
                                        <AvatarFallback>
                                            {DATA.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                </BlurFade>
                            </div>
                            <section
                                id="hero-text"
                                className="col-start-2 col-span-3 row-start-2 row-span-1 text-center flex flex-col items-center justify-center"
                                aria-labelledby="hero-heading"
                                role="banner"
                            >
                                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                                    <h1
                                        id="hero-heading"
                                        className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                        tabIndex={0}
                                        aria-label={`Hi, I'm ${
                                            DATA.name.split(" ")[0]
                                        }, with a pinched fingers emoji`}
                                    >
                                        <button
                                            className="inline-block text-left bg-transparent border-none p-0 m-0 cursor-default focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded mr-2"
                                            tabIndex={0}
                                            aria-label="Greeting: Hi, I'm"
                                            type="button"
                                        >
                                            Hi, I&apos;m{" "}
                                        </button>
                                        <span
                                            className="inline-block mr-2"
                                            tabIndex={0}
                                            aria-label={`${
                                                DATA.name.split(" ")[0]
                                            }, my first name`}
                                            role="text"
                                        >
                                            <AuroraText>
                                                {DATA.name.split(" ")[0]}
                                            </AuroraText>
                                        </span>
                                        <motion.span
                                            id="pinchedFingers"
                                            className="inline-block"
                                            style={{
                                                transformOrigin: "left center",
                                            }}
                                            initial={{ rotate: 0, scale: 1 }}
                                            animate={
                                                animationsEnabled
                                                    ? {
                                                          rotate: [
                                                              0, -90, 0, -90, 0,
                                                          ],
                                                          scale: [
                                                              1, 1.05, 1, 1.05,
                                                              1,
                                                          ],
                                                      }
                                                    : { rotate: 0, scale: 1 }
                                            }
                                            transition={
                                                animationsEnabled
                                                    ? {
                                                          duration: 0.8,
                                                          repeat: Infinity,
                                                          repeatDelay: 2,
                                                          ease: "easeOut",
                                                          times: [
                                                              0, 0.2, 0.4, 0.6,
                                                              0.8,
                                                          ],
                                                      }
                                                    : {}
                                            }
                                            whileHover={
                                                animationsEnabled
                                                    ? {
                                                          rotate: [0, -90, 0],
                                                          scale: 1.1,
                                                          transition: {
                                                              duration: 0.3,
                                                          },
                                                      }
                                                    : {}
                                            }
                                            aria-label="Pinched fingers emoji"
                                            role="img"
                                            tabIndex={0}
                                        >
                                            🤌
                                        </motion.span>
                                    </h1>
                                </BlurFade>
                                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                                    <div className="flex flex-col gap-0 mt-2">
                                        <p
                                            className="md:text-lg"
                                            tabIndex={0}
                                            aria-label={`Professional description: ${DATA.description}`}
                                        >
                                            {DATA.description}
                                        </p>
                                        <BlurFade delay={BLUR_FADE_DELAY * 3}>
                                            <div
                                                tabIndex={0}
                                                aria-label={`Nicknames: ${DATA.nicknames.join(
                                                    ", "
                                                )}`}
                                                role="text"
                                            >
                                                <WordRotate
                                                    words={[...DATA.nicknames]}
                                                    className="inline text-left w-20 sm:w-24 md:w-28 md:text-lg leading-none"
                                                    duration={3000}
                                                />
                                            </div>
                                        </BlurFade>
                                    </div>
                                </BlurFade>
                            </section>
                            <div className="row-start-3 col-span-full row-span-3 max-[460px]:row-start-auto max-[460px]:col-span-auto max-[460px]:row-span-auto">
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    {/* About Section */}
                                    <div className="flex-1">
                                        <section
                                            id="about"
                                            aria-labelledby="about-heading"
                                            role="region"
                                        >
                                            <BlurFade
                                                delay={BLUR_FADE_DELAY * 2}
                                            >
                                                <h2
                                                    id="about-heading"
                                                    className="text-xl font-bold text-center"
                                                    tabIndex={0}
                                                >
                                                    About me:
                                                </h2>
                                            </BlurFade>
                                            {DATA.summarySections.map(
                                                (section, index) => (
                                                    <BlurFade
                                                        key={section.title}
                                                        delay={
                                                            BLUR_FADE_DELAY *
                                                            (2 + index)
                                                        }
                                                    >
                                                        <div
                                                            tabIndex={0}
                                                            aria-label={`About me: ${section.title}`}
                                                            role="article"
                                                            className="mb-6 last:mb-0"
                                                        >
                                                            <h3 className="text-lg font-semibold mb-1 text-foreground italic">
                                                                {section.title}
                                                            </h3>
                                                            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert indent-4">
                                                                {
                                                                    section.content
                                                                }
                                                            </Markdown>
                                                        </div>
                                                    </BlurFade>
                                                )
                                            )}
                                        </section>
                                    </div>

                                    {/* Profile Image */}
                                    <div
                                        className="flex-shrink-0"
                                        role="complementary"
                                        aria-label="Profile image"
                                    >
                                        <BlurFade delay={BLUR_FADE_DELAY}>
                                            {/* Avatar for mobile/tablet (hidden on md and up, but only xs and up) */}
                                            <div
                                                className="max-[460px]:flex md:hidden hidden justify-center items-center"
                                                tabIndex={0}
                                                aria-label={`${DATA.name} profile picture`}
                                            >
                                                <Avatar className="size-28 border">
                                                    <AvatarImage
                                                        alt={`${DATA.name} profile picture`}
                                                        src={"/me.png"}
                                                        loading="lazy"
                                                    />
                                                    <AvatarFallback>
                                                        {DATA.initials}
                                                    </AvatarFallback>
                                                </Avatar>
                                            </div>
                                            {/* Image for desktop (hidden on screens smaller than md) */}
                                            <div
                                                className="hidden md:block"
                                                tabIndex={0}
                                                aria-label={`${DATA.name} profile image`}
                                            >
                                                <Image
                                                    src={DATA.avatarUrl}
                                                    alt={`${DATA.name} profile image`}
                                                    width={400}
                                                    height={600}
                                                    className="h-auto w-[100%] rounded-lg"
                                                    priority={false}
                                                    loading="lazy"
                                                    sizes="(max-width: 1024px) 200px, 300px"
                                                    quality={85}
                                                />
                                            </div>
                                        </BlurFade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="work" aria-labelledby="work-heading" role="region">
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <BlurFade delay={BLUR_FADE_DELAY * 5}>
                            <h2
                                id="work-heading"
                                className="text-xl font-bold"
                                tabIndex={0}
                                aria-label="Work Experience section"
                            >
                                Work Experience
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
                                    period={`${work.start} - ${
                                        work.end ?? "Present"
                                    }`}
                                    description={work.description}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </section>
                <section
                    id="education"
                    aria-labelledby="education-heading"
                    role="region"
                >
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <BlurFade delay={BLUR_FADE_DELAY * 7}>
                            <h2
                                id="education-heading"
                                className="text-xl font-bold"
                                tabIndex={0}
                                aria-label="Education section"
                            >
                                Education
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
                <section
                    id="skills"
                    aria-labelledby="skills-heading"
                    role="region"
                >
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <BlurFade delay={BLUR_FADE_DELAY * 9}>
                            <div className="flex items-center justify-between">
                                <h2
                                    id="skills-heading"
                                    className="text-xl font-bold"
                                    tabIndex={0}
                                    aria-label="Skills section"
                                >
                                    Skills
                                </h2>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">
                                        Icon Cloud
                                    </span>
                                    <Switch
                                        checked={!animationsEnabled}
                                        onCheckedChange={(checked) => {
                                            toggleAnimations();
                                        }}
                                        aria-label="Toggle between icon cloud and badges view"
                                    />
                                    <span className="text-sm text-muted-foreground">
                                        Badges
                                    </span>
                                </div>
                            </div>
                        </BlurFade>
                        <BlurFade delay={BLUR_FADE_DELAY * 10}>
                            {animationsEnabled ? (
                                <div className="flex justify-center">
                                    <IconCloud images={skillIconUrls} />
                                </div>
                            ) : (
                                <div
                                    className="flex flex-wrap gap-1 justify-center w-[50%] mx-auto"
                                    role="list"
                                    aria-label="Technical skills list"
                                >
                                    {DATA.skills.map((skill, id) => (
                                        <BlurFade
                                            key={skill}
                                            delay={
                                                BLUR_FADE_DELAY * 11 + id * 0.05
                                            }
                                        >
                                            <div
                                                role="listitem"
                                                tabIndex={0}
                                                aria-label={`Skill: ${skill}`}
                                                className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                                            >
                                                <Badge key={skill}>
                                                    {skill}
                                                </Badge>
                                            </div>
                                        </BlurFade>
                                    ))}
                                </div>
                            )}
                        </BlurFade>
                    </div>
                </section>
                <section
                    id="projects"
                    aria-labelledby="projects-heading"
                    role="region"
                >
                    <div className="space-y-12 w-full py-12">
                        <BlurFade delay={BLUR_FADE_DELAY * 12}>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <div
                                        className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
                                        tabIndex={0}
                                        aria-label="Section badge: My Projects"
                                        role="text"
                                    >
                                        My Projects
                                    </div>
                                    <h2
                                        id="projects-heading"
                                        className="text-3xl font-bold tracking-tighter sm:text-5xl"
                                        tabIndex={0}
                                        aria-label="Projects section: Check out my latest work"
                                    >
                                        Check out my latest work
                                    </h2>
                                    <p
                                        className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                                        tabIndex={0}
                                        aria-label="Projects description: I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my most recent."
                                    >
                                        I&apos;ve worked on a variety of
                                        projects, from simple websites to
                                        complex web applications. Here are a few
                                        of my most recent.
                                    </p>
                                </div>
                            </div>
                        </BlurFade>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                            {DATA.projects.map((project, id) => (
                                <BlurFade
                                    key={project.title}
                                    delay={BLUR_FADE_DELAY * 13 + id * 0.05}
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
                <section
                    id="contact"
                    aria-labelledby="contact-heading"
                    role="region"
                >
                    <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                        <BlurFade delay={BLUR_FADE_DELAY * 17}>
                            <div className="space-y-3">
                                <div
                                    className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
                                    tabIndex={0}
                                    aria-label="Section badge: Contact"
                                    role="text"
                                >
                                    Contact
                                </div>
                                <h2
                                    id="contact-heading"
                                    className="text-3xl font-bold tracking-tighter sm:text-5xl"
                                    tabIndex={0}
                                    aria-label="Contact section"
                                >
                                    Get in Touch
                                </h2>
                                <p
                                    className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                                    tabIndex={0}
                                    aria-label={`Contact description: Want to chat? Just shoot me a DM with a direct question on LinkedIn or email me at ${DATA.contact.email}. I read every message sent to me and try to respond as soon as possible.`}
                                >
                                    Want to chat? Just shoot me a DM{" "}
                                    <Link
                                        href={DATA.contact.social.LinkedIn.url}
                                        className="text-blue-500 hover:underline"
                                    >
                                        with a direct question on LinkedIn
                                    </Link>{" "}
                                    or email me at{" "}
                                    <Link
                                        href={`mailto:${DATA.contact.email}`}
                                        className="text-blue-500 hover:underline"
                                    >
                                        {DATA.contact.email}
                                    </Link>
                                    . I read every message sent to me and try to
                                    respond as soon as possible.
                                </p>
                            </div>
                        </BlurFade>
                    </div>
                </section>
            </div>
            {/* Desktop navbar - positioned at bottom */}
            <div className="min-[460px]:block hidden">
                <Navbar />
            </div>
        </main>
    );
}
