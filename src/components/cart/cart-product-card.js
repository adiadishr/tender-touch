import { useCartStore } from "@/stores/cartStore";
import Image from "next/image";

export default function CartProductCard({ product }) {

  const removeFromCart = useCartStore(state => state.removeFromCart);
  const addToCart = useCartStore(state => state.addToCart);

  const handleAdd = () => {
    addToCart({ ...product });
  };

  const handleRemove = () => {
    removeFromCart({ id: product.id, size: product.size });
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-md">
      {/* Image and product info */}
      <div className="flex gap-x-4">
        <div className="relative flex w-24 h-24 overflow-hidden border rounded-md border-neutral-200">
          <Image
            fill
            src={product.src}
            className="object-cover"
            alt={product.title}
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="font-medium text-cyan-950">{product.title}</div>
          <div className="text-sm text-neutral-700">Size: {product.size === 0 ? 'N' : product.size}</div>
          <div className="text-sm text-neutral-700">Rate: ₹{product.price}/per</div>
          <div className="text-sm text-neutral-900">
            Subtotal: ₹{product.quantity * product.price}
          </div>
        </div>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-0 text-white rounded-md w-max bg-violet-500">
        <button
          onClick={handleRemove}
          className="w-10 px-4 py-1 text-lg cursor-pointer"
        >
          -
        </button>
        <span className="px-2">{product.quantity}</span>
        <button
          onClick={handleAdd}
          className="w-10 px-4 py-1 text-lg cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );

}