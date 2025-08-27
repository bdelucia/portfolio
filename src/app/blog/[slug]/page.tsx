import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogCarousel from "@/components/BlogCarousel";
import Table from "@/components/Table";

// Import the BLOG_IMGS_URL constant
const BLOG_IMGS_URL = `https://pub-22e36f870e1647a6a48e07c2fa9d9ae8.r2.dev/`;

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: {
        slug: string;
    };
}): Promise<Metadata | undefined> {
    let post = await getPost(params.slug);

    let {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata;
    let ogImage = image
        ? `${DATA.url}${image}`
        : `${DATA.url}/og?title=${title}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `${DATA.url}/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

export default async function Blog({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    let post = await getPost(params.slug);

    if (!post) {
        notFound();
    }

    // Define MDX components directly
    const components = {
        BlogCarousel,
        Table,
        // Make BLOG_IMGS_URL available as a component
        BLOG_IMGS_URL: () => <span>{BLOG_IMGS_URL}</span>,
        // Create a component that can be used to build image URLs
        ImageUrl: ({ path }: { path: string }) => (
            <span>{`${BLOG_IMGS_URL}${path}`}</span>
        ),
        // Create a component that renders an image with the base URL
        RecipeImage: ({
            src,
            alt,
            className = "my-6 rounded-lg",
        }: {
            src: string;
            alt: string;
            className?: string;
        }) => (
            <img
                src={src.startsWith("http") ? src : `${BLOG_IMGS_URL}${src}`}
                alt={alt}
                className={className}
            />
        ),
    };

    return (
        <section id="blog">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: post.metadata.title,
                        datePublished: post.metadata.publishedAt,
                        dateModified: post.metadata.publishedAt,
                        description: post.metadata.summary,
                        image: post.metadata.image
                            ? `${DATA.url}${post.metadata.image}`
                            : `${DATA.url}/og?title=${post.metadata.title}`,
                        url: `${DATA.url}/blog/${post.slug}`,
                        author: {
                            "@type": "Person",
                            name: DATA.name,
                        },
                    }),
                }}
            />
            <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
                {post.metadata.title}
            </h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
                <Suspense fallback={<p className="h-5" />}>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {formatDate(post.metadata.publishedAt)}
                    </p>
                </Suspense>
            </div>
            <article className="prose dark:prose-invert max-w-[650px]">
                <MDXRemote source={post.source} components={components} />
            </article>
        </section>
    );
}
