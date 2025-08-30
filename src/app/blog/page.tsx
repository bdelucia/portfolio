import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { BlogHeader } from "@/features/blog/BlogHeader";
import Footer from "@/features/blog/Footer";
import Link from "next/link";

export const metadata = {
    title: "Blog",
    description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <div className="flex flex-col h-screen">
            <BlogHeader title="Bob with a Blog" scrollProgress={true} />

            <div className="flex-1 min-h-screen">
                <section className="px-4 py-4 rounded-lg bg-gray-50 dark:bg-gray-50/10 max-w-4xl mx-auto my-24">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                            blog
                        </h1>
                    </BlurFade>
                    {posts
                        .sort((a, b) => {
                            if (
                                new Date(a.metadata.publishedAt) >
                                new Date(b.metadata.publishedAt)
                            ) {
                                return -1;
                            }
                            return 1;
                        })
                        .map((post, id) => (
                            <BlurFade
                                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                                key={post.slug}
                            >
                                <Link
                                    className="flex flex-col space-y-1 mb-4"
                                    href={`/blog/${post.slug}`}
                                >
                                    <div className="w-full flex flex-col">
                                        <p className="tracking-tight">
                                            {post.metadata.title}
                                        </p>
                                        <p className="h-6 text-xs text-muted-foreground">
                                            {post.metadata.publishedAt}
                                        </p>
                                    </div>
                                </Link>
                            </BlurFade>
                        ))}
                </section>
            </div>

            <Footer />
        </div>
    );
}
