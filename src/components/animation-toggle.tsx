"use client";

import { useAnimations } from "@/contexts/AnimationContext";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";
import { forwardRef } from "react";

export const AnimationToggle = forwardRef<HTMLButtonElement, {}>(
    (props, ref) => {
        const { animationsEnabled, toggleAnimations } = useAnimations();

        const handleToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
            e.preventDefault();
            e.stopPropagation();
            toggleAnimations();
        };

        return (
            <button
                ref={ref}
                onClick={handleToggle}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        handleToggle(e);
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
                {...props}
            >
                {animationsEnabled ? (
                    <Pause className="size-4" />
                ) : (
                    <Play className="size-4" />
                )}
            </button>
        );
    }
);

AnimationToggle.displayName = "AnimationToggle";
