"use client";

import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

interface BlogHeaderProps {
    className?: string;
    title?: string;
    scrollProgress?: boolean;
}

export function BlogHeader({
    className,
    title,
    scrollProgress,
}: BlogHeaderProps) {
    return (
        <header
            className={cn(
                "fixed top-0 z-40 w-full h-16 bg-foreground/90 dark:bg-foreground/90 backdrop-blur-sm border-b border-border",
                className
            )}
            style={{ height: "64px" }}
        >
            <div className="flex items-center justify-between h-full px-6">
                {/* Left section - empty for balance */}
                <div className="w-20">
                    <BackToPortfolioButton />
                </div>

                {/* Center section - Back to Blog button */}
                <Link
                    href="/blog"
                    className={cn(
                        buttonVariants({ variant: "outline", size: "default" }),
                        "text-lg font-medium"
                    )}
                >
                    {title ?? "← Back to Blog"}
                </Link>

                {/* Right section - ModeToggle */}
                <div className="w-20 flex justify-end">
                    <ModeToggle />
                </div>
            </div>

            {scrollProgress && (
                <div className="absolute bottom-0 left-0 right-0">
                    <ScrollProgress className="top-[64px]" />
                </div>
            )}
        </header>
    );
}

function BackToPortfolioButton() {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button className="bg-background">
                    <Link href="/" className="text-foreground">
                        <ArrowLeftIcon className="h-4 w-4" />
                    </Link>
                </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
                <p>Back to Portfolio</p>
            </TooltipContent>
        </Tooltip>
    );
}
