"use client";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SwoopAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function SwoopAnimation({
    children,
    className = "",
    delay = 0,
}: SwoopAnimationProps) {
    const { ref, inView } = useScrollAnimation(delay);

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                y: 50,
                x: -30,
                rotateX: -15,
                scale: 0.9,
            }}
            animate={
                inView
                    ? {
                          opacity: 1,
                          y: 0,
                          x: 0,
                          rotateX: 0,
                          scale: 1,
                      }
                    : {}
            }
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth swoop
            }}
        >
            {children}
        </motion.div>
    );
}
