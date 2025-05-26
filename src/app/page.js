import { ArrowRight, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";
import { MarqueeDemo } from "@/components/sections/marquee";

export default function Home() {
  return (<>
    <div className="relative flex items-center justify-center h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover object-[0%_100%] -z-10"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-10" />
      <div className="z-10 flex flex-col items-center justify-center text-white">
        <div className="mb-2 text-xl tracking-tight">Meet Rascals</div>
        <div className="mb-8 text-5xl tracking-tight text-center">Ready for every mess!</div>
        <div className="btn">Learn More <ArrowRight size={16} /></div>
      </div>
    </div>
    <div className="pl-[5%] py-20">
      <div className="mb-10 text-3xl tracking-tight text-cyan-950">Award-Winning Baby Products</div>
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className={cn(index == 4 && "mr-[5%]", "flex flex-col basis-[75%] md:basis-[30%]")} key={index}>
              <div data-aos='fade-up' data-aos-delay={100 * index} className="relative mb-4 h-73">
                <Image
                  src='/hero.jpg'
                  alt='product'
                  fill
                  className="object-cover rounded-md"
                />
                <div className="z-10 absolute bg-white/80 p-2 text-sm text-cyan-950 top-4 left-4 rounded-md">Up to 12 hours of leak protection</div>
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
                {/* <div className="text-sm tracking-tight underline text-cyan-950">4.58/5 based on 17749 reviews</div> */}
              </div>
              <div data-aos='fade-up' data-aos-delay={150 * index} data-aos-offset='-50' className="-mb-1 text-2xl tracking-tight text-cyan-950">Premium Diapers</div>
              <div data-aos='fade-up' data-aos-delay={175 * index} data-aos-offset='-50' className="mb-4 tracking-tight text-cyan-950">From $18.17</div>
              <div data-aos='fade-up' data-aos-delay={200 * index} data-aos-offset='-50' className="btn">Learn More <ArrowRight size={16} /></div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="!top-1/2 !right-[2.5%] !left-auto !-translate-y-full !translate-x-0" />
      </Carousel>
    </div>
    <div className="border-y border-neutral-200">
      <div className="grid lg:grid-cols-2">
        <div className="flex my-auto px-[10%] flex-col gap-6 md:py-0 py-20">
          <div className="text-3xl tracking-tight text-cyan-950">Award Winning Diapers</div>
          <p className="tracking-tight text-base/5 text-cyan-950">We get how important a good diaper is, and how disastrous a bad one can be.</p>
          <p className="tracking-tight text-base/5 text-cyan-950">That’s why Rascals Premium Diapers are engineered with 6 Core Innovations to be ultra absorbent and gentle on sensitive skin, meaning you can worry less about the mess!</p>
          <div className="btn">Shop for premium diapers<ArrowRight size={16} /></div>
        </div>
        <div className="relative h-[calc(100dvh-110px)] order-first lg:order-last">
          <Image fill src="/hero.jpg" alt="hero" className="object-cover" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="flex my-auto px-[10%] flex-col gap-6 md:py-0 py-20">
          <div className="text-3xl tracking-tight text-cyan-950">Ready to make change time easier?</div>
          <p className="tracking-tight text-base/5 text-cyan-950">We get how important a good diaper is, and how disastrous a bad one can be.</p>
          <p className="tracking-tight text-base/5 text-cyan-950">Engineered with 6 Core Innovations for a high-performing pant, Rascals CoComelon Training Pants will help to make change time easier.</p>
          <div className="btn">Shop for premium diapers<ArrowRight size={16} /></div>
        </div>
        <div className="relative h-[calc(100dvh-110px)] order-first">
          <Image fill src="/hero.jpg" alt="hero" className="object-cover" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="flex my-auto px-[10%]"></div>
        <div className="relative h-[calc(100dvh-110px)] order-first lg:order-last">
          <Image fill src="/hero.jpg" alt="hero" className="object-cover" />
        </div>
      </div>
    </div>
    <div className="min-h-[calc(100dvh-110px)] px-[10%] py-40">
      <div className="max-w-lg mx-auto mb-4 tracking-tight text-center text-5xl/16 md:text-7xl/20 text-cyan-950">210,000 5-Star Reviews Globally</div>
      <div className="mb-8 tracking-tight text-center text-cyan-950">Parents are happier with Rascals</div>
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        <div className="btn">All Reviews<ArrowRight size={16} /></div>
        <div className="btn !text-violet-400 !bg-transparent">Leave Your Own Review<ArrowRight size={16} /></div>
      </div>
      <MarqueeDemo />
    </div>
  </>)
}
