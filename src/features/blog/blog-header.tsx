"use client";

import { ScrollProgress } from "@/components/magicui/scroll-progress";
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
                "sticky top-0 z-40 w-full h-16 bg-background/80 backdrop-blur-sm border-b border-border",
                className
            )}
        >
            {/* Header content */}
            <div className="flex items-center justify-center h-full px-6">
                <Link
                    href="/blog"
                    className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "text-sm font-medium"
                    )}
                >
                    ← Back to Blog
                </Link>
            </div>

            {/* Scroll Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0">
                <ScrollProgress />
            </div>
        </header>
    );
}
