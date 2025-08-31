"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
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

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
    const theme = useTheme();
    return (
        <main>
            <div className="flex flex-col min-h-[100dvh] bg-gray-50 dark:bg-gray-50/10 space-y-10 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-4 sm:mx-auto my-12 box-border p-8 rounded-lg relative overflow-hidden">
                <ShineBorder
                    shineColor={
                        theme.theme === "dark"
                            ? ["#A07CFE", "#FE8FB5", "#FFBE7B"]
                            : "gray"
                    }
                />
                <section id="hero">
                    <div className="mx-auto w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl space-y-8">
                        <div className="gap-2 grid grid-cols-5 justify-between max-[460px]:flex max-[460px]:flex-col max-[460px]:gap-4">
                            {/* Avatar for very small screens (above hero text) */}
                            <div className="xs:hidden col-span-full row-start-1 row-span-1 flex justify-center items-center mb-4">
                                <BlurFade delay={BLUR_FADE_DELAY}>
                                    <Avatar className="size-20 border">
                                        <AvatarImage
                                            alt={DATA.name}
                                            src={"/me.png"}
                                        />
                                        <AvatarFallback>
                                            {DATA.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                </BlurFade>
                            </div>
                            <section
                                id="hero-text"
                                className="col-span-3 row-start-0 row-span-1"
                            >
                                <div className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Hi, I&apos;m{" "}
                                    {
                                        <AuroraText>
                                            {DATA.name.split(" ")[0]}
                                        </AuroraText>
                                    }{" "}
                                    <motion.span
                                        id="pinchedFingers"
                                        className="inline-block"
                                        style={{
                                            transformOrigin: "left center",
                                        }}
                                        initial={{ rotate: 0, scale: 1 }}
                                        animate={{
                                            rotate: [0, -90, 0, -90, 0],
                                            scale: [1, 1.05, 1, 1.05, 1],
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            repeat: Infinity,
                                            repeatDelay: 2,
                                            ease: "easeOut",
                                            times: [0, 0.2, 0.4, 0.6, 0.8],
                                        }}
                                        whileHover={{
                                            rotate: [0, -90, 0],
                                            scale: 1.1,
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        🤌
                                    </motion.span>
                                </div>
                                <div className="flex flex-col gap-0">
                                    <span className="md:text-lg">
                                        {DATA.description}
                                    </span>
                                    <WordRotate
                                        words={[...DATA.nicknames]}
                                        className="inline text-left w-20 sm:w-24 md:w-28 md:text-lg leading-none"
                                        duration={3000}
                                    />
                                </div>
                            </section>
                            <div className="row-start-2 col-span-full xs:col-span-5 md:col-span-3 row-span-3 max-[460px]:row-start-auto max-[460px]:col-span-auto max-[460px]:row-span-auto">
                                <section id="about">
                                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                                        <h2 className="text-xl font-bold">
                                            About
                                        </h2>
                                    </BlurFade>
                                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                                        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                                            {DATA.summary}
                                        </Markdown>
                                    </BlurFade>
                                </section>
                            </div>
                            <div className="col-start-4 col-span-2 row-span-1 md:row-span-5 max-[460px]:col-start-auto max-[460px]:col-span-auto max-[460px]:row-span-auto">
                                <BlurFade delay={BLUR_FADE_DELAY}>
                                    {/* Avatar for mobile/tablet (hidden on md and up, but only xs and up) */}
                                    <div className="xs:flex md:hidden hidden justify-center items-center">
                                        <Avatar className="size-28 border">
                                            <AvatarImage
                                                alt={DATA.name}
                                                src={"/me.png"}
                                            />
                                            <AvatarFallback>
                                                {DATA.initials}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                    {/* Image for desktop (hidden on screens smaller than md) */}
                                    <div className="hidden md:block">
                                        <Image
                                            src={DATA.avatarUrl}
                                            alt={DATA.name}
                                            width={1242}
                                            height={2208}
                                            className="h-auto w-[100%] rounded-lg"
                                        />
                                    </div>
                                </BlurFade>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="work">
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <BlurFade delay={BLUR_FADE_DELAY * 5}>
                            <h2 className="text-xl font-bold">
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
                <section id="education">
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <BlurFade delay={BLUR_FADE_DELAY * 7}>
                            <h2 className="text-xl font-bold">Education</h2>
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
                <section id="skills">
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <BlurFade delay={BLUR_FADE_DELAY * 9}>
                            <h2 className="text-xl font-bold">Skills</h2>
                        </BlurFade>
                        <div className="flex flex-wrap gap-1">
                            {DATA.skills.map((skill, id) => (
                                <BlurFade
                                    key={skill}
                                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                                >
                                    <Badge key={skill}>{skill}</Badge>
                                </BlurFade>
                            ))}
                        </div>
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
                <section id="contact">
                    <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                        <BlurFade delay={BLUR_FADE_DELAY * 16}>
                            <div className="space-y-3">
                                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                    Contact
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Get in Touch
                                </h2>
                                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Want to chat? Just shoot me a DM{" "}
                                    <Link
                                        href={DATA.contact.social.LinkedIn.url}
                                        className="text-blue-500 hover:underline"
                                    >
                                        with a direct question on LinkedIn
                                    </Link>{" "}
                                    and I&apos;ll respond whenever I can.
                                </p>
                            </div>
                        </BlurFade>
                    </div>
                </section>
            </div>
            <Navbar />
        </main>
    );
}
