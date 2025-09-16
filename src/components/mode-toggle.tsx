"use client";

import { buttonVariants } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme();

    const handleToggle = () => {
        console.log("Theme toggle clicked!", theme);
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            type="button"
            className={cn(
                buttonVariants({
                    variant: "ghost",
                    size: "icon",
                }),
                "size-12 text-background"
            )}
            onClick={handleToggle}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleToggle();
                }
            }}
            aria-label={`Change Theme Button. The theme is currently ${
                theme === "dark" ? "dark" : "light"
            }`}
        >
            <SunIcon className="h-4 w-4 dark:hidden" />
            <MoonIcon className="hidden h-4 w-4 dark:block" />
        </button>
    );
};
