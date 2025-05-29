"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { useCartStore } from "@/stores/cartStore"

export default function ProductForm({ product }) {
  const initialSize = product.sizes?.[0]
  const [currentSize, setCurrentSize] = useState(initialSize)

  const addToCart = useCartStore(state => state.addToCart)
  const removeFromCart = useCartStore(state => state.removeFromCart)
  const qty = useCartStore(state => {
    const key = `${product.id}|${currentSize}`;
    const item = state.cart.find(i => `${i.id}|${i.size}` === key);
    return item ? item.quantity : 0;
  });

  function handleAdd() {
    addToCart({
      id: product.id,
      size: currentSize,
      title: product.title,
      price: product.price,
      src: product.src,
    })
  }

  return (
    <>
      {product.sizes && (
        <>
          <div className="text-neutral-600">Sizes Available</div>
          <div className="flex flex-wrap gap-4 mb-2">
            {product.sizes.map(size => (
              <button
                key={size}
                type="button"
                onClick={() => setCurrentSize(size)}
                className={cn(
                  "px-7.5 py-2.5 border rounded-md border-neutral-200 cursor-pointer",
                  currentSize === size && "border-violet-600"
                )}
              >
                {size === 0 ? "N" : size}
              </button>
            ))}
          </div>
        </>
      )}
      {qty === 0 ? (
        <button
          onClick={() => handleAdd()}
          className="btn mt-2"
        >
          Add to Cart
        </button>
      ) : (
        <div className="w-max bg-violet-500 text-white rounded-md mt-2">
          <button
            onClick={() => removeFromCart({ id: product.id, size: currentSize })}
            className="px-4 py-1 text-lg w-10 cursor-pointer"
          >
            -
          </button>
          <span className="">{qty}</span>
          <button
            className="px-4 py-1 text-lg w-10 cursor-pointer"
            onClick={() => handleAdd()}
          >
            +
          </button>
        </div>
      )}
    </>
  )
}