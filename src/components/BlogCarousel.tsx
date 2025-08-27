import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface BlogCarouselProps {
    images?: string[];
}

export default function BlogCarousel({ images = [] }: BlogCarouselProps) {
    // If no images provided, don't render anything
    if (images.length === 0) return;

    // If only one image, render without navigation arrows
    if (images.length === 1) {
        return (
            <div className="w-full max-w-xs">
                <Card>
                    <CardContent className="p-1">
                        <img
                            src={images[0]}
                            alt="Carousel image"
                            className="w-full h-auto rounded-lg"
                        />
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Multiple images - render with carousel navigation
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="p-1">
                                    <img
                                        src={image}
                                        alt={`Carousel image ${index + 1}`}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
