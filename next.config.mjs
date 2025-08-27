import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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
    },
    // Optionally, add any other Next.js config below
    experimental: {
        mdxRs: true,
    },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm],
    },

    extension: /\.(md|mdx)$/,
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
