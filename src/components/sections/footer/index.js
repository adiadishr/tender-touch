import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-white bg-cyan-950">
      <div className="py-20">
        <div className="mb-8 text-3xl tracking-tight text-center">Shop Rascals at Walmart</div>
        <div className="flex items-center justify-center gap-4">
          <div className="btn">Buy Online<ArrowRight size={16} /></div>
          <div className="btn !border-white !bg-transparent">Find a Store Near You<ArrowRight size={16} /></div>
        </div>
      </div>
      <div className="grid border-y border-cyan-50/20 md:grid-cols-2">
        <div className="flex flex-col gap-6 md:py-20 px-[5%] md:px-[10%] pt-20 pb-10 md:border-r border-cyan-50/20">
          <div className="text-sm md:w-3/4">Want Rascals updates, expert advice and giveaways sent straight to your inbox?</div>
          <form className="relative flex border border-white rounded-md md:w-3/4 bg-white/10">
            <input className="w-[85%] shrink-0 p-3.5 text-sm focus:outline-none placeholder:text-white" placeholder="Enter your email" />
            <button type="submit" className="flex items-center justify-center w-full border-l border-white cursor-pointer">
              <ArrowRight size={16} />
            </button>
          </form>
          <div className="text-xs md:w-3/4">By signing up to receive emails from Rascals, you agree to our <Link href="/#" className="underline">Privacy Policy</Link>. We treat your info responsibly.</div>
          <div className=""></div>
        </div>
        <div className="md:py-20 pb-10 px-[5%] md:px-[10%]">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="text-sm uppercase">Shop</div>
              <Link className="text-sm hover:underline text-white/80" href="/all-products">All Products</Link>
              <Link className="text-sm hover:underline text-white/80" href="/premium-diapers">Premium Diapers</Link>
              <Link className="text-sm hover:underline text-white/80" href="/training-pants">Premium Training Pants</Link>
              <Link className="text-sm hover:underline text-white/80" href="/sensitive-wipes">Premium Sensitive Wipes</Link>
              <Link className="text-sm hover:underline text-white/80" href="/water-wipes">99% Water Premium Wipes</Link>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-sm uppercase">About</div>
              <Link className="text-sm hover:underline text-white/80" href="/meet-rascals">Meet Rascals</Link>
              <Link className="text-sm hover:underline text-white/80" href="/about">About Us</Link>
              <Link className="text-sm hover:underline text-white/80" href="/reviews">Reviews</Link>
              <Link className="text-sm hover:underline text-white/80" href="/blog">Blog</Link>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-sm uppercase">Social</div>
              <Link className="text-sm hover:underline text-white/80" href="https://instagram.com" target="_blank">Instagram</Link>
              <Link className="text-sm hover:underline text-white/80" href="https://tiktok.com" target="_blank">TikTok</Link>
              <Link className="text-sm hover:underline text-white/80" href="https://facebook.com" target="_blank">Facebook</Link>
              <Link className="text-sm hover:underline text-white/80" href="https://pinterest.com" target="_blank">Pinterest</Link>
            </div>

          </div>
        </div>
      </div>
      <div className="py-20 text-center text-5xl lg:text-7xl font-cursive overflow-hidden !selection:bg-transparent cursor-default">
        <div className="-rotate-5 w-max mx-auto cursor-default !selection:bg-transparent"><Link href="/">Tender Touch</Link></div>
      </div>
      <div className="px-[5%] tracking-normal pb-10 md:pb-4 w-full flex flex-col items-center md:flex-row md:justify-between text-xs gap-2 md:gap-0">
        <div>
          2024. All Rights Reserved. Rascals International Limited.
        </div>
        <div className="flex gap-4">
          <Link href="/#" className="hover:underline">Privacy Policy</Link>
          <Link href="/#" className="hover:underline">Terms of Service</Link>
          <Link href="/#" className="hover:underline">Cookie Policy</Link>
        </div>
      </div>
    </div>
  )
}