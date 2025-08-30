"use client";

import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BlogHeaderProps {
    className?: string;
}

export function BlogHeader({ className }: BlogHeaderProps) {
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
                <div className="w-20"></div>

                {/* Center section - Back to Blog button */}
                <Link
                    href="/blog"
                    className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "text-sm font-medium"
                    )}
                >
                    ← Back to Blog
                </Link>

                {/* Right section - ModeToggle */}
                <div className="w-20 flex justify-end">
                    <ModeToggle />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <ScrollProgress className="top-[64px]" />
            </div>
        </header>
    );
}
