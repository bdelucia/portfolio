"use client";

import { motion } from "framer-motion";

export function WavingHand() {
    return (
        <motion.span
            style={{
                display: "inline-block",
                transformOrigin: "70% 70%",
                cursor: "pointer",
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            whileHover={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smoother motion
                times: [0, 0.2, 0.4, 0.6, 0.8, 1.0], // Control timing of each keyframe
            }}
        >
            👋
        </motion.span>
    );
}
