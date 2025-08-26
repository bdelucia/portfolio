import type { MDXComponents } from "mdx/types";
import BlogCarousel from "./components/BlogCarousel";

const components: MDXComponents = { BlogCarousel };

export function useMDXComponents(): MDXComponents {
    return components;
}
