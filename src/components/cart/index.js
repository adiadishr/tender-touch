'use client';

import { cn } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";
import { ChevronRight, ShoppingBasket, X } from "lucide-react";
import { getLenis } from "@/lib/lenis"
import { useEffect, useState } from "react"
import CartProductCard from "./cart-product-card";

export default function Cart({ scrolled }) {

  const [cartUI, setCartUI] = useState({
    mounted: false,
    disabled: false,
    visible: false,
  });

  const { mounted, disabled, visible } = cartUI;

  function toggleVisible() {
    setCartUI(prev => ({ ...prev, visible: !prev.visible }));
  }

  useEffect(() => {
    setCartUI(prev => ({ ...prev, mounted: true }));
  }, [])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') toggleVisible()
    }
    if (visible) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [visible])

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
  }, [visible])

  useEffect(() => {
    const lenis = getLenis()
    if (!lenis) return

    if (visible) {
      lenis.stop()
    } else {
      lenis.start()
    }

    return () => {
      lenis.start() // fallback just in case
    }
  }, [visible])

  const totalUniqueItems = useCartStore((state) => state.getTotalUniqueItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const cart = useCartStore(state => state.cart);

  useEffect(() => {
    setCartUI(prev => ({ ...prev, disabled: totalUniqueItems === 0 }));
  }, [totalUniqueItems]);

  if (!mounted) return null

  return (<>
    {/* Desktop Cart Button */}
    <div
      onClick={!disabled ? toggleVisible : null}
      className={
        cn("border hidden md:flex items-center duration-500 gap-2 py-1 rounded-md px-3 cursor-pointer",
          scrolled ? "bg-violet-500 border-violet-500 hover:bg-violet-400 hover:border-violet-400 text-white" :
            "bg-transparent border-white text-white",
          disabled && "cursor-not-allowed opacity-50 !selection:bg-transparent"
        )}
    >
      <ShoppingBasket size={24} />
      <div className="flex flex-col">
        <div className={cn("font-semibold text-sm/4", disabled && "!selection:bg-transparent")}>{totalUniqueItems != 0 ? `${totalUniqueItems} items` : "Empty"}</div>
        <div className={cn("text-sm/4", disabled && "!selection:bg-transparent")}>₹{totalPrice}</div>
      </div>
    </div>
    {/* Mobile Cart Button */}
    <div onClick={toggleVisible} className="fixed shadow-2xl flex w-[90%] py-3 px-6 text-white rounded-md cursor-pointer left-[5%] bottom-6 md:hidden bg-violet-600/80 backdrop-blur justify-between items-center">
      <div className="flex items-center gap-2">
        <ShoppingBasket size={28} />
        <div className="flex flex-col">
          <div className={cn("font-semibold text-sm/4", disabled && "!selection:bg-transparent")}>{totalUniqueItems != 0 ? `${totalUniqueItems} items` : "Empty"}</div>
          <div className={cn("text-sm/4", disabled && "!selection:bg-transparent")}>₹{totalPrice}</div>
        </div>
      </div>
      <div className="flex items-center">View Cart <ChevronRight size={16} /></div>
    </div>
    {/*   Black Backdrop   */}
    <div onClick={toggleVisible} className={cn("fixed h-[100dvh] duration-500 w-full inset-0 bg-black/50 opacity-0 invisible", visible && "z-[100] opacity-100 visible backdrop-blur")} />
    {/*   List   */}
    <div className={cn("fixed z-[-500] w-full md:w-5/10 lg:w-4/10 xl:w-4/11 duration-1000 ease-quart-out overflow-hidden opacity-0 top-full right-0 md:top-0 md:-right-full", visible && "z-[500] opacity-100 top-10 right-0 md:right-0 md:top-0 flex flex-col duration-500")}>
      <div className="py-4 px-[5%] justify-between rounded-t-xl md:rounded-none bg-white text-cyan-950 w-full flex items-center">
        <div className="text-xl">My Cart</div>
        <X onClick={toggleVisible} className="cursor-pointer" size={20} />
      </div>
      <div className="w-full h-[calc(100dvh-100px)] md:h-[calc(100dvh-60px)] overflow-y-scroll p-4 bg-neutral-100">
        {cart.length === 0 ? (
          <div className="mt-10 text-center text-neutral-500">Your cart is empty.</div>
        ) : (
          cart.map(item => (
            <CartProductCard key={`${item.id}|${item.size}`} product={item} />
          ))
        )}
      </div>
    </div>
  </>)
}