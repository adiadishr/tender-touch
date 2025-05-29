import FAQ from "@/components/sections/faq";
import FeaturedProducts from "@/components/sections/featured-products";
import ProductForm from "@/components/sections/products/product-form";
import { products } from "@/constants/products";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params
  const product = products.find(item => item.id === id);
  if (!product) {
    notFound()
  }
  return (<>
    {/* Main Product Screen */}
    <div className="grid w-full grid-cols-1 gap-10 pb-10 lg:grid-cols-12">
      <div className="relative col-span-1 lg:col-span-5">
        <div className="lg:sticky lg:h-max lg:top-30">
          <div className="relative overflow-hidden rounded-md h-96 lg:h-auto lg:aspect-square">
            <Image fill src={product.src} alt="blog" className="object-cover duration-500 group-hover:scale-105" />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col col-span-1 gap-4 lg:col-span-7">
        <Link href="/products" className="absolute top-0 right-0 btn">Go back</Link>
        <div className="text-sm">{product.tagline}</div>
        <div className="text-3xl">{product.title}</div>
        <div className="text-lg">Starting from ${product.price}</div>
        <div className="flex flex-col gap-2 md:items-center md:flex-row">
          <div className="flex gap-2">
            {[1, 1, 1, 1, 0.5].map((val, i) =>
              val === 1
                ? <Star key={i} size={13} className="text-yellow-500" fill="oklch(79.5% 0.184 86.047)" />
                : <StarHalf key={i} size={13} className="text-yellow-500" fill="oklch(79.5% 0.184 86.047)" />
            )}

          </div>
          <div className="text-sm tracking-tight underline text-cyan-950">4.58/5 based on 17749 reviews</div>
        </div>
        <div className="text-base/6">
          {product.desc}
        </div>
        <ProductForm product={product} />
      </div>
    </div>
    {/* FAQs */}
    <FAQ className="w-full pt-10 pb-0" />
    {/* Other Featured Products */}
    <FeaturedProducts inProductPage />
  </>)
}