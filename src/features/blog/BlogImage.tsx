import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

interface BlogImageProps {
    src: string;
    alt: string;
    baseUrl?: string;
    className?: string;
    caption?: string;
}

export default function BlogImage({
    src,
    alt,
    baseUrl,
    className = "w-full h-auto rounded-lg",
    caption,
}: BlogImageProps) {
    // If src doesn't start with http, prepend the baseUrl
    const imageSrc = src.startsWith("http") ? src : `${baseUrl}${src}`;

    return (
        <Card>
            <CardContent className="p-1">
                <Image
                    src={imageSrc}
                    alt={alt}
                    className={className}
                    width={312}
                    height={416}
                />
            </CardContent>
            {caption && (
                <div className="flex italic items-center justify-center -my-8 -mt-10">
                    <p>{caption}</p>
                </div>
            )}
        </Card>
    );
}
