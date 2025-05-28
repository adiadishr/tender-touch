import { ArrowDown, ArrowRight, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";
import { MarqueeDemo } from "@/components/sections/marquee";
import Link from "next/link";
import FAQ from "@/components/sections/faq";
import { featured_products } from "@/constants/featured-products";
import FeaturedProducts from "@/components/sections/featured-products";

export default function Home() {
  return (<>
    {/* Hero */}
    <div className="relative flex items-center justify-center h-[calc(100dvh-30px)] mt-[30px]">
      <video
        className="absolute inset-0 w-full h-full object-cover object-[0%_100%] -z-10"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-10" />
      <div className="z-10 flex flex-col items-center justify-center text-white translate-y-[65%] md:translate-y-1/2">
        <div className="mb-2 text-xl tracking-tight">Meet Rascals</div>
        <div className="mb-8 text-5xl tracking-tight text-center">Ready for every mess!</div>
        <div className="btn">Learn More <ArrowRight size={16} /></div>
      </div>
      <div className="absolute flex items-center gap-2 text-xs text-white rotate-90 md:text-sm -right-8 md:right-0 top-1/2">Scroll to see more<ArrowRight size={16} /></div>
    </div>
    {/* Featured Products */}
    <FeaturedProducts />
    {/* Grid */}
    <div className="border-b border-neutral-200">
      {/* Collections */}
      <div className="mx-auto w-[90%] pt-10 pb-20 md:pt-20 md:pb-10 relative z-10 text-cyan-950">
        <div className="mb-4 text-3xl tracking-tight text-center md:text-left">Our Collections</div>
        <div className="max-w-lg mx-auto mb-6 tracking-tight text-center text-base/6 md:text-left md:mx-0">We offer a complete range of hygiene and care products, designed to deliver comfort, protection, and care for your every need.</div>
        <div className="flex items-center justify-center w-full gap-4 md:justify-start">
          <Link href="/products" className="btn">View All Products<ArrowRight size={16} /></Link>
          <div className="bg-transparent btn border-violet-600 text-violet-600">Scroll to see more<ArrowDown size={16} /></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="flex my-auto px-[5%] md:px-[10%] flex-col gap-6 md:py-0 py-20">
          <div className="text-3xl tracking-tight text-cyan-950">Award Winning Diapers</div>
          <p className="tracking-tight text-base/5 text-cyan-950">We get how important a good diaper is, and how disastrous a bad one can be.</p>
          <p className="tracking-tight text-base/5 text-cyan-950">That&apos;s why Rascals Premium Diapers are engineered with 6 Core Innovations to be ultra absorbent and gentle on sensitive skin, meaning you can worry less about the mess!</p>
          <Link href="/products/premium-diapers" className="btn">Shop for premium diapers<ArrowRight size={16} /></Link>
        </div>
        <div className="relative md:h-[calc(100dvh-110px)] h-80 order-first lg:order-last">
          <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-10" />
          <Image fill src="/premium-diapers.avif" alt="hero" className="object-cover -z-10" />
          <div className="absolute flex items-center gap-2 text-xs text-white rotate-90 md:text-sm -right-4 md:right-0 top-1/2">Scroll to see more<ArrowRight size={16} /></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="flex my-auto px-[5%] md:px-[10%] flex-col gap-6 md:py-0 py-20">
          <div className="text-3xl tracking-tight text-cyan-950">Ready to make change time easier?</div>
          <p className="tracking-tight text-base/5 text-cyan-950">We get how important a good diaper is, and how disastrous a bad one can be.</p>
          <p className="tracking-tight text-base/5 text-cyan-950">Engineered with 6 Core Innovations for a high-performing pant, Rascals CoComelon Training Pants will help to make change time easier.</p>
          <Link href="/products/super-saver-pack" className="btn">Shop for premium diapers<ArrowRight size={16} /></Link>
        </div>
        <div className="relative md:h-[calc(100dvh-110px)] h-80 order-first">
          <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-10" />
          <Image fill src="/super-saver-pack.avif" alt="hero" className="object-cover -z-10" />
          <div className="absolute flex items-center gap-2 text-xs text-white rotate-90 w-max h-max md:text-sm -right-4 md:left-0 top-1/2">Scroll to see more<ArrowRight size={16} /></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="flex my-auto px-[5%] md:px-[10%] flex-col gap-6 md:py-0 py-20">
          <div className="text-3xl tracking-tight text-cyan-950">Ready to make change time easier?</div>
          <p className="tracking-tight text-base/5 text-cyan-950">We get how important a good diaper is, and how disastrous a bad one can be.</p>
          <p className="tracking-tight text-base/5 text-cyan-950">Engineered with 6 Core Innovations for a high-performing pant, Rascals CoComelon Training Pants will help to make change time easier.</p>
          <div className="btn">Shop for premium diapers<ArrowRight size={16} /></div>
        </div>
        <div className="relative md:h-[calc(100dvh-110px)] h-80 order-first lg:order-last">
          <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-10" />
          <Image fill src="/hero.jpg" alt="hero" className="object-cover -z-10" />
          <div className="absolute flex items-center gap-2 text-xs text-white rotate-90 md:text-sm -right-4 md:right-0 top-1/2">Scroll to see more<ArrowRight size={16} /></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="flex my-auto px-[5%] md:px-[10%] flex-col gap-6 md:py-0 py-20">
          <div className="text-3xl tracking-tight text-cyan-950">Ready to make change time easier?</div>
          <p className="tracking-tight text-base/5 text-cyan-950">We get how important a good diaper is, and how disastrous a bad one can be.</p>
          <p className="tracking-tight text-base/5 text-cyan-950">Engineered with 6 Core Innovations for a high-performing pant, Rascals CoComelon Training Pants will help to make change time easier.</p>
          <div className="btn">Shop for premium diapers<ArrowRight size={16} /></div>
        </div>
        <div className="relative md:h-[calc(100dvh-110px)] h-80 order-first">
          <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-10" />
          <Image fill src="/hero.jpg" alt="hero" className="object-cover -z-10" />
          <div className="absolute flex items-center gap-2 text-xs text-white rotate-90 md:text-sm -right-4 md:right-0 top-1/2">Scroll to see more<ArrowRight size={16} /></div>
        </div>
      </div>
    </div>
    {/* Testimonials */}
    <div className="w-[90%] mx-auto py-20 md:pt-40">
      <div className="max-w-lg mx-auto mb-4 tracking-tight text-center text-5xl/16 md:text-7xl/20 text-cyan-950">210,000 5-Star Reviews Globally</div>
      <div className="mb-8 tracking-tight text-center text-cyan-950">Parents are happier with Rascals</div>
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        <div className="btn">All Reviews<ArrowRight size={16} /></div>
        <div className="btn !text-violet-600 !bg-transparent">Leave Your Own Review<ArrowRight size={16} /></div>
      </div>
      <MarqueeDemo />
    </div>
    {/* FAQ */}
    <FAQ />
  </>)
}
