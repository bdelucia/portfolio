"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            type="button"
            size="icon"
            className="px-2 group"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <SunIcon className="h-[1.2rem] w-[1.2rem] text-background group-hover:text-foreground dark:hidden dark:text-neutral-200 dark:group-hover:text-background" />
            <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-background group-hover:text-foreground dark:block dark:text-background dark:group-hover:text-neutral-200" />
        </Button>
    );
}
