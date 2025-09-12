import { useInView } from "react-intersection-observer";

export const useScrollAnimation = (delay: number = 0) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return {
        ref,
        inView,
        delay,
    };
};
