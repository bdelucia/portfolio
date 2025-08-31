"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AnimationContextType {
    animationsEnabled: boolean;
    toggleAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
    undefined
);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
    const [animationsEnabled, setAnimationsEnabled] = useState(true);

    // Load animation preference from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem("animationsEnabled");
        if (saved !== null) {
            setAnimationsEnabled(JSON.parse(saved));
        }
    }, []);

    // Save animation preference to localStorage when it changes
    useEffect(() => {
        localStorage.setItem(
            "animationsEnabled",
            JSON.stringify(animationsEnabled)
        );
    }, [animationsEnabled]);

    const toggleAnimations = () => {
        setAnimationsEnabled((prev) => !prev);
    };

    return (
        <AnimationContext.Provider
            value={{ animationsEnabled, toggleAnimations }}
        >
            {children}
        </AnimationContext.Provider>
    );
}

export function useAnimations() {
    const context = useContext(AnimationContext);
    if (context === undefined) {
        throw new Error(
            "useAnimations must be used within an AnimationProvider"
        );
    }
    return context;
}
