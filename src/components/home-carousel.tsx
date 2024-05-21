'use client'
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function HomeCarousel() {
  return (
    <Carousel
      // opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <Image
            src="https://utfs.io/f/4fa451d5-5141-46e5-a4cc-d7df38fedf38-sgti3d.webp"
            alt="carousel item"
            width={1224}
            height={508}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="https://utfs.io/f/90c5a194-4179-4926-89c0-e135f61f92a0-al40mp.webp"
            alt="carousel item"
            width={1224}
            height={508}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="https://utfs.io/f/0338e105-3a9a-46fb-9174-c206d04683cb-24sqqx.webp"
            alt="carousel item"
            width={1224}
            height={508}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="https://utfs.io/f/c1915548-5a6a-4e43-aeae-6468f802dc41-uykgto.webp"
            alt="carousel item"
            width={1224}
            height={508}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
