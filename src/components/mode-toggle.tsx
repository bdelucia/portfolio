"use client";

import { buttonVariants } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const ModeToggle = forwardRef<HTMLButtonElement, {}>((props, ref) => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            ref={ref}
            type="button"
            className={cn(
                buttonVariants({
                    variant: "ghost",
                    size: "icon",
                }),
                "size-12 text-background"
            )}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setTheme(theme === "dark" ? "light" : "dark");
            }}
            {...props}
        >
            <SunIcon className="h-4 w-4 dark:hidden" />
            <MoonIcon className="hidden h-4 w-4 dark:block" />
        </button>
    );
});

ModeToggle.displayName = "ModeToggle";
