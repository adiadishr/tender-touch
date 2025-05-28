import { ArrowDown, ArrowRight, Star, StarHalf } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useProducts } from "@/hooks/use-products";
import Link from "next/link";

export default function FeaturedProducts() {
  const products = useProducts();
  return (
    <div>
      <div className="mx-auto w-[90%] pt-20">
        <div className="text-3xl tracking-tight text-cyan-950">Award-Winning Baby Products</div>
      </div>
      <div className="pl-[5%] pb-20 pt-10">
        <Carousel className="w-full">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem className={cn(index == 4 && "mr-[5%]", "flex flex-col basis-[70%] sm:basis-[35%]")} key={index}>
                <div data-aos='fade-up' data-aos-delay={100 * index} className="relative mb-4 aspect-square">
                  <Image
                    src={product.src}
                    alt='product'
                    fill
                    className="object-cover rounded-md"
                  />
                  <div className="absolute z-10 p-2 text-sm rounded-md bg-white/80 text-cyan-950 top-4 left-4">{product.tagline}</div>
                </div>
                <div className="flex flex-col gap-2 mb-2 md:items-center md:flex-row">
                  <div className="flex gap-2">
                    {Array.from({ length: 5 }).map((_, subIndex) => {
                      return subIndex < 4 ? (
                        <Star key={subIndex} size={13} className="text-yellow-500" fill="oklch(79.5% 0.184 86.047)" />
                      ) : (
                        <StarHalf key={subIndex} size={13} className="text-yellow-500" fill="oklch(79.5% 0.184 86.047)" />
                      );
                    })}
                  </div>
                  <div className="text-sm tracking-tight underline text-cyan-950">4.58/5 based on 17749 reviews</div>
                </div>
                <div data-aos='fade-up' data-aos-delay={150 * index} data-aos-offset='-50' className="-mb-1 text-2xl tracking-tight text-cyan-950">{product.title}</div>
                <div data-aos='fade-up' data-aos-delay={175 * index} data-aos-offset='-50' className="mb-4 tracking-tight text-cyan-950">From ${product.price}</div>
                <Link href={`/products/${product.id}`} data-aos='fade-up' data-aos-delay={200 * index} data-aos-offset='-50' className="btn">Learn More <ArrowRight size={16} /></Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="!top-1/2 !right-[2.5%] !left-auto !-translate-y-full !translate-x-0" />
        </Carousel>
      </div>
    </div>
  )
}