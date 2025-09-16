"use client";

import { useAnimations } from "@/contexts/AnimationContext";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";

export const AnimationToggle = () => {
    const { animationsEnabled, toggleAnimations } = useAnimations();

    const handleToggle = () => {
        console.log("Animation toggle clicked!", animationsEnabled);
        toggleAnimations();
    };

    return (
        <button
            onClick={handleToggle}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleToggle();
                }
            }}
            className={cn(
                buttonVariants({
                    variant: "ghost",
                    size: "icon",
                }),
                "size-12 text-background"
            )}
            aria-label={
                animationsEnabled
                    ? "Toggle Animations Button. The animations are currently on"
                    : "Toggle Animations Button. The animations are currently off"
            }
        >
            {animationsEnabled ? (
                <Pause className="size-4" />
            ) : (
                <Play className="size-4" />
            )}
        </button>
    );
};
