import { ArrowRight, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { products as data } from "@/constants/products";
import Link from "next/link";

export default function Page() {

  const products = data.flatMap(item =>
    item.subCategories?.length
      ? item.subCategories.map(sub => ({ ...sub }))
      : [{ ...item }]
  );

  return (<>
    <div className="mb-8 text-3xl">Award Winning Diapers</div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
      {products.map((product, index) => (
        <div className="flex flex-col" key={index}>
          <div className="relative mb-4 overflow-hidden rounded-md h-max aspect-square group">
            <Image
              src={product.src}
              alt='product'
              fill
              className="object-cover duration-300 group-hover:scale-105"
            />
            <div className="absolute z-10 px-2 py-1 text-xs rounded-md bg-white/80 text-cyan-950 top-2 left-2">{product.tagline}</div>
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
          <div className="-mb-1 text-2xl tracking-tight text-cyan-950">{product.title}</div>
          <div className="mb-4 tracking-tight text-cyan-950">From ${product.price}</div>
          <Link href={`/products/${product.id}`} className="btn">Learn More <ArrowRight size={16} /></Link>
        </div>
      ))}
    </div>
  </>)
}