import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        providerImportSource: "@mdx-js/react",
    },
});

const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
};

export default withMDX(nextConfig);
