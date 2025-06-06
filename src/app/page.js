import { ArrowDown, ArrowRight } from "lucide-react";
import { MarqueeDemo } from "@/components/sections/marquee";
import Link from "next/link";
import FAQ from "@/components/sections/faq";
import FeaturedProducts from "@/components/sections/featured-products";
import LandingGridItem from "@/components/sections/landing/landing-grid-item";
import { products } from "@/constants/products";

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
        <div className="mb-2 text-xl italic tracking-tight font-cursive">Tender Touch</div>
        <div className="mb-8 text-5xl tracking-tight text-center">Gentle Care for Every Moment!</div>
        <Link href="https://www.daraz.com" className="btn">Shop Now!</Link>
      </div>
      <div className="absolute flex items-center gap-2 text-xs text-white rotate-90 md:text-sm -right-8 md:right-0 top-1/2">Scroll to see more<ArrowRight size={16} /></div>
    </div>
    {/* Featured Products */}
    <FeaturedProducts />
    {/* Grid */}
    <div className="border-b border-neutral-200">
      <div className="mx-auto w-[90%] pt-10 pb-20 md:pt-20 md:pb-10 relative z-10 text-cyan-950">
        <div className="mb-4 text-3xl tracking-tight text-center md:text-left">Our Collections</div>
        <div className="max-w-lg mx-auto mb-6 tracking-tight text-center text-base/6 md:text-left md:mx-0">We offer a complete range of hygiene and care products, designed to deliver comfort, protection, and care for your every need.</div>
        <div className="flex items-center justify-center w-full gap-4 md:justify-start">
          <Link href="/products" className="btn">View All Products<ArrowRight size={16} /></Link>
          <div className="bg-transparent btn border-violet-600 text-violet-600">Scroll to see more<ArrowDown size={16} /></div>
        </div>
      </div>
      {products.map((product, index) => (
        <LandingGridItem key={product.id} product={product} index={index} />
      ))}
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
