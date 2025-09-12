"use client";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import React from "react";
import { ShinyButton } from "./magicui/shiny-button";
import { useAnimations } from "@/contexts/AnimationContext";

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
    const [isExpanded, setIsExpanded] = React.useState(false);
    const { animationsEnabled } = useAnimations();
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const handleExpandClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    // Control video playback based on animations setting
    React.useEffect(() => {
        if (videoRef.current && video) {
            if (animationsEnabled) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [animationsEnabled, video]);

    return (
        <Card
            className={
                "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
            }
            role="article"
            aria-labelledby={`project-title-${title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
        >
            <Link
                href={href || "#"}
                className={cn("block cursor-pointer", className)}
                tabIndex={-1}
                aria-hidden="true"
            >
                {video && (
                    <video
                        ref={videoRef}
                        src={video}
                        autoPlay={animationsEnabled}
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
                        aria-hidden="true"
                    />
                )}
                {image && (
                    <Image
                        src={image}
                        alt=""
                        width={400}
                        height={240}
                        className="h-40 w-full overflow-hidden object-cover object-top"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        quality={80}
                        aria-hidden="true"
                    />
                )}
            </Link>
            <CardHeader className="px-2">
                <div className="space-y-1">
                    <div className="flex items-center justify-between">
                        <CardTitle
                            id={`project-title-${title
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                            className="mt-1 text-base"
                        >
                            {title}
                        </CardTitle>
                        <button
                            onClick={handleExpandClick}
                            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            aria-label={`${
                                isExpanded ? "Collapse" : "Expand"
                            } ${title} project details`}
                            aria-expanded={isExpanded}
                            tabIndex={0}
                        >
                            <ChevronRightIcon
                                className={cn(
                                    "size-4 transition-transform duration-300 ease-out",
                                    isExpanded ? "rotate-90" : "rotate-0"
                                )}
                            />
                        </button>
                    </div>
                    <time
                        className="font-sans text-xs"
                        aria-label={`Project dates: ${dates}`}
                        tabIndex={0}
                    >
                        {dates}
                    </time>
                    <div className="hidden font-sans text-xs underline print:visible">
                        {link
                            ?.replace("https://", "")
                            .replace("www.", "")
                            .replace("/", "")}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: isExpanded ? 1 : 0,
                            height: isExpanded ? "auto" : 0,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                        aria-hidden={!isExpanded}
                    >
                        <div
                            tabIndex={isExpanded ? 0 : -1}
                            role="text"
                            aria-label={`${title} project description: ${description}`}
                        >
                            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                                {description}
                            </Markdown>
                        </div>
                    </motion.div>
                </div>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col px-2">
                {tags && tags.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: isExpanded ? 1 : 0,
                            height: isExpanded ? "auto" : 0,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mt-2 flex flex-wrap gap-1 overflow-hidden"
                        aria-hidden={!isExpanded}
                        role="list"
                        aria-label={`${title} project technologies`}
                        tabIndex={isExpanded ? 0 : -1}
                    >
                        {tags?.map((tag) => (
                            <Badge
                                className="px-1 py-0 text-[10px]"
                                variant="secondary"
                                key={tag}
                                role="listitem"
                                aria-label={`Technology: ${tag}`}
                                tabIndex={isExpanded ? 0 : -1}
                            >
                                {tag}
                            </Badge>
                        ))}
                    </motion.div>
                )}
            </CardContent>
            <CardFooter className="px-2 pb-2">
                {links && links.length > 0 && (
                    <div
                        className="flex flex-row flex-wrap items-start gap-1"
                        role="list"
                        aria-label={`${title} project links`}
                    >
                        {links?.map((link, idx) => (
                            <Link
                                href={link?.href}
                                key={idx}
                                target="_blank"
                                aria-label={`${title} ${link.type} link`}
                                role="listitem"
                            >
                                <Badge
                                    key={idx}
                                    className="flex gap-2 px-2 py-1 text-[10px]"
                                >
                                    {link.icon}
                                    {link.type}
                                </Badge>
                            </Link>
                        ))}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
