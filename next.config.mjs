/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure images to allow external domains
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pub-22e36f870e1647a6a48e07c2fa9d9ae8.r2.dev",
                port: "",
                pathname: "/**",
            },
        ],
        // Enable modern image formats
        formats: ["image/webp", "image/avif"],
        // Optimize image quality
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // Enable image optimization
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    },
    // Performance optimizations
    compress: true,
    poweredByHeader: false,
};

export default nextConfig;
