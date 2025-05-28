"use client"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function ProductForm({ product }) {
  const initialSize = product.sizes?.[0]
  const [currentSize, setCurrentSize] = useState(initialSize)
  return (<>
    {product.sizes && <>
      <div className="text-neutral-600">Sizes Available</div>
      <form className="flex flex-wrap gap-4">
        <input type="hidden" name="size" value={currentSize} />
        {product.sizes.map((size) => {
          return (
            <button key={size} type="button" onClick={() => setCurrentSize(size)} className={cn("px-7.5 py-2.5 border rounded-md border-neutral-200 cursor-pointer", currentSize === size && "border-violet-600")}>
              {size === 0 ? "N" : size}
            </button>
          )
        })}
      </form>
    </>}
  </>)
}