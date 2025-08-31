"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    animationDelay: number;
    animationDuration: number;
}

export function Starfield() {
    const { resolvedTheme } = useTheme();
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        if (resolvedTheme !== "dark") return;

        // Generate random stars
        const generateStars = () => {
            const newStars: Star[] = [];
            const starCount = 150; // Adjust this for more/fewer stars

            for (let i = 0; i < starCount; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100, // Percentage across screen
                    y: Math.random() * 100, // Percentage down screen
                    size: Math.random() * 2 + 1, // 1-3px
                    opacity: Math.random() * 0.8 + 0.2, // 0.2-1.0
                    animationDelay: Math.random() * 3, // 0-3s delay
                    animationDuration: Math.random() * 4 + 3, // 3-7s duration
                });
            }
            setStars(newStars);
        };

        generateStars();

        // Regenerate stars on window resize
        const handleResize = () => generateStars();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [resolvedTheme]);

    if (resolvedTheme !== "dark") return null;

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animationDelay: `${star.animationDelay}s`,
                        animationDuration: `${star.animationDuration}s`,
                    }}
                />
            ))}

            {/* Add some twinkling effect with CSS keyframes */}
            <style jsx>{`
                @keyframes twinkle {
                    0%,
                    100% {
                        opacity: 0.2;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.2);
                    }
                }

                .animate-pulse {
                    animation: twinkle var(--animation-duration, 3s) infinite;
                    animation-delay: var(--animation-delay, 0s);
                }
            `}</style>
        </div>
    );
}
