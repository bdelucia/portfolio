import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogCarousel from "@/features/blog/BlogCarousel";
import Table from "@/features/blog/Table";
import BlogImage from "@/features/blog/BlogImage";
import { BLOG_IMGS_URL } from "@/data/blog";
import { BlogHeader } from "@/features/blog/BlogHeader";
import Footer from "@/features/blog/Footer";

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
        BlogCarousel: (props: any) => (
            <BlogCarousel {...props} baseUrl={BLOG_IMGS_URL} />
        ),
        Table: (props: any) => <Table {...props} />,
        BlogImage: (props: any) => (
            <BlogImage {...props} baseUrl={BLOG_IMGS_URL} />
        ),
    };

    return (
        <div className="flex flex-col h-screen">
            <BlogHeader />

            <div className="flex-1">
                <section
                    id="blog"
                    className="px-4 py-4 rounded-lg bg-gray-50 dark:bg-gray-50/10 max-w-4xl mx-auto"
                >
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
                    <article className="prose dark:prose-invert max-w-[650px] mx-auto">
                        <MDXRemote
                            source={post.source}
                            components={components}
                        />
                    </article>
                </section>
            </div>

            <Footer />
        </div>
    );
}
