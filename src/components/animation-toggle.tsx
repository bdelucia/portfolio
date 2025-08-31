"use client";

import { useAnimations } from "@/contexts/AnimationContext";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";
import { forwardRef } from "react";

export const AnimationToggle = forwardRef<HTMLButtonElement, {}>(
    (props, ref) => {
        const { animationsEnabled, toggleAnimations } = useAnimations();

        return (
            <button
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleAnimations();
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
                        ? "Disable animations"
                        : "Enable animations"
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
