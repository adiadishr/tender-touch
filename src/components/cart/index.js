'use client';

import { cn } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";
import { ChevronRight, ShoppingBasket, X } from "lucide-react";
import { useEffect, useState } from "react"

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

  const totalUniqueItems = useCartStore((state) => state.getTotalUniqueItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  useEffect(() => {
    setCartUI(prev => ({ ...prev, disabled: totalUniqueItems === 0 }));
  }, [totalUniqueItems]);

  if (!mounted) return null

  return (<>
    {/* Desktop Cart Button */}
    <div
      onClick={!disabled ? toggleVisible : null}
      className={cn("relative border hidden md:flex items-center duration-500 gap-2 py-1 rounded-md px-3 cursor-pointer",
        scrolled ? "bg-violet-500 border-violet-500 hover:bg-violet-400 hover:border-violet-400 text-white backdrop-blur"
          : "bg-transparent border-white text-white",
        disabled && "cursor-not-allowed opacity-50 !selection:bg-transparent"
      )}>
      <ShoppingBasket size={24} />
      <div className="flex flex-col">
        <div className={cn("font-semibold text-sm/4", disabled && "!selection:bg-transparent")}>{totalUniqueItems != 0 ? `${totalUniqueItems} items` : "Empty"}</div>
        <div className={cn("text-sm/4", disabled && "!selection:bg-transparent")}>${totalPrice}</div>
      </div>
    </div>
    {/* Mobile Cart Button */}
    <div onClick={toggleVisible} className="fixed shadow-2xl flex w-[90%] py-2 px-4 text-white rounded-md cursor-pointer left-[5%] bottom-4 md:hidden bg-violet-600/80 backdrop-blur justify-between items-center">
      <div className=""></div>
      <div className="flex items-center">View Cart <ChevronRight size={16} /></div>
    </div>
    {/* Cart UI */}
    <div className={cn("fixed -z-[100] h-[100dvh] white duration-500 w-full inset-0 bg-black/50 opacity-0 invisible", visible && "z-[100] opacity-100 visible")}>
      <div className="absolute right-0 top-0 z-[500] bg-white w-full md:w-1/3 h-[100dvh]">
        <X onClick={toggleVisible} className="absolute cursor-pointer text-cyan-950 top-4 right-4" size={20} />
      </div>
    </div>
  </>)
}