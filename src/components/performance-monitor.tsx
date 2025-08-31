"use client";

import { useEffect } from "react";

export function PerformanceMonitor() {
    useEffect(() => {
        // Only run on client side
        if (typeof window === "undefined") return;

        // Track Core Web Vitals
        const reportWebVitals = (metric: any) => {
            if (metric.label === "web-vital") {
                console.log("Performance Metric:", {
                    name: metric.name,
                    value: metric.value,
                    rating: metric.rating,
                    delta: metric.delta,
                    id: metric.id,
                });

                // Send to analytics if you have them
                // analytics.track('web-vital', metric);
            }
        };

        // Track connection speed
        const trackConnectionSpeed = () => {
            if ("connection" in navigator) {
                const connection = (navigator as any).connection;
                console.log("Connection Info:", {
                    effectiveType: connection.effectiveType,
                    downlink: connection.downlink,
                    rtt: connection.rtt,
                    saveData: connection.saveData,
                });
            }
        };

        // Track page load performance
        const trackPageLoad = () => {
            if ("performance" in window) {
                const perfData = performance.getEntriesByType(
                    "navigation"
                )[0] as PerformanceNavigationTiming;
                if (perfData) {
                    console.log("Page Load Performance:", {
                        domContentLoaded:
                            perfData.domContentLoadedEventEnd -
                            perfData.domContentLoadedEventStart,
                        loadComplete:
                            perfData.loadEventEnd - perfData.loadEventStart,
                        domInteractive: perfData.domInteractive,
                        firstPaint:
                            performance.getEntriesByName("first-paint")[0]
                                ?.startTime,
                        firstContentfulPaint: performance.getEntriesByName(
                            "first-contentful-paint"
                        )[0]?.startTime,
                    });
                }
            }
        };

        // Set up observers
        if ("PerformanceObserver" in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach(reportWebVitals);
            });
            observer.observe({ entryTypes: ["measure", "paint"] });
        }

        // Track initial metrics
        trackConnectionSpeed();

        // Track page load after a delay to ensure everything is loaded
        setTimeout(trackPageLoad, 1000);

        // Cleanup
        return () => {
            if ("PerformanceObserver" in window) {
                const observer = new PerformanceObserver(() => {});
                observer.disconnect();
            }
        };
    }, []);

    return null; // This component doesn't render anything
}
