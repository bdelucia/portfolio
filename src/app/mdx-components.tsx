import BlogCarousel from "@/features/blog/BlogCarousel";
import type { MDXComponents } from "mdx/types";

const components = {
    // Allows customizing built-in components, e.g. to add styling.
    carousel: ({ children }) => <BlogCarousel />,
} satisfies MDXComponents;

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return components;
}
