"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";
import { useState } from "react"

export default function ProductForm({ product }) {

  const [currentVariantIndex, setcurrentVariantIndex] = useState(0);

  return (
    <>
      <div className="text-neutral-600">Sizes Available</div>
      <div className="flex flex-wrap gap-4 mb-2">
        {product.variants.map((variant, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setcurrentVariantIndex(product.variants.indexOf(variant))}
            className={cn(
              "px-7.5 py-2.5 border rounded-md border-neutral-200 cursor-pointer",
              currentVariantIndex === index && "border-violet-600"
            )}
          >
            {variant.label} @ <span className="line-through text-neutral-400">₹{variant.originalPrice}</span> <span>₹{variant.discountedPrice}</span>
          </button>
        ))}
      </div>
      <Link target="_blank" rel="noopener noreferrer" href={product.links[currentVariantIndex]} className="btn">Shop Now at Daraz</Link>
    </>
  )
}