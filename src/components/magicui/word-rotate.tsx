"use client";

import { AnimatePresence, motion, MotionProps } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { useAnimations } from "@/contexts/AnimationContext";

interface WordRotateProps {
    words: string[];
    duration?: number;
    motionProps?: MotionProps;
    className?: string;
}

export function WordRotate({
    words,
    duration = 2500,
    motionProps = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
        transition: { duration: 0.25, ease: "easeOut" },
    },
    className,
}: WordRotateProps) {
    const { animationsEnabled } = useAnimations();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!animationsEnabled) return;

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);

        // Clean up interval on unmount
        return () => clearInterval(interval);
    }, [words, duration, animationsEnabled]);

    return (
        <div className="overflow-hidden py-2">
            {animationsEnabled ? (
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={words[index]}
                        className={cn(className)}
                        {...motionProps}
                    >
                        {words[index]}
                    </motion.h1>
                </AnimatePresence>
            ) : (
                <h1 className={cn(className)}>{words[0]}</h1>
            )}
        </div>
    );
}
