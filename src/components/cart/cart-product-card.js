import Image from "next/image";

export default function CartProductCard({ product }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-md">
      <div className="flex gap-x-4">
        <div className="relative flex h-24 col-span-1 overflow-hidden border rounded-md aspect-square border-neutral-200">
          <Image fill src="/sanitary-pads.jpg" className="object-cover" alt="product-image" />
        </div>
        <div className="flex flex-col col-span-2 gap-0.5">
          <div className="text-cyan-950">Sanitary Pads</div>
          <div className="text-sm text-neutral-700">Size: Small</div>
          <div className="text-sm text-neutral-700" >Rate: ₹300/per</div>
          <div className="text-sm text-neutral-900">Subtotal: ₹300</div>
        </div>
      </div>
      <div className=""></div>
      <div className="flex items-center gap-0 text-white rounded-md w-max bg-violet-500">
        <button
          // onClick={() => removeFromCart({ id: product.id, size: currentSize })}
          className="w-10 px-4 py-1 text-lg cursor-pointer"
        >
          -
        </button>
        <span className="">3</span>
        <button
          className="w-10 px-4 py-1 text-lg cursor-pointer"
        // onClick={() => handleAdd()}
        >
          +
        </button>
      </div>
    </div>
  )
}