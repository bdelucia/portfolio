import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function BlogCarousel() {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem>Hello</CarouselItem>
                <CarouselItem>Its</CarouselItem>
                <CarouselItem>Me</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
